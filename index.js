const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let users = [
  {
    id: 1,
    name: "Juan Pérez",
    phone: "3001234567",
    email: "juan@ciaf.edu.co",
    address: "Calle 123 #45-67",
    age: 25,
    photoUrl: "https://randomuser.me/api/portraits/men/10.jpg"
  },
  {
    id: 2,
    name: "Laura Gómez",
    phone: "3019876543",
    email: "laura@ciaf.edu.co",
    address: "Carrera 10 #23-45",
    age: 28,
    photoUrl: "https://randomuser.me/api/portraits/women/11.jpg"
  },
  {
    id: 3,
    name: "Carlos Martínez",
    phone: "3002049811",
    email: "carlos.martinez@ciaf.edu.co",
    address: "Calle 56 #22-80",
    age: 31,
    photoUrl: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    id: 4,
    name: "Ana Torres",
    phone: "3028439551",
    email: "ana.torres@ciaf.edu.co",
    address: "Avenida 3 #18-100",
    age: 24,
    photoUrl: "https://randomuser.me/api/portraits/women/21.jpg"
  },
  {
    id: 5,
    name: "Luis Ramírez",
    phone: "3009348765",
    email: "luis.ramirez@ciaf.edu.co",
    address: "Carrera 8 #12-34",
    age: 27,
    photoUrl: "https://randomuser.me/api/portraits/men/31.jpg"
  },
  {
    id: 6,
    name: "Marta Salazar",
    phone: "3013456728",
    email: "marta.salazar@ciaf.edu.co",
    address: "Calle 77 #55-32",
    age: 29,
    photoUrl: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 7,
    name: "Felipe Ríos",
    phone: "3018765432",
    email: "felipe.rios@ciaf.edu.co",
    address: "Transversal 7 #59-41",
    age: 33,
    photoUrl: "https://randomuser.me/api/portraits/men/41.jpg"
  },
  {
    id: 8,
    name: "Camila Castillo",
    phone: "3021987432",
    email: "camila.castillo@ciaf.edu.co",
    address: "Avenida 15 #44-09",
    age: 26,
    photoUrl: "https://randomuser.me/api/portraits/women/14.jpg"
  },
  {
    id: 9,
    name: "Santiago Duarte",
    phone: "3006754389",
    email: "santiago.duarte@ciaf.edu.co",
    address: "Calle 27 #34-78",
    age: 32,
    photoUrl: "https://randomuser.me/api/portraits/men/35.jpg"
  },
  {
    id: 10,
    name: "Paula Vargas",
    phone: "3019982764",
    email: "paula.vargas@ciaf.edu.co",
    address: "Calle 40 #20-19",
    age: 25,
    photoUrl: "https://randomuser.me/api/portraits/women/45.jpg"
  }
];

app.get('/users', (req, res) => {
  res.json({ success: true, users: users });
});

app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const user = users.find(u => u.id === id)
  if (user) {
    res.json({ message: "user found", success: true, user: user })
  } else {
    res.json({ message: `user for id = ${id} no found`, success: false })
  }
})

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <style>
          body {
            margin: 0; 
            height: 100vh; 
            display: flex; 
            justify-content: center; 
            align-items: center; 
            background: linear-gradient(135deg, #3b2f2f, #4d4848ff);
            color: white;   
            font-family: Arial, sans-serif;
            flex-direction: column;
          }
          a {
            color: #ffd700;
            font-weight: bold;
            text-decoration: none;
            margin-top: 20px;
            font-size: 1.2rem;
          }
          a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <h1>API de usuarios funcionando correctamente</h1>
        <p>Datos: <a href="/users">/users</a></p>
      </body>
    </html>
  `)
})

app.post('/users', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.unshift(newUser);
  res.json({ message: "new user created", success: true, user: newUser });
});

app.get('/', (req, res) => {
  res.send('<h1><center>Api de usuarios funcionando correctamente</center></h1><p> <center>Prueba <a href="/users">/users</a></center></p>');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
