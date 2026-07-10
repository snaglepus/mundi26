// All trip content, structured from the vault itinerary (2026-07-06 edition).
const img = (name) => `${import.meta.env.BASE_URL}images/${name}`

export const meta = {
  title: 'Mundi Mundi Bash 2026',
  subtitle: "The Outback Lads' Trip",
  tagline: 'Ten days. Three rigs. Eight blokes. Four thousand kilometres of outback NSW and SA - festival, opal mines, missile parks and the Murray River.',
  departISO: '2026-08-18T16:30:00+10:00',
  stats: [
    { value: '10', label: 'Days' },
    { value: '~4,000', label: 'Kilometres' },
    { value: '8', label: 'Lads' },
    { value: '3', label: 'Rigs' },
    { value: '17', label: 'Pubs' },
    { value: '21+', label: 'Acts' },
  ],
}

export const quickCards = [
  { num: '01', title: 'The Route', text: 'Sydney to Coober Pedy the long way - Mungo, the festival plains, a rocket range - and four ways home under group vote.', href: '#itinerary' },
  { num: '02', title: 'The Bash', text: 'Three days of music on the Mundi Mundi Plains. Teskey Brothers, John Butler, Jessica Mauboy and eighteen more.', href: '#day24' },
  { num: '03', title: 'The Map', text: 'Every stay, pub, fuel stop and lookout on one interactive map. Tap any pin to open it in Google Maps.', href: '#map' },
  { num: '04', title: 'The Vote', text: 'Murray Classic, Murray Heritage, Southern Gourmet or the Outback Express. Argue it out over a beer.', href: '#vote' },
]

export const crew = [
  { rig: 'Camper Van 1', people: ['Rob James', 'Marcus James', 'Christian James', 'Dennis Hodges'], icon: '🚐' },
  { rig: 'Camper Van 2', people: ['Kevin Forster', 'Keenan Forster'], icon: '🚐' },
  { rig: 'The Caravan', people: ['Barry Rallis', 'Marlon Rallis'], icon: '🏕️' },
]

export const ticketFlag = 'Tickets sorted: 8 confirmed and purchased, with camping spots AND VIP access provided by our good friend Marc Christowski. Beers are owed.'

// ---------------------------------------------------------------- festival
export const festival = {
  name: 'Mundi Mundi Bash 2026',
  dates: 'Thu 20 - Sat 22 August 2026',
  location: 'Belmont Station, Mundi Mundi Plains - 35 km north of Broken Hill, 9 km north of Silverton',
  url: 'https://mundimundibash.com.au',
  headliners: ['The Teskey Brothers', 'John Butler', 'Jessica Mauboy', 'Boy & Bear', 'Jon Stevens', 'Baby Animals'],
  lineup: ['The Whitlams', 'Tim Finn', 'Richard Clapton', 'Leo Sayer', 'Troy Cassar-Daley', 'Wendy Matthews', 'Chocolate Starfish', 'The Radiators', 'Shane Howard', 'Fanny Lumsden', '19-Twenty', 'Furnace and the Fundamentals', 'Hot Potato Band', 'Wes Carr', '50 Years of Fleetwood Mac'],
  facts: [
    { label: 'Tickets', value: '✅ 8 confirmed and purchased, with VIP access' },
    { label: 'Camping', value: 'Spots provided by our good friend Marc Christowski' },
    { label: 'House rule', value: 'Once on site, vehicles stay in the campgrounds until we leave Sunday' },
    { label: 'Set times', value: 'Drop on the Bash App - download before Sydney' },
    { label: 'Nights', value: '0-3°C on the plains. Warm gear is not optional.' },
  ],
}

