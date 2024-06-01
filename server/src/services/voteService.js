const Vote = require('../models/vote');
const voteRepository = require('../repositories/voteRepository');

exports.addVote = (name, votes) => {
  const vote = new Vote(name, votes);
  voteRepository.addVote(vote);
};

exports.countVotes = () => {
  const votes = voteRepository.getVotes();
  const result = votes.reduce((acc, vote) => {
    if (!acc[vote.name]) {
      acc[vote.name] = 0;
    }
    acc[vote.name] += vote.votes;
    return acc;
  }, {});
  return result;
};
