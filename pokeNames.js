const pokeNames = [
  "luxray",
  "budew",
  "cranidos",
  "rampardos",
  "burmy",
  "mothim",
  "vespiquen",
  "pachirisu",
  "shinx",
  "buizel",
  "floatzel",
  "cherubi",
  "cherrim",
  "shellos",
  "ambipom",
  "drifloon",
  "drifblim",
  "buneary",
  "lopunny",
  "mismagius",
  "honchkrow",
  "glameow",
  "purugly",
  "stunky",
  "skuntank",
  "bronzor",
  "bronzong",
  "bonsly",
  "mime jr.",
  "happiny",
  "spiritomb",
  "gible",
  "gabite",
  "garchomp",
  "munchlax",
  "riolu",
  "lucario",
  "hippopotas",
  "hippowdon",
  "skorupi",
  "drapion",
  "croagunk",
  "toxicroak",
  "carnivine",
  "finneon",
  "mantyke",
  "snover",
  "abomasnow",
  "weavile",
  "lickilicky",
  "rhyperior",
  "tangrowth",
  "magmortar",
  "togekiss",
  "yanmega",
  "leafeon",
  "glaceon",
  "gliscor",
  "mamoswine",
  "porygon-z",
  "gallade",
  "probopass",
  "dusknoir",
  "uxie",
  "mesprit",
  "azelf",
  "dialga",
  "palkia",
  "heatran",
  "regigigas",
  "giratina",
  "phione",
  "darkrai",
  "shaymin",
  "victini",
  "snivy",
  "servine",
  "serperior",
  "tepig",
  "pignite",
  "emboar",
  "dewott",
  "samurott",
  "patrat",
  "watchog",
  "herdier",
  "stoutland",
  "purrloin",
  "liepard",
  "pansage",
  "pansear",
  "panpour",
  "simipour",
  "munna",
  "musharna",
  "pidove",
  "tranquill",
  "unfezant",
  "zebstrika",
  "roggenrola",
  "boldore",
  "swoobat",
  "excadrill",
  "timburr",
  "gurdurr",
  "conkeldurr",
  "seismitoad",
  "throh",
  "sawk",
  "leavanny",
  "venipede",
  "whirlipede",
  "scolipede",
  "petilil",
  "sandile",
  "krookodile",
  "darumaka",
  "darmanitan",
  "maractus",
  "dwebble",
  "crustle",
  "scraggy",
  "scrafty",
  "sigilyph",
  "yamask",
  "cofagrigus",
  "tirtouga",
  "carracosta",
  "archen",
  "archeops",
  "trubbish",
  "garbodor",
  "zorua",
  "zoroark",
  "minccino",
  "cinccino",
  "gothita",
  "gothorita",
  "gothitelle",
  "solosis",
  "duosion",
  "reuniclus",
  "ducklett",
  "swanna",
  "vanillite",
  "vanillish",
  "vanilluxe",
  "deerling",
  "sawsbuck",
  "emolga",
  "karrablast",
  "escavalier",
  "foongus",
  "amoonguss",
  "frillish",
  "jellicent",
  "alomomola",
  "joltik",
  "galvantula",
  "ferroseed",
  "ferrothorn",
  "klink",
  "klang",
  "klinklang",
  "eelektrik",
  "eelektross",
  "beheeyem",
  "litwick",
  "lampent",
  "chandelure",
  "fraxure",
  "haxorus",
  "cubchoo",
  "cryogonal",
  "shelmet",
  "accelgor",
  "stunfisk",
  "mienfoo",
  "mienshao",
  "golett",
  "golurk",
  "pawniard",
  "bisharp",
  "bouffalant",
  "rufflet",
  "mandibuzz",
  "heatmor",
  "durant",
  "hydreigon",
  "larvesta",
  "terrakion",
  "virizion",
  "tornadus",
  "thundurus",
  "reshiram",
  "zekrom",
  "landorus",
  "keldeo",
  "meloetta",
  "genesect",
  "chespin",
  "quilladin",
  "chesnaught",
  "braixen",
  "delphox",
  "froakie",
  "frogadier",
  "greninja",
  "bunnelby",
  "diggersby",
  "fletchling",
  "fletchinder",
  "talonflame",
  "scatterbug",
  "spewpa",
  "litleo",
  "pyroar",
  "flabébé",
  "floette",
  "florges",
  "skiddo",
  "gogoat",
  "pangoro",
  "espurr",
  "meowstic",
  "honedge",
  "doublade",
  "aegislash",
  "spritzee",
  "aromatisse",
  "slurpuff",
  "binacle",
  "barbaracle",
  "skrelp",
  "dragalge",
  "clauncher",
  "clawitzer",
  "helioptile",
  "heliolisk",
  "tyrunt",
  "tyrantrum",
  "amaura",
  "aurorus",
  "sylveon",
  "hawlucha",
  "dedenne",
  "carbink",
  "goomy",
  "sliggoo",
  "goodra",
  "klefki",
  "trevenant",
  "pumpkaboo",
  "bergmite",
  "avalugg",
  "noibat",
  "noivern",
  "xerneas",
  "yveltal",
  "zygarde",
  "diancie",
  "volcanion",
  "dartrix",
  "litten",
  "popplio",
  "brionne",
  "pikipek",
  "trumbeak",
  "toucannon",
  "yungoos",
  "gumshoos",
  "grubbin",
  "charjabug",
  "vikavolt",
  "crabrawler",
  "crabominable",
  "oricorio",
  "cutiefly",
  "ribombee",
  "rockruff",
  "wishiwashi",
  "mareanie",
  "mudbray",
  "mudsdale",
  "dewpider",
  "lurantis",
  "morelull",
  "shiinotic",
  "salandit",
  "salazzle",
  "stufful",
  "bounsweet",
  "tsareena",
  "oranguru",
  "passimian",
  "wimpod",
  "golisopod",
  "sandygast",
  "pyukumuku",
  "tympole",
  "silvally",
  "minior",
  "komala",
  "turtonator",
  "togedemaru",
  "mimikyu",
  "bruxish",
  "drampa",
  "dhelmise",
  "jangmo-o",
  "kommo-o",
  "tapu koko",
  "tapu lele",
  "tapu fini",
  "cosmog",
  "cosmoem",
  "solgaleo",
  "lunala",
  "nihilego",
  "buzzwole",
  "pheromosa",
  "xurkitree",
  "celesteela",
  "guzzlord",
  "necrozma",
  "magearna",
  "marshadow",
  "poipole",
  "naganadel",
  "bulbasaur",
  "ivysaur",
  "venusaur",
  "charmander",
  "charmeleon",
  "charizard",
  "squirtle",
  "wartortle",
  "blastoise",
  "caterpie",
  "metapod",
  "butterfree",
  "weedle",
  "kakuna",
  "beedrill",
  "pidgey",
  "pidgeotto",
  "pidgeot",
  "rattata",
  "raticate",
  "spearow",
  "fearow",
  "ekans",
  "arbok",
  "pikachu",
  "raichu",
  "sandshrew",
  "sandslash",
  "nidorina",
  "nidoqueen",
  "nidorino",
  "nidoking",
  "clefairy",
  "clefable",
  "vulpix",
  "ninetales",
  "jigglypuff",
  "wigglytuff",
  "zubat",
  "golbat",
  "oddish",
  "gloom",
  "vileplume",
  "paras",
  "parasect",
  "venonat",
  "venomoth",
  "diglett",
  "dugtrio",
  "meowth",
  "persian",
  "psyduck",
  "golduck",
  "mankey",
  "primeape",
  "growlithe",
  "arcanine",
  "poliwag",
  "poliwhirl",
  "poliwrath",
  "abra",
  "kadabra",
  "alakazam",
  "machop",
  "machoke",
  "machamp",
  "bellsprout",
  "weepinbell",
  "victreebel",
  "tentacool",
  "tentacruel",
  "geodude",
  "graveler",
  "golem",
  "ponyta",
  "rapidash",
  "slowpoke",
  "slowbro",
  "magnemite",
  "magneton",
  "farfetchd",
  "doduo",
  "dodrio",
  "seel",
  "dewgong",
  "grimer",
  "muk",
  "shellder",
  "cloyster",
  "gastly",
  "haunter",
  "gengar",
  "onix",
  "drowzee",
  "hypno",
  "krabby",
  "kingler",
  "voltorb",
  "electrode",
  "exeggcute",
  "exeggutor",
  "cubone",
  "marowak",
  "hitmonlee",
  "hitmonchan",
  "lickitung",
  "weezing",
  "rhyhorn",
  "rhydon",
  "chansey",
  "tangela",
  "kangaskhan",
  "horsea",
  "seadra",
  "goldeen",
  "seaking",
  "staryu",
  "starmie",
  "mr. mime",
  "scyther",
  "jynx",
  "electabuzz",
  "magmar",
  "pinsir",
  "tauros",
  "magikarp",
  "gyarados",
  "lapras",
  "ditto",
  "eevee",
  "vaporeon",
  "jolteon",
  "flareon",
  "porygon",
  "omanyte",
  "omastar",
  "kabuto",
  "kabutops",
  "aerodactyl",
  "snorlax",
  "articuno",
  "zapdos",
  "moltres",
  "dratini",
  "dragonair",
  "dragonite",
  "mewtwo",
  "mew",
  "chikorita",
  "bayleef",
  "meganium",
  "cyndaquil",
  "quilava",
  "typhlosion",
  "totodile",
  "croconaw",
  "feraligatr",
  "sentret",
  "furret",
  "hoothoot",
  "noctowl",
  "ledyba",
  "ledian",
  "spinarak",
  "ariados",
  "crobat",
  "chinchou",
  "lanturn",
  "pichu",
  "cleffa",
  "igglybuff",
  "togepi",
  "togetic",
  "natu",
  "xatu",
  "mareep",
  "flaaffy",
  "ampharos",
  "bellossom",
  "marill",
  "azumarill",
  "sudowoodo",
  "politoed",
  "hoppip",
  "skiploom",
  "jumpluff",
  "aipom",
  "sunkern",
  "sunflora",
  "yanma",
  "wooper",
  "quagsire",
  "espeon",
  "umbreon",
  "murkrow",
  "slowking",
  "misdreavus",
  "unown",
  "wobbuffet",
  "girafarig",
  "pineco",
  "forretress",
  "dunsparce",
  "gligar",
  "steelix",
  "snubbull",
  "granbull",
  "qwilfish",
  "scizor",
  "shuckle",
  "heracross",
  "sneasel",
  "teddiursa",
  "ursaring",
  "slugma",
  "magcargo",
  "swinub",
  "piloswine",
  "corsola",
  "remoraid",
  "octillery",
  "delibird",
  "mantine",
  "skarmory",
  "houndour",
  "houndoom",
  "kingdra",
  "phanpy",
  "donphan",
  "porygon2",
  "stantler",
  "smeargle",
  "tyrogue",
  "hitmontop",
  "smoochum",
  "elekid",
  "magby",
  "miltank",
  "blissey",
  "raikou",
  "entei",
  "suicune",
  "larvitar",
  "pupitar",
  "tyranitar",
  "lugia",
  "ho-oh",
  "celebi",
  "treecko",
  "grovyle",
  "sceptile",
  "torchic",
  "combusken",
  "blaziken",
  "mudkip",
  "marshtomp",
  "swampert",
  "poochyena",
  "mightyena",
  "zigzagoon",
  "linoone",
  "wurmple",
  "silcoon",
  "beautifly",
  "cascoon",
  "dustox",
  "lotad",
  "lombre",
  "ludicolo",
  "seedot",
  "nuzleaf",
  "shiftry",
  "taillow",
  "swellow",
  "wingull",
  "pelipper",
  "ralts",
  "kirlia",
  "gardevoir",
  "surskit",
  "masquerain",
  "shroomish",
  "breloom",
  "slakoth",
  "vigoroth",
  "slaking",
  "nincada",
  "ninjask",
  "shedinja",
  "whismur",
  "loudred",
  "exploud",
  "makuhita",
  "hariyama",
  "azurill",
  "nosepass",
  "skitty",
  "delcatty",
  "sableye",
  "mawile",
  "aron",
  "lairon",
  "aggron",
  "meditite",
  "medicham",
  "electrike",
  "manectric",
  "plusle",
  "minun",
  "volbeat",
  "illumise",
  "roselia",
  "gulpin",
  "swalot",
  "carvanha",
  "sharpedo",
  "wailmer",
  "wailord",
  "numel",
  "camerupt",
  "torkoal",
  "spoink",
  "grumpig",
  "spinda",
  "trapinch",
  "vibrava",
  "flygon",
  "cacnea",
  "cacturne",
  "swablu",
  "altaria",
  "zangoose",
  "seviper",
  "lunatone",
  "solrock",
  "barboach",
  "whiscash",
  "corphish",
  "crawdaunt",
  "baltoy",
  "claydol",
  "lileep",
  "cradily",
  "anorith",
  "armaldo",
  "feebas",
  "milotic",
  "castform",
  "kecleon",
  "shuppet",
  "banette",
  "duskull",
  "dusclops",
  "tropius",
  "chimecho",
  "absol",
  "wynaut",
  "snorunt",
  "glalie",
  "spheal",
  "sealeo",
  "walrein",
  "clamperl",
  "huntail",
  "gorebyss",
  "relicanth",
  "luvdisc",
  "bagon",
  "shelgon",
  "salamence",
  "beldum",
  "metang",
  "metagross",
  "regirock",
  "regice",
  "registeel",
  "latias",
  "latios",
  "kyogre",
  "groudon",
  "rayquaza",
  "jirachi",
  "deoxys",
  "turtwig",
  "grotle",
  "torterra",
  "chimchar",
  "monferno",
  "infernape",
  "piplup",
  "prinplup",
  "empoleon",
  "starly",
  "staravia",
  "staraptor",
  "bidoof",
  "bibarel",
  "kricketot",
  "kricketune",
  "palpitoad",
  "palossand",
  "kyurem",
  "basculin",
  "inkay",
  "volcarona",
  "vivillon",
  "decidueye",
  "tapu bulu",
  "toxapex",
  "phantump",
  "krokorok",
  "fennekin",
  "simisage",
  "vullaby",
  "deino",
  "araquanid",
  "manaphy",
  "rotom",
  "elgyem",
  "zweilous",
  "tynamo",
  "roserade",
  "combee",
  "hakamo-o",
  "hoopa",
  "chingling",
  "wormadam",
  "oshawott",
  "sewaddle",
  "rowlet",
  "lumineon",
  "gourgeist",
  "lilligant",
  "gigalith",
  "malamar",
  "fomantis",
  "woobat",
  "druddigon",
  "audino",
  "arceus",
  "stakataka",
  "simisear",
  "cobalion",
  "froslass",
  "magnezone",
  "chatot",
  "luxio",
  "tympole",
  "gastrodon",
  "whimsicott",
  "blitzle",
  "koffing",
  "bewear",
  "bastiodon",
  "swirlix",
  "kartana",
  "steenee",
  "lycanroc",
  "torracat",
  "axew",
  "cresselia",
  "furfrou",
  "braviary",
  "electivire",
  "comfey",
  "primarina",
  "blacephalon",
  "cottonee",
  "beartic",
  "swadloon",
  "pancham",
  "drilbur",
  "incineroar",
  "shieldon",
  "lillipup",
  "nidoran",
  "nidoran",
  "tyrunt",
];

export default pokeNames;