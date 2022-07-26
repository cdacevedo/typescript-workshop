import './style.css';
import typescriptLogo from './typescript.svg';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img id="ts-logo" src="${typescriptLogo}" class="logo" alt="TypeScript logo" />
    </a>
    <h1>Welcome to Typescript workshop</h1>
    <p class="read-the-docs">
      Wait for the exhibitor's instructions
    </p>
    <p class="read-the-docs">
      Click on the logo to know more
    </p>
  </div>
`;
