import React from 'react'
import { useTranslation } from 'react-i18next';
import {Container, Form, Table} from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

function TasksTable(tasks) {
    const [CheckIsDronGenderFilter, setCheckIsDronGenderValue] = React.useState(false);
    
    const { selectedTask } = useSelector(state => ({
        selectedTask: state.tasks.selectedTask
    }), shallowEqual)

    const { t, i18n } = useTranslation()

    const dispatch = useDispatch();


        const isOccupied = (task)=>{
            if(task.IsOccupied)
            return t("OccupiedT")
            else return t("OccupiedF")
        }

        const selectedTasks = (e)=>{

            if(e.target.checked){
                selectedTask.push(parseInt(e.target.id))
            }
            else{                
                let i = selectedTask.length - 1
                while(parseInt(e.target.id) !== selectedTask[i]){
                    i = i-1
                }
                selectedTask.splice(i, 1) 
            }
                console.log(selectedTask)            

            dispatch({
                type:'PUT_SELECTED_TAKS',
                payload: selectedTask
            })     
            
        }

        const dateGet = (datetime)=>{
            const date = new Date(datetime)
            return 'Date: '+date.getFullYear()+ '.'+ date.getMonth()+ '.'+ date.getDate()+' Time: '+date.getHours()+':'+date.getMinutes()
        }

        
  return (
    <Container>
    <Table striped bordered hover variant="dark" className="m-2 me-auto ms-auto" >

        <thead>
            <tr>
                <th>id</th>
                <th>{t("TaskDesc")}</th>
                <th>{t("Dist")}</th>
                <th>{t("IsOccupied")}</th>
                <th>{t("Weight")}</th>
                <th>{t("Date")}</th>
                <th>{t("Selected")}</th>
            </tr>
        </thead>
        <tbody id='table1'>
        { 
            tasks.allTasks.map(task => 
                
                    <tr key={task.Taskid}>
                        <td>{task.Taskid}</td>
                        <td>{task.TaskDesc}</td>
                        <td>{task.Dist}</td>
                        <td>{isOccupied(task)}</td>
                        <td>{task.Weight}</td>
                        <td>{dateGet(task.Date)}</td>
                        <td>
                            
                            <Form.Check 
                                label={t("Selected")}
                                type="checkbox"
                                id={task.Taskid}
                                value={CheckIsDronGenderFilter}
                                onChange={(e)=>{selectedTasks(e)}}
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

export default TasksTable