// ---------------------------------------------------------------- itinerary
// Each day carries everything needed on the road: stops, pubs, route map,
// day soundtrack and a gallery for the morning hype.
export const days = [
  {
    id: 'day0',
    date: 'Tue 18 Aug',
    day: 'Day 0',
    title: 'The Great Escape',
    route: 'Muster near Brighton-le-Sands → the Hume → overnight stop',
    image: img('surveyor-general.jpg'),
    imageCaption: 'Surveyor General Inn, Berrima - est. 1835',
    km: '200–540 km',
    summary: 'Muster near Brighton-le-Sands and get moving the moment the convoy is assembled - the earlier we escape Sydney, the less traffic we sit in and the more daylight we have at the other end. Dinner at the oldest continuously licensed pub in Australia, then push down the Hume as far as the group dares.',
    stops: [
      { time: 'ASAP', name: 'Muster near Brighton-le-Sands (exact spot TBC)', desc: 'Meeting point, not a sightseeing stop: arrive fuelled, packed and ready to roll straight onto the M5 → Hume (M31). Target 4:30pm at the latest - every minute earlier is ten fewer stuck in Sydney traffic.' },
      { time: '6:30pm', name: 'Surveyor General Inn, Berrima', desc: "Est. 1835 - Australia's oldest continuously licensed hotel. Stone walls, open fire, proper pub food. The right first meal before the outback swallows the convoy." },
      { time: 'from 7:30pm', name: 'Overnight stop (group call)', desc: 'Four options below - Wagga preferred. All sealed either way.' },
    ],
    options: {
      title: 'Night 0 - where do we stop?',
      preferred: 'Wagga Wagga',
      rows: [
        { name: 'Goulburn', detail: '~200 km · arrive ~7:30pm. Easy night, full facilities. Discovery Holiday Park; Rocky Brewing Co for a nightcap.' },
        { name: 'Jugiong', detail: '~285 km · arrive ~8:30pm. The Sir George (1858, woodfired kitchen) is the best pub on the Hume. Caravan park on the Murrumbidgee.' },
        { name: 'Wagga Wagga', detail: '~460 km · arrive ~9:30pm. Big town, best dinner options, shortest Day 1. BIG4 on the river; Thirsty Crow brewery before 9pm.', preferred: true },
        { name: 'Hay (push)', detail: '~540 km · arrive ~10:30pm. Already in the outback, kitchens shut - eat en route. Waking up on the Hay Plain is the payoff.' },
      ],
    },
    notes: [
      'Two rules for Day 0: leave as early as humanly possible to beat Sydney traffic, and get to the overnight stop well ahead of time - checking in, levelling the caravan and finding dinner is all far easier in daylight.',
    ],
    pubs: ['Surveyor General Inn', 'Sir George'],
    playlists: ['day0'],
    routeMap: {
      gmaps: 'https://www.google.com/maps/dir/Brighton-Le-Sands+NSW/Berrima+NSW/Goulburn+NSW/Jugiong+NSW/Wagga+Wagga+NSW/Hay+NSW',
      path: [[-33.962, 151.158], [-34.489, 150.339], [-34.75, 149.72], [-34.84, 148.91], [-34.83, 148.325], [-35.07, 148.11], [-35.115, 147.369], [-34.75, 146.55], [-34.508, 144.851]],
      points: [
        { name: 'Muster point (near Brighton-le-Sands, TBC)', lat: -33.962, lon: 151.158 },
        { name: 'Berrima (dinner)', lat: -34.489, lon: 150.339 },
        { name: 'Goulburn (opt 1)', lat: -34.75, lon: 149.72 },
        { name: 'Jugiong (opt 2)', lat: -34.83, lon: 148.325 },
        { name: 'Wagga Wagga (preferred)', lat: -35.115, lon: 147.369 },
        { name: 'Hay (opt 4)', lat: -34.508, lon: 144.851 },
      ],
    },
    gallery: [
      { key: 'berrima-village.jpg', caption: 'Berrima village' },
      { key: 'surveyor-general.jpg', caption: 'Surveyor General Inn, 1835' },
      { key: 'big-merino.jpg', caption: 'The Big Merino, Goulburn' },
      { key: 'jugiong.jpg', caption: 'Jugiong on the Murrumbidgee' },
      { key: 'gundagai-bridge.jpg', caption: 'Prince Alfred Bridge, Gundagai' },
      { key: 'wagga-beach.jpg', caption: 'The Murrumbidgee at Wagga' },
      { key: 'dog-tuckerbox.jpg', caption: 'Dog on the Tuckerbox' },
    ],
  },
  {
    id: 'day1',
    date: 'Wed 19 Aug',
    day: 'Day 1',
    title: 'The Ancient Lake',
    route: 'Overnight stop → Hay → Balranald → Mungo NP',
    image: img('walls-of-china.jpg'),
    imageCaption: 'Walls of China, Mungo National Park',
    km: '170–580 km',
    summary: 'Across the dead-flat Hay Plain to a World Heritage lake bed holding 50,000 years of human history - and the best night sky of the trip.',
    stops: [
      { time: '7am', name: 'Depart', desc: 'Target Mungo by early-mid afternoon for the Walls of China in good light.' },
      { time: 'lunch', name: 'Hay', desc: 'Fuel and lunch - Bidgee or Commercial Hotel. Shear Outback (live shearing demos) and the Dunera Museum ($5 honesty box, quietly moving) if time allows.' },
      { time: '+1 hr', name: 'Balranald', desc: 'LAST fuel and phone coverage before the park. Fill every tank, download offline maps NOW. Crown Hotel (1882) for a stretch and a cold one.' },
      { time: '+80 km gravel', name: 'Arumpo Road', desc: 'Graded gravel, caravan-fine when dry at 60 km/h. Check conditions with the visitor centre after rain.' },
      { time: 'arvo', name: 'Walls of China', desc: 'The crescent lunette in late-afternoon light is extraordinary. 1 km boardwalk. Non-negotiable.' },
      { time: 'golden hour', name: 'Red Top Lookout + Mungo Woolshed', desc: 'Elevated panorama over the ancient lake bed, then the 1860s drop-log shearing shed (free, 15 min).' },
      { time: '10pm', name: 'THE night sky', desc: 'Moon sets ~9:30pm, then full dark - no artificial light for 100+ km. Milky Way core, both Magellanic Clouds, the Coalsack. Red torch, reclining chair, 0°C layers.' },
    ],
    notes: [
      'Mungo is World Heritage listed: Mungo Man and Mungo Lady, ~42,000 years old, are the oldest human remains found outside Africa.',
      'Caravan: paved section only (Walls viewing area, Woolshed, Red Top Lookout). The 70 km loop is corrugated dirt - campervans only, and only if dry.',
      'Stay: Mungo Main Campground (book via nationalparks.nsw.gov.au, $8/vehicle/day entry) or Mungo Lodge / Shearers’ Quarters for bed-sleepers.',
    ],
    links: [
      { label: 'Mungo Main Campground', url: 'https://www.nationalparks.nsw.gov.au/camping-and-accommodation/campgrounds/main-campground' },
      { label: 'Mungo Lodge', url: 'https://mungolodge.com.au' },
    ],
    pubs: ['Bidgee Hotel', 'Crown Hotel'],
    playlists: ['day1'],
    routeMap: {
      gmaps: 'https://www.google.com/maps/dir/Wagga+Wagga+NSW/Hay+NSW/Balranald+NSW/Mungo+National+Park',
      path: [[-35.115, 147.369], [-34.75, 146.55], [-34.508, 144.851], [-34.636, 143.562], [-34.1, 143.25], [-33.726, 143.066]],
      points: [
        { name: 'Wagga Wagga', lat: -35.115, lon: 147.369 },
        { name: 'Hay (fuel + lunch)', lat: -34.508, lon: 144.851 },
        { name: 'Balranald (last fuel + coverage)', lat: -34.636, lon: 143.562 },
        { name: 'Mungo Visitor Centre', lat: -33.726, lon: 143.066 },
      ],
    },
    gallery: [
      { key: 'hay-plain.jpg', caption: 'The Hay Plain' },
      { key: 'hay-town.jpg', caption: 'Lachlan Street, Hay' },
      { key: 'shearing-shed.jpg', caption: 'Inside a shearing shed' },
      { key: 'balranald.jpg', caption: 'Balranald, last stop before the gravel' },
      { key: 'walls-of-china.jpg', caption: 'Walls of China' },
      { key: 'mungo-lunette.jpg', caption: 'The Mungo lunette' },
      { key: 'mungo-boardwalk.jpg', caption: 'Red Top boardwalk' },
      { key: 'mungo-woolshed.jpg', caption: 'Mungo Woolshed, 1860s' },
      { key: 'red-kangaroo.jpg', caption: 'The locals at dusk' },
      { key: 'milky-way.jpeg', caption: 'What 10pm looks like out here' },
    ],
  },
  {
    id: 'day24',
    date: 'Thu 20 – Sat 22 Aug',
    day: 'Days 2–4',
    title: 'The Bash',
    route: 'Mungo → Pooncarie → Menindee → Broken Hill → Silverton → Belmont Station',
    image: img('hero-mundi-mundi.jpg'),
    imageCaption: 'The Mundi Mundi Plains',
    km: '~340 km, then minimal',
    summary: 'Thursday is the best pub crawl in western NSW, ending at the festival gates. And the gates matter: once the convoy is inside the campgrounds, vehicles cannot leave until we roll out on Sunday. Whatever sightseeing we want happens on the way in or on the way out.',
    stopsTitle: 'Thursday: getting there is half the point',
    stops: [
      { time: '9am', name: 'Pooncarie Hotel', desc: 'Est. 1893, population 60, verandah on the Darling. Cold beer at 9am if you want it - it’s a pub, they don’t judge. FUEL: last bowser before Broken Hill.' },
      { time: '11am', name: "Maiden's Hotel, Menindee", desc: 'Reputedly the second-oldest continuously operating pub in NSW. Burke and Wills staged their 1860 expedition here. Then the Menindee Lakes: drowned red gums, thousands of pelicans, total silence.' },
      { time: '1pm', name: 'Broken Hill stock-up', desc: 'Groceries (Woolies/Coles), bulk alcohol (Dan Murphy’s), more ice than seems sensible, cash, pharmacy - and every tank plus every jerry can. Last reliable fuel before the site.' },
      { time: '3:30pm', name: 'Silverton Hotel', desc: 'Real bullet holes, walls of memorabilia, donkeys that wander in for a drink. Mad Max 2 was filmed on these plains - the museum next door has two Interceptors. Two beers, not four; there’s driving left.' },
      { time: '5pm', name: 'Festival site', desc: '9 km north of Silverton. Set up camp before dark, cold beer, sunset over the plain. First acts Thursday evening. This is the last vehicle movement until Sunday.' },
    ],
    beyondTitle: 'Sightseeing: Thursday on the way in, Sunday on the way out',
    beyond: [
      { time: 'thu, way in', name: 'Bells Milk Bar + a Palace schooner', desc: 'Squeeze into the Broken Hill stock-up window: Australia’s oldest milk bar (1892, frozen in its 1956 fit-out), then one non-negotiable schooner under the Priscilla murals at the Palace.' },
      { time: 'sun, way out', name: 'Living Desert Sculptures', desc: '12 sandstone sculptures on a ridge, 15 min north of Broken Hill - catch them in morning light on the Sunday drive out. One of the best photo stops in outback NSW.' },
      { time: 'sun, way out', name: 'Line of Lode Miners Memorial', desc: 'Lookout over the city from the top of the slag heap; the memorial to 800+ dead miners is quietly devastating. A quick stop before the Barrier Highway.' },
    ],
    festival: true,
    notes: [
      'HARD RULE: once inside the festival campgrounds, vehicles cannot leave until departure on Sunday. No town runs, no lookout drives - plan supplies and sightseeing around it.',
      'Mundi Mundi Lookout is CLOSED for the duration of the event.',
      'Toilets, showers, food vendors and bars on site. BYO permitted in camp.',
      'Days 12-18°C, nights 0-3°C - warm gear is not optional. Dust masks or buffs for windy days. Water at 5L/person/day.',
      'Moon sets 10-11pm each night: late sets under a properly dark sky, Milky Way over the main stage.',
      'Set times drop on the Bash App - download it before leaving Sydney.',
    ],
    pubs: ['Pooncarie Hotel', "Maiden's Hotel", 'Palace Hotel', 'Silverton Hotel'],
    playlists: ['day2', 'day34'],
    bashPlaylists: true,
    routeMap: {
      gmaps: 'https://www.google.com/maps/dir/Mungo+National+Park/Pooncarie+NSW/Menindee+NSW/Broken+Hill+NSW/Silverton+NSW',
      path: [[-33.726, 143.066], [-33.387, 142.569], [-32.392, 142.419], [-31.956, 141.468], [-31.885, 141.226], [-31.617, 141.45]],
      points: [
        { name: 'Mungo NP', lat: -33.726, lon: 143.066 },
        { name: 'Pooncarie (fuel)', lat: -33.387, lon: 142.569 },
        { name: 'Menindee', lat: -32.392, lon: 142.419 },
        { name: 'Broken Hill (stock up)', lat: -31.956, lon: 141.468 },
        { name: 'Silverton', lat: -31.885, lon: 141.226 },
        { name: 'Festival site, Belmont Station', lat: -31.617, lon: 141.45 },
      ],
    },
    gallery: [
      { key: 'darling-river.jpg', caption: 'The Darling at Pooncarie' },
      { key: 'menindee-lakes.jpg', caption: 'Menindee Lakes from above' },
      { key: 'menindee-trees.jpg', caption: 'Drowned red gums, Menindee' },
      { key: 'pelicans.jpg', caption: 'The pelican welcome committee' },
      { key: 'palace-hotel.jpg', caption: 'Palace Hotel, Broken Hill' },
      { key: 'broken-hill-town.jpg', caption: 'Argent Street, Broken Hill' },
      { key: 'bells-milk-bar.jpg', caption: 'Bells Milk Bar, since 1892' },
      { key: 'line-of-lode.jpg', caption: 'Line of Lode over the city' },
      { key: 'living-desert.jpg', caption: 'Living Desert Sculptures' },
      { key: 'silverton-hotel.jpg', caption: 'Silverton Hotel' },
      { key: 'silverton-town.jpg', caption: 'Silverton' },
      { key: 'mad-max.jpg', caption: 'Mad Max 2 Museum' },
      { key: 'silverton-donkey.jpg', caption: 'A regular, apparently' },
      { key: 'mundi-lookout.jpg', caption: 'Mundi Mundi Lookout (closed during the Bash)' },
      { key: 'hero-mundi-mundi.jpg', caption: 'The plains' },
    ],
  },
  {
    id: 'day5',
    date: 'Sun 23 Aug',
    day: 'Day 5',
    title: 'Rockets Over the Border',
    route: 'Festival → Broken Hill → Barrier Hwy → Woomera',
    image: img('woomera-missiles.jpg'),
    imageCaption: 'Missile Park, Woomera',
    km: '~515 km · ~5.5 hrs',
    summary: 'West into South Australia - clocks back 30 minutes at the border - ending in a Cold War rocket-range town.',
    stops: [
      { time: '7am', name: 'Pack up + Broken Hill', desc: 'Fuel and coffee, then west on the Barrier Highway.' },
      { time: '+145 km', name: 'Olary Hotel', desc: 'Heritage-listed, population ~20, corrugated iron and characters. 15-minute stretch, cold lemon squash, onwards.' },
      { time: '11am SA', name: 'Peterborough', desc: 'Lunch in a genuine 1890s railway-town pub (Transcontinental or Royal). Steam Town museum for the rail nerds.' },
      { time: '+175 km', name: 'Port Augusta', desc: 'Fuel, all vehicles. The Crossroads of Australia. Arid Lands Botanic Garden for a free leg stretch with Flinders views.' },
      { time: '3:30pm', name: 'Woomera Missile Park', desc: 'Built 1947 for the Anglo-Australian rocket program, still an active defence area. Open-air rows of Cold War rockets and aircraft spread over two blocks: a Blue Streak, a Black Arrow, Sea Slug and Kestrel missiles, and a Canberra bomber out front. Free, self-guided.' },
      { time: '4pm', name: 'Heritage Centre + ten-pin bowling', desc: 'The story of Australia’s classified space race, free entry, open to 5pm. Same building: a ten-pin bowling alley left over from the American years, open Sunday afternoons 1-5pm. Eight blokes, two lanes, loser buys at the Eldo.' },
      { time: 'golden hour', name: 'Lake Hart', desc: '40 km up the Stuart Highway: a vast white salt lake with a roadside lookout. Cross the old Ghan line and walk out onto the crust as the sun drops. If the crew is cooked, it keeps: it’s tomorrow’s first stop anyway.' },
      { time: 'plan B', name: "Spud's Roadhouse, Pimba", desc: 'The classic outback roadhouse at the highway junction 7 km back: fuel, a bar and a proper roadhouse feed if the Eldo is heaving.' },
      { time: 'night', name: 'Eldo Hotel', desc: 'The only pub in town - bar from 3pm, dinner 5-8:45pm. Stay at Woomera Traveller’s Village. The oval behind the Eldo is a fine dark-sky spot after moonset.' },
    ],
    notes: ['Do not wander beyond the heritage precinct - the rest is operational defence land.'],
    pubs: ['Olary Hotel', 'Transcontinental Hotel', 'Eldo Hotel'],
    playlists: ['day5'],
    routeMap: {
      gmaps: 'https://www.google.com/maps/dir/Broken+Hill+NSW/Olary+SA/Peterborough+SA/Port+Augusta+SA/Woomera+SA',
      path: [[-31.617, 141.45], [-31.956, 141.468], [-32.08, 141.0], [-32.28, 140.33], [-32.58, 139.55], [-32.973, 138.84], [-32.492, 137.765], [-31.25, 136.81], [-31.199, 136.833]],
      points: [
        { name: 'Broken Hill (fuel)', lat: -31.956, lon: 141.468 },
        { name: 'Olary Hotel', lat: -32.28, lon: 140.33 },
        { name: 'Peterborough (lunch)', lat: -32.973, lon: 138.84 },
        { name: 'Port Augusta (fuel)', lat: -32.492, lon: 137.765 },
        { name: 'Woomera', lat: -31.199, lon: 136.833 },
      ],
    },
    gallery: [
      { key: 'barrier-highway.jpg', caption: 'The Barrier Highway' },
      { key: 'olary-hotel.jpg', caption: 'Olary Hotel, population ~20' },
      { key: 'peterborough-steam.jpg', caption: 'Steamtown, Peterborough' },
      { key: 'flinders-orbit.jpg', caption: 'The Flinders Ranges from orbit' },
      { key: 'wilpena.jpg', caption: 'Wilpena Pound on the horizon' },
      { key: 'woomera-missiles.jpg', caption: 'Missile Park' },
      { key: 'woomera-rocket.jpg', caption: 'Rocket-range hardware' },
    ],
  },
  {
    id: 'day6',
    date: 'Mon 24 Aug',
    day: 'Day 6',
    title: 'Underground',
    route: 'Woomera → Glendambo → Coober Pedy',
    image: img('breakaways.jpg'),
    imageCaption: 'The Breakaways at last light',
    km: '~370 km · ~4 hrs',
    summary: 'Dead-straight Stuart Highway to the opal capital of the world, where half the town lives underground - and tonight, so do you.',
    stops: [
      { time: '8:30am', name: 'Depart Woomera', desc: 'Stuart Highway north. Ochre scrub to the horizon, meditative. Queue the audiobooks.' },
      { time: '+40 km', name: 'Lake Hart', desc: 'If we skipped it last night: the salt-lake lookout is right off the highway. Twenty minutes, one team photo on the white crust, back on the road.' },
      { time: '+110 km', name: 'Glendambo', desc: 'FUEL, no exceptions - nothing for 250 km after. Photo stop: "Elevation 150 m, population 30 humans, 22,500 sheep."' },
      { time: '12:30pm', name: 'Coober Pedy', desc: '~70% of the world’s gem-quality opal; dugout homes to escape 45°C summers. Moonscape looks, frontier-town manners.' },
      { time: 'arvo', name: 'Pick 3 or 4', desc: 'Old Timers Mine (genuine 1916 hand-dug mine) · Umoona Opal Mine & Museum · the underground Serbian Orthodox church · Josephine’s joey feeding at 5:30pm · the Pitch Black spaceship prop just parked in the main street · Opal Fields Golf Club (zero grass, reciprocal rights at St Andrews - genuinely).' },
      { time: '5:30pm', name: 'The Breakaways at sunset', desc: '33 km north - mesa country that looks like Mars, colour bands firing at last light. You cross the Dingo Fence on the way: 5,614 km, the longest fence on earth.' },
      { time: 'dinner', name: 'Tom & Mary’s Taverna', desc: 'Underground Greek-Italian, inexplicably excellent 850 km from Adelaide. Opal Inn for the session beer; one drink in the Desert Cave bar because you can.' },
    ],
    notes: [
      'Underground beds (book NOW, August fills fast): Desert Cave Hotel (first pick - the world’s only underground international hotel), Lookout Cave Underground Motel, The Underground Motel, or Riba’s underground camping.',
      'If the group splits, put the caravan on a powered site (Riba’s or Stuart Range) and the rest underground.',
    ],
    links: [
      { label: 'Desert Cave Hotel', url: 'https://desertcave.com.au' },
      { label: 'Lookout Cave Motel', url: 'https://www.thelookoutcave.com' },
      { label: 'All Coober Pedy stays', url: 'https://www.cooberpedy.com/accommodation/' },
    ],
    pubs: ["Tom & Mary's Taverna", 'Opal Inn'],
    playlists: ['day6'],
    routeMap: {
      gmaps: 'https://www.google.com/maps/dir/Woomera+SA/Glendambo+SA/Coober+Pedy+SA',
      path: [[-31.199, 136.833], [-31.25, 136.81], [-30.97, 135.75], [-29.014, 134.754], [-29.0, 134.783]],
      points: [
        { name: 'Woomera', lat: -31.199, lon: 136.833 },
        { name: 'Glendambo (FUEL, no exceptions)', lat: -30.97, lon: 135.75 },
        { name: 'Coober Pedy', lat: -29.014, lon: 134.754 },
        { name: 'The Breakaways (sunset)', lat: -29.0, lon: 134.783 },
      ],
    },
    gallery: [
      { key: 'glendambo.jpg', caption: 'Glendambo' },
      { key: 'sturt-highway.jpg', caption: 'Crossing into SA' },
      { key: 'coober-pedy.jpg', caption: 'Coober Pedy' },
      { key: 'coober-pedy-underground.jpg', caption: 'An underground room' },
      { key: 'umoona.jpg', caption: 'Umoona Opal Mine' },
      { key: 'serbian-church.jpg', caption: 'The underground Serbian church' },
      { key: 'big-winch.jpg', caption: 'The Big Winch' },
      { key: 'opal.jpg', caption: 'The reason the town exists' },
      { key: 'breakaways.jpg', caption: 'The Breakaways' },
      { key: 'dingo-fence.jpg', caption: 'The Dingo Fence, 5,614 km' },
    ],
  },
]

