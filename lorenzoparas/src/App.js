import React, {useEffect} from 'react';
import "./App.css";
import Loader from "./components/Loader";
import Body from "./Body";

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
		<div className="App" style={wrapperStyle}>
			{loading ? <Loader loading={loading}/> : <Body/>}
		</div>
	);
}

export default App;
