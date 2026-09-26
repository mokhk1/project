// Central registry of verified geological photography from Pexels.
// Every ID here has been confirmed to return HTTP 200 from the Pexels CDN.
// Format: https://images.pexels.com/photos/{ID}/pexels-photo-{ID}.jpeg

const base = (id: number, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

// Landscapes & heroes
export const HERO_MOUNTAIN = base(34031086, 1920);
export const HERO_MOUNTAIN_ALT = "/phmu/ff.jpg";
export const HERO_COASTAL_ROCKS ="/phmu/kk.jpg";
export const HERO_SANDSTONE = base(21858632, 1920);
export const HERO_VOLCANIC = base(18199392, 1920);
export const HERO_STRATA = base(10081281, 1920);

// Section / page imagery
export const ABOUT_STORY = "/phmu/ABOUTSTORY.jpg";
export const ABOUT_FIELDWORK = base(5908677, 1200); // geologist fieldwork
export const FACULTY_CAMPUS = "/phmu/min.jpg";
export const FACULTY_OUTCROP = base(10081281, 1200); // rock outcrop strata
export const CONTACT_COAST = base(16668481, 1920); // coastal rock formations

// Faculty gallery (geological field imagery)
export const FACULTY_GALLERY = [
  base(19786594, 800),
  base(18795070, 800),
  base(15263635, 800),
  base(15609350, 800),
];

// Rocks — each specimen gets a geologically appropriate photo
export const ROCK_IMAGES = {
  agglomerate: "/rocks/Agglomerate.jpg",
  amphibolite: "/rocks/Amphibolite.jpg",
  andesite: "/rocks/Andesite.jpg",
  arkose: "/rocks/Arkose.jpg",
  bandedGneiss: "/rocks/BandedGneiss.jpg",
  biotiteSchist: "/rocks/BiotiteSchist.jpg",
  bandedMarble: "/rocks/BandedMarble.jpg",
  chloriteSchist: "/rocks/ChloriteSchist.jpg",
  compactedSchist: "/rocks/CompactedSchist.jpg",
  concretionSandstone: "/rocks/ConcretionSandstone.jpg",
  curlySchist: "/rocks/CurlySchist.jpg",
  desertRose: "/rocks/DesertRose.jpg",
  dunite: "/rocks/Dunite.jpg",
  ferrousSandstone: "/rocks/FerrousSandstone.jpg",
  gabbro: "/rocks/Gabbro.jpg",
  granite: "/rocks/Granite.jpg",
  granodiorite: "/rocks/Granodiorite.jpg",
  graptoliticShale: "/rocks/GraptoliticShale.jpg",
  lapilliTuff: "/rocks/LapilliTuff.jpg",
  lavaFlowTypes: "/rocks/LavaFlowTypes.jpg",
  layeredGabbro: "/rocks/LayeredGabbro.jpg",
  Limestone: "/rocks/Limestone.jpg",
  microDiorite: "/rocks/MicroDiorite.jpg",
  microGranodiorite: "/rocks/MicroGranodiorite.jpg",
  mudstone: "/rocks/Mudstone.jpg",
  mylonite: "/rocks/Mylonite.jpg",
  oligomictConglomerate: "/rocks/OligomictConglomerate.jpg",
  pegmatiticGabbro: "/rocks/PegmatiticGabbro.jpg",
  phosphate: "/rocks/Phosphate.jpg",
  porphyriticAndesite: "/rocks/PorphyriticAndesite.jpg",
  porphyriticRhyolite: "/rocks/PorphyriticRhyolite.jpg",
  pyroxenite: "/rocks/Pyroxenite.jpg",
  serpentinite: "/rocks/Serpentinite.png",
  siltstone: "/rocks/Siltstone.jpg",
  spottedSlate: "/rocks/SpottedSlate.jpg",
  syenite: "/rocks/Syenite.png",
  trachyticAndesite: "/rocks/TrachyticAndesite.jpg",
  vesicularAndesite: "/rocks/VesicularAndesite.jpg",
  vesicularBasalt: "/rocks/VesicularBasalt.jpg",
  volcanicBomb: "/rocks/VolcanicBomb.jpg",
  whiteSandstone: "/rocks/WhiteSandstone.jpg",
  wabarMeteorite: "/highlights/wabarMeteorite.jpg"
};

// Rock gallery extras (additional angles / related geology)
export const ROCK_GALLERY: Record<string, string[]> = {

};

// Minerals — each specimen gets a geologically appropriate photo
export const MINERAL_IMAGES = {
  agate: "/minerals/Agate.jpg",
  apatiteQuartzVein: "/minerals/ApatiteQuartzVein.jpg",
  ApophylliteGreen: "/minerals/ApophylliteGreen.jpg",
  aquamarine: "/minerals/Aquamarine.jpg",
  barite: "/minerals/Barite.jpg",
  bauxite: "/minerals/Bauxite.jpg",
  beryl: "/minerals/Beryl.jpg",
  biotite: "/minerals/Biotite.jpg",
  calcite: "/minerals/Calcite.jpg",
  celestine: "/minerals/Celestine.jpg",
  chalcedony: "/minerals/Chalcedony.jpg",
  chalcopyrite: "/minerals/Chalcopyrite.jpg",
  chromite: "/minerals/Chromite.jpg",
  cinnabar: "/minerals/Cinnabar.jpg",
  cordierite: "/minerals/Cordierite.jpg",
  diamond: "/minerals/Diamond.jpg",
  dioptase: "/minerals/Dioptase.jpg",
  emerald: "/minerals/Emerald.jpg",
  erythrite: "/minerals/Erythrite.jpg",
  eucryptite: "/minerals/Eucryptite.jpg",
  fluorite: "/minerals/Fluorite.jpg",
  gypsum: "/minerals/Gypsum.jpg",
  halite: "/minerals/Halite.jpg",
  hematite: "/minerals/Hematite.jpg",
  lepidolite: "/minerals/Lepidolite.jpg",
  magnesite: "/minerals/Magnesite.jpg",
  malachite: "/minerals/Malachite.jpg",
  manganocalcite: "/minerals/Manganocalcite.jpg",
  massivePyrite: "/minerals/MassivePyrite.jpg",
  massiveOreSphaleriteStibnite: "/minerals/MassiveOreSphaleriteStibnite.jpg",
  nettunite: "/minerals/Nettunite.jpg",
  calciumPhosphate: "/minerals/Phosphate.jpg",
  prehnite: "/minerals/Prehnite.jpg",
  psilomelane: "/minerals/Psilomelane.jpg",
  pyrite: "/minerals/Pyrite.jpg",
  pyrrhotite: "/minerals/Pyrrhotite.jpg",
  quartzBearingGold: "/minerals/QuartzBearingGold.jpg",
  redCopper: "/minerals/RedCopper.jpg",
  rhodonite: "/minerals/Rhodonite.jpg",
  rubyCorundum: "/minerals/RubyCorundum.jpg",
  siderite: "/minerals/Siderite.jpg",
  citrine: "/minerals/Citrine.jpg",
  nativeSilver: "/minerals/NativeSilver.jpg",
  smithsonite: "/minerals/Smithsonite.jpg",
  sphaleriteWithWurtzite: "/minerals/SphaleriteWithWurtzite.jpg",
  stibnite: "/minerals/Stibnite.jpg",
  stilbite: "/minerals/Stilbite.jpg",
  sulfur: "/minerals/Sulfur.jpg",
  tigersEye: "/minerals/TigersEye.jpg",
  tourmaline: "/minerals/Tourmaline.jpg",
  travertine: "/minerals/Travertine.jpg",
  trona: "/minerals/Trona.jpg",
  vanadinite: "/minerals/Vanadinite.jpg",
  vesuvianite: "/minerals/Vesuvianite.jpg",
  wernerite: "/minerals/Wernerite.jpg",
  wolframite: "/minerals/Wolframite.jpg",
};

// Mineral gallery extras
export const MINERAL_GALLERY: Record<string, string[]> = {
  agate: ['/minerals/Agate.jpg'],
  apatiteQuartzVein: ['/minerals/ApatiteQuartzVein.jpg'],
  ApophylliteGreen: ['/minerals/ApophylliteGreen.jpg'],
  aquamarine: ['/minerals/Aquamarine.jpg'],
  barite: ['/minerals/Barite.jpg'],
  pyrite: ['/minerals/Pyrite.jpg']
};

// Museum Highlights — Featured specimens and iconic exhibit};
export const FEATURED_IMAGES: Record<string, string> = {
  wabarMeteorite: '/featured/wabarMeteorite.jpg',
  ichthyosaurus: '/featured/ichthyosaurus.jpg'
};