// ============================================================
// Central image registry
// ============================================================

const base = (id: number, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

// ============================================================
// Landscapes & Heroes
// ============================================================

export const HERO_MOUNTAIN = base(34031086, 1920);
export const HERO_MOUNTAIN_ALT = '/phmu/ff.jpg';
export const HERO_COASTAL_ROCKS = '/phmu/kk.jpg';
export const HERO_SANDSTONE = base(21858632, 1920);
export const HERO_VOLCANIC = base(18199392, 1920);
export const HERO_STRATA = base(10081281, 1920);

// ============================================================
// Section / Page Images
// ============================================================

export const ABOUT_STORY = '/phmu/ABOUTSTORY.jpg';
export const ABOUT_FIELDWORK = base(5908677, 1200);
export const FACULTY_CAMPUS = '/phmu/min.jpg';
export const FACULTY_OUTCROP = base(10081281, 1200);
export const CONTACT_COAST = base(16668481, 1920);

// ============================================================
// Faculty Gallery
// ============================================================

export const FACULTY_GALLERY = [
  base(19786594, 800),
  base(18795070, 800),
  base(15263635, 800),
  base(15609350, 800),
];

// ============================================================
// ROCKS — Original Museum Images
// ============================================================

export const ROCK_IMAGES = {
  agglomerate: '/rocks/Agglomerate.jpg',
  amphibolite: '/rocks/Amphibolite.jpg',
  andesite: '/rocks/Andesite.jpg',
  arkose: '/rocks/Arkose.jpg',
  bandedGneiss: '/rocks/BandedGneiss.jpg',
  biotiteSchist: '/rocks/BiotiteSchist.jpg',
  bandedMarble: '/rocks/BandedMarble.jpg',
  chloriteSchist: '/rocks/ChloriteSchist.jpg',
  compactedSchist: '/rocks/CompactedSchist.jpg',
  concretionSandstone: '/rocks/ConcretionSandstone.jpg',
  curlySchist: '/rocks/CurlySchist.jpg',
  desertRose: '/rocks/DesertRose.jpg',
  dunite: '/rocks/Dunite.jpg',
  ferrousSandstone: '/rocks/FerrousSandstone.jpg',
  gabbro: '/rocks/Gabbro.jpg',
  granite: '/rocks/Granite.jpg',
  granodiorite: '/rocks/Granodiorite.jpg',
  graptoliticShale: '/rocks/GraptoliticShale.jpg',
  lapilliTuff: '/rocks/LapilliTuff.jpg',
  lavaFlowTypes: '/rocks/LavaFlowTypes.jpg',
  layeredGabbro: '/rocks/LayeredGabbro.jpg',
  Limestone: '/rocks/Limestone.jpg',
  microDiorite: '/rocks/MicroDiorite.jpg',
  microGranodiorite: '/rocks/MicroGranodiorite.jpg',
  mudstone: '/rocks/Mudstone.jpg',
  mylonite: '/rocks/Mylonite.jpg',
  oligomictConglomerate: '/rocks/OligomictConglomerate.jpg',
  pegmatiticGabbro: '/rocks/PegmatiticGabbro.jpg',
  phosphate: '/rocks/Phosphate.jpg',
  porphyriticAndesite: '/rocks/PorphyriticAndesite.jpg',
  porphyriticRhyolite: '/rocks/PorphyriticRhyolite.jpg',
  pyroxenite: '/rocks/Pyroxenite.jpg',
  serpentinite: '/rocks/Serpentinite.png',
  siltstone: '/rocks/Siltstone.jpg',
  spottedSlate: '/rocks/SpottedSlate.jpg',
  syenite: '/rocks/Syenite.png',
  trachyticAndesite: '/rocks/TrachyticAndesite.jpg',
  vesicularAndesite: '/rocks/VesicularAndesite.jpg',
  vesicularBasalt: '/rocks/VesicularBasalt.jpg',
  volcanicBomb: '/rocks/VolcanicBomb.jpg',
  whiteSandstone: '/rocks/WhiteSandstone.jpg',
  wabarMeteorite: '/highlights/wabarMeteorite.jpg',
};

// ============================================================
// ROCKS — Reference Images
// ============================================================

export const ROCK_GALLERY: Record<string, string[]> = {

  agglomerate: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  amphibolite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  andesite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  arkose: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  bandedGneiss: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  biotiteSchist: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  bandedMarble: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  chloriteSchist: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  compactedSchist: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  concretionSandstone: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  curlySchist: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  desertRose: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  dunite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  ferrousSandstone: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  gabbro: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  granite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  granodiorite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  graptoliticShale: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  lapilliTuff: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  lavaFlowTypes: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  layeredGabbro: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  Limestone: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  microDiorite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  microGranodiorite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  mudstone: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  mylonite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  oligomictConglomerate: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  pegmatiticGabbro: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  phosphate: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  porphyriticAndesite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  porphyriticRhyolite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  pyroxenite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  serpentinite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  siltstone: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  spottedSlate: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  syenite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  trachyticAndesite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  vesicularAndesite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  vesicularBasalt: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  volcanicBomb: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  whiteSandstone: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],
};

