import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

//import './topics/02-Obj-ejercicio-video16.ts';
import './topics/03-Import-video21.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <p>HOLA MUNDOOOO</p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
