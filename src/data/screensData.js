import Riddle from "../games/Riddle";
import Quiz from "../games/Quiz";
import TimelinePuzzle from "../games/TimelinePuzzle";
import Screen from "../components/Screen";
import ImageTrivia from "../games/ImageTrivia";
import imageMario from '../assets/mariobros.webp';
import imagePokemon from '../assets/pokemon.webp';
import imageZelda from '../assets/zelda.png';
import MatchTheConcept from "../games/MatchTheConcept";
import imageScrabble from '../assets/scrabble.jpg';
import imageApalabrados from '../assets/apalabrados.webp';
import imageEscacs from '../assets/escacsfisic.jpg';
import imageChess from '../assets/chess.webp';
import imageColonies from '../assets/colonies.jpg';
import imageAmongus from '../assets/amongus.webp';
import imageMono from '../assets/monopoly.webp';
import imageMonoApp from '../assets/monopolyapp.webp';

export const screensData = [
  {
    screen: (
      <Screen
        title="Introducció: Remediació i transcodificació"
        content="La remediació i la transcodificació són conceptes claus per entendre com el programari ha canviat la nostra manera de jugar. Aquest joc interactiu et portarà per la història dels videojocs, des dels jocs físics fins a la realitat virtual, explorant com s'han remediat i transcodificat les experiències lúdiques."
      />
    ),
  },
  {
    title: "Els primers jocs: dels taulers a les pantalles",
    description: "Jugar a escacs o al Monopoly eren activitats comunes als anys 50. Amb la digitalització, aquests jocs es van remediar, passant de ser físics a digitals, adaptant-se al programari.",
    screen: (
      <Riddle
        question= "Quin d’aquests jocs es va digitalitzar primer?"
        options={[
          { text: "Parxís", isCorrect: false },
          { text: "Monopoly", isCorrect: true },
          { text: "Risk", isCorrect: false },
        ]}
      />
    ),
  },
  {
    screen: (
      <Screen
        title="L'era de les arcades"
        content="Als anys 70, les màquines recreatives van introduir videojocs com Pong. Aquest va ser un clar exemple de transcodificació: una experiència de joc totalment nova i digital."
      />
    ),
  },
  {
    title: "La transició als videojocs interactius",
    description: "El primer videojoc comercial, Pong, va revolucionar el món del joc amb un medi completament digital, sense equivalent físic.",
    screen: (

      <Quiz
        questions={[
          {
            questionText: "Quin any es va llançar Pong?",
            answers: [
              { text: "1972", isCorrect: true },
              { text: "1980", isCorrect: false },
              { text: "1965", isCorrect: false },
            ],
          },
          {
            questionText: "Quin tipus de joc era Pong?",
            answers: [
              { text: "Plataforma", isCorrect: false },
              { text: "Estratègia", isCorrect: false },
              { text: "Esportiu", isCorrect: true },
            ],
          },
        ]}
      />
      
    ),
  },
  {
    screen: (
      <Screen
        title="Els jocs en 2D: una nova era"
        content="Super Mario Bros va marcar un abans i un després en la història dels videojocs, introduint personatges i gràfics 2D que remediaven formes d'entreteniment com els còmics."
      />
    ),
  },
  {
    title:"Els jocs en 2D: una nova era",
    description:"Super Mario Bros va marcar un abans i un després en els gràfics dels videojocs, creant personatges i històries que mai hauríem imaginat amb jocs tradicionals.",
    screen: (

      <ImageTrivia
        question="Quin d'aquests jocs és Super Mario Bros?"
        options={[
          { image: imageZelda, isCorrect: false},
          { image: imageMario, isCorrect: true },
          { image: imagePokemon, isCorrect: false },
        ]}
      />
      
    ),
  },
  {
    screen: (
      <Screen
        title="Posa ordre als videojocs"
        content="Quins van ser els jocs més importants de la història? Ordena’ls per data de llançament per descobrir com han evolucionat."
      />
    ),
  },  
  {
    title:"Posa ordre als videojocs",
    description:"Quins van ser els jocs més importants de la història? Ordena’ls per data de llançament per descobrir com han evolucionat.",
    screen: (

      <TimelinePuzzle
        events={[
          { id: "3", title: "The Legend of Zelda" },
          { id: "2", title: "Super Mario Bros" },
          { id: "1", title: "Pong" },
        ]}
      />
      
    ),
  },
  {
    screen: (
      <Screen
        title="Relaciona els conceptes"
        content="Molts jocs tradicionals han evolucionat gràcies a la digitalització. Relaciona els jocs clàssics amb les seves versions modernes per entendre millor aquest procés."
      />
    ),
  },
  {
    title: "Relaciona els conceptes",
    description: "Molts jocs tradicionals han evolucionat gràcies a la digitalització. Relaciona els jocs clàssics amb les seves versions modernes per entendre millor aquest procés.",
    screen: (
      <MatchTheConcept
      pairs={[
        {
          past: { label: "Escacs físics", image: imageEscacs },
          modern: { label: "Escacs online", image: imageChess },
        },
        {
          past: { label: "Monopoly de tauler", image: imageMono },
          modern: { label: "Monopoly app", image: imageMonoApp },
        },
        {
          past: { label: "Pong (arcade)", image: imageColonies },
          modern: { label: "eSports", image: imageAmongus },
        },
        {
          past: { label: "Sopa de lletres al diari", image: imageScrabble },
          modern: { label: "Sopa de lletres digital", image: imageApalabrados },
        },
      ]}
    />
    ),
  },
];



