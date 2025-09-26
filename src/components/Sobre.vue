<template>
  <section
    id="sobre"
    class="sobre"
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :visible="{ opacity: 1, y: 0 }"
    :duration="800"
    :delay="300"
  >
    <h2 class="sobre-titulo">Sobre mim</h2>
    <div class="sobre-pagina">
      <div
        class="sobre-img"
        v-motion
        :initial="{ opacity: 0, x: -50 }"
        :visible="{ opacity: 1, x: 0 }"
        :duration="800"
        :delay="600"
      >
        <img src="/img/perfil2.jpg" alt="Foto2" />
      </div>

      <div
        class="sobre-info"
        v-motion
        :initial="{ opacity: 0, x: 50 }"
        :visible="{ opacity: 1, x: 0 }"
        :duration="800"
        :delay="900"
      >
        <h3>Gustavo Dalla Porta Mezomo</h3>
        <p><i class="fas fa-laptop-code"></i> Estudante de Ciência da Computação na Unisinos, apaixonado por programação.</p>
        <p><i class="fas fa-book"></i> Experiência em HTML, CSS, JavaScript, Python, Java. Em constante evolução.</p>
        <p><i class="fas fa-lightbulb"></i> Interesses em desenvolvimento Front-end, com foco em sites e aplicativos.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Sobre Mim */
  .sobre {
  padding: 10rem 2rem 10rem; /* espaçamento de cima e embaixo do fundo */
  background-color: var(--bg2);
  color: var(--text);
}

.sobre-titulo {
  text-align: center;
  font-size: 2.6rem;
  margin-bottom: 5rem;
  font-weight: bold;
}

.sobre-pagina {
  display: flex;
  gap: 4rem;
  justify-content: center; /* centraliza horizontalmente */
  align-items: center; /* alinha verticalmente */
  max-width: 1200px; /* largura maxima para manter o conteudo */
  margin: 0 auto; /* centraliza o container */
}

.sobre-img img {
  width: 400px;
  height: 400px;
  object-fit: cover; /* preenche o espaco sem distorcer */
  border-radius: 20px; /* bordas arredondadas */
  border: 4px solid var(--accent); /* borda colorida */
  box-shadow: 0 0 30px var(--border-shadow); /* sombra */
}

.sobre-info {
  min-width: 280px; /* tamanho minimo do texto */
  font-size: 1.15rem;
  line-height: 1.8; /* espaçamento entre linhas */
}

/* titulo */
.sobre-info h3 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

/* paragrafo */
.sobre-info p {
  margin-top: 1rem;
  margin-bottom: 2rem;
  color: #ddd;
  text-align: justify;
}

.sobre-info i {
  color: var(--accent); /* ou qualquer cor que combine com seu tema */
}

@media (max-width: 900px) {

  /* Sobre */
  .sobre-pagina {
    flex-direction: column; /* uma coluna */
    gap: 2rem;
    text-align: center;
  }

  /* tamanho da imagem */
  .sobre-img img {
    width: 280px;
    height: 280px;
  }

  /* tamanho do texto "Sobre Mim" */
  .sobre-titulo {
    font-size: 2.2rem;
  }

  /* tamanho do texto do nome */
  .sobre-info h3 {
    font-size: 1.8rem;
  }
}
</style>