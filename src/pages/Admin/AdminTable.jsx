import React from 'react'
import {Container, Form, Table} from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

function AdminTable({droneBase, users}) {

    console.log(droneBase)
    console.log(users)

    const [CheckIsDronGenderFilter, setCheckIsDronGenderValue] = React.useState(false);

    const { selectedDronsOnTasks } = useSelector(state => ({
        selectedDronsOnTasks: state.drons_on_tasks.selectedDronsOnTasks
    }), shallowEqual)

    const dispatch = useDispatch();

        const selectedDrons = (e)=>{

            if(e.target.checked){
                selectedDronsOnTasks.push(parseInt(e.target.id))
            }
            else{
                
                let i = selectedDronsOnTasks.length - 1
                while(parseInt(e.target.id) !== selectedDronsOnTasks[i]){
                    i = i-1
                }
                selectedDronsOnTasks.splice(i, 1) 
                
            }

            dispatch({
                type:'PUT_SELECTED_DRONS_ON_TASKS',
                payload: selectedDronsOnTasks
            })
        
        }
    
    return (
    <Container>
    <Table striped bordered hover variant="dark" className="m-2 me-auto ms-auto" >

        <thead>
            <tr>
                <th>id</th>
                <th>UserName</th>
                <th>UserTel</th>
                <th>UserEmail</th>
                <th>UserDronBaseid</th>
                <th>DronBaseName</th>
                <th>Selected</th>
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
                                label="select"
                                type="checkbox"
                                id={user.Userid}
                                value={CheckIsDronGenderFilter}
                                onChange={(e)=>{selectedDrons(e)}}
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