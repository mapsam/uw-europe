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
      attr = placements.bl;
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
    case "Turin":
      attr = placements.br;
      break;
    case "Lisbon":
      attr = placements.bl;
      break;
    case "Luxembourg":
      attr = placements.br;
      break;
    case "London":
      attr = placements.bl;
      break;
    case "Berlin":
      attr = placements.tl;
      break;
    case "Tirana":
      attr = placements.tl;
      break;
    case "Sarajevo":
      attr = placements.bl;
      break;
    case "San Marino":
      attr = placements.bl;
      break;
    case "Reykjavík":
      attr = placements.tl;
      break;
    case "Barcelona":
      attr = placements.br;
      break;
    case "Birmingham":
      attr = placements.br;
      break;
    case "Cardiff":
      attr = placements.tl;
      break;
    case "Dnipropetrovsk":
      attr = placements.br;
      break;
    case "Lille":
      attr = placements.bl;
      break;
    case "Marseille":
      attr = placements.br;
      break;
    default:
      attr = placements.tr;
      break;
  }
  return attr;
}