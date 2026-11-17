fetch('https://api.unsplash.com/photos/random', {
  headers: {
    "Authorization": `Client-ID K94PWamS-98J4FZQQAmq6YvjuvGBa22zgkfOBqyOx8w`
  }
  
})
  .then((response) => {
    console.log('Response', response);
    return response.json();
  })
  .then((data) => {
    console.log('Data:', data);

  })
  .catch((error) => {
    console.error('Error:', error);
  });
