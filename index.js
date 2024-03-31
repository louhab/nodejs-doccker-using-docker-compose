
    // import du paquet express 
    const express = require("express");
    // la creation d"une nouvelle application qui liee aux express
    const app = express() ;

    // le teste du l"application
    app.get("/", (req,res)=> 
    {
        res.send("<h1> hello from nodejs</h1>")
    })
    // le port que l"application va utiliser pour qu"il fonctionne :
    const PORT = 8000;

    // le port du fonctionement de l"application:
    app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});

