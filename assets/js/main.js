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
        if(number <= '5'){
          self.addClass('yellow');
        }else if(number > '5') {
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
