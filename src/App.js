import Logo from './logo.svg';
import './App.css';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Wrapper, Container } from './components/Styled';
import Author from './components/Author';

function App() {
  return (
    <Wrapper>
      <Container>
        <Author logo={Logo} subject={'Cloud Computing'} studentId={'116010905118-6'} fullname={'นายณัฐวุฒิ มีสามเสน'} section={2} />
        <p className="display-5 fw-bolder fc-accent my-3">Todo List App</p>
      </Container>
    </Wrapper>
  );
}

export default App;
