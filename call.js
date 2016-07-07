var template = Handlebars.compile($('#songs-template').html());

$('#input').on('keypress', function(e) {
  if (e.which == 13) {
    var query = $(this).val();
    var url = "https://api.spotify.com/v1/search?q=" + query + "&type=track";

    $.getJSON(url, function(info) {
      var html = template({ songs: info.tracks.items });
      $('.songs').html(html);
    });
    $(this).val('');
  }
});