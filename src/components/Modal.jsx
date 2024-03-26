import React, { useRef, useState } from 'react';
import '../css/Modal.css';
import emailjs from '@emailjs/browser';

function Modal({ isOpen, onClose, backgroundColor, isDarkMode }) {

    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        emailjs
            .sendForm('service_p58sk5c', 'template_t5t1ls8', form.current, {
                publicKey: 'uZdET-1cop5hW58NG',
            })
            .then(
                () => {
                    setIsSubmitting(false);
                    alert('Votre message est bien parvenu à Ruphin');
                    form.current.reset();
                    onClose();
                },
                (error) => {
                    setIsSubmitting(false);
                    alert(error.text);
                },
            )
            .catch((error) => {
                setIsSubmitting(false);
                alert(error.text);
            });
    };
    
    if (!isOpen) return null;

    return (
        <>
        
        <div className="modal-overlay" >
            <div className={`modal ${isOpen ? 'open' : ''}`} style={{ backgroundColor: backgroundColor }}>
                <div className="head">
                    <h4 style={{ color: isDarkMode ? '#ffffff' : 'blueviolet' }}>Contactez-nous</h4>
                    <span className="close" onClick={onClose}>&times;</span>
                </div>
                <div className="modal-content">
                    <form className='form-modal' ref={form} onSubmit={sendEmail}>
                        <div className="form-group">
                            <input type="email" id="email" name="user_email" placeholder="Votre email" required />
                        </div><br />
                        <div className="form-group">
                            <textarea id="message" name="message" rows="4" placeholder="Votre message" required></textarea>
                        </div>
                        <div className="button">
                            <button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? <span className="spinner"></span> : null} Envoyer
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}

export default Modal;
