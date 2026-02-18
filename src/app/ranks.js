import { ranksData } from '../data/ranks.js';

export function buildRanksApp() {
    return `
        <div class="app-header">
            <button class="back-btn" onclick="closeApp()">←</button>
            <div class="app-title">Hierarchy System</div>
        </div>
        <div class="content-area">
            <div class="rank-section">
                <h3>${ranksData.justice.title}</h3>
                
                <h4>Bureau Structure</h4>
                <table class="planet-table">
                    <tr><th>ID</th><th>Bureau</th></tr>
                    ${ranksData.justice.bureaus.map(b => `<tr><td>${b.id}</td><td>${b.name}</td></tr>`).join('')}
                </table>
                
                <h4>Hierarchy</h4>
                <table class="planet-table">
                    <tr><th>Tier</th><th>Role</th><th>Description</th></tr>
                    ${ranksData.justice.hierarchy.map(h => `<tr><td>${h.tier}</td><td>${h.role}</td><td>${h.desc}</td></tr>`).join('')}
                </table>
                
                <p>Link: <a href="${ranksData.justice.link}" class="planet-link" target="_blank">Thread</a></p>
            </div>
            
            <div class="rank-section">
                <h3>${ranksData.criminal.title}</h3>
                
                <h4>Classification System</h4>
                <table class="planet-table">
                    <tr><th>ID</th><th>Rank</th></tr>
                    ${ranksData.criminal.classifications.map(c => `<tr><td>${c.id}</td><td>${c.name}</td></tr>`).join('')}
                </table>
                
                <h4>Threat Levels</h4>
                <table class="planet-table">
                    <tr><th>Tier</th><th>Function and Crimes</th></tr>
                    ${ranksData.criminal.threats.map(t => `<tr><td>${t.tier}</td><td>Scope: ${t.scope}. Crimes: ${t.crimes}${t.examples ? `. Examples: ${t.examples}` : ''}</td></tr>`).join('')}
                </table>
                
                <p>Link: <a href="${ranksData.criminal.link}" class="planet-link" target="_blank">Thread</a></p>
            </div>
        </div>
    `;
}
