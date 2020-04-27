// Griglia 6x6 (36 boxes), ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9 (scegliere API opportuna).
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato
// DevTools console e network sono nostri amici
$(document).ready(function(){

  var apiFake ='https://flynn.boolean.careers/exercises/api/random/int';

  var boxes = $('.box');

  boxes.click(function(){
    //console.log(apiFake);
    var self = $(this);

    $.ajax({
      url: apiFake,
      method: 'GET',
      success: function(risultato){
        var number = risultato.response;
        if(self.text() === '0'){
          self.text(number);
          if(number < '5'){
            self.addClass('yellow');
          }else if(number >= '5') {
            self.addClass('green');
          }
        }else {
          alert('Hai già cliccato questa casella!')
        }
      },
      error: function(){
        console.log('errore');
      }
    });
  });




});//ready
