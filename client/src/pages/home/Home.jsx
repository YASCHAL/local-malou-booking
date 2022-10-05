import Header from "../../components/header/Header.jsx"
import Navbar from "../../components/navbar/Navbar.jsx"
import "./home.css"
import Featured from "../../components/featured/Featured.jsx"
import PropretyList from "../../components/propretyList/PropretyList.jsx"
import FeaturedPropreties from "../../components/featuredPropreties/FeaturedPropreties.jsx"
import MailList from "../../components/mail/MailList.jsx"
import Footer from "../../components/footer/Footer.jsx"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by proprety type</h1>
        <PropretyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedPropreties/>
        <MailList/>
        <Footer/>
      </div>
      </div>
  )
}

export default Home