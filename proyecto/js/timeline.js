function addNew(year, titulo, description) {

    var div = $( "<div/>", {
      "class": "timeline"
    });
    var a = $("<a/>",{
      "class" : "timeline-content"
    });
    var span = $("<span/>", {
      "class": "timeline-year",
        html: year
    });
    var divicon = $("<div/>",{
      "class" : "timeline-icon"
    });
    var ii = $("<i/>",{
      "class": "fa fa-rocket"
    });
    var content = $("<div/>",{
      "class" : "content"
    })
    var title = $("<h3/>",{
      "class" : "title",
       html : titulo
    });
    var desc = $("<p/>",{
      "class" : "description",
      html : description
    });

    title.appendTo(content);
    desc.appendTo(content);
    ii.appendTo(divicon);
    span.appendTo(a);
    divicon.appendTo(a);
    content.appendTo(a);
    a.appendTo(div);
    div.appendTo( "div.main-timeline" );
}

function loadNewsJson() {
   $.getJSON( "../json/timeline.json", function( data ) {
     console.log("ii");
      $.each( data, function( key, val ) {
        addNew(val.year, val.name, val.description)
      });

  });
}
$(document).ready(function(){
  loadNewsJson();
});
