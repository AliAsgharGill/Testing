import React, { useState } from 'react'

function App() {
  const [data, setData] = useState("React")
  return (
    <>
      <p>First React Test case using {data} </p>
      {/* <button onClick={() => data === "Vite" ? setData("React") : setData("Vite")} >Change</button> */}
      <button onClick={() => setData("Vite")} >{data}</button>
      <div>
        <input type="text" placeholder='Lemon' title='Lemon' name='Lemon' id='Lemon' className='Lemon' />
      </div>
      <br />
      <img src="https://images.unsplash.com/photo-1459802071246-377c0346da93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BsYXNofGVufDB8fDB8fHww" alt="Lemon In Water" title='Lemon In Water' />


    </>
  )
}

export default App
