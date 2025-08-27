<template>
  <section
    id="hero"
    class="hero"
    v-motion
    :initial="{ opacity: 0, y: -50 }"
    :enter="{ opacity: 1, y: 0 }"
    :duration="700"
  >
    <div class="hero-content">
      <div class="hero-text">
        <span class="badge">Seja Bem vindo!</span>
        <h1>Gustavo Mezomo</h1>
        <h2>Computer Science Student</h2>

        <div class="social-icons">
          <a href="https://github.com/gusmezomo" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/gusmezomo" target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/zgustam" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <div
        class="hero-foto"
        v-motion
        :initial="{ opacity: 0, scale: 0.8 }"
        :enter="{ opacity: 1, scale: 1 }"
        :delay="400"
        :duration="700"
      >
        <img src="/img/perfil.jpg" alt="Foto" />
      </div>

      <div
        class="contato-icons"
        v-motion
        :initial="{ opacity: 0, x: 50 }"
        :enter="{ opacity: 1, x: 0 }"
        :delay="700"
        :duration="600"
      >
        <a
          href="https://wa.me/5555996237814?text=Olá%2C%20vim%20pelo%20portfólio!"
          target="_blank"
          class="contato-btn"
        >
          <i class="fab fa-whatsapp"></i> Entre em contato
        </a>
        <a
          href="https://discord.gg/rDDfMq8pme"
          target="_blank"
          class="contato-btn"
        >
          <i class="fa-brands fa-discord"></i> Servidor no Discord
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* tela principal do site */
.hero {
  min-height: 100vh; /* altura minima, por causa do cabecalho */
  display: flex;
  justify-content: center; /* centraliza horizontalmente */
  padding: 4rem 2rem;
}

.hero-content {
  display: grid; /* usa grid para organizar o conteudo */
  grid-template-columns: 1fr auto 1fr; /* 3 colunas: texto, avatar, acoes */
  gap: 3rem;
  align-items: center;
}

/* texto principal (meu nome) */
.hero-text h1 {
  font-size: 3.6rem;
  margin: 0.5rem 0;
}

/* texto secundario (estudante) */
.hero-text h2 {
  font-size: 1.5rem;
  color: #cccccc;
  margin-bottom: 1.5rem;
}

/* foto */
.hero-foto img {
  width: 420px;
  height: 420px;
  object-fit: cover; /* preenche o espaco sem distorcer */
  border-radius: 50%; /* deixa em circulo */
  border: 6px solid var(--accent);
  box-shadow: 0 0 25px var(--border-shadow);
}

/* "Seja Bem vindo!" */
.badge {
  background-color: var(--accent);
  color: #fff;
  padding: 0.6rem 1.4rem; /* espaçamento interno */
  font-size: 1.1rem;
  font-weight: bold; /* texto em negrito */
  border-radius: 999px; /* bordas arredondadas */
  margin-bottom: 1rem;
  box-shadow: 0 0 12px var(--border-shadow); /* sombra suave */
}

/* icones de redes sociais */
.social-icons {
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
}

/* aparencia dos icones */
.social-icons a {
  text-decoration: none; /* remove o sublinhado */
  color: var(--text);
  font-size: 1.5rem;
}

/* efeito quando o mouse passa por cima */
.social-icons a:hover {
  color: var(--accent);
}

/* icones de contato */
.contato-icons {
  display: flex;
  flex-direction: column; /* botoes emcima do outro*/
  gap: 1rem;
  align-items: flex-end; /* alinha os botoes a direita */
}

/* aparencia dos botoes*/
.contato-btn {
  text-decoration: none; /* remove o sublinhado */
  padding: 0.6rem 1.2rem; /* espaçamento interno */
  border-radius: 30px; /* bordas arredondadas */
  border: 1px solid var(--accent);
  color: var(--accent);
  text-align: center;
}

/* efeito quando o mouse passa por cima */
.contato-btn:hover {
  background: var(--accent);
  color: white;
}

@media (max-width: 900px) {
  
  /* espaçamento do cabecalho */
  .hero {
    padding-top: 120px; 
  }

  /* pagina principal */
  .hero-content {
    grid-template-columns: 1fr; /* uma coluna */
    text-align: center; 
    gap: 1.5rem;
  }

  /* tamanho da imagem */
  .hero-foto img {
    width: 280px;
    height: 280px;
  }

  /* tamanho dos textos */
  .hero-text h1 {
    font-size: 2.6rem;
  }

  .hero-text h2 {
    font-size: 1.3rem;
  }

  /* centraliza os botoes de contato */
  .contato-icons {
    align-items: center;
    justify-content: center;
  }

  .social-icons {
    align-items: center;
    justify-content: center;
  }
}
</style>