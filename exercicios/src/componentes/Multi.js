import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilo/Padrao'

// Não usaremos export default.
// Quando não usamos o export default somos obrigados a dar nomes a função, mesmo
// esta sendo arrow. Temos que armazenar a função em uma constante ou variável; ou criar uma
// função nomeada.
export const Inverter = props => {
    const textoInvertido = props.texto.split('').reverse().join('')
    return <Text style={Padrao.ex}>{textoInvertido}</Text>
}

export const MegaSena = props => {
    const [minimo, maximo] = [1, 60]

    // Se nenhum número for passado por parâmetro, usaremos o padrão de 6.
    const quantidadePadraoNumeros = 6;

    const numeros = Array(props.numeros || quantidadePadraoNumeros).fill(0)

    for (let i = 0; i < numeros.length; i++) {

        let novo = 0

        while(numeros.includes(novo)) {
            novo = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo
        }

        numeros[i] = novo
    }

    // Usamos dessa forma, pois usar somente o sort o script converteria para
    // string para comparar, o resultado não seria o esperado.
    numeros.sort((a, b) => a - b)

    return <Text style={Padrao.ex}>{numeros.join(', ')}</Text>
}

// Quando exportamos por padrão (default), acessamos o componente fora de chaves:
// import Inverter from './componentes/Multi'
// Já quando não colocamos o export default, somos obrigados a usar as chaves:
//import { Inverter } from './componentes/Multi'
// Neste exemplo, conseguiríamos acessar de ambas as formas, pois implementamos export e export default
export default Inverter

// Existe outra forma de exportar. Podemos excluir o termo export do componente e acrescentar
// a seguinte linha:
//export { Inverter, MegaSena }