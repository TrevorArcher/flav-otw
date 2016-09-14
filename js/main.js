// $('.scoop').on('mouseenter', function(){
//   $(this).fadeOut();
//
// });

$('.scoop').on('click', function(){
  var thisScoop = $(this).attr('value');
  console.log(thisScoop);
  $('.desc').hide();
  $('.flavor-desc-' + thisScoop).fadeIn();

});
