// import logo from './logo.svg';
// import Users from './component/screens/Users';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './component/screens/About';
import Contact from './component/screens/Contact';
import Nav from './component/screens/includes/Nav';
import Home from './component/screens/Home';
import Users from './component/screens/Users';
import User from './component/screens/User';
import { Helmet } from "react-helmet";

function App() {
	return (
		<Router>
			<>
				<Helmet>
					<title>Welcome</title>
				</Helmet>
				<Nav />
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route path="/users" component={Users} />
					<Route path="/user/:id" component={User} />
				</Switch>
			</>
		</Router>
	)

}

export default App;
