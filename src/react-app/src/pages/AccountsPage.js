import React,{useState} from 'react'
import { DonutChart } from '../components/DonutChart/DonutChart.index';
import {Table} from '../components/Table/Table.index'
import axios from "axios";


export const AccountsPage = () =>{
const [accounts, setAccounts] = useState([]);

function getAccounts(){
    axios
        .get("/api/accounts/")
        .then((response) => {
            setAccounts(response.data.data);
        })
        .catch((error) => {
            console.error(error);
        });
    }
    return (
        <React.Fragment>
            <DonutChart data={accounts}></DonutChart>
            <Table data={accounts}></Table>
        </React.Fragment>
    )
}
