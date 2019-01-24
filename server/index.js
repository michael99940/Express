const express = require('express');

const app = express();

app.use(express.static(`${__dirname}`));

const port = 80;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});