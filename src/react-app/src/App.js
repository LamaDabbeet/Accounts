import React from "react";
import {Table} from './components/Table/Table';
import DonutChart from "./components/DonutChart";


function App() {
	return (
		<React.Fragment>
            <DonutChart></DonutChart>
			<Table ></Table>
		</React.Fragment>
	);
}

export default App;
