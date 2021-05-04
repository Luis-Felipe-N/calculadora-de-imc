const form = document.querySelector('.formulario')
const btnEnviar = form.querySelector('.btnEnviar')
const containerModal = document.querySelector('.container-modal')
let inputs = form.querySelectorAll('input')

const removeModal = () => containerModal.innerHTML = ''


function calcularImc(e) {
    e.preventDefault()

    let peso = this.querySelector('#input-peso').value.trim()
    let altura = this.querySelector('#input-altura').value.trim()


    if ((isNaN(peso) || isNaN(altura)) || (!peso || !altura)) {
        criarModal('Por Favor, insira valores válido!', true)
    } else {
        let imc = peso / (altura ** 2)
        let imcStatus;

        if (imc < 18.5) {
            imcStatus = 'Abaixo do peso'
        } else if (imc < 24.5) {
            imcStatus = 'Peso normal'
        } else if (imc < 29.9) {
            imcStatus = 'Sobre peso'
        } else if (imc < 34.9) {
            imcStatus = 'Obsidade grau 1'
        } else if (imc < 39.9) {
            imcStatus = 'Obsidade grau 2'
        } else {
            imcStatus = 'Obsidade grau 3'
        }

        criarModal(`Seu imc é ${imc.toFixed(2)} (${imcStatus})`)
    }
}


function criarModal(msg, erro = false) {
    removeModal()

    const p = document.createElement('p')
    p.textContent = msg
    erro ? p.classList.add('erro') : p.classList.add('correto')
    containerModal.appendChild(p)
    p.classList.add('anima-left')

}


form.addEventListener('submit', calcularImc);
