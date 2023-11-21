let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let comida = "";
let categoria = "";
let adicionarMais = "sim";

    while (adicionarMais !== "não") {
        adicionarMais = prompt("Você deseja adicionar mais alguma coisa na lista de compras? Sim ou Não?");

        while (adicionarMais !== "sim" && adicionarMais !== "não") {
        alert("Operação não reconhecida!");
        adicionarMais = prompt("Você deseja adicionar mais alguma coisa na lista de compras? Sim ou Não?");}
        if (adicionarMais === "sim") {
    break;}}

  comida = prompt("O que você quer adicionar?");
  categoria = prompt("De qual categoria é essa comida?: 'frutas', 'laticínios', 'doces' ou 'congelados'?");
  
    if (categoria === 'frutas') {
        frutas.push(comida);let frutas = [];
        let laticinios = [];
        let doces = [];
        let congelados = "";
        let comida = "";
        let categoria = "";
        let adicionarMais = "sim";}
    
    while (adicionarMais !== "não") {
      adicionarMais = prompt("Você deseja adicionar mais alguma coisa na lista de compras? Sim ou Não?");
    
      while (adicionarMais !== "sim" && adicionarMais !== "não") {
        alert("Operação não reconhecida!");
        adicionarMais = prompt("Você deseja adicionar mais alguma coisa na lista de compras? Sim ou Não?");
      }
    
    if (adicionarMais === "não") {
        break;
      }
    
      comida = prompt("O que você quer adicionar?");
      categoria = prompt("De qual categoria é essa comida?: 'frutas', 'laticínios', 'doces' ou 'congelados'?");
      
    if (categoria === 'frutas') {
        frutas.push(comida);
      } else if (categoria === 'laticínios') {
        laticinios.push(comida);
      } else if (categoria === 'doces') {
        doces.push(comida);
      } else if (categoria === 'congelados') {
        congelados.push(comida);
      } else {
        alert("Essa categoria não foi pré-definida.");
      }
      if (frutas.length > 0 || laticinios.length > 0 || doces.length > 0 || congelados.length > 0) {
        let removerItem = prompt("Deseja remover algum item da lista? Sim ou Não?");
        while (removerItem !== "sim" && removerItem !== "não") {
          alert("Operação não reconhecida!");
          removerItem = prompt("Deseja remover algum item da lista? Sim ou Não?");
        }
    
        if (removerItem === "sim") {
          let listaAtual = `Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`;
          alert(listaAtual);
    
          let itemARemover = prompt("Digite o nome do item que deseja remover:");
          if (frutas.includes(itemARemover)) {
            frutas.splice(frutas.indexOf(itemARemover), 1);
          } else if (laticinios.includes(itemARemover)) {
            laticinios.splice(laticinios.indexOf(itemARemover), 1);
          } else if (doces.includes(itemARemover)) {
            doces.splice(doces.indexOf(itemARemover), 1);
          } else if (congelados.includes(itemARemover)) {
            congelados.splice(congelados.indexOf(itemARemover), 1);
          } else {
            alert(`Não foi possível encontrar o item '${itemARemover}' dentro da lista!\n${listaAtual}`);
          }
        }
      }
    }
    let listaFinal = `Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`;
    alert(listaFinal);
    