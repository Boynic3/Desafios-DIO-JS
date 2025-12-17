function calcularPontos(vitorias, derrotas){
    let pontos = (vitorias - derrotas)
    return pontos
}
let pontosJogador = calcularPontos(53,13)
if (pontosJogador <= 10){
    nivel = "Ferro"
} else if (pontosJogador <= 20){
    nivel ="Bronze"
} else if (pontosJogador <= 50){
    nivel ="Prata"
} else if (pontosJogador <= 80){
    nivel ="Ouro"
} else if (pontosJogador <= 90){
    nivel ="Diamante"
} else if (pontosJogador <= 100){
    nivel ="Lendário"
} else {
    nivel ="Imortal"
} 

console.log(`O Herói tem um saldo de ${pontosJogador} pontos e está no nível ${nivel}`)
//"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
// essa saida ta errada, modifiquei ao resolver o desafio