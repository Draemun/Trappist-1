import { settingsData } from '../data/settings.js';

export function buildSettingsApp() {
    return `
        <div class="app-header">
            <button class="back-btn" onclick="closeApp()">←</button>
            <div class="app-title">System Settings</div>
        </div>
        <div class="content-area">
            <div class="card">
                <h3>${settingsData.theme.title}</h3>
                <p>${settingsData.theme.description}</p>
                <div class="theme-selector">
                    ${settingsData.theme.options.map(opt => `
                        <div class="theme-option${opt.active ? ' active' : ''}" onclick="setTheme('${opt.id}')">
                            <div class="theme-radio"></div>
                            <div>
                                <strong>${opt.name}</strong><br>
                                <small>${opt.desc}</small>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="card">
                <h3>${settingsData.communications.title}</h3>
                <p>${settingsData.communications.status}</p>
            </div>
            <div class="card">
                <h3>${settingsData.security.title}</h3>
                <p>${settingsData.security.status}</p>
            </div>
        </div>
    `;
}
