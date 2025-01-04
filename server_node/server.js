const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Импортируем cors
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

// Подключаем CORS
app.use(cors());

// Файл для хранения данных
const USERS_FILE = path.join(__dirname, 'users.json');

// Middleware для обработки JSON-запросов
app.use(bodyParser.json());

// Проверяем, существует ли файл. Если нет, создаём его
if (!fs.existsSync(USERS_FILE)) {
  fs.writeFileSync(USERS_FILE, JSON.stringify([]));
}

// Функция для чтения данных из файла
const readUsersFromFile = () => {
  const data = fs.readFileSync(USERS_FILE, 'utf-8');
  return JSON.parse(data);
};

// Функция для записи данных в файл
const writeUsersToFile = (users) => {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

// Регистрация пользователя
app.post('/api/register', (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).json({ error: 'Заполните все поля' });
  }

  const users = readUsersFromFile();

  // Проверяем, есть ли пользователь с таким email
  if (users.some((user) => user.email === email)) {
    return res.status(400).json({ error: 'Пользователь с таким email уже существует' });
  }

  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    password,
    role,
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  writeUsersToFile(users);

  res.status(201).json(newUser);
});

// Вход пользователя
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Заполните все поля' });
  }

  const users = readUsersFromFile();

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ error: 'Неверный email или пароль' });
  }

  res.json(user);
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
