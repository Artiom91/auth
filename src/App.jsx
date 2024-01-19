// В файле, где настроен ваш роутер (например, App.js):
import {Route, Routes} from "react-router-dom";
import LoghinPage from './LoghinPage.jsx';
import Loghin from './pages/Loghin.jsx'
import Calendar from '../src/pages/Calendar.jsx'
import Window from "./pages/Window.jsx";
import Acuze from "./pages/Acuze.jsx";
import Diagnoses from "./pages/Diagnoses.jsx";
import Tratament from "./pages/Tratament.jsx";

const App = () => {
    return (
        // <LoghinPage />

    <Routes>
        <Route path="/" element={<LoghinPage />} />
        <Route path="/loghin" element={<Loghin />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/window" element={<Window />} />
        <Route path="/acuze" element={<Acuze />} />
        <Route path="/diagnoses" element={<Diagnoses />} />
        <Route path="/tratament" element={<Tratament />} />
    </Routes>
    );
};

export default App;
