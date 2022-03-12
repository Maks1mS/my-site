const svgContents = require('eleventy-plugin-svg-contents')
const htmlnano = require('htmlnano')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(svgContents)

  if (process.env.NODE_ENV === 'production') {
    eleventyConfig.addTransform('html-min', (content, outputPath) => {
      if (outputPath) {
        const isHtml = outputPath.endsWith('.html')
        if (isHtml) {
          return htmlnano.process(content, {
            collapseAttributeWhitespace: true,
            collapseWhitespace: 'conservative',
            deduplicateAttributeValues: false,
            minifyCss: false,
            minifyJs: true,
            minifyJson: false,
            minifySvg: false,
            removeComments: 'safe',
            removeEmptyAttributes: false,
            removeAttributeQuotes: false,
            removeRedundantAttributes: true,
            sortAttributesWithLists: false,
            removeOptionalTags: false,
            collapseBooleanAttributes: true,
            mergeStyles: false,
            mergeScripts: false,
            minifyUrls: false
          }).then(result => result.html)
        }
      }

      return content
    })
  }

  return {
    dir: {
      input: 'src',
      output: 'dist',
      layouts: 'layouts'
    }
  }
}
