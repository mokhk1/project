
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
    gallery: [FEATURED_IMAGES.wabarMeteorite],

    description:
      'A meteorite specimen associated with the Wabar impact site in the Empty Quarter of Saudi Arabia. The site is known for impact craters and materials formed during a high-energy collision between an extraterrestrial object and the Earth.',

    arabicDescription:
      'عينة نيزكية مرتبطة بموقع وبار في الربع الخالي بالمملكة العربية السعودية. ويشتهر الموقع بفوهات الاصطدام والمواد التي تكوّنت نتيجة التصادم عالي الطاقة بين جسم قادم من الفضاء وسطح الأرض.',

    geologicalDescription:
      'Meteorite impacts release enormous amounts of energy, producing intense heat, pressure, fragmentation, and changes to the surrounding rocks. Impact sites may contain crater structures, impact glass, and fragmented or melted materials. The Wabar site is an important example of impact processes in an arid desert environment. The exact classification and composition of this displayed specimen depend on its specimen record.',

    arabicGeologicalDescription:
      'تطلق الاصطدامات النيزكية كميات هائلة من الطاقة، فتنتج حرارة وضغطًا شديدين وتفتتًا وتغيرات في الصخور المحيطة. وقد تحتوي مواقع الاصطدام على فوهات وزجاج اصطدامي ومواد متفتتة أو منصهرة. ويُعد موقع وبار مثالًا مهمًا على عمليات الاصطدام في بيئة صحراوية جافة. أما التصنيف والتركيب الدقيقان للعينة المعروضة فيعتمدان على سجلها العلمي.',

    subtitle: 'Meteorites and Impact Geology',
    arabicSubtitle: 'النيازك وجيولوجيا الاصطدام',

    type: 'Meteorite',
    arabicType: 'نيزك',
    specimenType: 'Impact-related specimen',

    color: 'Dark brown to black',
    arabicColor: 'بني داكن إلى أسود',

    environment: 'Meteorite impact site',
    arabicEnvironment: 'موقع اصطدام نيزكي',

    location: 'Wabar, Empty Quarter, Saudi Arabia',
    arabicLocation: 'وَبَار، الربع الخالي، المملكة العربية السعودية',

    significance:
      'Demonstrates the geological effects of extraterrestrial impacts.',
    arabicSignificance:
      'يوضح التأثيرات الجيولوجية الناتجة عن اصطدام الأجسام القادمة من الفضاء.',

    origin: 'Associated with the Wabar impact site',
    arabicOrigin: 'مرتبط بموقع اصطدام وبار',

    discovery: 'The Wabar impact site was reported by Harry St. John Philby in 1932.',
    arabicDiscovery:
      'وثّق هاري سانت جون فيلبي موقع وبار عام 1932.',

    material: 'Meteorite-related material; exact specimen composition requires confirmation.',
    arabicMaterial:
      'مادة مرتبطة بنيزك؛ يحتاج التركيب الدقيق للعينة إلى التحقق.',

    exhibitStory:
      'The Wabar site provides an opportunity to study how impact events shape planetary surfaces. The energy released during impact can excavate a crater, fracture nearby rocks, and melt material that cools into impact glass. These features help geologists investigate the interaction between extraterrestrial bodies and Earth.',

    arabicExhibitStory:
      'يتيح موقع وبار دراسة كيفية تشكيل الاصطدامات لأسطح الكواكب. فالطاقة المنطلقة أثناء الاصطدام قد تحفر فوهة، وتكسر الصخور القريبة، وتصهر مواد تبرد لاحقًا لتكوّن الزجاج الاصطدامي. وتساعد هذه المظاهر الجيولوجيين على فهم التفاعل بين الأجسام القادمة من الفضاء والأرض.',

    tags: ['all', 'Highlights', 'Meteorite', 'Saudi Arabia'],
  },

  {
    id: 'ichthyosaurus',
    museumNumber: 'FEATURED',

    name: 'Ichthyosaurus',
    arabicName: 'الإكثيوسورس',

    image: FEATURED_IMAGES.ichthyosaurus,
    gallery: [FEATURED_IMAGES.ichthyosaurus],

    description:
      'A fossil skeletal exhibit representing Ichthyosaurus, an extinct marine reptile that lived in ancient seas. Its streamlined body and paddle-like limbs were adapted for efficient swimming.',

    arabicDescription:
      'هيكل أحفوري معروض للإكثيوسورس، وهو زاحف بحري منقرض عاش في البحار القديمة. وقد تكيف جسمه الانسيابي وأطرافه الشبيهة بالمجاديف مع السباحة بكفاءة.',

    geologicalDescription:
      'Ichthyosaurs were marine reptiles that evolved specialized body shapes for life in water. Their streamlined bodies reduced drag, while their limbs developed into paddles used for maneuvering. Large eyes in some species are consistent with visual adaptation to marine environments. Their fossils help scientists investigate marine food webs, evolutionary adaptations, and the history of marine reptiles during the Mesozoic Era.',

    arabicGeologicalDescription:
      'كانت الإكثيوصورات زواحف بحرية تطورت لديها أشكال جسم متخصصة للحياة في الماء. فقد قلل الجسم الانسيابي مقاومة الماء، بينما تحورت الأطراف إلى مجاديف تساعد على الحركة والمناورة. وتتوافق العيون الكبيرة لدى بعض الأنواع مع التكيف البصري في البيئات البحرية. وتساعد أحافيرها العلماء على دراسة الشبكات الغذائية البحرية والتكيفات التطورية وتاريخ الزواحف البحرية خلال حقبة الحياة الوسطى.',

    subtitle: 'Extinct Marine Reptile',
    arabicSubtitle: 'زاحف بحري منقرض',

    type: 'Fossil',
    arabicType: 'أحفورة',
    specimenType: 'Fossil skeleton',

    environment: 'Marine',
    arabicEnvironment: 'بحري',

    location: 'The location of this individual specimen is unconfirmed.',
    arabicLocation: 'لم يُتحقق من الموقع الجغرافي لهذه العينة تحديدًا.',

    significance:
      'Provides evidence of marine reptile evolution and adaptation to swimming.',
    arabicSignificance:
      'يقدم دليلًا على تطور الزواحف البحرية وتكيفها مع السباحة.',

    origin: 'Ancient marine ecosystems',
    arabicOrigin: 'الأنظمة البيئية البحرية القديمة',

    material: 'Fossilized skeletal remains',
    arabicMaterial: 'بقايا هيكلية متحجرة',

    age: 'Ichthyosaurs lived during the Mesozoic Era. The exact age of this specimen is unconfirmed.',
    arabicAge:
      'عاشت الإكثيوصورات خلال حقبة الحياة الوسطى. ولم يُتحقق من العمر الدقيق لهذه العينة.',

    exhibitStory:
      'The skeleton illustrates how anatomy can reveal the lifestyle of an extinct organism. The body shape and paddle-like limbs of ichthyosaurs reflect their adaptation to aquatic locomotion. Comparing such fossils with living marine animals helps researchers understand evolutionary convergence, in which unrelated groups develop similar features under similar environmental pressures.',

    arabicExhibitStory:
      'يوضح الهيكل كيف يمكن للتشريح أن يكشف عن نمط حياة كائن منقرض. فشكل الجسم والأطراف الشبيهة بالمجاديف لدى الإكثيوصورات يعكسان تكيفها مع الحركة في الماء. وتساعد مقارنة هذه الأحافير بالحيوانات البحرية الحية الباحثين على فهم التقارب التطوري، الذي تتطور فيه صفات متشابهة لدى مجموعات غير متقاربة نتيجة تعرضها لظروف بيئية متشابهة.',

    tags: ['all', 'exhibits', 'Fossils'],
  },

  {
    id: 'petrified-tree-trunk',
    museumNumber: 'FEATURED',

    name: 'Petrified Tree Trunk',
    arabicName: 'جذع شجرة متحجر',

    image: FEATURED_IMAGES.petrifiedTreeTrunk,
    gallery: [FEATURED_IMAGES.petrifiedTreeTrunk],

    description:
      'A large petrified tree trunk displayed in the university collection. The exhibit label records that it was gifted to the university by King Abdullah bin Abdulaziz Al Saud.',

    arabicDescription:
      'جذع شجرة متحجر كبير معروض ضمن مجموعة الجامعة. وتوضح اللوحة التعريفية أنه أُهدي للجامعة من الملك عبدالله بن عبدالعزيز آل سعود، رحمه الله.',

    geologicalDescription:
      'Petrified wood forms when plant material is buried and preserved through mineralization. Groundwater carrying dissolved silica can enter the pores and tissues of the wood. Silica may precipitate from the water and preserve microscopic details of the original plant structure. This process can occur alongside decay of the organic material and may involve replacement by silica-rich minerals. Iron-bearing minerals can contribute to brown, red, or yellow coloration. The exact age, tree type, and mineral composition of this specimen cannot be determined from the photograph alone.',

    arabicGeologicalDescription:
      'يتكوّن الخشب المتحجر عندما تُدفن المادة النباتية وتُحفظ بفعل التمعدن. ويمكن للمياه الجوفية الحاملة للسيليكا الذائبة أن تتغلغل في مسامات الخشب وأنسجته، ثم تترسب السيليكا وتحافظ على تفاصيل مجهرية من البنية النباتية الأصلية. وقد تحدث هذه العملية بالتزامن مع تحلل المادة العضوية، ويمكن أن يصاحبها استبدالها بمعادن غنية بالسيليكا. كما قد تسهم المعادن الحاوية على الحديد في ظهور الألوان البنية أو الحمراء أو الصفراء. ولا يمكن تحديد عمر هذه العينة أو نوع الشجرة أو تركيبها المعدني الدقيق من الصورة وحدها.',

    subtitle: 'Petrification and Fossil Preservation',
    arabicSubtitle: 'التحجر وحفظ البقايا النباتية',

    type: 'Petrified Wood',
    arabicType: 'خشب متحجر',
    specimenType: 'Petrified tree trunk',

    texture: 'Rough and irregular surface',
    arabicTexture: 'سطح خشن وغير منتظم',

    mineralogy:
      'Silica commonly plays a major role in petrified wood; the exact mineral composition of this specimen is unverified.',
    arabicMineralogy:
      'تؤدي السيليكا دورًا شائعًا في تحجر الخشب؛ ولم يُتحقق من التركيب المعدني الدقيق لهذه العينة.',

    formation:
      'Mineral-rich groundwater enters buried wood, allowing dissolved minerals to precipitate and preserve plant structures.',
    arabicFormation:
      'تتغلغل المياه الجوفية الغنية بالمعادن في الخشب المدفون، مما يسمح بترسب المعادن وحفظ البنية النباتية.',

    color: 'Beige, brown, and reddish tones',
    arabicColor: 'درجات البيج والبني والأحمر',

    environment: 'Buried plant material exposed to mineral-rich groundwater',
    arabicEnvironment: 'بقايا نباتية مدفونة تأثرت بمياه جوفية غنية بالمعادن',

    significance:
      'Illustrates mineralization, fossil preservation, and the transformation of plant remains into rock-like material.',
    arabicSignificance:
      'يوضح التمعدن وحفظ البقايا النباتية وتحولها إلى مادة صخرية.',

    material: 'Petrified plant material',
    arabicMaterial: 'مادة نباتية متحجرة',

    exhibitStory:
      'The specimen illustrates how the structure of wood can be preserved long after the tree dies. As mineral-rich fluids move through buried wood, minerals may fill pores or replace parts of the original tissues. The resulting material can retain visible features of the trunk while behaving as a rock. Petrified wood therefore provides evidence of ancient vegetation and the chemical conditions that helped preserve it.',

    arabicExhibitStory:
      'توضح العينة كيف يمكن الحفاظ على بنية الخشب بعد موت الشجرة بزمن طويل. فعندما تتحرك السوائل الغنية بالمعادن عبر الخشب المدفون، قد تملأ المعادن المسامات أو تستبدل أجزاءً من الأنسجة الأصلية. ويمكن للمادة الناتجة أن تحتفظ بملامح ظاهرة من الجذع مع اكتساب خصائص المادة الصخرية. ولذلك يقدم الخشب المتحجر أدلة على النباتات القديمة والظروف الكيميائية التي ساعدت على حفظها.',

    tags: ['all', 'Highlights', 'Fossils'],
  },

  {
    id: 'oil-drilling-model',
    museumNumber: 'FEATURED',

    name: 'Oil Drilling and Petroleum Field Model',
    arabicName: 'مجسم حفر الآبار والحقول النفطية',

    image: FEATURED_IMAGES.oilDrillingModel,
    gallery: [FEATURED_IMAGES.oilDrillingModel],

    description:
      'An educational petroleum display featuring drilling-rig models, surface facilities, subsurface layers, photographs, and a regional map. Visible labels include Shaiba Oil Field and Dammam Well 7.',

    arabicDescription:
      'معروض تعليمي عن البترول يضم نماذج لأبراج الحفر والمنشآت السطحية وطبقات تحت سطح الأرض وصورًا وخريطة إقليمية. وتظهر في الصورة تسميات حقل الشيبة وبئر الدمام رقم 7.',

    geologicalDescription:
      'Petroleum exploration investigates the presence and distribution of hydrocarbons in sedimentary basins. A working petroleum system generally requires source rocks that generate hydrocarbons, migration pathways, a porous and permeable reservoir, a sealing layer, and a trap. Drilling penetrates subsurface formations and provides information through cuttings, cores, and well logs. Structural and stratigraphic interpretations help geologists understand where hydrocarbons may accumulate and how reservoirs are distributed.',

    arabicGeologicalDescription:
      'يبحث استكشاف البترول في وجود الهيدروكربونات وتوزيعها داخل الأحواض الرسوبية. ويتطلب النظام البترولي الفعال عادةً صخورًا مصدرية تولد الهيدروكربونات، ومسارات للهجرة، وصخرًا مكمنيًا مساميًا ونفّاذًا، وطبقة مانعة للتسرب، ومصيدة جيولوجية. ويخترق الحفر التكوينات تحت السطح ويوفر معلومات من فتات الحفر واللباب الصخري والسجلات البئرية. وتساعد التفسيرات التركيبية والطبقية الجيولوجيين على فهم أماكن تجمع الهيدروكربونات وتوزيع المكامن.',

    subtitle: 'Petroleum Exploration and Drilling',
    arabicSubtitle: 'استكشاف البترول وحفر الآبار',

    type: 'Petroleum Model',
    arabicType: 'مجسم بترولي',
    specimenType: 'Drilling and field-development model',

    environment: 'Onshore petroleum operations',
    arabicEnvironment: 'عمليات البترول البرية',

    location: 'The display includes references to petroleum sites in Saudi Arabia.',
    arabicLocation: 'يتضمن المعروض إشارات إلى مواقع بترولية في المملكة العربية السعودية.',

    significance:
      'Explains the relationship between drilling operations, subsurface formations, and petroleum systems.',
    arabicSignificance:
      'يوضح العلاقة بين عمليات الحفر والتكوينات تحت السطح والأنظمة البترولية.',

    material: 'Educational models, photographs, and maps',
    arabicMaterial: 'مجسمات تعليمية وصور وخرائط',

    exhibitStory:
      'Drilling rigs provide the equipment needed to create wells through layers of soil and rock. During exploration, geological observations and well data help determine the properties and sequence of the formations encountered. The display connects surface operations with the subsurface environment and introduces the role of geological interpretation in petroleum exploration and field development.',

    arabicExhibitStory:
      'توفر أبراج الحفر المعدات اللازمة لإنشاء الآبار عبر طبقات التربة والصخور. وأثناء الاستكشاف، تساعد الملاحظات الجيولوجية وبيانات الآبار على تحديد خصائص التكوينات التي يخترقها البئر وتسلسلها. ويربط المعروض العمليات السطحية بالبيئة تحت السطح، ويعرّف بدور التفسير الجيولوجي في استكشاف البترول وتطوير الحقول.',

    tags: ['all', 'Highlights', 'exhibits', 'Petroleum'],
  },

  {
    id: 'geological-structure-models',
    museumNumber: 'FEATURED',

    name: 'Geological Structure Models',
    arabicName: 'مجسمات التراكيب الجيولوجية',

    image: FEATURED_IMAGES.geologicalStructures,
    gallery: [FEATURED_IMAGES.geologicalStructures],

    description:
      'A collection of three-dimensional geological models illustrating folded and faulted rock layers. Their contrasting colors make the geometry of the layers easier to observe.',

    arabicDescription:
      'مجموعة من المجسمات الجيولوجية ثلاثية الأبعاد التي توضح الطبقات الصخرية المطوية والمتصدعة. وتساعد ألوانها المتباينة على ملاحظة هندسة الطبقات بسهولة.',

    geologicalDescription:
      'Folds form when rock layers bend under deformation, while faults form when rocks fracture and move relative to one another along a fracture surface. Folds may be described as anticlines or synclines according to their geometry, while faults may be classified by the direction of displacement. These structures reflect the stress and deformation history of an area. They also influence groundwater movement, the distribution of rock units, and the formation or modification of petroleum traps.',

    arabicGeologicalDescription:
      'تتكون الطيات عندما تنثني الطبقات الصخرية بفعل التشوه، بينما تتكون الصدوع عندما تتكسر الصخور وتتحرك الكتل الصخرية بالنسبة إلى بعضها على طول سطح الكسر. ويمكن وصف الطيات بأنها محدبات أو مقعرات وفقًا لهندستها، كما تُصنّف الصدوع بحسب اتجاه الإزاحة. وتعكس هذه التراكيب تاريخ الإجهاد والتشوه في المنطقة، كما تؤثر في حركة المياه الجوفية وتوزيع الوحدات الصخرية وتكوين المصائد النفطية أو تعديلها.',

    subtitle: 'Folds, Faults, and Structural Geology',
    arabicSubtitle: 'الطيات والصدوع والجيولوجيا التركيبية',

    type: 'Geological Model',
    arabicType: 'مجسم جيولوجي',
    specimenType: 'Three-dimensional structural models',

    texture: 'Layered surfaces with contrasting colors',
    arabicTexture: 'أسطح طبقية بألوان متباينة',

    color: 'Multicolored geological layers',
    arabicColor: 'طبقات جيولوجية متعددة الألوان',

    environment: 'Subsurface geological structures',
    arabicEnvironment: 'التراكيب الجيولوجية تحت سطح الأرض',

    significance:
      'Demonstrates how deformation changes the geometry and arrangement of rock layers.',
    arabicSignificance:
      'يوضح كيف يغير التشوه هندسة الطبقات الصخرية وترتيبها.',

    material: 'Colored educational models',
    arabicMaterial: 'مجسمات تعليمية ملونة',

    exhibitStory:
      'Three-dimensional models make it easier to visualize geological structures that may be difficult to interpret from a two-dimensional map. By comparing the shapes of layered surfaces, students can understand how compression, extension, and shearing produce different structures. These concepts are fundamental to geological mapping, structural interpretation, and mineral and petroleum exploration.',

    arabicExhibitStory:
      'تسهل المجسمات ثلاثية الأبعاد تصور التراكيب الجيولوجية التي قد يصعب تفسيرها من الخرائط ثنائية الأبعاد. ومن خلال مقارنة أشكال الأسطح الطبقية، يمكن للطلاب فهم كيفية إنتاج الضغط والتمدد والقص لتراكيب مختلفة. وتُعد هذه المفاهيم أساسية في رسم الخرائط الجيولوجية والتفسير التركيبي واستكشاف المعادن والبترول.',

    tags: ['all', 'Highlights',  'Structural Geology'],
  },

  {
    id: 'history-of-earth-display',
    museumNumber: 'FEATURED',

    name: 'The History of the Earth',
    arabicName: 'تاريخ الأرض',

    image: FEATURED_IMAGES.historyOfEarth,
    gallery: [FEATURED_IMAGES.historyOfEarth],

    description:
      'An educational display combining a geological timescale with rock samples, fossils, and illustrations of ancient organisms and geological processes.',

    arabicDescription:
      'لوحة تعليمية تجمع بين مقياس الزمن الجيولوجي وعينات صخرية وأحافير ورسومات لكائنات قديمة وعمليات جيولوجية.',

    geologicalDescription:
      'The geological timescale divides Earth history into eons, eras, periods, and smaller intervals. Stratigraphic relationships help establish the relative order of geological events, while radiometric dating can provide numerical ages for suitable rocks and minerals. Fossils document changes in life through time and can help correlate sedimentary rock layers. Together, rocks and fossils preserve evidence of ancient environments, biological evolution, climate changes, and major geological events.',

    arabicGeologicalDescription:
      'يقسم مقياس الزمن الجيولوجي تاريخ الأرض إلى دهور وحقب وعصور وفترات أصغر. وتساعد العلاقات الطبقية على تحديد الترتيب النسبي للأحداث الجيولوجية، بينما يمكن للتأريخ الإشعاعي تحديد أعمار رقمية للصخور والمعادن المناسبة. وتوثق الأحافير تغير الحياة عبر الزمن، كما تساعد على المضاهاة بين الطبقات الرسوبية. وتحفظ الصخور والأحافير معًا أدلة على البيئات القديمة والتطور الحيوي والتغيرات المناخية والأحداث الجيولوجية الكبرى.',

    subtitle: 'Geological Time and Ancient Life',
    arabicSubtitle: 'الزمن الجيولوجي والحياة القديمة',

    type: 'Geological Display',
    arabicType: 'معروض جيولوجي',
    specimenType: 'Geological timescale and specimen display',

    significance:
      'Connects geological time, stratigraphy, fossils, and the history of life.',
    arabicSignificance:
      'يربط بين الزمن الجيولوجي والطبقات والأحافير وتاريخ الحياة.',

    material: 'Display board with rock and fossil specimens',
    arabicMaterial: 'لوحة عرض تحتوي على عينات صخرية وأحفورية',

    exhibitStory:
      'The display presents Earth history as a sequence of changing environments and geological events. Rock samples show differences in composition and texture, while fossils provide evidence of organisms that lived in the past. Reading these records together allows geologists to reconstruct parts of Earth history and understand how the planet and its life have changed over millions of years.',

    arabicExhibitStory:
      'تعرض اللوحة تاريخ الأرض بوصفه سلسلة من البيئات والأحداث الجيولوجية المتغيرة. وتوضح العينات الصخرية اختلاف التركيب والنسيج، بينما تقدم الأحافير أدلة على الكائنات التي عاشت في الماضي. وتتيح قراءة هذه السجلات معًا للجيولوجيين إعادة بناء أجزاء من تاريخ الأرض وفهم كيفية تغير الكوكب والحياة عليه عبر ملايين السنين.',

    tags: ['all', 'Highlights', 'exhibits', 'Geological History'],
  },
  
  {
    id: 'acropora-coral',
    museumNumber: 'FOSSIL',
    name: 'Dendroid Coral Colony',
    arabicName: 'مستعمرة مرجان متفرعة',
    image: FEATURED_IMAGES.acropora,
    gallery: [FEATURED_IMAGES.acropora],
    description:
      'A branching coral colony identified on its display label as Acropora sp. The specimen illustrates the complex branching architecture of reef-building corals.',
    arabicDescription:
      'مستعمرة مرجانية متفرعة يحدد ملصقها العلمي جنس Acropora. وتوضح العينة البنية المتشعبة والمعقدة للمرجان الذي يسهم في بناء الشعاب المرجانية.',
    geologicalDescription:
      'Corals are colonial animals that commonly build calcium-carbonate skeletons. Branching forms provide habitat for many reef organisms and contribute to reef framework development. Their growth depends on environmental conditions such as water temperature, light, and water chemistry. The display label identifies the locality as the Red Sea, Saudi Arabia; the precise age and whether the specimen is fossilized are not established by the photograph.',
    arabicGeologicalDescription:
      'المرجان حيوانات قد تعيش في مستعمرات وتبني هياكل من كربونات الكالسيوم. وتوفر الأشكال المتفرعة موائل لكثير من كائنات الشعاب المرجانية، وتسهم في بناء هيكل الشعاب. ويتأثر نموها بدرجة حرارة الماء والضوء وكيمياء المياه. ويحدد ملصق المعروض موقع العينة في البحر الأحمر بالمملكة العربية السعودية، لكن الصورة لا تثبت عمرها الدقيق أو ما إذا كانت متحجرة.',
    subtitle: 'Branching Coral and Reef Growth',
    arabicSubtitle: 'المرجان المتفرع ونمو الشعاب',
    type: 'Coral Specimen',
    arabicType: 'عينة مرجانية',
    specimenType: 'Branching coral colony',
    mineralogy: 'Coral skeletons are commonly composed of calcium carbonate.',
    arabicMineralogy: 'تتكون الهياكل المرجانية عادةً من كربونات الكالسيوم.',
    environment: 'Marine reef environment',
    arabicEnvironment: 'بيئة الشعاب البحرية',
    location: 'Red Sea, Saudi Arabia',
    arabicLocation: 'البحر الأحمر، المملكة العربية السعودية',
    significance:
      'Illustrates coral colony growth and the biological construction of reef structures.',
    arabicSignificance:
      'توضح نمو المستعمرات المرجانية والبناء الحيوي لهياكل الشعاب.',
    material: 'Coral skeleton',
    arabicMaterial: 'هيكل مرجاني',
    exhibitStory:
      'The branching structure increases the surface area available for interaction with seawater and creates spaces that can shelter small marine organisms. Coral colonies are important components of reef ecosystems, although identifying a specimen as fossil coral requires evidence of fossilization.',
    arabicExhibitStory:
      'تزيد البنية المتفرعة مساحة التفاعل مع مياه البحر وتوفر فراغات يمكن أن تؤوي الكائنات البحرية الصغيرة. وتعد المستعمرات المرجانية مكونات مهمة في النظم البيئية للشعاب، لكن تصنيف العينة على أنها مرجان أحفوري يتطلب دليلًا على تحجرها.',
    tags: ['all', 'Fossils', 'Marine'],
  },

  {
    id: 'crocodile-skull',
    museumNumber: 'FOSSIL',
    name: 'Crocodile Skull',
    arabicName: 'جمجمة تمساح',
    image: FEATURED_IMAGES.crocodileSkull,
    gallery: [FEATURED_IMAGES.crocodileSkull],
    description:
      'An educational crocodile skull display showing the elongated snout, strong jaws, and numerous teeth characteristic of crocodilians.',
    arabicDescription:
      'معروض تعليمي لجمجمة تمساح يوضح الخطم الطويل والفكين القويين والأسنان المتعددة التي تميز التمساحيات.',
    geologicalDescription:
      'Crocodilians are reptiles with a long evolutionary history. Their skulls show adaptations for capturing and holding prey, including elongated jaws and conical teeth. Fossil crocodilian remains can help researchers reconstruct ancient aquatic and coastal ecosystems. The photograph shows a display model or skull, but does not establish that this particular specimen is a fossil or identify its species.',
    arabicGeologicalDescription:
      'التمساحيات زواحف تمتلك تاريخًا تطوريًا طويلًا. وتظهر جماجمها تكيفات تساعدها على الإمساك بالفريسة، منها الفكان الطويلان والأسنان المخروطية. ويمكن لبقايا التمساحيات الأحفورية أن تساعد الباحثين على إعادة بناء البيئات المائية والساحلية القديمة. وتُظهر الصورة جمجمة أو نموذجًا تعليميًا، لكنها لا تثبت أن العينة نفسها أحفورة ولا تحدد نوعها.',
    subtitle: 'Crocodilian Anatomy and Evolution',
    arabicSubtitle: 'تشريح التمساحيات وتطورها',
    type: 'Educational Specimen',
    arabicType: 'عينة تعليمية',
    specimenType: 'Crocodile skull display',
    environment: 'Aquatic and semi-aquatic habitats',
    arabicEnvironment: 'بيئات مائية وشبه مائية',
    significance:
      'Demonstrates skull adaptations related to feeding and the evolutionary history of crocodilians.',
    arabicSignificance:
      'يوضح تكيفات الجمجمة المرتبطة بالتغذية والتاريخ التطوري للتمساحيات.',
    material: 'Skull or educational model; exact material unconfirmed',
    arabicMaterial: 'جمجمة أو نموذج تعليمي؛ لم يُتحقق من مادة العينة',
    exhibitStory:
      'The elongated snout and tooth-bearing jaws are useful features for understanding crocodilian feeding. In paleontology, comparisons between living crocodilians and fossil skulls can reveal changes in anatomy and help interpret ancient environments.',
    arabicExhibitStory:
      'يعد الخطم الطويل والفكان الحاملان للأسنان من السمات المفيدة لفهم طريقة تغذية التمساحيات. وفي علم الأحافير، تساعد المقارنة بين التمساحيات الحية والجماجم الأحفورية على كشف التغيرات التشريحية وتفسير البيئات القديمة.',
    tags: ['all', 'Fossils', 'Vertebrates'],
  },

  {
    id: 'cruziana-trace-fossil',
    museumNumber: 'FOSSIL',
    name: 'Cruziana Trilobite Trace Fossil',
    arabicName: 'أحفورة أثرية من نوع كروزيانا',
    image: FEATURED_IMAGES.cruziana,
    gallery: [FEATURED_IMAGES.cruziana],
    description:
      'A trace-fossil display labelled Cruziana, preserving markings associated with the movement or activity of organisms on or within ancient sediment.',
    arabicDescription:
      'معروض لأحفورة أثرية تحمل اسم كروزيانا، تحفظ علامات مرتبطة بحركة الكائنات أو نشاطها فوق الرواسب القديمة أو داخلها.',
    geologicalDescription:
      'Cruziana is a trace-fossil form commonly associated with the activity of trilobites or similar arthropods moving across or burrowing into sediment. Unlike a body fossil, a trace fossil records behavior rather than preserving the organism itself. Its morphology and relationship to sedimentary structures can help geologists interpret seafloor conditions, sediment consistency, and the behavior of ancient benthic organisms.',
    arabicGeologicalDescription:
      'كروزيانا شكل من الأحافير الأثرية يرتبط عادةً بنشاط ثلاثيات الفصوص أو مفصليات أرجل مشابهة أثناء حركتها فوق الرواسب أو حفرها فيها. وعلى خلاف أحفورة الجسم، تسجل الأحفورة الأثرية سلوك الكائن بدلًا من حفظ جسمه نفسه. ويمكن لشكل الأثر وعلاقته بالتراكيب الرسوبية أن يساعدا الجيولوجيين على تفسير ظروف قاع البحر وقوام الرواسب وسلوك الكائنات القاعية القديمة.',
    subtitle: 'Trace Fossils and Ancient Behavior',
    arabicSubtitle: 'الأحافير الأثرية وسلوك الكائنات القديمة',
    type: 'Trace Fossil',
    arabicType: 'أحفورة أثرية',
    specimenType: 'Cruziana trace fossil',
    texture: 'Raised and grooved markings',
    arabicTexture: 'علامات بارزة ومحززة',
    environment: 'Ancient sedimentary seafloor',
    arabicEnvironment: 'قاع بحري رسوبي قديم',
    significance:
      'Preserves evidence of organism activity and provides clues about ancient sedimentary environments.',
    arabicSignificance:
      'تحفظ دليلًا على نشاط الكائنات وتقدم مؤشرات عن البيئات الرسوبية القديمة.',
    material: 'Trace preserved in sedimentary rock',
    arabicMaterial: 'أثر محفوظ في صخر رسوبي',
    exhibitStory:
      'A trace fossil can reveal that an organism was present even when its bones or shell have not been preserved. Cruziana-like markings are particularly useful for studying interactions between organisms and the sediment on ancient seafloors.',
    arabicExhibitStory:
      'يمكن للأحفورة الأثرية أن تكشف عن وجود كائن حي حتى عندما لا تُحفظ عظامه أو أصدافه. وتفيد العلامات الشبيهة بكروزيانا خصوصًا في دراسة تفاعل الكائنات مع الرواسب في قيعان البحار القديمة.',
    tags: ['all', 'Fossils', 'Trace Fossils'],
  },

  {
    id: 'fish-fossil',
    museumNumber: 'FOSSIL',
    name: 'Fish Fossil',
    arabicName: 'أحفورة سمكة',
    image: FEATURED_IMAGES.fishFossil,
    gallery: [FEATURED_IMAGES.fishFossil],
    description:
      'A fossil display showing the preserved outline and skeletal features of a fish within rock.',
    arabicDescription:
      'معروض أحفوري يُظهر الشكل المحفوظ والملامح الهيكلية لسمكة داخل الصخر.',
    geologicalDescription:
      'Fish fossils may preserve bones, scales, teeth, or body outlines in sedimentary rocks. Preservation is favored when remains are buried quickly and protected from scavenging, oxygen, and physical disturbance. Fossil fish can provide evidence of past aquatic ecosystems, food webs, and evolutionary changes. The exact species, geological age, and locality of this specimen cannot be confirmed from the display photograph alone.',
    arabicGeologicalDescription:
      'قد تحفظ أحافير الأسماك العظام أو الحراشف أو الأسنان أو حدود الجسم داخل الصخور الرسوبية. وتزداد فرص الحفظ عندما تُدفن البقايا بسرعة وتُحمى من الكائنات التي تتغذى عليها ومن الأكسجين والاضطرابات الفيزيائية. وتوفر أحافير الأسماك أدلة على النظم البيئية المائية القديمة والشبكات الغذائية والتغيرات التطورية. ولا يمكن تأكيد نوع هذه العينة أو عمرها الجيولوجي أو موقعها من صورة المعروض وحدها.',
    subtitle: 'Fish Evolution and Fossil Preservation',
    arabicSubtitle: 'تطور الأسماك وحفظ الأحافير',
    type: 'Fossil',
    arabicType: 'أحفورة',
    specimenType: 'Fish fossil',
    environment: 'Aquatic',
    arabicEnvironment: 'مائي',
    significance:
      'Provides evidence of ancient aquatic life and the preservation of vertebrate remains.',
    arabicSignificance:
      'تقدم دليلًا على الحياة المائية القديمة وحفظ بقايا الفقاريات.',
    material: 'Fossil preserved in rock',
    arabicMaterial: 'أحفورة محفوظة داخل الصخر',
    exhibitStory:
      'The visible form of a fossil fish can help researchers examine body proportions and preserved skeletal features. When combined with rock type and geological context, these features can contribute to interpreting the environment in which the fish lived and was buried.',
    arabicExhibitStory:
      'يمكن للشكل الظاهر لأحفورة السمكة أن يساعد الباحثين على دراسة تناسب أجزاء الجسم والملامح الهيكلية المحفوظة. وعند ربط هذه السمات بنوع الصخر والسياق الجيولوجي، يمكن الاستفادة منها في تفسير البيئة التي عاشت فيها السمكة ودُفنت فيها.',
    tags: ['all', 'Fossils', 'Vertebrates'],
  },

  {
    id: 'giant-cave-bear',
    museumNumber: 'FOSSIL',
    name: 'Adult Giant Cave Bear',
    arabicName: 'جمجمة دب الكهوف العملاق البالغ',
    image: FEATURED_IMAGES.giantCaveBear,
    gallery: [FEATURED_IMAGES.giantCaveBear],
    description:
      'A display of an adult giant cave bear skull. The accompanying exhibit panel describes the animal’s large body, powerful jaws, and cave-associated remains discovered in Austria.',
    arabicDescription:
      'معروض لجمجمة دب الكهوف العملاق البالغ. وتوضح اللوحة المصاحبة ضخامة جسمه وقوة فكيه، وتشير إلى بقايا دببة عُثر عليها في أحد الكهوف بالنمسا.',
    geologicalDescription:
      'The cave bear, commonly identified as Ursus spelaeus, was an extinct bear associated with the Pleistocene of Europe. Cave deposits containing bear remains provide evidence of past mammal communities and environmental conditions during the Ice Age. The museum panel states that more than 30,000 cave-bear remains were found in Drachenhöhle, Austria, and discusses the possibility that bears used caves for shelter and hibernation. The displayed skull is described by its panel as a solid-resin, hand-painted cast, not necessarily an original fossil.',
    arabicGeologicalDescription:
      'دب الكهوف، المعروف عادةً باسم Ursus spelaeus، دب منقرض ارتبط بالعصر البليستوسيني في أوروبا. وتوفر رواسب الكهوف التي تحتوي على بقاياه أدلة على مجتمعات الثدييات القديمة والظروف البيئية خلال العصر الجليدي. وتذكر لوحة المتحف العثور على أكثر من 30,000 من بقايا دببة الكهوف في كهف دراخنهوهله بالنمسا، كما تناقش احتمال استخدام الدببة للكهوف للمأوى والبيات الشتوي. وتوضح اللوحة أن الجمجمة المعروضة قالب مصنوع من الراتنج الصلب ومطلي يدويًا، وليست بالضرورة أحفورة أصلية.',
    subtitle: 'Pleistocene Mammals and Cave Deposits',
    arabicSubtitle: 'ثدييات البليستوسين ورواسب الكهوف',
    type: 'Fossil Cast',
    arabicType: 'قالب أحفوري',
    specimenType: 'Adult giant cave bear skull cast',
    environment: 'European cave environments during the Ice Age',
    arabicEnvironment: 'بيئات الكهوف الأوروبية خلال العصر الجليدي',
    material: 'Solid resin, hand-painted, according to the exhibit panel',
    arabicMaterial: 'راتنج صلب مطلي يدويًا، وفقًا للوحة المعروض',
    age: 'Pleistocene context; the panel also mentions the Oligocene origin of the bear family.',
    arabicAge:
      'يرتبط دب الكهوف بالعصر البليستوسيني؛ وتشير اللوحة أيضًا إلى نشأة فصيلة الدببة خلال الأوليغوسين.',
    location: 'Drachenhöhle, Austria, mentioned on the exhibit panel.',
    arabicLocation: 'كهف دراخنهوهله، النمسا، وفقًا للوحة المعروض.',
    significance:
      'Illustrates extinct Ice Age mammals and the importance of cave deposits in studying past ecosystems.',
    arabicSignificance:
      'يوضح الثدييات المنقرضة في العصر الجليدي وأهمية رواسب الكهوف في دراسة النظم البيئية القديمة.',
    exhibitStory:
      'Large canine teeth and a robust skull provide clues about the feeding anatomy of cave bears. The panel describes cave remains from Austria and suggests that caves may have provided shelter during harsh winters. Because the displayed object is identified as a cast, it should be distinguished from an original fossil specimen.',
    arabicExhibitStory:
      'تقدم الأنياب الكبيرة والجمجمة القوية مؤشرات عن تشريح التغذية لدى دببة الكهوف. وتشير اللوحة إلى بقايا عُثر عليها في كهوف بالنمسا، وتقترح أن الكهوف ربما وفرت مأوى خلال الشتاء القاسي. ولأن المعروض موصوف بأنه قالب، فيجب تمييزه عن العينة الأحفورية الأصلية.',
    tags: ['all', 'Fossils', 'Mammals'],
  },

  {
    id: 'iguanodon',
    museumNumber: 'FOSSIL',
    name: 'Iguanodon',
    arabicName: 'إيغوانودون',
    image: FEATURED_IMAGES.iguanodon,
    gallery: [FEATURED_IMAGES.iguanodon],
    description:
      'An educational reconstruction of Iguanodon, a large herbivorous dinosaur known for its distinctive thumb spike and specialized teeth.',
    arabicDescription:
      'مجسم تعليمي للإيغوانودون، وهو ديناصور عاشب كبير اشتهر بنتوء إبهامه المميز وأسنانِه المتخصصة.',
    geologicalDescription:
      'Iguanodon was an ornithopod dinosaur that lived during the Early Cretaceous. Its teeth were adapted for processing plant material, and its thumb spike is one of its best-known anatomical features. Fossils attributed to Iguanodon have helped paleontologists understand dinosaur anatomy, locomotion, and herbivorous feeding strategies. This exhibit is a reconstruction rather than direct evidence that the displayed model itself is fossilized bone.',
    arabicGeologicalDescription:
      'كان الإيغوانودون ديناصورًا من مجموعة الأورنيثوبودات عاش خلال العصر الطباشيري المبكر. تكيفت أسنانه لمعالجة المواد النباتية، ويُعد نتوء الإبهام من أشهر سماته التشريحية. وقد ساعدت الأحافير المنسوبة إلى الإيغوانودون علماء الأحافير على فهم تشريح الديناصورات وحركتها واستراتيجيات تغذيتها النباتية. وهذا المعروض إعادة بناء تعليمية، وليس دليلًا على أن المجسم نفسه عظام متحجرة.',
    subtitle: 'Early Cretaceous Herbivorous Dinosaur',
    arabicSubtitle: 'ديناصور عاشب من الطباشيري المبكر',
    type: 'Dinosaur Model',
    arabicType: 'مجسم ديناصور',
    specimenType: 'Dinosaur reconstruction',
    environment: 'Terrestrial environments',
    arabicEnvironment: 'بيئات برية',
    significance:
      'Demonstrates dinosaur anatomy and adaptations for herbivorous feeding.',
    arabicSignificance:
      'يوضح تشريح الديناصورات وتكيفاتها مع التغذية النباتية.',
    material: 'Educational reconstruction',
    arabicMaterial: 'مجسم تعليمي',
    age: 'Early Cretaceous; approximately 126–113 million years ago for commonly discussed Iguanodon material.',
    arabicAge:
      'الطباشيري المبكر؛ نحو 126–113 مليون سنة للمواد الشائعة المنسوبة إلى الإيغوانودون.',
    exhibitStory:
      'The thumb spike may have helped with defense or other functions, while the teeth were suited to processing vegetation. Dinosaur reconstructions combine fossil evidence with scientific interpretation to help visitors visualize the appearance and possible behavior of extinct animals.',
    arabicExhibitStory:
      'ربما ساعد نتوء الإبهام في الدفاع أو في وظائف أخرى، بينما تكيفت الأسنان مع معالجة النباتات. وتجمع مجسمات الديناصورات بين الأدلة الأحفورية والتفسير العلمي لمساعدة الزوار على تصور شكل الحيوانات المنقرضة وسلوكها المحتمل.',
    tags: ['all', 'Fossils', 'Dinosaurs'],
  },

  {
    id: 'nautilus',
    museumNumber: 'FOSSIL',
    name: 'Nautilus sp.',
    arabicName: 'نوتيلوس',
    image: FEATURED_IMAGES.nautilus,
    gallery: [FEATURED_IMAGES.nautilus],
    description:
      'A large coiled-shell specimen labelled Nautilus sp. The shell displays the rounded spiral form characteristic of nautilus cephalopods.',
    arabicDescription:
      'عينة كبيرة ذات صدفة ملتفة تحمل اسم Nautilus sp. وتُظهر الصدفة الشكل الحلزوني المستدير المميز لرأسيات الأرجل من جنس نوتيلوس.',
    geologicalDescription:
      'Nautilus is a cephalopod mollusc with a chambered external shell. Internal chambers are separated by septa, while a siphuncle helps regulate the gas and liquid within the shell. Nautiloids have a long evolutionary history, and fossil relatives are useful in studying marine evolution and stratigraphy. The specimen label identifies a Jurassic age of approximately 160 million years and gives Dhurma Formation, Saudi Arabia, as the locality; these details should be retained as label information pending verification against the collection record.',
    arabicGeologicalDescription:
      'نوتيلوس رخوي من رأسيات الأرجل يمتلك صدفة خارجية مقسمة إلى حجرات. تفصل الحواجز بين الحجرات، بينما يساعد السيفون في تنظيم الغاز والسائل داخل الصدفة. وتمتلك النوتيلويدات تاريخًا تطوريًا طويلًا، وتفيد أقاربها الأحفورية في دراسة التطور البحري والطباقية. ويذكر ملصق العينة عمرًا جوراسيًا يقارب 160 مليون سنة وتكوين ضرما في المملكة العربية السعودية موقعًا لها؛ ويُفضل التحقق من هذه البيانات بمقارنتها بسجل المجموعة.',
    subtitle: 'Chambered Shell and Marine Evolution',
    arabicSubtitle: 'الصدفة الحجرية والتطور البحري',
    type: 'Fossil',
    arabicType: 'أحفورة',
    specimenType: 'Coiled shell specimen',
    texture: 'Hard shell with visible spiral growth',
    arabicTexture: 'صدفة صلبة ذات نمو حلزوني ظاهر',
    environment: 'Marine',
    arabicEnvironment: 'بحري',
    location: 'Dhurma Formation, Saudi Arabia, according to the specimen label.',
    arabicLocation: 'تكوين ضرما، المملكة العربية السعودية، وفقًا لملصق العينة.',
    significance:
      'Illustrates chambered-shell structure and the long history of cephalopods.',
    arabicSignificance:
      'يوضح بنية الصدفة المقسمة إلى حجرات والتاريخ الطويل لرأسيات الأرجل.',
    material: 'Shell material; fossil status should be confirmed from collection records.',
    arabicMaterial:
      'مادة صدفيّة؛ ينبغي تأكيد كون العينة أحفورة بالرجوع إلى سجل المجموعة.',
    age: 'Jurassic, approximately 160 million years ago, according to the specimen label.',
    arabicAge: 'العصر الجوراسي، نحو 160 مليون سنة، وفقًا لملصق العينة.',
    exhibitStory:
      'The chambered shell of a nautilus is both a protective structure and part of its buoyancy system. Fossil shells allow scientists to study changes in marine organisms through geological time and, when adequately identified and dated, can help correlate sedimentary strata.',
    arabicExhibitStory:
      'تعد صدفة النوتيلوس المقسمة إلى حجرات بنية واقية وجزءًا من نظام الطفو لديه. وتتيح الأصداف الأحفورية للعلماء دراسة تغير الكائنات البحرية عبر الزمن الجيولوجي، كما يمكنها المساعدة في مضاهاة الطبقات الرسوبية عند تحديدها وتأريخها بصورة موثوقة.',
    tags: ['all', 'Fossils', 'Marine'],
  },

  {
    id: 'history-of-life',
    museumNumber: 'FOSSIL',
    name: 'History of Life on Earth',
    arabicName: 'تاريخ الحياة على الأرض',
    image: FEATURED_IMAGES.historyOfLife,
    gallery: [FEATURED_IMAGES.historyOfLife],
    description:
      'An educational timeline illustrating major stages in the history of life, from early organisms to fishes, amphibians, reptiles, dinosaurs, and mammals.',
    arabicDescription:
      'خط زمني تعليمي يوضح مراحل رئيسية من تاريخ الحياة، من الكائنات المبكرة إلى الأسماك والبرمائيات والزواحف والديناصورات والثدييات.',
    geologicalDescription:
      'The fossil record documents the appearance, diversification, and extinction of organisms through geological time. The geological timescale organizes this history into major intervals, although the durations of those intervals are not equal. Fossils, rock layers, and radiometric dating together help establish the timing of evolutionary events and major environmental changes. This display is a teaching chart, not a fossil specimen.',
    arabicGeologicalDescription:
      'يوثق السجل الأحفوري ظهور الكائنات وتنوعها وانقراضها عبر الزمن الجيولوجي. وينظم مقياس الزمن الجيولوجي هذا التاريخ ضمن فترات رئيسية، مع أن مدد تلك الفترات ليست متساوية. وتساعد الأحافير والطبقات الصخرية والتأريخ الإشعاعي معًا على تحديد توقيت الأحداث التطورية والتغيرات البيئية الكبرى. وهذا المعروض لوحة تعليمية وليس عينة أحفورية.',
    subtitle: 'Evolution Through Geological Time',
    arabicSubtitle: 'التطور عبر الزمن الجيولوجي',
    type: 'Educational Chart',
    arabicType: 'لوحة تعليمية',
    specimenType: 'History-of-life timeline',
    significance:
      'Connects the fossil record with geological time and the evolution of life.',
    arabicSignificance:
      'تربط السجل الأحفوري بالزمن الجيولوجي وتطور الحياة.',
    material: 'Illustrated timeline display',
    arabicMaterial: 'لوحة خط زمني مصورة',
    exhibitStory:
      'A timeline helps visitors place fossils and extinct organisms within a broader sequence of Earth history. It provides a starting point for comparing major biological groups and understanding that the history of life involved both diversification and extinction.',
    arabicExhibitStory:
      'يساعد الخط الزمني الزوار على وضع الأحافير والكائنات المنقرضة ضمن تسلسل أوسع من تاريخ الأرض. ويوفر نقطة بداية لمقارنة المجموعات الحيوية الرئيسية وفهم أن تاريخ الحياة شهد التنوع والانقراض معًا.',
    tags: ['all', 'Educational', 'Geological History'],
  },

  {
    id: 'silicified-wood',
    museumNumber: 'FOSSIL',
    name: 'Silicified Wood',
    arabicName: 'خشب متحجر بالسيليكا',
    image: FEATURED_IMAGES.silicifiedWood,
    gallery: [FEATURED_IMAGES.silicifiedWood],
    description:
      'A cross-section of silicified wood showing preserved growth-ring patterns and the internal structure of an ancient tree trunk.',
    arabicDescription:
      'مقطع عرضي من خشب متحجر بالسيليكا، تظهر فيه أنماط حلقات النمو والبنية الداخلية لجذع شجرة قديمة.',
    geologicalDescription:
      'Silicified wood forms when silica-bearing fluids infiltrate buried plant material and silica precipitates within pores or replaces parts of the original tissues. This process can preserve growth rings and cellular details even after the organic material has decayed. The visible rings record patterns of tree growth, although identifying the tree species, age, and original environment requires additional evidence.',
    arabicGeologicalDescription:
      'يتكون الخشب المتحجر بالسيليكا عندما تتغلغل السوائل الحاملة للسيليكا في المادة النباتية المدفونة، فتترسب السيليكا داخل المسامات أو تستبدل أجزاءً من الأنسجة الأصلية. ويمكن لهذه العملية حفظ حلقات النمو والتفاصيل الخلوية حتى بعد تحلل المادة العضوية. وتسجل الحلقات الظاهرة أنماط نمو الشجرة، لكن تحديد نوعها وعمرها وبيئتها الأصلية يتطلب أدلة إضافية.',
    subtitle: 'Silicification and Plant Preservation',
    arabicSubtitle: 'السلكنة وحفظ البقايا النباتية',
    type: 'Petrified Wood',
    arabicType: 'خشب متحجر',
    specimenType: 'Silicified wood cross-section',
    texture: 'Hard, mineralized surface with visible growth rings',
    arabicTexture: 'سطح صلب ومتمعدن تظهر عليه حلقات النمو',
    mineralogy:
      'Silica minerals, commonly quartz or microcrystalline silica; exact composition unconfirmed.',
    arabicMineralogy:
      'معادن السيليكا، ومنها الكوارتز أو السيليكا دقيقة التبلور؛ لم يُتحقق من التركيب الدقيق.',
    formation:
      'Silica-bearing fluids enter buried wood and preserve its structure through mineral precipitation and replacement.',
    arabicFormation:
      'تدخل السوائل الحاملة للسيليكا إلى الخشب المدفون وتحفظ بنيته عبر ترسب المعادن والاستبدال.',
    color: 'Cream, tan, brown, and gray tones',
    arabicColor: 'درجات الكريمي والقمحي والبني والرمادي',
    significance:
      'Preserves evidence of ancient plant structure and mineralization processes.',
    arabicSignificance:
      'يحفظ أدلة على بنية النباتات القديمة وعمليات التمعدن.',
    material: 'Silicified wood',
    arabicMaterial: 'خشب متحجر بالسيليكا',
    exhibitStory:
      'The growth rings visible in cross-section reflect the organization of the original tree trunk. During silicification, mineral-rich fluids may preserve details that would otherwise disappear as the wood decays. This makes silicified wood valuable for studying ancient vegetation and the conditions that enabled fossil preservation.',
    arabicExhibitStory:
      'تعكس حلقات النمو الظاهرة في المقطع العرضي تنظيم جذع الشجرة الأصلي. وأثناء السلكنة، قد تحفظ السوائل الغنية بالمعادن تفاصيل كانت ستختفي مع تحلل الخشب. لذلك يفيد الخشب المتحجر بالسيليكا في دراسة النباتات القديمة والظروف التي أتاحت حفظها.',
    tags: ['all', 'Fossils', 'Petrified Wood'],
  },

  {
    id: 'concentric-stromatolites',
    museumNumber: 'FOSSIL',
    name: 'Concentric Stromatolites',
    arabicName: 'ستروماتوليتات متحدة المركز',
    image: FEATURED_IMAGES.stromatolites,
    gallery: [FEATURED_IMAGES.stromatolites],
    description:
      'A stromatolite specimen showing repeated rounded or concentric structures formed through the interaction of microbial communities and sediment.',
    arabicDescription:
      'عينة ستروماتوليت تظهر تراكيب مستديرة أو متحدة المركز نتجت عن تفاعل المجتمعات الميكروبية مع الرواسب.',
    geologicalDescription:
      'Stromatolites are layered structures commonly associated with microbial mats, including communities of photosynthetic microorganisms. These mats trap and bind sediment and may promote mineral precipitation, producing successive layers. Stromatolites are important in the study of early life and ancient environments. The specimen label identifies Wadi Fatimah in Saudi Arabia as the locality and refers to a long history of microbial activity; its exact age should be established from geological context rather than appearance alone.',
    arabicGeologicalDescription:
      'الستروماتوليتات تراكيب طبقية ترتبط عادةً بالأغشية الميكروبية، بما فيها مجتمعات من الكائنات الدقيقة القادرة على البناء الضوئي. وتحتجز هذه الأغشية الرواسب وتربطها، وقد تساعد على ترسب المعادن لتتكون طبقات متعاقبة. وتكتسب الستروماتوليتات أهمية في دراسة الحياة المبكرة والبيئات القديمة. ويحدد ملصق العينة وادي فاطمة في المملكة العربية السعودية موقعًا لها، ويشير إلى تاريخ طويل للنشاط الميكروبي؛ أما عمرها الدقيق فينبغي تحديده من السياق الجيولوجي لا من المظهر وحده.',
    subtitle: 'Microbial Structures and Early Life',
    arabicSubtitle: 'التراكيب الميكروبية والحياة المبكرة',
    type: 'Stromatolite',
    arabicType: 'ستروماتوليت',
    specimenType: 'Concentric stromatolite specimen',
    texture: 'Knobby surface with repeated rounded structures',
    arabicTexture: 'سطح عقدي يحتوي على تراكيب مستديرة متكررة',
    environment: 'Sedimentary environment influenced by microbial mats',
    arabicEnvironment: 'بيئة رسوبية تأثرت بالأغشية الميكروبية',
    location: 'Wadi Fatimah, Saudi Arabia, according to the specimen label.',
    arabicLocation: 'وادي فاطمة، المملكة العربية السعودية، وفقًا لملصق العينة.',
    significance:
      'Provides evidence of interactions between microbial communities, sediment, and mineral formation.',
    arabicSignificance:
      'تقدم دليلًا على تفاعل المجتمعات الميكروبية مع الرواسب وتكوّن المعادن.',
    material: 'Layered sedimentary and mineralized structure',
    arabicMaterial: 'تركيب طبقي رسوبي ومتمعدن',
    exhibitStory:
      'The repeated layers of stromatolites record the growth of microbial communities and the accumulation of sediment over time. By studying their shape and surrounding rocks, geologists can investigate ancient water conditions and the environments in which microbial life flourished.',
    arabicExhibitStory:
      'تسجل الطبقات المتكررة في الستروماتوليتات نمو المجتمعات الميكروبية وتراكم الرواسب بمرور الزمن. ومن خلال دراسة شكلها والصخور المحيطة بها، يستطيع الجيولوجيون بحث ظروف المياه القديمة والبيئات التي ازدهرت فيها الحياة الميكروبية.',
    tags: ['all', 'Fossils', 'Microbial Structures'],
  },

  {
    id: 'trilobites',
    museumNumber: 'FOSSIL',
    name: 'Trilobites',
    arabicName: 'ثلاثية الفصوص',
    image: FEATURED_IMAGES.trilobites,
    gallery: [FEATURED_IMAGES.trilobites],
    description:
      'A trilobite fossil showing the distinctive three-lobed body plan and segmented exoskeleton of an extinct marine arthropod.',
    arabicDescription:
      'أحفورة لثلاثية الفصوص تُظهر البنية الجسمية المميزة ذات الفصوص الثلاثة والهيكل الخارجي المقسم لمفصلي أرجل بحري منقرض.',
    geologicalDescription:
      'Trilobites were marine arthropods that lived from the Cambrian Period until the end-Permian extinction. Their bodies were divided into a central axial lobe and two lateral lobes, with a segmented thorax that allowed movement. Their abundant and diverse fossils are useful for biostratigraphy and for reconstructing Paleozoic marine ecosystems. The exact species and geological age of this specimen are not established by the photograph alone.',
    arabicGeologicalDescription:
      'كانت ثلاثيات الفصوص مفصليات أرجل بحرية عاشت من العصر الكامبري حتى انقراض نهاية العصر البرمي. وانقسم جسمها إلى فص محوري مركزي وفصين جانبيين، مع صدر مقسم إلى حلقات يتيح الحركة. وتفيد أحافيرها الوفيرة والمتنوعة في الطباقية الحيوية وإعادة بناء النظم البيئية البحرية خلال حقبة الحياة القديمة. ولا يمكن تحديد نوع هذه العينة أو عمرها الجيولوجي الدقيق من الصورة وحدها.',
    subtitle: 'Paleozoic Marine Arthropods',
    arabicSubtitle: 'مفصليات الأرجل البحرية من حقبة الحياة القديمة',
    type: 'Fossil',
    arabicType: 'أحفورة',
    specimenType: 'Trilobite fossil',
    texture: 'Segmented exoskeleton with raised ridges',
    arabicTexture: 'هيكل خارجي مقسم ذو حواف بارزة',
    environment: 'Marine seafloor',
    arabicEnvironment: 'قاع بحري',
    significance:
      'Useful for studying Paleozoic marine biodiversity and biostratigraphy.',
    arabicSignificance:
      'مهمة لدراسة التنوع الحيوي البحري في حقبة الحياة القديمة والطباقية الحيوية.',
    material: 'Fossil preserved in sedimentary rock',
    arabicMaterial: 'أحفورة محفوظة في صخر رسوبي',
    age: 'Cambrian to Permian; the age of this specimen is unconfirmed.',
    arabicAge: 'من الكامبري إلى البرمي؛ لم يُتحقق من عمر هذه العينة.',
    exhibitStory:
      'The segmented body of a trilobite made movement possible and, in many species, allowed the animal to curl for protection. Their widespread distribution and rapid evolutionary changes make many trilobite species valuable markers for correlating sedimentary rocks.',
    arabicExhibitStory:
      'أتاحت أجزاء جسم ثلاثية الفصوص الحركة، كما مكّنت بعض الأنواع من الالتفاف لحماية نفسها. ويساعد انتشارها الجغرافي الواسع وتغيرها التطوري عبر الزمن على استخدام أنواع كثيرة منها مؤشرات لمضاهاة الصخور الرسوبية.',
    tags: ['all', 'Fossils', 'Marine', 'Invertebrates'],
  },

  {
    id: 'tyrannosaurus',
    museumNumber: 'FOSSIL',
    name: 'Tyrannosaurus',
    arabicName: 'تيرانوصور',
    image: FEATURED_IMAGES.tyrannosaurus,
    gallery: [FEATURED_IMAGES.tyrannosaurus],
    description:
      'A large Tyrannosaurus reconstruction displaying a massive skull, powerful jaws, and prominent teeth adapted for capturing and processing prey.',
    arabicDescription:
      'مجسم كبير للتيرانوصور يُظهر الجمجمة الضخمة والفكين القويين والأسنان البارزة المتكيفة مع الإمساك بالفرائس وتمزيقها.',
    geologicalDescription:
      'Tyrannosaurus rex was a large theropod dinosaur that lived during the Late Cretaceous in western North America. It had a large skull, powerful jaw muscles, and teeth suited to cutting flesh and crushing bone. Its fossils provide evidence about predator-prey relationships, dinosaur growth, and ecosystems near the end of the Cretaceous. The display label identifies the model as Tyrannosaurus and lists the Lower Cretaceous, but this conflicts with the generally accepted Late Cretaceous age of T. rex; the label should be checked before publishing its age.',
    arabicGeologicalDescription:
      'كان Tyrannosaurus rex ديناصورًا ثيروبوديًا ضخمًا عاش خلال العصر الطباشيري المتأخر في غرب أمريكا الشمالية. امتلك جمجمة كبيرة وعضلات فك قوية وأسنانًا ملائمة لتقطيع اللحم وسحق العظام. وتوفر أحافيره أدلة على العلاقات بين المفترسات والفرائس ونمو الديناصورات والنظم البيئية قرب نهاية العصر الطباشيري. ويحدد ملصق المجسم اسم تيرانوصور ويذكر الطباشيري المبكر، لكن ذلك يتعارض مع العمر المقبول عمومًا لـ T. rex وهو الطباشيري المتأخر؛ لذا ينبغي مراجعة الملصق قبل نشر العمر.',
    subtitle: 'Late Cretaceous Apex Predator',
    arabicSubtitle: 'مفترس قمة من الطباشيري المتأخر',
    type: 'Dinosaur Model',
    arabicType: 'مجسم ديناصور',
    specimenType: 'Tyrannosaurus reconstruction',
    environment: 'Terrestrial environments of western North America',
    arabicEnvironment: 'البيئات البرية في غرب أمريكا الشمالية',
    significance:
      'Illustrates theropod anatomy, predatory adaptations, and Late Cretaceous ecosystems.',
    arabicSignificance:
      'يوضح تشريح الثيروبودات وتكيفات الافتراس والنظم البيئية في الطباشيري المتأخر.',
    material: 'Educational reconstruction',
    arabicMaterial: 'مجسم تعليمي',
    age: 'Late Cretaceous, approximately 68–66 million years ago for T. rex.',
    arabicAge: 'الطباشيري المتأخر، منذ نحو 68–66 مليون سنة بالنسبة إلى T. rex.',
    exhibitStory:
      'The large skull and robust teeth of Tyrannosaurus reveal adaptations associated with powerful biting and feeding. Fossil discoveries have allowed researchers to investigate its growth, anatomy, and place within the food webs of Late Cretaceous ecosystems.',
    arabicExhibitStory:
      'تكشف الجمجمة الكبيرة والأسنان القوية للتيرانوصور عن تكيفات مرتبطة بالعض القوي والتغذية. وقد أتاحت الاكتشافات الأحفورية للباحثين دراسة نموه وتشريحه وموقعه ضمن الشبكات الغذائية في النظم البيئية خلال الطباشيري المتأخر.',
    tags: ['all', 'Fossils', 'Dinosaurs'],
  },
   {
    id: 'eryops-megacephalus',
    museumNumber: 'FOSSIL',
    name: 'Eryops megacephalus',
    arabicName: 'إريوبس ميغاسيفالوس',
    image: FEATURED_IMAGES.eryopsMegacephalus,
    gallery: [FEATURED_IMAGES.eryopsMegacephalus],
    description:
      'A skeletal reconstruction of Eryops megacephalus, an extinct early tetrapod identified on the museum panel as a Lower Permian amphibian.',
    arabicDescription:
      'إعادة بناء هيكلية لإريوبس ميغاسيفالوس، وهو رباعي أطراف منقرض تصفه لوحة المتحف بأنه برمائي من البرمي المبكر.',
    geologicalDescription:
      'The exhibit panel identifies Eryops megacephalus as a Permian amphibious tetrapod from the Lower Permian. It describes the animal as more than 2 metres long, with a large skull, strong jaws, and pointed teeth. The panel also notes broad limb girdles and robust limbs, suggesting an animal capable of moving on land as well as living in wet environments. It reports that Eryops fossils are commonly found in Permian rocks in Texas and New Mexico, North America.',
    arabicGeologicalDescription:
      'تحدد لوحة المعروض Eryops megacephalus بوصفه رباعي أطراف برمائيًا من البرمي المبكر. وتصفه بأنه حيوان يزيد طوله على مترين، وله جمجمة كبيرة وفكان قويان وأسنان مدببة. وتشير اللوحة أيضًا إلى اتساع أحزمة الأطراف وقوة الأطراف، بما يتوافق مع قدرته على الحركة على اليابسة والعيش في البيئات الرطبة. كما تذكر أن أحافير إريوبس توجد بكثرة في صخور البرمي بولاية تكساس ونيو مكسيكو في أمريكا الشمالية.',
    subtitle: 'Lower Permian Amphibious Tetrapod',
    arabicSubtitle: 'رباعي أطراف برمائي من البرمي المبكر',
    type: 'Fossil Reconstruction',
    arabicType: 'إعادة بناء أحفورية',
    specimenType: 'Eryops skeletal reconstruction',
    environment: 'Swamps and wet terrestrial environments',
    arabicEnvironment: 'المستنقعات والبيئات البرية الرطبة',
    significance:
      'Helps illustrate early tetrapod anatomy, amphibious adaptations, and Permian ecosystems.',
    arabicSignificance:
      'يساعد على توضيح تشريح رباعيات الأطراف المبكرة وتكيفاتها البرمائية والنظم البيئية في العصر البرمي.',
    material: 'Skeletal reconstruction; original fossil material is not confirmed for the display.',
    arabicMaterial:
      'إعادة بناء هيكلية؛ لم يُؤكد أن المعروض يحتوي على مادة أحفورية أصلية.',
    age: 'Lower Permian, approximately 299–273 million years ago.',
    arabicAge: 'البرمي المبكر، منذ نحو 299–273 مليون سنة.',
    location: 'Texas and New Mexico, North America, as fossil regions mentioned on the panel.',
    arabicLocation:
      'تكساس ونيو مكسيكو في أمريكا الشمالية، بوصفهما منطقتين لوجود الأحافير وفقًا للوحة.',
    exhibitStory:
      'The panel explains that Eryops had a broad skull, strong jaws, and pointed teeth, and that its body structure supported movement in terrestrial environments. These features make the animal useful for discussing the ecological roles of early tetrapods during the Permian.',
    arabicExhibitStory:
      'توضح اللوحة أن إريوبس امتلك جمجمة عريضة وفكين قويين وأسنانًا مدببة، وأن بنية جسمه ساعدته على الحركة في البيئات البرية. وتجعل هذه الصفات منه مثالًا مناسبًا لمناقشة الأدوار البيئية لرباعيات الأطراف المبكرة خلال العصر البرمي.',
    tags: ['all', 'Fossils', 'Vertebrates', 'Permian'],
  },
   {
    id: 'elephant-humerus',
    museumNumber: 'FOSSIL',
    name: 'Humerus Bone of an Elephant',
    arabicName: 'عظمة العضد لفيل كبير',
    image: FEATURED_IMAGES.elephantHumerus,
    gallery: [FEATURED_IMAGES.elephantHumerus],
    description:
      'An elephant humerus specimen labelled as Pleistocene in age. The museum label records its locality as deposits associated with ancient lakes in the An Nafud Desert.',
    arabicDescription:
      'عينة من عظمة العضد لفيل كبير، يحدد ملصق المتحف عمرها بالعصر البليستوسيني، ويذكر أن موقعها رواسب مرتبطة ببحيرات قديمة في صحراء النفود.',
    geologicalDescription:
      'The humerus is the upper forelimb bone connecting the shoulder region to the elbow. In elephants and other large mammals, this bone supports body weight and is important for locomotion. Fossil elephant bones can help researchers investigate Pleistocene mammals and past environments. According to the specimen label, this bone is Pleistocene in age and was found in deposits associated with ancient lakes in the An Nafud Desert, Saudi Arabia. The exact elephant species is not specified on the visible label.',
    arabicGeologicalDescription:
      'عظمة العضد هي العظمة العلوية للطرف الأمامي، وتصل منطقة الكتف بالمرفق. وتتحمل هذه العظمة لدى الفيلة والثدييات الكبيرة الأخرى وزن الجسم، كما تؤدي دورًا مهمًا في الحركة. ويمكن لعظام الفيلة الأحفورية أن تساعد الباحثين على دراسة ثدييات العصر البليستوسيني والبيئات القديمة. ووفقًا لملصق العينة، يعود عمر العظمة إلى العصر البليستوسيني، وقد عُثر عليها في رواسب مرتبطة ببحيرات قديمة في صحراء النفود بالمملكة العربية السعودية. ولا يحدد الملصق الظاهر نوع الفيل بدقة.',
    subtitle: 'Pleistocene Elephants of Saudi Arabia',
    arabicSubtitle: 'فيلة العصر البليستوسيني في السعودية',
    type: 'Fossil Bone',
    arabicType: 'عظمة أحفورية',
    specimenType: 'Elephant humerus',
    environment: 'Ancient lake-associated deposits',
    arabicEnvironment: 'رواسب مرتبطة ببحيرات قديمة',
    location: 'An Nafud Desert, Saudi Arabia, according to the specimen label.',
    arabicLocation:
      'صحراء النفود، المملكة العربية السعودية، وفقًا لملصق العينة.',
    age: 'Pleistocene, according to the specimen label.',
    arabicAge: 'العصر البليستوسيني، وفقًا لملصق العينة.',
    significance:
      'Provides evidence for large mammals that inhabited the region during the Pleistocene and the environments in which their remains were deposited.',
    arabicSignificance:
      'تقدم دليلًا على الثدييات الكبيرة التي عاشت في المنطقة خلال البليستوسين، وعلى البيئات التي ترسبت فيها بقاياها.',
    material: 'Bone specimen; precise preservation details are not stated on the visible label.',
    arabicMaterial:
      'عينة عظمية؛ لا يوضح الملصق الظاهر تفاصيل حفظ العينة بدقة.',
    exhibitStory:
      'The humerus is a major weight-bearing bone of an elephant’s forelimb. Its presence in deposits associated with ancient lakes connects paleontology with sedimentary geology: the surrounding sediments may help researchers reconstruct the landscape and environmental conditions in which the animal lived and its remains were buried.',
    arabicExhibitStory:
      'تعد عظمة العضد من العظام الرئيسية الحاملة للوزن في الطرف الأمامي للفيل. ويربط وجودها في رواسب مرتبطة ببحيرات قديمة بين علم الأحافير والجيولوجيا الرسوبية؛ إذ قد تساعد الرواسب المحيطة الباحثين على إعادة بناء طبيعة المنطقة والظروف البيئية التي عاش فيها الحيوان ودُفنت خلالها بقاياه.',
    tags: ['all', 'Fossils', 'Mammals', 'Saudi Arabia'],
  },
  
  {
    id: "ain-heet-cave",
    museumNumber: "GEO",
    name: "Ain Heet Cave",
    arabicName: "كهف عين هيت",
    image: FEATURED_IMAGES.ainHeetCave,
    gallery: [FEATURED_IMAGES.ainHeetCave],
    type: "Geological Site",
    arabicType: "موقع جيولوجي",
    specimenType: "geological-chart",
    subtitle: "Cave and groundwater",
    arabicSubtitle: "كهف ومياه جوفية",
    description:
      "A natural cave system associated with soluble rocks and groundwater. Its underground passages illustrate how dissolution, fractures, and rock breakdown contribute to cave development.",
    arabicDescription:
      "نظام كهفي طبيعي يرتبط بالصخور القابلة للذوبان والمياه الجوفية. توضح ممراته كيف يسهم ذوبان الصخور والفواصل والانهيارات في تطور التجاويف تحت سطح الأرض.",
    geologicalDescription:
      "Ain Heet Cave is known for its underground passages and water-filled sections. Cave development is influenced by rock solubility, groundwater movement, and structural discontinuities.",
    arabicGeologicalDescription:
      "يشتهر كهف عين هيت بممراته الجوفية وأجزائه التي تحتوي على المياه. ويتأثر تطور الكهف بقابلية الصخور للذوبان، وحركة المياه الجوفية، والفواصل والشقوق الصخرية.",
    tags: ["geology", "cave", "groundwater", "library"],
  },
  {
    id: "al-qarah-mountain",
    museumNumber: "GEO",
    name: "Al-Qarah Mountain",
    arabicName: "جبل القارة",
    image: FEATURED_IMAGES.alQarahMountain,
    gallery: [FEATURED_IMAGES.alQarahMountain],
    type: "Geological Site",
    arabicType: "موقع جيولوجي",
    specimenType: "geological-chart",
    subtitle: "Weathering and cave passages",
    arabicSubtitle: "التجوية والممرات الصخرية",
    description:
      "A distinctive rocky landscape in Al-Ahsa, shaped by weathering and erosion. Variations in rock resistance and the presence of fractures contribute to its columns, slopes, and natural passages.",
    arabicDescription:
      "تضاريس صخرية مميزة في الأحساء شكّلتها التجوية والتعرية. ويسهم اختلاف مقاومة الصخور ووجود الفواصل والشقوق في تكوين الأعمدة والمنحدرات والممرات الطبيعية.",
    geologicalDescription:
      "Al-Qarah Mountain illustrates how rock structure and differential erosion shape a landscape. Its natural passages and rock forms reflect the interaction between exposed strata, fractures, and weathering.",
    arabicGeologicalDescription:
      "يوضح جبل القارة دور التركيب الصخري والتعرية التفاضلية في تشكيل التضاريس. وتعكس الممرات والأشكال الصخرية تفاعل الطبقات المكشوفة والفواصل وعمليات التجوية.",
    tags: ["geology", "landform", "library", "Al-Ahsa"],
  },
  {
    id: "al-hajar-mine",
    museumNumber: "GEO",
    name: "Al-Hajar Gold Mine",
    arabicName: "منجم الحجار",
   image: FEATURED_IMAGES.alHajarMine,
    gallery: [FEATURED_IMAGES.alHajarMine],
    type: "Mining",
    arabicType: "التعدين",
    specimenType: "petroleum-exhibit",
    subtitle: "Gold extraction",
    arabicSubtitle: "استخراج الذهب",
    description:
      "A Saudi gold-mining site that illustrates open-pit extraction and the processing of gold-bearing ore.",
    arabicDescription:
      "موقع تعدين للذهب في المملكة العربية السعودية يوضح التعدين بالحفرة المفتوحة ومعالجة الخامات الحاملة للذهب.",
    geologicalDescription:
      "Gold mining involves identifying mineralized rock, extracting ore, and processing it to recover valuable metals. The mine landscape also illustrates how excavation changes the original land surface.",
    arabicGeologicalDescription:
      "يتضمن تعدين الذهب تحديد الصخور المتمعدنة واستخراج الخام ومعالجته لاستعادة المعادن الاقتصادية. كما توضح تضاريس المنجم أثر الحفر في تغيير سطح الأرض.",
    tags: ["mining", "gold", "library", "Saudi Arabia"],
  },
  {
    id: "jabal-al-noor",
    museumNumber: "GEO",
    name: "Jabal Al Noor, Makkah",
    arabicName: "جبل النور – مكة المكرمة",
    image: FEATURED_IMAGES.jabalAlNoor,
    gallery: [FEATURED_IMAGES.jabalAlNoor],
    type: "Geological Site",
    arabicType: "موقع جيولوجي",
    specimenType: "geological-chart",
    subtitle: "Exposed crystalline rocks",
    arabicSubtitle: "صخور بلورية مكشوفة",
    description:
      "A rocky mountain in Makkah within the geological region of the Arabian Shield, known for ancient igneous and metamorphic rocks.",
    arabicDescription:
      "جبل صخري في مكة المكرمة ضمن النطاق الجيولوجي للدرع العربي، المعروف بصخوره النارية والمتحولة القديمة.",
    geologicalDescription:
      "The Arabian Shield records a long history of magmatism, metamorphism, deformation, and erosion. Exposed bedrock provides evidence for interpreting the geological evolution of western Arabia.",
    arabicGeologicalDescription:
      "يسجل الدرع العربي تاريخًا طويلًا من النشاط الناري والتحول والتشوه والتعرية. وتوفر الصخور المكشوفة أدلة تساعد على فهم التطور الجيولوجي لغرب شبه الجزيرة العربية.",
    tags: ["Arabian Shield", "igneous rocks", "metamorphism", "library"],
  },
  {
    id: "jabal-al-rahmah",
    museumNumber: "GEO",
    name: "Jabal Al Rahmah",
    arabicName: "جبل الرحمة",
    image: FEATURED_IMAGES.jabalAlRahmah,
    gallery: [FEATURED_IMAGES.jabalAlRahmah],
    type: "Geological Site",
    arabicType: "موقع جيولوجي",
    specimenType: "geological-chart",
    subtitle: "Precambrian geological history",
    arabicSubtitle: "التاريخ الجيولوجي لما قبل الكمبري",
    description:
      "A rocky landmark in Arafat within the western Arabian Shield, a region with a complex history of ancient igneous and metamorphic rocks.",
    arabicDescription:
      "معلم صخري في عرفات ضمن الدرع العربي الغربي، وهي منطقة تتميز بتاريخ جيولوجي معقد من الصخور النارية والمتحولة القديمة.",
    geologicalDescription:
      "The Arabian Shield contains diverse rock units formed and modified during Precambrian geological events. Rock identification at a specific outcrop requires examination of its mineralogy, texture, and field relationships.",
    arabicGeologicalDescription:
      "يضم الدرع العربي وحدات صخرية متنوعة تشكلت وتغيرت خلال أحداث جيولوجية في حقبة ما قبل الكمبري. ويتطلب تحديد نوع الصخر في مكشف معين دراسة معادنه ونسيجه وعلاقاته الحقلية.",
    tags: ["Arabian Shield", "Precambrian", "outcrop", "library"],
  },
  {
    id: "al-sukhaybarat-mine",
    museumNumber: "GEO-P006",
    name: "Al-Sukhaybarat Gold Mine",
    arabicName: "منجم الصخيبرات",
   image: FEATURED_IMAGES.alSukhaybaratMine,
    gallery: [FEATURED_IMAGES.alSukhaybaratMine],
    type: "Mining",
    arabicType: "التعدين",
    specimenType: "petroleum-exhibit",
    subtitle: "Gold ore and mineral processing",
    arabicSubtitle: "خام الذهب ومعالجته",
    description:
      "A Saudi gold-mining locality illustrating the extraction and processing of gold-bearing ore.",
    arabicDescription:
      "موقع لتعدين الذهب في المملكة العربية السعودية يوضح استخراج الخامات الحاملة للذهب ومعالجتها.",
    geologicalDescription:
      "Evaluating a gold deposit involves studying the host rocks, mineralized zones, alteration, and the distribution of gold. Ore grade and mineral characteristics influence how the material is processed.",
    arabicGeologicalDescription:
      "يتطلب تقييم مكمن الذهب دراسة الصخور الحاضنة ومناطق التمعدن والتحولات المعدنية وتوزيع الذهب. وتؤثر درجة الخام وخصائص معادنه في طريقة المعالجة.",
    tags: ["mining", "library", "ore processing", "Saudi Arabia"],
  },
  {
    id: "bulghah-mine",
    museumNumber: "GEO",
    name: "Bulghah Gold Mine",
    arabicName: "منجم بلغة",
    image: FEATURED_IMAGES.bulghahMine,
    gallery: [FEATURED_IMAGES.bulghahMine],
    type: "Mining",
    arabicType: "التعدين",
    specimenType: "petroleum-exhibit",
    subtitle: "Ore grade and processing",
    arabicSubtitle: "درجة الخام والمعالجة",
    description:
      "A gold-mining operation in Saudi Arabia that illustrates open-pit extraction and the importance of ore characteristics in processing.",
    arabicDescription:
      "عملية تعدين للذهب في المملكة العربية السعودية توضح الاستخراج بالحفرة المفتوحة وأهمية خصائص الخام في تحديد أسلوب المعالجة.",
    geologicalDescription:
      "Mining operations evaluate ore grade, mineral distribution, and processing requirements to determine how gold-bearing material can be recovered efficiently.",
    arabicGeologicalDescription:
      "تقيّم عمليات التعدين درجة الخام وتوزيع المعادن ومتطلبات المعالجة لتحديد الطريقة المناسبة لاستعادة الذهب من المواد المستخرجة.",
    tags: ["mining", "library", "open pit", "ore grade"],
  },
  {
    id: "elephant-rock",
    museumNumber: "GEO",
    name: "Elephant Rock",
    arabicName: "صخرة الفيل",
    image: FEATURED_IMAGES.elephantRock,
    gallery: [FEATURED_IMAGES.elephantRock],
    type: "Geological Site",
    arabicType: "موقع جيولوجي",
    specimenType: "geological-chart",
    subtitle: "Weathering and erosion",
    arabicSubtitle: "التجوية والتعرية",
    description:
      "A natural sandstone landmark in AlUla whose distinctive outline was shaped by prolonged weathering and erosion.",
    arabicDescription:
      "معلم طبيعي من الحجر الرملي في العلا تشكل محيطه المميز بفعل التجوية والتعرية على مدى فترات جيولوجية طويلة.",
    geologicalDescription:
      "Differential erosion occurs when parts of a rock mass have different resistance to weathering. Wind, rain, and sand contribute to modifying exposed sandstone surfaces over time.",
    arabicGeologicalDescription:
      "تحدث التعرية التفاضلية عندما تختلف مقاومة أجزاء الكتلة الصخرية للتجوية. وتسهم الرياح والأمطار والرمال في تغيير أسطح الحجر الرملي المكشوف مع مرور الزمن.",
    tags: ["sandstone", "erosion", "weathering", "library"],
  },
  {
    id: "step-faults-abla-group",
    museumNumber: "GEO",
    name: "Step Faults – Abla Group",
    arabicName: "الفوالق المتدرجة – مجموعة عبلة",
   image: FEATURED_IMAGES.stepFaultsAblaGroup,
    gallery: [FEATURED_IMAGES.stepFaultsAblaGroup],
    type: "Structural Geology",
    arabicType: "الجيولوجيا التركيبية",
    specimenType: "geological-chart",
    subtitle: "Displacement along fault planes",
    arabicSubtitle: "الإزاحة على أسطح الفوالق",
    description:
      "An outcrop illustrating step-like offsets associated with a series of faults in volcanic and sedimentary rocks.",
    arabicDescription:
      "مكشف صخري يوضح الإزاحات المتدرجة المرتبطة بمجموعة من الفوالق في صخور بركانية ورسوبية.",
    geologicalDescription:
      "Faults form when rocks fracture and undergo displacement. Mapping the offset layers and fault surfaces helps geologists interpret the direction and style of deformation.",
    arabicGeologicalDescription:
      "تتكون الفوالق عندما تتكسر الصخور وتتحرك الكتل على جانبي سطح الكسر. ويساعد تتبع إزاحة الطبقات وأسطح الفوالق على تفسير اتجاه التشوه وطبيعته.",
    tags: ["faults", "structural geology", "Abla Group", "library"],
  },
  {
    id: "jabal-umm-makhrouq",
    museumNumber: "GEO",
    name: "Jabal Umm Makhrouq",
    arabicName: "جبل أم مخروق",
   image: FEATURED_IMAGES.jabalUmmMakhrouq,
    gallery: [FEATURED_IMAGES.jabalUmmMakhrouq],
    type: "Geological Site",
    arabicType: "موقع جيولوجي",
    specimenType: "geological-chart",
    subtitle: "Carbonate sedimentary rocks",
    arabicSubtitle: "الصخور الرسوبية الكربوناتية",
    description:
      "A geological landscape associated with limestone in the Arab Formation, part of the Jurassic sedimentary succession of eastern Arabia.",
    arabicDescription:
      "منظر جيولوجي يرتبط بالحجر الجيري في تكوين العرب، الذي يُعد جزءًا من التتابعات الرسوبية الجوراسية في شرق شبه الجزيرة العربية.",
    geologicalDescription:
      "The Arab Formation contains carbonate rocks and evaporites deposited in alternating sedimentary cycles. Limestone and dolomite units are important to understanding ancient depositional environments and subsurface reservoir systems.",
    arabicGeologicalDescription:
      "يحتوي تكوين العرب على صخور كربوناتية ومتبخرات ترسبت ضمن دورات رسوبية متعاقبة. وتساعد وحدات الحجر الجيري والدولوميت على فهم البيئات الترسيبية القديمة وأنظمة المكامن في باطن الأرض.",
    tags: ["limestone", "Arab Formation", "sedimentary geology", "library"],
  },
  {
    id: "jeddah-green-schist-amphibolite",
    museumNumber: "GEO-P011",
    name: "Green Schist and Amphibolites – Jeddah Group",
    arabicName: "الشيست الأخضر والأمفيبوليت – مجموعة جدة",
    image: FEATURED_IMAGES.jeddahGroup,
    gallery: [FEATURED_IMAGES.jeddahGroup],
    type: "Metamorphic Geology",
    arabicType: "الجيولوجيا التحولية",
    specimenType: "geological-chart",
    subtitle: "Mineral assemblages and metamorphism",
    arabicSubtitle: "التجمعات المعدنية والتحول",
    description:
      "A rock outcrop labelled as green schist and amphibolites, illustrating metamorphic rocks associated with the Jeddah Group.",
    arabicDescription:
      "مكشف صخري مُعرّف بالشيست الأخضر والأمفيبوليت، يوضح الصخور المتحولة المرتبطة بمجموعة جدة.",
    geologicalDescription:
      "Green-schist rocks commonly contain minerals such as chlorite and actinolite. Amphibolites typically contain amphibole and plagioclase. Mineral assemblages and textures help interpret metamorphic conditions.",
    arabicGeologicalDescription:
      "تحتوي صخور الشيست الأخضر عادةً على معادن مثل الكلوريت والأكتينوليت، بينما يتكون الأمفيبوليت غالبًا من الأمفيبول والبلاجيوكليز. وتساعد التجمعات المعدنية والأنسجة على تفسير ظروف التحول.",
    tags: ["metamorphic rocks", "green schist", "library", "Jeddah Group"],
  },
  {
    id: "mada-in-saleh",
    museumNumber: "GEO",
    name: "Mada'in Saleh (Al-Hijr)",
    arabicName: "مدائن صالح – الحِجر",
    image: FEATURED_IMAGES.madaInSaleh,
    gallery: [FEATURED_IMAGES.madaInSaleh],
    type: "Geological Site",
    arabicType: "موقع جيولوجي",
    specimenType: "geological-chart",
    subtitle: "Sandstone and rock-cut architecture",
    arabicSubtitle: "الحجر الرملي والنحت الصخري",
    description:
      "Al-Hijr features sandstone outcrops shaped by weathering and erosion. Its rock formations also provide the setting for the area's distinctive rock-cut heritage.",
    arabicDescription:
      "تتميز الحِجر بمكاشف الحجر الرملي التي شكلتها التجوية والتعرية، وتوفر تكويناتها الصخرية البيئة الطبيعية للواجهات الأثرية المنحوتة في الصخور.",
    geologicalDescription:
      "Fractures, bedding, and differences in sandstone resistance influence the development of cliffs and isolated rock masses. These properties also affect how rock faces weather and preserve carved surfaces.",
    arabicGeologicalDescription:
      "تؤثر الفواصل والتطبق واختلاف مقاومة الحجر الرملي في تشكل الجروف والكتل الصخرية المنعزلة. كما تؤثر هذه الخصائص في تجوية الواجهات الصخرية والمحافظة على الأسطح المنحوتة.",
    tags: ["sandstone", "library", "Al-Hijr", "geological heritage"],
  },
  {
    id: "mahd-al-dhahab",
    museumNumber: "GEO",
    name: "Mahd Al Dhahab Mine",
    arabicName: "منجم مهد الذهب",
    image: FEATURED_IMAGES.mahdAlDhahab,
    gallery: [FEATURED_IMAGES.mahdAlDhahab],
    type: "Mining",
    arabicType: "التعدين",
    specimenType: "petroleum-exhibit",
    subtitle: "Hydrothermal mineralization",
    arabicSubtitle: "التمعدن الحراري المائي",
    description:
      "A historic gold and silver mining district within the Arabian Shield, associated with mineralized zones in ancient rocks.",
    arabicDescription:
      "منطقة تعدين تاريخية للذهب والفضة ضمن الدرع العربي، ترتبط بمناطق تمعدن في الصخور القديمة.",
    geologicalDescription:
      "Hydrothermal fluids can transport dissolved metals through fractures and deposit minerals as temperature, pressure, or fluid chemistry changes. Quartz veins and associated sulfide minerals are important features in many gold-bearing systems.",
    arabicGeologicalDescription:
      "يمكن للسوائل الحرارية المائية نقل المعادن الذائبة عبر الشقوق وترسيبها عند تغير الحرارة أو الضغط أو التركيب الكيميائي للسائل. وتُعد عروق الكوارتز ومعادن الكبريتيدات المصاحبة من السمات المهمة في كثير من أنظمة الذهب.",
    tags: ["gold", "silver", "library", "Arabian Shield"],
  },
  {
    id: "mansourah-massarah",
    museumNumber: "GEO",
    name: "Mansourah and Massarah Mines",
    arabicName: "منجما منصورة ومسرة",
    image: FEATURED_IMAGES.mansourahMassarah,
    gallery: [FEATURED_IMAGES.mansourahMassarah],
    type: "Mining",
    arabicType: "التعدين",
    specimenType: "petroleum-exhibit",
    subtitle: "Mineralized structures and ore zones",
    arabicSubtitle: "التراكيب المتمعدنة ومناطق الخام",
    description:
      "A Saudi gold-mining project that illustrates how mineralized zones and their host rocks are evaluated during exploration and mine planning.",
    arabicDescription:
      "مشروع لتعدين الذهب في المملكة العربية السعودية يوضح كيفية تقييم مناطق التمعدن والصخور الحاضنة خلال الاستكشاف والتخطيط للتعدين.",
    geologicalDescription:
      "Gold deposits may be localized along faults, shear zones, and altered rocks. Understanding the geometry and continuity of mineralized zones is important for resource evaluation and mine design.",
    arabicGeologicalDescription:
      "قد تتركز مكامن الذهب على امتداد الفوالق ومناطق القص والصخور المتحولة كيميائيًا. ويساعد فهم هندسة مناطق التمعدن واستمراريتها على تقييم الموارد وتصميم المنجم.",
    tags: ["gold", "mining", "mineral exploration", "library"],
  },
  {
    id: "folded-fatima-formation",
    museumNumber: "GEO-P015",
    name: "Folded Strata of the Middle Member of Fatima Formation",
    arabicName: "طبقات مطوية من العضو الأوسط لتكوين فاطمة",
    image: FEATURED_IMAGES.muraFold,
    gallery: [FEATURED_IMAGES.muraFold],
    type: "Structural Geology",
    arabicType: "الجيولوجيا التركيبية",
    specimenType: "geological-chart",
    subtitle: "Folding and tectonic deformation",
    arabicSubtitle: "الطيات والتشوه التكتوني",
    description:
      "An outcrop showing folded strata in the Middle Member of the Fatima Formation, illustrating how tectonic forces deform originally layered rocks.",
    arabicDescription:
      "مكشف يوضح طبقات مطوية من العضو الأوسط لتكوين فاطمة، ويبيّن كيف تؤدي القوى التكتونية إلى تشوه الصخور التي كانت في الأصل على هيئة طبقات.",
    geologicalDescription:
      "Folds develop when rock layers bend under stress. Their geometry, orientation, and relationship to surrounding structures help geologists reconstruct deformation and geological history.",
    arabicGeologicalDescription:
      "تتكون الطيات عندما تنحني الطبقات الصخرية تحت تأثير الإجهاد. وتساعد هندستها واتجاهاتها وعلاقتها بالتراكيب المحيطة على إعادة بناء تاريخ التشوه والتطور الجيولوجي.",
    tags: ["library", "structural geology", "Fatima Formation", "deformation"],
  },
  {
    id: "recent-fossil-animal-comparison",
    museumNumber: "GEO-P016",
    name: "Recent and Fossil Animals in Comparison",
    arabicName: "مقارنة الحيوانات الحديثة والأحافير",
    image: FEATURED_IMAGES.fossilMural,
    gallery: [FEATURED_IMAGES.fossilMural],
    type: "Educational Display",
    arabicType: "لوحة تعليمية",
    specimenType: "geological-chart",
    subtitle: "Living organisms and the fossil record",
    arabicSubtitle: "الكائنات الحية والسجل الأحفوري",
    description:
      "An educational display comparing modern and fossil animal forms across several groups of invertebrates and vertebrates.",
    arabicDescription:
      "لوحة تعليمية تقارن بين أشكال الحيوانات الحديثة والأحفورية ضمن مجموعات متعددة من اللافقاريات والفقاريات.",
    geologicalDescription:
      "Fossils preserve evidence of past life and help scientists investigate biodiversity, evolutionary change, and ancient environments. Comparisons between living organisms and fossil remains can reveal similarities and differences in hard-part structures.",
    arabicGeologicalDescription:
      "تحفظ الأحافير أدلة على الحياة القديمة، وتساعد العلماء على دراسة التنوع الحيوي والتغير التطوري والبيئات القديمة. وتكشف المقارنة بين الكائنات الحية وبقاياها الأحفورية أوجه التشابه والاختلاف في الأجزاء الصلبة.",
    tags: ["paleontology", "fossils", "library", "educational display"],
  },
  
