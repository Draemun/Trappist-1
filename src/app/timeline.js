import { timelineData } from '../data/timeline.js';

export function buildTimelineApp() {
    return `
        <div class="app-header">
            <button class="back-btn" onclick="closeApp()">←</button>
            <div class="app-title">Timeline</div>
        </div>
        <div class="content-area">
            <table class="planet-table">
                <tr><th>Year</th><th>Events</th></tr>
                ${timelineData.map(t => `<tr><td>${t.year}</td><td>${t.events.join('<br>')}</td></tr>`).join('')}
            </table>
        </div>
    `;
}
