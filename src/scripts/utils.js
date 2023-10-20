const crypto = require('crypto');

function generateId(username) {
  const hash = crypto.createHash('sha256');
  hash.update(username);
  const hexDigest = hash.digest('hex');
  const uniqueId = hexDigest.slice(0, 10);
  return uniqueId;
}

module.exports = {
    generateId,
};

