import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import styled from 'styled-components';
import { StyledContainer } from '../styles';
import StandardButton from '../../lib/Materials/StandardButton';
import { Spinner, useDeferredRoute } from '../../hooks';
import { Dropdown } from 'semantic-ui-react';

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
`;

const isEmpty = (fields) => fields.some((f) => f.trim() === '');

const Judge = (props) => {
  const [formData, setFormData] = useState({
    fine: 'Сход',
    paticipantNumber: '',
  });
  const [error, setError] = useState(null);
  const [fineValue, setFineValue] = useState('leave');

  const { loading } = useDeferredRoute(1000);
  const navigate = useNavigate();

  const onChange = ({ target: { name, value } }) => {
    setError(null);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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

  const onSubmit = async () => {
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

  const { paticipantNumber } = formData;

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
          <Form.Field className="judge__field">
            <label>Номер участника</label>
            <input
              placeholder="Имя"
              type="number"
              name="paticipantNumber"
              value={paticipantNumber}
              onChange={onChange}
              required
            />
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
