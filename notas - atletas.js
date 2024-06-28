let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
];

for (let i = 0 ; i < atletas.length;i++){ 
  let organizaMatriz = atletas[i].notas.sort((a, b)=>{
    return a - b
  });
  let notasModificadas = organizaMatriz.slice(1,4);
  let soma = 0;
  notasModificadas.forEach((nota)=>{
    soma += nota; 
  });
  let mediaDaSomaDasNotas = soma/notasModificadas.length;
  console.log(`
  Atleta : ${atletas[i].nome}
  Notas Obtidas: ${organizaMatriz}
  Média Válida: ${mediaDaSomaDasNotas}
  `)
}