// ------------------------------------------------------------ return options
export const returnOptions = [
  {
    id: 'opt1',
    name: 'Murray Classic',
    flag: 'PREFERRED',
    strap: 'Renmark · Mildura · Hay',
    image: img('murray-renmark.jpg'),
    signature: 'The Murray at golden hour',
    days: [
      { d: 'Day 7', text: 'Coober Pedy → Port Augusta → Burra → Morgan (first sight of the Murray) → Renmark (~820 km, 7am sharp). Cold beer on the Renmark Hotel verandah as the river glows - after six days of red dust the green water hits hard.' },
      { d: 'Day 8', text: 'Renmark → Mildura: lunch at Stefano’s at the Grand (book from Sydney) or Mildura Brewery → Balranald → Hay (~570 km). Night at the Bidgee Hotel - same pub as Night 0 if Hay was the stop, completely different stories.' },
      { d: 'Day 9', text: 'Hay → Wagga → Gundagai (Dog on the Tuckerbox) → Sydney (~540 km, home ~3pm). Earliest comfortable finish.' },
    ],
    stats: { day7: '820 km', total: '~1,930 km', home: '~3pm', risk: 'Low' },
  },
  {
    id: 'opt2',
    name: 'Murray Heritage',
    strap: 'Renmark · Swan Hill · Echuca',
    image: img('paddle-steamer.jpg'),
    signature: 'Bridge Hotel, Echuca (1853)',
    days: [
      { d: 'Day 7', text: 'Identical to Option 1: Coober Pedy → Renmark, 820 km.' },
      { d: 'Day 8', text: 'Renmark → Mildura (coffee only) → Swan Hill → Echuca (~470 km): the largest surviving inland river port in Australia, working paddle steamers off the 1850s wharf. If you sit in one Murray pub on this trip, it’s the Bridge Hotel.' },
      { d: 'Day 9', text: 'Echuca → Albury → the Hume → Sydney (~610 km, home ~3:30pm).' },
    ],
    stats: { day7: '820 km', total: '~1,900 km', home: '~3:30pm', risk: 'Low' },
  },
  {
    id: 'opt3',
    name: 'Southern Gourmet',
    strap: 'Adelaide · Barossa · Mildura',
    image: img('seppeltsfield.jpg'),
    signature: 'Barossa tawny + The Exeter',
    days: [
      { d: 'Day 7', text: 'Coober Pedy → Adelaide (~590 km, arrive ~3:30pm). Central Market before 5:30 close, then Rundle St: The Exeter - the soul of Adelaide pub culture.' },
      { d: 'Day 8', text: 'Adelaide → Barossa (Seppeltsfield’s 100-year-old tawny, Maggie Beer’s farm shop) → Clare (Sevenhill, the 1851 Jesuit winery) → Renmark → Mildura (~480 km). Stefano’s if bookable.' },
      { d: 'Day 9', text: 'Mildura → Balranald → Hay → Wagga → Sydney (~640 km, 7am start, home ~7pm). Longest final day.' },
    ],
    stats: { day7: '590 km', total: '~1,710 km', home: '~7pm', risk: 'Stefano’s + Adelaide sites' },
  },
  {
    id: 'opt4',
    name: 'Outback Express',
    strap: 'Wilcannia · Cobar · Dubbo · Bathurst',
    image: img('mount-panorama.jpg'),
    signature: 'A lap of Mount Panorama',
    days: [
      { d: 'Day 7', text: 'Coober Pedy → Port Augusta → Barrier Hwy → Broken Hill (~670 km, 6am start). Sleep inside the Priscilla murals at Mario’s Palace - the actual suite is bookable.' },
      { d: 'Day 8', text: 'Broken Hill → Wilcannia → Cobar (lunch under the Great Western’s cast-iron verandah, one of the longest in the Southern Hemisphere) → Nyngan (Big Bogan photo, mandatory) → Dubbo (~530 km). Beat 4pm and squeeze in the Western Plains Zoo.' },
      { d: 'Day 9', text: 'Dubbo → Orange brunch → Bathurst: a full lap of Mount Panorama (public road, 60 km/h, still counts) + National Motor Racing Museum → Blue Mountains → Sydney (~400 km, home ~4pm).' },
    ],
    stats: { day7: '670 km', total: '~1,600 km', home: '~4pm', risk: 'Mario’s Palace rooms' },
  },
]

