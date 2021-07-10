import React,{useMemo,useState,useRef,useEffect} from 'react';
import {useTable,useGlobalFilter} from 'react-table';
import {  toast } from 'react-toastify';
import { AccountsTable,Button } from './Table.styled';
import {Filter} from './Filter.index';
import axios from "axios";
import './Table.css';



export const Table= (props) =>{
  const [accounts, setAccounts] = useState([]);
  const accountsRef = useRef();
  accountsRef.current = accounts;
 
  useEffect(() => {
   getAccounts();
  }, []);  
  
function getAccounts(){
  axios
      .get("/api/accounts/")
      .then((response) => {
        setAccounts(response.data.data);
        toast("Wow so easy!",toastOptions)
      })
      .catch((error) => {
        console.log(error);
      });
}
function refreshTable(){
  getAccounts();
}
 function changeStatus(rowIndex,newStatus){
   axios
      .patch(`/api/accounts/${accountsRef.current[rowIndex]._id}`,{status: newStatus})
      .then((response) => {
        refreshTable();
        toast('Wow so easy!');
      })
      .catch((error) => {
        console.error(error);
      });
 }
  const COLUMNS =[{
    Header:'Balance',
    accessor:'balance',
    },
    {
    Header:'Status',
    accessor:'status'
    },
    {
    Header:'Actions',
    accessor: '[row identifier to be passed to button]',
      Cell: (props) => {
      const rowIdx = props.row.id;
      const status = accountsRef.current[rowIdx].status
    
      return (
        (status ==='pending')?<div>
          <Button onClick={()=>changeStatus(rowIdx,'opened')}>To Opened </Button>
          <Button onClick={()=>changeStatus(rowIdx,'closed')}> To Closed </Button>
          </div>:(status==='opened')?
          <div><Button onClick={()=>changeStatus(rowIdx,'suspended')}>To Suspended </Button>
          <Button onClick={()=>changeStatus(rowIdx,'closed')}>To Closed </Button></div>:(status==="suspended")?<div><Button onClick={()=>changeStatus(rowIdx,'closed')}>To closed </Button></div>:<div></div>
      );
    },
  },
]
const columns = useMemo(() => COLUMNS, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter
  } = useTable({
    columns,
    data:accounts
  },useGlobalFilter)

  const {globalFilter}=state;
const toastOptions={
  position:"top-right",
  autoClose:5000,
  hideProgressBar:false,
  newestOnTop:false,

}
  return (
    <React.Fragment>
      <Filter filter={globalFilter} setFilter={setGlobalFilter}/>
    
       <AccountsTable {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
  
      </AccountsTable>
    
      </React.Fragment>
  )
}
