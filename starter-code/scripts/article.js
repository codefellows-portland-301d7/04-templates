var articles = [];

function Article (opts) {
  this.author = opts.author;
  this.authorUrl = opts.authorUrl;
  this.title = opts.title;
  this.category = opts.category;
  this.body = opts.body;
  this.publishedOn = opts.publishedOn;
}

Article.prototype.toHtml = function() {

};

ourLocalData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

ourLocalData.forEach(function(ele) {
  articles.push(new Article(ele));
});

articles.forEach(function(a){
  $('#articles').append(a.toHtml());
});
