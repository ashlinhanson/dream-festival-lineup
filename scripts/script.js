$(document).ready(function () {
  $("#headlinerBtn").on("click", function () {
    let LI = createLI();
    LI.addClass("text-3xl");
    $("#headliner").append(LI);
  });
  $("#artistBtn").on("click", function () {
    let LI = createLI();
    LI.addClass("inline-block px-3");
    $("#artist").append(LI);
  });
  getVideo();
});
function createLI() {
  var liEl = $("<li>");
  liEl.text($("#user-input").val());
  liEl.on("click", function(event) {
    console.log(event)
  });
  return liEl;
  
  
    
  }
  
  function getVideo() {
    $.ajax({
      type: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
          key: 'AIzaSyDOkXFMR8ZGNDjvtvYUmbl0Q5_jh2CLCW8',
          q: "cats",
          part: 'snippet',
          maxResults: 1,
          type: 'video',
          videoEmbeddable: true,
          
      },
      
      success: function(data){
          embedVideo(data)
          console.log(data)
      },
      error: function(response){
          console.log("Request Failed");
          
        }
        
      });
      
  }
  function embedVideo(data) {
    
    var videoTag = $("<iframe>");
    
    videoTag.attr('src', 'https://www.youtube.com/embed/' + data.items[0].id.videoId);
    $('h3').text(data.items[0].snippet.title);
    $('.description').text(data.items[0].snippet.description);
  
   $(".videoSection").append(videoTag);
}

