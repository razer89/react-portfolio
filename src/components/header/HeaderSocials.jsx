import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/florin-tudor-55a149195/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/razer89" target="_blank"><FaGithub/></a>
        <a href="https://instagram.com/tudorfd89/" target="_blank"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials