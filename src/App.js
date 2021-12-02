
import './App.css';
import ProfilPhoto from './component/Profil/ProfilPhoto';
import 'bootstrap/dist/css/bootstrap.min.css';
import FullName from './component/Profil/FullName';
import Adresse from './component/Profil/Adresse';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
      <Row>
      <Col>
         <ProfilPhoto />
         </Col>
         <Col>
         <div className="text-profil">
          <FullName />
          <Adresse />
          </div>
        </Col>
        </Row>
        </Container>
 <Footer/>
      </div>
        );
}

        export default App;
