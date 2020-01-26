export default props => {
    if (props.test) {
        return props.children
    }
    else {
        // Podemos retornar false ou null para não renderizar
        // nada na tela.
        return false
    }
}