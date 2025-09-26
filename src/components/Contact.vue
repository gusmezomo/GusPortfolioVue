<template>
  <section
    id="contato"
    class="contato"
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :visible="{ opacity: 1, y: 0 }"
    :duration="800"
    :delay="0"
  >
    <div class="contato-container">
      <h2 class="contato-titulo">Entre em Contato</h2>
      <div class="contato-content">
        <div 
          class="contato-info"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0 }"
          :duration="800"
          :delay="0"
        >
          <h3>Vamos Conversar!</h3>
          <p>
            Estou sempre aberto a novas oportunidades e colaborações. 
            Se você tem um projeto em mente ou quer apenas bater um papo, 
            não hesite em me enviar uma mensagem!
          </p>
          <div class="contato-detalhes">
            <div class="contato-item">
              <span class="contato-icon"><i class="fas fa-envelope"></i></span>
              <span>Email: gusmezomo@gmail.com</span>
            </div>
            <div class="contato-item">
              <span class="contato-icon"><i class="fas fa-map-marker-alt"></i></span>
              <span>Localização: Porto Alegre, RS</span>
            </div>
            <div class="contato-item">
              <span class="contato-icon"><i class="fas fa-briefcase"></i></span>
              <span>Disponível para projetos freelance</span>
            </div>
          </div>
        </div>
        <form
          class="contato-form"
          @submit="onSubmit"
          autocomplete="off"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0 }"
          :duration="800"
          :delay="0"
        >
          <div class="form-group">
            <label for="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Seu nome completo"
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="seu-email@exemplo.com"
            />
          </div>
          <div class="form-group">
            <label for="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Conte-me sobre seu projeto ou ideia..."
              rows="6"
            ></textarea>
          </div>
          <button 
            type="submit" 
            class="contato-btn-enviar"
            :disabled="isSubmitting"
          >
            {{ isSubmitting ? 'Enviando...' : 'Enviar Mensagem' }}
          </button>
          <div v-if="submitStatus === 'success'" class="mensagem-sucesso">
            Mensagem enviada com sucesso! Entrarei em contato em breve.
          </div>
          <div v-if="submitStatus === 'error'" class="mensagem-erro">
            {{ errorMessage || 'Erro ao enviar mensagem. Tente novamente.' }}
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isSubmitting: false,
      submitStatus: '',
      errorMessage: ''
    }
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      this.isSubmitting = true;
      this.submitStatus = '';
      this.errorMessage = '';

      const formData = new FormData(event.target);
      formData.append('access_key', '8d321f3e-16f0-4aed-83b5-95fc70ee70fe');

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: json,
        });
        const res = await response.json();
        if (res.success) {
          this.submitStatus = 'success';
          event.target.reset();
        } else {
          this.submitStatus = 'error';
          this.errorMessage = res.message || 'Erro ao enviar mensagem.';
        }
      } catch (error) {
        this.submitStatus = 'error';
        this.errorMessage = 'Erro de conexão. Tente novamente.';
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}
</script>

<style scoped>
/* Contato */
.contato {
  padding: 4rem 2rem;
  background-color: var(--bg2);
  color: var(--text);
}

.contato-container {
  max-width: 1200px;
  margin: 0 auto;
}

.contato-titulo {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 3rem;
  font-weight: bold;
}

.contato-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.contato-info h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--accent);
}

.contato-info p {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  color: #ddd;
}

.contato-detalhes {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contato-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1rem;
  color: #ccc;
}

.contato-icon {
  font-size: 1.2rem;
}

.contato-icon i {
  font-size: 1.2rem;
  color: var(--accent); /* ou a cor que combine com seu tema */
  width: 25px;
  text-align: center;
}

.contato-form {
  background-color: var(--bg);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #333;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--text);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #333;
  border-radius: 8px;
  background-color: var(--bg2);
  color: var(--text);
  font-family: 'JetBrains Mono', monospace;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 10px var(--border-shadow);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #888;
}

.contato-btn-enviar {
  width: 100%;
  padding: 1rem;
  background-color: var(--accent);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'JetBrains Mono', monospace;
}

.contato-btn-enviar:hover:not(:disabled) {
  background-color: #d32f2f;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px var(--border-shadow);
}

.contato-btn-enviar:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.mensagem-sucesso {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #4caf50;
  color: white;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
}

.mensagem-erro {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f44336;
  color: white;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
}

/* Responsividade para o formulário de contato */
@media (max-width: 900px) {
  .contato-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contato-titulo {
    font-size: 2.4rem;
  }

  .contato-info h3 {
    font-size: 1.8rem;
  }

  .contato-info p {
    font-size: 1rem;
  }
}
</style>