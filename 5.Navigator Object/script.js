const namePara = document.getElementById('name');
const versionPara = document.getElementById('version')

function browserName() {
    const applicationName = navigator.appName;

    namePara.innerHTML = applicationName
}

function browserVersion() {
    const applicatonVer = navigator.appVersion;

    versionPara.innerHTML = applicatonVer;
}