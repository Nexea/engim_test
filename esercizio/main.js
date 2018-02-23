var source = $("p").text();
var pollo;

$("input").keyup(function() {
  $("p").text(source);
  pollo = $("input").val();
  $("p").html((_, html) => {
   return html.split(pollo).join("<span>" + pollo + "</span>");
  });
})
