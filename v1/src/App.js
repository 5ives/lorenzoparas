import React, {useEffect} from 'react';
import "./App.css";
import Loader from "./components/Loader";
import Body from "./Body";
import { INTRO_DURATION } from './consts/IntroValues';

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
		}, INTRO_DURATION)
	}, []);

  	return (
		<div className="App" style={wrapperStyle}>
			{loading ? <Loader/> : <Body/>}
		</div>
	);
}

export default App;
