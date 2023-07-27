module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/css');

  // Return your Object options:
  return {
    dir: {
      input: 'src',
      includes: '_includes',
      layouts: '_layouts',
      output: 'dist',
    },
  };
};
