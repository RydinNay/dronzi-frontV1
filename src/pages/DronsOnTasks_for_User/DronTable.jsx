import React from 'react'
import { useTranslation } from 'react-i18next';
import { Form, Table } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

function DronTable({dron}) {
    const [CheckIsDronGenderFilter, setCheckIsDronGenderValue] = React.useState(false);
    
    const { t, i18n } = useTranslation()

    const dispatch = useDispatch();

    const { selectedDron } = useSelector(state => ({
        selectedDron: state.drons_on_tasks.selectedDron
    }), shallowEqual)

    
    console.log(dron)

    const isOccupied = (dron)=>{
        if(dron.IsOccupied)
            return 'yes'
        else return 'no'
    }

    const selectedDrons = (e)=>{

        if(e.target.checked){
            selectedDron.push(parseInt(e.target.id))
        }
        else{
            
            let i = selectedDron.length - 1
            while(parseInt(e.target.id) !== selectedDron[i]){
                i = i-1
            }
            selectedDron.splice(i, 1) 
            
        }

        dispatch({
            type:'PUT_SELECTED_DRONS',
            payload: selectedDron
        })

    }
  return (
<>
    <h3>{t("Drons")}</h3>

    <Table striped bordered hover variant="dark" className="m-2 me-auto ms-auto" >

        <thead>
        <tr>
            <th>id</th>
            <th>{t("DronModle")}</th>
            <th>{t("EnergyCapacity")}</th>
            <th>{t("IsOccupied")}</th>
            <th>{t("LiftingCapacity")}</th>
            <th>{t("Selected")}</th>
        </tr>
        </thead>
        <tbody id='table1'>
        { 
            dron.map(dron => 
                
                    <tr key={dron.Dronid}>
                        <td>{dron.Dronid}</td>
                        <td>{dron.DronModle}</td>
                        <td>{dron.EnergyCapacity}</td>
                        <td>{isOccupied(dron)}</td>
                        <td>{dron.LiftingCapacity}</td>
                        <td>
                            
                            <Form.Check 
                                label={t("Selected")}
                                type="checkbox"
                                id={dron.Dronid}
                                value={CheckIsDronGenderFilter}
                                onChange={(e)=>{selectedDrons(e)}}
                            />
                            
                        </td>
                    </tr>
            )
        }
        </tbody>

    </Table>  
    </>)
}

export default DronTable