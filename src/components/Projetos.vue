<template>
  <section id="projetos" class="projetos">
    <h2
      v-motion
      :initial="{ opacity: 0, y: -20 }"
      :enter="{ opacity: 1, y: 0 }"
      :duration="600"
    >
      Projetos
    </h2>
    <div class="grid-projetos">
      <div 
        v-for="(projeto, index) in projetos" 
        :key="index"
        class="card-projeto"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0 }"
        :duration="500"
        :delay="index * 100"
      >
        <h3>{{ projeto.titulo }}</h3>
        <p>{{ projeto.descricao }}</p>
        <a :href="projeto.link" target="_blank" rel="noopener noreferrer">
          <img :src="`/img/${projeto.imagem}.png`" :alt="projeto.titulo" />
          <div class="projeto-overlay">
            <span>Ver projeto</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projetos: [
        { 
          titulo: 'Hamann Baptista Advocacia', 
          descricao: 'Site desenvolvido para um escritorio de advocacia.', 
          imagem: 'hamann', 
          link: 'https://hamannbaptista.com' 
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Projetos */
.projetos {
  padding: 4rem 2rem;
  background-color: var(--bg);
  color: var(--text);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* titulo da pagina */
.projetos h2 {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 3rem;
}

.grid-projetos {
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 1rem; /* espaço lado a lado */
  row-gap: 1.5rem;    /* espaço de cima pra baixo */
  justify-items: center; /* centraliza os itens dentro de cada bloco */ /* largura máxima */
  margin: 0 auto;
}


.card-projeto {
  background-color: #1f1f1f;
  border: 1px solid #333;
  border-radius: 12px; /* bordas arredondadas */
  padding: 2rem; /* espaçamento interno */
  text-align: center; 
  width: 100%; /* ocupa todo o grid */  /* largura máxima */
}

/* efeito ao passar o mouse */
.card-projeto:hover {
  border-color: var(--accent);
  box-shadow: 0 0 30px var(--border-shadow); /* sombra ao passar o mouse */
}

/* titulo do projeto */
.card-projeto h3 {
  font-size: 1.4rem;
  margin-bottom: 0.3rem;
}

/* descricao do projeto */
.card-projeto p {
  font-size: 1rem;
  color: #bbb;
  margin-bottom: 1rem;
}

/* imagem */
.card-projeto img {
  width: 100%;
  height: 400px;
  object-fit: cover; /* preenche o espaco sem distorcer */
  border-radius: 8px;
}

.projeto-overlay {
visibility: hidden;
}
</style>