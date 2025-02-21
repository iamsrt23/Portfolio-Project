const ProjectCard = ({ src,link,h3,title }) => {
  return (
    <a href={link} target='_blank'>
    <img className="hover" src={src} alt={`${h3} logo`}/>

    <h3>{h3}</h3>
    <p>{title}</p>
    </a>
    
  )
}

export default ProjectCard