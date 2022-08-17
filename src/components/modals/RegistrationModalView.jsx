import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';
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
  
    const { t, i18n } = useTranslation()

    return (
      <Modal show={show} onHide={onHide} backdrop="static">
          <Modal.Header closeButton onClick={onHide}>
            <Modal.Title>{t("Rform")}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>{t("EnterNameRform")}</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="name@example.com"
                        onChange={e => setUserName(e.target.value)}
                    />
                    
                    <Form.Label>{t("EnterEmailRform")}</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="****@gmail.com"
                        onChange={e => setUserEmail(e.target.value)}
                    />
                    <Form.Label>{t("EnterPassRform")}</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="pass"
                        onChange={e => setUserPass(e.target.value)}
                    />
                    <Form.Label>{t("EnterTelRform")}</Form.Label>
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
              {t("CloseRform")}
            </Button>

            <Button variant="primary" onClick={openAdminRegistr}>
              {t("RegistrateAsOwner")}
            </Button>
            
            <Button variant="primary" onClick={Registrate}>
              {t("Registrate")}
            </Button>
          </Modal.Footer>
        </Modal>
    )
}

export default RegistrationModalView