import '../styles/components/technologiescontainer.sass';
import technologiesData from '../mocks/technologies.json';

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <h3 id="technologies-grid-title">Languages</h3>
      <div id="technologies-grid-icons">
        {
          technologiesData.languages.map((languages) => (
            <img src={ languages['img-url'] } key={ languages.name } />
          ))
        }
      </div>
      <h3 id="technologies-grid-title">Frameworks and Libaries</h3>
      <div id="technologies-grid-icons">
        {
          technologiesData.frameworks.map((frameworks) => (
            <img src={ frameworks['img-url'] } key={ frameworks.name } />
          ))
        }
      </div>
      <h3 id="technologies-grid-title">Databases</h3>
      <div id="technologies-grid-icons">
        {
          technologiesData.databases.map((databases) => (
            <img src={ databases['img-url'] } key={ databases.name } />
          ))
        }
      </div>
      <h3 id="technologies-grid-title">Testing</h3>
      <div id="technologies-grid-icons">
        {
          technologiesData.testing.map((testing) => (
            <img src={ testing['img-url'] } key={ testing.name } />
          ))
        }
      </div>
      <h3 id="technologies-grid-title">Versioning</h3>
      <div id="technologies-grid-icons">
        {
          technologiesData.versioning.map((versioning) => (
            <img src={ versioning['img-url'] } key={ versioning.name } />
          ))
        }
      </div>
      <h3 id="technologies-grid-title">Others/Tools</h3>
      <div id="technologies-grid-icons">
        {
          technologiesData.others.map((others) => (
            <img src={ others['img-url'] } key={ others.name } />
          ))
        }
      </div>
    </section>
  )
}

export default TechnologiesContainer;