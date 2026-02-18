import { storypostsData } from '../data/storyposts.js';

export function buildStorypostsApp() {
    return `
        <div class="app-header">
            <button class="back-btn" onclick="closeApp()">←</button>
            <div class="app-title">Story Posts</div>
        </div>
        <div class="content-area">
            <div class="input-group">
                <input type="text" class="input-field" id="storypostSearch" placeholder="Search by character name..." oninput="filterStoryposts()">
            </div>
            <div class="character-list" id="storypostList">
                ${storypostsData.map(post => `
                    <div class="character-item" data-character="${post.characterKey}">
                        <div class="character-name">${post.title}</div>
                        <div>${post.character}</div>
                        <div><a href="${post.link}" class="planet-link" target="_blank">Link</a></div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}
