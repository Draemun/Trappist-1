import { charactersData } from '../data/characters.js';

export function buildCharactersApp() {
    return `
        <div class="app-header">
            <button class="back-btn" onclick="closeApp()">←</button>
            <div class="app-title">Characters</div>
        </div>
        <div class="content-area">
            <div class="input-group">
                <input type="text" class="input-field" id="characterSearch" placeholder="Search characters..." oninput="filterCharacters()">
            </div>
            <div class="character-list" id="characterList">
                ${charactersData.map(char => `
                    <div class="character-item" data-name="${char.nameKey}">
                        <div class="character-name">${char.name}</div>
                        <div>${char.role}${char.aka ? ` • ${char.aka}` : ''} • Status: ${char.status}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}
