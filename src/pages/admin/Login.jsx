import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [errors, setErrors] = useState({})

  function handleSubmit(event) {
    event.preventDefault()

    const newErrors = {}

    // EMAIL VALIDATION

    if (!email.trim()) {
      newErrors.email = "Email is required"
    } else if (!email.includes("@")) {
      newErrors.email = "Please enter a valid email"
    }

    // PASSWORD VALIDATION

    if (!password.trim()) {
      newErrors.password = "Password is required"
    }

    setErrors(newErrors)

    // STOP IF VALIDATION FAILED

    if (Object.keys(newErrors).length > 0) {
      return
    }

    // DUMMY AUTHENTICATION

    if (email === "admin@kps.com" && password === "admin123") {
      // Save login status
      localStorage.setItem("admin-auth", "true")

      // Redirect to dashboard
      navigate("/admin/dashboard")
    } else {
      setErrors({
        login: "Invalid email or password",
      })
    }
  }

  return (
    <div>
      <h1>KPS Textiles Admin Login</h1>

      <form onSubmit={handleSubmit}>
        {/* EMAIL */}

        <div>
          <label>Email</label>

          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          {errors.email && <p>{errors.email}</p>}
        </div>

        {/* PASSWORD */}

        <div>
          <label>Password</label>

          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          {errors.password && <p>{errors.password}</p>}
        </div>

        {/* LOGIN ERROR */}

        {errors.login && <p>{errors.login}</p>}

        {/* LOGIN BUTTON */}

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
