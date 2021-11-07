import React, {useState, useMemo} from 'react'

function App() {

  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  //useMemo: storige will become bigger everytime you use it 
  const doubleNumber = useMemo(() => {
    //
    return slowFunction(number)
  },
  //only this dependency changed => rerender component,  
  [number])

  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark? 'white' : 'black'
  }

  return (
    <div className="App">
      <input 
      type="number"
      value={number}
      onChange={e=> setNumber(parseInt(e.target.value))}
      />
      <button onClick={()=> setDark(prevDark => !prevDark)}> change theme </button>
      <div style={themeStyles}> {doubleNumber} </div>
    </div>
  );
}

export default App;

function slowFunction(num) {
  console.log('Calling slow function')
  for(let i = 0; i <= 100000000; i++) {}
  return num*2
}