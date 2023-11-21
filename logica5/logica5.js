let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let comida = "";
let categoria = "";

let adicionarMais = "sim";  
    while(adicionarMais != "não" ){
        adicionarMais = prompt("Você deseja adicionar mais alguma coisa na lista de compras? Sim ou Não?");
        while (adicionarMais != "sim" && adicionarMais != "não") { 
	    alert(`Operação não reconhecida!`);
        adicionarMais = prompt("Você deseja adicionar mais alguma coisa na lista de compras? Sim ou Não?"); }
	
        if (adicionarMais === "não"){ 
    break;}
	
comida = prompt("O que você quer adicionar?");
categoria = prompt("De qual categoria é essa comida?: 'frutas', 'laticínios', 'doces' ou 'congelados'?");
    if(categoria === 'frutas'){
        frutas.push(comida);
    } else if (categoria === 'laticínios'){
        laticinios.push(comida);
    } else if (categoria === 'doces'){
        doces.push(comida);
    } else if (categoria === 'congelados'){
        congelados.push(comida);
    } else {
        alert("Essa categoria não foi pré-definida.")}}
        alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);