{
  id: "normal-faults",
  museumNumber: "GEO",
  name: "Set of Normal Faults",
  arabicName: "مجموعة من الصدوع العادية",
  image: FEATURED_IMAGES.normalFaults,
  gallery: [FEATURED_IMAGES.normalFaults],
  type: "Geological Structure",
  arabicType: "تركيب جيولوجي",
  specimenType: "geological-chart",
  subtitle: "Faulting and extension",
  arabicSubtitle: "الصدوع والتمدد",
  description:
    "A geological display illustrating a set of normal faults, structures formed when the Earth's crust is extended and the hanging wall moves downward relative to the footwall.",
  arabicDescription:
    "عرض جيولوجي يوضح مجموعة من الصدوع العادية، وهي تراكيب تتكون عند تعرض القشرة الأرضية للتمدد وهبوط الحائط العلوي بالنسبة إلى الحائط السفلي.",
  geologicalDescription:
    "Normal faults accommodate extensional deformation. Their geometry and displacement help geologists interpret crustal stretching and the structural history of an area.",
  arabicGeologicalDescription:
    "تستوعب الصدوع العادية التشوه الناتج عن قوى التمدد. ويساعد شكلها ومقدار الإزاحة فيها الجيولوجيين على تفسير تمدد القشرة الأرضية والتاريخ التركيبي للمنطقة.",
  tags: ["geology", "faults", "structures", "library"],
},
{
  id: "jabal-al-saq",
  museumNumber: "GEO",
  name: "Jabal Al Saq",
  arabicName: "جبل الساق",
  image: FEATURED_IMAGES.jabalAlSaq,
  gallery: [FEATURED_IMAGES.jabalAlSaq],
  type: "Geological Site",
  arabicType: "موقع جيولوجي",
  specimenType: "geological-chart",
  subtitle: "Paleozoic sandstones — Al Qassim",
  arabicSubtitle: "أحجار رملية من حقبة الحياة القديمة — القصيم",
  description:
    "A geological display featuring Jabal Al Saq and its Paleozoic sandstone formations in the Al Qassim region of Saudi Arabia.",
  arabicDescription:
    "عرض جيولوجي يسلط الضوء على جبل الساق وتكويناته من الأحجار الرملية العائدة إلى حقبة الحياة القديمة في منطقة القصيم بالمملكة العربية السعودية.",
  geologicalDescription:
    "Sandstone is a sedimentary rock composed mainly of sand-sized grains. Its textures and sedimentary structures can provide evidence of the processes and environments in which the sediments were deposited.",
  arabicGeologicalDescription:
    "الحجر الرملي صخر رسوبي يتكون أساسًا من حبيبات بحجم الرمل. ويمكن أن توفر أنسجته وتراكيبه الرسوبية أدلة على العمليات والبيئات التي ترسبت فيها الرواسب.",
  tags: ["geology", "sandstone", "paleozoic", "al-qassim", "library"],
},
{
  id: "primary-sedimentary-structures",
  museumNumber: "GEO-P004",
  name: "Primary Sedimentary Structures",
  arabicName: "التراكيب الرسوبية الأولية",
  image: FEATURED_IMAGES.primarySedimentaryStructures,
  gallery: [FEATURED_IMAGES.primarySedimentaryStructures],
  type: "Sedimentary Structure",
  arabicType: "تركيب رسوبي",
  specimenType: "geological-chart",
  subtitle: "Large-scale and herringbone cross-bedding",
  arabicSubtitle: "التطبق المتقاطع كبير المقياس وتطبق عظمة السمكة",
  description:
    "An educational display illustrating large-scale cross-bedding and herringbone cross-bedding, two sedimentary structures that preserve evidence of sediment transport and depositional conditions.",
  arabicDescription:
    "لوحة تعليمية توضح التطبق المتقاطع كبير المقياس والتطبق المتقاطع على هيئة عظمة السمكة، وهما تركيبان رسوبيان يحفظان أدلة على انتقال الرواسب وظروف ترسيبها.",
  geologicalDescription:
    "Cross-bedding forms as migrating ripples or dunes deposit inclined layers. Herringbone cross-bedding features opposing sets of inclined layers and is commonly associated with reversing currents, particularly in tidal environments.",
  arabicGeologicalDescription:
    "يتكون التطبق المتقاطع عندما تتحرك التموجات أو الكثبان وتترسب طبقات مائلة. أما التطبق المتقاطع على هيئة عظمة السمكة فيتميز بمجموعات من الطبقات المائلة في اتجاهات متعاكسة، ويرتبط غالبًا بالتيارات المتغيرة الاتجاه، خصوصًا في البيئات المدّية.",
  tags: ["geology", "sedimentary", "cross-bedding", "sedimentology", "library"],
},
{
  id: "wadi-ghadab-arch",
  museumNumber: "GEO",
  name: "Wadi Ghadab Arch",
  arabicName: "قوس وادي غضب",
  image: FEATURED_IMAGES.wadiGhadabArch,
  gallery: [FEATURED_IMAGES.wadiGhadabArch],
  type: "Geological Landform",
  arabicType: "مظهر جيولوجي طبيعي",
  specimenType: "geological-chart",
  subtitle: "Natural rock arch",
  arabicSubtitle: "قوس صخري طبيعي",
  description:
    "A natural rock arch featured as an example of the distinctive landforms found in Saudi Arabia.",
  arabicDescription:
    "قوس صخري طبيعي يُعرض مثالًا على المظاهر الأرضية الصخرية المميزة في المملكة العربية السعودية.",
  geologicalDescription:
    "Natural rock arches develop through weathering and erosion that progressively remove rock material. Their formation depends on rock properties, fractures, and the local erosional processes.",
  arabicGeologicalDescription:
    "تتكون الأقواس الصخرية الطبيعية بفعل التجوية والتعرية اللتين تزيلان المواد الصخرية تدريجيًا. ويتأثر تطورها بخصائص الصخور والفواصل والعمليات التعرية المحلية.",
  tags: ["geology", "landform", "erosion", "rock-arch", "library"],
},
{
  id: "ripple-marks",
  museumNumber: "GEO",
  name: "Ripple Marks",
  arabicName: "علامات التموج",
  image: FEATURED_IMAGES.rippleMarks,
  gallery: [FEATURED_IMAGES.rippleMarks],
  type: "Sedimentary Structure",
  arabicType: "تركيب رسوبي",
  specimenType: "geological-chart",
  subtitle: "Records of sediment movement",
  arabicSubtitle: "آثار حركة الرواسب",
  description:
    "A geological display showing ripple marks, small ridges and troughs formed on loose sediment by moving water or wind.",
  arabicDescription:
    "عرض جيولوجي يوضح علامات التموج، وهي نتوءات وأخاديد صغيرة تتكون على الرواسب المفككة بفعل حركة المياه أو الرياح.",
  geologicalDescription:
    "Ripple marks may preserve information about the movement of water or wind during deposition. Their shape and orientation can help interpret sedimentary environments and, in suitable cases, current direction.",
  arabicGeologicalDescription:
    "قد تحفظ علامات التموج معلومات عن حركة المياه أو الرياح أثناء الترسيب. ويمكن أن يساعد شكلها واتجاهها في تفسير البيئات الرسوبية، وفي حالات مناسبة تحديد اتجاه التيار.",
  tags: ["geology", "sedimentary", "ripple-marks", "sedimentology", "library"],
},
{
  id: "series-of-folds",
  museumNumber: "GEO",
  name: "Series of Folds",
  arabicName: "مجموعة من الطيات",
  image: FEATURED_IMAGES.seriesOfFolds,
  gallery: [FEATURED_IMAGES.seriesOfFolds],
  type: "Geological Structure",
  arabicType: "تركيب جيولوجي",
  specimenType: "geological-chart",
  subtitle: "Anticlines and synclines",
  arabicSubtitle: "الطيات المحدبة والمقعرة",
  description:
    "A geological display illustrating a series of folds, including anticlines and synclines, formed when rock layers bend under deformation.",
  arabicDescription:
    "عرض جيولوجي يوضح مجموعة من الطيات، بما فيها الطيات المحدبة والمقعرة، التي تتكون عندما تنثني الطبقات الصخرية نتيجة التشوه.",
  geologicalDescription:
    "An anticline is generally an arch-shaped fold, while a syncline is generally a trough-shaped fold. Fold geometry helps geologists interpret rock deformation and regional geological structure.",
  arabicGeologicalDescription:
    "تكون الطية المحدبة عمومًا على هيئة قوس، بينما تكون الطية المقعرة على هيئة حوض أو تقعر. ويساعد شكل الطيات الجيولوجيين على تفسير تشوه الصخور والبنية الجيولوجية الإقليمية.",
  tags: ["geology", "folds", "anticline", "syncline", "library"],
},
{
  id: "geological-map-of-saudi-arabia",
  museumNumber: "GEO",
  name: "Geologic Map of Saudi Arabia",
  arabicName: "الخريطة الجيولوجية للمملكة العربية السعودية",
  image: FEATURED_IMAGES.geologicalMapSaudiArabia,
  gallery: [FEATURED_IMAGES.geologicalMapSaudiArabia],
  type: "Geological Map",
  arabicType: "خريطة جيولوجية",
  specimenType: "geological-chart",
  subtitle: "Regional geology and rock units",
  arabicSubtitle: "الجيولوجيا الإقليمية والوحدات الصخرية",
  description:
    "A geological map presenting the distribution of geological units across Saudi Arabia and illustrating the country's regional geological framework.",
  arabicDescription:
    "خريطة جيولوجية توضح توزيع الوحدات الجيولوجية في أنحاء المملكة العربية السعودية، وتعرض الإطار الجيولوجي الإقليمي للبلاد.",
  geologicalDescription:
    "Geological maps represent the surface distribution of rock units, their ages, and geological structures. They support regional interpretation, geological mapping, and mineral exploration.",
  arabicGeologicalDescription:
    "تمثل الخرائط الجيولوجية التوزيع السطحي للوحدات الصخرية وأعمارها وتراكيبها الجيولوجية. وتُستخدم في التفسير الإقليمي وإعداد الخرائط الجيولوجية واستكشاف المعادن.",
  tags: ["geology", "map", "saudi-arabia", "regional-geology", "library"],
},
{
  id: "history-of-the-earth",
  museumNumber: "GEO",
  name: "The History of the Earth",
  arabicName: "تاريخ الأرض",
  image: FEATURED_IMAGES.historyOfEarth,
  gallery: [FEATURED_IMAGES.historyOfEarth],
  type: "Educational Display",
  arabicType: "عرض تعليمي",
  specimenType: "geological-chart",
  subtitle: "Geological time",
  arabicSubtitle: "الزمن الجيولوجي",
  description:
    "An educational display introducing Earth's geological history through the major divisions of geological time.",
  arabicDescription:
    "عرض تعليمي يقدم تاريخ الأرض الجيولوجي من خلال التقسيمات الرئيسية للزمن الجيولوجي.",
  geologicalDescription:
    "The geological time scale organizes Earth's history into eons, eras, periods, and smaller units. It provides a framework for understanding the ages of rocks, fossils, and major geological events.",
  arabicGeologicalDescription:
    "ينظم مقياس الزمن الجيولوجي تاريخ الأرض إلى دهور وحقب وعصور ووحدات زمنية أصغر. ويوفر إطارًا لفهم أعمار الصخور والأحافير والأحداث الجيولوجية الكبرى.",
  tags: ["geology", "earth-history", "geological-time", "education", "library"],
},
{
  id: "huda-al-sham-field-trips",
  museumNumber: "GEO",
  name: "Huda Al-Sham Geological Field Trips",
  arabicName: "الرحلات الحقلية الجيولوجية إلى هدى الشام",
  image: FEATURED_IMAGES.hudaAlShamFieldTrips,
  gallery: [FEATURED_IMAGES.hudaAlShamFieldTrips],
  type: "Educational Display",
  arabicType: "عرض تعليمي",
  specimenType: "geological-chart",
  subtitle: "King Abdulaziz University",
  arabicSubtitle: "جامعة الملك عبدالعزيز",
  description:
    "A photographic display documenting geological field trips to Huda Al-Sham associated with the Faculty of Earth Sciences at King Abdulaziz University.",
  arabicDescription:
    "عرض مصور يوثق الرحلات الحقلية الجيولوجية إلى هدى الشام المرتبطة بكلية علوم الأرض في جامعة الملك عبدالعزيز.",
  geologicalDescription:
    "Geological field trips provide opportunities to observe rock exposures and geological features directly, document field relationships, and connect classroom learning with practical geological investigation.",
  arabicGeologicalDescription:
    "تتيح الرحلات الحقلية الجيولوجية فرصة مشاهدة المكاشف الصخرية والظواهر الجيولوجية مباشرة، وتوثيق العلاقات الحقلية، وربط المعرفة النظرية بالدراسة الجيولوجية التطبيقية.",
  tags: ["geology", "field-trips", "huda-al-sham", "king-abdulaziz-university", "library"],
},
{
  id: "tuwaiq-mountains",
  museumNumber: "GEO",
  name: "Tuwaiq Mountains",
  arabicName: "جبال طويق",
  image: FEATURED_IMAGES.tuwaiqMountains,
  gallery: [FEATURED_IMAGES.tuwaiqMountains],
  type: "Geological Landform",
  arabicType: "مظهر جيولوجي طبيعي",
  specimenType: "geological-chart",
  subtitle: "Jurassic limestones",
  arabicSubtitle: "أحجار جيرية من العصر الجوراسي",
  description:
    "A geological display featuring the Tuwaiq Mountains, known for their prominent escarpments and Jurassic sedimentary rock exposures.",
  arabicDescription:
    "عرض جيولوجي يسلط الضوء على جبال طويق، المعروفة بحوافها الصخرية البارزة ومكاشف الصخور الرسوبية العائدة إلى العصر الجوراسي.",
  geologicalDescription:
    "Limestone is a sedimentary rock composed predominantly of calcium carbonate. Jurassic limestone sequences in central Saudi Arabia record ancient depositional environments and have since been exposed by erosion.",
  arabicGeologicalDescription:
    "الحجر الجيري صخر رسوبي يتكون أساسًا من كربونات الكالسيوم. وتسجل متتابعات الحجر الجيري الجوراسي في وسط المملكة العربية السعودية بيئات ترسيب قديمة، ثم انكشفت بفعل التعرية.",
  tags: ["geology", "tuwaiq", "limestone", "jurassic", "saudi-arabia", "library"],
},
{
  id: "volcanic-cones-harrat-al-madinah",
  museumNumber: "GEO",
  name: "Volcanic Cones of Harrat Al-Madinah",
  arabicName: "المخاريط البركانية في حرات المدينة المنورة",
  image: FEATURED_IMAGES.volcanicConesHarratMadinah,
  gallery: [FEATURED_IMAGES.volcanicConesHarratMadinah],
  type: "Volcanic Landform",
  arabicType: "مظهر بركاني",
  specimenType: "geological-chart",
  subtitle: "Volcanic cones and lava fields",
  arabicSubtitle: "المخاريط البركانية وحقول الحمم",
  description:
    "A geological display illustrating volcanic cones in the Harrat Al-Madinah region of western Saudi Arabia.",
  arabicDescription:
    "عرض جيولوجي يوضح المخاريط البركانية في منطقة حرات المدينة المنورة غرب المملكة العربية السعودية.",
  geologicalDescription:
    "Volcanic cones develop through the accumulation of erupted material around volcanic vents. Their shapes and associated deposits provide evidence of volcanic activity and eruption processes.",
  arabicGeologicalDescription:
    "تتكون المخاريط البركانية من تراكم المواد المقذوفة حول الفوهات البركانية. وتوفر أشكالها والرواسب المرتبطة بها أدلة على النشاط البركاني وعمليات الثوران.",
  tags: ["geology", "volcanoes", "harrat-al-madinah", "volcanic-cones", "library"],
},





