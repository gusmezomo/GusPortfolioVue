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