import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBlender, faChampagneGlasses, faMartiniGlass } from "@fortawesome/free-solid-svg-icons";

export const valueCards = [
  {
    id:1,
    title: "Bar",
    icon: <FontAwesomeIcon icon={faMartiniGlass}/>,
    text:
      " Vieni a trovarci nel nostro bar",
  },
  {
    id:2,
    title: "Corsi Barman",
    icon: <FontAwesomeIcon icon={faBlender}/>,
    text:
      "Frequenta un corso barman riconosciuto ovunque e inizia a lavorare entro 3 mesi",
  },
  {
    id:3,
    title: "Degustazione Aperitivo",
    icon: <FontAwesomeIcon icon={faChampagneGlasses}/>,
    text:
      "9 cocktail pronti da bere di altissima qualità da provare assolutamente e 4 tumbler in eco-cristallo per bere in compagnia",
  },
];

export const teamCards = [
  {
    id:1,
    title: "Dennis Rodman",
    img:
      "https://sportnews.snai.it/wp-content/uploads/2020/05/GettyImages-625824450.jpg",
    subtitle: "CEO & Founder",
  },
  {
    id:2,
    title: "Pluto",
    img:
      "https://www.ventennipaperoni.com/wp-content/uploads/2020/03/volto-pippo-e1584113937806.jpg",
    subtitle: "CTO",
  },
  {
    id:3,
    title: "Charlie Sheen",
    img:
      "https://www.ecodelcinema.com/wp-content/uploads/2013/10/Charlie-Sheen.png",
    subtitle: "Stakeholder & Testimonial",
  },
  {
    id:4,
    title: "Marco Insegno",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF3Hn-U8DZAAvRqytInoSCHli0uoQWBJNXLlRlMUeSgQ&s",
    subtitle: "Creative Director",
  },
];
