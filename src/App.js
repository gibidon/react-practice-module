import './App.css';
import { styled } from 'styled-components';

const Div = styled.div`
	color: green;
	font-size: 50px;
	text-align: center;
`;

function App() {
	return (
		<div className="App">
			Hello <p>ksfdj</p>
			<div>some line</div>
			<i className="fa fa-camera-retro"></i>
			<Div>
				<i className="fa fa-camera-retro"></i>
				<i
					className="fa fa-user-circle"
					aria-hidden="true"
				></i>
			</Div>
		</div>
	);
}

export default App;
