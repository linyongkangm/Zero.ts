import * as KoaRouter from "koa-router";
import { Controller } from "./Controller";


interface Method {
    (target: any, propertyKey: string, descriptor: PropertyDescriptor): void;
}

interface Router {
    (p: string): (<T extends Controller>(controller: T) => T);
    get: (p: string) => Method;
    post: (p: string) => Method;
}




const koaRouter = new KoaRouter();
const Router = generateRouter();

function generateRouter() {
    const Router = <Router>BRouter;
    Router.get = function (p) {
        return function (target) {

        }
    }
    Router.post = function (p) {
        return function (target) {

        }
    }
    return Router;
    function BRouter(p: string = "/") {
        return function <T extends Controller>(target: T) {
            return target;
        }
    }
}


export { Router };