// ============================================================
// MINERALS — Original Museum Images
// ============================================================

export const MINERAL_IMAGES = {
  agate: '/minerals/Agate.jpg',
  apatiteQuartzVein: '/minerals/ApatiteQuartzVein.jpg',
  ApophylliteGreen: '/minerals/ApophylliteGreen.jpg',
  aquamarine: '/minerals/Aquamarine.jpg',
  barite: '/minerals/Barite.jpg',
  bauxite: '/minerals/Bauxite.jpg',
  beryl: '/minerals/Beryl.jpg',
  biotite: '/minerals/Biotite.jpg',
  calcite: '/minerals/Calcite.jpg',
  celestine: '/minerals/Celestine.jpg',
  chalcedony: '/minerals/Chalcedony.jpg',
  chalcopyrite: '/minerals/Chalcopyrite.jpg',
  chromite: '/minerals/Chromite.jpg',
  cinnabar: '/minerals/Cinnabar.jpg',
  cordierite: '/minerals/Cordierite.jpg',
  diamond: '/minerals/Diamond.jpg',
  dioptase: '/minerals/Dioptase.jpg',
  emerald: '/minerals/Emerald.jpg',
  erythrite: '/minerals/Erythrite.jpg',
  eucryptite: '/minerals/Eucryptite.jpg',
  fluorite: '/minerals/Fluorite.jpg',
  gypsum: '/minerals/Gypsum.jpg',
  halite: '/minerals/Halite.jpg',
  hematite: '/minerals/Hematite.jpg',
  lepidolite: '/minerals/Lepidolite.jpg',
  magnesite: '/minerals/Magnesite.jpg',
  malachite: '/minerals/Malachite.jpg',
  manganocalcite: '/minerals/Manganocalcite.jpg',
  massivePyrite: '/minerals/MassivePyrite.jpg',
  massiveOreSphaleriteStibnite:
    '/minerals/MassiveOreSphaleriteStibnite.jpg',
  nettunite: '/minerals/Nettunite.jpg',
  calciumPhosphate: '/minerals/Phosphate.jpg',
  prehnite: '/minerals/Prehnite.jpg',
  psilomelane: '/minerals/Psilomelane.jpg',
  pyrite: '/minerals/Pyrite.jpg',
  pyrrhotite: '/minerals/Pyrrhotite.jpg',
  quartzBearingGold: '/minerals/QuartzBearingGold.jpg',
  redCopper: '/minerals/RedCopper.jpg',
  rhodonite: '/minerals/Rhodonite.jpg',
  rubyCorundum: '/minerals/RubyCorundum.jpg',
  siderite: '/minerals/Siderite.jpg',
  citrine: '/minerals/Citrine.jpg',
  nativeSilver: '/minerals/NativeSilver.jpg',
  smithsonite: '/minerals/Smithsonite.jpg',
  sphaleriteWithWurtzite: '/minerals/SphaleriteWithWurtzite.jpg',
  stibnite: '/minerals/Stibnite.jpg',
  stilbite: '/minerals/Stilbite.jpg',
  sulfur: '/minerals/Sulfur.jpg',
  tigersEye: '/minerals/TigersEye.jpg',
  tourmaline: '/minerals/Tourmaline.jpg',
  travertine: '/minerals/Travertine.jpg',
  trona: '/minerals/Trona.jpg',
  vanadinite: '/minerals/Vanadinite.jpg',
  vesuvianite: '/minerals/Vesuvianite.jpg',
  wernerite: '/minerals/Wernerite.jpg',
  wolframite: '/minerals/Wolframite.jpg',
};

// ============================================================
// MINERALS — Reference Images
// ============================================================

export const MINERAL_GALLERY: Record<string, string[]> = {

  agate: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  apatiteQuartzVein: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  ApophylliteGreen: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  aquamarine: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  barite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  bauxite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  beryl: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  biotite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  calcite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  celestine: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  chalcedony: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  chalcopyrite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  chromite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  cinnabar: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  cordierite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  diamond: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  dioptase: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  emerald: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  erythrite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  eucryptite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  fluorite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  gypsum: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  halite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  hematite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  lepidolite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  magnesite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  malachite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  manganocalcite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  massivePyrite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  massiveOreSphaleriteStibnite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  nettunite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  calciumPhosphate: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  prehnite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  psilomelane: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  pyrite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  pyrrhotite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  quartzBearingGold: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  redCopper: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  rhodonite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  rubyCorundum: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  siderite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  citrine: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  nativeSilver: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  smithsonite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  sphaleriteWithWurtzite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  stibnite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  stilbite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  sulfur: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  tigersEye: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  tourmaline: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  travertine: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  trona: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  vanadinite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  vesuvianite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  wernerite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],

  wolframite: [
    '/phmu/ff.jpg',
    '/phmu/kk.jpg',
    '/phmu/ABOUTSTORY.jpg',
  ],
};

// ============================================================
// Museum Highlights
// ============================================================

export const FEATURED_IMAGES: Record<string, string> = {
  wabarMeteorite: '/featured/wabarMeteorite.jpg',
  ichthyosaurus: '/featured/ichthyosaurus.jpg',
};