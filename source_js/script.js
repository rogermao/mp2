// Write any custom javascript functions here
$(document).ready(function() {

  $('.carousel').slick({
    dots : true
  });

  function getSize(){
    var winHeight = $(window).height();
    var navHeight = $('#nav-container').outerHeight();

    $('.page').css({'height' : winHeight+30 + 'px'});
  }

  getSize();


  console.log("loaded");
    $(".imgButton").click(function() {
      console.log("image open");
      $("#modal").css({"display" : "block", "z-index" : "2"});
      $("#modal-content").css("z-index","9999");
      console.log(this.id);
      if(this.id == "player"){
        $("#modal-content").attr("src","./data/video/player.mp4");
        $("#modal-content").load();
        $("#modal-content")[0].play();
      }else if(this.id == "graph"){
        $("#modal-content").attr("src","./data/video/graph.mp4");
        $("#modal-content").load();
        $("#modal-content")[0].play();
      }else if(this.id == "head-to-head"){
        $("#modal-content").attr("src","./data/video/head-to-head.mp4");
        $("#modal-content").load();
        $("#modal-content")[0].play();
      }


    });

    $("#modal").click(function() {
      if ($(this).attr("id") !== "modal-content") {
        console.log("modal close");
        $("#modal").css({"display" : "none", "z-index" : "-9999"});
        $("#modal-content").css("z-index","-9999");
        $("#modal-content")[0].pause();
      }
    });

})

$(document).on("scroll",function(){
    console.log("scroll");
    console.log($(document).scrollTop());
    if($(document).scrollTop()>100){
        $("#nav-magellan").removeClass("nav-big").addClass("nav-small");
    } else{
        $("#nav-magellan").addClass("nav-big").removeClass("nav-small");
    }
});

$("#searchbar").submit(function(e){
  e.preventDefault()
})

$("#searchinput").keyup(function(e){
  if($('#searchinput').val() != ''){
    $('.results').css('display','block')
  }
  else{
    $('.results').css('display','none')
  }
})
/*
$('nav a').click(function(e){
  e.preventDefault();
  var target = $(this.hash);
  var navHeight = $('#nav-container').outerHeight();
  $('html body').animate({
    scrollTop : target.offset().top-navHeight
  }, 1000);
  var links = $('nav').find('a');
  links.parent().removeClass("active").end()
  this.parent().addClass("active");
})
*/
