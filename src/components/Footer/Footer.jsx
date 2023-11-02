import logo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-200 p-10 text-base-content">
          <aside>
            <p className="">
              <img src={logo}/>
              <br />
              Edwin Diaz is a software and web technologies <br/> engineer, a life
              coach trainer who is also a serial .
            </p>
          </aside>
          <nav>
            <header className="footer-title">About</header>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Service</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <a className="link link-hover">Why Car Doctor</a>
            <a className="link link-hover">About</a>
          </nav>
          <nav>
            <header className="footer-title">Support</header>
            <a className="link link-hover">Support Center</a>
            <a className="link link-hover">Feedback</a>
            <a className="link link-hover">Accesbility</a>
          </nav>
      </footer>
    </div>
  );
};

export default Footer;
