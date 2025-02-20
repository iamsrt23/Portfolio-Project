import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import themeIcon from '../../assets/sun.svg'
import twitterIcon from '../../assets/twitter-light.svg'
import gitHubIcon from '../../assets/github-light.svg'
import linkedInIcon from '../../assets/linkedin-light.svg'
import CV from '../../assets/cv.pdf'

const Hero = () => {
  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile Image" />
        <img  className={styles.colorMode} src={themeIcon} alt='Color Mode Icon' />
      </div>
      <div className={styles.info}>
        <h1>Ravi<br />Teja</h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href='https://twitter.com/' target="_blank">
          <img src={twitterIcon}  alt="X icon"/>
          </a>
          <a href='https://github.com/' target="_blank">
          <img src={gitHubIcon}  alt="github icon"/>
          </a>
          <a href='https://linkedin.com/' target="_blank">
          <img src={linkedInIcon}  alt="linkedin icon"/>
          </a>
        </span>
        <p>
          With a passion for developing modren React web apps for commercial bussinesses.
        </p>
        <a href={CV} download>
          <button className='hover'> Resume </button>
        </a>
      </div>
    </section>
  )
}

export default Hero