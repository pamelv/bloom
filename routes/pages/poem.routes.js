const router = require("express").Router();
const axios = require('axios');

router.get('/poem/:title', (req, res) => {
    // console.log('hello');
    const title = req.params.title;
    axios.get(`http://poetrydb.org/title/${title}/title,author,lines.json`)
    .then(response => {

        // ==================to generate three random poems====================
        const newArr = [];
        for( let i=0 ; i < 4; i++ ) {
            const outerIndex =  Math.floor(Math.random() * response.data.length);    
            newArr.push(response.data[outerIndex]);
        }
        console.log(response.data);
        res.json(newArr);


        // ====================to generate only one poem=====================
        const outerIndex =  Math.floor(Math.random() * response.data.length);
        res.json(response.data[outerIndex]);


        // ================to generate one line of poem======================
        // const outerIndex =  Math.floor(Math.random() * response.data.length);
        // const innerIndex = Math.floor(Math.random() * response.data[outerIndex].lines.length);
        // res.json(response.data[outerIndex].lines[innerIndex]);
    })
})
module.exports = router;