import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import {useNavigate} from 'react-router-dom'

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); // Заменено на useNavigate

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = () => {
        // Проверка ваших пользовательских данных (замените на свою логику)
        if (username === 'demo' && password === 'demo') {
            alert('Вход выполнен успешно!');
            // Перенаправление на страницу Loghin
            navigate('/loghin'); // Заменено на navigate
        } else {
            alert('Ошибка входа. Пожалуйста, проверьте ваши данные.');
        }
    };


    return (
        <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url("./image/image.png")' }}>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
                <h2 className="text-2xl font-medium mb-6 text-center">Авторизация</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="username">
                        Логин
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Введите имя пользователя"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-6 relative">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
                        Пароль
                    </label>
                    <div className="flex items-center">
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Введите пароль"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            className="absolute right-0 top-8 mt-2 mr-3 text-gray-500"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <FiEyeOff /> : <FiEye />}
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-28 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={handleLogin}
                    >
                        Войти
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
