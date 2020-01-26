import React from 'react'
import { Text } from 'react-native'
// Os imports que criamos são relativos. Por isso usamos .. para voltar a pasta.
import Padrao from '../estilo/Padrao'

// Podemos passar para style um objeto ou um array. Podemos usar diversos estilos separados,
// por vírgula quando usamos array.
export default props => <Text style={[Padrao.ex]}>Arrow: {props.texto}</Text>