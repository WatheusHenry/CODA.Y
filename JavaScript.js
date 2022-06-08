function incrementaValor(valorMaximo){
	var value = parseInt(document.getElementById('resultado').value,10);
  value = isNaN(value) ? 0 : value;
  if(value >= valorMaximo) {
    value = valorMaximo;
  }else{
    value++;
  }
  document.getElementById('resultado').value = value;
}

function decrementaValor(valorMinimo){
  var value = parseInt(document.getElementById('resultado').value,10);
  value = isNaN(value) ? 0 : value;
  if(value <= valorMinimo) {
    value = 0;
  }else{
    value--;
  }
  document.getElementById('resultado').value = value;
}



// -------------------------------------------
function incrementaValorI(valorMaximo){
	var value = parseInt(document.getElementById('botao').value,10);
  value = isNaN(value) ? 0 : value;
  if(value >= valorMaximo) {
    value = valorMaximo;
  }else{
    value++;
  }
  document.getElementById('botao').value = value;
}

function decrementaValorI(valorMinimo){
  var value = parseInt(document.getElementById('botao').value,10);
  value = isNaN(value) ? 0 : value;
  if(value <= valorMinimo) {
    value = 0;
  }else{
    value--;
  }
  document.getElementById('botao').value = value;
}
// ------------------------------------------------
function incrementaValorL(valorMaximo){
	var value = parseInt(document.getElementById('button').value,10);
  value = isNaN(value) ? 0 : value;
  if(value >= valorMaximo) {
    value = valorMaximo;
  }else{
    value++;
  }
  document.getElementById('button').value = value;
}

function decrementaValorL(valorMinimo){
  var value = parseInt(document.getElementById('button').value,10);
  value = isNaN(value) ? 0 : value;
  if(value <= valorMinimo) {
    value = 0;
  }else{
    value--;
  }
  document.getElementById('button').value = value;
}



