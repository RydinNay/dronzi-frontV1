import React from 'react'
import { useTranslation } from 'react-i18next';
import {Container, Form, Table} from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

function StatisticTable({statistic}) {

    const dispatch = useDispatch();
    
    const { t, i18n } = useTranslation()

    const Status = (status)=>{
        if(status)
            return t("Succeed")
        else return t("Faild")
    }

    //console.log(statistic)
    return (
    <Container>
    <Table striped bordered hover variant="dark" className="m-2 me-auto ms-auto" >

        <thead>
            <tr>
                <th>id</th>
                <th>{t("TaskDesc")}</th>
                <th>{t("DronId")}</th>
                <th>{t("Status")}</th>
                <th>{t("Date")}</th>
            </tr>
        </thead>
        <tbody id='table1'>
        { 
            statistic.map(statistic => 
                
                    <tr key={statistic.Statisticid}>
                        <td>{statistic.Statisticid}</td>
                        <td>{statistic.TaskDesc}</td>
                        <td>{statistic.Dronid}</td>      
                        <td>{Status(statistic.Status)}</td>                                          
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