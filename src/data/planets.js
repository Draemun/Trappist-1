export const planetsData = [
    {
        name: "Novertus | TRAPPIST-1a",
        subtitle: "The Red Dwarf",
        description: "The central star of the TRAPPIST-1 system, providing energy to all seven orbiting worlds."
    },
    {
        name: "Vyrion | TRAPPIST-1b",
        subtitle: "The Irradiated Planet",
        quote: "A scorched desert world harnessed for energy, not life.",
        overview: {
            location: "TRAPPIST-1b",
            type: "Desert World",
            features: "Scorching, barren landscape with violent solar storms",
            climate: "Eternal day on the sun-facing side, eternal night on the opposite side; deadly surface temperatures and constant radiation storms",
            atmosphere: "Non-existent due to solar radiation storms"
        },
        geography: {
            daySide: "Scorched wasteland with vast networks of solar panels",
            nightSide: "Frozen plains devoid of activity",
            landmarks: "Solar Panel Arrays"
        },
        flora: "N/A",
        fauna: "N/A",
        civilization: {
            population: "None permanently; visited only by maintenance crews",
            groups: "Engineers and technicians from Vexis-1",
            tech: "Highly advanced energy harnessing systems and protective gear for maintenance crews",
            society: "No societal structures exist on the planet itself; operations are overseen by the Siderus Corporation from Vexis-1"
        },
        economy: {
            resources: "Solar energy harvested via massive panel arrays on the day side",
            activity: "Energy production and distribution to the colonies via freighter ships"
        },
        threats: {
            environmental: ["Solar radiation storms", "Extreme heat on the day side and freezing cold on the night side", "Lack of atmosphere making exposure lethal"],
            other: ["Technical malfunctions during maintenance could be catastrophic"]
        },
        ship: {
            name: "Vexis-1",
            purpose: "Orbiting facility to house engineers and workers managing Vyrion's solar operations",
            design: ["Compact, functional design to support a small workforce", "Equipped with a sizeable docking bay to manage constant freighter traffic"],
            control: "Operated by the Siderus Corporation",
            living: ["Basic and utilitarian; sufficient for extended stays", "Minimal crime due to the work-focused environment"],
            link: "https://discord.com/channels/1317616738719895602/1326716720592978002"
        }
    },
    {
        name: "Calyra-7 | TRAPPIST-1c",
        quote: "A blazing furnace of radioactive wealth beneath a barren surface.",
        overview: {
            location: "TRAPPIST-1c",
            type: "Volcanic, Radioactive World",
            features: "Intense geological activity, extreme heat, and high levels of radioactivity",
            climate: "Perpetual heat; temperatures average 60°C on 'cold' days",
            atmosphere: "Thin and inhospitable"
        },
        geography: {
            surface: "Mostly barren, dotted with small craters; uninhabitable due to extreme heat and lack of atmosphere",
            subterraneanColonies: "Networked underground settlements and mining facilities shielded from the planet's heat and radiation",
            landmarks: "Dangerous regions where debris from the Vexis-2 explosion frequently falls"
        },
        flora: "N/A",
        fauna: "N/A",
        civilization: {
            population: "Rotating workforce of miners and engineers; no permanent residents",
            groups: "Workers under the management of Siderus Corporation",
            tech: "Highly advanced subterranean life-support and mining technology",
            society: "Workers live on a strict 2 months on, 1 month off rotation due to hazardous conditions. The operations are profit-driven and controlled by Siderus Corp, with little regard for worker well-being"
        },
        economy: {
            resources: "Vast deposits of radioactive materials essential for powering ships like the Vexis units",
            activity: "Mining operations dominate the planet's economy. Heavy reliance on freighter traffic to transport materials off-planet"
        },
        threats: {
            environmental: ["Extreme surface heat, high radiation levels, geological instability from volcanic activity"],
            other: ["Shrapnel Rain: Deadly debris falling from the Vexis-2 explosion, traveling at lethal speeds", "Worker Safety: Frequent accidents and corporate negligence create additional dangers"]
        },
        ship: {
            name: "Vexis-2",
            purpose: "Initially designed to orbit TRAPPIST-1c and support mining operations",
            design: ["Smallest of the Vexis fleet, built for efficiency and speed over luxury", "Focused on functionality for working-class crews"],
            disaster: "Early in Calyria-7's settlement, the Vexis-2 exploded due to an engine reactor malfunction, showering the planet with debris",
            impact: "The settlers transitioned to permanent underground colonies, relying on external supply chains to rebuild",
            link: "https://discord.com/channels/1317616738719895602/1327126466780991550"
        }
    },
    {
        name: "Draethis | TRAPPIST-1d",
        quote: "A vast ocean world where life thrives in the depths.",
        overview: {
            location: "TRAPPIST-1d",
            type: "Tidally locked water world",
            features: "Endless ocean with no significant continents, only scattered archipelagos. Habitable Twilight Belt between the day side and the night side. Deep abyssal trenches, hydrothermal vent zones, and bioluminescent reefs",
            climate: "Temperate along the Twilight Belt, with violent storms near the day side and subzero temperatures on the night side",
            atmosphere: "Oxygen-nitrogen-rich, breathable air produced by marine photosynthetic organisms. Skies display a pale greenish-blue glow due to light scattering"
        },
        geography: {
            daySide: "Extreme heat and constant sunlight create chaotic, stormy seas. Massive heat-driven cyclones and superheated water columns are common",
            nightSide: "A frigid, dark expanse where ice forms on the ocean's surface in shallower regions. Home to abyssal predators and ecosystems adapted to complete darkness",
            landmarks: "Twilight Belt: The narrow, habitable zone with calmer waters and alien kelp jungles. Lumiflor Reefs: Bioluminescent coral forests pulsing with rhythmic light patterns. The Abyss: Deep ocean trenches where colossal, ancient creatures reside. Thermal Vents: Cradle unique ecosystems teeming with life adapted to intense heat"
        },
        flora: "Aerokelp: Towering kelp forests producing a gaseous compound that enriches the atmosphere. Prismal Chrysoids: Floating crystalline organisms that refract light but secrete paralyzing toxins",
        fauna: "Aureoliths: Massive, bioluminescent leviathans feeding on plankton clouds. Kaelthorns: Kraken-like apex predators with armored tentacles. Ecliptics: Whale-sized creatures that create vortexes, sinking nearby vessels. Gargantuan Leviathans: Rare, massive sea serpents",
        civilization: {
            population: "Approximately 500,000 colonists in floating and submerged habitats",
            groups: "Human colonists, divided into research factions, corporate settlers, and independent ocean harvesters",
            tech: "Advanced: Floating cities, underwater bases, and oceanic resource extraction technologies",
            society: "Highly stratified, with wealthy corporate elites controlling advanced habitats in the Twilight Belt, while laborers and independent settlers endure harsher conditions at the fringes"
        },
        economy: {
            resources: "Bioluminescent algae and plankton for energy and medical applications. Rare minerals found in hydrothermal vent zones. Unique toxins and organic compounds from native flora and fauna",
            activity: "Bioengineering and pharmaceutical research. Deep-sea mining and rare resource extraction. Export of alien bioluminescent compounds"
        },
        threats: {
            environmental: ["Massive storms near the day side and uncharted ice flows on the night side", "Abyssal pressure and unpredictable seaquakes"],
            other: ["Hostile megafauna"]
        },
        ship: {
            name: "Vexis-3",
            purpose: "Supports colonists and research on Draethis while acting as a central trade and manufacturing hub",
            design: ["Multi-tiered, freighter-class vessel with Earth-like gravity simulation and docking bays for smaller crafts"],
            control: "TBA",
            living: ["Stratified: Wealthier residents live comfortably in the Upper Tier, while workers endure overcrowded, polluted conditions in the Lower Tier"],
            link: "https://discord.com/channels/1317616738719895602/1326561320291536986"
        }
    },
    {
        name: "Zephara-9 | TRAPPIST-1e",
        quote: "Where the peaks touch the stars, and the valleys bleed rebellion.",
        overview: {
            location: "TRAPPIST-1e",
            type: "Mountainous world, with rugged terrain",
            features: "Mountains that stretch high into the sky, and deep winding valleys. Rocky planet, with little fertile land. Natural caves that appear to almost 'grow' crystals",
            climate: "Low, but habitable temperatures in the valleys; freezing temperatures in the high peaks of the planet",
            atmosphere: "Oxygen-Argon rich. Skies are a light purple"
        },
        geography: {
            daySide: "Temperate to slightly chilly temperatures; most of the rebellions set up camp on this side of the planet",
            nightSide: "Cold to sub-zero temperatures. Sparsely populated, with small outposts and cave dwellers",
            landmarks: "Fools Heights: The highest peaks on Zephara where 'The Heart of Fools' was defeated by 'The Gilded Rebellion' while fighting for control over Vexis-4. Amdora Valley: The lowest point on the planet. It has some of the only fertile land, along with a thriving animal population. Currently controlled by 'Amdora's Blessing'"
        },
        flora: "Medismoss: Moss that grows all over Zephara; known for its medicinal properties. Dayblooms: A term used to refer to all the plants grown on the day side of the planet; made up mostly of flowers and small bushes. Nightblossoms: A term used to refer to all plants grown on the night side of the planet",
        fauna: "Purple Gliders: Small, purple and white colored birds. Striped Hunter: Large birds of prey; known for their extra unique plumage and deadly hunting abilities. Scalers: 4 legged creatures with thick fur, and small horns. Known for their ability to quickly and efficiently travel though the rough terrain",
        civilization: {
            population: "Estimates range from 2-5 million",
            groups: "'The Heart of Fools'",
            tech: "Advanced: Vexis-4 specializes in scientific breakthroughs. They are also the second most advanced in weaponry, due to the war",
            society: "Highly turbulent, due to the 'Mountain Wars'. Many rebellion groups are vying for power over not just Zephara, but also the Vexis-4 unit"
        },
        economy: {
            resources: "Many common minerals, used to mass produce weapons",
            activity: "Due to the war, the economy has been stagnant. Most live with the bare minimum, while the few on the Vexis-4 ship still unaffected, mostly trade in information / scientific research"
        },
        threats: {
            environmental: ["The high, rocky peaks can be unstable to climb", "The 'air' on the atmosphere can be difficult to breathe for those who are not used to it"],
            other: ["Constant warfare between different rebellion groups"]
        },
        ship: {
            name: "Vexis-4",
            purpose: "The scientific hub of the system, keeping important research going",
            design: ["A vessel dedicated to scientific innovation. Giant labs are scattered throughout the ships, while living quarters are squeezed into the areas that could not be used as a lab or testing area"],
            control: "'The Gilded Rebellion'",
            living: ["Comfortable: Medium to large sized quarters for all members, with most of the ship's area dedicated to research labs"],
            link: "https://discord.com/channels/1317616738719895602/1327525707034918922"
        }
    },
    {
        name: "Ilarion | TRAPPIST-1f",
        quote: "A fractured world of extremes, where the wealthy soar above and the desperate toil below.",
        overview: {
            location: "TRAPPIST-1f",
            type: "Fragmented terrestrial world with a mix of floating islands and deep impact craters",
            features: "Magnetically suspended flying islands, tethered by chains or energy fields. Vast craters from ancient asteroid impacts, home to mining colonies. Rare superconductive materials essential for interplanetary trade and starship technology",
            climate: "Cold temperatures dominate, with frost winds during the day and plummeting cold at night. Auroras light the skies due to the planet's strong magnetic anomalies",
            atmosphere: "Thin and cold, breathable only for short durations without oxygen masks or pressurized environments"
        },
        geography: {
            flyingIslands: "Massive floating landmasses sustained by electromagnetic anomalies and anti-gravity systems. Host luxurious palaces, research facilities, and arcologies for the elite",
            craters: "Gigantic impact scars filled with mining colonies and geothermal farms. Home to overcrowded, freezing cities and hazardous mines",
            landmarks: "Aurora Nexus: A region near the magnetic poles where the auroras are most vibrant, a sacred site for crater dwellers. Chainspire Peaks: Gigantic chains tethering the largest islands to the surface below, stretching for miles"
        },
        flora: "Cryoveins: Hardy, frost-resistant plants growing in crater geothermal vents, used for medicine and sustenance. Skystalks: Towering plants growing only on flying islands, their sap used in luxury products",
        fauna: "Aethercats: Flying big cats-like predators with luminous manes, revered as symbols of power by island elites. Skywing Raptors: Giant predatory birds trained for hunting or transport. Glacierlurks: Massive, subterranean creatures that burrow through crater walls, feared by miners. Ilarion Goldfinch: Small yellow birds, with black wings",
        civilization: {
            population: "Estimated at 8 million, split between floating islands and crater dwellers",
            groups: "Skyward Elite: The wealthy ruling class living on floating islands. Crater Guilds: Collectives of miners and laborers who control resource extraction",
            tech: "Advanced, but highly uneven distribution. Anti-gravity systems and luxury technologies dominate island life, while craters rely on mining suits and geothermal tech for survival",
            society: "A deeply stratified society, with a literal vertical divide: Island Life: Extravagant villas, private gardens, and indulgent leisure activities like sky races and grand galas. Crater Life: Grueling mining shifts, overcrowded cities, and subsistence on geothermal-powered hydroponics"
        },
        economy: {
            resources: "Rare superconductive minerals crucial for interstellar technology. Geothermal energy harnessed from deep crater vents. Exotic flora and fauna products from the flying islands",
            activity: "Mining, refining, and export of superconductive metals. Luxury goods and rare animal products traded by island elites. Geothermal energy production for local and interstellar use"
        },
        threats: {
            environmental: ["Extreme cold and frostbitten winds in the craters", "Sudden electromagnetic storms disrupting island stability", "Collapsing crater walls and unstable mines"],
            other: ["Predatory wildlife", "Growing tensions between the islands and the craters"]
        },
        ship: {
            name: "Vexis-5",
            purpose: "An agricultural and logistics hub, specialized in food production and distribution for the TRAPPIST-1 network",
            design: ["A massive modular station with advanced hydroponic farms and docking bays for large transport ships. Its outer ring contains food processing facilities, while the inner core is dedicated to logistics and crew operations"],
            control: "TBA",
            living: ["Comfortable and efficient for crew and workers, featuring small quarters but access to communal recreation and hydroponic gardens"],
            link: "https://discord.com/channels/1317616738719895602/1326896132722528318"
        }
    },
    {
        name: "Nyxar | TRAPPIST-1g",
        quote: "Where souls freeze and time stands still.",
        overview: {
            location: "TRAPPIST-1g",
            type: "Prison Planet",
            features: ["Jagged glaciers, icy plains, and deep crevasses", "Fortress-like prison complexes scattered across the surface", "Subterranean mining networks for extracting frozen minerals", "Toxic snowstorms laden with ammonia and carbon dioxide"],
            climate: "Perpetual twilight with freezing temperatures that can drop low enough to freeze an unprotected human solid in minutes",
            atmosphere: "Thin and toxic, composed of ammonia, carbon dioxide, and trace gases. Breathable air exists only in pressurized facilities"
        },
        geography: {
            daySide: "Perpetual dim twilight, with the faint red light of the TRAPPIST-1 star illuminating the icy terrain",
            nightSide: "Nearly indistinguishable from the day side due to the lack of significant sunlight. Bitterly cold with blinding snowstorms",
            landmarks: ["Fortress Complexes: Massive, heavily fortified prisons scattered across the surface", "Mining Zones: Subterranean tunnels and caverns where prisoners extract valuable frozen minerals", "Glacial Crevasses: Natural barriers and death traps dotting the terrain"]
        },
        flora: "N/A",
        fauna: "Cryo-Worms: Subterranean creatures adapted to extreme cold, feeding on minerals. Frozen Predators: Rare, bio-engineered creatures released as deterrents for escape attempts",
        civilization: {
            population: "Approximately 15 million prisoners and 100,000 guards and staff",
            groups: "Prisoners: A mix of criminals, political dissidents, and others deemed inconvenient. Guards: Members of the Justice Corps, tasked with maintaining order and controlling the prison system",
            tech: "Advanced, primarily focused on security, surveillance, and survival technology",
            society: "Prisoners: Harsh social hierarchies based on strength, alliances, and resource control. Rebellion is constant but futile. Guards: Live in relative luxury, indulging in comforts denied to prisoners. Often ruthless and corrupt"
        },
        economy: {
            resources: "Rare frozen minerals crucial for advanced energy systems",
            activity: "Mining operations staffed by prisoners, funding both the prison and broader intergalactic trade"
        },
        threats: {
            environmental: ["Toxic snowstorms and freezing temperatures", "Icy terrain riddled with crevasses and unstable glaciers"],
            other: ["AI-controlled energy fields and surveillance drones", "Brutal guards and internal prisoner violence", "Frozen Predators"]
        },
        ship: {
            name: "Vexis-6",
            purpose: "Serves as a judicial operations hub and transport vessel for prisoners across the TRAPPIST-1 system",
            design: ["Heavily fortified with advanced security systems, detention blocks, and judicial chambers. Equipped for interplanetary travel and long-term isolation"],
            control: "Operated by the Justice Corps, (a galactic authority tasked with law enforcement and penal management) and Prison Unit",
            living: ["Guards: Comfortable, with private quarters and recreational facilities", "Prisoners: Spartan, with cramped cells and minimal resources"],
            link: "https://discord.com/channels/1317616738719895602/1326896278415867976"
        }
    },
    {
        name: "Solara Prime | TRAPPIST-1h",
        quote: "Where cold is the least of your problems.",
        overview: {
            location: "TRAPPIST-1h",
            type: "Ice Planet with Extreme Temperatures and Hostile Terrain",
            features: ["Barren frozen plains of ice and snow", "Jagged black rock peaks", "Shallow, toxic lakes formed during the short summer thaw", "Thick ice sheets over oceans with possible leviathans", "Geothermal vents scattered across the surface", "Hidden criminal hubs and rogue labs"],
            climate: "Summers: Slightly above freezing with toxic lakes formed. Winters: Constant froststorms, temperatures plunge to deadly lows, winds that freeze flesh instantly",
            atmosphere: "Thin and oxygen-poor. Requires constant filtration for survival. Direct exposure to the atmosphere is fatal without a pressurized suit"
        },
        geography: {
            daySide: "During summer, areas briefly warm to slightly above freezing. The terrain remains bleak, with icy plains and occasional geothermal heat pockets",
            nightSide: "The night is endless froststorm, with blizzards and winds, making it nearly impossible to navigate. The terrain is constantly shifting due to the freezing winds",
            landmarks: ["Hidden illegal hubs beneath the ice, warmed by geothermal energy", "Remote and isolated illegal research labs of rogue factions and corporations", "Geothermal oasis (rumored, possibly nonexistent)"]
        },
        flora: "N/A",
        fauna: "Dangerous, unconfirmed rumors of massive aquatic leviathans beneath the ice, though their existence is uncertain. Other unidentified creatures have been speculated to exist, with most reports unverified",
        civilization: {
            population: "Very low population, made up primarily of criminals, fugitives, and desperate individuals seeking refuge. Populations consist of isolated communities with short lifespans",
            groups: "Mobsters, smugglers and arms dealers, operating under the surface in hidden caverns",
            tech: "Advanced technology is used for survival and operations. The technology of survival suits and geothermal energy usage is crucial to existence here",
            society: "Extremely fractured and dangerous, with communities plagued by infighting and resource shortages. Dangerous networks of criminals thrive in the icy caverns, creating a lawless and volatile society"
        },
        economy: {
            resources: ["Limited geothermal energy sources used for warmth and survival", "Ice sheets contain valuable frozen minerals", "Illegal resources like weapons, substances and illicit research materials"],
            activity: ["Smuggling, illegal arms dealing, and trade of restricted resources", "Rogue corporate research operations, often involving unethical experimentation", "Minimal to no commercial economy due to harsh conditions"]
        },
        threats: {
            environmental: ["Intense froststorms capable of burying structures and vehicles", "Crevasses hidden under thin ice, which can swallow the unwary", "Perpetual cold that poses a constant risk to survival", "Unverified aquatic leviathans or other dangerous creatures beneath the ice"],
            other: ["Criminal gangs and rival factions constantly engaging in violent conflict", "Hostile rogue factions with dangerous secret experiments", "Survival itself: Limited resources, exposure, and harsh conditions"]
        },
        ship: {
            name: "Vexis-7",
            purpose: "To orbit around TRAPPIST-1h and serve as the hub for luxury and housing for high-ranking officials, primarily Siderus Corporation",
            design: ["High-tech design with luxurious interiors, capable of housing society's elite. Specifics of the ship's interior are highly classified, focusing on comfort, exclusivity, and corporate power"],
            control: "Siderus Corporation",
            living: ["Exceptionally high standard of living for the elite, with access to advanced technologies, leisure activities, and a level of comfort far beyond what is available on any other ship or planet"],
            link: "https://discord.com/channels/1317616738719895602/1326896409747787797"
        }
    }
];