
var marked = require('marked'),
    path = require('path'),
    fs = require('fs'),
    handlebars = require('handlebars'),
    projectRoot = path.resolve(__dirname + '/..'),
    rndr = new marked.Renderer();

customTagRenderer = function(text) {

  // Custom highlight markdown tags

  text = text.replace(/b_([^_]*)_b/g, function(s, m) {
    return '<span class="highlight-blue">' + m + '</span>';
  });
  text = text.replace(/o_([^_]*)_o/g, function(s, m) {
    return '<span class="highlight-orange">' + m + '</span>';
  });
  text = text.replace(/g_([^_]*)_g/g, function(s, m) {
    return '<span class="highlight-green">' + m + '</span>';
  });

  return text;

};

module.exports = function(mdPath, options) {
  try {
    var file = fs.readFileSync(path.join(projectRoot, mdPath) + '.md', 'utf8');

    file = customTagRenderer(file);

    return new handlebars.SafeString(marked(file, { renderer: rndr }));
  } catch (e) {
    console.log(e);
  }
};
