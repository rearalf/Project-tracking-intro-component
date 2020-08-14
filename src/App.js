import React from 'react';
import './App.css';
import Navbar from './components/navComponents/index';
import Cubo from './components/cubo/index';
import Head from './components/head/index';
import Foooter from './components/footer/index';

function App(){
	return (
		<div className="App">
			<Cubo />
			<Navbar />
			<Head />
			<Foooter />
		</div>
	);
}

export default App;
