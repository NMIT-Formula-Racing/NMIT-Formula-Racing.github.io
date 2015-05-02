var width = 700
var height = 700
function graph(div,json_data){
  var svg = d3.select(div).append("svg")
      .attr({
        "width": "100%",
        "height": "100%"
      })
      .attr("viewBox", "0 0 " + width + " " + height )

  var force = d3.layout.force()
      .gravity(.05)
      .linkDistance(150)
      .charge(-800)
      .size([width, height]);

  d3.json(json_data, function(error, json) {
      force
      .nodes(json.nodes)
      .links(json.links)
      .start();

  var link = svg.selectAll(".link")
      .data(json.links)
      .enter().append("line")
      .attr("class", "link")
      .style("stroke-width", function(d) { return Math.sqrt(d.value); });

  var node = svg.selectAll(".node")
      .data(json.nodes)
      .enter().append("g")
      .attr("class", "node")
      .call(force.drag)
      .on("click",function(d){
        console.log(d.name);
        $('.teamMember').text(d.name);
        $('.basic').modal('show');
      });

  node.append("image")
      .attr("xlink:href", "http://png-1.findicons.com/files/icons/1579/devine/256/circle.png")
      .attr("x", -20)
      .attr("y", -20)
      .attr("width", 80)
      .attr("height", 80);

  node.append("text")
      .attr("dx", 70)
      .attr("dy", "2em")
      .attr("color","#fff")
      .text(function(d) { return d.name });

  force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
  });
});
}