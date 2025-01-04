'use client'

import { useState } from 'react';
import axios from 'axios';
import {Link, useRouter} from "@/i18n/routing";

const Register = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'teacher' | 'student'>('student');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      if (!name || !email || !password) {
        setError('Заполните все поля.');
        return;
      }

      const newUser = {
        name,
        email,
        password, // В реальном проекте убедитесь, что пароль безопасно хэшируется на сервере.
        role,
      };

      // Отправляем запрос на регистрацию
      await axios.post('http://localhost:5000/api/register', newUser);

      // Перенаправляем на страницу входа после успешной регистрации
      router.push('/login');
    } catch (err) {
      setError('Ошибка при регистрации. Попробуйте еще раз.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <h2 className="mb-4 text-xl font-bold text-center">Регистрация</h2>
        {error && <p className="mb-4 text-red-500">{error}</p>}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Имя</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Пароль</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Роль</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as 'teacher' | 'student')}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="student">Студент</option>
            <option value="teacher">Преподаватель</option>
          </select>
        </div>
        <button
          onClick={handleRegister}
          className="w-full px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
        >
          Зарегистрироваться
        </button>
        <p className="mt-4 text-sm text-center">
          Уже есть аккаунт?{' '}
          <Link href="/login" className="text-blue-500 hover:underline">
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
