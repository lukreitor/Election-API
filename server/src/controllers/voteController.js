const voteService = require('../services/voteService');

exports.receiveVote = (req, res) => {
  const { name, votes } = req.body;
  voteService.addVote(name, votes);
  res.sendStatus(200);
};

exports.countVotes = (req, res) => {
  const result = voteService.countVotes();
  res.json(result);
};
