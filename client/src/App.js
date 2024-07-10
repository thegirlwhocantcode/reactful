import { response } from 'express'
import React, {useEffect, useState} from 'react'

function App() {

  //define a variable to hold the backend data
  const [userData, setuserData] = useState([{}])

  //fetch backend data from api
  useEffect(() => {
    fetch("/api").then(
      response =>response.json()
    ).then(
      data => {
        setuserData(data)
      }
    )
  }, [])

  return (
    <div>
      {(typeof userData.users === 'undefined') ? (
          <p>Loading...</p>
      ): (
        userData.users.map((user,i) => (
          <p key={i}>{user}</p>
        ))
      )}
    </div>
  )
}

export default App