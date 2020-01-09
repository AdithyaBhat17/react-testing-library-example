import React, { useState } from 'react';

const App: React.FC = () => {

  let [state, setState] = useState({error: false, resolved: false})

  const handleSubmit = (event: any) => {
    event.preventDefault()
    let { username, password } = event.target.elements
    if(!username?.value.trim() || !password?.value.trim())
      setState({error: true, resolved: false})
    else
      setState({error: false, resolved: true})
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" name="password" id="password" />
        </div>
        <button type="submit">Login</button>
      </form>
      {state.error ? <div role="message">Invalid input</div> : null}
      {state.resolved ? <div role="message">Successfully logged in</div> : null}
    </div>
  );
}

export default App;
