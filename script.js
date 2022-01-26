
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
const btnEncriptar = document.querySelector("#btn-encriptar");
const btnDesencriptar = document.querySelector("#btn-desencriptar");
const btnCopiar = document.querySelector("#btn-copiar");
let inputTexto = document.querySelector("#input-texto");
let msg = document.querySelector("#msg");
let msgLbl = document.querySelector("#msg-label");

btnEncriptar.addEventListener("click", function(evento){
	msg.value = encriptar(inputTexto.value);	
});

btnDesencriptar.addEventListener("click", function(evento){
	msg.value = desEncriptar(inputTexto.value);	
	});

btnCopiar.addEventListener("click", function(evento){
  copiar(msg);
});

function reemplazar(caracter){
  if (caracter == "a")
  return "ai"
  if (caracter == "e")
  return "enter"
  if (caracter == "i")
  return "imes"
  if (caracter == "o")
  return "ober"
  if (caracter == "u")
  return "ufat"

  if (caracter == "ai")
  return "a"
  if (caracter == "enter")
  return "e"
  if (caracter == "imes")
  return "i"
  if (caracter == "ober")
  return "o"
  if (caracter == "ufat")
  return "u"
}

function encriptar (texto){
  let retorno = texto.replace(/([aeiou])/gi,reemplazar);
  msgLbl.innerHTML = "Mensaje Encriptado!";
  return retorno;
}

function desEncriptar (texto){
  let retorno = texto.replace(/ai|enter|imes|ober|ufat/gi,reemplazar);
  msgLbl.innerHTML = "Mensaje Desencriptado!";
  return retorno;
}

function copiar(elemento) {
  navigator.clipboard.writeText(elemento.value);
  msgLbl.innerHTML = "Mensaje Copidado!";
}
