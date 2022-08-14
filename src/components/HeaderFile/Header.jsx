import React, { useState } from 'react'
import {Navbar, Nav, Button, Container, Dropdown} from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import {useNavigate} from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import navLinkNavigation from '../functions/HandleClickNavigator'
import LoginModalView from '../modals/LoginModalView'
import AdminRegModalForm from '../modals/AdminRegModalForm';
import RegistrationModalView from '../modals/RegistrationModalView'
import AdminElements from './AdminElements';
import UserElements from './UserElements';
import ClientElements from './ClientElements';



function Header () {
    const navigate = navLinkNavigation(useNavigate())
    const dispatch = useDispatch()
    //console.log(userStore)
    const [adminRegistrationVisible, setAdminRegistrationVisible] = useState(false)
    const [loginVisible, setLoginVisible] = useState(false)
    const [registrationVisible, setRegistrationVisible] = useState(false)
    /*
    const isAuth = useState(JSON.parse(sessionStorage.getItem("isAuth")))
    const isUser = useState(JSON.parse(sessionStorage.getItem("isUser")))
    const isAdmin = useState(JSON.parse(sessionStorage.getItem("isAdmin")))
    */
    const { isAuth } = useSelector(state => ({
        isAuth: state.users.isAuth
    }), shallowEqual)
    const { isUser } = useSelector(state => ({
        isUser: state.users.isUser
      }), shallowEqual)
    const { isAdmin } = useSelector(state => ({
        isAdmin: state.users.isAdmin
    }), shallowEqual)

    const getElement = () => {
        /*const elements :{
            admin: <Nav.Link onClick={()=>navigate('/admin')}>Admin</Nav.Link>

        }
        */
        if(isAuth === true && isUser === true && isAdmin=== true){
            return <AdminElements/>
        }
        else 
        if(isAuth === true && isUser=== true){
            return <UserElements/>
        }else
        if(isAuth === true){
            return <ClientElements/>
        }
    }

    const LogOut =() =>{
        sessionStorage.clear()
        dispatch({
            type:'LOGOUT'
          })
    }

    return (
        <Navbar bg="dark" variant="dark">   
                
                    <Container> 
                        <Nav className="me-auto">
                            <Nav.Link onClick={()=>navigate('/')}>Main</Nav.Link>
                            <Nav.Link onClick={()=>navigate('/contacts')}>Contacts</Nav.Link>
                            <Nav.Link onClick={()=>navigate('/info')}>Info</Nav.Link>
                            {getElement()}

                        </Nav>

                        <Nav className="ms-auto">
                        {isAuth===true?
                            (
                                <>
                                    <Button variant={"outline-light"} onClick={() => (LogOut())}>Out</Button>
                                </>
                            )
                            :
                            (  <>
                                <Button variant={"outline-light"} onClick={() => setLoginVisible(true)}>Login</Button>
                                <Button variant={"outline-light"} onClick={()=> setRegistrationVisible(true)} className="ms-1">Registration</Button>
                                
                                <LoginModalView show={loginVisible} onHide={() => setLoginVisible(false)}/>
                                <RegistrationModalView show={registrationVisible} onHide={() => setRegistrationVisible(false)} change={() =>setAdminRegistrationVisible(true)}/>
                                <AdminRegModalForm show={adminRegistrationVisible} onHide={() => setAdminRegistrationVisible(false)} change={() =>setRegistrationVisible(true)}/>
                                </>
                            )
                            
                        }
                        </Nav>
                            
                    </Container>
                
        </Navbar>
    )
}

export default observer(Header)