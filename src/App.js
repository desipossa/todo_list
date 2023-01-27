import React, { useState, useRef } from 'react'
import { Route, Routes } from 'react-router-dom';
import List from './component/List'
import Nav from './component/Nav';
import Write from './component/Write'

const App = () => {
  const [input, setInput] = useState({});
  const [list, setList] = useState([]);
  const num = useRef(0);
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<>HOme</>} />
        <Route path='/list' element={<List list={list} setList={setList} />} />
        <Route path='/write' element={<Write input={input} setInput={setInput} list={list} setList={setList} num={num} />} />
      </Routes>
      {/* <Write input={input} setInput={setInput} list={list} setList={setList} /> */}
    </div>
  )
}

export default App