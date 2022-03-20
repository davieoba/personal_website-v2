import Footer from '../Components/Footer'
import me from './../images/me.jpg'
import styles from './about.module.css'
import Header from './../Components/Header'
import { Link, useNavigate } from 'react-router-dom'
import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
import { AiFillMail } from 'react-icons/ai'


function About() {
  const navigate = useNavigate()
  function handleResume(){
    window.location.replace('https://www.google.com')
  }
  return (
    <div className={styles.about}>
      <div id={styles.header}>
        <Header />
      </div>
      <div id={styles.about_section}>
        <div id={styles.resume}>
          <h2>
            Looking for my{' '}
            <span className={styles.resume_higlight}>Resume</span>?
          </h2>
          <a className={styles.link} onClick={handleResume}>
            {' '}
            Download Resume{' '}
          </a>
        </div>
        <div id={styles.quick_story} className={styles.story}>
          <h4 className={styles.quickstory_header}>
            <span> My quick </span>{' '}
            <span className={styles.highlight}> story</span>
          </h4>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            perferendis incidunt, vel facere iure minima culpa id blanditiis
            repudiandae expedita ea suscipit laudantium aperiam voluptatum ab et
            distinctio illum vitae! Facere assumenda provident minus ut ea unde
            modi laboriosam velit doloremque fuga accusamus voluptates nesciunt
            laudantium atque repudiandae similique inventore obcaecati
            praesentium odio itaque quam eos, iste nihil veritatis. Saepe. Culpa
            aspernatur odit nemo cumque neque quo, labore facilis rerum vitae
            asperiores obcaecati, eius nostrum voluptatibus sit perspiciatis.
            Sed fuga architecto doloribus maxime at minus non magni nam fugiat
            ea.
          </p>
        </div>

        <div id={styles.developer} className={styles.story}>
          <h4 className={styles.quickstory_header}>
            <span> As a </span>{' '}
            <span className={styles.highlight} id={styles.dev_highlight}>
              {' '}
              developer
            </span>
          </h4>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            perferendis incidunt, vel facere iure minima culpa id blanditiis
            repudiandae expedita ea suscipit laudantium aperiam voluptatum ab et
            distinctio illum vitae! Facere assumenda provident minus ut ea unde
            modi laboriosam velit doloremque fuga accusamus voluptates nesciunt
            laudantium atque repudiandae similique inventore obcaecati
            praesentium odio itaque quam eos, iste nihil veritatis. Saepe. Culpa
            aspernatur odit nemo cumque neque quo, labore facilis rerum vitae
            asperiores obcaecati, eius nostrum voluptatibus sit perspiciatis.
            Sed fuga architecto doloribus maxime at minus non magni nam fugiat
            ea.
          </p>
        </div>

        <div id={styles.colleague} className={styles.story}>
          <h4 className={styles.quickstory_header}>
            <span> As a </span>{' '}
            <span className={styles.highlight} id={styles.coll_highlight}>
              {' '}
              colleague
            </span>
          </h4>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            perferendis incidunt, vel facere iure minima culpa id blanditiis
            repudiandae expedita ea suscipit laudantium aperiam voluptatum ab et
            distinctio illum vitae! Facere assumenda provident minus ut ea unde
            modi laboriosam velit doloremque fuga accusamus voluptates nesciunt
            laudantium atque repudiandae similique inventore obcaecati
            praesentium odio itaque quam eos, iste nihil veritatis. Saepe. Culpa
            aspernatur odit nemo cumque neque quo, labore facilis rerum vitae
            asperiores obcaecati, eius nostrum voluptatibus sit perspiciatis.
            Sed fuga architecto doloribus maxime at minus non magni nam fugiat
            ea.
          </p>
        </div>

        <div className={styles.with_love}>
          <h3>I would love to hear from you ❤️ </h3>
          <div className={styles.social_icons}>
            <div className={styles.icons}>
              <h4>Get in touch </h4>
              <div id={styles.social}>
                <a href="https://www.github.com/davieoba">
                  <FaGithub
                    size={24}
                    fill="#1f2937"
                    style={{ cursor: 'pointer' }}
                  />
                </a>
                <a href="https://www.linkedin.com/in/david-bodunrin-oluwaseun">
                  <FaLinkedin
                    size={24}
                    fill="#1f2937"
                    style={{ cursor: 'pointer' }}
                  />
                </a>

                <a href="https://www.twitter.com/bodunrindavid">
                  <FaTwitter
                    size={24}
                    fill="#1f2937"
                    style={{ cursor: 'pointer' }}
                  />
                </a>

                <a href="mailto:bodunrindavidbond@gmail.com">
                  <AiFillMail
                    size={30}
                    fill="#1f2937"
                    style={{ cursor: 'pointer' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
