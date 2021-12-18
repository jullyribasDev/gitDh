function salario (){
    let janeiro = Number(prompt('Salário Janeiro: '));
    let fevereiro = Number(prompt('Salário Fevereiro: '));
    let marco = Number(prompt('Salário Março: '))
    let abril = Number(prompt('Salário Abril: '))
    let media = (janeiro + fevereiro + marco + abril)/4
    
    if (media>=5.000){
        alert('Parabéns, você vai receber um abono de 10%!')
    }
    else {
        alert('Continue tentando!')
 }
}
salario();