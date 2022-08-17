import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function LoginModalView({show, onHide}) {
  const dispatch = useDispatch()
  const [CheckIsUserGenderFilter, setCheckIsUserGenderValue] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState()
  const [userPass, setUserPass] = React.useState()
  const [isAdmin, setIsAdmin] = React.useState()

    const Login = () => {
        if(CheckIsUserGenderFilter){
          axios.get("http://127.0.0.1:5000/Users/login", {params:{"email": userEmail, "password": userPass}}).then((response) => {
            console.log(response.data.data) 
            if(response.data.data === undefined) return 
            sessionStorage.setItem("user", JSON.stringify(response.data.data))
            sessionStorage.setItem("isAuth", (true))
            sessionStorage.setItem("isUser", (true))
            if(response.data.data.user_roleid === 1){
              sessionStorage.setItem("isAdmin", (true))
              dispatch({
                type:'POST_USER',
                payload: response.data.data,
                isAuth: true,
                isUser: true,
                isAdmin: true
              })
            }
            else {
              sessionStorage.setItem("isAdmin", (false))
              dispatch({
                type:'POST_USER',
                payload: response.data.data,
                isAuth: true,
                isUser: true,
                isAdmin: false
              })
            }
            
          })  
        }else{
          axios.get("http://127.0.0.1:5000/Client/login", {params:{"email": userEmail, "password": userPass}}).then((response) => {
            console.log(response.data.data)
          
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
        }
        
        onHide()
      
    }
    
    const { t, i18n } = useTranslation()

  return (
    <Modal show={show} onHide={onHide}  backdrop="static">
        <Modal.Header closeButton onClick={onHide}>
          <Modal.Title>{t("Lform")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>{t("EnterEmailLform")}</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    //autoFocus
                    onChange={(e)=>{setUserEmail(e.target.value)}}
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>{t("EnterPassLform")}</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="pass"
                    //autoFocus
                    onChange={(e)=>{setUserPass(e.target.value)}}
                />
                </Form.Group>
                <Form.Check 
                      type="checkbox"
                      id={`1`}
                      label={t("isUserLform")}
                      value={CheckIsUserGenderFilter}
                      onChange={(e)=>{setCheckIsUserGenderValue(e.target.checked)}}
                  />
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            change this later
          </Button>
          <Button variant="primary" onClick={Login}>
            {t("LoginLform")}
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default LoginModalView