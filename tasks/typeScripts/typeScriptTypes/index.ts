interface iTestJsonInfo {
    desc: string;
    isActive: boolean;
}

interface iTestJsonTags {
    name: string;
    value: number;
}

interface iTestJson {
    userId: number;
    id: number;
    title: string;
    info: iTestJsonInfo;
    tags: iTestJsonTags[];
}

const testJson  = {
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
}

const consoleLogJson = (json: iTestJson) => {
    console.log(json);
}

consoleLogJson(testJson);
