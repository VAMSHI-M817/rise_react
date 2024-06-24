import { useState } from "react"

const Practice = () => {
  const [firstName, setfirstName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()
    const Obj = {
      firstName: firstName,
      email: email,
      password: password
    }
    console.log(Obj)
  }


  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <input type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            placeholder="Enter your name"
            onChange={(e) => setfirstName(e.target.value)}
          />
        </div>
        <div>
          <input type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}



export default Practice