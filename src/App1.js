import React,{useState, useEffect, useRef, useCallback, useMemo} from 'react';
import './App.css';
import Counter from './hooks/Counter'
import Info from './hooks/Info'
import Average from './hooks/Average'

function App() {
  return (
    <>
    <div>안녕하세요</div>
    <Counter/>
    <hr/>
    <Info />
    <hr/>
    <Average />
    </>
  );
}

export default App;
