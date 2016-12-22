# Do not automatically add other search engines

Chrome automatically adds sites to your list of custom search engines list when you visit them. This extension prevents this behavior.

[Chrome Web Store](https://chrome.google.com/webstore/detail/lejpfpoaicennngnbmkhgagndoiijjip)

Note that Chrome uses a number of heuristics to add search engines, and while this extension prevents the most common approach, we cannot prevent all of them. Hence, some search engines may still get through. To remove added search engines (in this case, those that contain '.' in the keyword), navigate to chrome://settings/searchEngines and run the following code a few times (via the developer console, `Command-Option-J` or `Ctrl-Shift-J`)

```javascript
for (var x of document.querySelectorAll('.keyword-column')) {
  if (x.innerText.indexOf('.') != -1) {
    x.parentNode.parentNode.childNodes[1].click()
  }
}
```
