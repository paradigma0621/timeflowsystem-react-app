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
    <nav >
      <ul>
        {rotas.map((rota) => (
          <li key={rota.label}>
            <Link to={rota.to}>
              {rota.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}