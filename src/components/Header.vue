<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/#hero">Inicio</router-link></li>
        <li><router-link to="/#sobre">Sobre</router-link></li>
        <li><router-link to="/#projetos">Projetos</router-link></li>
        <li><router-link to="/#contato">Contato</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
/* Cabecalho */
header {
  position: fixed; /* fixa no topo da tela */
  top: 0;
  width: 100%;
  background-color: var(--bg);
  padding: 1.5rem 0; /* espaçamento interno */
  border-bottom: 1px solid var(--accent);
  z-index: 9999; /* garante que o header fique acima de outros elementos */ 
}

/* botoes de navegacao no cabecalho*/
nav {
  display: flex; /* transforma o nav em um container flexível */
  justify-content: center; /* centraliza os botoes horizontalmente */
}

nav ul {
  display: flex;
  list-style: none; /* remove as bolinhas padrao */
  gap: 2.5rem; /* gap entre os botoes */
  margin: 0;
  padding: 0;
}

nav a {
  text-decoration: none; /* remove o sublinhado */
  color: var(--text);
  font-weight: 600;
  font-size: 1.15rem;
}

/* efeito quando o mouse passa por cima */
nav a:hover {
  color: var(--accent);
}
</style>


