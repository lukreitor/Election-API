const express = require('express');
const bodyParser = require('body-parser');
const voteController = require('./controllers/voteController');
const voteView = require('./views/voteView');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/vote', voteController.receiveVote);
app.get('/count', voteController.countVotes);

setInterval(() => {
  voteView.showVotes();
}, 5000);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
