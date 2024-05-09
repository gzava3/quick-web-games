import '../App.css';
import Header from "../components/Header/header";
import HangMan from '../components/HangMan/hangMan';

export default function HangManPage() {
    return (
        <div className="Game">
            <Header/>
            <HangMan/>
        </div>
    );
  };