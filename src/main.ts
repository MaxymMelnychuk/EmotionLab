import './style.css'

import  Header  from './components/sections/hero';
import  Sadness  from './components/sections/sadness';
import  Joy  from './components/sections/joy';
import  Fear  from './components/sections/fear';
import  Footer  from './components/sections/footer';

const app = document.querySelector<HTMLDivElement>('#app')!
app.appendChild(Header());
app.appendChild(Sadness());
app.appendChild(Joy());
app.appendChild(Fear());
app.appendChild(Footer());
