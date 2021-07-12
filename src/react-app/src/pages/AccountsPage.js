import React,{useState,useEffect} from 'react';
import {Table} from '../components/Table/Table.index'
import axios from "axios";
import { Dashboard } from '../components/Dashboard/Dashboard.index';
import {Wrapper} from './AccountsPage.styled';


export const AccountsPage = () =>{
const [accounts, setAccounts] = useState([]);

useEffect(() => {
    getAccounts()
}, [])
const getAccounts=()=>{    
    axios
        .get("/api/accounts/")
        .then((response) => {
            setAccounts(response.data.data);
        })
        .catch((error) => {
            console.error(error);
        });
}

    return accounts.length>0?(
        <React.Fragment>
            <Wrapper>
                <Dashboard  data={accounts}> </Dashboard>
                <Table getAccounts={getAccounts} data={accounts}></Table>
            </Wrapper>
        </React.Fragment>
    ):(<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}><p>... still Loading</p></div>)
}
