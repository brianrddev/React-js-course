import './App.css';
import React, { useState } from 'react';
import Hello from './components/Hello';
import Input from './components/Input';

function App() {
	const [persona, setPersona] = useState({ name: '', surName: '', age: 0 });

	return (
		<>
			<Hello persona={persona} />
			<Input statToChange="name" setPersona={setPersona} />
			<Input statToChange="surName" setPersona={setPersona} />
			<Input statToChange="age" setPersona={setPersona} />
		</>
	);
}

export default App;
