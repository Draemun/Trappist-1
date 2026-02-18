import { apps, dockApps } from './apps.js';
import { buildLoreApp } from './app/lore.js';
import { buildPlanetsApp } from './app/planets.js';
import { buildRanksApp } from './app/ranks.js';
import { buildTimelineApp } from './app/timeline.js';
import { buildRunwayApp } from './app/runway.js';
import { buildStorypostsApp } from './app/storyposts.js';
import { buildCharactersApp } from './app/characters.js';
import { buildSettingsApp } from './app/settings.js';

export function buildHomeScreen() {
    return `
        <div class="header">
            <h1>Synchro OS</h1>
            <p id="galacticTime">Galactic Standard Time: 2239.08.31</p>
        </div>
        <div class="app-grid">
            ${apps.map(app => `
                <div class="app ${app.class}" onclick="openApp('${app.id}')">
                    <div class="app-icon">${app.icon}</div>
                    <div class="app-label">${app.label}</div>
                </div>
            `).join('')}
        </div>
        <div class="dock">
            ${dockApps.map(app => `
                <div class="dock-app" onclick="openApp('${app.id}')">${app.icon}</div>
            `).join('')}
        </div>
    `;
}

export function buildStatusBar() {
    return `
        <div class="time">15:42</div>
        <div class="battery-signal">
            <div class="signal-bars">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
            <div class="battery">
                <div class="battery-fill"></div>
            </div>
        </div>
    `;
}

export function buildAppContent(appId) {
    const builders = {
        lore: buildLoreApp,
        planets: buildPlanetsApp,
        ranks: buildRanksApp,
        timeline: buildTimelineApp,
        runway: buildRunwayApp,
        storyposts: buildStorypostsApp,
        characters: buildCharactersApp,
        settings: buildSettingsApp
    };
    
    return builders[appId] ? builders[appId]() : '';
}
