# digital-genessys-anele-nqonji-project — Server

This repository contains a minimal Express-based server for the blog project.

## Server (server/)

Quick start:

1. Install dependencies
   - cd server
   - npm install

2. Start the server
   - npm start
   - The server listens on PORT (default 3001)

API Endpoints:

- GET /  
  Responds with a JSON message: { "message": "Hello from the blog server" }

- GET /posts  
  Returns an array of posts (in-memory example data).

- POST /posts  
  Create a post. Request body must be JSON:  
  { "title": "Post title", "body": "Post body" }  
  Responds with the created post (201) or 400 if title/body is missing.

Notes
- Data is stored in-memory for the example server — restarting the server resets posts.
- To run in development with auto-reload, consider installing nodemon and adding a `dev` script (`nodemon index.js`).
- Server files:
  - server/package.json
  - server/index.js

Links
- server/index.js: https://github.com/anelenqonji/digital-genessys-anele-nqonji-project/blob/main/server/index.js
- server/package.json: https://github.com/anelenqonji/digital-genessys-anele-nqonji-project/blob/main/server/package.json