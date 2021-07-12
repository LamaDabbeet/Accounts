import React ,{useState,useEffect}from 'react';
import {DonutChart} from '../../components/DonutChart/DonutChart.index'
import { colors } from '../../theme/colors';
import{Wrapper,CardsWrapper,Card,Heading,SubHeading,Span} from './Dashboard.styled';


export const Dashboard= (props) => {
const {data}=props;
const [totalPendingBalance, setPendingBalance] = useState(0);
const [totalClosedBalance, setClosedBalance] = useState(0);
const [totalApprovedBalance, setApprovedBalance] = useState(0);
const [totalFundedBalance, setFundedBalance] = useState(0);

const [pendingAccounts, setPendingAccounts] = useState([]);
const [closedAccounts, setClosedAccounts] = useState([]);
const [approvedAccounts, setApprovedAccounts] = useState([]);
const [fundedAccounts, setFundedAccounts] = useState([]);

useEffect(() => {
	getStatsData()
},[props]);

function getStatsData(){
 let pendingAccounts = data.filter(account=>account.status==='pending');
 let approvedAccounts =data.filter(account=>account.status==='approved');
 let closedAccounts =data.filter(account=>account.status==='closed');
 let fundedAccounts = data.filter(account=>account.status==='funded');
 setPendingBalance(pendingAccounts.reduce(function(prev, cur) {
  return prev + cur.balance;
  }, 0))
 setClosedBalance(closedAccounts.reduce(function(prev, cur) {
return prev + cur.balance;
}, 0));
 setApprovedBalance(approvedAccounts.reduce(function(prev, cur) {
return prev + cur.balance;
}, 0));
 setFundedBalance(fundedAccounts.reduce(function(prev, cur) {
return prev + cur.balance;
}, 0));
 
setClosedAccounts(closedAccounts)
setPendingAccounts(pendingAccounts)
setApprovedAccounts(approvedAccounts)
setFundedAccounts(fundedAccounts)
}

return (
        <React.Fragment>
          <Wrapper>
              <CardsWrapper>
                 <Card>
                   <Heading>{totalClosedBalance} $</Heading>
                   <SubHeading>{closedAccounts.length} <Span>   accounts</Span></SubHeading>
                   <SubHeading style={{color:colors.red}}>Closed Accounts</SubHeading>
                 </Card>
                 <Card>
                   <Heading>{totalFundedBalance} $</Heading>
                   <SubHeading><Span></Span>{fundedAccounts.length} <Span>   accounts</Span></SubHeading>
                   <SubHeading style={{color:colors.blue}}>Funded Accounts</SubHeading>
                 </Card>
                 <Card>
                 <Heading>{totalPendingBalance} $</Heading>
                 <SubHeading> {pendingAccounts.length} <Span>   accounts</Span></SubHeading>
                 <SubHeading style={{color:colors.yellow}}>Pending Accounts</SubHeading>
                </Card>
                <Card>
                 <Heading>{totalApprovedBalance} $</Heading>
                 <SubHeading>{approvedAccounts.length} <Span>   accounts</Span></SubHeading>
                 <SubHeading style={{color:colors.green}}>Approved Accounts</SubHeading>
                </Card>
              </CardsWrapper>
              <DonutChart closedValue={totalClosedBalance} approvedValue={totalApprovedBalance} pendingValue={totalPendingBalance} fundedValue={totalFundedBalance}></DonutChart>
          </Wrapper>
        </React.Fragment>
    )
}
