import { useState } from 'react';
import { Link } from 'react-router-dom';


const Loghin = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('ru'); // По умолчанию выбран русский язык

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const selectLanguage = (language) => {
        setSelectedLanguage(language);
        setIsDropdownOpen(false);
    };

    return (
        <nav className="bg-blue-500 flex justify-between items-center h-14">
            <div className="flex items-center space-x-4">
                <h2 className="font-light text-10 text-blue-50 font-raleway p-72">
                    MOLD-COOP COOPERATIA CE CONSUM DIN REPUBLICA MOLDOVA
                </h2>
            </div>
            <div className="relative right-96">
                <button
                    onClick={toggleDropdown}
                    className="text-white focus:outline-none"
                >
                    {selectedLanguage === 'ru' ? 'Русский' : 'Română'}
                </button>
                {selectedLanguage === 'ru' &&
                    <span className="absolute top-1/2 left-16 transform -translate-y-1/2 text-white">&#709;</span>}
                {isDropdownOpen && (
                    <div className="absolute mt-2 w-40 bg-white border rounded shadow-md right-0">
                        <button
                            onClick={() => selectLanguage('ru')}
                            className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-200 focus:outline-none relative"
                        >
                            Русский
                        </button>
                        <button
                            onClick={() => selectLanguage('ro')}
                            className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-200 focus:outline-none relative"
                        >
                            Română
                            {selectedLanguage === 'ro' &&
                                <span className="absolute top-1/2 right-4 transform -translate-y-1/2">&#9660;</span>}
                        </button>
                    </div>
                )}
            </div>
            <div className="absolute right-56 items-center">
                <img src="../../image/contact.png" alt="Contact Icon" className="absolute -left-1/2 -top-1"/>
                <button className="text-white focus:outline-none" onClick={() => console.log('Контакты')}>
                    Контакты
                </button>
            </div>

            <div className="absolute right-20 items-center">
                <img src="../../image/contact.png" alt="Contact Icon" className="absolute -left-1/2 -top-1"/>
                <Link to="/calendar" className="text-white focus:outline-none">
                    Програмы
                </Link>
            </div>

        </nav>
    );
};

export default Loghin;
