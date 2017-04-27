import {render} from 'react-dom';
import routes from './routes';
import './main.scss';

render(routes(), document.getElementById('root'));