// ------- Setup External Modules ---------

const express = require('express');
const bodyParser = require('body-parser');


// instanced modules
const app = express();

//

const PORT = 3000;

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is on http://localhost:${PORT}`);
})
