import { Link } from 'react-router-dom';
import 'styles/Menu.css';

export default function Menu() {
  const rotas = [{
    label: 'Início',
    to: '/'
  }, {
    label: 'Save Person',
    to: '/addperson'
  }, {
    label: 'About',
    to: '/about'
  }, {
    label: 'personsList',
    to: '/personsList'
  }, {
    label: 'OnePerson',
    to: '/onePerson'
  }

];
  return (
    <nav className='nav-menu'>
      <ul>
        {rotas.map((rota) => (
          <li className='nav-menu-hover' key={rota.label}>
            <Link className='menu-text' to={rota.to}>
              {rota.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}