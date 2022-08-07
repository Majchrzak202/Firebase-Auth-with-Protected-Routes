import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import ResetPassword from "./components/ResetPassword";
import ResetSucces from "./components/ResetSucces";
import "./App.css";
import { UserAuthContextProvider } from "./context/UserAuthContextProvider";


function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Router>
            <UserAuthContextProvider>
              <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route
                  path="/home"
                  element={
                    <ProtectedRoute>
                      <Home />
                    </ProtectedRoute>
                  }
                ></Route>
                <Route path='/reset' element={<ResetPassword/>}></Route>
                <Route path='/resetsucces' element={<ResetSucces/>}></Route>
              </Routes>
            </UserAuthContextProvider>
          </Router>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