{
  id: "satellite-image-atlas-al-bahah",
  museumNumber: "GEO-B001",
  name: "Satellite Image Atlas of Al-Bahah",
  arabicName: "أطلس الصور الفضائية لمنطقة علبة الباحة",
  image: FEATURED_IMAGES.satelliteAtlasAlBahah,
  gallery: [FEATURED_IMAGES.satelliteAtlasAlBahah],
  type: "Geological Reference Book",
  arabicType: "كتاب مرجعي جيولوجي",
  specimenType: "geological-chart",
  subtitle: "Satellite imagery and remote sensing",
  arabicSubtitle: "الصور الفضائية والاستشعار عن بُعد",
  description:
    "A regional atlas presenting satellite imagery of the Al-Bahah area in Saudi Arabia. It documents the use of satellite images to examine landscape patterns and regional surface features.",
  arabicDescription:
    "أطلس إقليمي يعرض صورًا فضائية لمنطقة الباحة في المملكة العربية السعودية، ويوثق استخدام الصور الفضائية في دراسة أنماط سطح الأرض والظواهر المكانية على المستوى الإقليمي.",
  geologicalDescription:
    "Satellite imagery and remote sensing support geological interpretation by revealing regional patterns, surface features, and possible geological lineaments. The specific applications presented in this atlas should be confirmed from its contents.",
  arabicGeologicalDescription:
    "تُستخدم الصور الفضائية وتقنيات الاستشعار عن بُعد في التفسير الجيولوجي من خلال إظهار الأنماط الإقليمية والظواهر السطحية والخطيات الجيولوجية المحتملة. وتحتاج التطبيقات التفصيلية لهذا الأطلس إلى التحقق من محتواه.",
  tags: [
    "geology",
    "remote-sensing",
    "satellite-imagery",
    "al-bahah",
    "books",
    "library",
  ],
},
{
  id: "arabian-shield-geology",
  museumNumber: "GEO-B002",
  name: "Geology of the Arabian Shield",
  arabicName: "جيولوجية الدرع العربي",
  image: FEATURED_IMAGES.arabianShieldGeology,
  gallery: [FEATURED_IMAGES.arabianShieldGeology],
  type: "Geology Book",
  arabicType: "كتاب جيولوجي",
  specimenType: "geological-chart",
  subtitle: "Regional geology of western Arabia",
  arabicSubtitle: "الجيولوجيا الإقليمية لغرب شبه الجزيرة العربية",
  description:
    "A geological reference on the Arabian Shield by Ahmed Mahmoud Salman Al-Shanti, published by the Scientific Publishing Center at King Abdulaziz University.",
  arabicDescription:
    "مرجع جيولوجي عن الدرع العربي من تأليف أحمد محمود سلمان الشنطي، صادر عن مركز النشر العلمي بجامعة الملك عبدالعزيز.",
  geologicalDescription:
    "The Arabian Shield is a major geological province in western Saudi Arabia. Its geological history includes volcanic and sedimentary successions, deformation, metamorphism, and intrusive igneous activity. The shield is also important for its mineral resources.",
  arabicGeologicalDescription:
    "يمثل الدرع العربي إقليمًا جيولوجيًا رئيسيًا في غرب المملكة العربية السعودية. ويشمل تاريخه الجيولوجي متتابعات بركانية ورسوبية، وتشوهًا وتحوّلًا صخريًا، ونشاطًا ناريًا جوفيًا. كما تبرز أهميته لاحتوائه على موارد معدنية.",
  tags: [
    "geology",
    "arabian-shield",
    "regional-geology",
    "saudi-arabia",
    "books",
    "library",
  ],
},
{
  id: "principles-of-geochemistry",
  museumNumber: "GEO-B003",
  name: "Principles of Geochemistry",
  arabicName: "أسس الجيوكيمياء",
  image: FEATURED_IMAGES.principlesOfGeochemistry,
  gallery: [FEATURED_IMAGES.principlesOfGeochemistry],
  type: "Geochemistry Book",
  arabicType: "كتاب في الجيوكيمياء",
  specimenType: "geological-chart",
  subtitle: "Chemical processes in Earth materials",
  arabicSubtitle: "العمليات الكيميائية في مواد الأرض",
  description:
    "An Arabic-language reference on geochemistry authored by Mohammed Ahmed Qazzaz, also catalogued with Ahmed Hasaneen Hashad, and published by King Abdulaziz University.",
  arabicDescription:
    "مرجع باللغة العربية في علم الجيوكيمياء، منسوب إلى محمد أحمد قزاز، ويظهر أحمد حسنين حشاد ضمن بياناته في بعض الفهارس، وصادر عن جامعة الملك عبدالعزيز.",
  geologicalDescription:
    "Geochemistry examines the chemical composition of Earth materials and the processes that control the distribution and movement of chemical elements in rocks, minerals, soils, and natural fluids.",
  arabicGeologicalDescription:
    "تدرس الجيوكيمياء التركيب الكيميائي لمواد الأرض والعمليات التي تتحكم في توزيع العناصر الكيميائية وانتقالها داخل الصخور والمعادن والتربة والسوائل الطبيعية.",
  tags: [
    "geology",
    "geochemistry",
    "chemical-elements",
    "minerals",
    "books",
    "library",
  ],
},
{
  id: "sequence-stratigraphy",
  museumNumber: "GEO-B004",
  name: "Sequence Stratigraphy",
  arabicName: "الطباقية التتابعية",
  image: FEATURED_IMAGES.sequenceStratigraphy,
  gallery: [FEATURED_IMAGES.sequenceStratigraphy],
  type: "Stratigraphy Book",
  arabicType: "كتاب في علم الطبقات",
  specimenType: "geological-chart",
  subtitle: "Sedimentary sequences and stratigraphic relationships",
  arabicSubtitle: "التتابعات الرسوبية والعلاقات الطباقية",
  description:
    "An Arabic edition of a reference on sequence stratigraphy prepared and edited by Dominic Emery and Keith Myers, with translation credited on the book cover to Mohammed Khalil Mohammed Khalil and Faisal Abdulmohsen Al-Qahtani.",
  arabicDescription:
    "نسخة عربية من مرجع في الطباقية التتابعية، أعدّها وحرّرها دومينيك إيمري وكيث مايرز، وتظهر على الغلاف أسماء محمد خليل محمد خليل وفيصل عبدالمحسن القحطاني ضمن أسماء المترجمين.",
  geologicalDescription:
    "Sequence stratigraphy studies the organization of sedimentary successions and their bounding surfaces. It helps geologists interpret changes in accommodation, sediment supply, and depositional environments through geological time.",
  arabicGeologicalDescription:
    "تدرس الطباقية التتابعية تنظيم المتتابعات الرسوبية والأسطح التي تحدّها. وتساعد الجيولوجيين على تفسير التغيرات في الحيز المتاح للترسيب وإمداد الرواسب والبيئات الترسيبية عبر الزمن الجيولوجي.",
  tags: [
    "geology",
    "stratigraphy",
    "sequence-stratigraphy",
    "sedimentary-rocks",
    "books",
    "library",
  ],
},
{
  id: "introduction-to-crystal-optics-and-minerals",
  museumNumber: "GEO-B005",
  name: "Introduction to Crystal Optics and Minerals",
  arabicName: "مقدمة في بصريات البلورات والمعادن",
  image: FEATURED_IMAGES.crystalOpticsMinerals,
  gallery: [FEATURED_IMAGES.crystalOpticsMinerals],
  type: "Mineralogy Book",
  arabicType: "كتاب في علم المعادن",
  specimenType: "geological-chart",
  subtitle: "Crystal structures and optical mineralogy",
  arabicSubtitle: "التراكيب البلورية والبصريات المعدنية",
  description:
    "A mineralogy reference by Abdullah Abdulaziz Sibtan and Abdulqader Maghazi, published by the Scientific Publishing Center at King Abdulaziz University.",
  arabicDescription:
    "مرجع في علم المعادن من تأليف عبدالله عبدالعزيز سبتان وعبدالقادر مغازي، صادر عن مركز النشر العلمي بجامعة الملك عبدالعزيز.",
  geologicalDescription:
    "The book introduces crystal structures and crystallographic systems, then discusses optical mineral identification using a polarizing microscope. Topics described in published coverage include orthoscopic and conoscopic examination and the optical properties used to distinguish minerals.",
  arabicGeologicalDescription:
    "يقدم الكتاب التراكيب البلورية والأنظمة البلورية، ثم يتناول التعرف على المعادن بصريًا باستخدام المجهر المستقطب. وتشمل الموضوعات الواردة في العرض المنشور دراسة المعادن بالطرق الأورثوسكوبية والكونوسكوبية والخواص البصرية المستخدمة في التمييز بينها.",
  tags: [
    "geology",
    "mineralogy",
    "crystallography",
    "optical-mineralogy",
    "books",
    "library",
  ],
},
{
  id: "introduction-to-earth-science",
  museumNumber: "GEO-B006",
  name: "Introduction to Earth Science",
  arabicName: "مقدمة في علم الأرض",
  image: FEATURED_IMAGES.introductionToEarthScience,
  gallery: [FEATURED_IMAGES.introductionToEarthScience],
  type: "Earth Science Book",
  arabicType: "كتاب في علوم الأرض",
  specimenType: "geological-chart",
  subtitle: "Fundamentals of Earth science",
  arabicSubtitle: "أساسيات علوم الأرض",
  description:
    "An introductory Earth science textbook by Abdullah bin Omar Nasif, Mohammed Hussein Abdulaziz Basyouni, and Mohammed Khalil Mohammed Khalil, published by the Scientific Publishing Center at King Abdulaziz University.",
  arabicDescription:
    "كتاب تمهيدي في علم الأرض من تأليف عبدالله بن عمر نصيف ومحمد حسين عبدالعزيز بسيوني ومحمد خليل محمد خليل، صادر عن مركز النشر العلمي بجامعة الملك عبدالعزيز.",
  geologicalDescription:
    "Earth science brings together the study of Earth's materials, structure, processes, and history. An introductory reference provides a foundation for understanding geological phenomena and the relationships between Earth's systems.",
  arabicGeologicalDescription:
    "تجمع علوم الأرض دراسة مواد الأرض وبنيتها وعملياتها وتاريخها. ويوفر المرجع التمهيدي أساسًا لفهم الظواهر الجيولوجية والعلاقات بين الأنظمة المختلفة للأرض.",
  tags: [
    "geology",
    "earth-science",
    "introductory-textbook",
    "king-abdulaziz-university",
    "books",
    "library",
  ],
},
{
  id: "earth-science-textbook",
  museumNumber: "GEO-B007",
  name: "Earth Science",
  arabicName: "علم الأرض",
  image: FEATURED_IMAGES.earthScienceBook,
  gallery: [FEATURED_IMAGES.earthScienceBook],
  type: "Earth Science Book",
  arabicType: "كتاب في علوم الأرض",
  specimenType: "geological-chart",
  subtitle: "Earth materials and geological processes",
  arabicSubtitle: "مواد الأرض والعمليات الجيولوجية",
  description:
    "An Arabic Earth science textbook associated with the College of Earth Sciences at King Abdulaziz University. The cover lists Abdullah Omar Nasif, Abdulaziz Abdulmalik Raddin, and Mamdouh Abdulghafour Hassan.",
  arabicDescription:
    "كتاب باللغة العربية في علم الأرض، يرتبط بكلية علوم الأرض بجامعة الملك عبدالعزيز. ويظهر على الغلاف عبدالله عمر نصيف وعبدالعزيز عبد الملك رادين وممدوح عبدالغفور حسن.",
  geologicalDescription:
    "Earth science examines the materials that make up the planet, the processes that modify them, and the geological evidence used to reconstruct Earth's history. The exact chapter contents of this edition have not been independently verified.",
  arabicGeologicalDescription:
    "يدرس علم الأرض المواد التي يتكون منها الكوكب والعمليات التي تغيّرها والأدلة الجيولوجية المستخدمة في إعادة بناء تاريخ الأرض. ولم يتم التحقق بصورة مستقلة من محتويات فصول هذه الطبعة.",
  tags: [
    "geology",
    "earth-science",
    "geological-processes",
    "king-abdulaziz-university",
    "books",
    "library",
  ],
},
{
  id: "introduction-to-economic-geology",
  museumNumber: "GEO-B008",
  name: "Introduction to Economic Geology",
  arabicName: "مقدمة في الجيولوجيا الاقتصادية",
  image: FEATURED_IMAGES.introductionToEconomicGeology,
  gallery: [FEATURED_IMAGES.introductionToEconomicGeology],
  type: "Economic Geology Book",
  arabicType: "كتاب في الجيولوجيا الاقتصادية",
  specimenType: "geological-chart",
  subtitle: "Mineral resources and geological deposits",
  arabicSubtitle: "الموارد المعدنية والرواسب الجيولوجية",
  description:
    "An Arabic-language reference on economic geology by Dr. Talal bin Mustafa Qadhi, as identified on the book cover.",
  arabicDescription:
    "مرجع باللغة العربية في الجيولوجيا الاقتصادية من تأليف الدكتور طلال بن مصطفى قاضي، وفقًا للاسم الظاهر على غلاف الكتاب.",
  geologicalDescription:
    "Economic geology investigates geological materials and deposits that may have economic value. It considers how mineral deposits form, their geological settings, and the characteristics relevant to evaluating mineral resources.",
  arabicGeologicalDescription:
    "تبحث الجيولوجيا الاقتصادية في المواد والرواسب الجيولوجية التي قد تمتلك قيمة اقتصادية. وتشمل دراسة كيفية تكوّن الرواسب المعدنية وبيئاتها الجيولوجية والخصائص المهمة لتقييم الموارد المعدنية.",
  tags: [
    "geology",
    "economic-geology",
    "mineral-deposits",
    "mineral-resources",
    "books",
    "library",
  ],
},

