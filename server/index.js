const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// In-memory example data
let posts = [
  { id: 1, title: 'Hello World', body: 'This is the first post' }
];
let nextId = 2;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from the blog server' });
});

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.post('/posts', (req, res) => {
  const { title, body } = req.body;
  if (!title || !body) return res.status(400).json({ error: 'title and body required' });
  const post = { id: nextId++, title, body };
  posts.push(post);
  res.status(201).json(post);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
