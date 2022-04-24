
action = new TimelineMax({paused:true})
.staggerTo('.name', 1,{
  scale : 1.2,
  ease: Power4.easeOut
  //ease: Back.easeOut.config(1.4)
}, 2)
.staggerTo('.type', 1, {
  opacity : 0,
  ease: Power4.easeOut
}, 3)
.staggerTo('.value', 2, {
  opacity : 0,
  ease: Power4.easeOut
}, 3)



$(window).scroll( function(){
  var scrollTop = $(window).scrollTop();
  var docHeight = $(document).height();
  var winHeight = $(window).height();
  if( scrollTop >= 0){
    action.progress( scrollTop / ( docHeight - winHeight ) );
  }
});
