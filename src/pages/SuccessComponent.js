import { Link, useNavigate } from 'react-router-dom';
import { Container, Button } from 'semantic-ui-react';

import { Spinner, useDeferredRoute, useTimeout } from '../hooks';

function Success() {
  const { loading } = useDeferredRoute(500);
  const navigate = useNavigate();

  const redirectToHomePage = () => {
    navigate('/');
  };

  useTimeout(redirectToHomePage, 3000);

  if (loading) return <Spinner />;

  return (
    <Container>
      <h2>Записано!</h2>
      <h3>Сейчас вы будете перенаправлены на главную страницу</h3>
      <Button color="teal" as={Link} to="/">
        На главную
      </Button>
    </Container>
  );
}

export default Success;
