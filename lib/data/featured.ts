import { FEATURED_IMAGES } from './images';

export type FeaturedSpecimen = {
  id: string;
  museumNumber: string;

  name: string;
  arabicName: string;

  image: string;
  gallery: string[];

  description: string;
  arabicDescription: string;

  geologicalDescription: string;
  arabicGeologicalDescription: string;

  subtitle: string;
  arabicSubtitle: string;

  type: string;
  arabicType: string;
  specimenType: string;

  texture?: string;
  arabicTexture?: string;

  mineralogy?: string;
  arabicMineralogy?: string;

  formation?: string;
  arabicFormation?: string;

  color?: string;
  arabicColor?: string;

  environment?: string;
  arabicEnvironment?: string;

  uses?: string;
  arabicUses?: string;

  location?: string;
  arabicLocation?: string;

  hardness?: string;
  luster?: string;
  arabicLuster?: string;

  crystalSystem?: string;
  arabicCrystalSystem?: string;

  streak?: string;
  arabicStreak?: string;

  chemicalFormula?: string;
  arabicChemicalFormula?: string;

  exhibitType?: string;
  arabicExhibitType?: string;

  significance?: string;
  arabicSignificance?: string;

  origin?: string;
  arabicOrigin?: string;

  discovery?: string;
  arabicDiscovery?: string;

  material?: string;
  arabicMaterial?: string;

  exhibitStory?: string;
  arabicExhibitStory?: string;

  museumNote?: string;
  arabicMuseumNote?: string;

  age?: string;
  arabicAge?: string;

  tags?: string[];
};

export const featured: FeaturedSpecimen[] = [
  {
    id: 'wabar-meteorite',
    museumNumber: 'FEATURED',

    name: 'Wabar Meteorite',
    arabicName: 'نيزك وبار',

    image: FEATURED_IMAGES.wabarMeteorite,

    gallery: [
      FEATURED_IMAGES.wabarMeteorite,
    ],

    description:
      'A historic iron meteorite fragment associated with the Wabar impact site in the Empty Quarter of Saudi Arabia.',

    arabicDescription:
      'قطعة تاريخية من نيزك حديدي مرتبطة بموقع وبار في الربع الخالي بالمملكة العربية السعودية.',

    geologicalDescription:
      'A meteorite exhibit representing an important impact site in the Arabian Peninsula.',

    arabicGeologicalDescription:
      'معروض نيزكي يمثل موقع اصطدام مهمًا في شبه الجزيرة العربية.',

    subtitle: 'Historic Meteorite Exhibit',
    arabicSubtitle: 'معروض نيزكي تاريخي',

    type: 'Meteorite',
    arabicType: 'نيزك',
    specimenType: 'Featured Exhibit',

    color: 'Dark brown to black',
    arabicColor: 'بني داكن إلى أسود',

    environment: 'Impact site',
    arabicEnvironment: 'موقع اصطدام',

    location: 'Wabar, Empty Quarter, Saudi Arabia',
    arabicLocation: 'وَبَار، الربع الخالي، المملكة العربية السعودية',

    exhibitType: 'Meteorite',
    arabicExhibitType: 'نيزك',

    significance: 'Historic meteorite fragment',
    arabicSignificance: 'قطعة نيزكية تاريخية',

    origin: 'Wabar, Empty Quarter',
    arabicOrigin: 'وَبَار، الربع الخالي',

    discovery: '1932',
    arabicDiscovery: '1932',

    material: 'Iron meteorite',
    arabicMaterial: 'نيزك حديدي',

    exhibitStory:
      'A meteorite fragment associated with the Wabar site in the Empty Quarter of Saudi Arabia.',

    arabicExhibitStory:
      'قطعة نيزكية مرتبطة بموقع وبار في الربع الخالي بالمملكة العربية السعودية.',

    museumNote:
      'A distinctive meteorite exhibit connected to the geological heritage of Saudi Arabia.',

    arabicMuseumNote:
      'معروض نيزكي مميز مرتبط بالتراث الجيولوجي للمملكة العربية السعودية.',

    tags: ['Meteorite', 'all', 'Saudi Arabia', 'Highlights'],
  },
  {
  id: 'ichthyosaurus',
  museumNumber: 'Fossil',

  name: 'Ichthyosaurus',
  arabicName: 'الإكثيوسورس',

  image: FEATURED_IMAGES.ichthyosaurus,

  gallery: [
    FEATURED_IMAGES.ichthyosaurus,
  ],

  description:
    'A fossilized Ichthyosaurus specimen preserved as a mounted skeletal exhibit, representing an extinct marine reptile adapted to life in the ancient oceans.',

  arabicDescription:
    'عينة أحفورية من الإكثيوسورس محفوظة كهيكل عظمي مركب، وتمثل زاحفًا بحريًا منقرضًا تكيف مع الحياة في المحيطات القديمة.',

  geologicalDescription:
    'Ichthyosaurus was an extinct marine reptile of the Early Jurassic. Its streamlined body, elongated snout, large eyes, and fin-like limbs reflect its adaptation to an active marine lifestyle.',

  arabicGeologicalDescription:
    'الإكثيوسورس زاحف بحري منقرض عاش خلال العصر الجوراسي المبكر. ويعكس جسمه الانسيابي وخطمه الطويل وعيناه الكبيرتان وأطرافه الشبيهة بالزعانف تكيفه مع الحياة البحرية النشطة.',

  subtitle: 'Early Jurassic Marine Reptile',
  arabicSubtitle: 'زاحف بحري من الجوراسي المبكر',

  type: 'Fossil',
  arabicType: 'أحفورة',
  specimenType: 'Exhibit',

  environment: 'Marine',
  arabicEnvironment: 'بحري',

  location: 'Europe',
  arabicLocation: 'أوروبا',

  exhibitType: 'Fossil',
  arabicExhibitType: 'أحفورة',

  significance: 'Early Jurassic marine reptile fossil',
  arabicSignificance: 'أحفورة لزاحف بحري من الجوراسي المبكر',

  origin: 'Marine environment',
  arabicOrigin: 'بيئة بحرية',

  discovery: '19th century',
  arabicDiscovery: 'القرن التاسع عشر',

  material: 'Fossilized skeletal remains',
  arabicMaterial: 'بقايا هيكلية متحجرة',

  age: 'Early Jurassic — approximately 201–184 million years ago',
  arabicAge: 'الجوراسي المبكر — منذ نحو 201 إلى 184 مليون سنة',

  exhibitStory:
    'This fossil exhibit represents Ichthyosaurus, an extinct marine reptile that lived in the ancient seas during the Early Jurassic. Its streamlined body and paddle-like limbs were adapted for efficient swimming.',

  arabicExhibitStory:
    'يمثل هذا المعروض الأحفوري الإكثيوسورس، وهو زاحف بحري منقرض عاش في البحار القديمة خلال الجوراسي المبكر. وقد تكيف جسمه الانسيابي وأطرافه الشبيهة بالمجاديف مع السباحة بكفاءة.',

  museumNote:
    'The specimen illustrates the adaptation of marine reptiles to life in the Early Jurassic seas.',

  arabicMuseumNote:
    'توضح هذه العينة تكيف الزواحف البحرية مع الحياة في بحار الجوراسي المبكر.',

  tags: ['all', 'exhibits'],
},
];