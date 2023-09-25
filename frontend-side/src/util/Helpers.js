import { APP } from "./Constant"

export const getApp = () =>{
    // console.log(window.location.hostname);
    const subdomain = getSubDomain(window.location.hostname)
    console.log(subdomain)
    const main = APP.find((app) => app.main);

    if(!main) throw new Error("Must have main app")

    if(subdomain === " ")
    return main.app;

    const app = APP.find((app) => subdomain === app.subDomain);

    if(!app)
    return main.app;


    return app.app
}

const getSubDomain = (location) =>{

    const locationParts = location.split(".");

    let sliceTill = -2;

    const isLocalHost = locationParts.slice(-1)[0] === "localhost";
    if(isLocalHost)
    sliceTill = -1;

    return locationParts.slice(0, sliceTill).join("")

}