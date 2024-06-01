const votes = [];

exports.addVote = (vote) => {
  votes.push(vote);
};

exports.getVotes = () => {
  return votes;
};
