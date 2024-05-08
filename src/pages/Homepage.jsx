import '../App.css';
import Header from "../components/Header/header";
import Carouselpage from '../components/carousel/carousel';
import Search from '../components/Search/SearchContainer';
import CookieConsentpage from '../components/CookieConsent/cookieConsent';

export default function Homepage() {
    return (
        <div className="App">
            <Header />
            <Search/>
            <Carouselpage />
	    <a href='/UltimateTicTacToe'>Ultimate Tic-Tac-Toe</a>
            <CookieConsentpage />
      </div>
    );
  };
