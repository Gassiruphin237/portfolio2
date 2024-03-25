// Modal.js

import React from 'react';
import '../css/Modal.css';

function Modal({ isOpen, onClose, backgroundColor, isDarkMode }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" >
      <div className={`modal ${isOpen ? 'open' : ''}`} style={{ backgroundColor: backgroundColor }}>
        <div className="head">
          <h4 style={{ color: isDarkMode ? '#ffffff' : 'blueviolet' }}>Contactez-nous</h4>
          <span className="close" onClick={onClose}>&times;</span>
        </div>
        <div className="modal-content">
          <form className='form-modal'>
            <div className="form-group">
              <input type="email" id="email" name="email" placeholder="Votre email" required />
            </div><br />
            <div className="form-group">
              <textarea id="message" name="message" rows="4" placeholder="Votre message" required></textarea>
            </div>
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
