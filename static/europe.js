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
  .defer(d3.json, "/data/countries.json")
  .defer(d3.json, "/data/land.json")
  .defer(d3.json, "/data/places.geojson")
  //load more data here 
  .await(drawMap);  

function drawMap(error, countries, land, places) {
  
  /*
  ** LAND
  */
  var land = svg.selectAll(".land")
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
    .style("fill", function(d){ return countryColor(d.properties.admin); })
    .attr("d", path);

  /*
  ** COUNTRY LABELS
  */
  var countryLabels = svg.selectAll(".country-label")
    .data(topojson.feature(countries, countries.objects.countries).features)
    .enter().append("text")
    .attr("class", "country-label")
    .attr("text-anchor", "middle")
    .attr("transform", function(d) {
      var labelPoint = [path.centroid(d)[0], path.centroid(d)[1]];  
      return "translate(" + labelPoint + ")";
    })
    .text(function(d) { return d.properties.admin; });

  /*
  ** PLACE POINTS
  */
  var placePoints = svg.selectAll(".place")
    .data(places.features)
    .enter().append("path")
    .attr("d", path.pointRadius(2))
    .style("visibility", function(d){
      if (d.properties.adm0cap) return "visible";
      else return "hidden";
    })
    .attr("class", "place");

  /*
  ** PLACE LABELS
  */
  var placeLabels = svg.selectAll('.place-label')
    .data(places.features).enter().append('text')
    .attr('transform', function(d) { return 'translate(' + projection(d.geometry.coordinates) + ')'; })
    .attr('dy', function(d){ return placeLabelPlacement(d.properties.name).y; }) 
    .attr('dx', function(d){ return placeLabelPlacement(d.properties.name).x; })
    .style('text-anchor', function(d){ return placeLabelPlacement(d.properties.name).a; })
    .text(function(d) { return d.properties.name; })
    .style("visibility", function(d){
      if (d.properties.adm0cap) return "visible";
      else return "hidden";
    })
    .attr('class', function(d){
      if (d.properties.adm0cap) return "place-label place-capital";
      else return "place-label";
    });
}

var colorCount = 0;
var colors = ['#A8B6C7', '#9A8F8A', '#BDBC9C', '#E5D5B3', '#DED6CC'];
function countryColor(name) {
  var attr;
  switch(name) {
    case "Albania": 
      attr = colors[4];
      break;
    case "Aland": 
      attr = colors[0];
      break;
    case "Andorra": 
      attr = colors[0];
      break;
    case "Austria": 
      attr = colors[2];
      break;
    case "Belgium": 
      attr = colors[1];
      break;
    case "Bulgaria": 
      attr = colors[0];
      break;
    case "Bosnia and Herzegovina": 
      attr = colors[4];
      break;
    case "Belarus": 
      attr = colors[4];
      break;
    case "Switzerland": 
      attr = colors[3];
      break;
    case "Czech Republic": 
      attr = colors[1];
      break;
    case "Germany": 
      attr = colors[0];
      break;
    case "Denmark": 
      attr = colors[3];
      break;
    case "Spain": 
      attr = colors[1];
      break;
    case "Estonia": 
      attr = colors[3];
      break;
    case "Finland": 
      attr = colors[1];
      break;
    case "France": 
      attr = colors[2];
      break;
    case "Faroe Islands": 
      attr = colors[0];
      break;
    case "United Kingdom": 
      attr = colors[3];
      break;
    case "Guernsey": 
      attr = colors[0];
      break;
    case "Greece": 
      attr = colors[2];
      break;
    case "Croatia": 
      attr = colors[3];
      break;
    case "Hungary": 
      attr = colors[0];
      break;
    case "Isle of Man": 
      attr = colors[0];
      break;
    case "Ireland": 
      attr = colors[1];
      break;
    case "Iceland": 
      attr = colors[0];
      break;
    case "Italy": 
      attr = colors[4];
      break;
    case "Jersey": 
      attr = colors[0];
      break;
    case "Kosovo": 
      attr = colors[3];
      break;
    case "Liechtenstein": 
      attr = colors[0];
      break;
    case "Lithuania": 
      attr = colors[1];
      break;
    case "Luxembourg": 
      attr = colors[0];
      break;
    case "Latvia": 
      attr = colors[2];
      break;
    case "Monaco": 
      attr = colors[0];
      break;
    case "Moldova": 
      attr = colors[3];
      break;
    case "Macedonia": 
      attr = colors[1];
      break;
    case "Malta": 
      attr = colors[0];
      break;
    case "Montenegro": 
      attr = colors[0];
      break;
    case "Netherlands": 
      attr = colors[4];
      break;
    case "Norway": 
      attr = colors[2];
      break;
    case "Poland": 
      attr = colors[3];
      break;
    case "Portugal": 
      attr = colors[0];
      break;
    case "Romania": 
      attr = colors[1];
      break;
    case "Russia": 
      attr = colors[0];
      break;
    case "San Marino": 
      attr = colors[0];
      break;
    case "Republic of Serbia": 
      attr = colors[2];
      break;
    case "Slovakia": 
      attr = colors[4];
      break;
    case "Slovenia": 
      attr = colors[1];
      break;
    case "Sweden": 
      attr = colors[4];
      break;
    case "Ukraine": 
      attr = colors[2];
      break;
    default:
      attr = colors[0];
      break;
  }
  return attr;
}
function placeLabelPlacement(name) {
  var placements = {
    tr: {x: 2,  y: -2, a: "start" },
    tl: {x: -3, y: -2, a: "end" },
    bl: {x: -3, y: 7,  a: "end" },
    br: {x: 2,  y: 7,  a: "start" }
  }
  switch (name) {
    case "Vatican City":
      attr = placements.bl;
      break;
    case "Vienna":
      attr = placements.tl;
      break;
    case "Andorra":
      attr = placements.bl;
      break;
    case "Pristina":
      attr = placements.tl;
      break;
    case "Podgorica":
      attr = placements.bl;
      break;
    case "Tallinn":
      attr = placements.tl;
      break;
    case "Ljubljana":
      attr = placements.bl;
      break;
    case "Chisinau":
      attr = placements.br;
      break;
    case "Bern":
      attr = placements.tl;
      break;
    case "Riga":
      attr = placements.tl;
      break;
    default:
      attr = placements.tr;
      break;
  }
  return attr;
}
