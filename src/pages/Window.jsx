import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Acuze from './Acuze.jsx';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const names = [
    'Andrei Marin',
    'Elena Popescu',
    'Mihai Andru',
    'Ion Dragomir',
    'Ana Simonescu',
];

const Window = () => {
    const [open, setOpen] = useState(true);
    const [selectedMedic, setSelectedMedic] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);

    const handleClose = () => setOpen(false);

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
    }, []);

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
                        <h2 className="text-2xl font-semibold mb-4 text-center">New Event</h2>

                        <div className="p-5 grid grid-cols-2 gap-4">
                            <div>
                                <p>Medic</p>
                                <select
                                    value={selectedMedic}
                                    onChange={(e) => setSelectedMedic(e.target.value)}
                                    className="block w-full p-2 border border-gray-300 rounded-md mb-2"
                                >
                                    <option value="" disabled>
                                        Select Medic
                                    </option>
                                    {names.map((name, index) => (
                                        <option key={index} value={name}>
                                            {name}
                                        </option>
                                    ))}
                                </select>
                                <p>Scope of visit</p>
                                <input
                                    type="text"
                                    className="block w-full p-2 border border-gray-300 rounded-md mb-2"
                                />

                            </div>
                            <div>
                                <p className="text-red-600 font-bold">Person</p>
                                <input type="text" className="block w-full p-2 border border-gray-300 rounded-md mb-2"/>
                                <p>Programat de</p>
                                <input type="text" className="block w-full p-2 border border-gray-300 rounded-md mb-2"/>
                                <div>
                                    <p>Pe data</p>
                                    <DatePicker
                                        selected={selectedDate}
                                        onChange={(date) => setSelectedDate(date)}
                                        className="block w-full p-2 border  border-gray-300 rounded-md mb-2"
                                    />
                                </div>

                            </div>
                            <p className="absolute mt-60">Notite</p>
                            <input type="text"
                                   className="relative w-full p-8 border border-gray-300 rounded-md mt-8 col-span-full"/>
                        </div>
                        <br/>
                        <Link to="/calendar" className="bg-gray-400 text-white py-2 px-4 rounded-md mt-4">
                            Закрыть
                        </Link>
                        <button className="relative ml-4 left-3/4 bg-gray-400 rounded py-2 px-6">Back</button>
                        <Link
                            to="/acuze"
                            className="relative ml-4 left-3/4 bg-gray-400 rounded py-2 px-6"
                            onClick={handleClose}
                        >
                            Next
                        </Link>
                    </div>

                </div>
            )}
        </div>
    );
};

export default Window;
