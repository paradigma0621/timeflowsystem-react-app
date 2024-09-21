import { Outlet } from 'react-router-dom';
import clock from 'assets/clocks.png';
import 'styles/DefaultPage.css';

export default function Header() {
  return (
    <>
      <header className='header-main'>
        <img className='image' src={clock} alt="clock" /> {/* */}
        The record of working time efficiency measurement
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}