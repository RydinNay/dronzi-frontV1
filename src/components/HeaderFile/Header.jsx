import React, { useState } from 'react'
import {Navbar, Nav, Button, Container, Dropdown} from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import {useNavigate} from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import navLinkNavigation from '../functions/HandleClickNavigator'
import LoginModalView from '../modals/LoginModalView'
import AdminRegModalForm from '../modals/AdminRegModalForm';
import RegistrationModalView from '../modals/RegistrationModalView'
import AdminElements from './AdminElements';
import UserElements from './UserElements';
import ClientElements from './ClientElements';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';


function Header () {
    const navigate = navLinkNavigation(useNavigate())
    const dispatch = useDispatch()
    const [adminRegistrationVisible, setAdminRegistrationVisible] = useState(false)
    const [loginVisible, setLoginVisible] = useState(false)
    const [registrationVisible, setRegistrationVisible] = useState(false)
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

    const { t, i18n } = useTranslation()

    return (
        <Navbar bg="dark" variant="dark">   
                
                    <Container> 
                        <Nav className="me-auto">
                            <Nav.Link onClick={()=>navigate('/')}>{t("Main")}</Nav.Link>
                            <Nav.Link onClick={()=>navigate('/contacts')}>{t("Contacts")}</Nav.Link>
                            <Nav.Link onClick={()=>navigate('/info')}>{t("Info")}</Nav.Link>
                            {getElement()}

                        </Nav>

                        <Nav className="ms-auto" navbar>
                            <Dropdown>
                                <DropdownToggle>
                                    {t("ChangeLanguage")}
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={() => i18n.changeLanguage("ua")}>
                                        Ua
                                    </DropdownItem>
                                    <DropdownItem onClick={() => i18n.changeLanguage("en")}>
                                        En
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            
                        {isAuth===true?
                            (
                                <>
                                    <Button variant={"outline-light"} onClick={() => (LogOut())} className="ms-1">{t("Out")}</Button>
                                </>
                            )
                            :
                            (  <>
                                <Button variant={"outline-light"} onClick={() => setLoginVisible(true)} className="ms-1">{t("Login")}</Button>
                                <Button variant={"outline-light"} onClick={()=> setRegistrationVisible(true)} className="ms-1">{t("Registration")}</Button>
                                
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