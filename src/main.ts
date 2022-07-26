import './style.css';
import typescriptLogo from './typescript.svg';

import './exercise/exercise';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img id="ts-logo" src="${typescriptLogo}" class="logo" alt="TypeScript logo" />
    </a>
    <h1>Open the browser console</h1>
    <p class="read-the-docs">
      Click on the TypeScript logos to learn more
    </p>
  </div>
`;
