import Navbar from "./Navbar"
const Header = () => {
    return (
      <>
      <header>
        <img className="logo" src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt=""></img>
        <Navbar/>
        <a className='cta' href='#'><button>Contact</button></a>
      </header>
      </>
      )
}
export default Header