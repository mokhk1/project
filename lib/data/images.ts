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
    '/rocks/Agglomerate-1.webp',
    '/rocks/Agglomerate-2.jpg',
    '/rocks/Agglomerate-3.webp',
  ],

  amphibolite: [
    '/rocks/Amphibolite-1.jpg',
    '/rocks/Amphibolite-2.png',
    '/rocks/Amphibolite-3.jpg',
  ],

  andesite: [
    '/rocks/Andesite-1.webp',
    '/rocks/Andesite-2.png',
    '/rocks/Andesite-3.jpg',
  ],

  arkose: [
    '/rocks/Arkose-1.jpg',
    '/rocks/Arkose-2.jpg',
    '/rocks/Arkose-3.jpg',
  ],

  bandedGneiss: [
    '/rocks/bandedGneiss-1.jpg',
    '/rocks/bandedGneiss-2.png',
    '/rocks/bandedGneiss-3.jpeg',
  ],

  biotiteSchist: [
    '/rocks/BiotiteSchist-1.jpg',
    '/rocks/biotiteSchist-2.png',
    '/rocks/biotiteSchist-3.jpg',
  ],

  bandedMarble: [
    '/rocks/BandedMarble-1.jpg',
    '/rocks/BandedMarble-2.jpg',
    '/rocks/BandedMarble-3.jpg',
  ],

  chloriteSchist: [
    '/rocks/ChloriteSchist-1.jpg',
    '/rocks/ChloriteSchist-2.jpg',
    '/rocks/ChloriteSchist-3.jpg',
  ],

  compactedSchist: [
    '/rocks/CompactedSchist-1.jpg',
    '/rocks/CompactedSchist-2.webp',
    '/rocks/CompactedSchist-3.jpg',
  ],

  concretionSandstone: [
    '/rocks/ConcretionSandstone-1.jpg',
    '/rocks/ConcretionSandstone-2.jpg',
    '/rocks/ConcretionSandstone-3.jpeg',
  ],

  curlySchist: [
    '/rocks/CurlySchist-1.jpg',
    '/rocks/CurlySchist-2.jpg',
    '/rocks/CurlySchist-3.jpg',
  ],

  desertRose: [
    '/rocks/DesertRose-1.jpg',
    '/rocks/DesertRose-2.jpg',
    '/rocks/DesertRose-3.jpeg',
  ],

  dunite: [
    '/rocks/Dunite-1.jpg',
    '/rocks/Dunite-2.jpg',
    '/rocks/Dunite-3.jpg',
  ],

  ferrousSandstone: [
    '/rocks/FerrousSandstone-1.jpg',
    '/rocks/FerrousSandstone-2.jpg',
    '/rocks/FerrousSandstone-3.jpg',
  ],

  gabbro: [
    '/rocks/Gabbro-1.webp',
    '/rocks/Gabbro-2.jpg',
    '/rocks/Gabbro-3.png',
  ],

  granites: [
    '/rocks/Granite-1.jpg',
    '/rocks/Granite-2.jpeg',
    '/rocks/Granite-3.png',
  ],

  granodiorite: [
    '/rocks/Granodiorite-1.jpg',
    '/rocks/Granodiorite-2.webp',
    '/rocks/Granodiorite-3.png',
  ],

  graptoliticShale: [
    '/rocks/GraptoliticShale-1.jpg',
    '/rocks/GraptoliticShale-2.jpg',
    '/rocks/GraptoliticShale-3.webp',
  ],

  lapilliTuff: [
    '/rocks/LapilliTuff-1.jpg',
    '/rocks/LapilliTuff-2.jpg',
    '/rocks/LapilliTuff-3.png',
  ],

  lavaFlowTypes: [
    '/rocks/LavaFlowTypes-1.jpg',
    '/rocks/LavaFlowTypes-2.jpg',
    '/rocks/LavaFlowTypes-3.jpg',
  ],

  layeredGabbro: [
    '/rocks/LayeredGabbro-1.jpg',
    '/rocks/LayeredGabbro-2.jpg',
    '/rocks/LayeredGabbro-3.png',
  ],

  Limestone: [
    '/rocks/Limestone-1.webp',
    '/rocks/Limestone-2.jpg',
    '/rocks/Limestone-3.png',
  ],

  microDiorite: [
    '/rocks/MicroDiorite-1.png',
    '/rocks/MicroDiorite-2.png',
    '/rocks/MicroDiorite-3.png',
  ],

  microGranodiorite: [
    '/rocks/MicroGranodiorite-1.png',
    '/rocks/MicroGranodiorite-2.png',
    '/rocks/microDiorite-3.png',
  ],

  mudstone: [
    '/rocks/Mudstone-1.png',
    '/rocks/Mudstone-2.png',
    '/rocks/Mudstone-3.png',
  ],

  mylonite: [
    '/rocks/Mylonite-1.png',
    '/rocks/Mylonite-2.png',
    '/rocks/Mylonite-3.png',
  ],

  oligomictConglomerate: [
    '/rocks/OligomictConglomerate-1.png',
    '/rocks/OligomictConglomerate-2.png',
    '/rocks/OligomictConglomerate-3.png',
  ],

  pegmatiticGabbro: [
    '/rocks/PegmatiticGabbro-1.png',
    '/rocks/PegmatiticGabbro-2.png',
    '/rocks/PegmatiticGabbro-3.png',
  ],

  phosphate: [
    '/rocks/Phosphate-1.png',
    '/rocks/Phosphate-2.png',
    '/rocks/Phosphate-3.png',
  ],

  porphyriticAndesite: [
    '/rocks/PorphyriticAndesite-1.png',
    '/rocks/PorphyriticAndesite-2.png',
    '/rocks/PorphyriticAndesite-3.png',
  ],

  porphyriticRhyolite: [
    '/rocks/PorphyriticRhyolite-1.png',
    '/rocks/PorphyriticRhyolite-2.png',
    '/rocks/PorphyriticRhyolite-3.png',
  ],

  pyroxenite: [
    '/rocks/Pyroxenite-1.png',
    '/rocks/Pyroxenite-2.png',
    '/rocks/Pyroxenite-3.png',
  ],

  serpentinite: [
    '/rocks/Serpentinite-1.png',
    '/rocks/Serpentinite-2.png',
    '/rocks/Serpentinite-3.png',
  ],

  siltstone: [
    '/rocks/Siltstone-1.png',
    '/rocks/Siltstone-2.png',
    '/rocks/Siltstone-3.png',
  ],

  spottedSlate: [
    '/rocks/SpottedSlate-1.png',
    '/rocks/SpottedSlate-2.png',
    '/rocks/SpottedSlate-3.png',
  ],

  syenite: [
    '/rocks/Syenite-1.png',
    '/rocks/Syenite-2.png',
    '/rocks/Syenite-3.png',
  ],

  trachyticAndesite: [
    '/rocks/TrachyticAndesite-1.png',
    '/rocks/TrachyticAndesite-2.png',
    '/rocks/TrachyticAndesite-3.png',
  ],

  vesicularAndesite: [
    '/rocks/VesicularAndesite-1.png',
    '/rocks/VesicularAndesite-2.png',
    '/rocks/VesicularAndesite-3.png',
  ],

  vesicularBasalt: [
    '/rocks/vesicularBasalt-1.png',
    '/rocks/vesicularBasalt-2.png',
    '/rocks/vesicularBasalt-3.png',
  ],

  volcanicBomb: [
    '/rocks/VolcanicBomb-1.png',
    '/rocks/VolcanicBomb-2.png',
    '/rocks/VolcanicBomb-3.png',
  ],

  whiteSandstone: [
    '/rocks/WhiteSandstone-1.png',
    '/rocks/WhiteSandstone-2.png',
    '/rocks/WhiteSandstone-3.png',
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