{
  id: "engineering-geology-applications",
  museumNumber: "GEO-B009",
  name: "Applications of Engineering Geology",
  arabicName: "تطبيقات الجيولوجيا الهندسية",
  image: FEATURED_IMAGES.engineeringGeologyApplications,
  gallery: [FEATURED_IMAGES.engineeringGeologyApplications],
  type: "Engineering Geology Book",
  arabicType: "كتاب في الجيولوجيا الهندسية",
  specimenType: "geological-chart",
  subtitle: "Geology in engineering projects",
  arabicSubtitle: "تطبيقات الجيولوجيا في المشاريع الهندسية",
  description:
    "An Arabic reference by Abdullah bin Abdulaziz Sibtan, published by King Abdulaziz University. The book focuses on applications of geological knowledge in engineering contexts.",
  arabicDescription:
    "مرجع باللغة العربية من تأليف عبدالله بن عبدالعزيز سبتان، صادر عن جامعة الملك عبدالعزيز، ويتناول تطبيقات المعرفة الجيولوجية في المجالات الهندسية.",
  geologicalDescription:
    "Engineering geology applies geological principles to the planning, design, construction, and maintenance of engineering works. Geological conditions such as rock properties, discontinuities, groundwater, and slope stability can influence project safety and performance.",
  arabicGeologicalDescription:
    "توظف الجيولوجيا الهندسية المبادئ الجيولوجية في تخطيط المنشآت الهندسية وتصميمها وتنفيذها وصيانتها. وقد تؤثر خصائص الصخور والفواصل والمياه الجوفية واستقرار المنحدرات في سلامة المشاريع وأدائها.",
  tags: [
    "geology",
    "engineering-geology",
    "rock-mechanics",
    "groundwater",
    "books",
    "library",
  ],
},
{
  id: "environmental-science-geological-perspective",
  museumNumber: "GEO-B010",
  name: "Environmental Science from a Geological Perspective",
  arabicName: "علم البيئة من منظور جيولوجي",
  image: FEATURED_IMAGES.environmentalScienceGeologicalPerspective,
  gallery: [FEATURED_IMAGES.environmentalScienceGeologicalPerspective],
  type: "Environmental Geology Book",
  arabicType: "كتاب في الجيولوجيا البيئية",
  specimenType: "geological-chart",
  subtitle: "Earth systems and the environment",
  arabicSubtitle: "أنظمة الأرض والبيئة",
  description:
    "An Arabic book by Abdullah bin Abdulaziz Sibtan, published by the Scientific Publishing Center at King Abdulaziz University. It approaches environmental topics from a geological perspective.",
  arabicDescription:
    "كتاب باللغة العربية من تأليف عبدالله بن عبدالعزيز سبتان، صادر عن مركز النشر العلمي بجامعة الملك عبدالعزيز، ويتناول القضايا البيئية من منظور جيولوجي.",
  geologicalDescription:
    "A geological perspective on environmental science considers interactions among rocks, soils, groundwater, surface processes, and human activities. These relationships are important when evaluating environmental change and geological hazards.",
  arabicGeologicalDescription:
    "يدرس المنظور الجيولوجي للبيئة التفاعلات بين الصخور والتربة والمياه الجوفية والعمليات السطحية والأنشطة البشرية. وتكتسب هذه العلاقات أهمية عند تقييم التغيرات البيئية والمخاطر الجيولوجية.",
  tags: [
    "geology",
    "environmental-geology",
    "environment",
    "earth-systems",
    "books",
    "library",
  ],
},
{
  id: "geological-geochemical-exploration-mineral-deposits",
  museumNumber: "GEO-B011",
  name: "Introduction to Geological and Geochemical Exploration for Mineral Deposits",
  arabicName: "مقدمة في الاستكشاف الجيولوجي والجيوكيميائي للرواسب المعدنية",
  image: FEATURED_IMAGES.geologicalGeochemicalExploration,
  gallery: [FEATURED_IMAGES.geologicalGeochemicalExploration],
  type: "Mineral Exploration Book",
  arabicType: "كتاب في استكشاف المعادن",
  specimenType: "geological-chart",
  subtitle: "Exploration methods and mineral deposits",
  arabicSubtitle: "طرق الاستكشاف والرواسب المعدنية",
  description:
    "A specialized Arabic reference on geological and geochemical exploration for mineral deposits, published by the Scientific Publishing Center at King Abdulaziz University.",
  arabicDescription:
    "مرجع متخصص في الاستكشاف الجيولوجي والجيوكيميائي للرواسب المعدنية، صادر عن مركز النشر العلمي بجامعة الملك عبدالعزيز.",
  geologicalDescription:
    "Geological exploration uses regional mapping, rock observations, structural interpretation, and mineralogical evidence to identify prospective areas. Geochemical exploration analyzes the distribution of chemical elements in samples to help detect anomalies that may indicate mineralization.",
  arabicGeologicalDescription:
    "يعتمد الاستكشاف الجيولوجي على الخرائط الإقليمية والمشاهدات الصخرية والتفسير التركيبي والأدلة المعدنية لتحديد المناطق الواعدة. أما الاستكشاف الجيوكيميائي فيدرس توزيع العناصر الكيميائية في العينات للكشف عن الشذوذات التي قد تشير إلى وجود تمعدن.",
  tags: [
    "geology",
    "geochemical-exploration",
    "mineral-exploration",
    "ore-deposits",
    "geochemistry",
    "books",
    "library",
  ],
},
{
  id: "field-geology-arabian-shield",
  museumNumber: "GEO-B012",
  name: "Fundamentals of Field Geology and Its Applications in the Arabian Shield",
  arabicName: "أسس الجيولوجيا الحقلية وتطبيقاتها في الدرع العربي",
  image: FEATURED_IMAGES.fieldGeologyArabianShield,
  gallery: [FEATURED_IMAGES.fieldGeologyArabianShield],
  type: "Field Geology Book",
  arabicType: "كتاب في الجيولوجيا الحقلية",
  specimenType: "geological-chart",
  subtitle: "Field methods and Arabian Shield geology",
  arabicSubtitle: "الطرق الحقلية وجيولوجية الدرع العربي",
  description:
    "An Arabic reference covering field geology and its applications in the Arabian Shield, published by the Scientific Publishing Center at King Abdulaziz University.",
  arabicDescription:
    "مرجع باللغة العربية يتناول أسس الجيولوجيا الحقلية وتطبيقاتها في الدرع العربي، صادر عن مركز النشر العلمي بجامعة الملك عبدالعزيز.",
  geologicalDescription:
    "Field geology involves observing and describing outcrops, identifying rock units, recording structural measurements, and preparing geological maps. In the Arabian Shield, these methods support the study of ancient igneous and metamorphic rocks and their geological relationships.",
  arabicGeologicalDescription:
    "تشمل الجيولوجيا الحقلية ملاحظة المكاشف ووصفها، وتحديد الوحدات الصخرية، وتسجيل القياسات التركيبية، وإعداد الخرائط الجيولوجية. وفي الدرع العربي، تدعم هذه الأساليب دراسة الصخور النارية والمتحولة القديمة والعلاقات الجيولوجية بينها.",
  tags: [
    "geology",
    "field-geology",
    "arabian-shield",
    "geological-mapping",
    "structural-geology",
    "books",
    "library",
  ],
},
{
  id: "dictionary-of-minerals",
  museumNumber: "GEO-B013",
  name: "Dictionary of Minerals",
  arabicName: "معجم المعادن",
  image: FEATURED_IMAGES.dictionaryOfMinerals,
  gallery: [FEATURED_IMAGES.dictionaryOfMinerals],
  type: "Mineralogy Reference Book",
  arabicType: "مرجع في علم المعادن",
  specimenType: "geological-chart",
  subtitle: "Mineral terminology and identification",
  arabicSubtitle: "مصطلحات المعادن والتعرف عليها",
  description:
    "An Arabic mineral reference titled Dictionary of Minerals. The cover credits Dr. Abdulaziz Abdulqader Hussein with its compilation and translation.",
  arabicDescription:
    "مرجع معدني باللغة العربية بعنوان معجم المعادن، ويذكر الغلاف الدكتور عبدالعزيز عبدالقادر حسين في بيانات التجميع والترجمة.",
  geologicalDescription:
    "A mineral dictionary provides terminology used to describe and classify minerals. Mineral identification commonly considers properties such as hardness, luster, streak, cleavage, crystal form, and chemical composition.",
  arabicGeologicalDescription:
    "يوفر معجم المعادن المصطلحات المستخدمة في وصف المعادن وتصنيفها. ويعتمد التعرف على المعادن عادةً على خصائص مثل الصلادة والبريق والمخدش والانفصام والشكل البلوري والتركيب الكيميائي.",
  tags: [
    "geology",
    "mineralogy",
    "mineral-identification",
    "dictionary",
    "reference",
    "books",
    "library",
  ],
},
{
  id: "famous-gemstones",
  museumNumber: "GEO-B014",
  name: "Famous Gemstones: Their Origins and Identification",
  arabicName: "أشهر أنواع الأحجار الكريمة: نشأتها وكيفية التعرف عليها",
  image: FEATURED_IMAGES.famousGemstones,
  gallery: [FEATURED_IMAGES.famousGemstones],
  type: "Gemology Book",
  arabicType: "كتاب في علم الأحجار الكريمة",
  specimenType: "geological-chart",
  subtitle: "Gemstone formation and identification",
  arabicSubtitle: "نشأة الأحجار الكريمة والتعرف عليها",
  description:
    "An Arabic reference introducing famous gemstone varieties, their origins, and methods of identification. It was published by the Scientific Publishing Center at King Abdulaziz University.",
  arabicDescription:
    "مرجع باللغة العربية يقدم أشهر أنواع الأحجار الكريمة ونشأتها وطرق التعرف عليها، وصادر عن مركز النشر العلمي بجامعة الملك عبدالعزيز.",
  geologicalDescription:
    "Gemstones are valued minerals or rocks used in jewelry and ornamental objects. Their identification may involve color, transparency, hardness, refractive behavior, inclusions, crystal structure, and, where necessary, laboratory testing.",
  arabicGeologicalDescription:
    "الأحجار الكريمة معادن أو صخور ذات قيمة تُستخدم في الحلي والزينة. وقد يعتمد التعرف عليها على اللون والشفافية والصلادة والخواص الانكسارية والشوائب والبنية البلورية، وقد يتطلب الأمر إجراء فحوص مخبرية.",
  tags: [
    "geology",
    "gemstones",
    "gemology",
    "mineral-identification",
    "crystals",
    "books",
    "library",
  ],
},
{
  id: "principles-of-general-geology",
  museumNumber: "GEO-B015",
  name: "Principles of General Geology",
  arabicName: "مبادئ الجيولوجيا العامة",
  image: FEATURED_IMAGES.principlesOfGeneralGeology,
  gallery: [FEATURED_IMAGES.principlesOfGeneralGeology],
  type: "Geology Textbook",
  arabicType: "كتاب دراسي في الجيولوجيا",
  specimenType: "geological-chart",
  subtitle: "Fundamentals of geological science",
  arabicSubtitle: "أساسيات علم الجيولوجيا",
  description:
    "A general geology textbook by Mohammed Rashad Hassan Mufti and Hamdi Hamed Abdel Nabi Youssef, published by the Scientific Publishing Center at King Abdulaziz University.",
  arabicDescription:
    "كتاب دراسي في الجيولوجيا العامة من تأليف محمد رشاد حسن مفتي وحمدي حامد عبدالنبي يوسف، صادر عن مركز النشر العلمي بجامعة الملك عبدالعزيز.",
  geologicalDescription:
    "General geology introduces the materials, structures, and processes of Earth. Its foundational subjects include minerals, rocks, plate tectonics, geological time, and the processes that shape Earth's surface and interior.",
  arabicGeologicalDescription:
    "تقدم الجيولوجيا العامة دراسة مواد الأرض وتراكيبها وعملياتها. وتشمل موضوعاتها الأساسية المعادن والصخور وتكتونية الصفائح والزمن الجيولوجي والعمليات التي تشكل سطح الأرض وداخلها.",
  tags: [
    "geology",
    "general-geology",
    "geology-textbook",
    "rocks",
    "minerals",
    "books",
    "library",
  ],
},
{
  id: "geochemistry-of-mineral-deposits",
  museumNumber: "GEO-B016",
  name: "Geochemistry of Mineral Deposits",
  arabicName: "جيوكيمياء الرواسب المعدنية",
  image: FEATURED_IMAGES.geochemistryMineralDeposits,
  gallery: [FEATURED_IMAGES.geochemistryMineralDeposits],
  type: "Economic Geology Book",
  arabicType: "كتاب في الجيولوجيا الاقتصادية",
  specimenType: "geological-chart",
  subtitle: "Chemical signatures of mineral deposits",
  arabicSubtitle: "البصمات الكيميائية للرواسب المعدنية",
  description:
    "An Arabic reference on the geochemistry of mineral deposits by Mohammed bin Ahmed Qazzaz, published by the Scientific Publishing Center at King Abdulaziz University.",
  arabicDescription:
    "مرجع باللغة العربية في جيوكيمياء الرواسب المعدنية من تأليف محمد بن أحمد قزاز، صادر عن مركز النشر العلمي بجامعة الملك عبدالعزيز.",
  geologicalDescription:
    "The geochemistry of mineral deposits examines the chemical behavior and distribution of elements during mineralization. Geochemical patterns can help researchers investigate ore-forming processes, alteration zones, and geochemical anomalies associated with mineral deposits.",
  arabicGeologicalDescription:
    "تدرس جيوكيمياء الرواسب المعدنية السلوك الكيميائي للعناصر وتوزيعها أثناء عمليات التمعدن. ويمكن أن تساعد الأنماط الجيوكيميائية في دراسة عمليات تكوّن الخامات ومناطق التغير والشذوذات الجيوكيميائية المرتبطة بالرواسب المعدنية.",
  tags: [
    "geology",
    "geochemistry",
    "mineral-deposits",
    "economic-geology",
    "ore-exploration",
    "books",
    "library",
  ],
},
{
  id: "metamorphic-rocks-introduction",
  museumNumber: "GEO-B017",
  name: "Introduction to Metamorphic Rocks",
  arabicName: "مقدمة في الصخور المتحولة",
  image: FEATURED_IMAGES.metamorphicRocksIntroduction,
  gallery: [FEATURED_IMAGES.metamorphicRocksIntroduction],
  type: "Book",
  arabicType: "كتاب",
  specimenType: "geological-chart",
  subtitle: "Metamorphic rocks and their characteristics",
  arabicSubtitle: "الصخور المتحولة وخصائصها",
  description:
    "An Arabic geological reference introducing metamorphic rocks and the processes associated with their formation and transformation.",
  arabicDescription:
    "مرجع جيولوجي باللغة العربية يقدم الصخور المتحولة والعمليات المرتبطة بتكوّنها وتحولها.",
  geologicalDescription:
    "The book introduces metamorphic rocks, which form when pre-existing rocks undergo mineralogical or textural changes under changing temperature, pressure, and chemical conditions.",
  arabicGeologicalDescription:
    "يتناول الكتاب الصخور المتحولة التي تتكون عندما تتغير الصخور السابقة معدنيًا أو نسيجيًا نتيجة اختلاف درجات الحرارة والضغط والظروف الكيميائية.",
  tags: ["metamorphic rocks", "petrology", "library", "الصخور المتحولة", "علم الصخور"]
},
{
  id: "petrogenesis-metamorphic-rocks",
  museumNumber: "GEO-B018",
  name: "Petrogenesis of Metamorphic Rocks",
  arabicName: "نشأة الصخور المتحولة",
  image: FEATURED_IMAGES.petrogenesisMetamorphicRocks,
  gallery: [FEATURED_IMAGES.petrogenesisMetamorphicRocks],
  type: "Book",
  arabicType: "كتاب",
  specimenType: "geological-chart",
  subtitle: "Metamorphic processes and P–T conditions",
  arabicSubtitle: "عمليات التحول وظروف الضغط والحرارة",
  description:
    "An Arabic translation of a specialized reference on the origin and development of metamorphic rocks. The cover credits Kurt Bucher and Martin Frey as authors and Essam bin Yahya Al-Filali as translator.",
  arabicDescription:
    "ترجمة عربية لمرجع متخصص في نشأة الصخور المتحولة وتطورها. يذكر الغلاف كورت بوخر ومارتن فراي مؤلفَين، وعصام بن يحيى الفيلالي مترجمًا.",
  geologicalDescription:
    "Metamorphic petrogenesis examines how parent rocks change under different pressure–temperature conditions and how mineral assemblages help interpret metamorphic environments.",
  arabicGeologicalDescription:
    "تدرس نشأة الصخور المتحولة كيفية تغير الصخور الأصلية تحت ظروف مختلفة من الضغط والحرارة، وكيف تساعد التجمعات المعدنية في تفسير بيئات التحول.",
  tags: ["petrogenesis", "metamorphism", "library", "temperature", "نشأة الصخور", "التحول الصخري"]
},
{
  id: "dictionary-geological-terms",
  museumNumber: "GEO-B019",
  name: "Dictionary of Geological Terms",
  arabicName: "معجم المصطلحات الجيولوجية",
  image: FEATURED_IMAGES.dictionaryGeologicalTerms,
  gallery: [FEATURED_IMAGES.dictionaryGeologicalTerms],
  type: "Book",
  arabicType: "كتاب",
  specimenType: "geological-chart",
  subtitle: "English–Arabic geological terminology",
  arabicSubtitle: "المصطلحات الجيولوجية إنجليزي–عربي",
  description:
    "A bilingual geological terminology reference intended to help readers understand geological vocabulary in English and Arabic. The cover credits Abdulaziz Abdulqadir Hussein.",
  arabicDescription:
    "مرجع ثنائي اللغة للمصطلحات الجيولوجية يساعد القارئ على فهم المفردات العلمية باللغتين الإنجليزية والعربية. يذكر الغلاف اسم عبدالعزيز عبدالقادر حسين.",
  geologicalDescription:
    "Geological terminology covers concepts used in mineralogy, petrology, stratigraphy, structural geology, and other Earth science disciplines.",
  arabicGeologicalDescription:
    "تشمل المصطلحات الجيولوجية مفاهيم مستخدمة في علم المعادن، وعلم الصخور، والطباقية، والجيولوجيا التركيبية، وغيرها من تخصصات علوم الأرض.",
  tags: ["geological terminology", "library", "English Arabic", "مصطلحات جيولوجية", "معجم"]
},
{
  id: "digital-satellite-image-processing",
  museumNumber: "GEO-B020",
  name: "Digital Satellite Image Processing and Applications in Earth Sciences",
  arabicName: "معالجة الصور الفضائية الرقمية وبعض التطبيقات في علوم الأرض",
  image: FEATURED_IMAGES.digitalSatelliteImageProcessing,
  gallery: [FEATURED_IMAGES.digitalSatelliteImageProcessing],
  type: "Book",
  arabicType: "كتاب",
  specimenType: "geological-chart",
  subtitle: "Remote sensing and Earth science applications",
  arabicSubtitle: "الاستشعار عن بُعد وتطبيقاته في علوم الأرض",
  description:
    "A specialized reference on digital satellite image processing and its applications in Earth sciences. The cover credits Adel Zain Al-Abidin Bashtah and Abdullah bin Rashid Sunbul.",
  arabicDescription:
    "مرجع متخصص في معالجة الصور الفضائية الرقمية وتطبيقاتها في علوم الأرض. يذكر الغلاف اسمي عادل زين العابدين بشته وعبدالله بن رشيد سنبل.",
  geologicalDescription:
    "Digital satellite imagery can support geological mapping, lithological discrimination, structural interpretation, and the identification of surface features relevant to mineral exploration.",
  arabicGeologicalDescription:
    "تُستخدم الصور الفضائية الرقمية في دعم الخرائط الجيولوجية، والتمييز بين الوحدات الصخرية، وتفسير التراكيب الجيولوجية، والتعرف على المعالم السطحية المهمة للاستكشاف المعدني.",
  tags: ["remote sensing", "library ", "digital image processing", "الاستشعار عن بعد", "الصور الفضائية"]
},
{
  id: "description-igneous-metamorphic-rocks",
  museumNumber: "GEO-B021",
  name: "Description of Igneous and Metamorphic Rocks",
  arabicName: "وصف الصخور النارية والمتحولة",
  image: FEATURED_IMAGES.descriptionIgneousMetamorphicRocks,
  gallery: [FEATURED_IMAGES.descriptionIgneousMetamorphicRocks],
  type: "Book",
  arabicType: "كتاب",
  specimenType: "geological-chart",
  subtitle: "Identification and description of rocks",
  arabicSubtitle: "التعرف على الصخور ووصفها",
  description:
    "A geological reference focused on the description of igneous and metamorphic rocks, as indicated by its Arabic title.",
  arabicDescription:
    "مرجع جيولوجي متخصص في وصف الصخور النارية والمتحولة، وفقًا للعنوان الظاهر على الغلاف.",
  geologicalDescription:
    "Describing igneous and metamorphic rocks commonly involves observing mineral composition, texture, grain size, fabric, and relationships between constituent minerals.",
  arabicGeologicalDescription:
    "يتضمن وصف الصخور النارية والمتحولة عادةً دراسة التركيب المعدني، والنسيج، وحجم الحبيبات، والبنية الصخرية، والعلاقات بين المعادن المكوّنة للصخر.",
  tags: ["igneous rocks", "metamorphic rocks", "library", "الصخور النارية", "الصخور المتحولة"]
},
{
  id: "igneous-rocks",
  museumNumber: "GEO-B022",
  name: "Igneous Rocks",
  arabicName: "الصخور النارية",
  image: FEATURED_IMAGES.igneousRocks,
  gallery: [FEATURED_IMAGES.igneousRocks],
  type: "Book",
  arabicType: "كتاب",
  specimenType: "geological-chart",
  subtitle: "Magmatism and igneous rock classification",
  arabicSubtitle: "الصهارة وتصنيف الصخور النارية",
  description:
    "An Arabic geological reference devoted to igneous rocks. The cover displays the title and two author names, although their full names require clearer verification.",
  arabicDescription:
    "مرجع جيولوجي باللغة العربية مخصص للصخور النارية. يظهر على الغلاف عنوان الكتاب واسما مؤلفَين، لكن يلزم التحقق من الاسمين كاملين قبل تسجيلهما.",
  geologicalDescription:
    "Igneous rocks form through the cooling and solidification of magma or lava. Their classification commonly considers mineral composition, silica content, and texture.",
  arabicGeologicalDescription:
    "تتكون الصخور النارية من تبريد وتصلب الصهارة أو اللابة، ويعتمد تصنيفها عادةً على التركيب المعدني ومحتوى السيليكا والنسيج الصخري.",
  tags: ["igneous petrology", "library", "lava", "rock classification", "الصخور النارية", "الصهارة"]
},
{
  id: "industrial-minerals-rocks",
  museumNumber: "GEO-B023",
  name: "Industrial Minerals and Rocks and Their Uses",
  arabicName: "المعادن والصخور الصناعية واستخداماتها",
  image: FEATURED_IMAGES.industrialMineralsRocks,
  gallery: [FEATURED_IMAGES.industrialMineralsRocks],
  type: "Book",
  arabicType: "كتاب",
  specimenType: "geological-chart",
  subtitle: "Mineral resources and industrial applications",
  arabicSubtitle: "الموارد المعدنية والتطبيقات الصناعية",
  description:
    "An Arabic reference covering industrial minerals and rocks and their uses. The cover credits Talal Mustafa Qadi, Ahmed Hassan Ahmed, and Adel Abdullah Surour.",
  arabicDescription:
    "مرجع باللغة العربية يتناول المعادن والصخور الصناعية واستخداماتها. يذكر الغلاف طلال مصطفى قاضي، وأحمد حسن أحمد، وعادل عبدالله سرور.",
  geologicalDescription:
    "Industrial minerals and rocks are geological materials used in sectors such as construction, manufacturing, ceramics, and other industrial processes, depending on their physical and chemical properties.",
  arabicGeologicalDescription:
    "المعادن والصخور الصناعية مواد جيولوجية تُستخدم في قطاعات مثل البناء والتصنيع والسيراميك وغيرها من العمليات الصناعية، وفقًا لخصائصها الفيزيائية والكيميائية.",
  tags: ["industrial minerals", "industrial rocks", "mineral resources", "library", "الصخور الصناعية"]
},
{
  id: "clastic-sedimentary-petrology-lab",
  museumNumber: "GEO-B024",
  name: "Laboratory Manual in Clastic Sedimentary Petrology",
  arabicName: "دليل المختبر في علم الصخور الرسوبية الفتاتية",
  image: FEATURED_IMAGES.clasticSedimentaryPetrologyLab,
  gallery: [FEATURED_IMAGES.clasticSedimentaryPetrologyLab],
  type: "Book",
  arabicType: "كتاب",
  specimenType: "geological-chart",
  subtitle: "Laboratory study of clastic sediments",
  arabicSubtitle: "الدراسة المختبرية للرواسب الفتاتية",
  description:
    "An English-language laboratory manual by Rushdi Jamal Taj and Mahmoud Ahmed Aref, published by the Scientific Publishing Center at King Abdulaziz University.",
  arabicDescription:
    "دليل مختبري باللغة الإنجليزية من تأليف Rushdi Jamal Taj وMahmoud Ahmed Aref، صادر عن مركز النشر العلمي بجامعة الملك عبدالعزيز.",
  geologicalDescription:
    "Clastic sedimentary petrology examines sediment grains, grain-size distributions, sorting, roundness, composition, and other characteristics used to interpret sediment transport and depositional environments.",
  arabicGeologicalDescription:
    "يدرس علم الصخور الرسوبية الفتاتية حبيبات الرواسب وتوزيع أحجامها، والفرز، والاستدارة، والتركيب، وغيرها من الخصائص التي تساعد في تفسير نقل الرواسب وبيئات الترسيب.",
  tags: ["clastic sediments", "sedimentary petrology", "library", "الرواسب الفتاتية", "الصخور الرسوبية"]
},
{
  id: "mineralogy-volume-one",
  museumNumber: "GEO-B025",
  name: "Mineralogy, Volume One: Introduction to Mineralogy",
  arabicName: "علم المعادن – المجلد الأول: مقدمة في علم المعادن",
  image: FEATURED_IMAGES.mineralogyVolume1,
  gallery: [FEATURED_IMAGES.mineralogyVolume1],
  type: "Book",
  arabicType: "كتاب",
  specimenType: "geological-chart",
  subtitle: "Fundamentals of mineralogy",
  arabicSubtitle: "أساسيات علم المعادن",
  description:
    "The first volume of an Arabic mineralogy reference, introducing the science of minerals.",
  arabicDescription:
    "المجلد الأول من مرجع عربي في علم المعادن، يتناول مقدمة في دراسة المعادن وخصائصها.",
  geologicalDescription:
    "Mineralogy studies the composition, structure, physical properties, formation, and classification of minerals.",
  arabicGeologicalDescription:
    "يدرس علم المعادن التركيب الكيميائي والبنية والخصائص الفيزيائية وطرق التكوّن وتصنيف المعادن.",
  tags: ["mineralogy", "library", "mineral properties", "علم المعادن", "المعادن"]
},
{
  id: "mineralogy-silicate-minerals-volume-two",
  museumNumber: "GEO-B026",
  name: "Mineralogy, Volume Two: Silicate Minerals",
  arabicName: "علم المعادن – المجلد الثاني: المعادن السيليكاتية",
  image: FEATURED_IMAGES.silicateMineralsVolume2,
  gallery: [FEATURED_IMAGES.silicateMineralsVolume2],
  type: "Book",
  arabicType: "كتاب",
  specimenType: "geological-chart",
  subtitle: "Silicate mineral structures and classification",
  arabicSubtitle: "تراكيب المعادن السيليكاتية وتصنيفها",
  description:
    "The second volume of the mineralogy series, devoted to silicate minerals.",
  arabicDescription:
    "المجلد الثاني من سلسلة علم المعادن، ويختص بالمعادن السيليكاتية.",
  geologicalDescription:
    "Silicate minerals are built around silicon–oxygen structural units and form the dominant mineral group in much of Earth's crust.",
  arabicGeologicalDescription:
    "تتكون المعادن السيليكاتية من وحدات بنائية أساسها السيليكون والأكسجين، وتمثل المجموعة المعدنية السائدة في جزء كبير من القشرة الأرضية.",
  tags: ["silicate minerals", "mineral classification", "library ", "المعادن السيليكاتية", "التصنيف المعدني"]
},
{
  id: "mineralogy-non-silicate-minerals-volume-three",
  museumNumber: "GEO-B027",
  name: "Mineralogy, Volume Three: Non-Silicate Minerals",
  arabicName: "علم المعادن – المجلد الثالث: المعادن غير السيليكاتية",
  image: FEATURED_IMAGES.nonSilicateMineralsVolume3,
  gallery: [FEATURED_IMAGES.nonSilicateMineralsVolume3],
  type: "Book",
  arabicType: "كتاب",
  specimenType: "geological-chart",
  subtitle: "Non-silicate mineral groups",
  arabicSubtitle: "مجموعات المعادن غير السيليكاتية",
  description:
    "The third volume of the mineralogy series, focusing on non-silicate minerals.",
  arabicDescription:
    "المجلد الثالث من سلسلة علم المعادن، ويركز على المعادن غير السيليكاتية.",
  geologicalDescription:
    "Non-silicate minerals include several groups, such as oxides, sulfides, carbonates, sulfates, phosphates, and halides, classified by their chemical composition and structure.",
  arabicGeologicalDescription:
    "تشمل المعادن غير السيليكاتية مجموعات متعددة، مثل الأكاسيد والكبريتيدات والكربونات والكبريتات والفوسفات والهاليدات، وتُصنّف بحسب تركيبها الكيميائي وبنيتها.",
  tags: ["non-silicate minerals", "mineral groups", "library", "المعادن غير السيليكاتية", "مجموعات المعادن"]
},
{
  id: "mineral-deposits-saudi-arabia",
  museumNumber: "GEO-B028",
  name: "Mineral Deposits in the Kingdom of Saudi Arabia",
  arabicName: "الرواسب المعدنية في المملكة العربية السعودية",
  image: FEATURED_IMAGES.mineralDepositsSaudiArabia,
  gallery: [FEATURED_IMAGES.mineralDepositsSaudiArabia],
  type: "Book",
  arabicType: "كتاب",
  specimenType: "geological-chart",
  subtitle: "Mineral resources of Saudi Arabia",
  arabicSubtitle: "الموارد والرواسب المعدنية في السعودية",
  description:
    "An Arabic geological reference about mineral deposits in Saudi Arabia. The author's name should be verified from the title or copyright page before being recorded.",
  arabicDescription:
    "مرجع جيولوجي باللغة العربية عن الرواسب المعدنية في المملكة العربية السعودية. يُفضّل التحقق من اسم المؤلف من صفحة العنوان أو حقوق النشر قبل تسجيله.",
  geologicalDescription:
    "The study of mineral deposits considers their geological setting, mineral composition, formation processes, distribution, and potential economic significance.",
  arabicGeologicalDescription:
    "تتناول دراسة الرواسب المعدنية بيئتها الجيولوجية، وتركيبها المعدني، وعمليات تكوّنها، وتوزيعها، وأهميتها الاقتصادية المحتملة.",
  tags: ["mineral deposits", "Saudi Arabia", "library ", "الرواسب المعدنية", "السعودية"]
},
{
  id: "introduction-sedimentology-stratigraphy",
  museumNumber: "GEO-B029",
  name: "Introduction to Sedimentology and Stratigraphy",
  arabicName: "مقدمة في علم الرسوبيات والطبقات",
  image: FEATURED_IMAGES.introductionSedimentologyStratigraphy,
  gallery: [FEATURED_IMAGES.introductionSedimentologyStratigraphy],
  type: "Book",
  arabicType: "كتاب",
  specimenType: "geological-chart",
  subtitle: "Sedimentary processes and rock layers",
  arabicSubtitle: "العمليات الرسوبية والطبقات الصخرية",
  description:
    "An Arabic textbook introducing sedimentology and stratigraphy. The cover lists several contributors; their names should be checked against the original title page before being entered into the catalog.",
  arabicDescription:
    "كتاب باللغة العربية يقدم علم الرسوبيات والطبقات. يظهر على الغلاف عدد من أسماء المشاركين، ويُستحسن مطابقتها مع صفحة العنوان الأصلية قبل إدراجها في الفهرس.",
  geologicalDescription:
    "Sedimentology examines the origin, transport, deposition, and characteristics of sediments, while stratigraphy studies the sequence, relationships, and relative ages of rock layers.",
  arabicGeologicalDescription:
    "يدرس علم الرسوبيات أصل الرواسب ونقلها وترسيبها وخصائصها، بينما يهتم علم الطبقات بتتابع الطبقات الصخرية والعلاقات بينها وأعمارها النسبية.",
  tags: ["sedimentology", "library", "sedimentary rocks", "علم الرسوبيات", "علم الطبقات"]
},
{
  id: "field-description-sedimentary-rocks",
  museumNumber: "GEO-B030",
  name: "Field Description of Sedimentary Rocks",
  arabicName: "الوصف الحقلي للصخور الرسوبية",
  image: FEATURED_IMAGES.fieldDescriptionSedimentaryRocks,
  gallery: [FEATURED_IMAGES.fieldDescriptionSedimentaryRocks],
  type: "Book",
  arabicType: "كتاب",
  specimenType: "geological-chart",
  subtitle: "Field observation and sedimentary logging",
  arabicSubtitle: "الملاحظة الحقلية وتسجيل الصخور الرسوبية",
  description:
    "An Arabic translation of a reference on field description of sedimentary rocks. The cover credits Maurice E. Tucker as author and lists Mohammed Hussein Basyouni and Ahmed Mahmoud Morsi as translators.",
  arabicDescription:
    "ترجمة عربية لمرجع عن الوصف الحقلي للصخور الرسوبية. يذكر الغلاف موريس إي. تاكر مؤلفًا، ومحمد حسين بسيوني وأحمد محمود مرسي مترجمَين.",
  geologicalDescription:
    "Field description of sedimentary rocks records lithology, grain size, sedimentary structures, bedding, fossil content, and field relationships to help interpret depositional environments.",
  arabicGeologicalDescription:
    "يشمل الوصف الحقلي للصخور الرسوبية تسجيل نوع الصخر وحجم الحبيبات والتراكيب الرسوبية والتطبق والمحتوى الأحفوري والعلاقات الحقلية، للمساعدة في تفسير بيئات الترسيب.",
  tags: ["field geology", "library ", "sedimentary structures", "الوصف الحقلي", "الصخور الرسوبية"]
},
{
  id: "sedimentary-petrology-origin",
  museumNumber: "GEO-B031",
  name: "Sedimentary Petrology: An Introduction to the Origin of Sedimentary Rocks",
  arabicName: "بتروولوجية الصخور الرسوبية: مقدمة لأصل الصخور الرسوبية",
  image: FEATURED_IMAGES.sedimentaryPetrologyOrigin,
  gallery: [FEATURED_IMAGES.sedimentaryPetrologyOrigin],
  type: "Book",
  arabicType: "كتاب",
  specimenType: "geological-chart",
  subtitle: "Origin and classification of sedimentary rocks",
  arabicSubtitle: "أصل الصخور الرسوبية وتصنيفها",
  description:
    "An Arabic translation of a book by Maurice E. Tucker introducing the origin of sedimentary rocks.",
  arabicDescription:
    "ترجمة عربية لكتاب من تأليف موريس إي. تاكر، يقدم مدخلًا إلى أصل الصخور الرسوبية.",
  geologicalDescription:
    "Sedimentary petrology investigates sediment composition, texture, diagenesis, and the processes responsible for forming sedimentary rocks.",
  arabicGeologicalDescription:
    "يدرس علم الصخور الرسوبية تركيب الرواسب ونسيجها والتغيرات التي تحدث لها بعد الترسيب، والعمليات المسؤولة عن تكوّن الصخور الرسوبية.",
  tags: ["sedimentary petrology", "sedimentary rocks", "library", "بتروولوجية الصخور الرسوبية", "نشأة الصخور"]
},
{
  id: "three-dimensional-seismic-data-interpretation",
  museumNumber: "GEO-B032",
  name: "Interpretation of Three-Dimensional Seismic Data",
  arabicName: "تفسير البيانات السيزمية ثلاثية الأبعاد",
  image: FEATURED_IMAGES.threeDimensionalSeismicInterpretation,
  gallery: [FEATURED_IMAGES.threeDimensionalSeismicInterpretation],
  type: "Book",
  arabicType: "كتاب",
  specimenType: "geological-chart",
  subtitle: "3D seismic interpretation and subsurface geology",
  arabicSubtitle: "تفسير السيزمية ثلاثية الأبعاد والجيولوجيا تحت السطحية",
  description:
    "An Arabic translation of a reference edited by Alistair Brown on the interpretation of three-dimensional seismic data. The cover credits Faisal Abdulmohsen Al-Qahtani and Mohammed Khalil Mohammed Khalil as translators.",
  arabicDescription:
    "ترجمة عربية لمرجع حرره أليستير براون حول تفسير البيانات السيزمية ثلاثية الأبعاد. يذكر الغلاف فيصل عبدالمحسن القحطاني ومحمد خليل محمد خليل مترجمَين.",
  geologicalDescription:
    "Three-dimensional seismic interpretation uses seismic reflection data to visualize and interpret subsurface geological structures, stratigraphic relationships, and potential hydrocarbon traps.",
  arabicGeologicalDescription:
    "يُستخدم تفسير البيانات السيزمية ثلاثية الأبعاد لعرض التراكيب الجيولوجية تحت السطحية وتفسيرها، ودراسة العلاقات الطباقية، وتحديد المصائد المحتملة للهيدروكربونات.",
  tags: ["3D seismic", "library", "subsurface interpretation", "البيانات السيزمية", "الجيوفيزياء"]
},
{
  id: "structural-geology-fundamentals",
  museumNumber: "GEO-B033",
  name: "Fundamentals of Structural Geology",
  arabicName: "أصول الجيولوجيا البنائية",
  image: FEATURED_IMAGES.structuralGeologyFundamentals,
  gallery: [FEATURED_IMAGES.structuralGeologyFundamentals],
  type: "Book",
  arabicType: "كتاب",
  specimenType: "geological-chart",
  subtitle: "Geological structures and deformation",
  arabicSubtitle: "التراكيب الجيولوجية والتشوه",
  description:
    "An Arabic reference by Dr. Zakaria Hamimi covering the fundamentals of structural geology, as indicated by the book cover.",
  arabicDescription:
    "مرجع باللغة العربية من تأليف الدكتور زكريا هميمي، يتناول أساسيات الجيولوجيا البنائية وفقًا لعنوان الكتاب.",
  geologicalDescription:
    "Structural geology studies the deformation and arrangement of rocks, including folds, faults, fractures, and the geological forces responsible for their development.",
  arabicGeologicalDescription:
    "تدرس الجيولوجيا البنائية تشوه الصخور وترتيبها، بما يشمل الطيات والصدوع والفواصل والقوى الجيولوجية المسؤولة عن تكوّنها.",
  tags: [
    "structural geology",
    "folds",
    "library",
    "rock deformation",
    "الجيولوجيا البنائية",
    "الطيات",
    "الصدوع"
  ]
},
{
  id: "plate-tectonics",
  museumNumber: "GEO-B034",
  name: "Plate Tectonics",
  arabicName: "بنائية الألواح",
  image: FEATURED_IMAGES.plateTectonics,
  gallery: [FEATURED_IMAGES.plateTectonics],
  type: "Book",
  arabicType: "كتاب",
  specimenType: "geological-chart",
  subtitle: "Movement and interaction of tectonic plates",
  arabicSubtitle: "حركة الصفائح التكتونية وتفاعلها",
  description:
    "An Arabic geological reference on plate tectonics. The cover identifies D. S. Hays as the author; the full bibliographic details should be checked against the title page.",
  arabicDescription:
    "مرجع جيولوجي باللغة العربية عن بنائية الألواح. يظهر على الغلاف اسم المؤلف بصيغة D. S. Hays، ويُفضّل التحقق من بيانات النشر الكاملة من صفحة العنوان.",
  geologicalDescription:
    "Plate tectonics explains the movement and interaction of lithospheric plates and their relationship to earthquakes, volcanism, mountain building, and the development of ocean basins.",
  arabicGeologicalDescription:
    "تفسر نظرية الصفائح التكتونية حركة صفائح الغلاف الصخري وتفاعلها، وعلاقتها بالزلازل والنشاط البركاني وتكوّن الجبال والأحواض المحيطية.",
  tags: [
    "plate tectonics",
    "library",
    "tectonic plates",
    "بنائية الألواح",
    "الصفائح التكتونية"
  ]
},
{
  id: "introduction-to-geology",
  museumNumber: "GEO-B035",
  name: "Introduction to Geology",
  arabicName: "مدخل إلى علم الجيولوجيا",
  image: FEATURED_IMAGES.introductionToGeology,
  gallery: [FEATURED_IMAGES.introductionToGeology],
  type: "Book",
  arabicType: "كتاب",
  specimenType: "geological-chart",
  subtitle: "Earth materials, processes, and history",
  arabicSubtitle: "مواد الأرض وعملياتها وتاريخها",
  description:
    "An Arabic translation of an introductory geology textbook. The cover credits David W. ... as the author, but the full name is not sufficiently clear to record confidently.",
  arabicDescription:
    "ترجمة عربية لكتاب تمهيدي في علم الجيولوجيا. يظهر على الغلاف اسم المؤلف باللغة الإنجليزية، لكن الاسم الكامل غير واضح بما يكفي لتسجيله بثقة.",
  geologicalDescription:
    "Introductory geology covers Earth's materials, internal structure, geological processes, rock formation, and the history of the planet.",
  arabicGeologicalDescription:
    "يتناول علم الجيولوجيا التمهيدي مواد الأرض وبنيتها الداخلية وعملياتها الجيولوجية وتكوّن الصخور وتاريخ كوكب الأرض.",
  tags: [
    "introductory geology",
    "Earth science",
    "geological processes",
    "مدخل إلى الجيولوجيا",
    " library"
  ]
},
{
  id: "environmental-geology-introduction",
  museumNumber: "GEO-B036",
  name: "Introduction to Environmental Geology",
  arabicName: "مدخل إلى علم الجيولوجيا البيئية",
  image: FEATURED_IMAGES.environmentalGeologyIntroduction,
  gallery: [FEATURED_IMAGES.environmentalGeologyIntroduction],
  type: "Book",
  arabicType: "كتاب",
  specimenType: "geological-chart",
  subtitle: "Geology, environmental processes, and human activity",
  arabicSubtitle: "الجيولوجيا والعمليات البيئية والأنشطة البشرية",
  description:
    "An Arabic translation of a reference introducing environmental geology. The cover lists Dr. Mohammed Hussein Basyouni and Dr. Mohammed Khalil Mohammed Khalil as translators.",
  arabicDescription:
    "ترجمة عربية لمرجع تمهيدي في الجيولوجيا البيئية. يذكر الغلاف الدكتور محمد حسين بسيوني والدكتور محمد خليل محمد خليل مترجمَين.",
  geologicalDescription:
    "Environmental geology examines interactions between geological processes, natural resources, environmental hazards, and human activities.",
  arabicGeologicalDescription:
    "تدرس الجيولوجيا البيئية التفاعلات بين العمليات الجيولوجية والموارد الطبيعية والمخاطر البيئية والأنشطة البشرية.",
  tags: [
    "environmental geology",
    "natural hazards",
    "Earth resources",
    "الجيولوجيا البيئية",
    " library"
  ]
},
{
  id: "uranium-mineralogy",
  museumNumber: "GEO-B037",
  name: "Mineralogy of Uranium",
  arabicName: "علم معادن اليورانيوم",
  image: FEATURED_IMAGES.uraniumMineralogy,
  gallery: [FEATURED_IMAGES.uraniumMineralogy],
  type: "Book",
  arabicType: "كتاب",
  specimenType: "geological-chart",
  subtitle: "Uranium-bearing minerals and their properties",
  arabicSubtitle: "المعادن الحاوية على اليورانيوم وخصائصها",
  description:
    "An Arabic reference on uranium mineralogy by Prof. Hamdi Hamed Abdel Nabi Youssef, as credited on the cover.",
  arabicDescription:
    "مرجع باللغة العربية في علم معادن اليورانيوم، من تأليف الأستاذ الدكتور حمدي حامد عبدالنبي يوسف، وفقًا لما يظهر على الغلاف.",
  geologicalDescription:
    "Uranium mineralogy studies uranium-bearing minerals, including their chemical composition, crystal structure, physical properties, and geological occurrence.",
  arabicGeologicalDescription:
    "يدرس علم معادن اليورانيوم المعادن الحاوية على اليورانيوم من حيث تركيبها الكيميائي وبنيتها البلورية وخصائصها الفيزيائية ووجودها الجيولوجي.",
  tags: [
    "uranium minerals",
    "library",
    "radioactive minerals",
    "معادن اليورانيوم",
    "المعادن المشعة"
  ]
},
{
  id: "uranium-deposit-geology",
  museumNumber: "GEO-B038",
  name: "Geology of Uranium Deposits",
  arabicName: "جيولوجية رواسب اليورانيوم",
  image: FEATURED_IMAGES.uraniumDepositGeology,
  gallery: [FEATURED_IMAGES.uraniumDepositGeology],
  type: "Book",
  arabicType: "كتاب",
  specimenType: "geological-chart",
  subtitle: "Formation and geological occurrence of uranium deposits",
  arabicSubtitle: "تكوّن رواسب اليورانيوم ووجودها الجيولوجي",
  description:
    "An Arabic reference on the geology of uranium deposits by Prof. Hamdi Hamed Abdel Nabi Youssef, as credited on the cover.",
  arabicDescription:
    "مرجع باللغة العربية عن جيولوجية رواسب اليورانيوم، من تأليف الأستاذ الدكتور حمدي حامد عبدالنبي يوسف، وفقًا لما يظهر على الغلاف.",
  geologicalDescription:
    "The geology of uranium deposits examines the geological settings, mineral associations, transport mechanisms, and processes involved in uranium concentration.",
  arabicGeologicalDescription:
    "تبحث جيولوجية رواسب اليورانيوم في البيئات الجيولوجية والتجمعات المعدنية وآليات النقل والعمليات التي تؤدي إلى تركيز اليورانيوم.",
  tags: [
    "uranium deposits",
    "library",
    "mineral exploration",
    "رواسب اليورانيوم",
    "الجيولوجيا الاقتصادية"
  ]
},
{
  id: "atlas-of-minerals-under-microscope",
  museumNumber: "GEO-B039",
  name: "Atlas of Minerals Under the Microscope",
  arabicName: "أطلس المعادن تحت المجهر",
  image: FEATURED_IMAGES.atlasOfMineralsUnderMicroscope,
  gallery: [FEATURED_IMAGES.atlasOfMineralsUnderMicroscope],
  type: "Book",
  arabicType: "كتاب",
  specimenType: "geological-chart",
  subtitle: "Microscopic identification of minerals",
  arabicSubtitle: "التعرف على المعادن مجهريًا",
  description:
    "An illustrated Arabic reference by Essam bin Yahya Al-Filali and Mohammed Abdulsamee Hussein, as credited on the cover.",
  arabicDescription:
    "مرجع مصوّر باللغة العربية من تأليف عصام بن يحيى الفيلالي ومحمد عبدالسميع حسين، وفقًا لما يظهر على الغلاف.",
  geologicalDescription:
    "Microscopic mineral identification uses optical properties observed in thin sections, including colour, relief, cleavage, interference colours, and extinction behaviour.",
  arabicGeologicalDescription:
    "يعتمد التعرف على المعادن تحت المجهر على الخصائص البصرية في الشرائح الرقيقة، ومنها اللون والبروز والانفصام وألوان التداخل وسلوك الانطفاء.",
  tags: [
    "optical mineralogy",
    "library",
    "thin sections",
    "أطلس المعادن",
    "المعادن تحت المجهر"
  ]
},
];


