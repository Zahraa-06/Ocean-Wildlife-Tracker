// const Species = require('./models/species')
// const db = require('./models/db')

// db.once('open', () => {
//     console.log('connected to mongo')
// })
// db.on('error', (error) => {
//   console.error(error.message)
// })

// const marineSpecies = [
//   {
//     "name": "Hawksbill Sea Turtle",
//     "scientificName": "Eretmochelys imbricata",
//     "conservationStatus": "CR",
//     "description": "A critically endangered sea turtle known for its beautiful shell, found in tropical reefs worldwide.",
//     "habitat": ["Coral reefs", "Rocky coasts", "Lagoons"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Hawksbill_Sea_Turtle.jpg"
//   },
//   {
//     "name": "Blue Whale",
//     "scientificName": "Balaenoptera musculus",
//     "conservationStatus": "EN",
//     "description": "The largest animal ever known to have existed, reaching up to 100 feet in length.",
//     "habitat": ["Open ocean", "Polar waters"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Blue_Whale.jpg"
//   },
//   {
//     "name": "Clownfish",
//     "scientificName": "Amphiprioninae",
//     "conservationStatus": "LC",
//     "description": "Small, brightly colored fish that form symbiotic relationships with sea anemones.",
//     "habitat": ["Coral reefs", "Shallow lagoons"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Clownfish_in_anemone.jpg"
//   },
//   {
//     "name": "Great White Shark",
//     "scientificName": "Carcharodon carcharias",
//     "conservationStatus": "VU",
//     "description": "Apex predator known for its size and power, found in coastal surface waters.",
//     "habitat": ["Coastal waters", "Open ocean"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/56/White_shark.jpg"
//   },
//   {
//     "name": "Giant Pacific Octopus",
//     "scientificName": "Enteroctopus dofleini",
//     "conservationStatus": "LC",
//     "description": "The largest octopus species, known for its intelligence and ability to change color.",
//     "habitat": ["Rocky reefs", "Subtidal zones"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/77/Giant_Pacific_Octopus.jpg"
//   },
//   {
//     "name": "Manta Ray",
//     "scientificName": "Mobula birostris",
//     "conservationStatus": "VU",
//     "description": "Large, graceful rays with wing-like pectoral fins that can span up to 23 feet.",
//     "habitat": ["Tropical waters", "Coral reefs"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Manta_birostris-Thailand4.jpg"
//   },
//   {
//     "name": "Narwhal",
//     "scientificName": "Monodon monoceros",
//     "conservationStatus": "NT",
//     "description": "Arctic whale known for its long, spiral tusk that can grow up to 10 feet.",
//     "habitat": ["Arctic waters", "Pack ice"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/73/Narwhals.jpg"
//   },
//   {
//     "name": "Leafy Seadragon",
//     "scientificName": "Phycodurus eques",
//     "conservationStatus": "NT",
//     "description": "Marine fish with leaf-like appendages that provide camouflage in seaweed habitats.",
//     "habitat": ["Kelp forests", "Seagrass beds"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Phycodurus_eques.jpg"
//   },
//   {
//     "name": "Humphead Wrasse",
//     "scientificName": "Cheilinus undulatus",
//     "conservationStatus": "EN",
//     "description": "Large, colorful reef fish with a prominent forehead hump that develops with age.",
//     "habitat": ["Coral reefs", "Lagoon reefs"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Cheilinus_undulatus.jpg"
//   },
//   {
//     "name": "Humpback Whale",
//     "scientificName": "Megaptera novaeangliae",
//     "conservationStatus": "LC",
//     "description": "Known for their complex songs and acrobatic breaching behavior.",
//     "habitat": ["Coastal waters", "Open ocean"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/61/Humpback_Whale_underwater_shot.jpg"
//   },
//   {
//     "name": "Leatherback Sea Turtle",
//     "scientificName": "Dermochelys coriacea",
//     "conservationStatus": "VU",
//     "description": "Largest turtle species with a unique leathery shell instead of hard scutes.",
//     "habitat": ["Open ocean", "Tropical waters"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Leatherback_Sea_Turtle_-_The_Reptarium.jpg"
//   },
//   {
//     "name": "Whale Shark",
//     "scientificName": "Rhincodon typus",
//     "conservationStatus": "EN",
//     "description": "Largest fish species, filter feeder that can grow to 40 feet (12 meters).",
//     "habitat": ["Tropical oceans", "Coastal waters"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Whale_shark_Georgia_aquarium.jpg"
//   },
//   {
//     "name": "Giant Squid",
//     "scientificName": "Architeuthis dux",
//     "conservationStatus": "LC",
//     "description": "Elusive deep-sea dweller with eyes the size of dinner plates.",
//     "habitat": ["Deep ocean", "Abyssal zone"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Giant_squid_%28Architeuthis%29_USNM.jpg"
//   },
//   {
//     "name": "Horseshoe Crab",
//     "scientificName": "Limulidae",
//     "conservationStatus": "VU",
//     "description": "Ancient arthropods whose blue blood is used in medical testing.",
//     "habitat": ["Sandy shores", "Shallow coastal waters"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Horseshoe_crab.jpg"
//   },
//   {
//     "name": "Emperor Penguin",
//     "scientificName": "Aptenodytes forsteri",
//     "conservationStatus": "NT",
//     "description": "Tallest and heaviest penguin species, capable of diving to 1,850 feet (565 m).",
//     "habitat": ["Antarctic ice", "Southern Ocean"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a3/Aptenodytes_forsteri_-Snow_Hill_Island%2C_Antarctica_-adults_and_juvenile-8.jpg"
//   },
//   {
//     "name": "Orca",
//     "scientificName": "Orcinus orca",
//     "conservationStatus": "NT",
//     "description": "Apex predator known as killer whales, with distinct black-and-white coloring.",
//     "habitat": ["All oceans", "Coastal waters"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/37/Killerwhales_jumping.jpg"
//   },
//   {
//     "name": "Sperm Whale",
//     "scientificName": "Physeter macrocephalus",
//     "conservationStatus": "VU",
//     "description": "Largest toothed predator, known for diving to depths of 2,250 meters (7,382 ft).",
//     "habitat": ["Deep ocean", "All oceans"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8f/Sperm_whale_12.jpg"
//   },
//   {
//     "name": "Leatherback Turtle",
//     "scientificName": "Dermochelys coriacea",
//     "conservationStatus": "VU",
//     "description": "Largest turtle species with a unique leathery shell instead of hard scutes.",
//     "habitat": ["Open ocean", "Tropical waters"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Leatherback_Sea_Turtle_-_The_Reptarium.jpg"
//   },
//   {
//     "name": "Green Turtle",
//     "scientificName": "Chelonia mydas",
//     "conservationStatus": "EN",
//     "description": "Herbivorous turtle named for the green color of its fat, not its shell.",
//     "habitat": ["Coastal waters", "Seagrass beds"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Green_Sea_Turtle_grazing_seagrass.jpg"
//   },
//   {
//     "name": "Devil Ray",
//     "scientificName": "Mobula mobular",
//     "conservationStatus": "EN",
//     "description": "Smaller than manta rays but capable of spectacular leaps from the water.",
//     "habitat": ["Temperate waters", "Open ocean"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Mobula_japanica.jpg"
//   },
//   {
//     "name": "Regal Angelfish",
//     "scientificName": "Pygoplites diacanthus",
//     "conservationStatus": "LC",
//     "description": "Strikingly colored fish with vertical blue and white stripes and yellow accents.",
//     "habitat": ["Coral reefs", "Lagoon reefs"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Pygoplites_diacanthus.jpg"
//   },
//   {
//     "name": "Blue Crab",
//     "scientificName": "Callinectes sapidus",
//     "conservationStatus": "LC",
//     "description": "Important commercial species known for its bright blue claws and sweet meat.",
//     "habitat": ["Estuaries", "Mud flats"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Callinectes_sapidus.jpg"
//   },
//   {
//     "name": "Weddell Seal",
//     "scientificName": "Leptonychotes weddellii",
//     "conservationStatus": "LC",
//     "description": "Southernmost breeding mammal that can dive for 80 minutes to 600 meters (2,000 ft).",
//     "habitat": ["Antarctic coasts", "Pack ice"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Weddell_Seal_-_Underwater.jpg"
//   },
//   {
//     "name": "Vaquita",
//     "scientificName": "Phocoena sinus",
//     "conservationStatus": "CR",
//     "description": "World's most endangered marine mammal with fewer than 10 individuals remaining (2023 estimate).",
//     "habitat": ["Gulf of California"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/38/Vaquita6_Olson_NOAA.jpg"
//   },
//   {
//     "name": "Hawksbill Turtle",
//     "scientificName": "Eretmochelys imbricata",
//     "conservationStatus": "CR",
//     "description": "Tropical turtle hunted for its beautiful shell (tortoiseshell material).",
//     "habitat": ["Coral reefs", "Rocky coasts"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Hawksbill_Sea_Turtle.jpg"
//   },
//   {
//     "name": "Giant Clam",
//     "scientificName": "Tridacna gigas",
//     "conservationStatus": "VU",
//     "description": "Largest living bivalve mollusk that can weigh over 200 kg (440 lb).",
//     "habitat": ["Coral reefs", "Shallow lagoons"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Tridacna_gigas.jpg"
//   },
//   {
//     "name": "Crown-of-Thorns Starfish",
//     "scientificName": "Acanthaster planci",
//     "conservationStatus": "NT",
//     "description": "Corallivorous starfish that can devastate reef systems during population outbreaks.",
//     "habitat": ["Coral reefs", "Lagoon reefs"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8d/Crown-of-thorns_starfish.jpg"
//   },
//   {
//     "name": "Peacock Mantis Shrimp",
//     "scientificName": "Odontodactylus scyllarus",
//     "conservationStatus": "LC",
//     "description": "Colorful crustacean with the most complex eyes in the animal kingdom and club-like appendages that strike with the velocity of a bullet",
//     "habitat": ["Coral reefs", "Burrows"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/39/OdontodactylusScyllarus.jpg"
//   },
//   {
//     "name": "Flying Fish",
//     "scientificName": "Exocoetidae",
//     "conservationStatus": "LC",
//     "description": "Can make powerful, self-propelled leaps out of water to escape predators",
//     "habitat": ["Surface waters", "Open ocean"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Cheilopogon_melanurus.jpg"
//   },
//   {
//     "name": "Black Swallower",
//     "scientificName": "Chiasmodon niger",
//     "conservationStatus": "LC",
//     "description": "Can swallow fish larger than itself thanks to an extendable stomach",
//     "habitat": ["Deep sea", "Abyssal zone"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Chiasmodon_niger.jpg"
//   },
//   {
//     "name": "Harlequin Shrimp",
//     "scientificName": "Hymenocera picta",
//     "description": "Strikingly patterned shrimp that feeds exclusively on starfish",
//     "conservationStatus": "LC",
//     "habitat": ["Coral reefs"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Hymenocera_picta.jpg"
//   },
//   {
//     "name": "Smalltooth Sawfish",
//     "scientificName": "Pristis pectinata",
//     "conservationStatus": "CR",
//     "description": "Saw-like snout used to detect and attack prey",
//     "habitat": ["Coastal waters"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Smalltooth_sawfish.jpg"
//   },
//   {
//     "name": "Stonefish",
//     "scientificName": "Synanceia verrucosa",
//     "conservationStatus": "LC",
//     "description": "World's most venomous fish with neurotoxic venom",
//     "habitat": ["Coral reefs", "Rocky bottoms"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Synanceia_verrucosa.jpg"
//   },
//   {
//     "name": "Vampire Squid",
//     "scientificName": "Vampyroteuthis infernalis",
//     "conservationStatus": "LC",
//     "description": "Produces bioluminescent mucus when threatened",
//     "habitat": ["Deep sea"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/33/Vampyroteuthis_infernalis.jpg"
//   },
//   {
//     "name": "Gulper Eel",
//     "scientificName": "Eurypharynx pelecanoides",
//     "conservationStatus": "LC",
//     "description": "Has an enormous mouth capable of swallowing prey larger than itself",
//     "habitat": ["Abyssal zone"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/47/Eurypharynx_pelecanoides.jpg"
//   },
//   {
//     "name": "Barreleye Fish",
//     "scientificName": "Macropinna microstoma",
//     "conservationStatus": "LC",
//     "description": "Transparent head with tubular eyes that rotate to look upward",
//     "habitat": ["Midwater depths"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Macropinna_microstoma.jpg"
//   },
//   {
//     "name": "Psychedelic Frogfish",
//     "scientificName": "Histiophryne psychedelica",
//     "conservationStatus": "NT",
//     "description": "Swims by jet propulsion and has unique fingerprint-like skin patterns",
//     "habitat": ["Coral rubble"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Histiophryne_psychedelica.jpg"
//   },
//   {
//     "name": "Harlequin Ghost Pipefish",
//     "scientificName": "Solenostomus paradoxus",
//     "conservationStatus": "LC",
//     "description": "Mimics crinoids with spectacular color variations from red to black",
//     "habitat": ["Coral reefs"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Harlequin_ghost_pipefish.jpg"
//   },
//   {
//     "name": "Antarctic Icefish",
//     "scientificName": "Channichthyidae",
//     "conservationStatus": "LC",
//     "description": "Only vertebrate lacking hemoglobin, with transparent blood",
//     "habitat": ["Antarctic waters"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Chionodraco_hamatus.jpg"
//   },
//   {
//     "name": "Yeti Crab",
//     "scientificName": "Kiwa hirsuta",
//     "conservationStatus": "NT",
//     "description": "Hairy-clawed crab that farms bacteria on its arms",
//     "habitat": ["Hydrothermal vents"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/34/Kiwa_hirsuta.jpg"
//   },
//   {
//     "name": "Panda Sea Slug",
//     "scientificName": "Chromodoris pandani",
//     "conservationStatus": "LC",
//     "description": "Striking black-and-white nudibranch that feeds on toxic sponges",
//     "habitat": ["Coral reefs"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4d/Chromodoris_pandani.jpg"
//   },
//   {
//     "name": "Telescope Octopus",
//     "scientificName": "Amphitretus pelagicus",
//     "conservationStatus": "LC",
//     "description": "Transparent octopus with tubular eyes providing 360° vision",
//     "habitat": ["Midwater depths"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Amphitretus_pelagicus.jpg"
//   },
//   {
//     "name": "Dumbo Octopus",
//     "scientificName": "Grimpoteuthis",
//     "conservationStatus": "VU",
//     "description": "Deep-sea octopus with ear-like fins resembling Disney's Dumbo",
//     "habitat": ["Abyssal plain"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/54/Grimpoteuthis_sp.jpg"
//   },
//   {
//     "name": "Frilled Shark",
//     "scientificName": "Chlamydoselachus anguineus",
//     "conservationStatus": "NT",
//     "description": "Primitive eel-like shark with 300 trident-shaped teeth",
//     "habitat": ["Continental shelf"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Chlamydoselachus_anguineus.jpg"
//   },
//   {
//     "name": "Ribbon Eel",
//     "scientificName": "Rhinomuraena quaesita",
//     "conservationStatus": "LC",
//     "description": "Spectacularly colored eel that changes sex and color during its lifecycle (black juveniles → blue males → yellow females)",
//     "habitat": ["Coral reefs", "Sandy burrows"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Rhinomuraena_quaesita.jpg"
//   },
//   {
//     "name": "Blanket Octopus",
//     "scientificName": "Tremoctopus violaceus",
//     "conservationStatus": "LC",
//     "description": "Females have flowing, iridescent webs that can be unfurled to appear larger when threatened",
//     "habitat": ["Open ocean", "Surface waters"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d6/Tremoctopus_violaceus_2.jpg"
//   },
//   {
//     "name": "Christmas Tree Worm",
//     "scientificName": "Spirobranchus giganteus",
//     "conservationStatus": "LC",
//     "description": "Colorful polychaete worms with dual spiral feeding appendages resembling holiday trees",
//     "habitat": ["Coral heads"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Spirobranchus_giganteus.jpg"
//   },
//   {
//     "name": "Sarcastic Fringehead",
//     "scientificName": "Neoclinus blanchardi",
//     "conservationStatus": "LC",
//     "description": "Aggressive fish with an enormous mouth used in territorial displays against rivals",
//     "habitat": ["Rocky reefs", "Empty shells"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Sarcastic_fringehead.jpg"
//   },
//   {
//     "name": "Halimeda Ghostpipefish",
//     "scientificName": "Solenostomus halimeda",
//     "conservationStatus": "LC",
//     "description": "Masters of camouflage that perfectly mimic Halimeda algae with leafy appendages",
//     "habitat": ["Algal beds"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8d/Solenostomus_halimeda.jpg"
//   },
//   {
//     "name": "Flamboyant Cuttlefish",
//     "scientificName": "Metasepia pfefferi",
//     "conservationStatus": "NT",
//     "description": "Only poisonous cuttlefish species that walks along the seafloor with vibrant color displays",
//     "habitat": ["Sandy bottoms"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Metasepia_pfefferi_%28flamboyant_cuttlefish%29.jpg"
//   },
//   {
//     "name": "Hairy Frogfish",
//     "scientificName": "Antennarius striatus",
//     "conservationStatus": "LC",
//     "description": "Anglerfish that uses skin filaments to mimic algae-covered rocks while waving a lure",
//     "habitat": ["Reef rubble"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Antennarius_striatus.jpg"
//   },
//   {
//     "name": "Bargibant's Pygmy Seahorse",
//     "scientificName": "Hippocampus bargibanti",
//     "conservationStatus": "NT",
//     "description": "Tiny seahorse (2cm) with coral-mimicking tubercles that match specific gorgonian species",
//     "habitat": ["Gorgonian corals"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Hippocampus_bargibanti_%28Pygmy_seahorse%29.jpg"
//   },
//   {
//     "name": "Mimic Octopus",
//     "scientificName": "Thaumoctopus mimicus",
//     "conservationStatus": "LC",
//     "description": "Can impersonate lionfish, flatfish, and sea snakes by contorting its body and changing colors",
//     "habitat": ["Sandy estuaries"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/73/Thaumoctopus_mimicus.png"
//   },
//   {
//     "name": "Giant Oarfish",
//     "scientificName": "Regalecus glesne",
//     "conservationStatus": "LC",
//     "description": "Longest bony fish (up to 11m) with silvery skin and red fins, likely source of sea serpent legends",
//     "habitat": ["Deep ocean"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Regalecus_glesne.jpg"
//   },
//   {
//     "name": "Bowhead Whale",
//     "scientificName": "Balaena mysticetus",
//     "conservationStatus": "LC",
//     "description": "Arctic whale with the thickest blubber of any animal and longest lifespan (over 200 years)",
//     "habitat": ["Arctic waters", "Pack ice edges"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8b/Balaena_mysticetus.jpg"
//   },
//   {
//     "name": "Fire Urchin",
//     "scientificName": "Asthenosoma varium",
//     "conservationStatus": "LC",
//     "description": "Venomous spines with specialized venom sacs that cause intense pain",
//     "habitat": ["Coral reefs", "Rubble zones"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Asthenosoma_varium.jpg"
//   },
//   {
//     "name": "Black Dragonfish",
//     "scientificName": "Idiacanthus atlanticus",
//     "conservationStatus": "LC",
//     "description": "Females have bioluminescent barbels and transparent teeth to hunt in complete darkness",
//     "habitat": ["Mesopelagic zone"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Idiacanthus_atlanticus.jpg"
//   },
//   {
//     "name": "Garibaldi",
//     "scientificName": "Hypsypops rubicundus",
//     "conservationStatus": "LC",
//     "description": "California's state marine fish with brilliant orange coloration and territorial behavior",
//     "habitat": ["Kelp forests", "Rocky reefs"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Hypsypops_rubicundus.jpg"
//   },
//   {
//     "name": "Ocean Sunfish",
//     "scientificName": "Mola mola",
//     "conservationStatus": "VU",
//     "description": "Heaviest bony fish in the world (up to 2,300 kg) that basks at the surface",
//     "habitat": ["Open ocean", "Temperate waters"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/43/Mola_mola_-_Tokyo_Sea_Life_Park.jpg"
//   },
//   {
//     "name": "Antarctic Toothfish",
//     "scientificName": "Dissostichus mawsoni",
//     "conservationStatus": "NT",
//     "description": "Produces antifreeze proteins to survive in subzero waters",
//     "habitat": ["Antarctic continental shelf"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Dissostichus_mawsoni.jpg"
//   },
//   {
//     "name": "Blue Dragon Sea Slug",
//     "scientificName": "Glaucus atlanticus",
//     "conservationStatus": "LC",
//     "description": "Stores venom from its prey (Portuguese man o' war) for its own defense",
//     "habitat": ["Surface waters", "Open ocean"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Glaucus_atlanticus_001.jpg"
//   },
//   {
//     "name": "Atlantic Sturgeon",
//     "scientificName": "Acipenser oxyrinchus",
//     "conservationStatus": "EN",
//     "description": "Living fossil that can grow over 4m long and live 60 years",
//     "habitat": ["Estuaries", "Large rivers"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Acipenser_oxyrinchus.jpg"
//   },
//   {
//     "name": "Giant Tube Worm",
//     "scientificName": "Riftia pachyptila",
//     "conservationStatus": "LC",
//     "description": "Chemosynthetic organism that thrives in complete darkness near volcanic vents",
//     "habitat": ["Hydrothermal vents"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Riftia_pachyptila.jpg"
//   },
//   {
//     "name": "Harbor Porpoise",
//     "scientificName": "Phocoena phocoena",
//     "conservationStatus": "LC",
//     "description": "One of the smallest cetaceans with a distinctive triangular dorsal fin",
//     "habitat": ["Coastal waters", "Bays"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Phocoena_phocoena.jpg"
//   },
//   {
//     "name": "Banggai Cardinalfish",
//     "scientificName": "Pterapogon kauderni",
//     "conservationStatus": "EN",
//     "description": "Mouthbrooding fish endemic to a tiny Indonesian archipelago",
//     "habitat": ["Coral reefs", "Seagrass beds"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Pterapogon_kauderni.jpg"
//   },
//   {
//     "name": "Shortfin Mako Shark",
//     "scientificName": "Isurus oxyrinchus",
//     "conservationStatus": "EN",
//     "description": "Fastest shark species capable of bursts up to 74 km/h (46 mph)",
//     "habitat": ["Open ocean"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Isurus_oxyrinchus.jpg"
//   },
//   {
//     "name": "Giant Pacific Chiton",
//     "scientificName": "Cryptochiton stelleri",
//     "conservationStatus": "LC",
//     "description": "Largest chiton species with a leathery girdle covering its shell plates",
//     "habitat": ["Rocky intertidal zones"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Cryptochiton_stelleri.jpg"
//   },
//   {
//     "name": "Australian Ghost Shark",
//     "scientificName": "Callorhinchus milii",
//     "conservationStatus": "LC",
//     "description": "Chimaera species with a retractable sex organ on its forehead and electroreceptive snout",
//     "habitat": ["Continental shelves"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Callorhinchus_milii.jpg"
//   },
//   {
//     "name": "Pinecone Soldierfish",
//     "scientificName": "Myripristis murdjan",
//     "conservationStatus": "LC",
//     "description": "Nocturnal reef fish with large eyes and sharp spines that produce sounds when threatened",
//     "habitat": ["Coral reefs"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Myripristis_murdjan.jpg"
//   },
//   {
//     "name": "Wobbegong Shark",
//     "scientificName": "Orectolobidae",
//     "conservationStatus": "LC",
//     "description": "Bottom-dwelling shark with elaborate skin flaps for camouflage that can swallow prey as large as itself",
//     "habitat": ["Coral reefs", "Rocky bottoms"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Orectolobus_maculatus.jpg"
//   },
//   {
//     "name": "Yellow Boxfish",
//     "scientificName": "Ostracion cubicus",
//     "conservationStatus": "LC",
//     "description": "Juveniles are bright yellow cubes that become more rounded and blue as adults",
//     "habitat": ["Lagoon reefs"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Ostracion_cubicus.jpg"
//   },
//   {
//     "name": "Giant Isopod",
//     "scientificName": "Bathynomus giganteus",
//     "conservationStatus": "LC",
//     "description": "Deep-sea crustacean that can survive without food for 5 years and grows up to 50cm long",
//     "habitat": ["Abyssal plains"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Bathynomus_giganteus.jpg"
//   },
//   {
//     "name": "Pink See-Through Fantasia",
//     "scientificName": "Enypniastes eximia",
//     "conservationStatus": "LC",
//     "description": "Transparent deep-sea cucumber that swims using webbed fins and glows pink",
//     "habitat": ["Deep ocean"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Enypniastes_eximia.jpg"
//   },
//   {
//     "name": "Red-Lipped Batfish",
//     "scientificName": "Ogcocephalus darwini",
//     "conservationStatus": "LC",
//     "description": "Walks on modified pectoral fins and uses a lure on its head to attract prey",
//     "habitat": ["Sandy bottoms"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Ogcocephalus_darwini.jpg"
//   },
//   {
//     "name": "Splendid Garden Eel",
//     "scientificName": "Gorgasia preclara",
//     "conservationStatus": "LC",
//     "description": "Colonies of these eels resemble underwater flowers swaying in currents",
//     "habitat": ["Sandy slopes"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Gorgasia_preclara.jpg"
//   },
//   {
//     "name": "Tasselled Wobbegong",
//     "scientificName": "Eucrossorhinus dasypogon",
//     "conservationStatus": "NT",
//     "description": "Shark with elaborate skin flaps that mimic coral and can change color to match surroundings",
//     "habitat": ["Coral reefs"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Eucrossorhinus_dasypogon.jpg"
//   },
//   {
//     "name": "Colossal Squid",
//     "scientificName": "Mesonychoteuthis hamiltoni",
//     "conservationStatus": "LC",
//     "description": "Largest invertebrate on Earth with hooks on its tentacles and eyes the size of dinner plates",
//     "habitat": ["Antarctic waters"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Colossal_squid.jpg"
//   },
//   {
//     "name": "Peppermint Shrimp",
//     "scientificName": "Lysmata wurdemanni",
//     "conservationStatus": "LC",
//     "description": "Cleans parasites from fish and changes sex from male to hermaphrodite",
//     "habitat": ["Coral reefs"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Lysmata_wurdemanni.jpg"
//   },
//   {
//     "name": "Electric Ray",
//     "scientificName": "Torpedo californica",
//     "conservationStatus": "LC",
//     "description": "Can generate 45-volt electric shocks to stun prey and deter predators",
//     "habitat": ["Sandy bottoms"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Torpedo_californica.jpg"
//   },
//   {
//     "name": "Hoodwinker Sunfish",
//     "scientificName": "Mola tecta",
//     "conservationStatus": "DD",
//     "description": "Newly discovered sunfish species that evaded scientific detection until 2017",
//     "habitat": ["Temperate oceans"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Mola_tecta.jpg"
//   },
//   {
//     "name": "Purple-Striped Jelly",
//     "scientificName": "Chrysaora colorata",
//     "conservationStatus": "LC",
//     "description": "Jellyfish with vibrant purple bands that can grow up to 70cm in diameter",
//     "habitat": ["Coastal waters"],
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Chrysaora_colorata.jpg"
//   }

// ]

// const setSpecies = new Set(marineSpecies)
// const marineArray = [...setSpecies]

// async function seedSpecies(speciesData) {
//   try {
//     await Species.deleteMany();
//     await Species.insertMany(speciesData);
//     console.log(`Seeded ${speciesData.length} species`);
//   } catch (error) {
//     console.error('Seeding error:', error);
//   }
// }

// seedSpecies(marineArray)