export const voteComparison = [
  { label: 'Day 7 driving', values: ['820 km', '820 km', '590 km', '670 km'] },
  { label: 'Total Days 7-9', values: ['~1,930 km', '~1,900 km', '~1,710 km', '~1,600 km'] },
  { label: 'Home Thursday', values: ['~3pm', '~3:30pm', '~7pm', '~4pm'] },
  { label: 'Signature moment', values: ['Murray at golden hour', 'Bridge Hotel, Echuca', 'Barossa + The Exeter', 'Mt Panorama lap'] },
  { label: 'Booking risk', values: ['Low', 'Low', 'Stefano’s, Adelaide', 'Mario’s Palace'] },
  { label: 'New country', values: ['High', 'High', 'Highest', 'Day 7 partly repeats'] },
]

// ---------------------------------------------------------------- pubs
export const pubs = [
  { name: 'Surveyor General Inn', town: 'Berrima', day: 'Day 0', why: 'Oldest continuously licensed pub in Australia, 1835.', url: 'https://surveyorgeneralinn.com.au' },
  { name: 'Sir George', town: 'Jugiong', day: 'Day 0 (opt)', why: '1852, woodfired kitchen - a destination pub.', url: 'https://www.sirgeorge.com.au' },
  { name: 'Bidgee Hotel', town: 'Hay', day: 'Day 1 / 8', why: 'Gateway to the outback; the bookend pub.' },
  { name: 'Crown Hotel', town: 'Balranald', day: 'Day 1', why: '1882 - last cold beer before the gravel.' },
  { name: 'Pooncarie Hotel', town: 'Pooncarie', day: 'Day 2', why: '1893, on the Darling. 9am beer without judgement.' },
  { name: "Maiden's Hotel", town: 'Menindee', day: 'Day 2', why: "Burke and Wills' 1860 staging post; NSW's second-oldest pub.", url: 'https://www.thedarlingriverrun.com.au/directory/maidens-hotel/' },
  { name: 'Palace Hotel', town: 'Broken Hill', day: 'Days 2–4', why: 'Priscilla murals, rooftop, non-negotiable schooner.', url: 'https://www.thepalacehotelbrokenhill.com.au' },
  { name: 'Silverton Hotel', town: 'Silverton', day: 'Days 2–4', why: '35 people, 4 donkeys, bullet holes, Mad Max.', url: 'https://silvertonhotel.com.au' },
  { name: 'Olary Hotel', town: 'Olary SA', day: 'Day 5', why: 'Heritage-listed, population 20, cold beer in the void.' },
  { name: 'Transcontinental Hotel', town: 'Peterborough SA', day: 'Day 5', why: 'Steam-era schnitzel in an 1890s rail town.' },
  { name: 'Eldo Hotel', town: 'Woomera', day: 'Day 5', why: 'Only pub in a rocket-range town.', url: 'https://www.facebook.com/eldohotel/' },
  { name: "Tom & Mary's Taverna", town: 'Coober Pedy', day: 'Day 6', why: 'Underground Greek-Italian, inexplicably good.' },
  { name: 'Opal Inn', town: 'Coober Pedy', day: 'Day 6', why: 'The session pub.', url: 'https://www.opalinn.com.au' },
  { name: 'Hotel Renmark', town: 'Renmark', day: 'Day 7 (opts 1–2)', why: '1897 riverfront, community-owned since it opened.', url: 'https://www.hotelrenmark.com.au' },
  { name: 'Bridge Hotel', town: 'Echuca', day: 'Day 8 (opt 2)', why: '1853 - THE Murray River pub.' },
  { name: 'The Exeter', town: 'Adelaide', day: 'Day 7 (opt 3)', why: 'The soul of Adelaide pub culture.', url: 'https://theexeter.com.au' },
  { name: 'Great Western Hotel', town: 'Cobar', day: 'Day 8 (opt 4)', why: 'Longest cast-iron verandah in the Southern Hemisphere.' },
]

