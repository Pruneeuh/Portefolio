<script>
  import Router from 'svelte-spa-router'
  import Home from './Home.svelte'
  import Engineering from './Engineering.svelte'

  const routes = {
    '/': Home,
    '/engineering': Engineering,
    // Ajoute d'autres routes ici si besoin
  }
</script>

<div class="main-layout">
  <nav class="navbar">
    <a href="#/" class="nav-link">Accueil</a>
    <a href="#/engineering" class="nav-link">Engineering</a>
    <a href="#/international" class="nav-link">International</a>
    <a href="#/civil-engagement" class="nav-link">Civil Engagement</a>
    <a href="#/experience" class="nav-link">Experience</a>
  </nav>
  <Router {routes} />
</div>

<style>
  /* Ajoute dans App.svelte ou dans ton fichier global */
.main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.navbar {
  display: flex;
  justify-content: center; /* ou flex-start si tu veux aligner à gauche */
  gap: 2em;
  padding: 1em 0;
  position: sticky;
  top: 0;
  z-index: 10;
}
</style>
