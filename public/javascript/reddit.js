
       
$(document).ready(function(){
//by default:

var glob;
  function reddit(){
    $.getJSON("https://www.reddit.com/r/all/.json?limit=100&after=t3_10omtd/ ", function(r) {
      console.log("hai", r.data.children);
      r.data.children.forEach(function(i){
        var result = "<div class='p'><p>R/"+ i.data.subreddit + "  |  NAME: "+"<a href='" +i.data.url +" ' target='_blank'><span class='name'>" + i.data.title + "</span></a>" + "  |  SCORE: " + i.data.score +"</p><hr></div>";
         $("#main").append(result);
      })
    });
  }
  reddit();

  function reddit1(k){
      $.getJSON("https://www.reddit.com/r/" + k + ".json?limit=100&after=t3_10omtd/ ", function(r) {
      console.log("hai1", r.data.children);
      r.data.children.forEach(function(i){
        var result = "<div class='" + k +"'><p class=''>R/"+ i.data.subreddit + "  |  NAME: "+"<a href='" +i.data.url +" ' target='_blank'><span class='name'>"+ i.data.title +"</span></a>" + "  |  SCORE: " + i.data.score +"</p><hr></div>";

        $("#post").prepend(result);
        $('input[type="text"]').val('');
      
      })
    });
  }

  $("button.add").on("click", function(event){
    event.preventDefault();
    $("#main").empty();

    var k = $("input").val();
    $("#subr1").append("<button value='" + k + "' type='click' id='subr' class='btn btn-xs' aria-label='Left Align'>" + k + "</button> ");
      console.log("input", k);
      reddit1(k);
  

  })

  $(document).on("click", "button#subr", function(){
    alert("REMOVE THE SUBREDDIT!");
    var myClass = "." + $(this).html();
    glob = $(this).html();
    $(myClass).remove();
    $(this).remove();
  })

  // $(window).scroll(function() {
  //   var y = $("div#post>div").className;
  //   console.log("yyyy", y);
  //   reddit1(y);
  //   $("#post").apend(result1);

  // });

})