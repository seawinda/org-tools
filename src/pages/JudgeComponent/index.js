import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import { StyledContainer, StyledButton } from '../styles';

import { Spinner, useDeferredRoute } from '../../hooks';

const isEmpty = (fields) => fields.some((f) => f.trim() === '');

function Judge() {
  const [formData, setFormData] = useState({
    paticipantNumber: '',
  });
  const [error, setError] = useState(null);

  const { loading } = useDeferredRoute(1000);
  const navigate = useNavigate();

  const onChange = ({ target: { name, value } }) => {
    setError(null);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
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
    <StyledContainer className="judge">
      <h2>Судейство</h2>
      <Form onSubmit={onSubmit} className="judge__form">
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

        <StyledButton className="judge__button" type="submit" disabled={disabled}>
          Отправить
        </StyledButton>
      </Form>
    </StyledContainer>
  );
}

export default Judge;