export const pubByName = Object.fromEntries(pubs.map((p) => [p.name, p]))

// ---------------------------------------------------------------- stars
export const moonNights = [
  { date: '18 Aug', loc: 'Night 0 stop', moon: '~37% crescent, sets ~9pm', quality: 'Good after moonset', phase: '🌒' },
  { date: '19 Aug', loc: 'Mungo NP', moon: '~43% crescent, sets ~9:30pm', quality: 'BEST OF TRIP - fully dark from 10pm', phase: '🌓', prime: true },
  { date: '20–22 Aug', loc: 'Mundi Mundi', moon: '48-60%, sets 10-11pm', quality: 'Very good late; Milky Way over the stage', phase: '🌓' },
  { date: '23 Aug', loc: 'Woomera', moon: '~70%, sets ~midnight', quality: 'Good after midnight', phase: '🌔' },
  { date: '24 Aug', loc: 'Coober Pedy', moon: '~80% gibbous', quality: 'Early evening at the Breakaways before moonrise', phase: '🌔' },
  { date: '25–27 Aug', loc: 'Return legs', moon: 'Approaching full', quality: 'Moonlit landscape instead', phase: '🌕' },
]

export const starKit = ['Red-light torch or headlamp (red mode)', '7×50 binoculars', 'Stellarium or SkySafari app', 'Reclining camp chair', 'Sleeping bag rated to 0°C']

