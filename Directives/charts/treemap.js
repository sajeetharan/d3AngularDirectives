(function(){

	var tree = DiginD3.models.tree();

	var chart = DiginD3.chart()
        .title('Treemap')
		.description(
            "A space filling visualization of data hierarchies and proportion between elements. The different hierarchical levels create visual clusters through the subdivision into rectangles proportionally to each element's value. Treemaps are useful to represent the different proportion of nested hierarchical data structures")
		.thumbnail("styles/css/images/charts/treemap.png")
	    .category('Hierarchies')
		.model(tree)

	var width = chart.number()
		.title('Width')
		.defaultValue(100)
		.fitToWidth(true)
	
	var height = chart.number()
		.title("Height")
		.defaultValue(500)

	var padding = chart.number()
		.title("Padding")
		.defaultValue(5)

	var colors = chart.color()
		.title("Color scale")

	chart.dDiginD3(function (selection, data){
		
		var format = d3.format(",d");

		var layout = d3.layout.treemap()
			.sticky(true)
            .padding(+padding())
            .size([+width(), +height()])
            .value(function(d) { return d.size; })

		var g = selection
    	    .attr("width", +width())
    	    .attr("height", +height())
    	  	.append("g")
    	    .attr("transform", "translate(.5,.5)");

		var nodes = layout.nodes(data)
	  	    .filter(function(d) { return !d.children; });

        colors.domain(nodes, function (d){ return d.color; });

		var cell = g.selectAll("g")
    	    .data(nodes)
    	    .enter().append("g")
    	    .attr("class", "cell")
    	    .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
    		
		cell.append("svg:rect")
    	    .attr("width", function (d) { return d.dx; })
    	    .attr("height", function (d) { return d.dy; })
    	    .style("fill", function (d) { return colors()(d.color); })
    	    .style("fill-opacity", function (d) {  return d.children ? 0 : 1; })
			.style("stroke","#fff")
		
		cell.append("svg:title")
			.text(function(d) { return d.name + ": " + format(d.size); });

		cell.append("svg:text")
    	    .attr("x", function(d) { return d.dx / 2; })
    	    .attr("y", function(d) { return d.dy / 2; })
    	    .attr("dy", ".35em")
    	    .attr("text-anchor", "middle")
	  //  .attr("fill", function (d) { return DiginD3.foreground(color()(d.color)); })
    	   	.style("font-size","11px")
    		.style("font-family","Arial, Helvetica")
    	    .text(function(d) { return d.label ? d.label.join(", ") : d.name; });

	})
})();