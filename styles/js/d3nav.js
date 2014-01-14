
function drawNav(){ 
    var height = 300, 
        width = 300;

    var svgNav = d3.select("#svg-nav").append("svg")
      .attr("width", width)
      .attr("height", height);

    var canvas = svgNav
      .attr({"width": width, "height": height})
      .append("g")
      .attr("transform", "translate(0,300)");


      // arcs default settings - inner and outer radii, start and end angle
    var arc = d3.svg.arc()
      .innerRadius(100)
      .outerRadius(150)
      .startAngle(0)
      .endAngle(function(t) { return t * 2 * Math.PI / 4; });

    var arc2 = d3.svg.arc()
      .innerRadius(160)
      .outerRadius(210)
      .startAngle(0)
      .endAngle(function(t) { return t * 2 * Math.PI / 4; });

    var arc3 = d3.svg.arc()
      .innerRadius(220)
      .outerRadius(270)
      .startAngle(0)
      .endAngle(function(t) { return t * 2 * Math.PI / 4; });

    // text paths
    canvas.append("defs").append("path")
        .attr("id", "text-path")
        .attr("d", arc(1));

    canvas.append("defs").append("path")
      .attr("id", "text-path2")
      .attr("d", arc (1));

    canvas.append("defs").append("path")
      .attr("id", "text-path3")
      .attr("d", arc (1));

    canvas.append("path")
        .attr("id", "path1");

    canvas.append("path")
        .attr("id", "path2");

    canvas.append("path")
        .attr("id", "path3");

    // clip paths
    canvas.append("clipPath")
        .attr("id", "text-clip1")
        .append("use")
        .attr("xlink:href", "#path1");

    canvas.append("clipPath")
        .attr("id", "text-clip2")
        .append("use")
        .attr("xlink:href", "#path2");

    canvas.append("clipPath")
        .attr("id", "text-clip3")
        .append("use")
        .attr("xlink:href", "#path3");


    // write text
    canvas.append("text")
        .attr("clip-path", "url(#text-clip1)")
        .attr("x", 45)
        .attr("dy", 45)
      .append("textPath")
        .attr("xlink:href", "#text-path")
        .text("About");

    canvas.append("text")
        .attr("clip-path", "url(#text-clip2)")
        .attr("x", 45)
        .attr("dy", -15)
      .append("textPath")
        .attr("xlink:href", "#text-path")
        .text("Github");

    canvas.append("text")
        .attr("clip-path", "url(#text-clip3)")
        .attr("x", 45)
        .attr("dy", -75)
      .append("textPath")
        .attr("xlink:href", "#text-path")
        .text("Contact");



    // call the functions 
    d3.select("#path1").transition().duration(2000)
        .attrTween("d", function() { return arc; });


    d3.select("#path2").transition().duration(3000)
        .attrTween("d", function() { return arc2; });

    d3.select("#path3").transition().duration(6000)
        .attrTween("d", function() { return arc3; });

};


// hide this element for tablets and mobile
var screenWidth = window.innerWidth || document.documentElement.clientWidth;
if (screenWidth > 1150) { drawNav(); }

// scrolling animations
$(document).scroll(function () {

    var y = $(this).scrollTop();
    
    if (y < 400 || y > $(document).height() - 1000) 
    {
      $('#svg-nav').fadeIn();
    } 
    else 
    {
      $('#svg-nav').fadeOut(1250);
    }    
});



