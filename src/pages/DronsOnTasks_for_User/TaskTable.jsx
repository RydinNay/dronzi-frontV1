import React from 'react'
import { useTranslation } from 'react-i18next';
import { Form, Table } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

function Task({task}) {
    const [CheckIsDronGenderFilter, setCheckIsDronGenderValue] = React.useState(false);

    const { t, i18n } = useTranslation()

    const dispatch = useDispatch();

    const { selectedTask } = useSelector(state => ({
        selectedTask: state.drons_on_tasks.selectedTask
    }), shallowEqual)



    console.log(task)

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

        dispatch({
            type:'PUT_SELECTED_TASK',
            payload: selectedTask
        })
  
    }

  return (
<>
    <h3>{t("Tasks")}</h3>

    <Table striped bordered hover variant="dark" className="m-2 me-auto ms-auto" >
        <thead>
        <tr>
            <th>id</th>
            <th>{t("Dist")}</th>
            <th>{t("Weight")}</th>
            <th>{t("IsOccupied")}</th>
            <th>{t("TaskDesc")}</th>
            <th>{t("Date")}</th>
            <th>{t("Selected")}</th>
        </tr>
        </thead>
        <tbody id='table1'>
        { 
            task.map(task => 
                
                    <tr key={task.Taskid}>
                        <td>{task.Taskid}</td>
                        <td>{task.Dist}</td>
                        <td>{task.Weight}</td>
                        <td>{isOccupied(task)}</td>
                        <td>{task.TaskDesc}</td>
                        <td>{task.Date}</td>
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
</>
)
}

export default Task