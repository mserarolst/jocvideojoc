import React from "react";
import "../css/IntroScreen.css";
import { motion } from "framer-motion"; // Per animacions
import imatgeSopa from '../assets/word.jpg';
import imatgeScrab from '../assets/scrabb.webp';
import imatgeBros from '../assets/bros.jpg';
import imatgeOdy from '../assets/odyssey.avif';
import fletxa from '../assets/fletxa.png';
const IntroScreen = ({ onStart, onGameEnd }) => {
    const onNext = () => {
        onGameEnd(0, null)
    }
  return (
    <div className="intro-screen">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Benvingut al Joc de Remediació i Transcodificació!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="intro-text"
      >
        En aquest joc exploraràs com les activitats tradicionals han evolucionat amb el programari
        i com els videojocs són exemples perfectes de remediació i transcodificació.
      </motion.p>

      <div className="concepts-container">
        {/* Secció de remediació */}
        <motion.div
          className="concept-box"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <h2>🕹️ Remediació</h2>
          <p>
            La remediació és l'adaptació d'una experiència física o cultural a un mitjà digital.
          </p>
          <div style={{display: 'flex', justifyContent: 'space-between', maxWidth: '100%', alignItems: 'center'}}>
            <img
                src={imatgeSopa} // Exemple gràfic (com un escacs físic vs digital)
                alt="Exemple de remediació"
                style={{objectFit: 'cover'}}
            />
            <img
                src={fletxa} // Exemple gràfic (com un escacs físic vs digital)
                alt="Exemple de remediació"
                style={{width: '48px', height: '48px', border: 'none'}}
            />
            <img
                src={imatgeScrab} // Exemple gràfic (com un escacs físic vs digital)
                alt="Exemple de remediació"
                style={{objectFit: 'cover'}}
            />
          </div>
        </motion.div>

        {/* Secció de transcodificació */}
        <motion.div
          className="concept-box"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
        >
          <h2>💾 Transcodificació</h2>
          <p>
            La transcodificació transforma completament l'experiència tradicional, creant una nova versió amb nous formats, regles o continguts digitals.
          </p>
          <div style={{display: 'flex', justifyContent: 'space-between', maxWidth: '100%', alignItems: 'center'}}>
            <img
                src={imatgeBros} // Exemple gràfic (com un escacs físic vs digital)
                alt="Exemple de remediació"
                style={{objectFit: 'cover'}}
            />
            <img
                src={fletxa} // Exemple gràfic (com un escacs físic vs digital)
                alt="Exemple de remediació"
                style={{width: '48px', height: '48px', border: 'none'}}
            />
            <img
                src={imatgeOdy} // Exemple gràfic (com un escacs físic vs digital)
                alt="Exemple de remediació"
                style={{objectFit: 'cover'}}
            />
          </div>
        </motion.div>
      </div>

      {/* Botó per començar */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="start-button"
        onClick={onNext}
      >
        Començar el Joc
      </motion.button>
    </div>
  );
};

export default IntroScreen;
