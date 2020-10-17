// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  const [userName, setUserName] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(userName)
  }

  function handleChange(event) {
    const {value} = event.target
    const userNameInLowerCase = value.toLowerCase()
    setUserName(userNameInLowerCase)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameId">Username:</label>
        <input
          id="usernameId"
          type="text"
          value={userName}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
