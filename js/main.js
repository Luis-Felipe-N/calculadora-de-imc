const form = document.querySelector('.formulario')
const btnEnviar = form.querySelector('.btnEnviar')
const containerModal = document.querySelector('.container-modal')
let inputs = form.querySelectorAll('input')

const removeModal = () => containerModal.innerHTML = ''


function calcularImc(e) {
    e.preventDefault()

    let peso = form.querySelector('#input-peso').value.trim().replace(',', '.')
    let altura = form.querySelector('#input-altura').value.trim().replace(',', '.')
    let sexo = form.querySelector('#sexo-masculino').checked ? 'masculino' : 'feminino'

    // console.log(peso, typeof peso)

    let imcStatus;
    let imc = peso / (altura ** 2)

    if (verificarValor(peso, altura)) {

        if (sexo === 'feminino') {

            if (imc < 19.1) {
                imcStatus = 'Abaixo do peso'
            } else if (imc < 25.8) {
                imcStatus = 'Peso normal'
            } else if (imc < 27.3) {
                imcStatus = 'Sobre peso'
            } else if (imc < 32.3) {
                imcStatus = 'Obsidade grau 1'
            } else if (imc < 39.9) {
                imcStatus = 'Obsidade grau 2'
            } else {
                imcStatus = 'Obsidade grau 3'
            }

        } else {

            if (imc < 18.5) {
                imcStatus = 'Abaixo do peso'
            } else if (imc < 24.9) {
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

function verificarValor(peso, altura) {
    if (isNaN(peso) || !peso) {
        criarModal('Por Favor, insira um peso válido!', true)
        return false
    } else if ((isNaN(altura) || !altura)) {
        criarModal('Por Favor, insira um altura válido!', true)
        return false
    } else {
        return true
    }
}

form.addEventListener('submit', calcularImc);

