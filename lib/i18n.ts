export type Locale = 'en' | 'ar';

export const dictionary = {
  en: {
    dir: 'ltr',
    nav: {
      home: 'Home',
      rocks: 'Rock Collection',
      minerals: 'Mineral Collection',
      featured: 'Featured Specimens',
      faculty: 'School of Mines',
      about: 'About',
      contact: 'Contact',
      search: 'Search',
    },
    home: {
      heroTitle: 'DETHAR Geological Museum',
      heroSubtitle:
        'DETHAR is the official digital gateway to the School of Mines Museum, preserving and showcasing authenticated geological specimens through an interactive educational platform.',
      exploreRocks: 'Explore the Rock Collection',
      exploreMinerals: 'Explore the Mineral Collection',
      scroll: '',
      aboutEyebrow: 'About the Museum',
      aboutTitle: 'A digital window into Earth deep history',
      aboutBody:
        'DETHAR is the digital geological museum of the School of Mines at King Abdulaziz University. It preserves, studies, and presents a curated collection of rocks and minerals from across the Kingdom and beyond, making geological heritage accessible to students, researchers, and the public.',
      missionTitle: 'Our Mission',
      missionBody:
        'To preserve, document, and digitally present the geological collections of the School of Mines Museum while supporting education, research, and public engagement.',
      visionTitle: 'Our Vision',
      visionBody:
        'To become the leading digital geological museum in the region, connecting geological heritage with modern technology and interactive learning.',
      featuredEyebrow: 'Featured Specimens',
      featuredTitle: 'Highlights from the collection',
      featuredSubtitle:
        'A curated selection of remarkable specimens on display in the digital museum.',
      viewDetails: 'View Specimen',
      statsEyebrow: 'By the Numbers',
      statsTitle: 'A growing archive of the Earth',
      stats: {
        rocks: 'Rock Specimens',
        minerals: 'Mineral Specimens',
        total: 'Total Specimens',
        facts: 'Geological Facts',
      },
      ctaTitle: 'Start your geological journey',
      ctaBody:
        'Explore the full collection, learn how each specimen formed, and discover the story written in stone.',
      ctaRocks: 'Browse the Rock Collection',
      ctaMinerals: 'Browse the Mineral Collection',
      heroKicker: 'School of Mines · King Abdulaziz University',
      storyEyebrow: 'THE DIGITAL MUSEUM',
      storyTitle: 'Preserving the Museum, Sharing the Heritage.',
      storyBody:
        'DETHAR transforms the School of Mines Museum into an interactive digital experience, allowing students, researchers, and visitors to explore authenticated geological specimens anytime and from anywhere.',
      storyStat1: 'Specimens documented',
      storyStat2: 'Field sites across the Kingdom',
      storyStat3: 'Years of fieldwork',
      featuredKicker: 'On display now',
      featuredLink: 'View all featured specimens',
      quoteText:
        'Every rock is an open book of Earth history — we are simply learning to read it.',
      quoteAttribution: 'DETHAR Curatorial Team',
      ctaKicker: 'Begin',
      mascotsEyebrow: 'Meet your Guides',
      mascotsTitle: 'Two friends, one journey',
      mascotsSubtitle:
        'Sakhr and Yaqoot will be your companions through the museum — introducing sections, sharing facts, and making every specimen come alive.',
      sakhrName: 'Sakhr',
      sakhrRole: 'Rock Guide',
      sakhrQuote: 'Every layer tells a story millions of years in the making.',
      sakhrWelcome:
        'Welcome to the Rocks Collection. Here you can explore every rock specimen preserved inside the DETHAR Geological Digital Museum.',
      yaqootName: 'Yaqoot',
      yaqootRole: 'Crystal Guide',
      yaqootQuote: 'In every crystal, the geometry of the Earth reveals itself.',
      yaqootWelcome:
        'Welcome to the Minerals Collection. Discover minerals, crystals and geological treasures through our curated collection.',
    },
    rocks: {
      title: 'The Rock Collection',
      eyebrow: 'Museum Archive',
      subtitle:
        'Every specimen is presented equally, exactly as it is arranged in the physical museum.',
      searchPlaceholder: 'Search the rock collection…',
      empty: 'No rocks match your search.',
      count: (n: number) => `${n} specimen${n === 1 ? '' : 's'}`,
    },
    minerals: {
      title: 'The Mineral Collection',
      eyebrow: 'Museum Archive',
      subtitle:
        'A growing reference of mineral specimens, each documented with its scientific properties.',
      searchPlaceholder: 'Search the mineral collection…',
      empty: 'No minerals match your search.',
      count: (n: number) => `${n} specimen${n === 1 ? '' : 's'}`,
    },
    details: {
      back: 'Back to collection',
      gallery: 'Gallery',
      information: 'Information',
      previous: 'Previous specimen',
      next: 'Next specimen',
      specimenNotFound: 'Specimen not found',
      specimenNotFoundDesc:
        'This specimen is not part of the current collection. It may have been moved or archived.',
      browseCollection: 'Browse the collection',
      fields: {
        type: 'Type',
        texture: 'Texture',
        mineralogy: 'Mineralogy',
        formation: 'Formation',
        color: 'Color',
        environment: 'Environment',
        uses: 'Uses',
        location: 'Location',
        hardness: 'Hardness',
        luster: 'Luster',
        crystalSystem: 'Crystal System',
        streak: 'Streak',
        chemicalFormula: 'Chemical Formula',
      },
    },
    featured: {
      title: 'Featured Specimens',
      eyebrow: 'Museum Highlights',
       subtitle:
    'Explore fossils and petroleum exhibits, the geological library, museum galleries, and the highlights of the DETHAR Geological Museum.',

tabs: {
  all: 'all',
  exhibits: 'Fossils & Petroleum',
  library: 'Library',
  Highlights: 'Highlights',
},
    },
faculty: {
  title: 'School of Mines',

  eyebrow: 'King Abdulaziz University',

  intro:
    'The School of Mines at King Abdulaziz University provides specialized education in Earth sciences and mining engineering through the integration of geological, geophysical, and engineering knowledge, with a focus on preparing scientific and professional competencies in mineral exploration, evaluation, and extraction.',

  campusTitle: 'An Academic Environment Integrating Earth Sciences and Mining Engineering',

  campusBody:
    'The School provides an educational environment that combines theoretical study with practical and field applications in Earth sciences and mining. The academic program includes geology, geophysics, and mining engineering, together with laboratory work, field applications, cooperative training, and a graduation project that connect academic knowledge with professional practice.',

  departmentsTitle: 'Academic Fields',

  departments: [
    {
  name: 'Geology',
  desc: 'The field of geology focuses on the study of the Earth, its history, structure, and geological processes, with emphasis on rocks, minerals, geological strata, and structural features. It covers the study of igneous, metamorphic, and sedimentary rocks, mineralogy, paleontology, geomorphology, structural geology, geographic information systems, and remote sensing. The field also includes economic geology and ore geology, the geology of the Kingdom, geochemistry, petroleum geology, and hydrogeology, in addition to field-based and computational applications in geology.'
},

{
  name: 'Geophysics',
  desc: 'The field of geophysics focuses on studying the Earth’s subsurface and its physical properties using geophysical methods and measurements. It includes seismic exploration using refraction and reflection methods, geoelectrical exploration, magnetic and gravity exploration, as well as electromagnetic exploration. The field also covers seismology, geophysical signal analysis, well logging, and archaeological geophysics, with the application of geophysical methods in exploration activities and the investigation of subsurface structures.'
},

{
  name: 'Mining Engineering',
  desc: 'The field of mining engineering focuses on the engineering and technical aspects associated with mining operations, ore extraction, and resource management. It includes the study of rock mechanics, mining operating systems, ore resource estimation and modeling, mine surveying and geographic information systems, and the planning and design of open-pit and underground mines. The field also covers drilling and blasting in mining, ore transportation and handling, physical mineral processing, as well as the economic, legal, and regulatory aspects of mining and field training in the mining sector.'
},
      ],
missionTitle: 'Mission',
missionBody:
  'To prepare and graduate qualified earth scientists and mining professionals through comprehensive academic and practical education, advance scientific research in earth and mineral sciences, and contribute to society through the responsible study, exploration, management, and stewardship of natural resources.',

visionTitle: 'Vision',
visionBody:
  'To become a leading regional institution in earth sciences and mining education and research, recognized for academic excellence, scientific rigor, innovation, professional development, and its contribution to the sustainable development and responsible management of natural resources.',

historyTitle: 'A Short History',
historyBody:
  'Established in 1975, the faculty has developed into an established institution for earth sciences education and research in the region. Over the years, its academic programs and scientific activities have expanded to cover major areas of geology, geophysics, mining, water resources, environmental studies, and natural-resource exploration, contributing qualified graduates and scientific expertise to sectors across the Kingdom.',

galleryTitle: 'Faculty Gallery',
    },
    about: {
      title: 'About DETHAR',
      eyebrow: 'The Museum',
      storyTitle: 'The story of DETHAR',
      storyBody:
        'DETHAR emerged from a student collaboration driven by a shared passion for geology, a love for the museum, and a desire to support its educational mission through a contemporary digital experience. Building on the academic environment of the College of Mining, the students developed an idea that connects geological knowledge with technology, giving the museum’s collections greater accessibility and opportunities for exploration. Today, DETHAR represents a student-led initiative that aims to highlight the value of geological specimens and enhance their educational use through a digital experience that brings together organized presentation, scientific content, and the spirit of the museum.',
      purposeTitle: 'Purpose',
      purposeBody:
        'To preserve, document, and share geological specimens in a way that is rigorous, beautiful, and accessible to everyone, from first-year students to working geologists.',
      goalsTitle: 'Educational goals',
      goals: [
        'Make geological specimens accessible for study at any time, from anywhere.',
        'Support university courses in petrology, mineralogy, and field geology.',
        'Encourage public interest in the geology of Saudi Arabia and the region.',
        'Document the provenance and scientific context of every specimen.',
      ],
      futureTitle: 'Future vision',
      futureBody:
        'DETHAR will continue to grow with new specimens, 3D scans, and field collections, building a lasting digital record of the Earth beneath us.',
      teamEyebrow: 'The People',
      teamTitle: 'Project Team',
      teamSubtitle: 'Designed & Developed with passion by',
      teamMember1: 'Mohammed Ali Khubrani',
      teamMember1Role: 'Mineral Resources and Rocks Student',
      teamMember2: 'Layan Ahmed Hakmi',
      teamMember2Role: 'Geology Student',
      teamStatement:
        'The DETHAR Geological Digital Museum is a collaborative academic project designed and developed by Mohammed Khubrani and Layan Hakmi. Every aspect of the project—including planning, design, development, museum experience, content organization and user experience—was created together through equal collaboration.',
      teamContact: 'Connect',
      teamLinkedIn: 'LinkedIn',
      teamTwitter: 'X (Twitter)',
      teamEmail: 'Email',
    },
    contact: {
      title: 'Contact',
      eyebrow: 'Get in touch',
      subtitle:
        'Questions about the collection, research access, or a visit? Send us a message.',
      name: 'Your name',
      email: 'Your email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending…',
      success: 'Thank you. Your message has been received.',
      info: 'Museum information',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      location: 'School of Mines, King Abdulaziz University, Jeddah, Saudi Arabia',
      hoursLabel: 'Hours',
      hours: 'Sunday – Thursday, 9:00 – 16:00',
      follow: 'Follow the museum',
      mapAlt: 'Map showing the location of the School of Mines in Jeddah',
    },
    footer: {
      tagline: 'A digital geological museum of the School of Mines, King Abdulaziz University.',
      quickLinks: 'Quick Links',
      collection: 'Collection',
      about: 'About',
      rights: 'All rights reserved.',
      madeWith: 'DETHAR Geological Digital Museum',
    },
    common: {
      language: 'العربية',
      theme: 'Toggle theme',
      menu: 'Menu',
      close: 'Close',
      readMore: 'Read more',
      learnMore: 'Learn more',
      viewAll: 'View all',
    },
  },
  ar: {
    dir: 'rtl',
    nav: {
      home: 'الرئيسية',
      rocks: 'مجموعة الصخور',
      minerals: 'مجموعة المعادن',
      featured: 'عينات مميزة',
      faculty: 'كلية التعدين',
      about: 'عن المتحف',
      contact: 'تواصل معنا',
      search: 'بحث',
    },
    home: {
      heroTitle: 'متحف دثار الجيولوجي',
      heroSubtitle:
          "دِثار هو البوابة الرقمية الرسمية لمتحف كلية التعدين ويهدف إلى حفظ وعرض العينات الجيولوجية الموثقة من خلال منصة تعليمية تفاعلية، تتيح للطلاب والباحثين والزوار استكشاف المقتنيات المتحفية بطريقة حديثة وسهلة الوصول.",
      exploreRocks: 'استكشف الصخور',
      exploreMinerals: 'استكشف المعادن',
      scroll: 'مرر للأسفل',
      aboutEyebrow: 'عن المتحف',
      aboutTitle: 'نافذة رقمية على تاريخ الأرض العميق',
      aboutBody:
        'دثار هو المتحف الجيولوجي الرقمي لكلية التعدين بجامعة الملك عبدالعزيز. يحفظ ويدرس ويعرض مجموعة منتقاة من الصخور والمعادن من المملكة وخارجها، ويجعل التراث الجيولوجي في متناول الطلاب والباحثين والجمهور.',
      missionTitle: 'رسالتنا',
      missionBody:
        'حفظ وتوثيق وعرض مقتنيات متحف كلية التعدين رقميًا، بما يدعم التعليم والبحث العلمي ويُسهم في نشر المعرفة الجيولوجية.',
      visionTitle: 'رؤيتنا',
      visionBody:
        'أن يصبح دِثار المتحف الجيولوجي الرقمي الرائد في المنطقة، من خلال ربط التراث الجيولوجي بالتقنيات الحديثة وتجارب التعلم التفاعلية.',
      featuredEyebrow: 'عينات مميزة',
      featuredTitle: 'أبرز مقتنيات المجموعة',
      featuredSubtitle: 'مجموعة منتقاة من العينات الاستثنائية المعروضة في المتحف الرقمي.',
      viewDetails: 'عرض التفاصيل',
      statsEyebrow: 'بالأرقام',
      statsTitle: 'أرشيف متنامٍ من تاريخ الأرض',
      stats: {
        rocks: 'عينات صخور',
        minerals: 'عينات معادن',
        total: 'إجمالي العينات',
        facts: 'حقيقة جيولوجية',
      },
      ctaTitle: 'ابدأ رحلتك الجيولوجية',
      ctaBody:
        'استكشف المجموعة كاملة، وتعرّف على كيفية تكوّن كل عينة، واكتشف القصة المحفورة في الحجر.',
      ctaRocks: 'تصفّح مجموعة الصخور',
      ctaMinerals: 'تصفّح مجموعة المعادن',
      heroKicker: 'كلية التعدين · جامعة الملك عبدالعزيز',
      storyEyebrow: 'المتحف الرقمي',
      storyTitle: ' رقمنة المتحف لتبقى المعرفة متاحة.',
      storyBody:
        'يحوّل دِثار متحف كلية التعدين إلى تجربة رقمية تفاعلية، تُمكّن الطلاب والباحثين والزوار من استكشاف العينات الجيولوجية الموثقة في أي وقت ومن أي مكان.',
      storyStat1: 'عينة موثّقة',
      storyStat2: 'موقع ميداني عبر المملكة',
      storyStat3: 'عام من العمل الميداني',
      featuredKicker: 'معروض الآن',
      featuredLink: 'عرض كل العينات المميزة',
      quoteText:
        'كل صخرة كتاب مفتوح لتاريخ الأرض — وكل ما نفعله هو أن نتعلّم قراءته.',
      quoteAttribution: 'فريق التنسيق في دثار',
      ctaKicker: 'ابدأ',
      mascotsEyebrow: 'تعرّف على مرشديك',
      mascotsTitle: 'صديقان، رحلة واحدة',
      mascotsSubtitle:
        'صخر وياقوت هما رفيقاك في المتحف — يقدّمان الأقسام، ويشاركان الحقائق، ويجعلان كل عينة تنبض بالحياة.',
      sakhrName: 'صخر',
      sakhrRole: 'مرشد الصخور',
      sakhrQuote: 'كل طبقة تروي قصة تمتد لملايين السنين.',
      sakhrWelcome:
        'أهلاً بكم في مجموعة الصخور. هنا يمكنكم استكشاف كل عينة صخر محفوظة في متحف دثار الجيولوجي الرقمي.',
      yaqootName: 'ياقوت',
      yaqootRole: 'مرشد البلورات',
      yaqootQuote: 'في كل بلور، يكشف هندس الأرض عن نفسه.',
      yaqootWelcome:
        'أهلاً بكم في مجموعة المعادن. اكتشفوا المعادن والبلورات والكنوز الجيولوجية عبر مجموعتنا المنسّقة.',
    },
    rocks: {
      title: 'مجموعة الصخور',
      eyebrow: 'أرشيف المتحف',
      subtitle: 'تُعرض كل عينة على قدم المساواة، تمامًا كما هي مرتّبة في المتحف الفعلي.',
      searchPlaceholder: 'ابحث في مجموعة الصخور…',
      empty: 'لا توجد صخور مطابقة لبحثك.',
      count: (n: number) => `${n} عينة`,
    },
    minerals: {
      title: 'مجموعة المعادن',
      eyebrow: 'أرشيف المتحف',
      subtitle: 'مرجع متنامٍ لعينات المعادن، موثّقة بخصائصها العلمية.',
      searchPlaceholder: 'ابحث في مجموعة المعادن…',
      empty: 'لا توجد معادن مطابقة لبحثك.',
      count: (n: number) => `${n} عينة`,
    },
    details: {
      back: 'العودة إلى المجموعة',
      gallery: 'المعرض',
      information: 'المعلومات',
      previous: 'العينة السابقة',
      next: 'العينة التالية',
      specimenNotFound: 'العينة غير موجودة',
      specimenNotFoundDesc:
        'هذه العينة ليست ضمن المجموعة الحالية. قد تكون قد نُقلت أو أُرشفت.',
      browseCollection: 'تصفّح المجموعة',
      fields: {
        type: 'النوع',
        texture: 'الملمس',
        mineralogy: 'التركيب المعدني',
        formation: 'التكوين',
        color: 'اللون',
        environment: 'البيئة',
        uses: 'الاستخدامات',
        location: 'الموقع',
        hardness: 'الصلادة',
        luster: 'البريق',
        crystalSystem: 'النظام البلوري',
        streak: 'أثر المعدن',
        chemicalFormula: 'الصيغة الكيميائية',
      },
    },
featured: {
  title: 'استكشف المتحف',
  eyebrow: 'اكتشف المجموعات',
  subtitle:
    'استكشف الأحافير والبترول، والمكتبة الجيولوجية، ومعرض الصور، وأبرز معروضات متحف ديثار الجيولوجي.',

  tabs: {
    all: 'الكل',
    exhibits: 'الأحافير والبترول',
    Highlights: 'العناصر المميزة',
    library: 'المكتبة الجيولوجية',
  },
    },
    faculty: {
 title: 'كلية التعدين',

eyebrow: 'جامعة الملك عبدالعزيز',

intro:
  'تقدم كلية التعدين بجامعة الملك عبدالعزيز تعليمًا متخصصًا في علوم الأرض وهندسة التعدين، من خلال تكامل المعرفة الجيولوجية والجيوفيزيائية والهندسية، مع التركيز على إعداد الكفاءات العلمية والمهنية المرتبطة باستكشاف الموارد المعدنية وتقييمها واستغلالها.',

campusTitle: 'بيئة أكاديمية تجمع علوم الأرض وهندسة التعدين',

campusBody:
  'توفر الكلية بيئة تعليمية تجمع بين الدراسة النظرية والتطبيقات العملية والميدانية في مجالات علوم الأرض والتعدين. ويشمل البرنامج الأكاديمي مقررات في الجيولوجيا، والجيوفيزياء، وهندسة التعدين، إلى جانب المعامل والتطبيقات الحقلية والتدريب التعاوني ومشروع التخرج، بما يربط المعرفة الأكاديمية بالتطبيقات المهنية.',

departmentsTitle: 'المجالات الأكاديمية',

departments: [
  {
    name: 'الجيولوجيا',
    desc: 'يختص مجال الجيولوجيا بدراسة الأرض وتاريخها وبنيتها وعملياتها الجيولوجية، مع التركيز على الصخور والمعادن والطبقات الجيولوجية والتراكيب البنيوية. ويشمل المجال دراسة الصخور النارية والمتحولة والرسوبية، علم المعادن، علم الأحافير، علم أشكال سطح الأرض، الجيولوجيا البنائية، ونظم المعلومات الجغرافية والاستشعار عن بعد. كما يتناول الجيولوجيا الاقتصادية وجيولوجيا الخامات، جيولوجيا المملكة، الجيوكيمياء، جيولوجيا البترول، وجيولوجيا المياه، إلى جانب التطبيقات الحقلية والحوسبية في الجيولوجيا.'
  },

{ 
  name: 'الجيوفيزياء', 
  desc: 'يركز مجال الجيوفيزياء على دراسة باطن الأرض وخصائصه الفيزيائية باستخدام الأساليب والقياسات الجيوفيزيائية. ويتضمن المجال الاستكشاف السيزمي بالطرق الانكسارية والانعكاسية، والاستكشاف الجيوكهربائي، والاستكشاف المغناطيسي والتثاقلي، إضافة إلى الاستكشاف الكهرومغناطيسي. كما يشمل دراسة علم الزلازل، تحليل الإشارات الجيوفيزيائية، سبر الآبار، والجيوفيزياء الأثرية، مع توظيف الأساليب الجيوفيزيائية في أعمال الاستكشاف ودراسة التراكيب تحت سطح الأرض.'
},

{ 
  name: 'هندسة التعدين', 
  desc: 'يركز مجال هندسة التعدين على الجوانب الهندسية والفنية المرتبطة بعمليات التعدين واستخراج الخامات وإدارتها. ويشمل دراسة ميكانيكا الصخور، أنظمة تشغيل التعدين، تقدير موارد الخام ونمذجتها، مسح المناجم ونظم المعلومات الجغرافية، وتخطيط وتصميم المناجم السطحية وتحت الأرض. كما يتناول المجال الحفر والتفجير في التعدين، نقل الخامات وتداولها، المعالجة الفيزيائية للمعادن، إلى جانب الجوانب الاقتصادية والقانونية والتنظيمية والتدريب الميداني في مجال التعدين.'
},
      ],
missionTitle: 'الرسالة',
missionBody:
  'حفظ وتوثيق وعرض المقتنيات الجيولوجية لكلية علوم الأرض رقميًا، بما يدعم التعليم والبحث العلمي، ويُسهم في نشر المعرفة الجيولوجية وإتاحة دراسة العينات للطلاب والباحثين والجمهور.',

visionTitle: 'الرؤية',
visionBody:
  'أن يكون دِثار متحفًا جيولوجيًا رقميًا رائدًا في المنطقة، يوظف التقنيات الحديثة في حفظ التراث الجيولوجي وتوثيقه وإتاحته، ويقدم تجربة تعليمية تفاعلية تربط المعرفة الجيولوجية بالمقتنيات الفعلية للمتحف.',

historyTitle: 'نبذة تاريخية',
historyBody:
  'تعود المجموعة التي يقوم عليها دِثار إلى مجموعة تعليمية داخل كلية علوم الأرض، ونمت على مدى عقود من العمل الميداني والدراسات الجيولوجية في مناطق مختلفة من المملكة، بما في ذلك الدرع العربي وساحل البحر الأحمر وحقول الحرات البركانية. ويعمل دِثار على تحويل هذه المجموعة إلى سجل رقمي يتيح دراسة العينات وتوثيق سياقها العلمي وإتاحة محتواها للطلاب والباحثين والجمهور.',

galleryTitle: 'معرض الكلية',
    },
    about: {
      title: 'عن دثار',
      eyebrow: 'المتحف',
      storyTitle: 'قصة دثار',
      storyBody:
        'نشأ دثار من تعاون طلابي جمعه الشغف بالجيولوجيا والحب للمتحف والرغبة في دعم مسيرته التعليمية بصورة رقمية معاصرة. وانطلاقًا من البيئة الأكاديمية في كلية التعدين، عمل الطلاب على تطوير فكرة تربط بين المعرفة الجيولوجية والتقنية، وتمنح محتويات المتحف مساحة أوسع للوصول والاستكشاف. يمثل دثار اليوم مبادرة طلابية تهدف إلى إبراز قيمة العينات الجيولوجية وتعزيز الاستفادة التعليمية منها، من خلال تجربة رقمية تجمع بين العرض المنظم والمحتوى العلمي وروح المتحف.',
      purposeTitle: 'الغرض',
      purposeBody:
        'حفظ وتوثيق ومشاركة العينات الجيولوجية بطريقة دقيقة وجميلة وفي متناول الجميع، من طلاب السنة الأولى إلى الجيولوجيين العاملين.',
      goalsTitle: 'الأهداف التعليمية',
      goals: [
        'جعل العينات الجيولوجية متاحة للدراسة في أي وقت ومن أي مكان.',
        'دعم مقررات الجامعة في علم الصخور والمعادن والجيولوجيا الميدانية.',
        'تشجيع الاهتمام العام بجيولوجيا المملكة العربية السعودية والمنطقة.',
        'توثيق المصدر والسياق العلمي لكل عينة.',
      ],
      futureTitle: 'الرؤية المستقبلية',
      futureBody:
        'سيستمر دثار في النمو بعينات جديدة ومسوحات ثلاثية الأبعاد ومجموعات ميدانية، لبناء سجل رقمي دائم للأرض تحت أقدامنا.',
      teamEyebrow: 'الأشخاص',
      teamTitle: 'فريق المشروع',
      teamSubtitle: 'صُمم وطُوّر بشغف بواسطة',
      teamMember1: 'محمد خبراني',
      teamMember1Role: 'طالب ثروة معدنية وصخور',
      teamMember2: 'ليان حكمي',
      teamMember2Role: 'طالبة جيولوجيا',
      teamStatement:
        'متحف دثار الجيولوجي الرقمي هو مشروع أكاديمي تعاوني تم تصميمه وتطويره من قبل محمد خبراني وليان حكمي، حيث تم تنفيذ جميع مراحل المشروع، بما في ذلك التخطيط، والتصميم، والتطوير، وتنظيم المحتوى، وتجربة المستخدم، بالشراكة الكاملة بينهما.',
      teamContact: 'تواصل',
      teamLinkedIn: 'لينكدإن',
      teamTwitter: 'إكس (تويتر)',
      teamEmail: 'البريد الإلكتروني',
    },
    contact: {
      title: 'تواصل معنا',
      eyebrow: 'كن على تواصل',
      subtitle: 'أسئلة حول المجموعة أو الوصول البحثي أو الزيارة؟ أرسل لنا رسالة.',
      name: 'اسمك',
      email: 'بريدك الإلكتروني',
      subject: 'الموضوع',
      message: 'الرسالة',
      send: 'إرسال الرسالة',
      sending: 'جارٍ الإرسال…',
      success: 'شكرًا لك. تم استلام رسالتك.',
      info: 'معلومات المتحف',
      emailLabel: 'البريد الإلكتروني',
      phoneLabel: 'الهاتف',
      locationLabel: 'الموقع',
      location: 'كلية التعدين، جامعة الملك عبدالعزيز، جدة، المملكة العربية السعودية',
      hoursLabel: 'ساعات العمل',
      hours: 'الأحد – الخميس، 9:00 – 16:00',
      follow: 'تابع المتحف',
      mapAlt: 'خريطة توضح موقع كلية التعدين في جدة',
    },
    footer: {
      tagline: 'متحف جيولوجي رقمي لكلية التعدين بجامعة الملك عبدالعزيز.',
      quickLinks: 'روابط سريعة',
      collection: 'المجموعة',
      about: 'عن المتحف',
      rights: 'جميع الحقوق محفوظة.',
      madeWith: 'متحف دثار الجيولوجي الرقمي',
    },
    common: {
      language: 'English',
      theme: 'تبديل المظهر',
      menu: 'القائمة',
      close: 'إغلاق',
      readMore: 'اقرأ المزيد',
      learnMore: 'اعرف المزيد',
      viewAll: 'عرض الكل',
    },
  },
} as const;

export type Dictionary = (typeof dictionary)['en'];
