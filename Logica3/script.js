do
    var area = prompt("Qual area você quer seguir Front-End[0] ou Back-End[1]");
while(!(area=="0" || area=="1"))

if (area=="0"){
    do
        var linguagem = prompt("Qual linguagem você quer aprender, React[0] ou Vue[1]?");
    while(!(linguagem=="0" || linguagem=="1"))

}else if(area=="1"){ 
    do
        var linguagem = prompt("Qual linguagem você quer aprender, C#[0] ou Java[1]?");
    while(!(linguagem=="0" || linguagem=="1"))
}

do
    var desenvolvimento = prompt("Você quer ser Fullstack[0] ou continuar se desenvolvendo na área[1]");
while(!(desenvolvimento=="0" || desenvolvimento=="1"))

if (desenvolvimento=="0"){
    alert("Você escolheu estudar novas tecnologias");
}else if(desenvolvimento=="1"){
    alert("voce decidiu continuar na rea");
}

const tecnologias


do{
    var tecnologia=prompt("Qual tecnologia vc quer aprender?");
    alert("você resolveu aprender "+tecnologia);
    tecnologias.push(tecnologia);
    var encerrar=prompt("Tem mais alguma tecnologia que você gostaria de aprender?");
}

while(encerrar=="ok")

alert("Você quer aprender essas tecnologias: "+tecnologias.toString())