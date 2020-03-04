const requestURI = "http://127.0.0.1:5000/";

fetch(requestURI, {
    method: 'GET',
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "text/plain"
    }
}).then(response => response.json())
    .then(json => document.writeln(json));  // дальше - парсинг


// HTTP 1.1 200 OK

// 211
// 255
// 290

// 1. Выставить заголовок
// 2. Парсинг
// Стартрек