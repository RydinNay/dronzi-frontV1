import React from 'react'
import axios from 'axios'
import { useTranslation } from 'react-i18next';
import { Button, Form, Modal,Card, Container } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

function AdminAdd({show, onHide, user}) {
    const [userName, setUserName] = React.useState()
    const [userEmail, setUserEmail] = React.useState()
    const [userPass, setUserPass] = React.useState()
    const [userTel, setUserTel] = React.useState()

    const { t, i18n } = useTranslation()

    const addDron=()=>{
        axios.post("http://127.0.0.1:5000/Users/register", {"username": userName, "email": userEmail, "telephon": userTel, "password": userPass, 
        "roleid": 2, "baseid":user.dron_baseid}, {headers:{"Content-Type": "application/json"}} 
          ).then((response) => {
                console.log(response.data)
            }).catch((error) => {
                console.log(error)
            })
        onHide()
    }

  return (
    <Modal  onHide={onHide}
    size="lg"
    show={show}
        
    aria-labelledby="example-modal-sizes-title-lg"
    >
        <Modal.Header closeButton onClick={onHide}>
            <Modal.Title>{t("UserAddForm")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Card className="">
                <Container className="m-1 me-auto ms-auto">
                  <Form>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>{t("StatisticEnterUserName")}</Form.Label>
                      <Form.Control
                          type="text"
                          placeholder="name@example.com"
                          onChange={e => setUserName(e.target.value)}
                      />
                      
                      <Form.Label>{t("StatisticEnterUserEmailAdress")}</Form.Label>
                      <Form.Control
                          type="text"
                          placeholder="****@gmail.com"
                          onChange={e => setUserEmail(e.target.value)}
                      />
                      <Form.Label>{t("StatisticEnterUserPass")}</Form.Label>
                      <Form.Control
                          type="password"
                          placeholder="pass"
                          onChange={e => setUserPass(e.target.value)}
                      />
                      <Form.Label>{t("StatisticEnterUserTel")}</Form.Label>
                      <Form.Control
                          type="text"
                          placeholder="+380*****"
                          onChange={e => setUserTel(e.target.value)}
                      />
                    </Form.Group>
                  </Form>
                </Container>
                
            </Card>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={() => addDron()}>
                {t("AddUser")}
            </Button>
            
        </Modal.Footer>
    </Modal>  
    )
}

export default AdminAdd