import React from 'react'
import {Container, Form, Table} from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

function StatisticTable({statistic}) {

    const dispatch = useDispatch();
    
    return (
    <Container>
    <Table striped bordered hover variant="dark" className="m-2 me-auto ms-auto" >

        <thead>
            <tr>
                <th>id</th>
                <th>Task Description</th>
                <th>DronId</th>
                <th>Status</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody id='table1'>
        { 
            statistic.map(statistic => 
                
                    <tr key={statistic.Statisticid}>
                        <td>{statistic.Statisticid}</td>
                        <td>{statistic.TaskDesc}</td>
                        <td>{statistic.Dronid}</td>      
                        <td>{statistic.Status}</td>                                          
                        <td>{statistic.Data}</td>
                    </tr>
            )
        }
        </tbody>

    </Table>  
    
    
    </Container>
    )
}

export default StatisticTable