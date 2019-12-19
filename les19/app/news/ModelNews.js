export class ModelNews {
    constructor() {
        this.apiKey = '58d7638951004aa495513f5703d744f7';
        this.link = `https://newsapi.org/v2/everything?apiKey=${this.apiKey}&pageSize=100&q=`;
    }
    getNews(search = 'softserve') {
        return fetch(this.link + search)
            .then(resp => resp.json());
    }


}