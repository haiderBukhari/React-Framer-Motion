import './App.css';
import { motion } from 'framer-motion';
function App() {
  return (
    <motion.div className="app">
        <motion.p initial = {{x: "0", y: "50%", opacity:0, scale:0}} animate = {{x: 0, y: 0, opacity:1, scale:1}} transition = {{duration: 0.3, ease: "easeOut"}}   className='hello'>Heelllo</motion.p>
        <motion.p initial = {{x: "0", y: "-50%", opacity:0, scale:0}} animate = {{x: 0, y: 0, opacity:1, scale:1}} transition = {{duration: 0.8, ease: "easeOut"}}  >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa illo sequi qui veniam adipisci, ipsum dicta numquam praesentium doloribus quasi voluptatem molestiae sit velit id, provident fugit accusantium facere architecto!</motion.p>
        <button initial={{x: "50%", y: "-50%", opacity:0, scale:0}} animate = {{x: 0, y: 0, opacity:1, scale:1}} transition = {{duration: 0.8, ease: "easeOut"}}  >Click Here</button>
    </motion.div>
  );
}

export default App;
