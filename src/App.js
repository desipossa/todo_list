import React, { useState } from 'react'
import List from './component/List'
import Write from './component/Write'

const App = () => {
  const [input, setInput] = useState({});
  const [list, setList] = useState([
    { id: 1, name: "01", content: "text" }
  ])
  return (
    <div>
      <List list={list} setList={setList} />
      <Write input={input} setInput={setInput} list={list} setList={setList} />
    </div>
  )
}

export default App