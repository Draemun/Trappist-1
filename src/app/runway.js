import { runwayData } from '../data/runway.js';

export function buildRunwayApp() {
    return `
        <div class="app-header">
            <button class="back-btn" onclick="closeApp()">←</button>
            <div class="app-title">Runway</div>
        </div>
        <div class="content-area">
            ${runwayData.map(article => `
                <div class="card collapsed">
                    <h3 class="planet-header" onclick="togglePlanet(this)">
                        <span class="collapse-icon">▼</span>
                        ${article.title}
                    </h3>
                    <div class="planet-content">
                        <h4>${article.subtitle}</h4>
                        <p><em>${article.credit}</em></p>
                        ${article.content}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}
