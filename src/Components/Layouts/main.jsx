import styles from './main.module.css'
import { useNavigate } from 'react-router-dom'
import blog from './../../images/blog.jpg'
import { Link } from 'react-router-dom'
import { BsLinkedin } from 'react-icons/bs'
import { FaTwitter } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import logo from './../../images/programming.svg'
import { AiFillMail } from 'react-icons/ai'

function Main() {
  return (
    <main className={styles['main-section']}>
      <h1 className={styles.intro}>
        <span>Hi</span>,<span>I</span>
        <span>am</span>
        <span>David</span>
        <span>Bodunrin</span>
        <span>| </span>
        <span>web developer</span>
      </h1>

      <div className={styles.social_media}>
        <a href="https://www.github.com/davieoba" className={styles.link}>
          <FaGithub size={30} />
        </a>
        <a href="https://www.twitter.com/bodunrindavid" className={styles.link}>
          <FaTwitter size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/david-bodunrin-oluwaseun"
          className={styles.link}
        >
          <BsLinkedin size={30} />
        </a>
        <a href="mailto:bodunrindavidbond@gmail.com" className={styles.link}>
          <AiFillMail size={35} />
        </a>
      </div>

      {/* <div id={styles.wrapper}> */}
      <h3 className={styles.small_intro}>
        I love trying out new things, so that I can achieve my childhood dream a
        -<span className={styles.hack}>hacker 😅</span>
      </h3>
    </main>
  )
}

export default Main
