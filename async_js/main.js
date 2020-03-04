console.log("Request data...");

/*setTimeout(() => {
    console.log("Preparing data...");
    const backendData = {
        server: "server",
        port: 4000,
        status: "active"
    }

    setTimeout(() => {
        backendData.modified = true;
        console.log("Data Recieved", backendData);
    }, 2000);
}, 2000);*/

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Preparing data...");
        const backendData = {
            server: "server",
            port: 4000,
            status: "active"
        }
        resolve(backendData);
    }, 2000);
})
/*
p.then(data => {
    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true;
            resolve(data);
        }, 2000);
    })

    p2.then(clientData => {
        console.log("Data Recieved", clientData);
    })
});
*/

p.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true;
            resolve(data);
        }, 2000);
    });
}).then(clientData => {
        console.log("Data Recieved", clientData);
    });