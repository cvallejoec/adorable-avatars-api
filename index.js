const express = require('express');
const avatarsMiddleware = require('adorable-avatars');
require('dotenv').config();

const app = express();

app.use('/myAvatars', avatarsMiddleware);

const PORT = process.env.PORT || 9001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
