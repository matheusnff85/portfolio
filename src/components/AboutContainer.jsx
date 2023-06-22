import '../styles/components/aboutcontainer.sass'

const AboutContainer = () => {
  return (
    <section className="about-container">
      <h2>Sobre</h2>
      <p id="about-paragraph">
        Entusiasta por tecnologia, e apaixonado por jogos, desde pequeno sempre me impressionei com os poderes que um computador possui,
        e com isso minha paixão pelo desenvolvimento se aflorou, aos meus 21 anos decidi iniciar meus estudos na área e me tornar um
        desenvolvedor de fato, quando não estou codando, estudando ou jogando, gosto de passar meu tempo livre praticando algum esporte 
        (99% das vezes futebol), e também gosto de sair e visitar novos lugares.
      </p>
      <ul id="about-year-list">
        <li><strong>2023</strong> - Me formo na Trybe e me torno um Desenvolvedor Web FullStack</li>
        <li><strong>2022</strong> - Inicio meus estudos na Trybe</li>
        <li><strong>2017</strong> - Me formei no ensino médio</li>
        <li><strong>2015</strong> - Desenvolvi meu primeiro programa básico</li>
        <li><strong>1999</strong> - Nasci em Nova Friburgo, RJ</li>
      </ul>
      <br />
    </section>
  )
}

export default AboutContainer;