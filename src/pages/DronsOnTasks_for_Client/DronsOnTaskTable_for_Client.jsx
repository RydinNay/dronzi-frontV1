import React from 'react'
import {Container, Form, Table} from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

function DronsOnTasksTable_for_Client({dronOnTask, tasks, drons}) {
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
                <th>DronId</th>
                <th>EnergyCapacity</th>
                <th>LitfingCapacity</th>
                <th>TaskId</th>
                <th>TaskDist</th>
                <th>TaskWeight</th>
                <th>TaskDesc</th>
                <th>Date</th>
                <th>selected</th>
            </tr>
        </thead>
        <tbody id='table1'>
        { 
            dronOnTask.map(drontask => 
                
                    <tr key={drontask.DronTaskid}>
                        <td>{drontask.DronTaskid}</td>
                        <td>{drontask.DoTDronid}</td>
                        <td>{drons.find(ecap => ecap.Dronid === drontask.DoTDronid).EnergyCapacity}</td>
                        <td>{drons.find(lcap => lcap.Dronid === drontask.DoTDronid).LiftingCapacity}</td>
                        <td>{drontask.DoTTaskid}</td>
                        <td>{tasks.find(dist => dist.Taskid === drontask.DoTTaskid).Dist}</td>
                        <td>{tasks.find(weight => weight.Taskid === drontask.DoTTaskid).Weight}</td>
                        <td>{tasks.find(taskdesc => taskdesc.Taskid === drontask.DoTTaskid).TaskDesc}</td>
                        
                        <td>{drontask.Date}</td>
                        <td>
                            
                            <Form.Check 
                                label="select"
                                type="checkbox"
                                id={drontask.DronTaskid}
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

export default DronsOnTasksTable_for_Client