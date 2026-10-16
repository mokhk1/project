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
  graniteCollection: '/rocks/Granite.jpg',
  granodiorite: '/rocks/Granodiorite.jpg',
  graptoliticShale: '/rocks/GraptoliticShale.jpg',
  lapilliTuff: '/rocks/LapilliTuff.jpg',
  lavaFlowTypes: '/rocks/lavaFlowTypes.jpg',
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
    '/rocks/agglomerate-3.png',
    '/rocks/Agglomerate-2.png',
    '/rocks/Agglomerate-1.png',
  ],

  amphibolite: [
    '/rocks/Amphibolite-1.png',
    '/rocks/Amphibolite-3.png',
    '/rocks/Amphibolite-2.png',
  ],

  andesite: [
    '/rocks/Andesite-1.webp',
    '/rocks/Andesite-3.png',
    '/rocks/Andesite-2.png',
  ],

  arkose: [
    '/rocks/Arkose-1.png',
    '/rocks/Arkose-2.png',
    '/rocks/Arkose-3.png',
  ],

  bandedGneiss: [
    '/rocks/bandedGneiss-1.png',
    '/rocks/bandedGneiss-3.png',
    '/rocks/bandedGneiss-2.png',
  ],

  biotiteSchist: [
    '/rocks/BiotiteSchist-1.jpg',
    '/rocks/BiotiteSchist-2.png',
    '/rocks/BiotiteSchist-3.jpg',
  ],

  bandedMarble: [
    '/rocks/bandedMarble-1.jpg',
    '/rocks/bandedMarble-2.jpg',
    '/rocks/bandedMarble-3.jpg',
  ],

  chloriteSchist: [
    '/rocks/chloriteSchist-1.jpg',
    '/rocks/chloriteSchist-2.jpg',
    '/rocks/chloriteSchist-3.jpg',
  ],

  compactedSchist: [
    '/rocks/compactedSchist-1.jpg',
    '/rocks/compactedSchist-2.webp',
    '/rocks/compactedSchist-3.jpg',
  ],

  concretionSandstone: [
    '/rocks/concretionSandstone-1.jpg',
    '/rocks/concretionSandstone-2.jpg',
    '/rocks/concretionSandstone-3.jpeg',
  ],

  curlySchist: [
    '/rocks/curlySchist-1.jpg',
    '/rocks/curlySchist-2.jpg',
    '/rocks/curlySchist-3.jpg',
  ],

  desertRose: [
    '/rocks/desertRose-1.jpg',
    '/rocks/desertRose-2.jpg',
    '/rocks/desertRose-3.jpeg',
  ],

  dunite: [
    '/rocks/dunite-1.jpg',
    '/rocks/dunite-2.jpg',
    '/rocks/dunite-3.jpg',
  ],

  ferrousSandstone: [
    '/rocks/ferrousSandstone-1.jpg',
    '/rocks/ferrousSandstone-2.jpg',
    '/rocks/ferrousSandstone-3.jpg',
  ],

  gabbro: [
    '/rocks/gabbro-1.webp',
    '/rocks/gabbro-2.jpg',
    '/rocks/gabbro-3.png',
  ],

  granites: [
    '/rocks/granite-1.jpg',
    '/rocks/granite-2.jpeg',
    '/rocks/granite-3.png',
  ],

  granodiorite: [
    '/rocks/granodiorite-1.jpg',
    '/rocks/granodiorite-2.webp',
    '/rocks/granodiorite-3.png',
  ],

  graptoliticShale: [
    '/rocks/graptoliticShale-1.jpg',
    '/rocks/graptoliticShale-2.jpg',
    '/rocks/graptoliticShale-3.webp',
  ],

  lapilliTuff: [
    '/rocks/lapilliTuff-1.jpg',
    '/rocks/lapilliTuff-2.jpg',
    '/rocks/lapilliTuff-3.png',
  ],

  lavaFlowTypes: [
    '/rocks/lavaFlowTypes-1.jpg',
    '/rocks/lavaFlowTypes-2.jpg',
    '/rocks/lavaFlowTypes-3.jpg',
  ],

  layeredGabbro: [
    '/rocks/layeredGabbro-1.jpg',
    '/rocks/layeredGabbro-2.jpg',
    '/rocks/layeredGabbro-3.png',
  ],

  limestone: [
    '/rocks/limestone-1.webp',
    '/rocks/limestone-2.jpg',
    '/rocks/limestone-3.png',
  ],

  microDiorite: [
    '/rocks/microDiorite-1-1.png',
    '/rocks/microDiorite-2.png',
    '/rocks/microDiorite-3.png',
  ],

  microGranodiorite: [
    '/rocks/microGranodiorite-1.png',
    '/rocks/microGranodiorite-2.png',
    '/rocks/microGranodiorite-3.png',
  ],

  mudstone: [
    '/rocks/mudstone-1.png',
    '/rocks/mudstone-2.png',
    '/rocks/mudstone-3.png',
  ],

  mylonite: [
    '/rocks/mylonite-1.png',
    '/rocks/mylonite-2.png',
    '/rocks/mylonite-3.png',
  ],

  oligomictConglomerate: [
    '/rocks/oligomictConglomerate-1.png',
    '/rocks/oligomictConglomerate-2.png',
    '/rocks/oligomictConglomerate-3.png',
  ],

  pegmatiticGabbro: [
    '/rocks/pegmatiticGabbro-1.png',
    '/rocks/pegmatiticGabbro-2.png',
    '/rocks/pegmatiticGabbro-3.png',
  ],

  phosphate: [
    '/rocks/phosphate-1.png',
    '/rocks/phosphate-2.png',
    '/rocks/phosphate-3.png',
  ],

  porphyriticAndesite: [
    '/rocks/porphyriticAndesite-1.png',
    '/rocks/porphyriticAndesite-2.png',
    '/rocks/porphyriticAndesite-3.png',
  ],

  porphyriticRhyolite: [
    '/rocks/porphyriticRhyolite-1.png',
    '/rocks/porphyriticRhyolite-2.png',
    '/rocks/porphyriticRhyolite-3.png',
  ],

  pyroxenite: [
    '/rocks/pyroxenite-1.png',
    '/rocks/pyroxenite-2.png',
    '/rocks/pyroxenite-3.png',
  ],

  serpentinite: [
    '/rocks/serpentinite-1.png',
    '/rocks/serpentinite-2.png',
    '/rocks/serpentinite-3.png',
  ],

  siltstone: [
    '/rocks/siltstone-1.png',
    '/rocks/siltstone-2.png',
    '/rocks/siltstone-3.png',
  ],

  spottedSlate: [
    '/rocks/spottedSlate-1.png',
    '/rocks/spottedSlate-2.png',
    '/rocks/spottedSlate-3.png',
  ],

  syenite: [
    '/rocks/syenite-1.png',
    '/rocks/syenite-2.png',
    '/rocks/syenite-3.png',
  ],

  trachyticAndesite: [
    '/rocks/trachyticAndesite-1.png',
    '/rocks/trachyticAndesite-2.png',
    '/rocks/trachyticAndesite-3.png',
  ],

  vesicularAndesite: [
    '/rocks/vesicularAndesite-1.png',
    '/rocks/vesicularAndesite-2.png',
    '/rocks/vesicularAndesite-3.png',
  ],

  vesicularBasalt: [
    '/rocks/vesicularBasalt-1.png',
    '/rocks/vesicularBasalt-2.png',
    '/rocks/vesicularBasalt-3.png',
  ],

  volcanicBomb: [
    '/rocks/volcanicBomb-1.png',
    '/rocks/volcanicBomb-2.png',
    '/rocks/volcanicBomb-3.png',
  ],

  whiteSandstone: [
    '/rocks/whiteSandstone-1.png',
    '/rocks/whiteSandstone-2.png',
    '/rocks/whiteSandstone-3.png',
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
  quartz: '/minerals/Quartz.jpg',
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
  quartz: [
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