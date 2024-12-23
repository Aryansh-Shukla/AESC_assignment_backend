const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const candidates = [
  { id: 1, name: 'Alice Johnson', skills: 'JavaScript, React', experience: 5 },
  { id: 2, name: 'Bob Smith', skills: 'Python, Django', experience: 3 },
  { id: 3, name: 'Charlie Brown', skills: 'Java, Spring Boot', experience: 7 },
  { id: 4, name: 'Diana Prince', skills: 'HTML, CSS', experience: 2 },
  { id: 5, name: 'Evan Wright', skills: 'C++, OpenGL', experience: 6 },
  { id: 6, name: 'Fiona Davis', skills: 'Ruby, Rails', experience: 4 },
  { id: 7, name: 'George Hall', skills: 'Swift, iOS', experience: 5 },
  { id: 8, name: 'Hannah King', skills: 'Kotlin, Android', experience: 3 },
  { id: 9, name: 'Ian Moore', skills: 'PHP, Laravel', experience: 4 },
  { id: 10, name: 'Julia Green', skills: 'Go, Kubernetes', experience: 8 },
];

app.get('/api/candidates', (req, res) => {
  res.json(candidates);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
