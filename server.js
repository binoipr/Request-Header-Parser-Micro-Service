var express = require('express');
var app = express();

// middleware
var requestIp = require('request-ip');
const ipMiddleware = (req, res, next) => {
    const clientIp = requestIp.getClientIp(req);
    next();
}
app.use(requestIp.mw());

//route handler
app.get("/", (req, res) => {
    var ipaddress = req.clientIp;
    var language = req.acceptsLanguages();
    var software = req.get('User-Agent');    
    res.json({
        ipaddress: ipaddress,
        language: language,
        software: software
    });
})


const port = 3000;
app.listen(port, () => {
    console.log(`listening to port : ${port}`);
});

/*const server = app.listen(0, ()=>{
    console.log('listening on port: ', server.address().port);
}); */