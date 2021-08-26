import React, {useEffect} from 'react';
import "./App.css";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import WorkExperiences from './pages/WorkExperiences';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import {
	Switch,
	Route
} from 'react-router-dom';
import Loader from "./components/Loader";

const wrapperStyle = {
	backgroundColor: '#212121',
	height: '100%',
	width: '100%',
	position: 'absolute',
	overflow: 'auto'
}

function App() {
	const [loading, setLoading] = React.useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 5000)
	}, []);

  	return (
		<div>
			<div className="App" style={wrapperStyle}>
				{
					loading 
					?
					<div>
						<Loader loading={loading}/> 
					</div>
					:
					<span>
						<NavBar/>
						<Switch>
							<Route exact path='/'>
								<Home/>
							</Route>
							<Route path='/about'>
								<About/>
							</Route>
							<Route path='/work-experiences'>
								<WorkExperiences/>
							</Route>
							<Route path='/software-projects'>
								<Projects/>
							</Route>
							<Route path='/gallery'>
								<Gallery/>
							</Route>
							<Route path='/contact'>
								<Contact/>	
							</Route>
						</Switch>
					</span>
				}
			</div>
		</div>
		
		
	);
}

export default App;
