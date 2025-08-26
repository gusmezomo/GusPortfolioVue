<template>
  <section
    id="sobre"
    class="sobre"
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :enter="{ opacity: 1, y: 0 }"
    :duration="800"
  >
    <h2 class="sobre-titulo">Sobre mim</h2>
    <div class="sobre-pagina">
      <div
        class="sobre-img"
        v-motion
        :initial="{ opacity: 0, x: -50 }"
        :enter="{ opacity: 1, x: 0 }"
        :duration="800"
      >
        <img src="/img/perfil2.jpg" alt="Foto2" />
      </div>

      <div
        class="sobre-info"
        v-motion
        :initial="{ opacity: 0, x: 50 }"
        :enter="{ opacity: 1, x: 0 }"
        :duration="800"
      >
        <h3>Gustavo Dalla Porta Mezomo</h3>
        <p><i class="fas fa-laptop-code"></i> Estudante de Ciência da Computação na Unisinos, apaixonado por programação.</p>
        <p><i class="fas fa-book"></i> Experiência em HTML, CSS, JavaScript, Python, Java. Em constante evolução.</p>
        <p><i class="fas fa-lightbulb"></i> Interesses em desenvolvimento Front-end, com foco em sites e aplicativos.</p>
      </div>
    </div>
  </section>
</template>