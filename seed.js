const Species = require('./models/species')
const db = require('./models/db')

db.once('open', () => {
    console.log('connected to mongo')
})
db.on('error', (error) => {
  console.error(error.message)
})

const marineSpecies = [
  {
    "name": "Hawksbill Sea Turtle",
    "scientificName": "Eretmochelys imbricata",
    "conservationStatus": "CR",
    "description": "A critically endangered sea turtle known for its beautiful shell, found in tropical reefs worldwide.",
    "habitat": ["Coral reefs", "Rocky coasts", "Lagoons"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Hawksbill_Sea_Turtle.jpg"
  },
  {
    "name": "Blue Whale",
    "scientificName": "Balaenoptera musculus",
    "conservationStatus": "EN",
    "description": "The largest animal ever known to have existed, reaching up to 100 feet in length.",
    "habitat": ["Open ocean", "Polar waters"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Blue_Whale.jpg"
  },
  {
    "name": "Clownfish",
    "scientificName": "Amphiprioninae",
    "conservationStatus": "LC",
    "description": "Small, brightly colored fish that form symbiotic relationships with sea anemones.",
    "habitat": ["Coral reefs", "Shallow lagoons"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Clownfish_in_anemone.jpg"
  },
  {
    "name": "Great White Shark",
    "scientificName": "Carcharodon carcharias",
    "conservationStatus": "VU",
    "description": "Apex predator known for its size and power, found in coastal surface waters.",
    "habitat": ["Coastal waters", "Open ocean"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/56/White_shark.jpg"
  },
  {
    "name": "Giant Pacific Octopus",
    "scientificName": "Enteroctopus dofleini",
    "conservationStatus": "LC",
    "description": "The largest octopus species, known for its intelligence and ability to change color.",
    "habitat": ["Rocky reefs", "Subtidal zones"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/77/Giant_Pacific_Octopus.jpg"
  },
  {
    "name": "Manta Ray",
    "scientificName": "Mobula birostris",
    "conservationStatus": "VU",
    "description": "Large, graceful rays with wing-like pectoral fins that can span up to 23 feet.",
    "habitat": ["Tropical waters", "Coral reefs"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Manta_birostris-Thailand4.jpg"
  },
  {
    "name": "Narwhal",
    "scientificName": "Monodon monoceros",
    "conservationStatus": "NT",
    "description": "Arctic whale known for its long, spiral tusk that can grow up to 10 feet.",
    "habitat": ["Arctic waters", "Pack ice"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/73/Narwhals.jpg"
  },
  {
    "name": "Leafy Seadragon",
    "scientificName": "Phycodurus eques",
    "conservationStatus": "NT",
    "description": "Marine fish with leaf-like appendages that provide camouflage in seaweed habitats.",
    "habitat": ["Kelp forests", "Seagrass beds"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Phycodurus_eques.jpg"
  },
  {
    "name": "Humphead Wrasse",
    "scientificName": "Cheilinus undulatus",
    "conservationStatus": "EN",
    "description": "Large, colorful reef fish with a prominent forehead hump that develops with age.",
    "habitat": ["Coral reefs", "Lagoon reefs"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Cheilinus_undulatus.jpg"
  },
  {
    "name": "Vaquita",
    "scientificName": "Phocoena sinus",
    "conservationStatus": "CR",
    "description": "The world's most endangered marine mammal, a small porpoise endemic to the Gulf of California.",
    "habitat": ["Shallow coastal waters"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/38/Vaquita6_Olson_NOAA.jpg"
  },
  {
    "name": "Blue Whale",
    "scientificName": "Balaenoptera musculus",
    "conservationStatus": "EN",
    "description": "Largest animal on Earth, reaching up to 100 feet (30 meters) in length.",
    "habitat": ["Open ocean", "Polar waters"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Blue_Whale.jpg"
  },
  {
    "name": "Humpback Whale",
    "scientificName": "Megaptera novaeangliae",
    "conservationStatus": "LC",
    "description": "Known for their complex songs and acrobatic breaching behavior.",
    "habitat": ["Coastal waters", "Open ocean"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/61/Humpback_Whale_underwater_shot.jpg"
  },
  {
    "name": "Leatherback Sea Turtle",
    "scientificName": "Dermochelys coriacea",
    "conservationStatus": "VU",
    "description": "Largest turtle species with a unique leathery shell instead of hard scutes.",
    "habitat": ["Open ocean", "Tropical waters"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Leatherback_Sea_Turtle_-_The_Reptarium.jpg"
  },
  {
    "name": "Whale Shark",
    "scientificName": "Rhincodon typus",
    "conservationStatus": "EN",
    "description": "Largest fish species, filter feeder that can grow to 40 feet (12 meters).",
    "habitat": ["Tropical oceans", "Coastal waters"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Whale_shark_Georgia_aquarium.jpg"
  },
  {
    "name": "Manta Ray",
    "scientificName": "Mobula birostris",
    "conservationStatus": "VU",
    "description": "Enormous ray with wing-like pectoral fins spanning up to 23 feet (7 meters).",
    "habitat": ["Coral reefs", "Open ocean"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Manta_birostris-Thailand4.jpg"
  },
  {
    "name": "Clownfish",
    "scientificName": "Amphiprioninae",
    "conservationStatus": "LC",
    "description": "Forms symbiotic relationships with sea anemones, popularized by Finding Nemo.",
    "habitat": ["Coral reefs", "Lagoons"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Clownfish_in_anemone.jpg"
  },
  {
    "name": "Giant Squid",
    "scientificName": "Architeuthis dux",
    "conservationStatus": "LC",
    "description": "Elusive deep-sea dweller with eyes the size of dinner plates.",
    "habitat": ["Deep ocean", "Abyssal zone"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Giant_squid_%28Architeuthis%29_USNM.jpg"
  },
  {
    "name": "Horseshoe Crab",
    "scientificName": "Limulidae",
    "conservationStatus": "VU",
    "description": "Ancient arthropods whose blue blood is used in medical testing.",
    "habitat": ["Sandy shores", "Shallow coastal waters"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Horseshoe_crab.jpg"
  },
  {
    "name": "Emperor Penguin",
    "scientificName": "Aptenodytes forsteri",
    "conservationStatus": "NT",
    "description": "Tallest and heaviest penguin species, capable of diving to 1,850 feet (565 m).",
    "habitat": ["Antarctic ice", "Southern Ocean"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a3/Aptenodytes_forsteri_-Snow_Hill_Island%2C_Antarctica_-adults_and_juvenile-8.jpg"
  },
  {
    "name": "Vaquita",
    "scientificName": "Phocoena sinus",
    "conservationStatus": "CR",
    "description": "World's most endangered marine mammal with fewer than 10 individuals remaining.",
    "habitat": ["Gulf of California"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/38/Vaquita6_Olson_NOAA.jpg"
  },
  {
    "name": "Giant Clam",
    "scientificName": "Tridacna gigas",
    "conservationStatus": "VU",
    "description": "Largest living bivalve mollusk that can weigh over 440 pounds (200 kg).",
    "habitat": ["Coral reefs", "Shallow lagoons"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Tridacna_gigas.jpg"
  },
  {
    "name": "Blue Whale",
    "scientificName": "Balaenoptera musculus",
    "conservationStatus": "EN",
    "description": "Largest animal on Earth, reaching up to 100 feet (30 meters) in length.",
    "habitat": ["Open ocean", "Polar waters"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Blue_Whale.jpg"
  },
  {
    "name": "Humpback Whale",
    "scientificName": "Megaptera novaeangliae",
    "conservationStatus": "LC",
    "description": "Known for their complex songs and acrobatic breaching behavior.",
    "habitat": ["Coastal waters", "Open ocean"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/61/Humpback_Whale_underwater_shot.jpg"
  },
  {
    "name": "Leatherback Sea Turtle",
    "scientificName": "Dermochelys coriacea",
    "conservationStatus": "VU",
    "description": "Largest turtle species with a unique leathery shell instead of hard scutes.",
    "habitat": ["Open ocean", "Tropical waters"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Leatherback_Sea_Turtle_-_The_Reptarium.jpg"
  },
  {
    "name": "Whale Shark",
    "scientificName": "Rhincodon typus",
    "conservationStatus": "EN",
    "description": "Largest fish species, filter feeder that can grow to 40 feet (12 meters).",
    "habitat": ["Tropical oceans", "Coastal waters"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Whale_shark_Georgia_aquarium.jpg"
  },
  {
    "name": "Manta Ray",
    "scientificName": "Mobula birostris",
    "conservationStatus": "VU",
    "description": "Enormous ray with wing-like pectoral fins spanning up to 23 feet (7 meters).",
    "habitat": ["Coral reefs", "Open ocean"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Manta_birostris-Thailand4.jpg"
  },
  {
    "name": "Clownfish",
    "scientificName": "Amphiprioninae",
    "conservationStatus": "LC",
    "description": "Forms symbiotic relationships with sea anemones, popularized by Finding Nemo.",
    "habitat": ["Coral reefs", "Lagoons"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Clownfish_in_anemone.jpg"
  },
  {
    "name": "Giant Squid",
    "scientificName": "Architeuthis dux",
    "conservationStatus": "LC",
    "description": "Elusive deep-sea dweller with eyes the size of dinner plates.",
    "habitat": ["Deep ocean", "Abyssal zone"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Giant_squid_%28Architeuthis%29_USNM.jpg"
  },
  {
    "name": "Horseshoe Crab",
    "scientificName": "Limulidae",
    "conservationStatus": "VU",
    "description": "Ancient arthropods whose blue blood is used in medical testing.",
    "habitat": ["Sandy shores", "Shallow coastal waters"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Horseshoe_crab.jpg"
  },
  {
    "name": "Emperor Penguin",
    "scientificName": "Aptenodytes forsteri",
    "conservationStatus": "NT",
    "description": "Tallest and heaviest penguin species, capable of diving to 1,850 feet (565 m).",
    "habitat": ["Antarctic ice", "Southern Ocean"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a3/Aptenodytes_forsteri_-Snow_Hill_Island%2C_Antarctica_-adults_and_juvenile-8.jpg"
  },
  {
    "name": "Vaquita",
    "scientificName": "Phocoena sinus",
    "conservationStatus": "CR",
    "description": "World's most endangered marine mammal with fewer than 10 individuals remaining.",
    "habitat": ["Gulf of California"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/38/Vaquita6_Olson_NOAA.jpg"
  },
  {
    "name": "Giant Clam",
    "scientificName": "Tridacna gigas",
    "conservationStatus": "VU",
    "description": "Largest living bivalve mollusk that can weigh over 440 pounds (200 kg).",
    "habitat": ["Coral reefs", "Shallow lagoons"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Tridacna_gigas.jpg"
  },
  {
    "name": "Blue Whale",
    "scientificName": "Balaenoptera musculus",
    "conservationStatus": "EN",
    "description": "The largest animal known to have ever existed, reaching up to 29.9 meters (98 ft) in length.",
    "habitat": ["Open ocean", "Polar waters"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Blue_Whale.jpg"
  },
  {
    "name": "Humpback Whale",
    "scientificName": "Megaptera novaeangliae",
    "conservationStatus": "LC",
    "description": "Known for their complex songs and spectacular breaching behavior.",
    "habitat": ["Coastal waters", "Open ocean"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/61/Humpback_Whale_underwater_shot.jpg"
  },
  {
    "name": "Orca",
    "scientificName": "Orcinus orca",
    "conservationStatus": "NT",
    "description": "Apex predator known as killer whales, with distinct black-and-white coloring.",
    "habitat": ["All oceans", "Coastal waters"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/37/Killerwhales_jumping.jpg"
  },
  {
    "name": "Sperm Whale",
    "scientificName": "Physeter macrocephalus",
    "conservationStatus": "VU",
    "description": "Largest toothed predator, known for diving to depths of 2,250 meters (7,382 ft).",
    "habitat": ["Deep ocean", "All oceans"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8f/Sperm_whale_12.jpg"
  },
  {
    "name": "Leatherback Turtle",
    "scientificName": "Dermochelys coriacea",
    "conservationStatus": "VU",
    "description": "Largest turtle species with a unique leathery shell instead of hard scutes.",
    "habitat": ["Open ocean", "Tropical waters"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Leatherback_Sea_Turtle_-_The_Reptarium.jpg"
  },
  {
    "name": "Green Turtle",
    "scientificName": "Chelonia mydas",
    "conservationStatus": "EN",
    "description": "Herbivorous turtle named for the green color of its fat, not its shell.",
    "habitat": ["Coastal waters", "Seagrass beds"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Green_Sea_Turtle_grazing_seagrass.jpg"
  },
  {
    "name": "Whale Shark",
    "scientificName": "Rhincodon typus",
    "conservationStatus": "EN",
    "description": "Largest fish species, a gentle filter feeder that can grow to 18 meters (59 ft).",
    "habitat": ["Tropical oceans", "Coastal waters"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Whale_shark_Georgia_aquarium.jpg"
  },
  {
    "name": "Great White Shark",
    "scientificName": "Carcharodon carcharias",
    "conservationStatus": "VU",
    "description": "Powerful apex predator known for its size and occasional attacks on humans.",
    "habitat": ["Coastal waters", "Open ocean"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/56/White_shark.jpg"
  },
  {
    "name": "Manta Ray",
    "scientificName": "Mobula birostris",
    "conservationStatus": "VU",
    "description": "Enormous ray with wing-like pectoral fins spanning up to 7 meters (23 ft).",
    "habitat": ["Coral reefs", "Open ocean"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Manta_birostris-Thailand4.jpg"
  },
  {
    "name": "Devil Ray",
    "scientificName": "Mobula mobular",
    "conservationStatus": "EN",
    "description": "Smaller than manta rays but capable of spectacular leaps from the water.",
    "habitat": ["Temperate waters", "Open ocean"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Mobula_japanica.jpg"
  },
  {
    "name": "Clownfish",
    "scientificName": "Amphiprioninae",
    "conservationStatus": "LC",
    "description": "Forms symbiotic relationships with sea anemones, popularized by Finding Nemo.",
    "habitat": ["Coral reefs", "Lagoons"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Clownfish_in_anemone.jpg"
  },
  {
    "name": "Regal Angelfish",
    "scientificName": "Pygoplites diacanthus",
    "conservationStatus": "LC",
    "description": "Strikingly colored fish with vertical blue and white stripes and yellow accents.",
    "habitat": ["Coral reefs", "Lagoon reefs"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Pygoplites_diacanthus.jpg"
  },
  {
    "name": "Giant Squid",
    "scientificName": "Architeuthis dux",
    "conservationStatus": "LC",
    "description": "Elusive deep-sea dweller with eyes the size of dinner plates (30 cm diameter).",
    "habitat": ["Deep ocean", "Abyssal zone"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Giant_squid_%28Architeuthis%29_USNM.jpg"
  },
  {
    "name": "Vampire Squid",
    "scientificName": "Vampyroteuthis infernalis",
    "conservationStatus": "LC",
    "description": "Neither squid nor octopus, this 'living fossil' inhabits oxygen-minimum zones.",
    "habitat": ["Deep ocean", "Midwater zones"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/33/Vampyroteuthis_infernalis.jpg"
  },
  {
    "name": "Horseshoe Crab",
    "scientificName": "Limulidae",
    "conservationStatus": "VU",
    "description": "Ancient arthropods whose blue blood is used in medical testing (Limulus amebocyte lysate).",
    "habitat": ["Sandy shores", "Shallow coastal waters"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Horseshoe_crab.jpg"
  },
  {
    "name": "Blue Crab",
    "scientificName": "Callinectes sapidus",
    "conservationStatus": "LC",
    "description": "Important commercial species known for its bright blue claws and sweet meat.",
    "habitat": ["Estuaries", "Mud flats"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Callinectes_sapidus.jpg"
  },
  {
    "name": "Emperor Penguin",
    "scientificName": "Aptenodytes forsteri",
    "conservationStatus": "NT",
    "description": "Tallest and heaviest penguin species, capable of diving to 565 meters (1,854 ft).",
    "habitat": ["Antarctic ice", "Southern Ocean"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a3/Aptenodytes_forsteri_-Snow_Hill_Island%2C_Antarctica_-adults_and_juvenile-8.jpg"
  },
  {
    "name": "Weddell Seal",
    "scientificName": "Leptonychotes weddellii",
    "conservationStatus": "LC",
    "description": "Southernmost breeding mammal that can dive for 80 minutes to 600 meters (2,000 ft).",
    "habitat": ["Antarctic coasts", "Pack ice"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Weddell_Seal_-_Underwater.jpg"
  },
  {
    "name": "Vaquita",
    "scientificName": "Phocoena sinus",
    "conservationStatus": "CR",
    "description": "World's most endangered marine mammal with fewer than 10 individuals remaining (2023 estimate).",
    "habitat": ["Gulf of California"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/38/Vaquita6_Olson_NOAA.jpg"
  },
  {
    "name": "Hawksbill Turtle",
    "scientificName": "Eretmochelys imbricata",
    "conservationStatus": "CR",
    "description": "Tropical turtle hunted for its beautiful shell (tortoiseshell material).",
    "habitat": ["Coral reefs", "Rocky coasts"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Hawksbill_Sea_Turtle.jpg"
  },
  {
    "name": "Giant Clam",
    "scientificName": "Tridacna gigas",
    "conservationStatus": "VU",
    "description": "Largest living bivalve mollusk that can weigh over 200 kg (440 lb).",
    "habitat": ["Coral reefs", "Shallow lagoons"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Tridacna_gigas.jpg"
  },
  {
    "name": "Crown-of-Thorns Starfish",
    "scientificName": "Acanthaster planci",
    "conservationStatus": "NT",
    "description": "Corallivorous starfish that can devastate reef systems during population outbreaks.",
    "habitat": ["Coral reefs", "Lagoon reefs"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8d/Crown-of-thorns_starfish.jpg"
  },
  {
    "name": "Peacock Mantis Shrimp",
    "scientificName": "Odontodactylus scyllarus",
    "conservationStatus": "LC",
    "description": "Colorful crustacean with the most complex eyes in the animal kingdom and club-like appendages that strike with the velocity of a bullet",
    "habitat": ["Coral reefs", "Burrows"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/39/OdontodactylusScyllarus.jpg"
  },
  {
    "name": "Flying Fish",
    "scientificName": "Exocoetidae",
    "conservationStatus": "LC",
    "description": "Can make powerful, self-propelled leaps out of water to escape predators",
    "habitat": ["Surface waters", "Open ocean"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Cheilopogon_melanurus.jpg"
  },
  {
    "name": "Black Swallower",
    "scientificName": "Chiasmodon niger",
    "conservationStatus": "LC",
    "description": "Can swallow fish larger than itself thanks to an extendable stomach",
    "habitat": ["Deep sea", "Abyssal zone"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Chiasmodon_niger.jpg"
  },
  {
    "name": "Narwhal",
    "scientificName": "Monodon monoceros",
    "conservationStatus": "NT",
    "description": "Arctic whale with a long spiral tusk (actually a tooth)",
    "habitat": ["Arctic waters"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/73/Narwhals.jpg"
  },
  {
    "name": "Harlequin Shrimp",
    "scientificName": "Hymenocera picta",
    "description": "Strikingly patterned shrimp that feeds exclusively on starfish",
    "conservationStatus": "LC",
    "habitat": ["Coral reefs"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Hymenocera_picta.jpg"
  },
  {
    "name": "Smalltooth Sawfish",
    "scientificName": "Pristis pectinata",
    "conservationStatus": "CR",
    "description": "Saw-like snout used to detect and attack prey",
    "habitat": ["Coastal waters"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Smalltooth_sawfish.jpg"
  },
  {
    "name": "Stonefish",
    "scientificName": "Synanceia verrucosa",
    "conservationStatus": "LC",
    "description": "World's most venomous fish with neurotoxic venom",
    "habitat": ["Coral reefs", "Rocky bottoms"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Synanceia_verrucosa.jpg"
  },
  {
    "name": "Vampire Squid",
    "scientificName": "Vampyroteuthis infernalis",
    "conservationStatus": "LC",
    "description": "Produces bioluminescent mucus when threatened",
    "habitat": ["Deep sea"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/33/Vampyroteuthis_infernalis.jpg"
  },
  {
  "name": "Gulper Eel",
  "scientificName": "Eurypharynx pelecanoides",
  "conservationStatus": "LC",
  "description": "Has an enormous mouth capable of swallowing prey larger than itself",
  "habitat": ["Abyssal zone"],
  "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/47/Eurypharynx_pelecanoides.jpg"
},
{
  "name": "Barreleye Fish",
  "scientificName": "Macropinna microstoma",
  "conservationStatus": "LC",
  "description": "Transparent head with tubular eyes that rotate to look upward",
  "habitat": ["Midwater depths"],
  "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Macropinna_microstoma.jpg"
},
{
  "name": "Psychedelic Frogfish",
  "scientificName": "Histiophryne psychedelica",
  "conservationStatus": "NT",
  "description": "Swims by jet propulsion and has unique fingerprint-like skin patterns",
  "habitat": ["Coral rubble"],
  "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Histiophryne_psychedelica.jpg"
},
{
  "name": "Harlequin Ghost Pipefish",
  "scientificName": "Solenostomus paradoxus",
  "conservationStatus": "LC",
  "description": "Mimics crinoids with spectacular color variations from red to black",
  "habitat": ["Coral reefs"],
  "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Harlequin_ghost_pipefish.jpg"
},
{
  "name": "Antarctic Icefish",
  "scientificName": "Channichthyidae",
  "conservationStatus": "LC",
  "description": "Only vertebrate lacking hemoglobin, with transparent blood",
  "habitat": ["Antarctic waters"],
  "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Chionodraco_hamatus.jpg"
},
{
  "name": "Yeti Crab",
  "scientificName": "Kiwa hirsuta",
  "conservationStatus": "NT",
  "description": "Hairy-clawed crab that farms bacteria on its arms",
  "habitat": ["Hydrothermal vents"],
  "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/34/Kiwa_hirsuta.jpg"
},
{
  "name": "Panda Sea Slug",
  "scientificName": "Chromodoris pandani",
  "conservationStatus": "LC",
  "description": "Striking black-and-white nudibranch that feeds on toxic sponges",
  "habitat": ["Coral reefs"],
  "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4d/Chromodoris_pandani.jpg"
},
{
  "name": "Telescope Octopus",
  "scientificName": "Amphitretus pelagicus",
  "conservationStatus": "LC",
  "description": "Transparent octopus with tubular eyes providing 360° vision",
  "habitat": ["Midwater depths"],
  "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Amphitretus_pelagicus.jpg"
},
{
  "name": "Dumbo Octopus",
  "scientificName": "Grimpoteuthis",
  "conservationStatus": "VU",
  "description": "Deep-sea octopus with ear-like fins resembling Disney's Dumbo",
  "habitat": ["Abyssal plain"],
  "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/54/Grimpoteuthis_sp.jpg"
},
{
  "name": "Frilled Shark",
  "scientificName": "Chlamydoselachus anguineus",
  "conservationStatus": "NT",
  "description": "Primitive eel-like shark with 300 trident-shaped teeth",
  "habitat": ["Continental shelf"],
  "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Chlamydoselachus_anguineus.jpg"
}
]

// async function seedSpecies(speciesData) {
//   try {
//     await Species.deleteMany();
//     await Species.insertMany(speciesData);
//     console.log(`Seeded ${speciesData.length} species`);
//   } catch (error) {
//     console.error('Seeding error:', error);
//   }
// }

// seedSpecies(marineSpecies)