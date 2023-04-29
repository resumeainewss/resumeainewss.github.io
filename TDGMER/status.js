const Tempo = require('./tempo');

class Status {
constructor() {
this.estado = 'Disponivel'; // Começamos o jogo com o estado disponível
this.fome = 0; // Começamos o jogo sem fome
this.sono = 0; // Começamos o jogo sem sono
this.dinheiro = 100; // Começamos o jogo sem dinheiro
this.trabalho = false; // Começamos o jogo sem estar trabalhando
this.tempoTrabalho = 0; // Começamos o jogo sem tempo de trabalho acumulado
this.tempoDormindo = 0; // Começamos o jogo sem tempo de sono acumulado
}

// Método para atualizar o estado do jogador
atualizarEstado() {
const tempo = new Tempo();
// Verificamos se o jogador está trabalhando
if (this.trabalho) {
  // Atualizamos o tempo de trabalho acumulado
  this.tempoTrabalho += tempo.velocidade;
  // Se o jogador já trabalhou por 10 horas, ele para de trabalhar
  if (this.tempoTrabalho >= 10) {
    this.trabalho = false;
    this.tempoTrabalho = 0;
    this.estado = 'Disponivel';
  }
} else {
  // Verificamos se o jogador está com fome
  if (this.fome >= 100) {
    this.estado = 'Com fome';
  }
  // Verificamos se o jogador está com sono
  else if (this.sono >= 100) {
    this.estado = 'Com sono';
  }
  // Se o jogador não estiver com fome ou sono, seu estado é disponível
  else {
    this.estado = 'Disponivel';
  }
}

// Verificamos se o jogador está dormindo
if (this.sono > 0) {
  // Atualizamos o tempo de sono acumulado
  this.tempoDormindo += tempo.velocidade;
  // Se o jogador já dormiu por 8 horas, ele acorda
  if (this.tempoDormindo >= 8) {
    this.sono = 0;
    this.tempoDormindo = 0;
  }
}
}

// Método para atualizar a fome do jogador
atualizarFome(alimento) {
// Recuperamos pontos de fome de acordo com o alimento consumido
if (alimento === 'pao') {
this.fome -= 20;
} else if (alimento === 'pizza') {
this.fome -= 50;
} else if (alimento === 'refeicao') {
this.fome -= 80;
}
// Se a fome ficar negativa, deixamos ela em 0
if (this.fome < 0) {
this.fome = 0;
}
}

// Método para atualizar o sono do jogador
atualizarSono() {
// Se o jogador não está dormindo, atualizamos seu nível de sono
if (this.sono < 100) {
this.sono += 100 / 18;
// Se o sono ficar acima de 100, deixamos ele em 100
if (this.sono > 100) {
this.sono = 100;

 module.exports = Status;
