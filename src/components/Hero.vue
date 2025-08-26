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