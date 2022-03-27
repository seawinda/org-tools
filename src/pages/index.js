import { Link } from 'react-router-dom';
import { StyledContainer, StyledButton } from './styles';
import { Spinner, useDeferredRoute } from '../hooks';

function Home() {
  const { loading } = useDeferredRoute(1500);

  if (loading) return <Spinner />;

  return (
    <StyledContainer className="home">
      <StyledButton className="home__button" as={Link} to="/judge">
        Судейство
      </StyledButton>
    </StyledContainer>
  );
}

export default Home;
