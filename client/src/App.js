import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import MainPage from './Components/MainPage/MainPage';
import NavBar from './Components/Menu/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <MainPage />
      </Container>

    </>

  );
}

export default App;
