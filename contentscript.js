for (var x of document.querySelectorAll('link[type="application/opensearchdescription+xml"]')) {
  x.remove();
}

for (var x of document.querySelectorAll('input[type="search"]')) {
  x.type = 'input';
}
