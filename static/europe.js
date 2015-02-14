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
    .style("fill", function(d){ return countryProperties(d.properties.admin).color; })
    .attr("d", path);

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
    .attr('dy', function(d){ return placeProperties(d.properties.name).y; }) 
    .attr('dx', function(d){ return placeProperties(d.properties.name).x; })
    .style('text-anchor', function(d){ return placeProperties(d.properties.name).a; })
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

var colors = ['#A8B6C7', '#9A8F8A', '#BDBC9C', '#E5D5B3', '#DED6CC'];
function countryProperties(name) {
  var attr;
  switch(name) {
    case "Albania": 
      attr = {
        color: colors[4],
        className: "country-label small dark",
        x: -9,
        y: 7,
        rotate: 0
      };
      break;
    case "Aland": 
      attr = {
        color: colors[0],
        className: "country-label",
        x: 0,
        y: 0,
        rotate: 0
      };
      break;
    case "Andorra": 
      attr = {
        color: colors[0],
        className: "country-label small dark",
        x: 25,
        y: 0,
        rotate: 0
      };
      break;
    case "Austria": 
      attr = {
        color: colors[2],
        className: "country-label small",
        x: 8,
        y: 0,
        rotate: 0
      };
      break;
    case "Belgium": 
      attr = {
        color: colors[1],
        className: "country-label small",
        x: 0,
        y: 7,
        rotate: 0
      };
      break;
    case "Bulgaria": 
      attr = {
        color: colors[0],
        className: "country-label small",
        x: 0,
        y: 4,
        rotate: 0
      };
      break;
    case "Bosnia & Herz.": 
      attr = {
        color: colors[4],
        className: "country-label small",
        x: 0,
        y: 0,
        rotate: 0
      };
      break;
    case "Belarus": 
      attr = {
        color: colors[4],
        className: "country-label",
        x: 0,
        y: 10,
        rotate: 0
      };
      break;
    case "Switzerland": 
      attr = {
        color: colors[3],
        className: "country-label",
        x: 0,
        y: 0,
        rotate: 0
      };
      break;
    case "Czech Rep.": 
      attr = {
        color: colors[1],
        className: "country-label small",
        x: 0,
        y: 5,
        rotate: 0
      };
      break;
    case "Germany": 
      attr = {
        color: colors[0],
        className: "country-label",
        x: 0,
        y: 0,
        rotate: 0
      };
      break;
    case "Denmark": 
      attr = {
        color: colors[3],
        className: "country-label dark",
        x: -5,
        y: 0,
        rotate: 0
      };
      break;
    case "Spain": 
      attr = {
        color: colors[1],
        className: "country-label",
        x: 0,
        y: 10,
        rotate: 0
      };
      break;
    case "Estonia": 
      attr = {
        color: colors[3],
        className: "country-label small dark",
        x: 0,
        y: 0,
        rotate: 0
      };
      break;
    case "Finland": 
      attr = {
        color: colors[1],
        className: "country-label",
        x: 6,
        y: 34,
        rotate: 0
      };
      break;
    case "France": 
      attr = {
        color: colors[2],
        className: "country-label",
        x: 30,
        y: 0,
        rotate: 0
      };
      break;
    case "Faroe Islands": 
      attr = {
        color: colors[0],
        className: "country-label",
        x: 0,
        y: 0,
        rotate: 0
      };
      break;
    case "U.K.": 
      attr = {
        color: colors[3],
        className: "country-label",
        x: 7,
        y: 30,
        rotate: 0
      };
      break;
    case "Guernsey": 
      attr = {
        color: colors[0],
        className: "country-label",
        x: 0,
        y: 0,
        rotate: 0
      };
      break;
    case "Greece": 
      attr = {
        color: colors[2],
        className: "country-label small",
        x: -21,
        y: -1,
        rotate: 0
      };
      break;
    case "Croatia": 
      attr = {
        color: colors[3],
        className: "country-label small",
        x: 8,
        y: -5,
        rotate: 0
      };
      break;
    case "Hungary": 
      attr = {
        color: colors[0],
        className: "country-label",
        x: -4,
        y: 5,
        rotate: 0
      };
      break;
    case "Isle of Man": 
      attr = {
        color: colors[0],
        className: "country-label",
        x: 0,
        y: 0,
        rotate: 0
      };
      break;
    case "Ireland": 
      attr = {
        color: colors[1],
        className: "country-label small",
        x: -2,
        y: 16,
        rotate: 0
      };
      break;
    case "Iceland": 
      attr = {
        color: colors[0],
        className: "country-label",
        x: 4,
        y: 7,
        rotate: 0
      };
      break;
    case "Italy": 
      attr = {
        color: colors[4],
        className: "country-label",
        x: 2,
        y: 0,
        rotate: 0
      };
      break;
    case "Jersey": 
      attr = {
        color: colors[0],
        className: "country-label",
        x: 0,
        y: 0,
        rotate: 0
      };
      break;
    case "Kosovo": 
      attr = {
        color: colors[3],
        className: "country-label",
        x: 0,
        y: 0,
        rotate: 0
      };
      break;
    case "Liechtenstein": 
      attr = {
        color: colors[0],
        className: "country-label",
        x: 0,
        y: 0,
        rotate: 0
      };
      break;
    case "Lithuania": 
      attr = {
        color: colors[1],
        className: "country-label small",
        x: 0,
        y: 0,
        rotate: 0
      };
      break;
    case "Lux.": 
      attr = {
        color: colors[0],
        className: "country-label small",
        x: 16,
        y: 0,
        rotate: 0
      };
      break;
    case "Latvia": 
      attr = {
        color: colors[2],
        className: "country-label small",
        x: 12,
        y: 3,
        rotate: 0
      };
      break;
    case "Monaco": 
      attr = {
        color: colors[0],
        className: "country-label small dark",
        x: 0,
        y: 0,
        rotate: 0
      };
      break;
    case "Moldova": 
      attr = {
        color: colors[3],
        className: "country-label small",
        x: 0,
        y: -5,
        rotate: 0
      };
      break;
    case "Mac.": 
      attr = {
        color: colors[1],
        className: "country-label small",
        x: 0,
        y: 0,
        rotate: 0
      };
      break;
    case "Malta": 
      attr = {
        color: colors[0],
        className: "country-label",
        x: 0,
        y: 0,
        rotate: 0
      };
      break;
    case "Montenegro": 
      attr = {
        color: colors[0],
        className: "country-label small dark",
        x: -20,
        y: 0,
        rotate: 0
      };
      break;
    case "Netherlands": 
      attr = {
        color: colors[4],
        className: "country-label",
        x: 0,
        y: 0,
        rotate: 0
      };
      break;
    case "Norway": 
      attr = {
        color: colors[2],
        className: "country-label",
        x: -35,
        y: 101,
        rotate: 0
      };
      break;
    case "Poland": 
      attr = {
        color: colors[3],
        className: "country-label",
        x: -2,
        y: 10,
        rotate: 0
      };
      break;
    case "Portugal": 
      attr = {
        color: colors[0],
        className: "country-label",
        x: 0,
        y: 10,
        rotate: -70
      };
      break;
    case "Romania": 
      attr = {
        color: colors[1],
        className: "country-label",
        x: -2,
        y: 2,
        rotate: 0
      };
      break;
    case "Russia": 
      attr = {
        color: colors[0],
        className: "country-label",
        x: -100,
        y: 300,
        rotate: 0
      };
      break;
    case "San Marino": 
      attr = {
        color: colors[0],
        className: "country-label",
        x: 0,
        y: 0,
        rotate: 0
      };
      break;
    case "Serbia": 
      attr = {
        color: colors[2],
        className: "country-label small",
        x: 0,
        y: 0,
        rotate: 0
      };
      break;
    case "Slovakia": 
      attr = {
        color: colors[4],
        className: "country-label small",
        x: 7,
        y: -2,
        rotate: 0
      };
      break;
    case "Slovenia": 
      attr = {
        color: colors[1],
        className: "country-label",
        x: 0,
        y: 0,
        rotate: 0
      };
      break;
    case "Sweden": 
      attr = {
        color: colors[4],
        className: "country-label",
        x: 10,
        y: -10,
        rotate: -60
      };
      break;
    case "Ukraine": 
      attr = {
        color: colors[2],
        className: "country-label",
        x: 0,
        y: 0,
        rotate: 0
      };
      break;
    default:
      attr = {
        color: colors[0],
        className: "country-label",
        x: 0,
        y: 0,
        rotate: 0
      };
      break;
  }
  return attr;
}
function placeProperties(name) {
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
    case "Kbenhavn":
      attr = placements.br;
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
    case "Sofia":
      attr = placements.tl;
      break;
    case "Vilnius":
      attr = placements.bl;
      break;
    case "Lisbon":
      attr = placements.bl;
      break;
    case "Luxembourg":
      attr = placements.br;
      break;
    default:
      attr = placements.tr;
      break;
  }
  return attr;
}
