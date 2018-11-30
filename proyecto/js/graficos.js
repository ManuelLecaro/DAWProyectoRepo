var data = [25, 43, 18, 14];

var x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, 100]);

d3.select(".estadisticas")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return x(d) * 3 + "px"; })
    .style("background-color","rgb(135, 106, 97)")
    .text(function(d) { return d; });
