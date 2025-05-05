import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{
      padding: '1rem 2rem',
      borderBottom: '1px solid #ddd',
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <h1>Cat-Tips 🐾</h1>
      <nav>
        <NavLink to="/" end style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
          Home
        </NavLink>
        {' | '}
        <NavLink to="/dicas" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
          Dicas
        </NavLink>
      </nav>
    </header>
  );
}
