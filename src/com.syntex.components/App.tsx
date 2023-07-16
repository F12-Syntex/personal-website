import { useEffect } from 'react';
import '../com.syntex.sytling/App.css';
import '../com.syntex.sytling/mouse.css';
import MouseEffects from '../com.syntex.functionality/MouseEffects';
import $ from 'jquery';


/**
 * The main component of the website
 * @returns the website
 */
function App() {

  useEffect(() => {
      const effect = new MouseEffects();
      effect.registerCustomCursor(document);
  }, []);

  

  return (
    <div className='website' id='personal-website'>
      <div id='cursor' />
    </div>
  )
}

export default App
