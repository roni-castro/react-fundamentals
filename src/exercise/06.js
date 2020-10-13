// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useRef, useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  const userNameRef = useRef(null)
  const [error, setError] = useState()

  function handleSubmit(event) {
    event.preventDefault()
    const userName = userNameRef.current.value
    onSubmitUsername(userName)
  }

  function handleChange(event) {
    const {value} = event.target
    const isLowerCase = value === value.toLowerCase()
    setError(isLowerCase ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="usernameId"
          ref={userNameRef}
          type="text"
          onChange={handleChange}
        />
        <div role="alert" style={{color: 'red'}}>
          {error}
        </div>
      </div>
      <button disabled={!!error} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
