# Structure of an HTML doc

First we need to specify the doctype. This tells the web browser what version this html document supports. 

* HTML5:`<!DOCTYPE html>`
* HTML 4.01:`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">`
* XHTML 1.1: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">`

The html in the `<!DOCTYPE…>` simply tells the web browser that this is an html document. 
Everything that follows the doctype is enclosed in an `<html>` element. Remember the html element must contain the `lang` attribute to specify the language the content of the page is in. In this case I will use `<html lang="en">` which is in English. 

Every HTML file has a `<head>` element which contains metadata about the HTML document. It contains information such as the **title** of the document, the **character set**, **styles**, **scripts** and other information. Most importantly it contains links to other documents like `.css` and `.js` files telling the web browser to download these files from the web server. It also contains information for setting the user’s Viewport. Here is an example:

```html
<!DOCTYPE html>
<html lang=”en”>
  <head>
    <meta charset="UTF-8">
    <title>Wisdom Pet Medicine</title>
    <link rel="stylesheet" href="https://maxcd.bootstrapcdn.com/3.3.1/css/bootstrap.min.css"> 
    <link rel="stylesheet" href="css/style.css">
    <script src="js/prefixfree.min.js"></script>
    <meta name="viewport" content="width=device-width initial-scale=1">
  </head>
  <body>
    …….
    …….
    …….
  </body>
</html>
```
## The document head

We recently gave a brief introduction to the head element which contains metadata about the html document. One important bit of data is to specify which character set we are using, we put this in a `<meta>` element and assign the value to the charset attribute. 
 
```html
<meta charset="UTF-8">
 ```  

The meta element is not only used to state the character set of a html doc. It has other purposes like containing descriptions of a page, keywords, author of the document, and viewport settings. The last element we wrote in the head element is another meta element, this time we have specified the viewport settings: 
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```
This is a special type of viewport element as the content will automatically adjust to the screen size of the user's device. 

We may also want to add a description of our site. For this we will again use a metadata tag and name to give it a description in the content attribute. 
```html
<meta name="description" content="A description of your site that will allow you to search through search engines"> 
```
A lot of developers use this to make their site easily accessible through search engines based on the description. 

Someone may also use keywords for search engines to look up your site. For example: 
```html
<meta name="keywords" content="Boris Johnson, Party Gate, Kier Starma"> 
```
It is also used to give a page a name when it is saved to the home screen of a web browser: 
```html
<meta name="application-name" content="Filament Group">
```
And also specify the tile image: 
```html
<meta name="ms-application-Tileimage" content="/images/icons/mstile-144x144.png">
```

A title image is an icon that you see displayed on the browser tab. 

And a background colour: 
```html
<meta name="theme-colour" content="#247200">
```


**Metadata** tag is only used within the head element as it contains information about the page.

We need a title for this page, therefore we will use the `<title>` element. This of course isn't displayed on the webpage, it is instead displayed on the opened tab of your web browser. 
```html
<title>Wisdom Pet Medicine</title>
```

Links are used in the head element for loading files such as ***css*** files and ***JavaScript*** files to a web browser. A Lot of your content will contain references to classes in a css document, or an id to a JavaScript file. 

This tag uses two types of attributes `rel` for telling the web browser what kind of asset this link is, and the `href` attribute for listing the url of the document. 
``` html
<link rel="stylesheet" href="main.css">
```
We might want to link a favicon (an icon displayed on a browser tab next to the page title)
``` html
<link rel="icon" href="favicon.ico">
```
You may also want use use a link to pre load a font file
``` html
<link rel="preload" href="my.Font.woff2" as="font" type="font/woff2" crossorigin="anonymous">
```
The files are loaded in the order you list them in the head tag.

Lastly we have a script tag. This tag is used to load JavaScript files.
``` html
<script src=“my-javascript-file.js”>
```

This tag doesn’t necessarily have to be in the head tag. It can be used after the closing of the body tag so it’s the last file that will be loaded.

The `<head>` tag is what we use for the web browser to load important files as the web site is loading on the page through the `<link>` and `<script>` tags. It is also used to hold important information for the web browser about the html document through the `<meta>` tag.

## Summary of the head element

| Elements | Description | 
|----------|-------------|
| `<title>`  | This is the title of the html doc, and it is also displayed on the opened tab on your web browser.|
| `<style>` | This is used to define style information about a CSS file. |
| `<link>` | This is used to tell the web browser which files need to be loaded while the webpage is loading on the browser. These are commonly **css** files, favicons, font files.|
| `<meta>` | Contains information about the html doc. This can be the character set used, viewport settings, keywords, description of the page, author of the page.|
| `<script>` | Similar to the link element, but is used to load .js files instead.|

## Summary of meta attributes 

| Attributes | Description |
|------------|-------------|
| `name`     | This attribute is used to give a title to some data.|
| `content`  | The value of that data.|

## Summary of link attributes

| Attributes | Description |
|------------|-------------|
| `rel` | This gives a description of what the file is.|
| `href` | This gives us the url of that document located on a web server.|














