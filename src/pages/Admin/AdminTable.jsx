import React from 'react'
import { useTranslation } from 'react-i18next';
import {Container, Form, Table} from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

function AdminTable({droneBase, users}) {
    
    const [CheckIsDronGenderFilter, setCheckIsDronGenderValue] = React.useState(false);

    const { selectedUsers } = useSelector(state => ({
        selectedUsers: state.users.selectedUser
    }), shallowEqual)

    const { t, i18n } = useTranslation()

    const dispatch = useDispatch();

        const selectUser = (e)=>{

            if(e.target.checked){
                selectedUsers.push(parseInt(e.target.id))
            }
            else{
                
                let i = selectedUsers.length - 1
                while(parseInt(e.target.id) !== selectedUsers[i]){
                    i = i-1
                }
                selectedUsers.splice(i, 1) 
                
            }

            dispatch({
                type:'SELECT_USER',
                payload: selectedUsers
            })
        
        }
    
    return (
    <Container>
    <Table striped bordered hover variant="dark" className="m-2 me-auto ms-auto" >

        <thead>
            <tr>
                <th>id</th>
                <th>{t("UserName")}</th>
                <th>{t("UserTel")}</th>
                <th>{t("UserEmail")}</th>
                <th>{t("UserDronBaseid")}</th>
                <th>{t("DronBaseName")}</th>
                <th>{t("Selected")}</th>
            </tr>
        </thead>
        <tbody id='table1'>
        { 
            users.map(user => 
                
                    <tr key={user.Userid}>
                        <td>{user.Userid}</td>
                        <td>{user.UserName}</td>
                        <td>{user.UserTel}</td>
                        <td>{user.UserEmail}</td>
                        <td>{user.UserDronBaseid}</td>
                        <td>{droneBase.find(id => id.DronBaseid === user.UserDronBaseid).CompanyName}</td>
                        <td>
                            
                            <Form.Check 
                                label={t("Selected")}
                                type="checkbox"
                                id={user.Userid}
                                value={CheckIsDronGenderFilter}
                                onChange={(e)=>{selectUser(e)}}
                            />
                            
                        </td>
                    </tr>
            )
        }
        </tbody>

    </Table>  
    
    
    </Container>
    )
}

export default AdminTable