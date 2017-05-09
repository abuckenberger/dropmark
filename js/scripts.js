// @codekit-prepend "jquery.js";
// @codekit-prepend "semantic.js";

/**********************************
  REFERENCES
* Dropmark API: https://www.dropmark.com/support/api/
* `getJSON()` method: https://www.sitepoint.com/ajaxjquery-getjson-simple-example/
* `$.each()` method: https://www.sitepoint.com/jquery-each-function-examples/
* JS Template Literals: https://css-tricks.com/template-literals/
**********************************/ 

/**********************************
  CONFIGURE JSON CALL
**********************************/ 
// The API feed
var getStuff = 'https://abuckenberger.dropmark.com/420944.json';

// Optional settings for private collections. This is public, no settings needed. 
var setStuff = {};

// Do stuff with returned data
var doStuff = function(data) {

  console.log(data.items);
//  console.log(data.items[0]);
//  console.log(data.items[0].thumbnails.mini);
//  console.log(data.items[1].thumbnails.cropped);
//  console.log(data.items[1].preview);
    
    
    
    
  // What do you want to do? Show (display on page) data? 
showStuff(data);
  
};

/************************************
  GET JSON FROM API
************************************/ 
$.getJSON( getStuff, setStuff, doStuff);


/************************************
  SHOW (DISPLAY ON PAGE)
************************************/ 
var showStuff = function(data) {
  
    
    $('h1').text(data.name);
    
    $('a').attr( 'href', data.url);
    
    
  console.log(data.items); 
  // Child objects. may have many children
  // Loop or cycle through all the data
  // Disply data at each loop
    //i = a variable called index that nerds got lazy and created
    //this calls every object in an array! COOOL!
    
    $.each(data.items, function( i ) {
        //loop
        
        //writing html in javascript-must be on one line
        var stuff = '<p>' + data.items[i].name + '</p>';
        //put on page
        $('#items').append(stuff);
        
    });
  
  
}