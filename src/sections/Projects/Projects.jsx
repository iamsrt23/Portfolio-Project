import styles from './ProjectStyles.module.css'
import Viber from '../../assets/viberr.png'
import ProjectCard from '../../common/ProjectCard'
import FreshBurger from '../../assets/fresh-burger.png'
const Projects = () => {
  return (
    <section id='projects' className={styles.container}>


      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
       <ProjectCard src={FreshBurger} link='https://github.com/iamsrt23/Online-Swiggy-app' h3='Swiggy' title='Food Delivery App'/>
       <ProjectCard src={Viber} link='https://github.com/iamsrt23/Threads-Clone-App' h3='Threads' title='Chatting-App'/>
      </div>
      
      
      
      
   
    </section>
  )
}

export default Projects