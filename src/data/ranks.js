export const ranksData = {
    justice: {
        title: "Justice Corp Ranks",
        bureaus: [
            { id: "AO", name: "Administration Overview" },
            { id: "IA", name: "Internal Affairs" },
            { id: "DCI", name: "Department of Criminal Investigation" },
            { id: "NEA", name: "Narcotics Enforcement Agency" },
            { id: "CCA", name: "Cyber Crimes Agency" },
            { id: "HREA", name: "Human Rights Enforcement Agency" },
            { id: "EOU", name: "Exploitation and Obscenity Unit" }
        ],
        hierarchy: [
            { tier: "Chief of Operations", role: "System Command", desc: "The highest position one could achieve. In control of all of the Justice Units. More of a politician than a police officer. They are able to work on a system wide range." },
            { tier: "Bureau Chief and Deputy Chief", role: "Bureau Leadership", desc: "Leaders of each respective bureau. The Bureau Chief takes first command, while the Deputy advises and takes second command. They are able to work on a system wide range." },
            { tier: "Captains", role: "Precinct Command", desc: "Leaders of their respective precincts. They are required to have at least 10+ years of experience. They manage all ranks below themselves. They usually work on a ship/planet wide basis, dependent on the population." },
            { tier: "Lieutenants", role: "Administrative Support", desc: "Assistants to captains; mainly does administrative work, with the occasional watch over of lower ranked police. They work on a ship/planet wide basis." },
            { tier: "Detectives", role: "Investigation", desc: "Those who investigate crimes. They usually work on a citywide basis, only investigating the circumstances surrounding a crime." },
            { tier: "Officers", role: "Field Operations", desc: "The normal everyday officer. They take shifts and routes, always on the lookout for crime. They work on a city wide basis." },
            { tier: "Recruits", role: "Training", desc: "Newbies in the police world. They work with a higher ranked officer until they are deemed ready to work as a normal officer. They work with officers, with no jurisdiction of their own." }
        ],
        link: "https://discord.com/channels/1317616738719895602/1331060111590035547"
    },
    criminal: {
        title: "Criminal Ranks",
        classifications: [
            { id: "TTIC", name: "Top-Tier Interplanetary Criminals" },
            { id: "EIC", name: "Elite Interplanetary Criminals" },
            { id: "HDCS", name: "Highly Dangerous Criminal Specialists" },
            { id: "LP", name: "Local Powerhouses" },
            { id: "NCC", name: "Notorious But Contained Criminals" },
            { id: "STTC", name: "Small-Time Trouble Criminals" },
            { id: "LRC", name: "Lowest Rung Criminals" }
        ],
        threats: [
            { tier: "Elite", scope: "System-wide", crimes: "Large-scale war crimes, smuggling, weaponizing planetary ecosystems, interstellar terrorism, heist, raiding, kidnapping with ransoms, carnages", examples: "Apollo, Sypheron, Zeke" },
            { tier: "Spectre", scope: "System-wide", crimes: "Advanced heists, assassinations of high-ranking officials, smuggling illegal tech, boycottage, destabilization", examples: "Silver" },
            { tier: "Renegade", scope: "Several planets or a sector", crimes: "Targeted kidnappings, black-market trading, raiding high-profile corporate facilities", examples: "" },
            { tier: "Warlord", scope: "Planetary or smaller sectors", crimes: "Drug empires, human trafficking rings, monopolizing underground economies", examples: "" },
            { tier: "Outlaw", scope: "Regional (one planet or city)", crimes: "Organized robberies, illegal racing rings, minor arms dealing", examples: "" },
            { tier: "Bandit", scope: "Local (a town or settlement)", crimes: "Petty theft, hijacking small shipments, vandalism", examples: "" },
            { tier: "Scavver", scope: "Individual or very small groups", crimes: "Pickpocketing, scavenging restricted areas, stealing food", examples: "" }
        ],
        link: "https://discord.com/channels/1317616738719895602/1330210092611665961"
    }
};
