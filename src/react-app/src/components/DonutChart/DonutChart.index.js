import React,{useState} from 'react'
import { PieChart } from 'react-minimal-pie-chart';


export const DonutChart=(props)=> {
	const [chartData, setData] = useState([]);
    const shiftSize = 7;
	const defaultLabelStyle = {
		fontSize: '5px',
		fontFamily: 'sans-serif',
		color: '#fff'
	  };
const {data}=props;
function  getData(){
	let segmentsArray=[];
	for(let i=0;i< data.length;i++){
       segmentsArray.push({
		   title:data[i].status,
	   })
	}
	
}
    return (
        <PieChart
			animate={true}
			radius={PieChart.defaultProps.radius - shiftSize}
			label={({ dataEntry }) => dataEntry.title}
			labelStyle={{
			  ...defaultLabelStyle,
			}}
			lineWidth={60}
			labelPosition={80}
            animationDuration={1000}
			style={{width:'20%'}}
			data={[
				{ title: 'Opened', value: 10, color: '#E38627' },
				{ title: 'Closed', value: 15, color: '#C13C37' },
				{ title: 'Suspended', value: 20, color: '#6A2135' },
				{ title: 'Pending', value: 30, color: '#008800' },
			]}
			/>
    )
}
