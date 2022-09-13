import { useState, useEffect } from 'react';

const Countdown = () => {
	//   const [count, setCount] = useState(0);
	let [minute, setMinute] = useState(0);
	let [second, setSecond] = useState(0);

	const [shouldCountdownRun, setShouldCountdownRun] = useState(false);
	const [messageAlert, setMessageAlert] = useState(false);

	let tminute;
	let tsecond;

	if (minute < 10 && second < 10) {
		tminute = '0';
		tsecond = '0';
	} else if (minute < 10) {
		tminute = '0';
	} else if (second < 10) {
		tsecond = '0';
	} else {
		tminute = '';
		tsecond = '';
	}

	const handleStop = () => {
		setShouldCountdownRun(false);
	};

	const handleStart = () => {
		setShouldCountdownRun(true);
	};

	const handleReset = () => {
		setMinute(0);
		setSecond(0);

		setShouldCountdownRun(false);
		setMessageAlert(false);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (shouldCountdownRun) {
				if (minute >= 0) {
					setSecond(second - 1);
					if (second === 0) {
						setMinute(minute - 1);
						setSecond(59);
					}
				}
			}
		}, 100);

		return () => clearInterval(interval);
	}, [minute, second, shouldCountdownRun]);

	useEffect(() => {
		if (second === 0 && minute === 0) {
			setShouldCountdownRun(false);
			setMessageAlert(true);
		}
	}, [second, minute]);

	return (
		<>
			<h1
				className='mt-5 align-middle'
				style={{ fontSize: '85px' }}
			>
				{tminute}
				{minute} : {tsecond}
				{second}
			</h1>

			<div className='p-5 d-flex justify-content-center'>
				<div class='form-floating mx-2'>
					<input
						type='number'
						class='form-control px-5 text-center'
						id='floatingminute'
						placeholder='Input Minute'
						value={minute}
						onChange={(e) => {
							setMinute(e.target.value);
						}}
					/>
					<label for='floatingminute'>Minute</label>
				</div>
				<div class='form-floating mx-2'>
					<input
						type='number'
						class='form-control px-5 text-center'
						id='floatingsecond'
						placeholder='Input Second'
						value={second}
						onChange={(e) => {
							setSecond(e.target.value);
						}}
					/>
					<label for='floatingsecond'>Second</label>
				</div>
			</div>
			{/* <p>
				Minute
				<input
					type='number'
					value={minute}
					onChange={(e) => {
						setMinute(e.target.value);
					}}
				/>
			</p>
			<p>
				Second
				<input
					type='number'
					value={second}
					onChange={(e) => {
						setSecond(e.target.value);
					}}
				/>
			</p> */}
			<div className='fs-3'>
				<button
					className='btn btn-success px-3'
					onClick={handleStart}
				>
					Start
				</button>
				<button
					className='btn btn-danger mx-4 px-3'
					onClick={handleStop}
				>
					Stop
				</button>
				<button
					className='btn btn-warning px-3'
					onClick={handleReset}
				>
					Reset
				</button>
			</div>
			{/* {messageAlert ? (
				<div
					class='alert alert-danger'
					role='alert'
				>
					Waktu Habis !
				</div>
			) : (
				''
			)} */}
		</>
	);
};

export default Countdown;

/*
    Deadline 20.56
    30:00
    29:59
    29:58
*/
