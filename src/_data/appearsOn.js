const releases = require('./releases');

module.exports = releases
  .filter((release) => {
    return release.artist === 'compilation';
  })
  .sort((a, b) => {
    a.date > b.date ? 1 : -1;
  });
