import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1200,
    backgroundColor: 'background.paper',
    border: '2px solid #000',
    boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.2)',
    p: 4,
};

const Acuze = () => {
    const [activeTab, setActiveTab] = useState('acuze');
    const [open, setOpen] = useState(true);

    const handleClose = () => setOpen(false);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    }


    // Закрытие модального окна при нажатии клавиши ESC
    useEffect(() => {
        const handleEscKeyPress = (event) => {
            if (event.keyCode === 27) {
                handleClose();
            }
        };

        window.addEventListener('keydown', handleEscKeyPress);

        return () => {
            window.removeEventListener('keydown', handleEscKeyPress);
        };
    }, []); // Подписываемся только при монтировании компонента

    // Закрытие модального окна при клике вне его области
    const handleOutsideClick = (event) => {
        if (event.target === event.currentTarget) {
            handleClose();
        }
    };

    return (
        <div>
            {open && (
                <div
                    className="fixed inset-0 flex items-center justify-center"
                    onClick={handleOutsideClick}
                >
                    <div
                        className="absolute inset-0 bg-black opacity-50"
                        onClick={(e) => e.stopPropagation()}
                    ></div>
                    <div className="bg-white p-6 rounded-lg" style={style}>
                        <h2 className="text-2xl font-semibold mb-4 text-center">Examination Form</h2>
                        <div className="bg-gray-300 py-2">
                            <Link to="/acuze" className={`ml-6 ${activeTab === 'acuze' ? 'font-bold' : ''}`}
                                  onClick={() => handleTabChange('acuze')}>
                                Acuze
                            </Link>
                            <Link to="/diagnoses" className={`ml-5 ${activeTab === 'diagnoses' ? 'font-bold' : ''}`}
                                  onClick={() => handleTabChange('diagnoses')}>
                                Diagnoses
                            </Link>
                            <Link to="/tratament" className={`ml-5 ${activeTab === 'tratament' ? 'font-bold' : ''}`}
                                  onClick={() => handleTabChange('tratament')}>
                                Tratament
                            </Link>
                        </div>
                        <div className="p-5 grid">
                            <div>
                                <p>Person</p>
                                <input type="text" className="block w-full p-2 border border-gray-300 rounded-md mb-2"/>
                                <p>Programat de</p>
                                <textarea type="text"
                                          className="block w-full p-2 border border-gray-300 rounded-md mb-2"/>
                                <p>Pe data</p>
                                <textarea type="text"
                                          className="block w-full p-2 border border-gray-300 rounded-md mb-2"/>

                            </div>
                        </div>
                        <br/>
                        <Link to="/calendar" className="bg-gray-400 text-white py-2 px-4 rounded-md mt-4">
                            Закрыть
                        </Link>
                        <button className="relative ml-4 left-3/4 bg-gray-400 rounded py-2 px-6">Back</button>
                        <button className="relative ml-4 left-3/4 bg-gray-400 rounded py-2 px-6">Next</button>
                    </div>

                </div>
            )}
        </div>
    );
};

export default Acuze;