import React, {useEffect} from 'react'
import {Container, Form, Table} from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';


function DronsTable(drons) {
    const [CheckIsDronGenderFilter, setCheckIsDronGenderValue] = React.useState(false);
    
    const { selectedDron } = useSelector(state => ({
        selectedDron: state.drons.selectedDron
    }), shallowEqual)

    const dispatch = useDispatch();


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
                console.log(selectedDron)            

            dispatch({
                type:'PUT_SELECTED_DRONS',
                payload: selectedDron
            })     
            
        }
        
        //console.log(selectedDron)            

  return (
    <Container>
    <Table striped bordered hover variant="dark" className="m-2 me-auto ms-auto" >

        <thead>
            <tr>
                <th>id</th>
                <th>Modle</th>
                <th>EnergyCapacity</th>
                <th>IsOccupied</th>
                <th>LiftingCapacity</th>
                <th>selected</th>
            </tr>
        </thead>
        <tbody id='table1'>
        { 
            drons.allDrons.map(dron => 
                
                    <tr key={dron.Dronid}>
                        <td>{dron.Dronid}</td>
                        <td>{dron.DronModle}</td>
                        <td>{dron.EnergyCapacity}</td>
                        <td>{isOccupied(dron)}</td>
                        <td>{dron.LiftingCapacity}</td>
                        <td>
                            
                            <Form.Check 
                                label="select"
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

    </Container>
    )
}

export default DronsTable