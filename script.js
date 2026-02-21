import { init } from './src/init.js';

function generateStars() {
            const starsContainer = document.getElementById('stars');
            for (let i = 0; i < 100; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.width = Math.random() * 3 + 'px';
                star.style.height = star.style.width;
                star.style.animationDelay = Math.random() * 3 + 's';
                starsContainer.appendChild(star);
            }
        }
        function openApp(appName) {
            const homeScreen = document.getElementById('homeScreen');
            const appContent = document.getElementById(appName + 'App');
            
            if (appContent) {
                homeScreen.style.display = 'none';
                appContent.classList.add('active');
                window.location.hash = appName;
            }
        }
        function closeApp() {
            const homeScreen = document.getElementById('homeScreen');
            const allApps = document.querySelectorAll('.app-content');
            
            allApps.forEach(app => app.classList.remove('active'));
            homeScreen.style.display = 'flex';
            window.location.hash = 'home';
        }

        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            if (hash && hash !== 'home') {
                const appContent = document.getElementById(hash + 'App');
                if (appContent && !appContent.classList.contains('active')) {
                    openApp(hash);
                }
            } else {
                const homeScreen = document.getElementById('homeScreen');
                const allApps = document.querySelectorAll('.app-content');
                allApps.forEach(app => app.classList.remove('active'));
                homeScreen.style.display = 'flex';
            }
        });

        if (window.location.hash && window.location.hash !== '#home') {
            const hash = window.location.hash.slice(1);
            setTimeout(() => openApp(hash), 100);
        } else {
            window.location.hash = 'home';
        }
        function filterStoryposts() {
            const searchTerm = document.getElementById('storypostSearch').value.toLowerCase();
            const storyposts = document.querySelectorAll('#storypostList .character-item');
            
            storyposts.forEach(storypost => {
                const character = storypost.getAttribute('data-character');
                if (character.includes(searchTerm)) {
                    storypost.style.display = 'block';
                } else {
                    storypost.style.display = 'none';
                }
            });
        }
        function filterCharacters() {
            const searchTerm = document.getElementById('characterSearch').value.toLowerCase();
            const characters = document.querySelectorAll('#characterList .character-item');
            
            characters.forEach(character => {
                const name = character.getAttribute('data-name');
                if (name.includes(searchTerm)) {
                    character.style.display = 'block';
                } else {
                    character.style.display = 'none';
                }
            });
        }
        function setTheme(theme) {
            document.body.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            
            document.querySelectorAll('.theme-option').forEach(option => {
                option.classList.remove('active');
            });
            event.target.closest('.theme-option').classList.add('active');
        }
        function loadTheme() {
            const savedTheme = localStorage.getItem('theme') || 'dark';
            document.body.setAttribute('data-theme', savedTheme);
            
       
            const themeOptions = document.querySelectorAll('.theme-option');
            themeOptions.forEach((option, index) => {
                option.classList.remove('active');
                const themes = ['dark', 'light', 'high-contrast'];
                if (themes[index] === savedTheme) {
                    option.classList.add('active');
                }
            });
        }
        function login() {
            const password = document.getElementById('password').value;
            if (password === 'Admin') {
                document.getElementById('loginScreen').style.display = 'none';
                document.getElementById('mainInterface').style.display = 'block';
                init();
                updateTime();
                setInterval(updateTime, 1000);
            } else {
                alert('Access Denied');
                document.getElementById('password').value = '';
            }
        }

        document.getElementById('password')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') login();
        });

        function updateTime() {
            const now = new Date();
            const timeStr = now.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit',
                hour12: false 
            });
            const timeEl = document.querySelector('.time');
            if (timeEl) timeEl.textContent = timeStr;
            
            const galacticYear = now.getFullYear() + 214;
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const galacticDate = `${galacticYear}.${month}.${day}`;
            const galacticTimeEl = document.getElementById('galacticTime');
            if (galacticTimeEl) galacticTimeEl.textContent = `Galactic Standard Time: ${galacticDate}`;
            
            if ('getBattery' in navigator) {
                navigator.getBattery().then(battery => {
                    const batteryLevel = Math.round(battery.level * 100);
                    const batteryFill = document.querySelector('.battery-fill');
                    if (batteryFill) {
                        batteryFill.style.width = batteryLevel + '%';
                    }
                });
            }
        }

        function togglePlanet(header) {
            const card = header.closest('.card');
            card.classList.toggle('collapsed');
        }


        window.openApp = openApp;
        window.closeApp = closeApp;
        window.filterStoryposts = filterStoryposts;
        window.filterCharacters = filterCharacters;
        window.setTheme = setTheme;
        window.login = login;
        window.togglePlanet = togglePlanet;

        generateStars();
        loadTheme();