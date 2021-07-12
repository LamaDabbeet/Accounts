import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import { colors } from '../../theme/colors';


export const DonutChart=(props)=> {
const {closedValue,approvedValue,pendingValue,fundedValue}=props
const shiftSize = 7;
const defaultLabelStyle = {
	fontSize: '5px',
	fontFamily: 'sans-serif',
	color: '#fff'
	};

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
			    { title: approvedValue>0?'Approved':'', value: approvedValue, color: colors.green },
				{ title: closedValue>0?'Closed':'', value: closedValue, color: colors.red },
				{ title: fundedValue>0?'Funded':'', value: fundedValue, color: colors.blue },
				{ title: pendingValue >0? 'Pending':'', value: pendingValue, color: colors.yellow },
			]}
		/>
    )
}
