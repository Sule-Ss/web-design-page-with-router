import cwLogo from "../assets/clarusway_logo.png";

const Footer = () => {
  return (
    <footer>
      <p> Clarusway Web Design, Copyright &copy; 2022</p>
      <a href="https://clarusway.com/" target="_blank" rel="noreferrer">
        <img src={cwLogo} alt="clarusway_logo" />
      </a>
    </footer>
  );
};

export default Footer;
