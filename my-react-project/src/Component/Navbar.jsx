let Navbar = () => {
  let logo = "Syed haseeb";
  return (
    <header>
      <h2>{logo.length==11?"syed":"Mani"}</h2>
      <nav>
        <ul>
          <li>home</li>
          <li>About</li>
          <li>Services</li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
