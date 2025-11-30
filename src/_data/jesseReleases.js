const releases = require('./releases');

module.exports = releases
  .filter((release) => {
    return release.artist === 'kindohm + jesse whitney';
  })
  .sort((a, b) => {
    a.date > b.date ? 1 : -1;
  });
