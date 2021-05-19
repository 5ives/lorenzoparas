import "./App.css";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import {
	Switch,
	Route
} from 'react-router-dom'

function App() {
  	return (
		<Switch>
			<div id="main-container">
				<NavBar/>
				<Route exact path='/'>
					<Home/>
				</Route>
				<Route path='/about'>
					<About/>
				</Route>
				<Route path='/resume'>
					<Resume/>
				</Route>
				<Route path='/projects'>
					<Projects/>
				</Route>
				<Route path='/contact'>
					<Contact/>	
				</Route>
			</div>
		</Switch>
	);
}

export default App;
