//by default:
var subreddits = [];
function reddit(){
  $.getJSON("https://www.reddit.com/r/all/.json?limit=100&after=t3_10omtd/ ", function(r) {
    console.log("hai", r.data.children);
    r.data.children.forEach(function(i){
      var result = "<p>"+ i.data.subreddit + "  "+ i.data.title +"  " + i.data.score +"</p><hr>";
       $("#main").append(result);
    })
  });
}
reddit();

$("button").on("click", function(event){
  event.preventDefault();
  $("#main").empty();
  
    var k = $("input").val();
    console.log("input", k);
  $.getJSON("https://www.reddit.com/r/" + k + ".json?limit=100&after=t3_10omtd/ ", function(r) {
    console.log("hai1", r.data.children);
    r.data.children.forEach(function(i){
      var result = "<p>"+ i.data.subreddit + "  "+ i.data.title +"  " + i.data.score +"</p><hr>";
       $("#main1").append(result);
      $('input[type="text"]').val('');
    })
  });

})