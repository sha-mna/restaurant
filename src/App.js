import React from 'react';          // need to  see the Random.js use it as custom component
// import Random from './Random';
import Header from './components/Header';
import Home from './components/Home';
import { Container } from 'react-bootstrap';

function App() {
	return (
		<div>
			<Header />
			<main className='py-3'>
				<Container>
					<Home />		
				</Container>
			</main>
		</div>
	);
}

export default App;
