import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './styles/index.css';
import bot from './assistant.png';


const Wrapper = styled.div`
	margin:0 auto;
	padding: 20px;
	border-radius: 12px;
	text-align: center;		
`;

const Button = styled.button`
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border-radius: 3px;

	/* Color the border and text with theme.main */
	color: #ffffff;
	background: ${props => props.theme.background};
	border: 2px solid ${props => props.theme.color};
`;

Button.defaultProps = {
	theme: {
		color: "#f00",
		background: "#00f"
	}
}

const vartheme = {
	color: "#00f",	
	background: "#f00"
};


function App() {
	return (
		<Wrapper>
			<img src={bot} alt="Pluralsight Bot" />
			<h1 style={{ margin: '0' }}>It worked</h1>
			<div>
				<Button>Normal</Button>

				<ThemeProvider theme={vartheme}>
					<Button>Themed</Button>
				</ThemeProvider>
			</div>

		</Wrapper>
	);
}

export default App;
