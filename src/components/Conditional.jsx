import React from 'react'

const Conditional = () => {
  return (
    <>
      <form>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter username"
          />
        </div>

        <br />

        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
          />
        </div>

        <br />

        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Conditional