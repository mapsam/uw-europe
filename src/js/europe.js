var width = window.innerWidth,
    height = window.innerHeight;

projection = d3.geo.orthographic()
  .translate([width / 2, height / 2])
  .scale(1100)
  .rotate([-18, -51, 5]);

path = d3.geo.path()  
  .projection(projection);  

svg = d3.select("#map").append("svg")   
  .attr("width", width)
  .attr("height", height);

queue()   
  .defer(d3.json, "data/countries.json")
  .defer(d3.json, "data/land.json")
  .defer(d3.json, "data/places.geojson")
  .defer(d3.json, "data/rivers.json")
  //load more data here 
  .await(drawMap);  

function drawMap(error, countries, land, places, rivers) {
  
  /*
  ** LAND
  */
  var landObject = svg.selectAll(".land")
    .data(topojson.feature(land, land.objects.land).features)
    .enter().append("path")
    .attr("class", "land")
    .attr("d", path);

  /*
  ** COUNTRY POLYGONS
  */
  var countryObjects = svg.selectAll(".countries")   
    .data(topojson.feature(countries, countries.objects.countries).features)  
    .enter().append("path")
    .attr("class", "country")
    .style("fill", function(d){ return countryProperties(d.properties.admin).color; })
    .attr("d", path);

  /*
  ** RIVERS
  */
  var riverObjects = svg.selectAll(".river")
    .data(topojson.feature(rivers, rivers.objects.rivers).features)
    .enter().append("path")
    .attr("class", "river")
    .attr("d", path);

  /*
  ** RIVER LABELS
  */
  var used = [];
  var riverLabels = svg.selectAll(".river-label")
    .data(topojson.feature(rivers, rivers.objects.rivers).features)
    .enter().append("text")
    .attr("class", "river-label")
    .attr("text-anchor", "middle")
    .attr("transform", function(d) {
      var labelPoint = [path.centroid(d)[0], path.centroid(d)[1]];
      return "translate(" + labelPoint + ")";
    })
    .attr("dy", 0)
    .attr("dx", 0)
    .text(function(d) {
      if (used.indexOf(d.properties.name) == -1) {
        used.push(d.properties.name);
        return d.properties.name;
      } else {
        return "";
      }      
    });

  /*
  ** COUNTRY LABELS
  */
  var countryLabels = svg.selectAll(".country-label")
    .data(topojson.feature(countries, countries.objects.countries).features)
    .enter().append("text")
    .attr("class", function(d){ return countryProperties(d.properties.admin).className; })
    .attr("text-anchor", "middle")
    .attr("transform", function(d) {
      var labelPoint = [path.centroid(d)[0], path.centroid(d)[1]];
      var rotate = countryProperties(d.properties.admin).rotate;
      return "translate(" + labelPoint + ") rotate(" + rotate + ")";
    })
    .attr("dy", function(d){ return countryProperties(d.properties.admin).y; })
    .attr("dx", function(d){ return countryProperties(d.properties.admin).x; })
    .text(function(d) { return d.properties.admin; });

  /*
  ** PLACE POINTS
  */
  var placePoints = svg.selectAll(".place")
    .data(places.features)
    .enter().append("path")
    .attr("d", path.pointRadius(2))
    .attr("class", "place");

  /*
  ** PLACE LABELS
  */
  var placeLabels = svg.selectAll('.place-label')
    .data(places.features).enter().append('text')
    .attr('transform', function(d) { return 'translate(' + projection(d.geometry.coordinates) + ')'; })
    .attr('dy', function(d){ return placeProperties(d.properties.name).y; }) 
    .attr('dx', function(d){ return placeProperties(d.properties.name).x; })
    .style('text-anchor', function(d){ return placeProperties(d.properties.name).a; })
    .text(function(d) { return d.properties.name; })
    .attr('class', function(d){
      if (d.properties.adm0cap) return "place-label place-capital";
      else return "place-label";
    });
}


