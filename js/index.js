let EateriesLINKS = [];

class Eateries {
  constructor(link) {
    this._link = link;
    EateriesLINKS.push(link);
  }

  get link() {
    return this._link;
  }

  set link(link) {
    return link;
  }
}

const Shangai = new Eateries("http://www.shanghaichinasf.com/");
const ElCapitan = new Eateries("http://www.elcapitantaqueria.com/");
const Mavelous = new Eateries("http://eatmavelous.com/");
const PokeBar = new Eateries("http://www.visitthemarket.com/food/pokebar-sf/");
const Cumaica = new Eateries("https://www.cumaica.com/");
const Otoro = new Eateries("http://otorosushi.com/v2/");
const ManilaBowl = new Eateries(
  "http://www.visitthemarket.com/food/manila-bowl/"
);
const TaqueriaCazadores = new Eateries("https://www.spiceofamerica.com/");
const KagawaYaUdon = new Eateries("http://kagawayaudon.com/");
const OrganicCoop = new Eateries("https://theorganiccoup.com/");
const CadillacGrill = new Eateries("http://www.cadillacbarandgrill.com/");
const AntonsPizza = new Eateries(
  "https://www.grubhub.com/restaurant/antons-pizza--deli-1196-folsom-st-san-francisco/380203"
);
const TheGrove = new Eateries("https://thegrovesf.com/");
const LersRosThai = new Eateries("http://lersros.com/");

function RandomHelper() {
  RandomNumber = Math.floor(Math.random() * EateriesLINKS.length);
  location.href = EateriesLINKS[RandomNumber];
}

console.log(EateriesLINKS);

function linkPicker() {
  document.getElementById("MainButton").onclick = RandomHelper();
}

console.log(Math.floor(Math.random() * EateriesLINKS.length));
 