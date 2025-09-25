<script>
  import LogoN7 from './assets/Logo-toulouse-inp-N7.png'
  import Prune from './assets/photo_Prune.jpg'
</script>

<div class="content-layout">
  <img src={Prune} class="image" alt="Prune" />
  <main>
    <div>
      <a href="https://www.enseeiht.fr/fr/index.html" target="_blank" rel="noreferrer">
        <img src={LogoN7} class="logo" alt="Logo N7" />
      </a>
    </div>
    <h1>Hello, I'm Prune Mamalet. </h1>
    <h2>I'm currently studying at ENSEEIHT in the digital sciences department.</h2>
    <p>
      Welcome on my e-portefolio !
    </p>
  </main>
</div>
<section class="contact-section">
  <h2>You can contact me here : </h2>
  <div class="contact-cards">
    <a class="contact-card" href="https://www.linkedin.com/in/prune-mamalet-689157318/" target="_blank" rel="noreferrer">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" class="icon" />
      LinkedIn
    </a>
    <a class="contact-card" href="https://github.com/Pruneeuh" target="_blank" rel="noreferrer">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Github" class="icon" />
      Github
    </a>
    <a class="contact-card" href="mailto:prunemamalet31240@gmail.com">
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Email" class="icon" />
      prunemamalet31240@gmail.com
    </a>
    <a class="contact-card" href="/Portefolio/CVs.pdf" target="_blank" rel="noreferrer">
      <img src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png" alt="CV" class="icon" />
      Curriculum Vitae
    </a>
  </div>
</section>

<style>
  .image {
    width: 12em;
    height: auto;
  }
  .contact-section {
    text-align: center;
    margin-top: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .contact-cards {
    display: flex;
    justify-content: center;
    gap: 2em;
    margin-top: 1em;
    flex-wrap: wrap;
  }
  .contact-card {
    background: #fff;
    border-radius: 1em;
    box-shadow: 0 2px 8px #0001;
    padding: 1em 2em;
    display: flex;
    align-items: center;
    gap: 0.7em;
    text-decoration: none;
    color: #222;
    font-weight: 500;
    transition: box-shadow 0.2s;
  }
  .contact-card:hover {
    box-shadow: 0 4px 16px #0002;
    background: #f5f5f5;
  }
  .content-layout {
    display: flex;
    align-items: flex-start;
    gap: 2em;
    margin-top: 2em;
  }
 
  main {
    flex: 1;
  }
</style>
