import { useState, useEffect } from 'react';

const Countdown = () => {
  const [count, setCount] = useState(0);

  const countdownRun = () => {
    setCount(count - 1);
  };

  const [shouldCountdownRun, setShouldCountdownRun] =
    useState(false);

  const handleStop = () => {
    setShouldCountdownRun(false);
  };

  const handleStart = () => {
    setShouldCountdownRun(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (shouldCountdownRun) {
        console.log(count, 'ini count');
        setCount(count - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [count, shouldCountdownRun]);

  useEffect(() => {
    if (count === 0) {
      setShouldCountdownRun(false);
    }
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <input
        type="number"
        value={count}
        onChange={(e) => {
          setCount(e.target.value);
        }}
      />
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>stop</button>
    </div>
  );
};

export default Countdown;


/*
    Deadline 20.56
    30:00
    29:59
    29:58
*/

import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function SecondsTimePicker() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <TimePicker
          ampm={false}
          openTo="hours"
          views={['hours', 'minutes', 'seconds']}
          inputFormat="HH:mm:ss"
          mask="__:__:__"
          label="With seconds"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <TimePicker
          ampmInClock
          views={['minutes', 'seconds']}
          inputFormat="mm:ss"
          mask="__:__"
          label="Minutes and seconds"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
