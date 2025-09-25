<script>
  import Router from 'svelte-spa-router'
  import Home from './Home.svelte'
  import EngineeringCourse from './Engineering_course.svelte'
  import CivilEngagment from './Civil_engagment.svelte'
  import Experience from './Experience.svelte';
  import SustainableDevelopment from './Sustainable_development.svelte';

  const routes = {
    '/': Home,
    '/engineering': EngineeringCourse,
    '/civil-engagment': CivilEngagment,
    '/experience': Experience,
    '/sustainable-development': SustainableDevelopment,
  } 
</script>

<div class="main-layout">
  <nav class="navbar">
    <a href="#/" class="nav-link">Accueil</a>
    <a href="#/engineering" class="nav-link">Engineering course</a>
    <a href="#/civil-engagment" class="nav-link">Civil Engagment</a>
    <a href="#/experience" class="nav-link">Experience</a>
    <a href="#/sustainable-development" class="nav-link">Sustainable Development</a>
  </nav>
  <Router {routes} />
</div>

<style>
  
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