// ---------------------------------------------------------------- logistics
export const fuelPlan = [
  { leg: 'Sydney → Mungo', fill: 'Sydney, Wagga/Hay, Balranald', note: 'Balranald is the last fuel AND coverage before Mungo' },
  { leg: 'Mungo → Festival', fill: 'Pooncarie, Broken Hill', note: 'Fill everything in Broken Hill incl. jerry cans' },
  { leg: 'Festival → Woomera', fill: 'Broken Hill, Peterborough, Port Augusta', note: '' },
  { leg: 'Woomera → Coober Pedy', fill: 'Glendambo', note: 'Nothing for 250 km after' },
  { leg: 'Return Day 7', fill: 'Coober Pedy, Port Augusta', note: 'Then per chosen route' },
]

export const logistics = [
  { icon: '📡', title: 'Comms', items: ['Telstra only - and nothing at Mungo, patchy at Coober Pedy', 'Offline maps (Google + Hema) downloaded before Balranald', 'UHF: channel 40 road, channel 18 for the convoy', 'Emergency 000; RFDS covers the whole route'] },
  { icon: '🌡️', title: 'Weather', items: ['Days 12-20°C, nights 0-5°C', 'Below zero possible at Mungo and the plains', 'Dust possible - masks or buffs', 'Sleeping bags rated to 0°C'] },
  { icon: '🚐', title: 'The Caravan', items: ['Arumpo Rd fine when dry, 60 km/h', 'Inside Mungo: paved section only', 'All roads from Day 5 onward are sealed highway', 'Wet fallback: bitumen via Euston-Wentworth (+150 km)'] },
  { icon: '⛽', title: 'Fuel Rules', items: ['Fill at every opportunity', '10L+ jerry can per vehicle', 'Glendambo: no exceptions', 'Coober Pedy: fill before the big Day 7 run'] },
]

