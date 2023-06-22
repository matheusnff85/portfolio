import '../styles/components/projectscontainer.sass';

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <a 
        href="https://github.com/matheusnff85"
        className="btn"
        target="_blank"
        rel="noreferrer noopener"
      >
        Veja Meus Projetos!
      </a>
    </section>
  )
}

export default ProjectsContainer;