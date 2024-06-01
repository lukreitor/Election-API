const voteService = require('../services/voteService');

exports.showVotes = () => {
  const result = voteService.countVotes();
  console.log('Current vote count:', result);
};
