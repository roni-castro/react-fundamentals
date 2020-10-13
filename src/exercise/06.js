// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useRef} from 'react'

function UsernameForm({onSubmitUsername}) {
  const userNameRef = useRef(null)

  function handleSubmit(event) {
    event.preventDefault()
    const userName = userNameRef.current.value
    onSubmitUsername(userName)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="usernameId" ref={userNameRef} type="text" />
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
