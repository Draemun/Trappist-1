import { planetsData } from '../data/planets.js';

export function buildPlanetsApp() {
    return `
        <div class="app-header">
            <button class="back-btn" onclick="closeApp()">←</button>
            <div class="app-title">Planetary Database</div>
        </div>
        <div class="content-area">
            ${planetsData.map(planet => buildPlanetCard(planet)).join('')}
        </div>
    `;
}

function buildPlanetCard(planet) {
    if (!planet.overview) {
        return `
            <div class="card collapsed">
                <h3 class="planet-header" onclick="togglePlanet(this)">
                    <span class="collapse-icon">▼</span>
                    ${planet.name}
                </h3>
                <div class="planet-content">
                    <p><em>${planet.subtitle}</em></p>
                    <p>${planet.description}</p>
                </div>
            </div>
        `;
    }

    const safeJoin = (val) => Array.isArray(val) ? val.join('<br>') : (val || 'N/A');

    return `
        <div class="card collapsed">
            <h3 class="planet-header" onclick="togglePlanet(this)">
                <span class="collapse-icon">▼</span>
                ${planet.name}
            </h3>
            <div class="planet-content">
                ${planet.subtitle ? `<p><em>${planet.subtitle}</em></p>` : ''}
                ${planet.quote ? `<p>${planet.quote}</p>` : ''}
                
                <h4>Planetary Overview</h4>
                <table class="planet-table">
                    <tr><th>Location</th><td>${planet.overview.location}</td></tr>
                    <tr><th>Type</th><td>${planet.overview.type}</td></tr>
                    <tr><th>Primary Features</th><td>${safeJoin(planet.overview.features)}</td></tr>
                    <tr><th>Climate</th><td>${planet.overview.climate}</td></tr>
                    <tr><th>Atmosphere</th><td>${planet.overview.atmosphere}</td></tr>
                </table>
                
                <h4>Geography & Landmarks</h4>
                <table class="planet-table">
                    ${planet.geography?.daySide ? `<tr><th>Day Side</th><td>${planet.geography.daySide}</td></tr>` : ''}
                    ${planet.geography?.nightSide ? `<tr><th>Night Side</th><td>${planet.geography.nightSide}</td></tr>` : ''}
                    ${planet.geography?.landmarks ? `<tr><th>Key Landmarks</th><td>${safeJoin(planet.geography.landmarks)}</td></tr>` : ''}
                </table>
                
                <h4>Flora & Fauna</h4>
                <table class="planet-table">
                    <tr><th>Flora</th><td>${safeJoin(planet.flora)}</td></tr>
                    <tr><th>Fauna</th><td>${safeJoin(planet.fauna)}</td></tr>
                </table>
                
                <h4>Civilization</h4>
                <table class="planet-table">
                    <tr><th>Population</th><td>${planet.civilization?.population || 'N/A'}</td></tr>
                    <tr><th>Dominant Groups</th><td>${safeJoin(planet.civilization?.groups)}</td></tr>
                    <tr><th>Technology Level</th><td>${planet.civilization?.tech || 'N/A'}</td></tr>
                    <tr><th>Society</th><td>${planet.civilization?.society || 'N/A'}</td></tr>
                </table>
                
                <h4>Economy & Resources</h4>
                <table class="planet-table">
                    <tr><th>Natural Resources</th><td>${safeJoin(planet.economy?.resources)}</td></tr>
                    <tr><th>Economic Activity</th><td>${safeJoin(planet.economy?.activity)}</td></tr>
                </table>
                
                <h4>Threats</h4>
                <table class="planet-table">
                    ${planet.threats?.environmental ? `<tr><th>Environmental Hazards</th><td>${safeJoin(planet.threats.environmental)}</td></tr>` : ''}
                    ${planet.threats?.other ? `<tr><th>Other Threats</th><td>${safeJoin(planet.threats.other)}</td></tr>` : ''}
                </table>
                
                ${planet.ship ? `
                <h4>Associated Ship: ${planet.ship.name}</h4>
                <table class="planet-table">
                    <tr><th>Purpose</th><td>${planet.ship.purpose}</td></tr>
                    <tr><th>Design</th><td>${safeJoin(planet.ship.design)}</td></tr>
                    ${planet.ship.control ? `<tr><th>Control</th><td>${planet.ship.control}</td></tr>` : ''}
                    <tr><th>Living Conditions</th><td>${safeJoin(planet.ship.living)}</td></tr>
                    <tr><th>Link</th><td><a href="${planet.ship.link}" class="planet-link" target="_blank">Thread</a></td></tr>
                </table>
                ` : ''}
            </div>
        </div>
    `;
}
