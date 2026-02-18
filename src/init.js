import { buildHomeScreen, buildStatusBar, buildAppContent } from './ui.js';

export function init() {
    const homeScreen = document.getElementById('homeScreen');
    const statusBar = document.querySelector('.status-bar');
    
    if (homeScreen) homeScreen.innerHTML = buildHomeScreen();
    if (statusBar) statusBar.innerHTML = buildStatusBar();
    
    document.querySelectorAll('.app-content').forEach(app => {
        const appId = app.id.replace('App', '');
        const content = buildAppContent(appId);
        if (content) app.innerHTML = content;
    });
}
