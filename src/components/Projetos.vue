<template>
  <section class="projetos" id="projetos"
    v-motion
        :initial="{ opacity: 0, x: 50 }"
        :visible="{ opacity: 1, x: 0 }"
        :delay="0"
        :duration="800"
  >
    <h2>Meus Projetos</h2>

    <div class="grid-projetos"
      v-motion
        :initial="{ opacity: 0, x: 50 }"
        :visible="{ opacity: 1, x: 0 }"
        :delay="0"
        :duration="800"
    >
      <article v-for="p in projetos" :key="p.titulo" class="card-projeto">
        <img v-if="p.imagem" :src="p.imagem" :alt="p.titulo" loading="lazy" />
        <h3>{{ p.titulo }}</h3>
        <p>{{ p.descricao }}</p>
        <a v-if="p.link" class="link-projeto" :href="p.link" target="_blank" rel="noopener">Ver projeto</a>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "Projetos",
  data() {
    return {
      projetos: [
        {
          titulo: "Hamann Baptista Advocacia",
          descricao: "Site desenvolvido para um escritório de advocacia.",
          imagem: "/img/project-hamann.webp",
          link: "https://hamannbaptista.com/",
        },
      ],
    };
  },
};
</script>


<style scoped>
/* --------- Layout da seção --------- */
.projetos {
  padding: 5rem 2rem 3rem;
  scroll-margin-top: 80px;
  background-color: var(--bg);
  color: var(--text);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.projetos h2 {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

/* --------- Grid responsivo --------- */
.grid-projetos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
}

/* --------- Card --------- */
.card-projeto {
  flex: 0 1 340px;
  background-color: #1f1f1f;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 1.25rem;
  text-align: center;
  transition: border-color .2s ease, box-shadow .2s ease, transform .2s ease;
}

.card-projeto:hover {
  border-color: var(--accent);
  box-shadow: 0 0 30px var(--border-shadow);
  transform: translateY(-2px);
}

/* Imagem de capa */
.card-projeto img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

/* Título e descrição */
.card-projeto h3 {
  font-size: 1.25rem;
  margin: .25rem 0 .5rem;
  color: #eaeaea;
}

.card-projeto p {
  font-size: 1rem;
  color: #bbb;              /* contraste suave sobre fundo escuro */
  margin-bottom: 1rem;
  line-height: 1.6;
}

/* Link */
.link-projeto {
  display: inline-block;
  text-decoration: none;
  color: var(--accent);
  font-weight: 600;
  border: 1px solid var(--accent);
  padding: .5rem .9rem;
  border-radius: 8px;
  transition: background-color .2s ease, color .2s ease;
}

.link-projeto:hover {
  background-color: var(--accent);
  color: #0f0f0f;           /* contraste quando o botão fica colorido */
}


@media (max-width: 900px) {
  /* Projetos */
  .projetos {
    padding: 3rem 1rem;
  }

  .grid-projetos {
    gap: 1rem;
  }

  /* tamanho das imagens */
  .card-projeto img {
    height: 200px;
  }

  /* tamanho do titulo */
  .projetos h2 {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }

  .card-projeto {
    padding: 1.5rem;
  }

}

/* Configurações para telas muito pequenas */
@media (max-width: 480px) {
  .projetos {
    padding: 2rem 1rem;
    min-height: auto;
  }

  .projetos h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  .card-projeto {
    padding: 1rem;
  }

  .card-projeto img {
    height: 180px;
  }

  .card-projeto h3 {
    font-size: 1.2rem;
  }

  .card-projeto p {
    font-size: 0.9rem;
  }
}
</style>
