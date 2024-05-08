import '../App.css';
import Header from "../components/Header/header";
import Search from '../components/Search/SearchContainer';
import HangMan from '../components/HangMan/HangMan';

export default function Gamepage() {
    return (
        <div className="Game">
            <Header/>
            <HangMan/>
        </div>
    );
  };