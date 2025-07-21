<script>
  let name = "Prune Mamalet ";
  let description = "Développeur web passionné avec une expertise en ...";
  let cvLink = "https://example.com/votre-cv.pdf"; // Remplacez par le lien de votre CV
  let githubLink = "https://github.com/votre-utilisateur"; // Remplacez par votre lien GitHub
  let linkedinLink = "https://linkedin.com/in/votre-utilisateur"; // Remplacez par votre lien LinkedIn
</script>

<main>
  <h1>Bienvenue sur le portfolio de {name}</h1>
  <p>{description}</p>

  <nav>
    <ul>
      <li><a href={cvLink} target="_blank" rel="noopener noreferrer">Mon CV</a></li>
      <li><a href={githubLink} target="_blank" rel="noopener noreferrer">Mon GitHub</a></li>
      <li><a href={linkedinLink} target="_blank" rel="noopener noreferrer">Mon LinkedIn</a></li>
    </ul>
  </nav>

  <section>
    <h2>À propos de moi</h2>
    <p>
      Mettez ici une brève présentation de vous-même, vos compétences clés, vos projets préférés, etc.
    </p>
  </section>

  </main>

<style>
  main {
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  h1 {
    color: #333;
  }
  nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  nav a {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
  }
  nav a:hover {
    text-decoration: underline;
  }
  section {
    margin-top: 40px;
    text-align: left;
  }
</style>