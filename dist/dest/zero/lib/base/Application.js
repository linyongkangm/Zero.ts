import * as KoaApplication from "koa";
import * as http from "http";
export class Application extends KoaApplication {
    constructor(options) {
        super();
        this.server = http.createServer(this.callback());
        this.server.listen(3000);
    }
}
