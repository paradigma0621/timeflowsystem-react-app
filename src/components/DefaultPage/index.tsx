import { Outlet } from 'react-router-dom';
import clock from 'assets/clocks.png';
import 'styles/DefaultPage.css';

export default function PaginaPadrao() {
  return (
    <>
      <header>
        <img src={clock} alt="clock" /> {/* */}
        The record of efficiency in working time
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}