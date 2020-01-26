import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../estilo/Padrao'
import If from './If'

function parOuImpar(numero) {
    const resultado = numero % 2 == 0 ? 'Par' : 'Impar'
    return <Text style={Padrao.ex}>{resultado}</Text>
}

export default props =>
    <View>
        {/* {
            // Primeira forma: usar alternador ternario. 
            props.numero % 2 == 0
                ? <Text style={Padrao.ex}>Par</Text>
                : <Text style={Padrao.ex}>Impar</Text>
        } */}

        {
            // Segunda forma: usar uma função.
            parOuImpar(props.numero)
        }

        {/* Terceira forma: Usar um componente para renderizar.  */}
        {/* <If test={props.numero % 2 == 0}>
            <Text style={Padrao.ex}>Par</Text>
        </If>
        <If test={props.numero % 2 == 1}>
            <Text style={Padrao.ex}>Impar</Text>
        </If> */}
    </View>