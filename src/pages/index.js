import { Link } from 'react-router-dom';
import { StyledContainer } from './styles';
import { Spinner, useDeferredRoute } from '../hooks';
import StandardButton from '../lib/Materials/StandardButton';

function Home() {
  const { loading } = useDeferredRoute(1500);

  if (loading) return <Spinner />;

  return (
    <StyledContainer className="home">
      <StandardButton
        as={Link}
        to="/judge"
        color="primary"
        text="Судейство"
        className="home__button"
      />
    </StyledContainer>
  );
}

export default Home;
