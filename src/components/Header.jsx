import React, { useState } from 'react'
import '../css/Header.css'
function Header() {
    function downloadFile() {
        const fileUrl = 'docs/Curriculum vitae.pdf';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = true;
        link.click();
    }
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(prevState => !prevState);
        const body = document.querySelector('body');
        body.style.backgroundColor = isChecked ? '#ffffff' : '#202124';
        body.style.color = isChecked ? '#000' : '#ffffff';
    };
    return (
        <div className='container'>
            <div className="toggle-container">
                <label className="toggle-switch">
                    <input type="checkbox" checked={isChecked} onChange={handleToggle} />
                    <span className="toggle-slider"></span>
                </label>
            </div>
            <p className="title" style={{ color: 'linear-gradient(45deg, blueviolet, #ff1493a)' }}
            >
                About Me
            </p>
            <p className="avatar">
                <img src="assets/ruphin.jpg" alt="" srcset="" />
            </p>
            <div className="name">
                <h3>Ruphin | Frontend Developer</h3>
                <div className="media">
                    <a href="https://www.linkedin.com/in/ruphin-gassi-a401751a5/" target='_blank' rel="noopener noreferrer">
                        <img src="assets/linkedin.png" alt="git" />
                    </a>
                    <a href="https://github.com/Gassiruphin237" target='_blank' rel="noopener noreferrer">
                        <img src={isChecked ? "assets/git-jpg.png" : "assets/git-png.png"} alt="git" />
                    </a>
                </div>
            </div>
            <button className='cv' onClick={downloadFile}>
                Donwload CV
            </button>
            <p className="desc">
                Artisan du web, je sculpte des interfaces élégantes et des expériences utilisateur fluides, fusionnant créativité et technologie pour donner vie à des produits remarquables et engageants.
            </p>
        </div>
    )
}

export default Header