import { Link } from 'react-router-dom';
import 'styles/Menu.css';

export default function Menu() {
  const rotas = [{
    label: 'Login',
    to: '/start'
  }, {
    label: 'Save Person',
    to: '/addperson'
  }, {
    label: 'Save Clocking',
    to: '/addclocking'
  }, {
    label: 'About',
    to: '/'
  }, {
    label: 'personsList',
    to: '/personsList'
  }, {
    label: 'OnePerson',
    to: '/onePerson'
  }, {
    label: 'clockingList',
    to: '/clockingsList'
  }, {
    label: 'Users Passwords',
    to: '/userAccountsList'
  }, {
    label: 'Logout',
    to: '/logoutAccount'
  }, {
    label: 'ExampleLogin',
    to: '/exampleComponent'
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