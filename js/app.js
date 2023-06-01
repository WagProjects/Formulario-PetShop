import {valida} from "./validação/js"

const inputs = documento.queryselectorAll('input')

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})