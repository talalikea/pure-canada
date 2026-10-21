// Bilingual site copy sourced from Pure_Canada_Foundation_Bilingual_Content.docx
const content = {
  en: {
    dir: "ltr",
    brand: "Pure Canada Foundation",
    nav: {
      home: "Home",
      programs: "Programs",
      about: "About",
      events: "Events",
      gallery: "Gallery",
      contact: "Contact",
    },
    donate: "Donate Now",
    langSwitch: { label: "عربي", aria: "Switch to Arabic" },
    hero: {
      eyebrow: "Pure Canada Foundation",
      title: "Connecting Canada to Global Impact",
      description:
        "A Canadian nonprofit organization dedicated to advancing education, strengthening healthcare systems, and protecting vulnerable children affected by conflict and displacement. Rooted in Canadian values of compassion, inclusion, and service.",
      ctaPrimary: "Our Programs",
      ctaSecondary: "Get Involved",
    },
    impact: {
      title: "Our Impact",
      lede: "Every day, Pure Canada Foundation transforms lives through direct action and sustainable partnerships.",
      items: [
        {
          title: "Education First",
          desc: "Restoring access to learning and creating pathways to opportunity",
        },
        {
          title: "Healthcare Strengthening",
          desc: "Building capacity through medical education and hospital support",
        },
        {
          title: "Child Protection",
          desc: "Providing safe spaces and comprehensive support for orphaned children",
        },
        {
          title: "Community Partnership",
          desc: "Working with trusted local organizations to ensure sustainable, locally-led solutions",
        },
      ],
    },
    programs: {
      title: "Our Core Programs",
      lede: "Integrated programs designed to address urgent humanitarian needs while building long-term capacity",
      whatWeDo: "What We Do",
      items: [
        {
          title: "Education & Learning",
          intro:
            "Education is the cornerstone of recovery and empowerment. When conflict disrupts learning, entire generations risk losing their future.",
          bullets: [
            "Rebuilding and restoring educational infrastructure in conflict-affected regions",
            "Boarding education programs for orphaned children in Syria",
            "English language training for healthcare workers in Syria",
            "Planned English language and learning support for newcomers in Canada",
          ],
        },
        {
          title: "Medical Education & Capacity Building",
          intro:
            "Strong healthcare systems depend on skilled, well-trained professionals. We invest in medical education and workforce development to build sustainable healthcare capacity.",
          bullets: [
            "English language training for healthcare professionals",
            "Specialized training in radiology and women's health",
            "Infection control and nursing standards improvement programs",
            "Public health education and professional mentorship",
          ],
        },
        {
          title: "Orphan Care & Child Protection",
          intro:
            "Children who have lost family support are among the most vulnerable. Our orphan-focused programs emphasize protection, education, and dignity, ensuring every child has the opportunity to thrive.",
          bullets: [
            "Boarding schools providing safe, structured learning environments",
            "Educational and psychosocial support services",
            "Community-based child-focused initiatives and events",
            "Partnership with trusted local organizations for accountability",
          ],
        },
        {
          title: "Hospital & Healthcare Support",
          intro:
            "Hospitals and medical facilities in conflict-affected areas face extraordinary challenges. We support these critical institutions by strengthening infrastructure, improving systems, and building capacity.",
          bullets: [
            "Developing and upgrading radiology departments",
            "Improving sterilization, infection control, and nursing systems",
            "Supporting equipment needs and departmental rehabilitation",
            "Providing technical training and operational guidance",
          ],
        },
      ],
    },
    about: {
      title: "Who We Are",
      intro:
        "A nonprofit organization incorporated in Canada, operating exclusively for charitable, humanitarian, and educational purposes.",
      vision: {
        title: "Our Vision",
        text: "A world where communities affected by conflict have equitable access to education, healthcare, and opportunity—and where Canada plays a meaningful role in advancing global humanitarian impact.",
      },
      mission: {
        title: "Our Mission",
        text: "To rebuild lives and restore hope through education, medical education, orphan care, and hospital support, while strengthening communities in Canada and internationally.",
      },
      valuesTitle: "Our Values",
      values: [
        { title: "Human Dignity", desc: "Every individual deserves safety, respect, and opportunity" },
        { title: "Education for Empowerment", desc: "Knowledge as the foundation for resilience" },
        { title: "Integrity & Accountability", desc: "Transparent and responsible stewardship" },
        { title: "Partnership", desc: "Community-led and collaborative action" },
        { title: "Sustainability", desc: "Long-term impact over short-term relief" },
      ],
    },
    events: {
      title: "Meetings, Events & Community Engagement",
      lede: "Join us for meetings, educational sessions, and community events to engage with our mission.",
      badge: "Past Event",
      item: {
        title: "General Meeting",
        dateLabel: "Date:",
        dateValue: "Saturday, October 4, 2025",
        timeLabel: "Time:",
        timeValue: "11:00 AM – 12:00 PM (EST)",
        formatLabel: "Format:",
        formatValue: "Online (Google Meet)",
        description:
          "This meeting provided an opportunity for members, volunteers, and partners to come together, discuss our ongoing programs, and explore ways to strengthen our impact.",
      },
    },
    gallery: {
      title: "Our Work in Action",
      lede: "A glimpse into the daily efforts of our team and volunteers on the ground — delivering aid, distributing supplies, and supporting families in need.",
      items: [
        {
          caption: "Our field team unloading relief supplies for distribution to local families.",
        },
        {
          caption: "Handing out aid packages directly from our delivery truck.",
        },
        {
          caption: "Carrying essential supplies to families who need them most.",
        },
        {
          caption: "Reaching neighborhoods street by street with essential aid.",
        },
        {
          caption: "Hand-delivering care packages to our community partners.",
        },
        {
          caption: "Partnering with local shops to prepare school supply kits for children.",
        },
        {
          caption: "Preparing backpacks and stationery ahead of the school year.",
        },
        {
          caption: "Distributing backpacks and school supplies to children at a community event.",
        },
      ],
    },
    contact: {
      title: "Get in Touch",
      lede: "We welcome inquiries from volunteers, partners, donors, and community members.",
      email: { label: "Email", value: "info@purecanada.org" },
    },
    footer: {
      about:
        "Pure Canada Foundation is a registered nonprofit organization in Canada, operating exclusively for charitable, humanitarian, and educational purposes.",
      copyright: "© {year} Pure Canada Foundation. All rights reserved.",
    },
  },

  ar: {
    dir: "rtl",
    brand: "مؤسسة بيور كندا",
    nav: {
      home: "الرئيسية",
      programs: "البرامج",
      about: "من نحن",
      events: "الفعاليات",
      gallery: "معرض الصور",
      contact: "اتصل بنا",
    },
    donate: "تبرع الآن",
    langSwitch: { label: "EN", aria: "التبديل إلى الإنجليزية" },
    hero: {
      eyebrow: "مؤسسة بيور كندا",
      title: "ربط كندا بالتأثير العالمي",
      description:
        "منظمة كندية غير ربحية مكرسة لتطوير التعليم، وتعزيز أنظمة الرعاية الصحية، وحماية الأطفال الضعفاء المتأثرين بالصراع والنزوح. متجذرة في القيم الكندية للرحمة والشمول والخدمة.",
      ctaPrimary: "برامجنا",
      ctaSecondary: "انضم إلينا",
    },
    impact: {
      title: "تأثيرنا",
      lede: "كل يوم، تحول مؤسسة بيور كندا الأرواح من خلال العمل المباشر والشراكات المستدامة.",
      items: [
        {
          title: "التعليم أولاً",
          desc: "استعادة الوصول إلى التعلم وخلق مسارات للفرص",
        },
        {
          title: "تعزيز الرعاية الصحية",
          desc: "بناء القدرات من خلال التعليم الطبي ودعم المستشفيات",
        },
        {
          title: "حماية الأطفال",
          desc: "توفير مساحات آمنة ودعم شامل للأطفال الأيتام",
        },
        {
          title: "الشراكة المجتمعية",
          desc: "العمل مع المنظمات المحلية الموثوقة لضمان حلول مستدامة يقودها المجتمع المحلي",
        },
      ],
    },
    programs: {
      title: "برامجنا الأساسية",
      lede: "برامج متكاملة مصممة لمعالجة الاحتياجات الإنسانية العاجلة مع بناء القدرات طويلة الأجل",
      whatWeDo: "ما نفعله",
      items: [
        {
          title: "التعليم والتعلم",
          intro:
            "التعليم هو حجر الأساس للتعافي والتمكين. عندما يعطل الصراع التعلم، تخاطر أجيال كاملة بفقدان مستقبلها.",
          bullets: [
            "إعادة بناء واستعادة البنية التحتية التعليمية في المناطق المتأثرة بالصراع",
            "برامج التعليم الداخلي للأطفال الأيتام في سوريا",
            "تدريب اللغة الإنجليزية للعاملين في مجال الرعاية الصحية في سوريا",
            "دعم اللغة الإنجليزية والتعلم المخطط للوافدين الجدد في كندا",
          ],
        },
        {
          title: "التعليم الطبي وبناء القدرات",
          intro:
            "تعتمد أنظمة الرعاية الصحية القوية على المهنيين المهرة والمدربين تدريباً جيداً. نستثمر في التعليم الطبي وتطوير القوى العاملة لبناء قدرات صحية مستدامة.",
          bullets: [
            "تدريب اللغة الإنجليزية للمهنيين الصحيين",
            "تدريب متخصص في الأشعة وصحة المرأة",
            "برامج تحسين مكافحة العدوى ومعايير التمريض",
            "التعليم الصحي العام والإرشاد المهني",
          ],
        },
        {
          title: "رعاية الأيتام وحماية الأطفال",
          intro:
            "الأطفال الذين فقدوا دعم الأسرة هم من بين الأكثر ضعفاً. تركز برامجنا الموجهة للأيتام على الحماية والتعليم والكرامة، مما يضمن لكل طفل فرصة للازدهار.",
          bullets: [
            "مدارس داخلية توفر بيئات تعليمية آمنة ومنظمة",
            "خدمات الدعم التعليمي والنفسي الاجتماعي",
            "مبادرات وفعاليات تركز على الأطفال قائمة على المجتمع",
            "الشراكة مع المنظمات المحلية الموثوقة للمساءلة",
          ],
        },
        {
          title: "دعم المستشفيات والرعاية الصحية",
          intro:
            "تواجه المستشفيات والمرافق الطبية في المناطق المتأثرة بالصراع تحديات استثنائية. ندعم هذه المؤسسات الحرجة من خلال تعزيز البنية التحتية وتحسين الأنظمة وبناء القدرات.",
          bullets: [
            "تطوير وترقية أقسام الأشعة",
            "تحسين أنظمة التعقيم ومكافحة العدوى والتمريض",
            "دعم احتياجات المعدات وإعادة تأهيل الأقسام",
            "توفير التدريب التقني والإرشاد التشغيلي",
          ],
        },
      ],
    },
    about: {
      title: "من نحن",
      intro: "منظمة غير ربحية مسجلة في كندا، تعمل حصرياً للأغراض الخيرية والإنسانية والتعليمية.",
      vision: {
        title: "رؤيتنا",
        text: "عالم حيث المجتمعات المتأثرة بالصراع لديها وصول عادل إلى التعليم والرعاية الصحية والفرص—وحيث تلعب كندا دوراً مهماً في تعزيز التأثير الإنساني العالمي.",
      },
      mission: {
        title: "مهمتنا",
        text: "إعادة بناء الأرواح واستعادة الأمل من خلال التعليم والتعليم الطبي ورعاية الأيتام ودعم المستشفيات، مع تعزيز المجتمعات في كندا ودولياً.",
      },
      valuesTitle: "قيمنا",
      values: [
        { title: "الكرامة الإنسانية", desc: "كل فرد يستحق الأمان والاحترام والفرصة" },
        { title: "التعليم للتمكين", desc: "المعرفة كأساس للصمود" },
        { title: "النزاهة والمساءلة", desc: "الإشراف الشفاف والمسؤول" },
        { title: "الشراكة", desc: "العمل المجتمعي القيادي والتعاوني" },
        { title: "الاستدامة", desc: "التأثير طويل الأجل على الإغاثة قصيرة الأجل" },
      ],
    },
    events: {
      title: "الاجتماعات والفعاليات والمشاركة المجتمعية",
      lede: "انضم إلينا في الاجتماعات والدورات التعليمية والفعاليات المجتمعية للانخراط في مهمتنا.",
      badge: "فعالية سابقة",
      item: {
        title: "اجتماع عام",
        dateLabel: "التاريخ:",
        dateValue: "السبت، 4 أكتوبر 2025",
        timeLabel: "الوقت:",
        timeValue: "11:00 صباحاً – 12:00 ظهراً (توقيت شرق أمريكا)",
        formatLabel: "الشكل:",
        formatValue: "عبر الإنترنت (Google Meet)",
        description:
          "وفر هذا الاجتماع فرصة للأعضاء والمتطوعين والشركاء للالتقاء ومناقشة برامجنا الجارية واستكشاف سبل تعزيز تأثيرنا.",
      },
    },
    gallery: {
      title: "عملنا على أرض الواقع",
      lede: "لمحة عن الجهود اليومية لفريقنا ومتطوعينا على الأرض ـ في توصيل المساعدات وتوزيع المستلزمات ودعم العائلات المحتاجة.",
      items: [
        {
          caption: "فريقنا الميداني يفرغ مواد الإغاثة لتوزيعها على العائلات المحلية.",
        },
        {
          caption: "توزيع حزم المساعدات مباشرة من شاحنة التوصيل.",
        },
        {
          caption: "حمل المستلزمات الأساسية للعائلات الأكثر احتياجاً.",
        },
        {
          caption: "الوصول إلى الأحياء حياً تلو الآخر بالمساعدات الأساسية.",
        },
        {
          caption: "تسليم الطرود يداً بيد لشركائنا في المجتمع.",
        },
        {
          caption: "التعاون مع المتاجر المحلية لتجهيز حقائب اللوازم المدرسية للأطفال.",
        },
        {
          caption: "تجهيز الحقائب المدرسية والقرطاسية استعداداً للعام الدراسي.",
        },
        {
          caption: "توزيع الحقائب المدرسية والقرطاسية على الأطفال في فعالية مجتمعية.",
        },
      ],
    },
    contact: {
      title: "تواصل معنا",
      lede: "نرحب بالاستفسارات من المتطوعين والشركاء والمانحين وأعضاء المجتمع.",
      email: { label: "البريد الإلكتروني", value: "info@purecanada.org" },
    },
    footer: {
      about: "مؤسسة بيور كندا هي منظمة غير ربحية مسجلة في كندا، تعمل حصرياً للأغراض الخيرية والإنسانية والتعليمية.",
      copyright: "© {year} مؤسسة بيور كندا. جميع الحقوق محفوظة.",
    },
  },
};

export default content;
