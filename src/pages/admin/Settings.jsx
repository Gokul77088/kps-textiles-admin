import { useState, useEffect } from "react"
import useLocalStorage from "../../hooks/useLocalStorage"

function Settings() {
  // PROFILE STATE
  const [name, setName] = useState("Admin")
  const [email, setEmail] = useState("admin@kps.com")

  // PASSWORD STATE
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [passwordErrors, setPasswordErrors] = useState({})

  // THEME
  const [theme, setTheme] = useLocalStorage("admin-theme", "light")

  // APPLY THEME
  useEffect(() => {
    function applyTheme() {
      if (theme === "system") {
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)",
        ).matches

        document.documentElement.setAttribute(
          "data-theme",
          prefersDark ? "dark" : "light",
        )

        return
      }

      document.documentElement.setAttribute("data-theme", theme)
    }

    applyTheme()

    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

      mediaQuery.addEventListener("change", applyTheme)

      return () => {
        mediaQuery.removeEventListener("change", applyTheme)
      }
    }
  }, [theme])

  // PROFILE SUBMIT
  function handleProfileSubmit(event) {
    event.preventDefault()

    console.log("Name:", name)
    console.log("Email:", email)
  }

  // PASSWORD SUBMIT
  function handlePasswordSubmit(event) {
    event.preventDefault()
    const newErrors = {}

    // CURRENT PASSWORD

    if (!currentPassword.trim()) {
      newErrors.currentPassword = "Current password is required"
    }

    // NEW PASSWORD

    if (!newPassword.trim()) {
      newErrors.newPassword = "New password is required"
    }

    // CONFIRM PASSWORD

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm password is required"
    } else if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    setPasswordErrors(newErrors)

    // STOP IF ERRORS EXIST

    if (Object.keys(newErrors).length > 0) {
      return
    }

    console.log("Password changed successfully")

    // CLEAR FORM

    setCurrentPassword("")
    setNewPassword("")
    setConfirmPassword("")
  }

  return (
    <div className="settings-page">
      {/* PAGE HEADER */}

      <div className="settings-header">
        <h1>Settings</h1>

        <p>Manage your account and application preferences</p>
      </div>

      <div className="settings-card">
        <div className="settings-card-header">
          <div className="settings-card-icon">👤</div>

          <div>
            <h2>Profile Information</h2>
            <p>Update your admin account information</p>
          </div>
        </div>

        <form className="settings-form" onSubmit={handleProfileSubmit}>

          <div className="settings-field">
            <label>Name</label>

            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          {/* EMAIL */}

          <div className="settings-field">
            <label>Email</label>

            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="settings-form-actions">
            <button type="submit">Save Changes</button>
          </div>
        </form>
      </div>

      <div className="settings-card">
        <div className="settings-card-header">
          <div className="settings-card-icon">🔒</div>

          <div>
            <h2>Change Password</h2>

            <p>Update your admin account password</p>
          </div>
        </div>

        <form className="settings-form" onSubmit={handlePasswordSubmit}>
          {/* CURRENT PASSWORD */}

          <div className="settings-field">
            <label>Current Password</label>

            <input
              type="password"
              value={currentPassword}
              onChange={(event) => setCurrentPassword(event.target.value)}
            />

            {passwordErrors.currentPassword && (
              <p className="settings-error">{passwordErrors.currentPassword}</p>
            )}
          </div>

          {/* NEW PASSWORD */}

          <div className="settings-field">
            <label>New Password</label>

            <input
              type="password"
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
            />

            {passwordErrors.newPassword && (
              <p className="settings-error">{passwordErrors.newPassword}</p>
            )}
          </div>

          {/* CONFIRM PASSWORD */}

          <div className="settings-field">
            <label>Confirm Password</label>

            <input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />

            {passwordErrors.confirmPassword && (
              <p className="settings-error">{passwordErrors.confirmPassword}</p>
            )}
          </div>

          <div className="settings-form-actions">
            <button type="submit">Change Password</button>
          </div>
        </form>
      </div>

      <div className="settings-card">
        <div className="settings-card-header">
          <div className="settings-card-icon">🎨</div>

          <div>
            <h2>Appearance</h2>
            <p>Choose how the admin panel looks</p>
          </div>
        </div>

        <div className="theme-options">
          {/* LIGHT */}

          <label
            className={`theme-option ${
              theme === "light" ? "theme-option-active" : ""
            }`}
          >
            <input
              type="radio"
              name="theme"
              value="light"
              checked={theme === "light"}
              onChange={(event) => setTheme(event.target.value)}
            />

            <div className="theme-option-content">
              <strong>Light</strong>

              <span>Use the light appearance</span>
            </div>
          </label>

          {/* DARK */}

          <label
            className={`theme-option ${
              theme === "dark" ? "theme-option-active" : ""
            }`}
          >
            <input
              type="radio"
              name="theme"
              value="dark"
              checked={theme === "dark"}
              onChange={(event) => setTheme(event.target.value)}
            />

            <div className="theme-option-content">
              <strong>Dark</strong>

              <span>Use the dark appearance</span>
            </div>
          </label>

          {/* SYSTEM */}

          <label
            className={`theme-option ${
              theme === "system" ? "theme-option-active" : ""
            }`}
          >
            <input
              type="radio"
              name="theme"
              value="system"
              checked={theme === "system"}
              onChange={(event) => setTheme(event.target.value)}
            />

            <div className="theme-option-content">
              <strong>System</strong>

              <span>Follow your device preference</span>
            </div>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Settings
