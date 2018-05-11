const createServerJS = () => {
    let serverFile = 

    `
    A random number
    ${Math.floor(Math.random()*100)}

    import express from 'express';
    import path from 'path';
    import bodyParser from 'body-parser';
    import multer from 'multer';
    import './routes/api-routes'

    var app = express();
    var port = process.env.PORT || 5000;


    app.use(multer().any());

    //bodyParser Settings
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.text());
    app.use(bodyParser.json({ type: "application/vnd.api+json" }));


    require('./routes/api-routes.js')(app);

    //THIS IS HOW YOU SEND THE REACT APP!
    app.use(express.static("client/dist"));

    app.get('*', function (request, response) {
        response.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
    })

    app.listen(port, () => console.log(\`Listening on port \${ port }\`));

    `







    return serverFile;

}

export default createServerJS;