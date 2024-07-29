
const textArea = document.getElementById('input');
const mensaje = document.getElementById('output');

const matriz = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
];

function validarTexto(texto) {  
    const regex = /^[a-z\s]+$/; 
    return regex.test(texto);
}

function btnEncrypt() {
    const textoEncriptado = encriptar(textArea.value);
    if (validarTexto(textArea.value)){
    mensaje.value = textoEncriptado;
    textArea.value = '';
    }else{
        return window.alert('You cannot use lowercase letters, special characters, or accents.');
    }
}

function btnDecrypt() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = '';
}

function encriptar(texto) {
    let textoEncriptado = texto;
    for (let i = 0; i < matriz.length; i++) {
        let [char, remolazo] = matriz[i];
        textoEncriptado = textoEncriptado.split(char).join(remolazo);
    }
    return textoEncriptado;
}

function desencriptar(texto) {
    let textoDesencriptado = texto;
    for (let i = 0; i < matriz.length; i++) {
        let [remolazo, char] = matriz[i];
        textoDesencriptado = textoDesencriptado.split(char).join(remolazo);
    }
    return textoDesencriptado;
}

function copyText() {
    mensaje.select();
    document.execCommand("copy");
}

function clearText() {
    textArea.value = '';
    mensaje.value = '';
}

