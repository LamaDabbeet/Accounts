import React,{useMemo,useState,useRef,useEffect} from 'react';
import {useTable,useGlobalFilter} from 'react-table';
import {Filter} from './Filter/Filter.index';
import axios from "axios";
import {Button} from "../shared/Button/Button.index"
import { colors } from '../../theme/colors';



export const Table= (props) =>{
  const [accounts, setAccounts] = useState([]);
  const accountsRef = useRef();
  accountsRef.current = accounts;
 
  useEffect(() => {
   setAccounts(props.data);
  },[props]);  


 function changeStatus(rowIndex,newStatus){
   axios
      .patch(`/api/accounts/${accountsRef.current[rowIndex]._id}`,{status: newStatus})
      .then((response) => {
        props.getAccounts();
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
      const status = accountsRef.current[rowIdx].status;
      const balance = accountsRef.current[rowIdx].balance;
    
      return (
        (status ==='pending')?<div>
          <Button variant="success" onClick={()=>changeStatus(rowIdx,'approved')}>To Approved </Button>
          <Button variant="danger" onClick={()=>changeStatus(rowIdx,'closed')}> To Closed </Button>
          </div>:
          (status==='approved')?
          <div><Button variant="primary" onClick={()=>changeStatus(rowIdx,'funded')}>To Funded </Button>
          <Button variant="danger" onClick={()=>changeStatus(rowIdx,'closed')}>To Closed </Button></div>
          :(status==="funded" && balance ===0)?
          <div><Button variant={'danger'} onClick={()=>changeStatus(rowIdx,'closed')}>To closed </Button>
          </div>:<div></div>
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
  return (
    <React.Fragment>
      <Filter filter={globalFilter} setFilter={setGlobalFilter}/>
    
       <table style={{width:'100%',borderCollapse:'collapse',marginTop:'2rem'}} {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr style={{backgroundColor:colors.white,borderBottom:`1px solid ${colors.lightSilver}`}} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th style={{padding:'8px'}} {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody style={{textAlign:'center', textTransform:'uppercase'}} {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr  style={{backgroundColor:colors.white,borderBottom:`1px solid ${colors.lightSilver}`}} {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td style={{padding:'8px'}} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
  
      </table>
    
      </React.Fragment>
  )
}
