// var myHeaders = new Headers();
// myHeaders.append("apikey", "a2EfOyl0ksnculd5hyrUKeMoOHIcnHaM");

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders
// };

// fetch("https://api.apilayer.com/image_to_text/url?url=https://www.google.com/url?sa=i&url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F73783915%2Fhow-to-filter-text-from-text-from-image-with-python&psig=AOvVaw1QNRgDsGUUMpdUMSs-BINf&ust=1702642585251000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCKjQroX0joMDFQAAAAAdAAAAABAE", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));


// var myHeaders = new Headers();
// myHeaders.append("apikey", "a2EfOyl0ksnculd5hyrUKeMoOHIcnHaM");
// myHeaders.append("Accept", "application/json"); // Set the appropriate Accept header

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders
// };

// fetch("https://api.apilayer.com/image_to_text/url?url=https://www.google.com/url?sa=i&url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F73783915%2Fhow-to-filter-text-from-text-from-image-with-python&psig=AOvVaw1QNRgDsGUUMpdUMSs-BINf&ust=1702642585251000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCKjQroX0joMDFQAAAAAdAAAAABAE", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));



var myHeaders = new Headers();
myHeaders.append("apikey", "a2EfOyl0ksnculd5hyrUKeMoOHIcnHaM");
myHeaders.append("Accept", "application/json");

var url = "https://api.apilayer.com/image_to_text/url?url=" + encodeURIComponent("https://i.stack.imgur.com/i1Abv.png");


var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch(url, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