export const packing = [
  { group: 'Sleep warm', icon: '🛏️', items: ['Sleeping bag rated to 0°C', 'Beanie + thermals', 'Extra blankets', 'Hot water bottle (no shame)'] },
  { group: 'Dust + sun', icon: '🕶️', items: ['Dust mask or buff', 'Sunscreen', 'Wide-brim hat', 'Sunnies'] },
  { group: 'Camp', icon: '🏕️', items: ['Camp chairs', 'Shade structure', 'Headlamp (red mode)', 'Portable chargers', 'Camp table'] },
  { group: 'Festival', icon: '🎸', items: ['Earplugs (sleep insurance)', 'Gumboots if rain forecast', 'Flag/totem to find camp', 'Cash for vendors'] },
  { group: 'Supplies', icon: '🧊', items: ['Water: 5L/person/day', 'More ice than seems sensible', 'Jerry can per vehicle', 'First-aid kit', 'Basic tools + tyre gear'] },
  { group: 'Sky', icon: '🔭', items: ['7×50 binoculars', 'Star app installed', 'Red-light torch', 'Reclining chair'] },
]

export const bookings = [
  { item: 'Festival tickets × 8', status: 'done', note: 'Confirmed and purchased, with VIP access', url: 'https://mundimundibash.com.au' },
  { item: 'Camping spots at the Bash', status: 'done', note: 'Provided by Marc Christowski - beers owed' },
  { item: 'Camper vans × 2', status: 'urgent', note: 'Book NOW for 18-27 Aug', url: 'https://www.britz.com/au' },
  { item: 'Mungo Main Camp sites', status: 'todo', note: 'Night of 19 Aug', url: 'https://www.nationalparks.nsw.gov.au/camping-and-accommodation/campgrounds/main-campground' },
  { item: 'Desert Cave Hotel (or Lookout Cave)', status: 'priority', note: 'Night of 24 Aug - August fills fast', url: 'https://desertcave.com.au' },
  { item: "Woomera Traveller's Village", status: 'todo', note: 'Night of 23 Aug - phone', url: 'https://www.facebook.com/eldohotel/' },
  { item: 'Return-route accommodation', status: 'todo', note: 'After the vote' },
  { item: "Stefano's Mildura", status: 'todo', note: 'If options 1 or 3 win - book direct' },
  { item: 'Bash App download', status: 'todo', note: 'Before departure - set times live here' },
]

// ---------------------------------------------------------------- playlists
export const playlistMeta = [
  { key: 'day0', title: 'Hume Highway Send-Off', vibe: 'Leaving town at 4:30pm on a Tuesday. Traffic, then open road, then the first pub.' },
  { key: 'day1', title: 'Hay Plain to the Ancient Lake', vibe: 'The land flattens, the sky takes over, and the day ends on a 42,000-year-old lake bed under the Milky Way.' },
  { key: 'day2', title: 'Pub Crawl to the Plains', vibe: 'Pooncarie at 9am, Menindee at 11, Broken Hill by 1, Silverton by 4, festival gates by 5. Pace yourselves.' },
  { key: 'day34', title: 'The Bash Warm-Up', vibe: 'The 2026 lineup, one banger each, so everyone knows the words before the real thing.' },
  { key: 'day5', title: 'Rockets Over the Border', vibe: 'Barrier Highway west, clocks back 30 minutes, Cold War missiles by mid-afternoon.' },
  { key: 'day6', title: 'Underground', vibe: 'The Stuart Highway to the opal capital. Half the town lives below the surface; tonight so do you.' },
  { key: 'day79', title: 'The Murray Run Home', vibe: 'Red dust behind, green river ahead, Sydney by Thursday. The comedown album.' },
]

