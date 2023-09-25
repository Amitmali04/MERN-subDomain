import { AdminRouter,AppRouter, ExampleRouter } from "../router/Index";

export const APP = [
    {
        subDomain: "www",
        app: AppRouter,
        main:true
    },
    {
        subDomain: "admin",
        app: AdminRouter,
        main:false
    },
    {
        subDomain: "example",
        app: ExampleRouter,
        main:false
    }
]