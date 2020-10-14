import {AppConstants} from "./appConstant"
const ENV = process.ENV || 'stage'
const APP_NAME = process.APP_NAME || 'workplace'

function getCurrentEnvName(){
    return ENV;
}
function getCurrentAppName(){
    return APP_NAME;
}
function getAppConstants(appName){
    if(appName){
        return AppConstants[ENV][appName];
    }
    return AppConstants[ENV][APP_NAME];
}
function getAppLoginUrl(appName){
    return getAppConstants(appName).urls.loginUrl;
}
function getAppBaseUrl(appName){
    return getAppConstants(appName).urls.baseUrl;
}
function getAppuserData(appName){
    return getAppConstants(appName).testData;
}

export const appDataService = {
    getAppConstants,
    getCurrentEnvName,
    getCurrentAppName,
    getAppLoginUrl,
    getAppBaseUrl,
    getAppuserData
};