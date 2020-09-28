import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../actions';

const App = () => {
  const counter = useSelector((state: any) => state.count);
  const isLogged = useSelector((state: any) => state.logged);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>Counter {counter}</h1>
        <button onClick={() => dispatch(increment())}>++++</button>
        <button onClick={() => dispatch(decrement())}>----</button>
        <h1>isLogged {isLogged + ''}</h1>
      </div>
    </>
  );
};

export default App;
