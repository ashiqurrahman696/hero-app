const getInstalledApps = () => {
    const installedAppsStr = localStorage.getItem("installed");
    if(installedAppsStr){
        const installedData = JSON.parse(installedAppsStr);
        return installedData
    }
    else{
        return [];
    }
}

const saveInstalledApp = app => {
    const installedStringified = JSON.stringify(app);
    localStorage.setItem("installed", installedStringified);
}

const addToInstalledApps = id => {
    const installedData = getInstalledApps();
    const newInstalled = [...installedData, id];
    saveInstalledApp(newInstalled);
}

export {getInstalledApps, addToInstalledApps};