const readline = require('readline');
const axios = require('axios');
require('dotenv').config();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function promptVote() {
  rl.question('Enter candidate name: ', (name) => {
    rl.question('Enter number of votes: ', (votes) => {
      axios.post(`${process.env.SERVER_URL}/vote`, { name, votes: parseInt(votes) })
        .then(() => {
          console.log('Vote submitted successfully.');
          promptVote();
        })
        .catch((err) => {
          console.error('Error submitting vote:', err);
          promptVote();
        });
    });
  });
}

promptVote();
