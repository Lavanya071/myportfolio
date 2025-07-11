
import '../styles/Navbar.css';

const Navbar = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="navbar-logo">MyPortfolio</h1>
      </div>

      <ul className="navbar-links">
        <li onClick={() => handleScroll('intro')}>Introduction</li>
        <li onClick={() => handleScroll('skills')}>Skills</li>
        <li onClick={() => handleScroll('projects')}>Projects</li>
        <li onClick={() => handleScroll('contact')}>Contact</li>
      </ul>

      
    </nav>
  );
};

export default Navbar;
