import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>FLORIN TUDOR</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Experience</a></li>
        <li><a href='#'>Services</a></li>
        <li><a href='#'>Portfolio</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="linkedin.com/in/florin-tudor-55a149195/"><BsLinkedin/></a>
        <a href="https://github.com/razer89"><FaGithub/></a>
        <a href="https://instagram.com/tudorfd89/"><BsInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Florin Tudor. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer