import React from "react";
import {AccountsPage} from "./pages/AccountsPage";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";


function App() {
	return (
	  <Router>
		<Switch>
		  <Route path="/" exact component={AccountsPage} />
		</Switch>
		
	  </Router>
	);
}
export default App;
