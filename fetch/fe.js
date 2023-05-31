fetch("https://jsonplaceholder.typicode.com/posts", {
  method: 'POST',
  body: JSON.stringify({
    title: 'My Title',
    body: 'Lorem ipsum dolor sit amet',
    userId: 4  
  }),
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
  })
  .then(jsonData => {
    console.log('Данные:', jsonData);
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });
