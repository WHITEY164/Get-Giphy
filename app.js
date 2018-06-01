var form = document.getElementById("form");
var text =  document.getElementById("text");
var result = document.getElementById("result");

form.addEventListener("submit", function(event){
  event.preventDefault();
  var sbar = text.value;
  
  function reqListener(){
    var data = JSON.parse(this.responseText);
    console.log(data)
 for(var i = 5; i < data.data.length; i++) {
   var image = document.createElement('img');
   image.className = 'image';
   image.src = data.data[i].images.original.url;
   result.appendChild(image);
   }
  }
  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', reqListener);
  oReq.open('GET', 'http://api.giphy.com/v1/gifs/search?q='+sbar+'&api_key=sx7RYMTZ2rhPXgixVlbYIuC3VZXMbi0K&limit=25'); 
  oReq.send();
  
});