function countryProperties(name) {
  var colors = ['#A8B6C7', '#9A8F8A', '#BDBC9C', '#E5D5B3', '#DED6CC'];
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
        className: "country-label hide",
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
        x: 4,
        y: 5,
        rotate: -30
      };
      break;
    case "Belgium": 
      attr = {
        color: colors[1],
        className: "country-label small",
        x: 17,
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
    case "Bos. & Herz.": 
      attr = {
        color: colors[4],
        className: "country-label small dark",
        x: 0,
        y: -4,
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
    case "Switz.": 
      attr = {
        color: colors[3],
        className: "country-label small",
        x: 0,
        y: 2,
        rotate: -30
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
        className: "country-label small",
        x: 3,
        y: 4,
        rotate: 30
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
        className: "country-label hide",
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
        y: 26,
        rotate: 0
      };
      break;
    case "Guernsey": 
      attr = {
        color: colors[0],
        className: "country-label hide",
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
        className: "country-label hide",
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
        className: "country-label hide",
        x: 0,
        y: 0,
        rotate: 0
      };
      break;
    case "Kos.": 
      attr = {
        color: colors[3],
        className: "country-label small",
        x: 1,
        y: 4,
        rotate: 0
      };
      break;
    case "Liechtenstein": 
      attr = {
        color: colors[0],
        className: "country-label hide",
        x: 0,
        y: 0,
        rotate: 0
      };
      break;
    case "Lithuania": 
      attr = {
        color: colors[1],
        className: "country-label small",
        x: -2,
        y: 0,
        rotate: 0
      };
      break;
    case "Lux.": 
      attr = {
        color: colors[3],
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
        x: -4,
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
        x: 2,
        y: 3,
        rotate: 0
      };
      break;
    case "Malta": 
      attr = {
        color: colors[0],
        className: "country-label small dark",
        x: -18,
        y: 0,
        rotate: 0
      };
      break;
    case "Montenegro": 
      attr = {
        color: colors[0],
        className: "country-label small dark",
        x: -26,
        y: 4,
        rotate: 0
      };
      break;
    case "Netherlands": 
      attr = {
        color: colors[4],
        className: "country-label small dark",
        x: 0,
        y: 8,
        rotate: 0
      };
      break;
    case "Norway": 
      attr = {
        color: colors[2],
        className: "country-label",
        x: -100,
        y: 25,
        rotate: -60
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
        className: "country-label small dark",
        x: 0,
        y: -4,
        rotate: 0
      };
      break;
    case "Serbia": 
      attr = {
        color: colors[2],
        className: "country-label small",
        x: 3,
        y: 10,
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
        className: "country-label small",
        x: -10,
        y: -2,
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