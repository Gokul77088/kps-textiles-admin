import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
    const navigate =  useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [errors, setErrors] = useState({})

  function handleSubmit(event) {
    event.preventDefault()

    const newErrors = {}

    // EMAIL VALIDATION

    if (!email.trim()){
        newErrors.email = "Email is required"
    }else if (!email.includes('@')){
        newErrors.email = "Please enter a valid email"
    }

    // PASSWORD VALIDATION

    if (!password.trim()){
        newErrors.password = "Password is required"
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0){
        return
    }

    // DUMMY AUTHENTICATION
    
    if (email === "admin@kps.com" && password === "admin123") {
        localStorage.setItem("isLoggedIn", "true")
        navigate ("/admin/dashboard")
    }else{
        setErrors({
            login: "Invalid email  or  password"
        })
    }
  }

  return (
    <div>
      <h1>KPS Textiles Admin Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>

          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <label>Password</label>

          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        {errors.login && ( <p>{errors.login}</p>)}
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login;
