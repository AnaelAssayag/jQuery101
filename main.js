//Exercice 1

$('hello')

var element = $('hello');
console.log(element);


// Partner Exercice 1
$('h1').css('color', 'blue')
$('.red-div').css('color', 'red')


// $('li').css('color', 'pink');

$('#brown-div').css('color', 'brown');

// Partner Exercice 2

// $('button').click(function () {
//     alert($('#my-input').val());
//   });

// Partner Exercice 3

  $('#btn_list').click(function(){
    $('.students').append($('<li>', {
         text: $('#input_listName').val()
    }));
});







  