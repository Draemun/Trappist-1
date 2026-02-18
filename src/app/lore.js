import { loreData } from '../data/lore.js';

export function buildLoreApp() {
    return `
        <div class="app-header">
            <button class="back-btn" onclick="closeApp()">←</button>
            <div class="app-title">System Archives</div>
        </div>
        <div class="content-area">
            ${loreData.map(item => `
                <div class="card">
                    <h3>${item.title}</h3>
                    ${item.content}
                </div>
            `).join('')}
        </div>
    `;
}
