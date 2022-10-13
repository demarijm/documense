const axios = require('axios');

interface DocumentConstructor {
    id: string;
    name: string;
    description: string;
    url: string;
    created: string;
}

/*
* Class for making calls to the Document API
* @param {string} apiKey - The API key for the user
* @param {string} apiSecret - The API secret for the user
*/
export class Document {
    apiKey: string;
    apiSecret: string;
    constructor(apiKey: string, apiSecret: string) {
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
    }

    
}
