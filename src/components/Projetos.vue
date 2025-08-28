<template>
  <section class="projetos" id="projetos">
    <h2>Meus Projetos</h2>

    <div v-if="loading" class="estado">Carregando…</div>
    <div v-else-if="erro" class="estado erro">Erro: {{ erro }}</div>

    <div v-else class="grid-projetos">
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
    return { projetos: [], loading: true, erro: null };
  },
  async mounted() {
    try {
      const res = await fetch("/.netlify/functions/projetos", { headers: { "Cache-Control": "no-cache" } });
      if (!res.ok) throw new Error("Erro ao carregar projetos");
      const { items } = await res.json();
      this.projetos = items;
    } catch (e) {
      this.erro = e.message || String(e);
    } finally {
      this.loading = false;
    }
  },
};
</script>


<style scoped>
/* --------- Layout da seção --------- */
.projetos {
  padding: 4rem 2rem;
  background-color: var(--bg);
  color: var(--text);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.projetos h2 {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 3rem;
}

/* --------- Grid responsivo --------- */
.grid-projetos {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;              /* espaço entre cards (linha e coluna) */
  justify-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;        /* largura máxima do conteúdo */
}

/* 2 colunas em tablets */
@media (min-width: 700px) {
  .grid-projetos {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

/* 3 colunas em desktop */
@media (min-width: 1024px) {
  .grid-projetos {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}

/* --------- Card --------- */
.card-projeto {
  background-color: #1f1f1f;         /* fundo escuro como no estilo antigo */
  border: 1px solid #333;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  width: 100%;
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
  height: 220px;            /* ajuste mais equilibrado para grid */
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

/* Estados */
.estado { margin: 1rem auto 0; opacity: .85; }
.estado.erro { color: #ff6b6b; }

/* Overlay mantido escondido */
.projeto-overlay { visibility: hidden; }

@media (max-width: 900px) {
  /* Projetos */
  .projetos {
    padding: 3rem 1rem;
  }

  .grid-projetos {
    grid-template-columns: 1fr; /* uma coluna */
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
