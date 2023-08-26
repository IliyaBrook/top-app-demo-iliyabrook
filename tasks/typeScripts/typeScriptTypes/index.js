"use strict";
const testJson = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "info": {
        "desc": "delectus aut autem",
        "isActive": true
    },
    "tags": [
        {
            "name": "my name",
            "value": 1000
        }
    ]
};
const consoleLogJson = (json) => {
    console.log(json);
};
consoleLogJson(testJson);
