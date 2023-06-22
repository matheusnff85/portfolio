import SocialNetworks from './SocialNetworks'
import avatar from '../img/98190301.jpeg'
import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'
import curriculo from '../mocks/matheus-marinho-curriculo.pdf';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={avatar} alt="Matheus Marinho" />
      <p className="title">Desenvolvedor Full Stack</p>
      <SocialNetworks />
      <InformationContainer />
      <a href={ curriculo } download className="btn">Download currículo</a>
    </aside>
  )
}

export default Sidebar