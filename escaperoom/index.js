const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin, // Standard input
  output: process.stdout // Standard output
})

let resolvidos = {
    grampeador: false,
    papeis: false,
    almofada: false,           
}

function menuPrincipal() {
    console.log('voce esta em uma sala trancada')
    console.log('ao seu redor, voce ve:')
    console.log('1.um grampeador velho')
    console.log('2. um monte de papeis bagunçados')
    console.log('3. uma almofada fora do lugar')
    console.log('4. tentar abrir a porta')

    rl.question('o que voce deseja fazer?', (opcao) => {
        switch (opcao) {
            case '1':
                verificarGrampeador()
                break
            case '2':
                verificarPapeis()
                break
            case '3':
                verificarAlmofada()
                break
            case '4':
                rl.close()
                break
            default:
                console.log('Opção inválida, tente novamente.')
                menuPrincipal()
        }
    })
}
function ivestarGrampeador() {
    if (resolvidos.grampeador) {
        console.log('O grampeador já foi resolvido.')
        return menuPrincipal()
    } 
        rl.question('Você examina o grampeador e encontra um bilete.', (resposta) => {
            if (resposta.toLowerCase() === 'pegar') {
                console.log('Você pegou o grampeador.')
                resolvidos.grampeador = true
            } else {
                console.log('resposta inválida, tente novamente.')
            }
            menuPrincipal()
    })
}
function investigarPapeis() {
    if (resolvidos.papeis) {
        console.log('Os papéis já foram resolvidos.')
        return menuPrincipal()
    } 
    rl.question('Você examina os papéis e encontra um bilhete.', (resposta) => {
        if (resposta.toLowerCase() === 'pegar') {
            console.log('Você pegou os papéis.')
            resolvidos.papeis = true
        } else {
            console.log('resposta inválida, tente novamente.')
        }
        menuPrincipal()

    })
}
function investigarAlmofada() {
    if (resolvidos.almofada) {
        console.log('A almofada já foi resolvida.')
        return menuPrincipal()
    } 
    rl.question('Você examina a almofada e encontra um bilhete.', (resposta) => {
        if (resposta.toLowerCase() === 'pegar') {
            console.log('Você pegou a almofada.')
            resolvidos.almofada = true
        } else {
            console.log('resposta inválida, tente novamente.')
        }
        menuPrincipal()
    })
}
function verificarSaida() { 
    if (resolvidos.grampeador && resolvidos.papeis && resolvidos.almofada) {
        console.log('Parabéns! Você resolveu todos os enigmas e pode sair da sala.')
        rl.close()
    } else {
        console.log('Você ainda não resolveu todos os enigmas. Continue tentando!')
    }
}           




