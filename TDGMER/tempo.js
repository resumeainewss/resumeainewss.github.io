      class Tempo {
        constructor() {
          this.dia = 1; // Começamos o jogo no dia 1
          this.hora = 0; // Começamos o jogo às 00:00
          this.minuto = 0; // Começamos o jogo no minuto 0
          this.velocidade = 1; // A velocidade é de 1 hora a cada 30 segundos
          this.periodo = 0; // Começamos o jogo no período 0
          this.atualizacao = 5; // Atualizamos o mercado a cada 5 segundos
        }

        // Método para atualizar o tempo no jogo
        atualizarTempo() {
          this.minuto += this.velocidade;
          if (this.minuto >= 60) {
            // Se passaram 60 minutos, passamos para a próxima hora
            this.hora++;
            this.minuto = 0;
          }
          if (this.hora >= 24) {
            // Se passaram 24 horas, passamos para o próximo dia
            this.dia++;
            this.hora = 0;
          }
          // Atualizamos o período a cada atualização do mercado
          if (this.periodo < 14 && this.atualizacao % 5 === 0) {
            this.periodo++;
          } else if (this.periodo === 14) {
            this.periodo = 0;
          }
          // Atualizamos o tempo de atualização do mercado
          this.atualizacao++;
          if (this.atualizacao >= 60) {
            this.atualizacao = 0;
          }
        }

        // Método para imprimir o horário atual
        imprimirHora() {
          const horaFormatada = ('0' + this.hora).slice(-2); // adiciona um zero à esquerda se a hora for menor que 10
          const minutoFormatado = ('0' + this.minuto).slice(-2); // adiciona um zero à esquerda se o minuto for menor que 10
          document.getElementById('imprimirHora').innerText = `Dia ${this.dia} - ${horaFormatada}:${minutoFormatado}`;
        }
      }

      const tempo = new Tempo();
      setInterval(() => {
        tempo.atualizarTempo();
        tempo.imprimirHora();
      }, 400); 
