function Modal({ title, message, onConfirm, onCancel }) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        {/* MODAL ICON */}

        <div className="modal-icon">⚠️</div>

        {/* TITLE */}

        <h2 className="modal-title">{title}</h2>

        {/* MESSAGE */}

        <p className="modal-message">{message}</p>

        {/* ACTION BUTTONS */}

        <div className="modal-actions">
          <button
            type="button"
            className="modal-cancel-button"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            type="button"
            className="modal-confirm-button"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
