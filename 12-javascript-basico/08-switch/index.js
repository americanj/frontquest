


let nomeFilme = 'vingadores'

switch (nomeFilme) {
    case 'vingadores':
        console.log("É o filme dos vigadores");
        break;

    case 'batman':
        console.log("é o filme do batman");
        break;

    default:
        console.log("é um outro filme qualquer");
        break;
} 


let avaliacao = 5;

switch (avaliacao) {
    case 1:
    case 2:
        console.log("filme ruim");
        break;
    case 3:
    case 4:
        console.log("filme mediano");
        break;
    case 5:
        console.log("filme excelent");
        break;  
    default:
        console.log('nota inválida');   
        break; 
}