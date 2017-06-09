console.log('APP.JS ONLINE');

console.log( jQuery );

$(document).ready(function(){
  var userColor = prompt('What color would you like the links?');
  $('a').css('color', userColor);

  $('a').click(function(event){
    //                    |
    // -------------------
    // |
    event.preventDefault();
    var randomNumber = (Math.random()*50)+1;
    $('h1').css('font-size', randomNumber + "px");
  });

  var leftAmount = 0;

  $('#car-btn').click(function(){
    leftAmount += 30;

    $('#car-img').css('position', 'relative');
    $('#car-img').css('left', leftAmount + 'px');
  });

});
