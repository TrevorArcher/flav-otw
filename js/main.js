$('.scoop').on('mouseenter', function(){
  var thisScoop = $(this).attr('value');
  console.log(thisScoop);
  $('.desc').hide();
  $('.flavor-desc-' + thisScoop).fadeIn();
});

$('.scoop').on('click', function(){
  var thisScoop = $(this).attr('value');
  console.log(thisScoop);
  $('.desc').hide();
  $('.flavor-desc-' + thisScoop).show();
});

// $('.scoop').on('mouseleave', function() {
//   var thisScoop = $(this).attr('value');
//   $('.desc').fadeOut(200);
// })
