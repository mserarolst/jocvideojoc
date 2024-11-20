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
import Resposta from "../components/Resposta";
import imagePong from '../assets/pong.webp';
import imageZelda2 from '../assets/zelda2.jpg'
import IntroScreen from "../components/IntroScreen";
import WordSearch from "../games/WordSearch";
export const screensData = [
  // {
  //   screen: (
  //     <Screen
  //       title="Introducció: Remediació i transcodificació"
  //       content="La remediació i la transcodificació són conceptes claus per entendre com el programari ha canviat la nostra manera de jugar. Aquest joc interactiu et portarà per la història dels videojocs, explorant com s'han remediat i transcodificat les experiències lúdiques."
  //     />
  //   ),
  // },

  {
    screen: (
      <IntroScreen
        title="Introducció: Remediació i transcodificació"
        content="La remediació i la transcodificació són conceptes claus per entendre com el programari ha canviat la nostra manera de jugar. Aquest joc interactiu et portarà per la història dels videojocs, explorant com s'han remediat i transcodificat les experiències lúdiques."
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
      <Resposta
        content="Als anys 70, les màquines recreatives van introduir videojocs com Pong. Aquest va ser un clar exemple de transcodificació: una experiència de joc totalment nova i digital."
        image={imagePong}
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
      <Resposta
        content="La premissa del joc (rescatar la Princesa Peach) remeda els contes clàssics de cavallers i princeses. Això adapta les estructures narratives tradicionals a un nou mitjà interactiu."
      />
    ),
  },  
  {
    title:"Alguns dels jocs més importants de la història",
    description:"Quins van ser els jocs més importants de la història? Ordena’ls per data de llançament per descobrir com han evolucionat.",
    screen: (

      <TimelinePuzzle
        events={[
          { id: "1", title: "Pong" },
          { id: "2", title: "Super Mario Bros" },
          { id: "3", title: "The Legend of Zelda" },
        ]}
      />
      
    ),
  },
  {
    screen: (
      <Resposta
        content="Els videojocs han remeditat contes, llibres, còmics i pel·lícules per convertir-los en experiències interactives.
Per exemple, The Legend of Zelda remeda aventures èpiques clàssiques i contes medievals, convertint el jugador en el protagonista de la història."
      video={<iframe width="400" height="200" src="https://www.youtube.com/embed/ofH5ptn5w-A" title="The Legend of Zelda: Breath of the Wild - Tráiler de Nintendo Switch" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
      />
    ),
  },
  {
    title: "Dels jocs físics als digitals",
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
  {
    screen: (
      <Resposta
      content="Jugar a escacs o al Monopoly eren activitats comunes als anys 50. Amb la digitalització, aquests jocs es van remediar, passant de ser físics a digitals, adaptant-se al programari."
      />
    ),
  },
  {
    screen: (

      <WordSearch/>
      
    ),
  },
];



