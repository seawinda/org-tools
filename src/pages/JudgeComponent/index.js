import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Dropdown } from 'semantic-ui-react';
import { Chip } from '@mui/material';
import styled from 'styled-components';
import { StyledContainer } from '../styles';
import StandardButton from '../../lib/Materials/StandardButton';
import { Spinner, useDeferredRoute } from '../../hooks';

const fineOptions = [
  { key: 1, text: 'Сход', value: 'leave' },
  { key: 2, text: 'Штраф', value: 'fine' },
];

const StyledJudge = styled(StyledContainer)`
  .judge__title {
    font-family: ${(props) => props.theme.decorFont};
    text-transform: uppercase;
  }
  .judge__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 300px;
    z-index: 1;
    position: relative;
  }
  .judge__field {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  .judge__paticipant {
    background-color: #fff;
  }
`;

const isEmpty = (fields) => {
  return fields.some((f) => {
    if (Array.isArray(f)) return f.length === 0;
    return f.trim() === '';
  });
};

const Judge = (props) => {
  const [formData, setFormData] = useState({
    fine: 'Сход',
    paticipants: [],
  });
  const [error, setError] = useState(null);
  const [fineValue, setFineValue] = useState('leave');
  const [paticipantNumbers, setPaticipantNumbers] = useState('');
  const [paticipantNumbersArray, setPaticipantNumbersArray] = useState([]);

  const { loading } = useDeferredRoute(1000);
  const navigate = useNavigate();

  const onChangeFine = (e, { value }) => {
    setError(null);
    setFineValue(value);
    let fineOption = fineOptions.find((x) => x.value === value);
    if (fineOption)
      setFormData({
        ...formData,
        fine: fineOption.text,
      });
    else setError('Что-то пошло не так');
  };

  const onChangeNumbers = ({ target: { value } }) => {
    setError(null);
    setPaticipantNumbers(value.replace(/[^0-9\s]/, ''));
  };

  const onAddPaticipants = () => {
    if (paticipantNumbers.length > 0) {
      pushPaticipants();
      setPaticipantNumbers('');
    }
  };

  const pushPaticipants = () => {
    let paticipants = [...paticipantNumbersArray];
    let newPaticipants = paticipantNumbers
      .trim()
      .split(' ')
      .filter((x) => x.trim() !== null);
    paticipants = paticipants.concat(newPaticipants);
    paticipants = [...new Set(paticipants)];
    setPaticipantNumbersArray(paticipants);
    setFormData({
      ...formData,
      paticipants: paticipants,
    });
  };

  const onDelete = (item) => {
    let newPaticipantNumbersArray = paticipantNumbersArray.filter((x) => x !== item);
    setPaticipantNumbersArray(newPaticipantNumbersArray);
    setFormData({
      ...formData,
      paticipants: newPaticipantNumbersArray,
    });
  };

  const onSubmit = async () => {
    pushPaticipants();
    if (paticipantNumbersArray.length === 0) {
      return setError('Введите номера участников');
    }
    if (paticipantNumbersArray.length === 0) {
      return setError('Введите номера участников');
    }
    try {
      const response = await fetch(`/.netlify/functions/judge`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        const json = await response.json();
        return setError(json.error);
      }
      navigate('/success');
    } catch (err) {
      console.error(err);
    }
  };

  const disabled = isEmpty(Object.values(formData));
  const disabledAdd = paticipantNumbers?.length === 0;

  if (loading) return <Spinner />;

  return (
    <>
      <StyledJudge className="judge">
        <h2 className="judge__title">Судейство</h2>
        <Form className="judge__form">
          <Form.Field className="judge__field">
            <label>Штраф / сход</label>
            <Dropdown
              options={fineOptions}
              value={fineValue}
              onChange={onChangeFine}
              fluid
              selection
            />
          </Form.Field>
          {fineValue === 'fine' && (
            <Form.Field className="judge__field">
              <label>Цвет карточки</label>
            </Form.Field>
          )}
          <Form.Field className="judge__field">
            <label>Номера участников через пробел</label>
            <div className="judge__add-numbers">
              <input
                placeholder="Номера участников"
                type="text"
                name="paticipantNumber"
                value={paticipantNumbers}
                onChange={onChangeNumbers}
                required
              />
              <StandardButton
                onClick={onAddPaticipants}
                color="primary"
                text="Добавить"
                className="judge__button_add"
                disabled={disabledAdd}
              />
            </div>
            <div className="judge__numbers">
              {paticipantNumbersArray.map((item, index) => (
                <Chip
                  className="judge__paticipant"
                  key={`paticipant_${index * 1}`}
                  label={item}
                  onDelete={() => onDelete(item)}
                />
              ))}
            </div>
          </Form.Field>

          <p className="error">{error}</p>
          <StandardButton
            onClick={onSubmit}
            color="primary"
            text="Отправить"
            className="judge__button"
            disabled={disabled}
          />
        </Form>
      </StyledJudge>
    </>
  );
};

export default Judge;
