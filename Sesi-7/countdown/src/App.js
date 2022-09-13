import logo from './logo.svg';
import './App.css';

import Countdown from './countdown';

function App() {
	return (
		<div className='App m-5'>
			<h1 className='text-start'>Countdown</h1>
			{/* timer */}
      <Countdown/>
		</div>
	);
}

export default App;
