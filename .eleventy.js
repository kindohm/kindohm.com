const dateFilter = require('nunjucks-date-filter');

// var env = new nunjucks.Environment();

// env.addFilter('date', dateFilter);

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addFilter('date', dateFilter);
  eleventyConfig.addFilter('releaseById', (items, releaseId) => {
    return items.filter((i) => i.id === releaseId);
  });

  // Return your Object options:
  return {
    dir: {
      input: 'src',
      includes: '_includes',
      layouts: '_layouts',
      output: 'dist',
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  };
};