export const playlistTitle = Object.fromEntries(playlistMeta.map((p) => [p.key, p.title]))

export const bashPlaylists = ['0x9sdCsFo3kbY7uiwmrbWA', '1ohBGNijqrNDhc4MvZqJDs', '4eHFHQLaLFAuTWHRSbk86n', '5lDOt8ph1h6SXExzNL9uXh', '6T2zNb7ebeb6bHF0zUHyg1']

// ---------------------------------------------------------------- gallery
export const gallery = [
  { src: img('hero-mundi-mundi.jpg'), caption: 'The road to the plains' },
  { src: img('walls-of-china.jpg'), caption: 'Walls of China, Mungo' },
  { src: img('mungo-lunette.jpg'), caption: 'Lake Mungo lunette' },
  { src: img('hay-plain.jpg'), caption: 'Hay Plain sunset' },
  { src: img('menindee-lakes.jpg'), caption: 'Menindee Lakes' },
  { src: img('menindee-trees.jpg'), caption: 'Drowned red gums, Menindee' },
  { src: img('pelicans.jpg'), caption: 'Pelicans on the lakes' },
  { src: img('living-desert.jpg'), caption: 'Living Desert Sculptures' },
  { src: img('palace-hotel.jpg'), caption: 'Palace Hotel, Broken Hill' },
  { src: img('silverton-hotel.jpg'), caption: 'Silverton Hotel' },
  { src: img('mad-max.jpg'), caption: 'Mad Max 2 Museum, Silverton' },
  { src: img('mundi-lookout.jpg'), caption: 'Mundi Mundi Lookout' },
  { src: img('woomera-rocket.jpg'), caption: 'Woomera rocket range' },
  { src: img('flinders-orbit.jpg'), caption: 'The Flinders Ranges from orbit' },
  { src: img('coober-pedy.jpg'), caption: 'Coober Pedy' },
  { src: img('serbian-church.jpg'), caption: 'Underground Serbian Orthodox church' },
  { src: img('coober-pedy-underground.jpg'), caption: 'Underground room, Coober Pedy' },
  { src: img('opal.jpg'), caption: 'Australian opal' },
  { src: img('breakaways.jpg'), caption: 'The Breakaways' },
  { src: img('dingo-fence.jpg'), caption: 'The Dingo Fence - 5,614 km' },
  { src: img('red-kangaroo.jpg'), caption: 'Red kangaroos at dusk' },
  { src: img('emus.jpg'), caption: 'Locals' },
  { src: img('silverton-donkey.jpg'), caption: 'A Silverton regular' },
  { src: img('murray-renmark.jpg'), caption: 'The Murray at golden hour' },
  { src: img('paddle-steamer.jpg'), caption: 'Paddle steamers at Echuca' },
  { src: img('echuca-wharf2.jpg'), caption: 'Echuca wharf through the red gums' },
  { src: img('murray-echuca.jpg'), caption: 'Murray River at Echuca' },
  { src: img('swan-hill.jpg'), caption: 'PS Gem, Swan Hill' },
  { src: img('seppeltsfield.jpg'), caption: 'Barossa Valley' },
  { src: img('clare-valley.jpg'), caption: 'Clare Valley, Sevenhill' },
  { src: img('adelaide-market.jpg'), caption: 'Adelaide Central Market' },
  { src: img('burra.jpg'), caption: 'Burra Monster Mine' },
  { src: img('wilcannia.jpg'), caption: 'Wilcannia sandstone' },
  { src: img('cobar.jpg'), caption: 'Great Western Hotel, Cobar' },
  { src: img('big-bogan.jpg'), caption: 'The Big Bogan, Nyngan' },
  { src: img('mount-panorama.jpg'), caption: 'Mount Panorama, Bathurst' },
  { src: img('blue-mountains.jpg'), caption: 'Blue Mountains, nearly home' },
  { src: img('dog-tuckerbox.jpg'), caption: 'Dog on the Tuckerbox, Gundagai' },
  { src: img('milky-way.jpeg'), caption: 'The other main stage' },
]

// return-route polylines (lat, lon) for options missing from the KML
export const returnRoutePaths = {
  opt1: [[-29.013, 134.754], [-30.97, 135.75], [-31.25, 136.81], [-32.492, 137.765], [-33.205, 138.604], [-33.674, 138.928], [-34.033, 139.668], [-34.174, 140.747], [-34.185, 142.162], [-34.636, 143.562], [-34.508, 144.851], [-34.75, 146.55], [-35.115, 147.369], [-35.07, 148.11], [-34.84, 148.91], [-34.75, 149.72], [-33.96, 151.155]],
  opt2: [[-29.013, 134.754], [-30.97, 135.75], [-31.25, 136.81], [-32.492, 137.765], [-33.205, 138.604], [-33.674, 138.928], [-34.033, 139.668], [-34.174, 140.747], [-34.185, 142.162], [-34.58, 142.77], [-35.338, 143.554], [-36.129, 144.752], [-36.03, 146.0], [-36.081, 146.916], [-35.07, 148.11], [-34.84, 148.91], [-34.75, 149.72], [-33.96, 151.155]],
  opt3: [[-29.013, 134.754], [-30.97, 135.75], [-31.25, 136.81], [-32.492, 137.765], [-33.19, 138.02], [-34.928, 138.6], [-34.49, 138.913], [-33.833, 138.611], [-34.033, 139.668], [-34.174, 140.747], [-34.185, 142.162], [-34.636, 143.562], [-34.508, 144.851], [-35.115, 147.369], [-34.75, 149.72], [-33.96, 151.155]],
  opt4: [[-29.013, 134.754], [-30.97, 135.75], [-31.25, 136.81], [-32.492, 137.765], [-32.973, 138.84], [-32.58, 139.55], [-32.28, 140.33], [-31.956, 141.468], [-31.558, 143.378], [-31.498, 145.84], [-31.563, 147.196], [-32.243, 148.605], [-33.283, 149.101], [-33.42, 149.577], [-33.48, 150.157], [-33.71, 150.31], [-33.96, 151.155]],
}

export const imageFor = img
