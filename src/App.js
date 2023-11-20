import logo from './logo.svg';
import './App.css';
import Loginform from './Components/loginform';
import Signupform from './Components/Signupform';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import { Col, Row, Container } from 'react-bootstrap';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './Components/ProtectedRoute'


function App() {
  return (
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Loginform />} />
                <Route path="/signup" element={<Signupform />} />
                <Route path="/home"
                  element={<ProtectedRoute><Home /></ProtectedRoute>} />
              </Routes>
            </BrowserRouter>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>

  );
}

export default App;
