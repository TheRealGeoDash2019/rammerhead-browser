<<<<<<< HEAD
import { StrictMode, useContext } from 'react'
=======
import { StrictMode } from 'react'
>>>>>>> 75540cf (Uhhhh)
import ReactDOM from 'react-dom'
import './main.css'
import "regenerator-runtime/runtime.js";
import Startup from './browser/startup.jsx'
import { SessionContext } from './browser/SessionContext.js';
import { BrowserUI } from "./browser/BrowserUI.jsx";

const pbjs = document.createElement("script");
pbjs.src = "https://paps.binary-person.dev/ce/pbjs.js";
pbjs.defer = true;
pbjs.async = true;
pbjs.setAttribute("data-domain", "browser");
pbjs.oncanplaythrough = function() {
  console.log("2025-02-16 joe bidome says hi");
};
document.head.appendChild(pbjs);

ReactDOM.render(
  <StrictMode>
    <script defer data-domain="browser" src="https://paps.binary-person.dev/ce/pbjs.js"></script>
    <Startup>
      <BrowserUI></BrowserUI>
    </Startup>
  </StrictMode>,
  document.getElementById('root')
);
