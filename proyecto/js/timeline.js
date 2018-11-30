function addNew(year, titulo, description) {

    var div = $( "<div/>", {
      "class": "timeline"
    });
    var a = $("<a/>",{
      "class" : "timeline-content col-xl-12 col-md-12"
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
   $.getJSON( "../data/timeline.json", function( data ) {
      $.each( data, function( key, val ) {
        addNew(val.year, val.name, val.description)
      });

  });
}
$(document).ready(function(){
  loadNewsJson();
});
