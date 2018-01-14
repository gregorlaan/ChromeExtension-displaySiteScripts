/* Content Scripts */

// Get Current tab content
var content = document.body.innerHTML;

// Find scripts
var scriptsRegex = /((\<script)[\s\S]*?(\<\/script\>))/g;

// Array of scripts
var scripts = content.match(scriptsRegex)

// Find src tags
var srcRegex = /(src)="(\/|\/\/|http)[\s\S]*?\.js/g;

// Array of script links
var links = [];
while ((linksArray = srcRegex.exec(scripts)) != null) {  
  links.push(linksArray[0].replace('src="',''))
}

// array of script names
var names = [];
var arrayLength = links.length;
for (var i = 0; i < arrayLength; i++) {
    names.push(links[i].substr(links[i].lastIndexOf('/') + 1))
}

// Create Object using names and links arrays
var result = {};
names.forEach((key, i) => result[key] = links[i]);

// call object out
result;