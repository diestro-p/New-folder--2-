var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

    let jsonResponse = {
        "handsetCards": [
            { imageName: 'offer1', title: 'Card 1', cols: 2, rows: 1 },
            { imageName: 'offer2', title: 'Card 2', cols: 2, rows: 1 },
            { imageName: 'offer3', title: 'Card 3', cols: 2, rows: 1 },
            { imageName: 'offer4', title: 'Card 4', cols: 2, rows: 1 }
        ],
        "webCards": [
            { imageName: 'offer1', title: 'Card 1', cols: 2, rows: 1 },
            { imageName: 'offer2', title: 'Card 2', cols: 1, rows: 1 },
            { imageName: 'offer3', title: 'Card 3', cols: 1, rows: 2 },
            { imageName: 'offer4', title: 'Card 4', cols: 1, rows: 1 }
        ]
    };
    res.json(jsonResponse);
});

module.exports = router;