import africanDaisy from './../assets/imgs/africanDaisy.jpg';
import desertRose from './../assets/imgs/desertRose.jpg';
import fern from './../assets/imgs/fern.jpg';
import fiddleLeaf from './../assets/imgs/fiddleLeaf.jpg';
import ficus from './../assets/imgs/ficus.jpg';
import succulent from './../assets/imgs/succulent.jpg';
import cactus from './../assets/imgs/cactus.jpg';
import peony from './../assets/imgs/peony.jpg';
import athenaPeony from './../assets/imgs/athenaPeony.jpg';
import gardenia from './../assets/imgs/gardenia.jpg';
import peaceLily from './../assets/imgs/peaceLily.jpg';
import peperomia from './../assets/imgs/peperomia.jpg';
import airplant from './../assets/imgs/airplant.jpg';
import spider from './../assets/imgs/spider.jpeg';
import aloe from './../assets/imgs/aloe.jpg';
import plantSVG from './../assets/imgs/pagelines.svg';

const plantData = {
  1: {
    name: "African Daisy",
    image: africanDaisy,
    description: "African Daisy plants are South African natives and need well-drained soils in order to perform their best. This, however, doesn't mean that they like to stay too hot and dry. In fact, their climate is typically very mild. When grown in areas with hot summers, African daisies take a break from blooming and focus on surviving the stressful heat of the summer. Once things start to cool back down, the show picks up where it left off and will bloom until frost.",
    maintenance: plantSVG + plantSVG,
    water: "1-2x a week",
    exposure: "Medium to a high light",
    growthPeriod: "Spring, Winter, Fall",
    bloom: "Mid Summer",
    id: 1
  },
  2: {
      name: "Desert Rose",
      image: desertRose,
      description: "Desert Dore in its native tropical eastern Africa, this odd-looking plant has twisted trunks that emerge from a bulbous, swollen root- stock resembling a giant onion. Leafless for long stretches during dry periods, it redeems itself periodically throughout the growing season with gray-green, 4 inches-long leaves and clusters of deep pink, red, or white, saucer- shaped, 2 inches flowers.",
      maintenance: "<img src='src/img/pagelines.svg'>",
      water: "1x a week",
      exposure: "Full Sun or Filtered Light",
      growthPeriod: "Year Round",
      bloom: "Summer",
      id: 2
  },
  3: {
      name: "Fern",
      image: fern,
      description: "There are a lot of species of tropical and subtropical ferns, but there are also a lot of ferns that are native to more temperate climates. These ferns would be well suited to cooler parts of the house but won’t survive in rooms that are too well heated. Tropical ferns survive best in homes with central heating.",
      maintenance: plantSVG + plantSVG,
      water: "1x every 2 weeks",
      exposure: "Shady Area - No Direct Sunlight",
      growthPeriod: "Spring, Fall",
      id: 3
  },
  4: {
      name: "Fiddle Leaf Fig",
      image: fiddleLeaf,
      description: "Since this tree loves drinking up the light, it will eventually start leaning towards the sun. Rotate the tree slightly (some people do every time they water or once a month) and this will help keep the tree straight and balanced.",
      maintenance: plantSVG,
      water: "1x a week",
      exposure: "Window Sunlight",
      growthPeriod: "Spring, Summer, Fall",
      id: 4
  },
  5: {
      name: "Ficus Elastica",
      image: ficus,
      description: "The rubber plant (Ficus elastica) is a popular ornamental plant from the Ficus genus. In it's natural habitat it grows over 30 metres tall, however, the varieties grown indoors are a much more manageable height.",
      maintenance: plantSVG + plantSVG + plantSVG,
      water: "2x a week",
      exposure: "Window Sunlight",
      growthPeriod: "Spring, Summer, Fall",
      bloom: "Spring",
      id: 5
  },
  6: {
      name: "Succulent",
      image: succulent,
      description: "Succulents are drought resistant plants in which the leaves, stem or roots have become more than usually fleshy by the development of water-storing tissue. These plants are adapted to living in dry environments.",
      maintenance: plantSVG,
      water: "1x every 2 week",
      exposure: "Low light",
      growthPeriod: "Spring, Summer, Fall, Winter",
      bloom: "Mid Summer",
      id: 6
  },
  7: {
      name: "Cactus",
      image: cactus,
      description: "Cacti are succulent perennial plants. Cacti generally have thick herbaceous or woody chlorophyll-containing stems. Cacti can be distinguished from other succulent plants by the presence of areoles, small cushionlike structures with trichomes (plant hairs) and, in almost all species, spines or barbed bristles (glochids).",
      maintenance: plantSVG,
      water: "1x every 3 weeks",
      exposure: "Direct Sunlight",
      growthPeriod: "Spring, Summer",
      bloom: "Summer",
      id: 7
  },
  8: {
      name: "Peony",
      image: peony,
      description: "The peony or paeony is a flowering plant in the genus Paeonia, the only genus in the family Paeoniaceae. They are native to Asia, Europe and Western North America.",
      maintenance: plantSVG + plantSVG + plantSVG,
      water: "1x a week",
      exposure: "Normal light",
      growthPeriod: "Spring, Summer, Fall",
      bloom: "Spring, Summer",
      id: 8
  },
  9: {
      name: "Athena Peony",
      image: athenaPeony,
      description: "Athena is an apricot buff single with raspberry flares.  It has the size, shape & texture reminiscent of a Magnolia and is also mildly fragrant.",
      maintenance: plantSVG,
      water: "1x every 7-10 days",
      exposure: "Full sun or partial shade",
      growthPeriod: "Spring, Summer, Fall, Winter",
      bloom: "Late Spring, Early Summer",
      id: 9
  },
  10: {
      name: "Gardenia",
      image: gardenia,
      description: "Gardenias do well in large pots on decks and patios; gardeners in cold-winter areas can grow them in cool greenhouses. Unfortunately, they make poor houseplants— they attract mites, mealybugs, and whiteflies.",
      maintenance: plantSVG,
      water: "1x every week",
      exposure: "Direct Sunlight",
      growthPeriod: "Spring, Summer",
      bloom: "Mid Summer",
      id: 10
  },
  11: {
      name: "Peace Lily",
      image: peaceLily,
      description: "Native primarily to tropical rainforests of America, the peace lily plant is a vibrant and graceful perennial that adds life to any space. The standard peace lily can grow to 24-40 inches and deluxe plants can grow to 32-50 inches.",
      maintenance: plantSVG + plantSVG + plantSVG,
      water: "1x every 3 days",
      exposure: "Medium to a high light",
      growthPeriod: "Spring, Summer, Fall",
      bloom: "Spring",
      id: 11
  },
  12: {
      name: "Peperomia",
      image: peperomia,
      description: "Peperomia is a delightful, easy-to-grow houseplant that's been around for years and it's still popular. Part of the reason for peperomia's popularity is that it's such an easy indoor plant.",
      maintenance: plantSVG + plantSVG,
      water: "1x a week",
      exposure: "Humid Conditions: high light",
      growthPeriod: "Spring, Summer",
      bloom: "Mid Spring",
      id: 12
  },
  13: {
      name: "Air Plant",
      image: airplant,
      description: "Air plants grow without dirt and come in all sizes and colors. Air plants attach themselves to rocks, trees, shrubs, or the ground with their roots and are native to the southern United States, Mexico, Central America, and South America.",
      maintenance: plantSVG,
      water: "1x a week",
      exposure: "Medium to a high light",
      growthPeriod: "Spring, Summer",
      bloom: "Mid Spring",
      id: 13
  },
  14: {
      name: "Spider Plant",
      image: spider,
      description: "The spider plant is so named because of its spider-like plants, or spiderettes, which dangle down from the mother plant like spiders on a web. Available in green or variegated varieties, these spiderettes often start out as small white flowers.",
      maintenance: plantSVG + plantSVG,
      water: "1-2x a week",
      exposure: "Medium to a high light",
      growthPeriod: "Spring, Summer",
      bloom: "Mid Spring",
      id: 14
  },
  15: {
      name: "Aloe",
      image: aloe,
      description: "Aloe vera, are used in alternative medicine and first aid. Both the translucent inner pulp and the resinous yellow aloin from wounding the aloe plant are used externally for skin discomforts. As an herbal medicine, Aloe vera juice is commonly used internally for digestive discomfort.",
      maintenance: plantSVG,
      water: "1x every 2 weeks",
      exposure: "Medium light",
      growthPeriod: "Spring, Summer",
      bloom: "Spring",
      id: 15
  },
  16: {
  }
};

// INITIAL REDUX STATE
export const initialState = {
  plantData: plantData,  // - all of state
  selectedPlant: null,  //one plant by id
  date: new Date(),
};

export default plantData;
