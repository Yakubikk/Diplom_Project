'use client'

import { useState } from 'react';
import axios from 'axios';
import {useAuth} from "@/context/AuthContext";
import {Link} from "@/i18n/routing";
import {User} from "@/models/user/user";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        setError('Заполните все поля.');
        return;
      }

      if (email !== 'qwer@gmail.com') {
        setError('Не тот Емаил');
        return;
      } else if (password !== '12345') {
        setError('Не тот пароль');
        return;
      }

      // const response = await axios.post('http://localhost:5000/api/login', { email, password });
      // const user = response.data;

      const user: User = {
        id: Date.now().toString(),
        name: 'Egor',
        email: email,
        role: 'teacher',
        createdAt: new Date().toISOString(),
        avatarUrl: 'https://i.gifer.com/PE61.gif',
      }

      login(user, rememberMe);
    } catch {
      setError('Неверный email или пароль.');
    }
  };

  return (
    <div className="flex w-full items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xl p-6 bg-white rounded shadow-md">
        <h2 className="mb-4 text-xl font-bold text-center">Вход</h2>
        {error && <p className="mb-4 text-red-500">{error}</p>}
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
        <div
            className="mb-4 w-fit flex items-center hover:cursor-pointer"
            onClick={() => setRememberMe(p => !p)}
        >
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="mr-2 hover:cursor-pointer"
          />
          <label className="text-sm hover:cursor-pointer">Запомнить меня</label>
        </div>
        <button
          onClick={handleLogin}
          className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Войти
        </button>
        <p className="mt-4 text-sm text-center">
          Нет аккаунта?{' '}
          <Link href="/register" className="text-blue-500 hover:underline">
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </div>
  );
};
