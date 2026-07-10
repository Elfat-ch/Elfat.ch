(() => {
    'use strict';

    const TRACKS = [
        {
            src: 'Music/A$AP Ferg - Shabba (Audio) ft. A$AP ROCKY.mp3',
            cover: 'Music/A$AP Ferg - Shabba (Audio) ft. A$AP ROCKY.jpg',
            title: 'A$AP Ferg - Shabba (Audio) ft. A$AP ROCKY'
        },
        {
            src: 'Music/Far East Movement - Like A G6 ft. The Cataracs, DEV.mp3',
            cover: 'Music/Far East Movement - Like A G6 ft. The Cataracs, DEV.jpg',
            title: 'Far East Movement - Like A G6 ft. The Cataracs, DEV'
        },
        {
            src: 'Music/SCH - Autobahn (Clip officiel).mp3',
            cover: 'Music/SCH - Autobahn (Clip officiel).jpg',
            title: 'SCH - Autobahn (Clip officiel)'
        },
        {
            src: 'Music/Arab Femcee Cypher.mp3',
            cover: 'Music/Arab Femcee Cypher.jpg',
            title: 'Arab Femcee Cypher'
        },
        {
            src: 'Music/%D0%92%D0%BE%D1%97%D0%BD.mp3',
            cover: 'Music/%D0%92%D0%BE%D1%97%D0%BD.jpg',
            title: 'Voin'
        }
    ];

    const AUDIO_STATE_KEY = 'elfat.audioState.v2';
    const VIEW_COUNT_KEY = 'elfat.viewCount.v2';
    const VIEW_COUNTED_KEY = 'elfat.viewCounted.v2';
    const DEFAULT_VOLUME = 50;
    const NAV_PAGES = new Set(['index.html', 'gallery.html', 'privacy.html']);
    const PAGE_TEMPLATES = {
        "index.html": {
            "title": "Elfat",
            "contentHtml": "\r\n        <section class=\"section\">\r\n            <h2 class=\"section-title\">Technical Skills</h2>\r\n            <div class=\"skills-grid\">\r\n                <div class=\"skill-item\">\r\n                    <div class=\"skill-header\">\r\n                        <div class=\"skill-icon\">\r\n                            <img src=\"Icons/html5-brands-solid-full.svg\" alt=\"HTML5\">\r\n                        </div>\r\n                        <div class=\"skill-name\">HTML</div>\r\n                    </div>\r\n                    <div class=\"skill-bar-container\">\r\n                        <div class=\"skill-bar\" style=\"width: 100%\"></div>\r\n                    </div>\r\n                    <div class=\"skill-percentage\">100%</div>\r\n                </div>\r\n\r\n                <div class=\"skill-item\">\r\n                    <div class=\"skill-header\">\r\n                        <div class=\"skill-icon\">\r\n                            <img src=\"Icons/css3-alt-brands-solid-full.svg\" alt=\"CSS3\">\r\n                        </div>\r\n                        <div class=\"skill-name\">CSS</div>\r\n                    </div>\r\n                    <div class=\"skill-bar-container\">\r\n                        <div class=\"skill-bar\" style=\"width: 85%\"></div>\r\n                    </div>\r\n                    <div class=\"skill-percentage\">85%</div>\r\n                </div>\r\n\r\n                <div class=\"skill-item\">\r\n                    <div class=\"skill-header\">\r\n                        <div class=\"skill-icon\">\r\n                            <img src=\"Icons/js-brands-solid-full.svg\" alt=\"JavaScript\">\r\n                        </div>\r\n                        <div class=\"skill-name\">JavaScript</div>\r\n                    </div>\r\n                    <div class=\"skill-bar-container\">\r\n                        <div class=\"skill-bar\" style=\"width: 80%\"></div>\r\n                    </div>\r\n                    <div class=\"skill-percentage\">80%</div>\r\n                </div>\r\n\r\n                <div class=\"skill-item\">\r\n                    <div class=\"skill-header\">\r\n                        <div class=\"skill-icon\">\r\n                            <img src=\"Icons/node-js-brands-solid-full.svg\" alt=\"Node.js\">\r\n                        </div>\r\n                        <div class=\"skill-name\">Node.js</div>\r\n                    </div>\r\n                    <div class=\"skill-bar-container\">\r\n                        <div class=\"skill-bar\" style=\"width: 80%\"></div>\r\n                    </div>\r\n                    <div class=\"skill-percentage\">80%</div>\r\n                </div>\r\n\r\n                <div class=\"skill-item\">\r\n                    <div class=\"skill-header\">\r\n                        <div class=\"skill-icon\">\r\n                            <img src=\"Icons/microsoft.svg\" alt=\"C#\">\r\n                        </div>\r\n                        <div class=\"skill-name\">C#</div>\r\n                    </div>\r\n                    <div class=\"skill-bar-container\">\r\n                        <div class=\"skill-bar\" style=\"width: 50%\"></div>\r\n                    </div>\r\n                    <div class=\"skill-percentage\">50%</div>\r\n                </div>\r\n\r\n                <div class=\"skill-item\">\r\n                    <div class=\"skill-header\">\r\n                        <div class=\"skill-icon\">\r\n                            <img src=\"Icons/database.svg\" alt=\"SQL\">\r\n                        </div>\r\n                        <div class=\"skill-name\">SQL</div>\r\n                    </div>\r\n                    <div class=\"skill-bar-container\">\r\n                        <div class=\"skill-bar\" style=\"width: 85%\"></div>\r\n                    </div>\r\n                    <div class=\"skill-percentage\">85%</div>\r\n                </div>\r\n\r\n\r\n                <div class=\"skill-item\">\r\n                    <div class=\"skill-header\">\r\n                        <div class=\"skill-icon\">\r\n                            <img src=\"Icons/flutter.svg\" alt=\"Flutter\">\r\n                        </div>\r\n                        <div class=\"skill-name\">Flutter</div>\r\n                    </div>\r\n                    <div class=\"skill-bar-container\">\r\n                        <div class=\"skill-bar\" style=\"width: 60%\"></div>\r\n                    </div>\r\n                    <div class=\"skill-percentage\">60%</div>\r\n                </div>\r\n\r\n\r\n                <div class=\"skill-item\">\r\n                    <div class=\"skill-header\">\r\n                        <div class=\"skill-icon\">\r\n                            <img src=\"Icons/lua.svg\" alt=\"Lua\">\r\n                        </div>\r\n                        <div class=\"skill-name\">Lua</div>\r\n                    </div>\r\n                    <div class=\"skill-bar-container\">\r\n                        <div class=\"skill-bar\" style=\"width: 80%\"></div>\r\n                    </div>\r\n                    <div class=\"skill-percentage\">80%</div>\r\n                </div>\r\n\r\n                <div class=\"skill-item\">\r\n                    <div class=\"skill-header\">\r\n                        <div class=\"skill-icon\">\r\n                            <img src=\"Icons/roblox-studio.svg\" alt=\"Luau\">\r\n                        </div>\r\n                        <div class=\"skill-name\">Luau</div>\r\n                    </div>\r\n                    <div class=\"skill-bar-container\">\r\n                        <div class=\"skill-bar\" style=\"width: 70%\"></div>\r\n                    </div>\r\n                    <div class=\"skill-percentage\">70%</div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <div class=\"info-grid info-grid--compact\">\n            <div class=\"info-block info-block--languages\">\n                <h3>Languages</h3>\n                <div class=\"language-list\">\n                    <div class=\"language-item\">\n                        <span class=\"language-name\">Italian</span>\n                        <span class=\"language-level\">Madrelingua</span>\n                    </div>\n                    <div class=\"language-item\">\n                        <span class=\"language-name\">German</span>\n                        <span class=\"language-level\">B2</span>\n                    </div>\n                    <div class=\"language-item\">\n                        <span class=\"language-name\">English</span>\n                        <span class=\"language-level\">Basic</span>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"info-block info-block--education\">\n                <h3>Education</h3>\n                <div class=\"education-block\">\n                    <div class=\"education-logo\">\n                        <img src=\"ifa.png\" alt=\"IPSO IFA\">\n                    </div>\n                    <div class=\"education-content\">\n                        <div class=\"education-school\">IPSO IFA</div>\n                        <div class=\"education-text\">Technical training in Switzerland</div>\n                    </div>\n                </div>\n                <div class=\"education-tags\">\n                    <span>Technical training</span>\n                    <span>Switzerland</span>\n                </div>\n            </div>\n        </div>\n\r\n        <section class=\"section section-projects\">\r\n            <h2 class=\"section-title\">Projects</h2>\r\n            <div class=\"projects-grid\">\r\n\r\n                <div class=\"project-item\">\r\n                    <div class=\"project-logo\">\r\n                        <img src=\"Projects/hydroshop.webp\" alt=\"Hydro Shop\">\r\n                    </div>\r\n                    <div class=\"project-info\">\r\n                        <div class=\"project-name\">Hydro Shop</div>\r\n                        <div class=\"project-author\">Marketing Collaborator / Owner</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"project-item\">\r\n                    <div class=\"project-logo\">\r\n                        <img src=\"Projects/Logo.webp\" alt=\"Security.Net\">\r\n                    </div>\r\n                    <div class=\"project-info\">\r\n                        <div class=\"project-name\">Security.Net</div>\r\n                        <div class=\"project-author\">Developed by _yomino</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"project-item\">\r\n                    <div class=\"project-logo\">\r\n                        <img src=\"Projects/TECHNOLOGY.webp\" alt=\"Security Technology\">\r\n                    </div>\r\n                    <div class=\"project-info\">\r\n                        <div class=\"project-name\">Security Technology</div>\r\n                        <div class=\"project-author\">Developed Code</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"project-item\">\r\n                    <div class=\"project-logo\">\r\n                        <img src=\"Projects/NexusShop.gif\" alt=\"Nexus Shop\">\r\n                    </div>\r\n                    <div class=\"project-info\">\r\n                        <div class=\"project-name\">Nexus Shop</div>\r\n                        <div class=\"project-author\">Developed by Me / Owner</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"project-item\">\r\n                    <div class=\"project-logo\">\r\n                        <img src=\"Projects/NexusMenu.webp\" alt=\"Nexus Menu\">\r\n                    </div>\r\n                    <div class=\"project-info\">\r\n                        <div class=\"project-name\">Nexus Menu</div>\r\n                        <div class=\"project-author\">Developed by Me</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"project-item\">\r\n                    <div class=\"project-logo\">\r\n                        <img src=\"Projects/noFilter.webp\" alt=\"Adriatic Studios\">\r\n                    </div>\r\n                    <div class=\"project-info\">\r\n                        <div class=\"project-name\">Adriatic Studios</div>\r\n                        <div class=\"project-author\">AntiChat Developer</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <section class=\"section section-courses\" style=\"margin-top: 30px;\">\r\n            <h2 class=\"section-title\">Courses & Certificates</h2>\r\n            <div class=\"courses-list\">\r\n                <div class=\"course-item course-item--certificate\">\r\n                    <div class=\"course-certificate-icon\">\r\n                        <img src=\"Icons/patch-check.svg\" alt=\"Certificate\">\r\n                    </div>\r\n                    <div class=\"course-info\">\r\n                        <div class=\"course-name\">Cybersecurity for Business</div>\r\n                        <div class=\"course-status\">Certificate</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"course-item\">\r\n                    <div class=\"course-info\">\r\n                        <div class=\"course-name\">Online-Masterclass Cyber Security</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"course-item course-item--certificate\">\r\n                    <div class=\"course-certificate-icon\">\r\n                        <img src=\"Icons/patch-check.svg\" alt=\"Certificate\">\r\n                    </div>\r\n                    <div class=\"course-info\">\r\n                        <div class=\"course-name\">Intro to Cloud Computing</div>\r\n                        <div class=\"course-status\">Certificate</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"course-item\">\r\n                    <div class=\"course-info\">\r\n                        <div class=\"course-name\">FLUTTER-ENTWICKLUNGSKURS</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <section class=\"section\" style=\"margin-top: 30px;\">\r\n            <h2 class=\"section-title\">Specializations</h2>\r\n            <div class=\"specializations-list\">\r\n                <div class=\"spec-item\">Database security and secure data management</div>\r\n                <div class=\"spec-item\">Data processing, analysis and efficient management</div>\r\n                <div class=\"spec-item\">GDPR compliance and client data privacy protection</div>\r\n                <div class=\"spec-item\">Configuration and management of SSL/TLS certificates on Windows Server</div>\r\n                <div class=\"spec-item\">Development and management of RESTful APIs</div>\r\n            </div>\r\n        </section>\r\n\r"
        },
        "gallery.html": {
            "title": "Elfat - Gallery",
            "contentHtml": "\r\n        <section class=\"section\">\n            <h2 class=\"section-title\">Gallery</h2>\r\n            <div class=\"gallery-grid\">\r\n                <div class=\"gallery-item\" onclick=\"openLightbox('Images/nexusbanner.gif', 'Nexus Shop', 'Developed by Me / Owner')\">\r\n                    <div class=\"gallery-image-container\">\r\n                        <img src=\"Images/nexusbanner.gif\" alt=\"Nexus Shop\" class=\"gallery-image\">\r\n                    </div>\r\n                    <div class=\"gallery-caption\">\r\n                        <div class=\"gallery-title\">Nexus Shop</div>\r\n                        <div class=\"gallery-description\">Developed by Me / Owner</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"gallery-item\" onclick=\"openLightbox('Images/Aggiungi_un_titolo.webp', 'Hydro Shop', 'Marketing Collaborator / Owner')\">\r\n                    <div class=\"gallery-image-container\">\r\n                        <img src=\"Images/Aggiungi_un_titolo.webp\" alt=\"Hydro Shop\" class=\"gallery-image\">\r\n                    </div>\r\n                    <div class=\"gallery-caption\">\r\n                        <div class=\"gallery-title\">Hydro Shop</div>\r\n                        <div class=\"gallery-description\">Marketing Collaborator / Owner</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"gallery-item\" onclick=\"openLightbox('Images/Security_Technology.webp', 'Security Technology', 'Main control panel')\">\r\n                    <div class=\"gallery-image-container\">\r\n                        <img src=\"Images/Security_Technology.webp\" alt=\"Security Technology\" class=\"gallery-image\">\r\n                    </div>\r\n                    <div class=\"gallery-caption\">\r\n                        <div class=\"gallery-title\">Security Technology</div>\r\n                        <div class=\"gallery-description\">Main control panel</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"gallery-item\" onclick=\"openLightbox('Images/NexusMenu.webp', 'Nexus Menu', 'Developed by Me')\">\r\n                    <div class=\"gallery-image-container\">\r\n                        <img src=\"Images/NexusMenu.webp\" alt=\"Nexus Menu\" class=\"gallery-image\">\r\n                    </div>\r\n                    <div class=\"gallery-caption\">\r\n                        <div class=\"gallery-title\">Nexus Menu</div>\r\n                        <div class=\"gallery-description\">Developed by Me</div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"gallery-item\" onclick=\"openLightbox('Images/Security_Development.webp', 'Security Technology', 'Developed Code')\">\r\n                    <div class=\"gallery-image-container\">\r\n                        <img src=\"Images/Security_Development.webp\" alt=\"Security Technology\" class=\"gallery-image\">\r\n                    </div>\r\n                    <div class=\"gallery-caption\">\r\n                        <div class=\"gallery-title\">Security Technology</div>\r\n                        <div class=\"gallery-description\">Developed Code</div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"gallery-item gallery-item--video\">\r\n                    <div class=\"gallery-image-container\">\r\n                        <video class=\"gallery-video\" controls preload=\"metadata\" controlslist=\"nodownload noplaybackrate\" disablepictureinpicture>\r\n                            <source src=\"Images/Voices.mp4\" type=\"video/mp4\">\r\n                            Your browser does not support the video tag.\r\n                        </video>\r\n                    </div>\r\n                    <div class=\"gallery-caption\">\r\n                        <div class=\"gallery-title\">Hydro Shop</div>\r\n                        <div class=\"gallery-description\">Hydro Shop Feedback</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"gallery-item\" onclick=\"openLightbox('Images/security_Technology.png', 'Security Technology', 'Main control panel')\">\r\n                    <div class=\"gallery-image-container\">\r\n                        <img src=\"Images/security_Technology.png\" alt=\"Security Technology\" class=\"gallery-image\">\r\n                    </div>\r\n                    <div class=\"gallery-caption\">\r\n                        <div class=\"gallery-title\">Security Technology</div>\r\n                        <div class=\"gallery-description\">Main control panel</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"gallery-item\" onclick=\"openLightbox('Images/NexusMenuPanel.webp', 'Nexus Menu', 'Nexus Menu GUI')\">\r\n                    <div class=\"gallery-image-container\">\r\n                        <img src=\"Images/NexusMenuPanel.webp\" alt=\"Nexus Menu\" class=\"gallery-image\">\r\n                    </div>\r\n                    <div class=\"gallery-caption\">\r\n                        <div class=\"gallery-title\">Nexus Menu</div>\r\n                        <div class=\"gallery-description\">Nexus Menu GUI</div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                <div class=\"gallery-item gallery-item--video\">\r\n                    <div class=\"gallery-image-container\">\r\n                        <video class=\"gallery-video\" controls preload=\"metadata\" controlslist=\"nodownload noplaybackrate\" disablepictureinpicture>\r\n                            <source src=\"Images/Hydro_Shop.mp4\" type=\"video/mp4\">\r\n                            Your browser does not support the video tag.\r\n                        </video>\r\n                    </div>\r\n                    <div class=\"gallery-caption\">\r\n                        <div class=\"gallery-title\">Hydro Shop</div>\r\n                        <div class=\"gallery-description\">Hydro Shop Feedback</div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                <div class=\"gallery-item\" onclick=\"openLightbox('Images/security.net_verification.webp', 'Security.Net', 'Security.Net Verification')\">\r\n                    <div class=\"gallery-image-container\">\r\n                        <img src=\"Images/security.net_verification.webp\" alt=\"Security.Net Verification\" class=\"gallery-image\">\r\n                    </div>\r\n                    <div class=\"gallery-caption\">\r\n                        <div class=\"gallery-title\">Security.Net</div>\r\n                        <div class=\"gallery-description\">Security.Net Verification</div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                <div class=\"gallery-item gallery-item--video\">\r\n                    <div class=\"gallery-image-container\">\r\n                        <video class=\"gallery-video\" controls preload=\"metadata\" controlslist=\"nodownload noplaybackrate\" disablepictureinpicture>\r\n                            <source src=\"Images/Nexus_Shop.mp4\" type=\"video/mp4\">\r\n                            Your browser does not support the video tag.\r\n                        </video>\r\n                    </div>\r\n                    <div class=\"gallery-caption\">\r\n                        <div class=\"gallery-title\">Nexus Shop</div>\r\n                        <div class=\"gallery-description\">Nexus Shop Feedback</div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </div>\r\n        </section>\r\n\r"
        },
        "privacy.html": {
            "title": "Elfat - Privacy",
            "contentHtml": "\r\n        <section class=\"section\">\n            <h2 class=\"section-title\">Privacy</h2>\r\n            <div class=\"info-grid\">\r\n                <div class=\"info-block\">\r\n                    <h3>Data Protection</h3>\n                    <p>This site does not collect personal data without your consent and does not share information with third parties.</p>\n                    <p>The view counter reads the initial value from views_cache.json and uses localStorage only to avoid duplicate counts in the same browser.</p>\n                </div>\r\n\r\n                <div class=\"info-block\">\r\n                    <h3>Terms and Conditions</h3>\n                    <p>Copying, modifying, or redistributing texts, images, logos, projects, or code without written permission is prohibited.</p>\n                    <p>By using this site, you accept these terms.</p>\n                </div>\r\n\r\n                <div class=\"info-block\">\r\n                    <h3>Copyright</h3>\r\n                    <p>&copy; 2026 Elfat. All rights reserved.</p>\n                </div>\r\n            </div>\r\n        </section>\r\n\r"
        }
    };
    const PAGE_CACHE = new Map(Object.entries(PAGE_TEMPLATES));
    const PAGE_LOADERS = new Map();

    let audio;
    let audioSource;
    let volumeSlider;
    let volumePercentage;
    let volumeIconImg;
    let trackCoverImg;
    let currentTrackIndex = 0;
    let previousVolume = DEFAULT_VOLUME;
    let isMuted = false;
    let saveAudioTimer = null;
    let waitingForInteraction = false;
    let shouldStartOnInteraction = true;
    let navigationPending = false;
    let activePageName = getPageName(window.location);

    if (window.self !== window.top && window.location.hash === '#preload') {
        return;
    }

    document.addEventListener('DOMContentLoaded', initSite);

    function initSite() {
        renderProfileHeader();
        renderSharedWidgets();
        setupAudio();
        setupLightbox();
        setupNavigation();
        updateActiveNav();
        cacheCurrentPage();
        preloadPages();
        initViewCounter();
        animateSkillBars();
    }

    function renderProfileHeader() {
        const content = document.querySelector('.content');
        if (!content) {
            return;
        }

        const existingHeader = content.querySelector('.profile-header');
        if (existingHeader) {
            existingHeader.remove();
        }

        content.insertAdjacentHTML('afterbegin', `
            <div class="profile-header" data-shared-profile>
                <div class="logo-container">
                    <img src="logo.gif" alt="Logo">
                </div>
                <div class="profile-info">
                    <h1>Elfat</h1>
                    <p>Developer specialized in database security and data management. Focused on protecting client data privacy to ensure legal compliance and safeguard companies from regulatory risks.</p>
                    <div class="social-links">
                        <a href="https://github.com/Elfat-Jonuzi" target="_blank" rel="noopener noreferrer" class="social-link">
                            <img src="Icons/github.svg" alt="GitHub">
                            GitHub
                        </a>
                        <a href="https://discord.com/users/1055927726994899144" target="_blank" rel="noopener noreferrer" class="social-link">
                            <img src="Icons/discord.svg" alt="Discord">
                            Discord
                        </a>
                        <a href="https://www.codecademy.com/profiles/_yomino" target="_blank" rel="noopener noreferrer" class="social-link">
                            <img src="Icons/codecademy.svg" alt="Codecademy">
                            Codecademy
                        </a>
                        <a href="https://steamcommunity.com/profiles/76561199201072780/" target="_blank" rel="noopener noreferrer" class="social-link">
                            <img src="Icons/steam.svg" alt="Steam">
                            Steam
                        </a>
                        <a href="https://psnprofiles.com/p-4xqk17" target="_blank" rel="noopener noreferrer" class="social-link">
                            <img src="Icons/playstation.svg" alt="PlayStation">
                            PlayStation
                        </a>
                    </div>
                </div>
            </div>
        `);
    }

    function renderSharedWidgets() {
        if (document.getElementById('backgroundMusic')) {
            return;
        }

        document.body.insertAdjacentHTML('beforeend', `
            <audio id="backgroundMusic" loop preload="auto" autoplay playsinline>
                <source src="${TRACKS[0].src}" type="audio/mpeg" id="audioSource">
            </audio>

            <div class="audio-control">
                <div class="track-control">
                    <div class="audio-icon" id="prevTrack" role="button" tabindex="0" aria-label="Previous track">
                        <img src="Icons/caret-left-fill.svg" alt="">
                    </div>
                    <div class="audio-cover">
                        <img src="${TRACKS[0].cover}" alt="${TRACKS[0].title}" id="trackCoverImg">
                    </div>
                    <div class="audio-icon" id="nextTrack" role="button" tabindex="0" aria-label="Next track">
                        <img src="Icons/caret-right-fill.svg" alt="">
                    </div>
                </div>
                <div class="audio-icon" id="volumeIcon" role="button" tabindex="0" aria-label="Toggle mute">
                    <img src="Icons/volume-up-fill.svg" alt="" id="volumeIconImg">
                </div>
                <input type="range" min="0" max="100" value="${DEFAULT_VOLUME}" class="volume-slider" id="volumeSlider" aria-label="Volume">
                <span class="volume-percentage" id="volumePercentage">${DEFAULT_VOLUME}%</span>
            </div>

            <nav class="quick-nav" aria-label="Quick navigation">
                <div class="quick-nav-links">
                    <a href="index.html" class="quick-nav-link">Home</a>
                    <a href="gallery.html" class="quick-nav-link">Gallery</a>
                    <a href="privacy.html" class="quick-nav-link">Privacy</a>
                </div>
            </nav>

            <div class="view-counter">
                <div class="view-counter-icon">
                    <img src="Icons/eye.svg" alt="Views">
                </div>
                <div class="view-counter-text">
                    Views: <span class="view-counter-number" id="viewCount">0</span>
                </div>
            </div>

            <div class="lightbox" id="lightbox">
                <div class="lightbox-content">
                    <button class="lightbox-close" type="button" aria-label="Close lightbox">&times;</button>
                    <img src="" alt="" class="lightbox-image" id="lightboxImage">
                    <div class="lightbox-info">
                        <div class="lightbox-title" id="lightboxTitle"></div>
                        <div class="lightbox-description" id="lightboxDescription"></div>
                    </div>
                </div>
            </div>
        `);
    }

    function setupAudio() {
        audio = document.getElementById('backgroundMusic');
        audioSource = document.getElementById('audioSource');
        volumeSlider = document.getElementById('volumeSlider');
        volumePercentage = document.getElementById('volumePercentage');
        volumeIconImg = document.getElementById('volumeIconImg');
        trackCoverImg = document.getElementById('trackCoverImg');

        if (!audio || !audioSource || !volumeSlider || audio.dataset.ready === 'true') {
            return;
        }

        audio.dataset.ready = 'true';

        const savedState = readStoredJson(AUDIO_STATE_KEY);
        currentTrackIndex = normalizeTrackIndex(savedState?.trackIndex ?? 0);
        previousVolume = clampVolume(savedState?.previousVolume ?? savedState?.volume ?? DEFAULT_VOLUME);
        isMuted = false;

        const restoredVolume = clampVolume(savedState?.volume || previousVolume || DEFAULT_VOLUME);
        applyVolume(restoredVolume, { remember: false, persist: false });
        setTrack(currentTrackIndex, {
            currentTime: Number(savedState?.currentTime) || 0,
            shouldPlay: false,
            persist: false
        });

        shouldStartOnInteraction = true;
        waitingForInteraction = true;
        tryPlayAudio({ allowMutedAutoplay: true });

        bindIconButton(document.getElementById('prevTrack'), previousTrack);
        bindIconButton(document.getElementById('nextTrack'), nextTrack);
        bindIconButton(document.getElementById('volumeIcon'), toggleMute);

        volumeSlider.addEventListener('input', () => {
            const volume = clampVolume(volumeSlider.value);
            isMuted = volume === 0;
            if (volume > 0) {
                previousVolume = volume;
            }
            applyVolume(volume);
        });

        audio.addEventListener('timeupdate', scheduleAudioStateSave);
        audio.addEventListener('play', saveAudioState);
        audio.addEventListener('pause', saveAudioState);
        audio.addEventListener('seeked', saveAudioState);
        audio.addEventListener('volumechange', scheduleAudioStateSave);
        document.addEventListener('click', startAudioAfterInteraction);
        document.addEventListener('keydown', startAudioAfterInteraction);
        window.addEventListener('pagehide', saveAudioState);
        window.addEventListener('beforeunload', saveAudioState);
    }

    function bindIconButton(element, handler) {
        if (!element) {
            return;
        }

        element.addEventListener('click', handler);
        element.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                handler();
            }
        });
    }

    function startAudioAfterInteraction() {
        if (!audio || !audio.paused) {
            return;
        }

        if (shouldStartOnInteraction || waitingForInteraction) {
            tryPlayAudio();
        }
    }

    function tryPlayAudio(options = {}) {
        if (!audio) {
            return;
        }

        const { allowMutedAutoplay = false } = options;
        const shouldUseMutedStart = allowMutedAutoplay && audio.paused && !isMuted;
        const previousMutedState = audio.muted;

        if (shouldUseMutedStart) {
            audio.muted = true;
        }

        audio.play()
            .then(() => {
                if (shouldUseMutedStart) {
                    window.setTimeout(() => {
                        if (!isMuted) {
                            audio.muted = false;
                            applyVolume(volumeSlider?.value || previousVolume || DEFAULT_VOLUME, {
                                remember: false,
                                persist: false
                            });
                        }
                    }, 80);
                }
                shouldStartOnInteraction = false;
                waitingForInteraction = false;
                saveAudioState();
            })
            .catch(() => {
                if (shouldUseMutedStart) {
                    audio.muted = previousMutedState;
                }
                waitingForInteraction = true;
            });
    }

    function setTrack(index, options = {}) {
        if (!audio || !audioSource) {
            return;
        }

        const { currentTime = 0, shouldPlay = true, persist = true } = options;
        currentTrackIndex = normalizeTrackIndex(index);
        const track = TRACKS[currentTrackIndex];

        if (audioSource.getAttribute('src') !== track.src) {
            audioSource.src = track.src;
            audio.load();
        }

        if (trackCoverImg) {
            trackCoverImg.src = track.cover;
            trackCoverImg.alt = track.title;
        }

        setAudioTime(currentTime);

        if (shouldPlay) {
            tryPlayAudio();
        }

        if (persist) {
            saveAudioState();
        }
    }

    function setAudioTime(seconds) {
        const time = Number(seconds);
        if (!audio || !Number.isFinite(time) || time <= 0) {
            return;
        }

        const applyTime = () => {
            try {
                const duration = Number.isFinite(audio.duration) ? audio.duration : time;
                audio.currentTime = Math.min(time, Math.max(duration - 0.25, 0));
            } catch (error) {
                // Some browsers delay seeking until metadata is available.
            }
        };

        if (audio.readyState >= 1) {
            applyTime();
        } else {
            audio.addEventListener('loadedmetadata', applyTime, { once: true });
        }
    }

    function nextTrack() {
        setTrack(currentTrackIndex + 1, { currentTime: 0, shouldPlay: true });
    }

    function previousTrack() {
        setTrack(currentTrackIndex - 1, { currentTime: 0, shouldPlay: true });
    }

    function toggleMute() {
        if (!audio) {
            return;
        }

        if (isMuted || audio.volume === 0) {
            const restoredVolume = previousVolume > 0 ? previousVolume : DEFAULT_VOLUME;
            isMuted = false;
            applyVolume(restoredVolume, { remember: true });
            return;
        }

        previousVolume = clampVolume(volumeSlider?.value || DEFAULT_VOLUME);
        isMuted = true;
        applyVolume(0, { remember: false });
    }

    function applyVolume(value, options = {}) {
        if (!audio || !volumeSlider || !volumePercentage) {
            return;
        }

        const { remember = true, persist = true } = options;
        const volume = clampVolume(value);
        audio.muted = false;
        audio.volume = volume / 100;
        volumeSlider.value = String(volume);
        volumePercentage.textContent = `${volume}%`;
        updateVolumeIcon(volume);

        if (remember && volume > 0) {
            previousVolume = volume;
        }

        if (persist) {
            saveAudioState();
        }
    }

    function updateVolumeIcon(volume) {
        if (!volumeIconImg) {
            return;
        }

        if (volume === 0) {
            volumeIconImg.src = 'Icons/volume-mute-fill.svg';
        } else if (volume < 50) {
            volumeIconImg.src = 'Icons/volume-down-fill.svg';
        } else {
            volumeIconImg.src = 'Icons/volume-up-fill.svg';
        }
    }

    function saveAudioState() {
        if (!audio) {
            return;
        }

        writeStoredJson(AUDIO_STATE_KEY, {
            trackIndex: currentTrackIndex,
            currentTime: audio.currentTime || 0,
            volume: clampVolume(volumeSlider?.value ?? DEFAULT_VOLUME),
            previousVolume,
            isMuted,
            wasPlaying: !audio.paused && !audio.ended,
            savedAt: Date.now()
        });
    }

    function scheduleAudioStateSave() {
        if (saveAudioTimer) {
            return;
        }

        saveAudioTimer = window.setTimeout(() => {
            saveAudioTimer = null;
            saveAudioState();
        }, 500);
    }

    async function initViewCounter() {
        const viewElement = document.getElementById('viewCount');
        if (!viewElement) {
            return;
        }

        const jsonViews = await readViewsFromJson();
        const storedViews = parseStoredNumber(VIEW_COUNT_KEY);
        let views = Math.max(jsonViews, storedViews);

        if (!storageGet(VIEW_COUNTED_KEY)) {
            views += 1;
            storageSet(VIEW_COUNTED_KEY, String(Date.now()));
        }

        storageSet(VIEW_COUNT_KEY, String(views));
        animateCount(views);
    }

    async function readViewsFromJson() {
        try {
            const response = await fetch('views_cache.json', { cache: 'no-store' });
            if (!response.ok) {
                throw new Error('views_cache.json request failed');
            }

            const data = await response.json();
            const views = Number(data?.views);
            return Number.isFinite(views) ? views : 0;
        } catch (error) {
            return 0;
        }
    }

    function animateCount(targetViews) {
        const viewElement = document.getElementById('viewCount');
        if (!viewElement) {
            return;
        }

        const target = Math.max(0, Math.floor(Number(targetViews) || 0));
        const start = Math.max(0, Math.floor(Number(viewElement.textContent) || 0));

        if (target === start) {
            viewElement.textContent = String(target);
            return;
        }

        const duration = 800;
        const startTime = performance.now();

        function update(now) {
            const progress = Math.min((now - startTime) / duration, 1);
            const value = Math.floor(start + (target - start) * progress);
            viewElement.textContent = String(value);

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                viewElement.textContent = String(target);
            }
        }

        requestAnimationFrame(update);
    }

    function setupLightbox() {
        const lightbox = document.getElementById('lightbox');
        const lightboxContent = lightbox?.querySelector('.lightbox-content');
        const closeButton = lightbox?.querySelector('.lightbox-close');

        if (!lightbox || lightbox.dataset.ready === 'true') {
            return;
        }

        lightbox.dataset.ready = 'true';
        lightbox.addEventListener('click', closeLightbox);
        lightboxContent?.addEventListener('click', (event) => event.stopPropagation());
        closeButton?.addEventListener('click', closeLightbox);

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeLightbox();
            }
        });
    }

    function openLightbox(imageSrc, title, description) {
        const lightbox = document.getElementById('lightbox');
        const image = document.getElementById('lightboxImage');
        const titleElement = document.getElementById('lightboxTitle');
        const descriptionElement = document.getElementById('lightboxDescription');

        if (!lightbox || !image || !titleElement || !descriptionElement) {
            return;
        }

        image.src = imageSrc;
        image.alt = title || '';
        titleElement.textContent = title || '';
        descriptionElement.textContent = description || '';
        lightbox.classList.add('active');
    }

    function closeLightbox() {
        document.getElementById('lightbox')?.classList.remove('active');
    }

    function setupNavigation() {
        if (document.body.dataset.navigationReady === 'true') {
            return;
        }

        document.body.dataset.navigationReady = 'true';
        document.addEventListener('click', handleNavigationClick);
        window.addEventListener('popstate', (event) => {
            loadPage(event.state?.pageName || getRoutePageName(window.location), false);
        });
    }

    function cacheCurrentPage() {
        const content = document.querySelector('.content');
        if (!content) {
            return;
        }

        PAGE_CACHE.set(getPageName(window.location), {
            title: document.title,
            contentHtml: content.innerHTML
        });
    }

    function preloadPages() {
        for (const pageName of NAV_PAGES) {
            if (pageName !== getPageName(window.location)) {
                getPageData(pageName).catch(() => {});
            }
        }
    }

    function handleNavigationClick(event) {
        const link = event.target.closest('a.quick-nav-link');
        if (!link || event.defaultPrevented || event.button !== 0) {
            return;
        }

        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
            return;
        }

        const url = new URL(link.getAttribute('href'), window.location.href);
        if (!isInternalPage(url)) {
            return;
        }

        event.preventDefault();
        loadPage(url.href, true);
    }

    async function loadPage(href, pushState) {
        if (navigationPending) {
            return;
        }

        navigationPending = true;
        const targetUrl = new URL(href, window.location.href);
        const targetPageName = getRoutePageName(targetUrl);

        try {
            const pageData = await getPageData(targetPageName);
            const currentContent = document.querySelector('.content');

            if (!currentContent) {
                throw new Error('Current page content not found');
            }

            stopCurrentContentMedia();
            currentContent.innerHTML = pageData.contentHtml;
            document.title = pageData.title || document.title;

            if (pushState) {
                updateBrowserHistory(targetUrl, targetPageName);
            }

            activePageName = targetPageName;
            renderProfileHeader();
            updateActiveNav();
            closeLightbox();
            animateSkillBars();
            window.scrollTo(0, 0);
        } catch (error) {
            window.location.href = href;
        } finally {
            navigationPending = false;
        }
    }

    function updateBrowserHistory(url, pageName) {
        try {
            if (window.location.protocol === 'file:') {
                history.pushState({ pageName }, '', `#${pageName}`);
                return;
            }

            if (url.href !== window.location.href) {
                history.pushState({ pageName }, '', url.href);
            }
        } catch (error) {
            // The content has already changed; do not reload and interrupt audio.
        }
    }

    function getPageData(href) {
        const url = new URL(href, window.location.href);
        const pageName = getRoutePageName(url);

        if (PAGE_CACHE.has(pageName)) {
            return Promise.resolve(PAGE_CACHE.get(pageName));
        }

        if (PAGE_LOADERS.has(pageName)) {
            return PAGE_LOADERS.get(pageName);
        }

        const loader = fetchPageData(url)
            .catch(() => loadPageDataWithFrame(url))
            .then((pageData) => {
                PAGE_CACHE.set(pageName, pageData);
                return pageData;
            })
            .finally(() => {
                PAGE_LOADERS.delete(pageName);
            });

        PAGE_LOADERS.set(pageName, loader);
        return loader;
    }

    async function fetchPageData(url) {
        const response = await fetch(url.href);
        if (!response.ok) {
            throw new Error(`Page request failed: ${response.status}`);
        }

        return parsePageHtml(await response.text());
    }

    function loadPageDataWithFrame(url) {
        return new Promise((resolve, reject) => {
            const frame = document.createElement('iframe');
            const timeout = window.setTimeout(() => {
                cleanup();
                reject(new Error('Page frame request timed out'));
            }, 8000);

            function cleanup() {
                window.clearTimeout(timeout);
                frame.remove();
            }

            frame.hidden = true;
            frame.tabIndex = -1;
            frame.setAttribute('aria-hidden', 'true');

            frame.addEventListener('load', () => {
                try {
                    const frameDocument = frame.contentDocument;
                    const content = frameDocument?.querySelector('.content');
                    if (!frameDocument || !content) {
                        throw new Error('Frame page content not found');
                    }

                    resolve({
                        title: frameDocument.title,
                        contentHtml: content.innerHTML
                    });
                } catch (error) {
                    reject(error);
                } finally {
                    cleanup();
                }
            }, { once: true });

            frame.addEventListener('error', () => {
                cleanup();
                reject(new Error('Page frame request failed'));
            }, { once: true });

            const frameUrl = new URL(url.href);
            frameUrl.hash = 'preload';
            frame.src = frameUrl.href;
            document.body.appendChild(frame);
        });
    }

    function parsePageHtml(html) {
        const nextDocument = new DOMParser().parseFromString(html, 'text/html');
        const nextContent = nextDocument.querySelector('.content');

        if (!nextContent) {
            throw new Error('Page content not found');
        }

        return {
            title: nextDocument.title,
            contentHtml: nextContent.innerHTML
        };
    }

    function stopCurrentContentMedia() {
        document.querySelectorAll('.content video, .content audio').forEach((media) => {
            media.pause();
            media.removeAttribute('src');
            media.load();
        });
    }

    function isInternalPage(url) {
        const pageName = getPageName(url);
        const sameHttpOrigin = url.origin === window.location.origin;
        const sameFileContext = url.protocol === 'file:' && window.location.protocol === 'file:';
        return (sameHttpOrigin || sameFileContext) && NAV_PAGES.has(pageName);
    }

    function updateActiveNav() {
        const currentPage = activePageName;
        document.querySelectorAll('.quick-nav-link').forEach((link) => {
            const linkPage = getPageName(new URL(link.getAttribute('href'), window.location.href));
            if (linkPage === currentPage) {
                link.setAttribute('aria-current', 'page');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    }

    function animateSkillBars() {
        document.querySelectorAll('.skill-bar').forEach((bar) => {
            const width = bar.style.width;
            if (!width) {
                return;
            }

            bar.style.width = '0';
            window.setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }

    function getPageName(url) {
        const pathname = typeof url === 'string' ? new URL(url, window.location.href).pathname : url.pathname;
        return pathname.split('/').pop() || 'index.html';
    }

    function getRoutePageName(url) {
        const routeUrl = typeof url === 'string' ? new URL(url, window.location.href) : url;
        const hashPage = decodeURIComponent(routeUrl.hash.replace(/^#/, ''));
        return NAV_PAGES.has(hashPage) ? hashPage : getPageName(routeUrl);
    }

    function normalizeTrackIndex(index) {
        return (Number(index) % TRACKS.length + TRACKS.length) % TRACKS.length;
    }

    function clampVolume(value) {
        const volume = Math.round(Number(value));
        if (!Number.isFinite(volume)) {
            return DEFAULT_VOLUME;
        }

        return Math.min(100, Math.max(0, volume));
    }

    function parseStoredNumber(key) {
        const value = Number(storageGet(key));
        return Number.isFinite(value) ? value : 0;
    }

    function readStoredJson(key) {
        try {
            const value = storageGet(key);
            return value ? JSON.parse(value) : null;
        } catch (error) {
            return null;
        }
    }

    function writeStoredJson(key, value) {
        storageSet(key, JSON.stringify(value));
    }

    function storageGet(key) {
        try {
            return window.localStorage.getItem(key);
        } catch (error) {
            return null;
        }
    }

    function storageSet(key, value) {
        try {
            window.localStorage.setItem(key, value);
        } catch (error) {
            // localStorage can be unavailable in private or restricted contexts.
        }
    }

    window.nextTrack = nextTrack;
    window.previousTrack = previousTrack;
    window.toggleMute = toggleMute;
    window.openLightbox = openLightbox;
    window.closeLightbox = closeLightbox;
})();
