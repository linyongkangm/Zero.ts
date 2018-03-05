import * as  KoaApplication from "koa";
import * as http from "http";

export class Application<T> extends KoaApplication {
    private readonly server: http.Server;
    constructor(options: T) {
        super();
        const server = this.server = http.createServer(this.callback());
        server.listen(3000);
    }
}

