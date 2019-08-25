const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.use(cors());

app.get('/',(req,res)=> {
    res.send('hello from serve');
})

app.post('/enroll', (req,res)=>{
    console.log(req.body);
    res.status(404).send({"message":"data received"});
})



app.listen(PORT, function() {
    console.log('serve startd on port ' + PORT);
})