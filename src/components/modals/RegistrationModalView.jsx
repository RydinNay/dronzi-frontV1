import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function RegistrationModalView({show, onHide, change}) {
    const dispatch = useDispatch()
    const [userName, setUserName] = React.useState()
    const [userEmail, setUserEmail] = React.useState()
    const [userPass, setUserPass] = React.useState()
    const [userTel, setUserTel] = React.useState()

    const { user } = useSelector(state => ({
      selectedDron: state.users.users
    }), shallowEqual)
  
      const Registrate = () => {
        axios.post("http://127.0.0.1:5000/Client/register", 
          {"username": userName, "email": userEmail, "telephon": userTel, "password": userPass}, {headers:{"Content-Type": "application/json"}} 
          ).
          then((response) => {
            console.log(response.data)
            sessionStorage.setItem("user", JSON.stringify(response.data.data))
            sessionStorage.setItem("isAuth", (true))
            sessionStorage.setItem("isUser", (false))
            sessionStorage.setItem("isAdmin", (false))
            dispatch({
              type:'POST_USER',
              payload: response.data.data,
              isAuth: true,
              isUser: false,
              isAdmin: false
            })
          })
          .catch((error) => {
          console.log(error)
          }
        );
  
          onHide()
      }
  

      const openAdminRegistr=()=>{
        change()
        onHide()
      }
  

    return (
      <Modal show={show} onHide={onHide} backdrop="static">
          <Modal.Header closeButton onClick={onHide}>
            <Modal.Title>Registration Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Enter your Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="name@example.com"
                        onChange={e => setUserName(e.target.value)}
                    />
                    
                    <Form.Label>Enter your Email Adress</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="****@gmail.com"
                        onChange={e => setUserEmail(e.target.value)}
                    />
                    <Form.Label>Enter your Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="pass"
                        onChange={e => setUserPass(e.target.value)}
                    />
                    <Form.Label>Enter your Telephone</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="+380*****"
                        onChange={e => setUserTel(e.target.value)}
                    />
                  </Form.Group>
              </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
              Close
            </Button>

            <Button variant="primary" onClick={openAdminRegistr}>
              Registrate as Owner
            </Button>
            
            <Button variant="primary" onClick={Registrate}>
              Registrate
            </Button>
          </Modal.Footer>
        </Modal>
    )
}

export default RegistrationModalView