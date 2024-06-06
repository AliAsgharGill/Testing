import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Users = () => {

  const [data, setData] = useState([])


  const getData = async () => {
    const response = await axios.get('http://localhost:3000/users')
    setData(response.data)
  }

  useEffect(() => {
    getData()
  }, [])



  return (
    <>
      <h1>Users</h1>

      {data.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  )
}

export default Users
