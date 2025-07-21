<script>
  import LogoN7 from './assets/Logo-toulouse-inp-N7.png'
  import Counter from './lib/Counter.svelte'
</script>

<div class="main-layout">
  <aside class="sidebar">
    <!-- Contenu de ta section à gauche, par exemple : -->
    <h2>À propos de moi</h2>
    <p>Étudiante passionnée par l'ingénierie et l'international.</p>
    <!-- Ajoute ici ce que tu veux -->
  </aside>
  <main>
    <nav class="navbar">
      <a href="/engineering" class="nav-link">Engineering</a>
      <a href="/international" class="nav-link">International</a>
      <a href="/civil-engagement" class="nav-link">Civil Engagement</a>
      <a href="/experience" class="nav-link">Experience</a>
    </nav>

    <div>
      <a href="https://svelte.dev" target="_blank" rel="noreferrer">
        <img src={LogoN7} class="logo" alt="Logo N7" />
      </a>
    </div>
    <h1>Hello, I'm Prune Mamalet. </h1>
    <h2>I'm an engineering student at the ENSEEIHT</h2>

    <p>
      Check out <a href="https://github.com/Pruneeuh" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
    </p>

    <p class="read-the-docs">
      Click on the Vite and Svelte logos to learn more
    </p>

    <section class="contact-section">
      <h2>Contact</h2>
      <p>Get in touch with me:</p>
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
          tonmail@gmail.com
        </a>
        <a class="contact-card" href="/cv.pdf" target="_blank" rel="noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="CV" class="icon" />
          Curriculum Vitae
        </a>
      </div>
    </section>
  </main>
</div>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .read-the-docs {
    color: #888;
  }
  .contact-section {
    text-align: center;
    margin-top: 3em;
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
  .icon {
    width: 32px;
    height: 32px;
  }
  .main-layout {
    display: flex;
    align-items: flex-start;
    gap: 2em;
  }
  .sidebar {
    min-width: 220px;
    background: #f7f7f7;
    padding: 2em 1em;
    border-radius: 1em;
    box-shadow: 0 2px 8px #0001;
  }
  main {
    flex: 1;
  }
</style>
