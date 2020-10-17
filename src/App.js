import React from 'react';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import './styles/index.css';
import bot from './assistant.png';

// ({}) 或者 ‵ 兩種寫法
const Wrapper = styled.div({
	margin: '0 auto',
	padding: '20px',
	borderRadius: '12px',
	textAlign: 'center',
});

const modal = ({ className, children }) => (
	<div className={className}>
		{children}
	</div>
);

const Link = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: papayawhip;
  color: palevioletred; 
`;
const Icon = styled.svg`
  flex: none;
  transition: fill 0.25s;
  width: 48px;
  height: 48px;

  ${Link}:hover & {
    fill: rebeccapurple;
  }
`;
const Label = styled.span`
  display: flex;
  align-items: center;
  line-height: 1.2;

  &::before {
    content: '◀';
    margin: 0 10px;
  }
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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

function App() {
	return (
		<Wrapper>
			<Rotate>&lt; 💅🏾 &gt;</Rotate>
			<h1 style={{ margin: '0' }}>It worked</h1>
			<modal className="product"> modal  test</modal>
			<div>
				<Button>Normal</Button>

				<ThemeProvider theme={vartheme}>
					<Button>Themed</Button>
				</ThemeProvider>
			</div>
			<Link href="#">
				<Icon viewBox="0 0 20 20">
					<path d="M10 15h8c1 0 2-1 2-2V3c0-1-1-2-2-2H2C1 1 0 2 0 3v10c0 1 1 2 2 2h4v4l4-4zM5 7h2v2H5V7zm4 0h2v2H9V7zm4 0h2v2h-2V7z" />
				</Icon>
				<Label>Hovering my parent changes my style!</Label>
			</Link>

		</Wrapper>
	);
}

export default App;
