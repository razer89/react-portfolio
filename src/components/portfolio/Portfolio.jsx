import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/01.jpeg'
import IMG2 from '../../assets/02.jpeg'
import IMG3 from '../../assets/03.jpeg'
import IMG4 from '../../assets/04.jpeg'
import IMG5 from '../../assets/05.jpeg'
import IMG6 from '../../assets/comingsoon.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Adobe XD Design',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19241419-Paco-Dog-Grooming-Adobe-XD'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Movie App',
    github: 'https://github.com',
    demo: 'https://youtube.com/shorts/HXI9bWjU5dY?feature=share',

  },
  {
    id: 3,
    image: IMG3,
    title: 'API Swapi',
    github: 'https://github.com/razer89/API-Swapi-dev/',
    demo: 'https://github.com/razer89/API-Swapi-dev/',

  },
  {
    id: 4,
    image: IMG4,
    title: 'OMU PEAK Logo Design',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19241610-OMU-PEAK-Logo-Design',

  },
  {
    id: 5,
    image: IMG5,
    title: 'Real Estate Platform (Laravel Development)',
    github: 'https://github.com',
    demo: 'https://www.housezz.co.uk/',

  },
  {
    id: 6,
    image: IMG6,
    title: 'BiaEyelashes (React Development)',
    github: 'https://github.com',
    demo: 'https://github.com',

  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
          )
        } )
       }
      </div>
    </section>
  )
}

export default Portfolio