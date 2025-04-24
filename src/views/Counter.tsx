import { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isPlay, setPlay] = useState(true);
  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      isPlay && setCount(count + 1);
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [count, isPlay]);

  return (
    <>
      counter Page
      <div>{count}</div>
      <button className="btn btn-gray" onClick={() => setPlay(!isPlay)}>
        {isPlay ? 'Pause' : 'play'}
      </button>
    </>
  );
};
export default Counter;
