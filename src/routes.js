import React from 'react';
import './style/style.css';
import Navbar from './components/header/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/index';
import Footer from './components/footer';
// import About from './pages/about';
// import Events from './pages/events';
// import AnnualReport from './pages/annual';
// import Teams from './pages/team';
// import Blogs from './pages/blogs';
// import SignUp from './pages/signup';

const Routes=()=> {
return (
	<Router>
	<Navbar/>
	<Switch>
		<Route path='/' exact component={Home} />
		{/* <Route path='/about' component={About} />
		<Route path='/events' component={Events} />
		<Route path='/annual' component={AnnualReport} />
		<Route path='/team' component={Teams} />
		<Route path='/blogs' component={Blogs} />
		<Route path='/sign-up' component={SignUp} /> */}
	</Switch>
  <Footer/>
	</Router>
);
}

export default Routes;
