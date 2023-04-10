fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(posts => {
        let output = '';
        posts.forEach(post =>output += `<h1>I'd ${post.id}</h1> <h1>${post.title}</h1>
        <p>${post.description}</p><h1>${post.price} $</h1>
        <img src="${post.image}" width="200" hight="200">`);
        document.body.innerHTML = output;
    })
    .catch(err => document.body.innerHTML = `something went wrong`)