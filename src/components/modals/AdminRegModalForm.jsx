import React from 'react'
import { Button, Form, Modal, Tabs, Tab, Container, Card } from 'react-bootstrap'
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

function AdminRegModalForm({show, onHide, change}) {
    const dispatch = useDispatch()
    const [userName, setUserName] = React.useState()
    const [userEmail, setUserEmail] = React.useState()
    const [userPass, setUserPass] = React.useState()
    const [userTel, setUserTel] = React.useState()
    const [companyName, setCompanyName]= React.useState()
    const [companyPass, setCompanyPass]= React.useState()
    const [tabSelect, setTabSelect] =React.useState("For User")

  
    const Registrate = () => {
          axios.post("http://127.0.0.1:5000/Users/register", {"username": userName, "email": userEmail, "telephon": userTel, "password": userPass, 
          "roleid": 1, "companyName": companyName, "companyPass":companyPass, "isAdmin":true}, {headers:{"Content-Type": "application/json"}} 
            ).
            then((response) => {
            console.log(response.data)
            sessionStorage.setItem("user", JSON.stringify(response.data.data))
            sessionStorage.setItem("isAuth", (true))
            sessionStorage.setItem("isUser", (true))
            sessionStorage.setItem("isAdmin", (true))
            dispatch({
              type:'POST_USER',
              payload: response.data.data,
              isAuth: true,
              isUser: true,
              isAdmin: true
            })
            })
            .catch((error) => {
            console.log(error)
            }
          )
        onHide()
    }
  
      const openRegistr=()=>{
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
            <Card>
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
                      <Form.Label>{t("EnterComNameRform")}</Form.Label>
                      <Form.Control
                          type="text"
                          placeholder="Company Name"
                          onChange={e => setCompanyName(e.target.value)}
                      />
                      <Form.Label>{t("EnterComPassEform")}</Form.Label>
                      <Form.Control
                          type="password"
                          placeholder="*****"
                          onChange={e => setCompanyPass(e.target.value)}
                      />
                    </Form.Group>
                  </Form>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
              {t("CloseRform")}
            </Button>

            <Button variant="primary" onClick={openRegistr}>
              {t("RegistrateAsClient")}
            </Button>
            
            <Button variant="primary" onClick={Registrate}>
              {t("Registrate")}
            </Button>
          </Modal.Footer>
        </Modal>
    )
}

export default AdminRegModalForm