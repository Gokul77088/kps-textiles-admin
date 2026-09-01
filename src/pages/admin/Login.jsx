import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()

    const newErrors = {}

    if (!email.trim()) {
      newErrors.email = "Email is required"
    } else if (!email.includes("@")) {
      newErrors.email = "Please enter a valid email"
    }

    if (!password.trim()) {
      newErrors.password = "Password is required"
    }
    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {
      return
    }

    if (email === "admin@kps.com" && password === "admin123") {
      localStorage.setItem("admin-auth", "true")

      navigate("/admin/dashboard")
    } else {
      setErrors({
        login: "Invalid email or password",
      })
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-brand">
          <div className="login-logo">KPS</div>
          <h1>KPS Textiles</h1>
          <p>Admin Panel</p>
        </div>

        <div className="login-card">
          <div className="login-heading">
            <h2>Welcome Back</h2>
            <p>Sign in to access your admin dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="login-field">
              <label htmlFor="email">
                Email Address
              </label>
              <div
                className={
                  errors.email
                    ? "login-input-wrapper error"
                    : "login-input-wrapper"
                }
              >
                <span className="input-icon">
                  ✉
                </span>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value)

                    if (errors.email || errors.login) {
                      setErrors({})
                    }
                  }}
                />
              </div>
              {errors.email && <p className="login-error">{errors.email}</p>}
            </div>

            <div className="login-field">
              <label htmlFor="password">Password</label>
              <div
                className={
                  errors.password
                    ? "login-input-wrapper error"
                    : "login-input-wrapper"
                }
              >
                <span className="input-icon">🔒</span>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value)

                    if (errors.password || errors.login) {
                      setErrors({})
                    }
                  }}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <p className="login-error">{errors.password}</p>
              )}
            </div>

            {errors.login && (
              <div className="login-alert">
                <span>⚠</span>
                <p>{errors.login}</p>
              </div>
            )}

            <button type="submit" className="login-button">
              Login to Dashboard
            </button>
          </form>
        </div>

        <p className="login-footer">© 2026 KPS Textiles. Admin Panel</p>
      </div>
    </div>
  )
}

export default Login
