$('.scoop').on('mouseenter', function(){
  var thisScoop = $(this).attr('value');
  $('.desc').hide();
  $('.flavor-desc-' + thisScoop).fadeIn();
});

$('.scoop').on('mouseleave', function() {
  var thisScoop = $(this).attr('value');
  $('.desc').fadeOut(200);
})
