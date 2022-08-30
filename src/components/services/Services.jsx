import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Working in agile teams.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experience working with Photoshop, Figma and Adobe XD.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Frontend programming languages such as HTML5, CSS3 and JavaScript.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Managing the responsiveness, interactivity and animation of a product and making it adaptive to all screen sizes.</p>
            </li>
            
          </ul>
        </article>

        {/*END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Laravel Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>eCommerce Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>HTML5 Website Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Performing UI accessibility following with ADA, WCAG 2.1 success criteria of level A, AA and AAA.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Provide appropriate HTML, CSS, JavaScript, ARIA roles, states and properties following with accessibility best practices.</p>
            </li>
          </ul>
        </article>

        {/*END OF WEB DEVELOPMENT*/}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Logo and brand design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Digital and print.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Social Media.</p>
            </li>
            
          </ul>
        </article>

        {/*END OF Content Creation */}
      </div>
    </section>
  )
}

export default Services