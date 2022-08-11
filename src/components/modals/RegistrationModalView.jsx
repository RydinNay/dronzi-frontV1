import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import userStore from '../../store/UserStore'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

function RegistrationModalView({show, onHide}) {
    const dispatch = useDispatch()
    const [CheckIsUserGenderFilter, setCheckIsUserGenderValue] = React.useState(false);
    const [CheckIsAdminGenderFilter, setCheckIsAdminGenderValue] = React.useState(false);
  
    const [userName, setUserName] = React.useState()
    const [userEmail, setUserEmail] = React.useState()
    const [userPass, setUserPass] = React.useState()
    const [userTel, setUserTel] = React.useState()

    const { user } = useSelector(state => ({
      selectedDron: state.users.users
    }), shallowEqual)
  
      const handleClick = () => {
          userStore.setIsAuth(true)
          if(CheckIsUserGenderFilter){
            userStore.setIsUser(true)
            if(CheckIsAdminGenderFilter){
                userStore.setIsAdmin(true)
            }
          }
  
          dispatch({
            type:'PUT_USERS',
            payload: user
          })
  
          onHide()
      }
  
      
  
    return (
      <Modal show={show} onHide={onHide}>
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
              <Form>
                  
                  <Form.Check 
                      type="checkbox"
                      id={`1`}
                      label={`Is User`}
                      value={CheckIsUserGenderFilter}
                      onChange={(e)=>{setCheckIsUserGenderValue(e.target.checked)}}
                  />
                  <Form.Check 
                      type="checkbox"
                      id={`2`}
                      label={`Is Admin`}
                      value={CheckIsAdminGenderFilter}
                      onChange={(e)=>{setCheckIsAdminGenderValue(e.target.checked)}}
                      
                  />
  
                  
              </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
              change this later
            </Button>
            <Button variant="primary" onClick={handleClick}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
    )
}

export default RegistrationModalView