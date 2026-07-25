// ============================================================
// DATA OBJECTS (Translated to Arabic, Emojis Replaced by Icons)
// ============================================================

const YEARS = {
  "1AS": { title: "أولى ثانوي", desc: "", badge: "1AS" },
  "2AS": { title: "ثانية ثانوي", desc: "", badge: "2AS" },
  "3AS": { title: "ثالثة ثانوي", desc: "", badge: "3AS" }
};

const TRACKS = {
  "Sciences": {
    icon: '<i class="fa-solid fa-flask"></i>',
    color: "#7C3AED",
    description: "",
    subjects: ["Math", "Physics", "Science", "Arabic", "French", "English", "Islamic Studies", "Philosophy", "History & Geography"]
  },
  "Math": {
    icon: '<i class="fa-solid fa-ruler-combined"></i>',
    color: "#2563EB",
    description: "",
    subjects: ["Math", "Physics", "Science", "Arabic", "French", "English", "Islamic Studies", "Philosophy", "History & Geography"]
  },
  "Technical Math": {
    icon: '<i class="fa-solid fa-gear"></i>',
    color: "#059669",
    description: "",
    subjects: ["Math", "Physics", "Electrical Engineering", "Civil Engineering", "Arabic", "French", "English", "Islamic Studies", "Philosophy", "History & Geography"]
  },
  "Literature": {
    icon: '<i class="fa-solid fa-book-open"></i>',
    color: "#D97706",
    description: "",
    subjects: ["Arabic", "Philosophy", "History & Geography", "French", "English", "Islamic Studies", "Math"]
  },
  "Languages": {
    icon: '<i class="fa-solid fa-earth-africa"></i>',
    color: "#DC2626",
    description: "",
    subjects: ["Arabic", "French", "English", "Third Language", "Math", "Philosophy", "History & Geography", "Islamic Studies"]
  },
  "Management": {
    icon: '<i class="fa-solid fa-chart-pie"></i>',
    color: "#0891B2",
    description: "",
    subjects: ["Law", "Economics", "Accounting", "Math", "Arabic", "French", "English", "Islamic Studies", "Philosophy", "History & Geography"]
  }
};

const TRACKS_1AS = {
  "Common Science": {
    icon: '<i class="fa-solid fa-microscope"></i>',
    color: "#2563EB",
    description: "",
    subjects: ["Math", "Physics", "Science", "Computer Science", "Technology", "Arabic", "French", "English", "Islamic Studies", "History & Geography"]
  },
  "Common Literature": {
    icon: '<i class="fa-solid fa-book-open"></i>',
    color: "#D97706",
    description: "",
    subjects: ["Arabic", "History & Geography", "Islamic Studies", "French", "English", "Math", "Science", "Physics"]
  }
};

const TRACKS_2AS = {
  "Sciences": {
    icon: '<i class="fa-solid fa-flask"></i>',
    color: "#7C3AED",
    description: "",
    subjects: ["Math", "Physics", "Science", "Arabic", "French", "English", "Islamic Studies", "History & Geography"]
  },
  "Math": {
    icon: '<i class="fa-solid fa-ruler-combined"></i>',
    color: "#2563EB",
    description: "",
    subjects: ["Math", "Physics", "Science", "Arabic", "French", "English", "Islamic Studies", "History & Geography"]
  },
  "Technical Math": {
    icon: '<i class="fa-solid fa-gear"></i>',
    color: "#059669",
    description: "",
    subjects: ["Math", "Physics", "Electrical Engineering", "Civil Engineering", "Arabic", "French", "English", "Islamic Studies", "History & Geography"]
  },
  "Literature": {
    icon: '<i class="fa-solid fa-book-open"></i>',
    color: "#D97706",
    description: "",
    subjects: ["Arabic", "Philosophy", "History & Geography", "Physics", "Science", "French", "English", "Islamic Studies", "Math"]
  },
  "Languages": {
    icon: '<i class="fa-solid fa-earth-africa"></i>',
    color: "#DC2626",
    description: "",
    subjects: ["Arabic", "French", "English", "Third Language", "Math", "History & Geography", "Islamic Studies"]
  },
  "Management": {
    icon: '<i class="fa-solid fa-chart-pie"></i>',
    color: "#0891B2",
    description: "",
    subjects: ["Law", "Economics", "Accounting", "Math", "Arabic", "French", "English", "Islamic Studies", "History & Geography"]
  }
};

const SUBJECTS = {
  "Math": {
    icon: '<i class="fa-solid fa-ruler-combined"></i>',
    color: "#2563EB",
    description: "",
    resourceCount: { lessons: 24, exercises: 48, exams: 12, channels: 8 }
  },
  "Physics": {
    icon: '<i class="fa-solid fa-bolt"></i>',
    color: "#7C3AED",
    description: "",
    resourceCount: { lessons: 20, exercises: 35, exams: 10, channels: 6 }
  },
  "Biology": {
    icon: '<i class="fa-solid fa-dna"></i>',
    color: "#059669",
    description: "",
    resourceCount: { lessons: 18, exercises: 30, exams: 8, channels: 5 }
  },
  "Chemistry": {
    icon: '<i class="fa-solid fa-flask-vial"></i>',
    color: "#059669",
    description: "",
    resourceCount: { lessons: 15, exercises: 25, exams: 5, channels: 3 }
  },
  "Arabic": {
    icon: '<i class="fa-solid fa-scroll"></i>',
    color: "#D97706",
    description: "",
    resourceCount: { lessons: 15, exercises: 25, exams: 10, channels: 4 }
  },
  "French": {
    icon: '<i class="fa-solid fa-language"></i>',
    color: "#DC2626",
    description: "",
    resourceCount: { lessons: 14, exercises: 22, exams: 9, channels: 5 }
  },
  "English": {
    icon: '<i class="fa-solid fa-language"></i>',
    color: "#0EA5E9",
    description: "",
    resourceCount: { lessons: 12, exercises: 20, exams: 8, channels: 4 }
  },
  "Philosophy": {
    icon: '<i class="fa-solid fa-brain"></i>',
    color: "#8B5CF6",
    description: "",
    resourceCount: { lessons: 16, exercises: 18, exams: 7, channels: 3 }
  },
  "History & Geography": {
    icon: '<i class="fa-solid fa-map-location-dot"></i>',
    color: "#10B981",
    description: "",
    resourceCount: { lessons: 20, exercises: 24, exams: 10, channels: 4 }
  },
  "Islamic Studies": {
    icon: '<i class="fa-solid fa-mosque"></i>',
    color: "#16A34A",
    description: "",
    resourceCount: { lessons: 12, exercises: 15, exams: 6, channels: 2 }
  },
  "Spanish": {
    icon: '<i class="fa-solid fa-language"></i>',
    color: "#FACC15",
    description: "",
    resourceCount: { lessons: 10, exercises: 15, exams: 5, channels: 2 }
  },
  "Technology": {
    icon: '<i class="fa-solid fa-lightbulb"></i>',
    color: "#475569",
    description: "",
    resourceCount: { lessons: 20, exercises: 35, exams: 12, channels: 5 }
  },
  "Science": {
    icon: '<i class="fa-solid fa-microscope"></i>',
    color: "#7C3AED",
    description: "",
    resourceCount: { lessons: 15, exercises: 20, exams: 8, channels: 4 }
  },
  "Computer Science": {
    icon: '<i class="fa-solid fa-laptop-code"></i>',
    color: "#475569",
    description: "",
    resourceCount: { lessons: 10, exercises: 15, exams: 5, channels: 2 }
  },
  "Electrical Engineering": {
    icon: '<i class="fa-solid fa-plug"></i>',
    color: "#F59E0B",
    description: "",
    resourceCount: { lessons: 10, exercises: 20, exams: 5, channels: 2 }
  },
  "Civil Engineering": {
    icon: '<i class="fa-solid fa-building"></i>',
    color: "#14B8A6",
    description: "",
    resourceCount: { lessons: 10, exercises: 20, exams: 5, channels: 2 }
  },
  "Law": {
    icon: '<i class="fa-solid fa-scale-balanced"></i>',
    color: "#475569",
    description: "",
    resourceCount: { lessons: 15, exercises: 10, exams: 5, channels: 2 }
  },
  "Economics": {
    icon: '<i class="fa-solid fa-chart-line"></i>',
    color: "#0284C7",
    description: "",
    resourceCount: { lessons: 15, exercises: 15, exams: 5, channels: 2 }
  },
  "Accounting": {
    icon: '<i class="fa-solid fa-coins"></i>',
    color: "#16A34A",
    description: "",
    resourceCount: { lessons: 20, exercises: 25, exams: 5, channels: 3 }
  },
  "Third Language": {
    icon: '<i class="fa-solid fa-language"></i>',
    color: "#F43F5E",
    description: "",
    resourceCount: { lessons: 10, exercises: 15, exams: 5, channels: 2 }
  }
};

const MASTER_CHANNELS = {
  "Math": [
    { id: "ch-math-n", title: "الأستاذ نور الدين", desc: "أكبر مرجع لمادة الرياضيات في الجزائر - جميع الوحدات والبكالوريات", meta: '<i class="fa-solid fa-video"></i> +300 فيديو • <i class="fa-solid fa-star" style="color: gold"></i> 5.0', name: "ن", bg: "#DC2626", url: "https://youtube.com/@noureddine2013?si=pZLJoUBj08L4bQ8t" },
    { id: "ch-math-a", title: "الاستاذ عبد الباسط", desc: "دروس مبسطة وتمارين متنوعة لجميع مستويات الثانوي", meta: '<i class="fa-solid fa-video"></i> +150 فيديو', name: "أ", bg: "#2563EB", url: "https://youtube.com/channel/UCnMzRcYSang1SXOZLH77ljw?si=9cHHjw7LIfv1oGjf" },
    { id: "ch-math-w", title: "الأستاذ وليد بومرزوق", desc: "شرح دقيق وحلول مفصلة للسلاسل التدريبية المكثفة", meta: '<i class="fa-solid fa-video"></i> +120 فيديو', name: "و", bg: "#059669", url: "https://youtube.com/@maths07-walidboumerzoug?si=nN-DCWen_d5o0Uwn" }
  ],
  "Physics": [
    { id: "ch-phys-a", title: "الأستاذ عبد اللطيف", desc: "دروس شاملة مع التركيز على المنهجية الصحيحة لحل التمارين", meta: '<i class="fa-solid fa-video"></i> +180 فيديو', name: "ع", bg: "#7C3AED", url: "https://youtube.com/@abdelatif_phydz?si=_o7_p5qiII6Lb9h4" },
    { id: "ch-phys-s", title: "الأستاذ سيف الله", desc: "تبسيط مفاهيم الفيزياء مع مراجعات نهائية شاملة", meta: '<i class="fa-solid fa-video"></i> +100 فيديو', name: "س", bg: "#0EA5E9", url: "https://youtube.com/@prof_seif_allah?si=mI4BoLfrmG9JjRoP" },
    { id: "ch-phys-l", title: "الأستاذ لطفي أنور فراجي", desc: "شرح الفيزياء بطرق حديثة تساعد على الاستيعاب السريع", meta: '<i class="fa-solid fa-video"></i> +90 فيديو', name: "ل", bg: "#D97706", url: "https://youtube.com/@lotfianouarferradji?si=CDa5l85MpFFDDrFn" }
  ],
  "Science": [
    { id: "ch-sci-k", title: "الأستاذ كتفي شريف زينة", desc: "شرح معمق لدروس العلوم الطبيعية وحلول البكالوريات", meta: '<i class="fa-solid fa-video"></i> +200 فيديو', name: "ك", bg: "#16A34A", url: "https://youtube.com/@prof-ketfi.cherif-zina?si=ll1KEuLSGf3qMnc3" },
    { id: "ch-sci-i", title: "إكرام للعلوم الطبيعية", desc: "ملخصات دروس منظمة وسهلة الحفظ لجميع المستويات", meta: '<i class="fa-solid fa-video"></i> +110 فيديو', name: "إ", bg: "#DC2626", url: "https://youtube.com/@ikramscience8424?si=faKi3x2sFsgsyB10" },
    { id: "ch-sci-c", title: "الأستاذ شاوش", desc: "منهجية الإجابة وشرح آليات التركيب والمناعة والجيولوجيا", meta: '<i class="fa-solid fa-video"></i> +140 فيديو', name: "ش", bg: "#059669", url: "https://youtube.com/@profchaouch?si=CgyxsbYUgZErOmP5" }
  ],
  "History & Geography": [
    { id: "ch-hg-s", title: "قناة الاجتماعيات", desc: "طرق مبتكرة لحفظ التواريخ والمصطلحات والخرائط", meta: '<i class="fa-solid fa-video"></i> +150 فيديو', name: "ا", bg: "#D97706", url: "https://youtube.com/channel/UCeyN7ipOQs6Ld4jEIMFAaKw?si=hF_Kp38LPF1jHzHW" },
    { id: "ch-hg-k", title: "الأستاذ عبد النور خليفي", desc: "أفضل شروحات الاجتماعيات لطلاب البكالوريا بطريقة ممتعة", meta: '<i class="fa-solid fa-video"></i> +200 فيديو', name: "ع", bg: "#2563EB", url: "https://youtube.com/@abdennourkhalifi?si=om9R64i0llChKRgm" }
  ],
  "English": [
    { id: "ch-eng-r", title: "الأستاذ عبد الرحيم", desc: "قواعد اللغة الإنجليزية وحل مواضيع البكالوريا لجميع الشعب", meta: '<i class="fa-solid fa-video"></i> +130 فيديو', name: "ر", bg: "#0EA5E9", url: "https://youtube.com/@english-tutor-abderrahim?si=pK0GQoc86uwKoEHU" },
    { id: "ch-eng-n", title: "Miss Nassima", desc: "دروس إنجليزية مبسطة مع التركيز على كتابة التعبير", meta: '<i class="fa-solid fa-video"></i> +150 فيديو', name: "ن", bg: "#7C3AED", url: "https://youtube.com/@missnassima?si=rwMjOSVVorMLVN9S" },
    { id: "ch-eng-a", title: "Amin English", desc: "شروحات وافية ومراجعات نهائية بأسلوب حديث", meta: '<i class="fa-solid fa-video"></i> +140 فيديو', name: "أ", bg: "#059669", url: "https://youtube.com/@aminenglish?si=MaHt_qlZJXOazK6f" }
  ],
  "French": [
    { id: "ch-fr-n", title: "النجاح في الفرنسية", desc: "تبسيط قواعد اللغة الفرنسية وتدريبات على فهم النصوص", meta: '<i class="fa-solid fa-video"></i> +120 فيديو', name: "ن", bg: "#DC2626", url: "https://youtube.com/@profelnajahh?si=TTo_v8SPuzRscqy7" }
  ],
  "Arabic": [
    { id: "ch-ar-m", title: "الأستاذ مبروك بوبكر", desc: "كنز في اللغة العربية، البلاغة، القواعد وتحليل النصوص", meta: '<i class="fa-solid fa-video"></i> +300 فيديو', name: "م", bg: "#D97706", url: "https://youtube.com/@mabrouk_boubaker?si=fymkVcjpqtr7wDNS" },
    { id: "ch-ar-d", title: "الاستاذ شريفي", desc: "تخصص في تبسيط الأدب العربي وقواعده للثانوي", meta: '<i class="fa-solid fa-video"></i> +100 فيديو', name: "ش", bg: "#16A34A", url: "https://youtube.com/channel/UCEpuRLQpVVre6nwaV6cRjrw?si=CxTMFQzd-NTSiWNu" },
    { id: "ch-ar-h", title: "الأستاذ حيقون", desc: "حلول البكالوريا ومنهجية الإجابة الخاصة بمادة اللغة العربية", meta: '<i class="fa-solid fa-video"></i> +180 فيديو', name: "ح", bg: "#2563EB", url: "https://www.youtube.com/@prof_haigoune" }
  ]
};

const RESOURCES = {
  "3AS-Sciences-Math": {
    channels: [], // Will be auto-injected from MASTER_CHANNELS
    lessons: [],
    exercises: [],
    exams: [],
    summaries: [
      { id: "sum-form", title: "مطوية قوانين الرياضيات", desc: "ملخص لجميع القوانين المطلوبة في البكالوريا", chapter: "all", date: "أفريل 2024", size: "1.0 MB" },
      { id: "sum-lim", title: "حيل: إزالة حالات عدم التعيين", desc: "أهم الطرق السريعة لإزالة عدم التعيين في النهايات", chapter: "calculus", date: "نوفمبر 2024", size: "0.8 MB" },
      { id: "sum-com", title: "المختصر في الأعداد المركبة", desc: "دليل مرئي للخواص الهندسية للأعداد المركبة", chapter: "algebra", date: "جانفي 2025", size: "1.1 MB" }
    ]
  },
  "2AS-Sciences-Math": {
    channels: [],
    lessons: [],
    exercises: [],
    exams: [],
    summaries: []
  }
};

RESOURCES["2AS-Math-Math"] = RESOURCES["2AS-Sciences-Math"];
RESOURCES["2AS-Technical Math-Math"] = RESOURCES["2AS-Sciences-Math"];

RESOURCES["2AS-Sciences-Science"] = {
  channels: [],
  lessons: [],
  exercises: [],
  exams: [],
  summaries: []
};

RESOURCES["2AS-Sciences-Physics"] = {
  channels: [],
  lessons: [],
  exercises: [],
  exams: [],
  summaries: []
};

RESOURCES["2AS-Math-Physics"] = RESOURCES["2AS-Sciences-Physics"];
RESOURCES["2AS-Technical Math-Physics"] = RESOURCES["2AS-Sciences-Physics"];



// ============================================================

// AUTO INJECTED BAC EXAMS
if (!RESOURCES['3AS-Literature-Islamic Studies']) RESOURCES['3AS-Literature-Islamic Studies'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Literature-Islamic Studies'].exams.push(...[
  { id: "islamia-2023", title: "موضوع بكالوريا 2023", desc: "موضوع البكالوريا الرسمي", date: "2023", url: "اختبارات/باكالوريا/شعبة اداب و فلسفة/اسلامية/islamia-2023.pdf" },
  { id: "islamia-2024", title: "موضوع بكالوريا 2024", desc: "موضوع البكالوريا الرسمي", date: "2024", url: "اختبارات/باكالوريا/شعبة اداب و فلسفة/اسلامية/islamia-2024.pdf" },
  { id: "islamia-2025", title: "موضوع بكالوريا 2025", desc: "موضوع البكالوريا الرسمي", date: "2025", url: "اختبارات/باكالوريا/شعبة اداب و فلسفة/اسلامية/islamia-2025.pdf" },
]);
if (!RESOURCES['3AS-Literature-English']) RESOURCES['3AS-Literature-English'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Literature-English'].exams.push(...[
  { id: "dzexams-bac-anglais-1096571", title: "موضوع بكالوريا رقم 1", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة اداب و فلسفة/انجليزية/dzexams-bac-anglais-1096571.pdf" },
  { id: "dzexams-bac-anglais-206010", title: "موضوع بكالوريا رقم 2", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة اداب و فلسفة/انجليزية/dzexams-bac-anglais-206010.pdf" },
  { id: "dzexams-bac-anglais-2077403", title: "موضوع بكالوريا رقم 3", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة اداب و فلسفة/انجليزية/dzexams-bac-anglais-2077403.pdf" },
]);
if (!RESOURCES['3AS-Literature-History & Geography']) RESOURCES['3AS-Literature-History & Geography'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Literature-History & Geography'].exams.push(...[
  { id: "dzexams-bac-histoire-geographie-1029951", title: "موضوع بكالوريا رقم 1", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة اداب و فلسفة/تاريخ و جغرافيا/dzexams-bac-histoire-geographie-1029951.pdf" },
  { id: "dzexams-bac-histoire-geographie-1186851", title: "موضوع بكالوريا رقم 2", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة اداب و فلسفة/تاريخ و جغرافيا/dzexams-bac-histoire-geographie-1186851.pdf" },
  { id: "dzexams-bac-histoire-geographie-487973", title: "موضوع بكالوريا رقم 3", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة اداب و فلسفة/تاريخ و جغرافيا/dzexams-bac-histoire-geographie-487973.pdf" },
]);
if (!RESOURCES['3AS-Literature-Math']) RESOURCES['3AS-Literature-Math'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Literature-Math'].exams.push(...[
  { id: "dzexams-bac-mathematiques-1061072", title: "موضوع بكالوريا رقم 1", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة اداب و فلسفة/رياضيات/dzexams-bac-mathematiques-1061072.pdf" },
  { id: "dzexams-bac-mathematiques-1376623", title: "موضوع بكالوريا رقم 2", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة اداب و فلسفة/رياضيات/dzexams-bac-mathematiques-1376623.pdf" },
  { id: "dzexams-bac-mathematiques-758265", title: "موضوع بكالوريا رقم 3", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة اداب و فلسفة/رياضيات/dzexams-bac-mathematiques-758265.pdf" },
]);
if (!RESOURCES['3AS-Literature-Arabic']) RESOURCES['3AS-Literature-Arabic'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Literature-Arabic'].exams.push(...[
  { id: "dzexams-bac-arabe-1333181", title: "موضوع بكالوريا رقم 1", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة اداب و فلسفة/عربية/dzexams-bac-arabe-1333181.pdf" },
  { id: "dzexams-bac-arabe-1915059", title: "موضوع بكالوريا رقم 2", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة اداب و فلسفة/عربية/dzexams-bac-arabe-1915059.pdf" },
  { id: "dzexams-bac-arabe-700885", title: "موضوع بكالوريا رقم 3", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة اداب و فلسفة/عربية/dzexams-bac-arabe-700885.pdf" },
]);
if (!RESOURCES['3AS-Literature-French']) RESOURCES['3AS-Literature-French'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Literature-French'].exams.push(...[
  { id: "dzexams-bac-francais-1190564", title: "موضوع بكالوريا رقم 1", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة اداب و فلسفة/فرنسية/dzexams-bac-francais-1190564.pdf" },
  { id: "dzexams-bac-francais-230351", title: "موضوع بكالوريا رقم 2", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة اداب و فلسفة/فرنسية/dzexams-bac-francais-230351.pdf" },
  { id: "dzexams-bac-francais-688851", title: "موضوع بكالوريا رقم 3", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة اداب و فلسفة/فرنسية/dzexams-bac-francais-688851.pdf" },
]);
if (!RESOURCES['3AS-Literature-Philosophy']) RESOURCES['3AS-Literature-Philosophy'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Literature-Philosophy'].exams.push(...[
  { id: "dzexams-bac-philosophie-1037853", title: "موضوع بكالوريا رقم 1", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة اداب و فلسفة/فلسفة/dzexams-bac-philosophie-1037853.pdf" },
  { id: "dzexams-bac-philosophie-578748", title: "موضوع بكالوريا رقم 2", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة اداب و فلسفة/فلسفة/dzexams-bac-philosophie-578748.pdf" },
  { id: "dzexams-bac-philosophie-595380", title: "موضوع بكالوريا رقم 3", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة اداب و فلسفة/فلسفة/dzexams-bac-philosophie-595380.pdf" },
]);
if (!RESOURCES['3AS-Management-Islamic Studies']) RESOURCES['3AS-Management-Islamic Studies'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Management-Islamic Studies'].exams.push(...[
  { id: "islamia-2023", title: "موضوع بكالوريا 2023", desc: "موضوع البكالوريا الرسمي", date: "2023", url: "اختبارات/باكالوريا/شعبة تسيير و اقتصاد/اسلامية/islamia-2023.pdf" },
  { id: "islamia-2024", title: "موضوع بكالوريا 2024", desc: "موضوع البكالوريا الرسمي", date: "2024", url: "اختبارات/باكالوريا/شعبة تسيير و اقتصاد/اسلامية/islamia-2024.pdf" },
  { id: "islamia-2025", title: "موضوع بكالوريا 2025", desc: "موضوع البكالوريا الرسمي", date: "2025", url: "اختبارات/باكالوريا/شعبة تسيير و اقتصاد/اسلامية/islamia-2025.pdf" },
]);
if (!RESOURCES['3AS-Management-Economics']) RESOURCES['3AS-Management-Economics'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Management-Economics'].exams.push(...[
  { id: "dzexams-bac-economie-management-1125133", title: "موضوع بكالوريا رقم 1", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة تسيير و اقتصاد/الاقتصاد و المانجمنت/dzexams-bac-economie-management-1125133.pdf" },
  { id: "dzexams-bac-economie-management-1489285", title: "موضوع بكالوريا رقم 2", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة تسيير و اقتصاد/الاقتصاد و المانجمنت/dzexams-bac-economie-management-1489285.pdf" },
  { id: "dzexams-bac-economie-management-404835", title: "موضوع بكالوريا رقم 3", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة تسيير و اقتصاد/الاقتصاد و المانجمنت/dzexams-bac-economie-management-404835.pdf" },
]);
if (!RESOURCES['3AS-Management-Accounting']) RESOURCES['3AS-Management-Accounting'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Management-Accounting'].exams.push(...[
  { id: "dzexams-bac-comptabilite-1587326", title: "موضوع بكالوريا رقم 1", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة تسيير و اقتصاد/التسيير المحاسبي والمالي/dzexams-bac-comptabilite-1587326.pdf" },
  { id: "dzexams-bac-comptabilite-1700458", title: "موضوع بكالوريا رقم 2", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة تسيير و اقتصاد/التسيير المحاسبي والمالي/dzexams-bac-comptabilite-1700458.pdf" },
  { id: "dzexams-bac-comptabilite-2127535", title: "موضوع بكالوريا رقم 3", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة تسيير و اقتصاد/التسيير المحاسبي والمالي/dzexams-bac-comptabilite-2127535.pdf" },
]);
if (!RESOURCES['3AS-Management-English']) RESOURCES['3AS-Management-English'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Management-English'].exams.push(...[
  { id: "English-2023", title: "موضوع بكالوريا 2023", desc: "موضوع البكالوريا الرسمي", date: "2023", url: "اختبارات/باكالوريا/شعبة تسيير و اقتصاد/انجليزية/English-2023.pdf" },
  { id: "English-2024", title: "موضوع بكالوريا 2024", desc: "موضوع البكالوريا الرسمي", date: "2024", url: "اختبارات/باكالوريا/شعبة تسيير و اقتصاد/انجليزية/English-2024.pdf" },
  { id: "English-2025", title: "موضوع بكالوريا 2025", desc: "موضوع البكالوريا الرسمي", date: "2025", url: "اختبارات/باكالوريا/شعبة تسيير و اقتصاد/انجليزية/English-2025.pdf" },
]);
if (!RESOURCES['3AS-Management-History & Geography']) RESOURCES['3AS-Management-History & Geography'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Management-History & Geography'].exams.push(...[
  { id: "dzexams-bac-histoire-geographie-1371453", title: "موضوع بكالوريا رقم 1", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة تسيير و اقتصاد/تاريخ و جغرافيا/dzexams-bac-histoire-geographie-1371453.pdf" },
  { id: "dzexams-bac-histoire-geographie-1846683", title: "موضوع بكالوريا رقم 2", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة تسيير و اقتصاد/تاريخ و جغرافيا/dzexams-bac-histoire-geographie-1846683.pdf" },
  { id: "dzexams-bac-histoire-geographie-854508", title: "موضوع بكالوريا رقم 3", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة تسيير و اقتصاد/تاريخ و جغرافيا/dzexams-bac-histoire-geographie-854508.pdf" },
]);
if (!RESOURCES['3AS-Management-Math']) RESOURCES['3AS-Management-Math'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Management-Math'].exams.push(...[
  { id: "dzexams-bac-mathematiques-1349993", title: "موضوع بكالوريا رقم 1", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة تسيير و اقتصاد/رياضيات/dzexams-bac-mathematiques-1349993.pdf" },
  { id: "dzexams-bac-mathematiques-1888843", title: "موضوع بكالوريا رقم 2", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة تسيير و اقتصاد/رياضيات/dzexams-bac-mathematiques-1888843.pdf" },
  { id: "dzexams-bac-mathematiques-572285", title: "موضوع بكالوريا رقم 3", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة تسيير و اقتصاد/رياضيات/dzexams-bac-mathematiques-572285.pdf" },
]);
if (!RESOURCES['3AS-Management-Arabic']) RESOURCES['3AS-Management-Arabic'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Management-Arabic'].exams.push(...[
  { id: "Arab-2023", title: "موضوع بكالوريا 2023", desc: "موضوع البكالوريا الرسمي", date: "2023", url: "اختبارات/باكالوريا/شعبة تسيير و اقتصاد/عربية/Arab-2023.pdf" },
  { id: "Arab-2024", title: "موضوع بكالوريا 2024", desc: "موضوع البكالوريا الرسمي", date: "2024", url: "اختبارات/باكالوريا/شعبة تسيير و اقتصاد/عربية/Arab-2024.pdf" },
  { id: "Arab-2025", title: "موضوع بكالوريا 2025", desc: "موضوع البكالوريا الرسمي", date: "2025", url: "اختبارات/باكالوريا/شعبة تسيير و اقتصاد/عربية/Arab-2025.pdf" },
]);
if (!RESOURCES['3AS-Management-French']) RESOURCES['3AS-Management-French'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Management-French'].exams.push(...[
  { id: "French-2023", title: "موضوع بكالوريا 2023", desc: "موضوع البكالوريا الرسمي", date: "2023", url: "اختبارات/باكالوريا/شعبة تسيير و اقتصاد/فرنسية/French-2023.pdf" },
  { id: "French-2024", title: "موضوع بكالوريا 2024", desc: "موضوع البكالوريا الرسمي", date: "2024", url: "اختبارات/باكالوريا/شعبة تسيير و اقتصاد/فرنسية/French-2024.pdf" },
  { id: "French-2025", title: "موضوع بكالوريا 2025", desc: "موضوع البكالوريا الرسمي", date: "2025", url: "اختبارات/باكالوريا/شعبة تسيير و اقتصاد/فرنسية/French-2025.pdf" },
]);
if (!RESOURCES['3AS-Management-Philosophy']) RESOURCES['3AS-Management-Philosophy'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Management-Philosophy'].exams.push(...[
  { id: "dzexams-bac-genie-electrique-658917", title: "موضوع بكالوريا رقم 1", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة تسيير و اقتصاد/فلسفة/dzexams-bac-genie-electrique-658917.pdf" },
  { id: "dzexams-bac-philosophie-1101173", title: "موضوع بكالوريا رقم 2", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة تسيير و اقتصاد/فلسفة/dzexams-bac-philosophie-1101173.pdf" },
  { id: "dzexams-bac-philosophie-761075", title: "موضوع بكالوريا رقم 3", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة تسيير و اقتصاد/فلسفة/dzexams-bac-philosophie-761075.pdf" },
]);
if (!RESOURCES['3AS-Management-Law']) RESOURCES['3AS-Management-Law'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Management-Law'].exams.push(...[
  { id: "dzexams-bac-droit-1145332", title: "موضوع بكالوريا رقم 1", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة تسيير و اقتصاد/قانون/dzexams-bac-droit-1145332.pdf" },
  { id: "dzexams-bac-droit-1189289", title: "موضوع بكالوريا رقم 2", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة تسيير و اقتصاد/قانون/dzexams-bac-droit-1189289.pdf" },
  { id: "dzexams-bac-droit-1644696", title: "موضوع بكالوريا رقم 3", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة تسيير و اقتصاد/قانون/dzexams-bac-droit-1644696.pdf" },
]);
if (!RESOURCES['3AS-Technical Math-Islamic Studies']) RESOURCES['3AS-Technical Math-Islamic Studies'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Technical Math-Islamic Studies'].exams.push(...[
  { id: "islamia-2023", title: "موضوع بكالوريا 2023", desc: "موضوع البكالوريا الرسمي", date: "2023", url: "اختبارات/باكالوريا/شعبة تقني رياضي/اسلامية/islamia-2023.pdf" },
  { id: "islamia-2024", title: "موضوع بكالوريا 2024", desc: "موضوع البكالوريا الرسمي", date: "2024", url: "اختبارات/باكالوريا/شعبة تقني رياضي/اسلامية/islamia-2024.pdf" },
  { id: "islamia-2025", title: "موضوع بكالوريا 2025", desc: "موضوع البكالوريا الرسمي", date: "2025", url: "اختبارات/باكالوريا/شعبة تقني رياضي/اسلامية/islamia-2025.pdf" },
]);
if (!RESOURCES['3AS-Technical Math-English']) RESOURCES['3AS-Technical Math-English'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Technical Math-English'].exams.push(...[
  { id: "English-2023", title: "موضوع بكالوريا 2023", desc: "موضوع البكالوريا الرسمي", date: "2023", url: "اختبارات/باكالوريا/شعبة تقني رياضي/انجليزية/English-2023.pdf" },
  { id: "English-2024", title: "موضوع بكالوريا 2024", desc: "موضوع البكالوريا الرسمي", date: "2024", url: "اختبارات/باكالوريا/شعبة تقني رياضي/انجليزية/English-2024.pdf" },
  { id: "English-2025", title: "موضوع بكالوريا 2025", desc: "موضوع البكالوريا الرسمي", date: "2025", url: "اختبارات/باكالوريا/شعبة تقني رياضي/انجليزية/English-2025.pdf" },
]);
if (!RESOURCES['3AS-Technical Math-History & Geography']) RESOURCES['3AS-Technical Math-History & Geography'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Technical Math-History & Geography'].exams.push(...[
  { id: "H-G-2023", title: "موضوع بكالوريا 2023", desc: "موضوع البكالوريا الرسمي", date: "2023", url: "اختبارات/باكالوريا/شعبة تقني رياضي/تاريخ و جغرافيا/H-G-2023.pdf" },
  { id: "H-G-2024", title: "موضوع بكالوريا 2024", desc: "موضوع البكالوريا الرسمي", date: "2024", url: "اختبارات/باكالوريا/شعبة تقني رياضي/تاريخ و جغرافيا/H-G-2024.pdf" },
  { id: "H-G-2025", title: "موضوع بكالوريا 2025", desc: "موضوع البكالوريا الرسمي", date: "2025", url: "اختبارات/باكالوريا/شعبة تقني رياضي/تاريخ و جغرافيا/H-G-2025.pdf" },
]);
if (!RESOURCES['3AS-Technical Math-Math']) RESOURCES['3AS-Technical Math-Math'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Technical Math-Math'].exams.push(...[
  { id: "dzexams-bac-mathematiques-1494511", title: "موضوع بكالوريا رقم 1", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة تقني رياضي/رياضيات/dzexams-bac-mathematiques-1494511.pdf" },
  { id: "dzexams-bac-mathematiques-2243211", title: "موضوع بكالوريا رقم 2", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة تقني رياضي/رياضيات/dzexams-bac-mathematiques-2243211.pdf" },
  { id: "dzexams-bac-mathematiques-943402", title: "موضوع بكالوريا رقم 3", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة تقني رياضي/رياضيات/dzexams-bac-mathematiques-943402.pdf" },
]);
if (!RESOURCES['3AS-Technical Math-Arabic']) RESOURCES['3AS-Technical Math-Arabic'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Technical Math-Arabic'].exams.push(...[
  { id: "Arab-2023", title: "موضوع بكالوريا 2023", desc: "موضوع البكالوريا الرسمي", date: "2023", url: "اختبارات/باكالوريا/شعبة تقني رياضي/عربية/Arab-2023.pdf" },
  { id: "Arab-2024", title: "موضوع بكالوريا 2024", desc: "موضوع البكالوريا الرسمي", date: "2024", url: "اختبارات/باكالوريا/شعبة تقني رياضي/عربية/Arab-2024.pdf" },
  { id: "Arab-2025", title: "موضوع بكالوريا 2025", desc: "موضوع البكالوريا الرسمي", date: "2025", url: "اختبارات/باكالوريا/شعبة تقني رياضي/عربية/Arab-2025.pdf" },
]);
if (!RESOURCES['3AS-Technical Math-French']) RESOURCES['3AS-Technical Math-French'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Technical Math-French'].exams.push(...[
  { id: "French-2023", title: "موضوع بكالوريا 2023", desc: "موضوع البكالوريا الرسمي", date: "2023", url: "اختبارات/باكالوريا/شعبة تقني رياضي/فرنسية/French-2023.pdf" },
  { id: "French-2024", title: "موضوع بكالوريا 2024", desc: "موضوع البكالوريا الرسمي", date: "2024", url: "اختبارات/باكالوريا/شعبة تقني رياضي/فرنسية/French-2024.pdf" },
  { id: "French-2025", title: "موضوع بكالوريا 2025", desc: "موضوع البكالوريا الرسمي", date: "2025", url: "اختبارات/باكالوريا/شعبة تقني رياضي/فرنسية/French-2025.pdf" },
]);
if (!RESOURCES['3AS-Technical Math-Philosophy']) RESOURCES['3AS-Technical Math-Philosophy'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Technical Math-Philosophy'].exams.push(...[
  { id: "dzexams-bac-genie-electrique-658917", title: "موضوع بكالوريا رقم 1", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة تقني رياضي/فلسفة/dzexams-bac-genie-electrique-658917.pdf" },
  { id: "dzexams-bac-philosophie-1101173", title: "موضوع بكالوريا رقم 2", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة تقني رياضي/فلسفة/dzexams-bac-philosophie-1101173.pdf" },
  { id: "dzexams-bac-philosophie-761075", title: "موضوع بكالوريا رقم 3", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة تقني رياضي/فلسفة/dzexams-bac-philosophie-761075.pdf" },
]);
if (!RESOURCES['3AS-Technical Math-Physics']) RESOURCES['3AS-Technical Math-Physics'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Technical Math-Physics'].exams.push(...[
  { id: "Math-Physics-2023", title: "موضوع بكالوريا 2023", desc: "موضوع البكالوريا الرسمي", date: "2023", url: "اختبارات/باكالوريا/شعبة تقني رياضي/فيزياء/Math-Physics-2023.pdf" },
  { id: "Math-Physics-2024", title: "موضوع بكالوريا 2024", desc: "موضوع البكالوريا الرسمي", date: "2024", url: "اختبارات/باكالوريا/شعبة تقني رياضي/فيزياء/Math-Physics-2024.pdf" },
  { id: "Math-Physics-2025", title: "موضوع بكالوريا 2025", desc: "موضوع البكالوريا الرسمي", date: "2025", url: "اختبارات/باكالوريا/شعبة تقني رياضي/فيزياء/Math-Physics-2025.pdf" },
]);
if (!RESOURCES['3AS-Technical Math-Electrical Engineering']) RESOURCES['3AS-Technical Math-Electrical Engineering'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Technical Math-Electrical Engineering'].exams.push(...[
  { id: "elec-2023", title: "موضوع بكالوريا 2023", desc: "موضوع البكالوريا الرسمي", date: "2023", url: "اختبارات/باكالوريا/شعبة تقني رياضي/هندسة كهربائية/elec-2023.pdf" },
  { id: "elec-2024", title: "موضوع بكالوريا 2024", desc: "موضوع البكالوريا الرسمي", date: "2024", url: "اختبارات/باكالوريا/شعبة تقني رياضي/هندسة كهربائية/elec-2024.pdf" },
  { id: "elec-2025", title: "موضوع بكالوريا 2025", desc: "موضوع البكالوريا الرسمي", date: "2025", url: "اختبارات/باكالوريا/شعبة تقني رياضي/هندسة كهربائية/elec-2025.pdf" },
]);
if (!RESOURCES['3AS-Technical Math-Civil Engineering']) RESOURCES['3AS-Technical Math-Civil Engineering'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Technical Math-Civil Engineering'].exams.push(...[
  { id: "genie-2023", title: "موضوع بكالوريا 2023", desc: "موضوع البكالوريا الرسمي", date: "2023", url: "اختبارات/باكالوريا/شعبة تقني رياضي/هندسة مدنية/genie-2023.pdf" },
  { id: "genie-2024", title: "موضوع بكالوريا 2024", desc: "موضوع البكالوريا الرسمي", date: "2024", url: "اختبارات/باكالوريا/شعبة تقني رياضي/هندسة مدنية/genie-2024.pdf" },
  { id: "genie-2025", title: "موضوع بكالوريا 2025", desc: "موضوع البكالوريا الرسمي", date: "2025", url: "اختبارات/باكالوريا/شعبة تقني رياضي/هندسة مدنية/genie-2025.pdf" },
]);
if (!RESOURCES['3AS-Math-Islamic Studies']) RESOURCES['3AS-Math-Islamic Studies'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Math-Islamic Studies'].exams.push(...[
  { id: "islamia-2023", title: "موضوع بكالوريا 2023", desc: "موضوع البكالوريا الرسمي", date: "2023", url: "اختبارات/باكالوريا/شعبة رياضيات/اسلامية/islamia-2023.pdf" },
  { id: "islamia-2024", title: "موضوع بكالوريا 2024", desc: "موضوع البكالوريا الرسمي", date: "2024", url: "اختبارات/باكالوريا/شعبة رياضيات/اسلامية/islamia-2024.pdf" },
  { id: "islamia-2025", title: "موضوع بكالوريا 2025", desc: "موضوع البكالوريا الرسمي", date: "2025", url: "اختبارات/باكالوريا/شعبة رياضيات/اسلامية/islamia-2025.pdf" },
]);
if (!RESOURCES['3AS-Math-English']) RESOURCES['3AS-Math-English'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Math-English'].exams.push(...[
  { id: "English-2023", title: "موضوع بكالوريا 2023", desc: "موضوع البكالوريا الرسمي", date: "2023", url: "اختبارات/باكالوريا/شعبة رياضيات/انجليزية/English-2023.pdf" },
  { id: "English-2024", title: "موضوع بكالوريا 2024", desc: "موضوع البكالوريا الرسمي", date: "2024", url: "اختبارات/باكالوريا/شعبة رياضيات/انجليزية/English-2024.pdf" },
  { id: "English-2025", title: "موضوع بكالوريا 2025", desc: "موضوع البكالوريا الرسمي", date: "2025", url: "اختبارات/باكالوريا/شعبة رياضيات/انجليزية/English-2025.pdf" },
]);
if (!RESOURCES['3AS-Math-History & Geography']) RESOURCES['3AS-Math-History & Geography'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Math-History & Geography'].exams.push(...[
  { id: "H-G-2023", title: "موضوع بكالوريا 2023", desc: "موضوع البكالوريا الرسمي", date: "2023", url: "اختبارات/باكالوريا/شعبة رياضيات/تاريخ و جغرافيا/H-G-2023.pdf" },
  { id: "H-G-2024", title: "موضوع بكالوريا 2024", desc: "موضوع البكالوريا الرسمي", date: "2024", url: "اختبارات/باكالوريا/شعبة رياضيات/تاريخ و جغرافيا/H-G-2024.pdf" },
  { id: "H-G-2025", title: "موضوع بكالوريا 2025", desc: "موضوع البكالوريا الرسمي", date: "2025", url: "اختبارات/باكالوريا/شعبة رياضيات/تاريخ و جغرافيا/H-G-2025.pdf" },
]);
if (!RESOURCES['3AS-Math-Math']) RESOURCES['3AS-Math-Math'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Math-Math'].exams.push(...[
  { id: "Math-Math-2023", title: "موضوع بكالوريا 2023", desc: "موضوع البكالوريا الرسمي", date: "2023", url: "اختبارات/باكالوريا/شعبة رياضيات/رياضيات/Math-Math-2023.pdf" },
  { id: "Math-Math-2024", title: "موضوع بكالوريا 2024", desc: "موضوع البكالوريا الرسمي", date: "2024", url: "اختبارات/باكالوريا/شعبة رياضيات/رياضيات/Math-Math-2024.pdf" },
  { id: "Math-Math-2025", title: "موضوع بكالوريا 2025", desc: "موضوع البكالوريا الرسمي", date: "2025", url: "اختبارات/باكالوريا/شعبة رياضيات/رياضيات/Math-Math-2025.pdf" },
]);
if (!RESOURCES['3AS-Math-Arabic']) RESOURCES['3AS-Math-Arabic'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Math-Arabic'].exams.push(...[
  { id: "Arab-2023", title: "موضوع بكالوريا 2023", desc: "موضوع البكالوريا الرسمي", date: "2023", url: "اختبارات/باكالوريا/شعبة رياضيات/عربية/Arab-2023.pdf" },
  { id: "Arab-2024", title: "موضوع بكالوريا 2024", desc: "موضوع البكالوريا الرسمي", date: "2024", url: "اختبارات/باكالوريا/شعبة رياضيات/عربية/Arab-2024.pdf" },
  { id: "Arab-2025", title: "موضوع بكالوريا 2025", desc: "موضوع البكالوريا الرسمي", date: "2025", url: "اختبارات/باكالوريا/شعبة رياضيات/عربية/Arab-2025.pdf" },
]);
if (!RESOURCES['3AS-Math-Science']) RESOURCES['3AS-Math-Science'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Math-Science'].exams.push(...[
  { id: "Math-Science-2023", title: "موضوع بكالوريا 2023", desc: "موضوع البكالوريا الرسمي", date: "2023", url: "اختبارات/باكالوريا/شعبة رياضيات/علوم/Math-Science-2023.pdf" },
  { id: "Math-Science-2024", title: "موضوع بكالوريا 2024", desc: "موضوع البكالوريا الرسمي", date: "2024", url: "اختبارات/باكالوريا/شعبة رياضيات/علوم/Math-Science-2024.pdf" },
  { id: "Math-Science-2025", title: "موضوع بكالوريا 2025", desc: "موضوع البكالوريا الرسمي", date: "2025", url: "اختبارات/باكالوريا/شعبة رياضيات/علوم/Math-Science-2025.pdf" },
]);
if (!RESOURCES['3AS-Math-French']) RESOURCES['3AS-Math-French'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Math-French'].exams.push(...[
  { id: "French-2023", title: "موضوع بكالوريا 2023", desc: "موضوع البكالوريا الرسمي", date: "2023", url: "اختبارات/باكالوريا/شعبة رياضيات/فرنسية/French-2023.pdf" },
  { id: "French-2024", title: "موضوع بكالوريا 2024", desc: "موضوع البكالوريا الرسمي", date: "2024", url: "اختبارات/باكالوريا/شعبة رياضيات/فرنسية/French-2024.pdf" },
  { id: "French-2025", title: "موضوع بكالوريا 2025", desc: "موضوع البكالوريا الرسمي", date: "2025", url: "اختبارات/باكالوريا/شعبة رياضيات/فرنسية/French-2025.pdf" },
]);
if (!RESOURCES['3AS-Math-Philosophy']) RESOURCES['3AS-Math-Philosophy'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Math-Philosophy'].exams.push(...[
  { id: "M_S-Philo-2023", title: "موضوع بكالوريا 2023", desc: "موضوع البكالوريا الرسمي", date: "2023", url: "اختبارات/باكالوريا/شعبة رياضيات/فلسفة/M_S-Philo-2023.pdf" },
  { id: "M_S-Philo-2024", title: "موضوع بكالوريا 2024", desc: "موضوع البكالوريا الرسمي", date: "2024", url: "اختبارات/باكالوريا/شعبة رياضيات/فلسفة/M_S-Philo-2024.pdf" },
  { id: "M_S-Philo-2025", title: "موضوع بكالوريا 2025", desc: "موضوع البكالوريا الرسمي", date: "2025", url: "اختبارات/باكالوريا/شعبة رياضيات/فلسفة/M_S-Philo-2025.pdf" },
]);
if (!RESOURCES['3AS-Math-Physics']) RESOURCES['3AS-Math-Physics'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Math-Physics'].exams.push(...[
  { id: "Math-Physics-2023", title: "موضوع بكالوريا 2023", desc: "موضوع البكالوريا الرسمي", date: "2023", url: "اختبارات/باكالوريا/شعبة رياضيات/فيزياء/Math-Physics-2023.pdf" },
  { id: "Math-Physics-2024", title: "موضوع بكالوريا 2024", desc: "موضوع البكالوريا الرسمي", date: "2024", url: "اختبارات/باكالوريا/شعبة رياضيات/فيزياء/Math-Physics-2024.pdf" },
  { id: "Math-Physics-2025", title: "موضوع بكالوريا 2025", desc: "موضوع البكالوريا الرسمي", date: "2025", url: "اختبارات/باكالوريا/شعبة رياضيات/فيزياء/Math-Physics-2025.pdf" },
]);
if (!RESOURCES['3AS-Sciences-Islamic Studies']) RESOURCES['3AS-Sciences-Islamic Studies'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Sciences-Islamic Studies'].exams.push(...[
  { id: "islamia-2023", title: "موضوع بكالوريا 2023", desc: "موضوع البكالوريا الرسمي", date: "2023", url: "اختبارات/باكالوريا/شعبة علوم تجريبية/اسلامية/islamia-2023.pdf" },
  { id: "islamia-2024", title: "موضوع بكالوريا 2024", desc: "موضوع البكالوريا الرسمي", date: "2024", url: "اختبارات/باكالوريا/شعبة علوم تجريبية/اسلامية/islamia-2024.pdf" },
  { id: "islamia-2025", title: "موضوع بكالوريا 2025", desc: "موضوع البكالوريا الرسمي", date: "2025", url: "اختبارات/باكالوريا/شعبة علوم تجريبية/اسلامية/islamia-2025.pdf" },
]);
if (!RESOURCES['3AS-Sciences-English']) RESOURCES['3AS-Sciences-English'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Sciences-English'].exams.push(...[
  { id: "English-2023", title: "موضوع بكالوريا 2023", desc: "موضوع البكالوريا الرسمي", date: "2023", url: "اختبارات/باكالوريا/شعبة علوم تجريبية/انجليزية/English-2023.pdf" },
  { id: "English-2024", title: "موضوع بكالوريا 2024", desc: "موضوع البكالوريا الرسمي", date: "2024", url: "اختبارات/باكالوريا/شعبة علوم تجريبية/انجليزية/English-2024.pdf" },
  { id: "English-2025", title: "موضوع بكالوريا 2025", desc: "موضوع البكالوريا الرسمي", date: "2025", url: "اختبارات/باكالوريا/شعبة علوم تجريبية/انجليزية/English-2025.pdf" },
]);
if (!RESOURCES['3AS-Sciences-History & Geography']) RESOURCES['3AS-Sciences-History & Geography'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Sciences-History & Geography'].exams.push(...[
  { id: "H-G-2023", title: "موضوع بكالوريا 2023", desc: "موضوع البكالوريا الرسمي", date: "2023", url: "اختبارات/باكالوريا/شعبة علوم تجريبية/تاريخ و جغرافيا/H-G-2023.pdf" },
  { id: "H-G-2024", title: "موضوع بكالوريا 2024", desc: "موضوع البكالوريا الرسمي", date: "2024", url: "اختبارات/باكالوريا/شعبة علوم تجريبية/تاريخ و جغرافيا/H-G-2024.pdf" },
  { id: "H-G-2025", title: "موضوع بكالوريا 2025", desc: "موضوع البكالوريا الرسمي", date: "2025", url: "اختبارات/باكالوريا/شعبة علوم تجريبية/تاريخ و جغرافيا/H-G-2025.pdf" },
]);
if (!RESOURCES['3AS-Sciences-Math']) RESOURCES['3AS-Sciences-Math'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Sciences-Math'].exams.push(...[
  { id: "dzexams-bac-mathematiques-1435676", title: "موضوع بكالوريا رقم 1", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة علوم تجريبية/رياضيات/dzexams-bac-mathematiques-1435676.pdf" },
  { id: "dzexams-bac-mathematiques-2229208", title: "موضوع بكالوريا رقم 2", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة علوم تجريبية/رياضيات/dzexams-bac-mathematiques-2229208.pdf" },
  { id: "dzexams-bac-mathematiques-570438", title: "موضوع بكالوريا رقم 3", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة علوم تجريبية/رياضيات/dzexams-bac-mathematiques-570438.pdf" },
]);
if (!RESOURCES['3AS-Sciences-Arabic']) RESOURCES['3AS-Sciences-Arabic'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Sciences-Arabic'].exams.push(...[
  { id: "Arab-2023", title: "موضوع بكالوريا 2023", desc: "موضوع البكالوريا الرسمي", date: "2023", url: "اختبارات/باكالوريا/شعبة علوم تجريبية/عربية/Arab-2023.pdf" },
  { id: "Arab-2024", title: "موضوع بكالوريا 2024", desc: "موضوع البكالوريا الرسمي", date: "2024", url: "اختبارات/باكالوريا/شعبة علوم تجريبية/عربية/Arab-2024.pdf" },
  { id: "Arab-2025", title: "موضوع بكالوريا 2025", desc: "موضوع البكالوريا الرسمي", date: "2025", url: "اختبارات/باكالوريا/شعبة علوم تجريبية/عربية/Arab-2025.pdf" },
]);
if (!RESOURCES['3AS-Sciences-Science']) RESOURCES['3AS-Sciences-Science'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Sciences-Science'].exams.push(...[
  { id: "dzexams-bac-sciences-naturelles-1751784", title: "موضوع بكالوريا رقم 1", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة علوم تجريبية/علوم/dzexams-bac-sciences-naturelles-1751784.pdf" },
  { id: "dzexams-bac-sciences-naturelles-1780707", title: "موضوع بكالوريا رقم 2", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة علوم تجريبية/علوم/dzexams-bac-sciences-naturelles-1780707.pdf" },
  { id: "dzexams-bac-sciences-naturelles-2232508", title: "موضوع بكالوريا رقم 3", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة علوم تجريبية/علوم/dzexams-bac-sciences-naturelles-2232508.pdf" },
]);
if (!RESOURCES['3AS-Sciences-French']) RESOURCES['3AS-Sciences-French'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Sciences-French'].exams.push(...[
  { id: "French-2023", title: "موضوع بكالوريا 2023", desc: "موضوع البكالوريا الرسمي", date: "2023", url: "اختبارات/باكالوريا/شعبة علوم تجريبية/فرنسية/French-2023.pdf" },
  { id: "French-2024", title: "موضوع بكالوريا 2024", desc: "موضوع البكالوريا الرسمي", date: "2024", url: "اختبارات/باكالوريا/شعبة علوم تجريبية/فرنسية/French-2024.pdf" },
  { id: "French-2025", title: "موضوع بكالوريا 2025", desc: "موضوع البكالوريا الرسمي", date: "2025", url: "اختبارات/باكالوريا/شعبة علوم تجريبية/فرنسية/French-2025.pdf" },
]);
if (!RESOURCES['3AS-Sciences-Philosophy']) RESOURCES['3AS-Sciences-Philosophy'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Sciences-Philosophy'].exams.push(...[
  { id: "M_S-Philo-2023", title: "موضوع بكالوريا 2023", desc: "موضوع البكالوريا الرسمي", date: "2023", url: "اختبارات/باكالوريا/شعبة علوم تجريبية/فلسفة/M_S-Philo-2023.pdf" },
  { id: "M_S-Philo-2024", title: "موضوع بكالوريا 2024", desc: "موضوع البكالوريا الرسمي", date: "2024", url: "اختبارات/باكالوريا/شعبة علوم تجريبية/فلسفة/M_S-Philo-2024.pdf" },
  { id: "M_S-Philo-2025", title: "موضوع بكالوريا 2025", desc: "موضوع البكالوريا الرسمي", date: "2025", url: "اختبارات/باكالوريا/شعبة علوم تجريبية/فلسفة/M_S-Philo-2025.pdf" },
]);
if (!RESOURCES['3AS-Sciences-Physics']) RESOURCES['3AS-Sciences-Physics'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Sciences-Physics'].exams.push(...[
  { id: "dzexams-bac-physique-2213419", title: "موضوع بكالوريا رقم 1", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة علوم تجريبية/فيزياء/dzexams-bac-physique-2213419.pdf" },
  { id: "dzexams-bac-physique-842618", title: "موضوع بكالوريا رقم 2", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة علوم تجريبية/فيزياء/dzexams-bac-physique-842618.pdf" },
  { id: "dzexams-bac-physique-956790", title: "موضوع بكالوريا رقم 3", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة علوم تجريبية/فيزياء/dzexams-bac-physique-956790.pdf" },
]);
if (!RESOURCES['3AS-Languages-Islamic Studies']) RESOURCES['3AS-Languages-Islamic Studies'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Languages-Islamic Studies'].exams.push(...[
  { id: "islamia-2023", title: "موضوع بكالوريا 2023", desc: "موضوع البكالوريا الرسمي", date: "2023", url: "اختبارات/باكالوريا/شعبة لغات اجنبية/اسلامية/islamia-2023.pdf" },
  { id: "islamia-2024", title: "موضوع بكالوريا 2024", desc: "موضوع البكالوريا الرسمي", date: "2024", url: "اختبارات/باكالوريا/شعبة لغات اجنبية/اسلامية/islamia-2024.pdf" },
  { id: "islamia-2025", title: "موضوع بكالوريا 2025", desc: "موضوع البكالوريا الرسمي", date: "2025", url: "اختبارات/باكالوريا/شعبة لغات اجنبية/اسلامية/islamia-2025.pdf" },
]);
if (!RESOURCES['3AS-Languages-English']) RESOURCES['3AS-Languages-English'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Languages-English'].exams.push(...[
  { id: "dzexams-bac-anglais-1123526", title: "موضوع بكالوريا رقم 1", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة لغات اجنبية/انجليزية/dzexams-bac-anglais-1123526.pdf" },
  { id: "dzexams-bac-anglais-2159137", title: "موضوع بكالوريا رقم 2", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة لغات اجنبية/انجليزية/dzexams-bac-anglais-2159137.pdf" },
  { id: "dzexams-bac-anglais-322290", title: "موضوع بكالوريا رقم 3", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة لغات اجنبية/انجليزية/dzexams-bac-anglais-322290.pdf" },
]);
if (!RESOURCES['3AS-Languages-Third Language']) RESOURCES['3AS-Languages-Third Language'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Languages-Third Language'].exams.push(...[
  { id: "italy-2023", title: "موضوع بكالوريا 2023", desc: "موضوع البكالوريا الرسمي", date: "2023", url: "اختبارات/باكالوريا/شعبة لغات اجنبية/ايطالية/italy-2023.pdf" },
  { id: "italy-2024", title: "موضوع بكالوريا 2024", desc: "موضوع البكالوريا الرسمي", date: "2024", url: "اختبارات/باكالوريا/شعبة لغات اجنبية/ايطالية/italy-2024.pdf" },
  { id: "italy-2025", title: "موضوع بكالوريا 2025", desc: "موضوع البكالوريا الرسمي", date: "2025", url: "اختبارات/باكالوريا/شعبة لغات اجنبية/ايطالية/italy-2025.pdf" },
]);
if (!RESOURCES['3AS-Languages-History & Geography']) RESOURCES['3AS-Languages-History & Geography'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Languages-History & Geography'].exams.push(...[
  { id: "dzexams-bac-histoire-geographie-1416850", title: "موضوع بكالوريا رقم 1", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة لغات اجنبية/تاريخ و جغرافيا/dzexams-bac-histoire-geographie-1416850.pdf" },
  { id: "dzexams-bac-histoire-geographie-1997487", title: "موضوع بكالوريا رقم 2", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة لغات اجنبية/تاريخ و جغرافيا/dzexams-bac-histoire-geographie-1997487.pdf" },
  { id: "dzexams-bac-histoire-geographie-358163", title: "موضوع بكالوريا رقم 3", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة لغات اجنبية/تاريخ و جغرافيا/dzexams-bac-histoire-geographie-358163.pdf" },
]);
if (!RESOURCES['3AS-Languages-Math']) RESOURCES['3AS-Languages-Math'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Languages-Math'].exams.push(...[
  { id: "dzexams-bac-mathematiques-1061072", title: "موضوع بكالوريا رقم 1", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة لغات اجنبية/رياضيات/dzexams-bac-mathematiques-1061072.pdf" },
  { id: "dzexams-bac-mathematiques-1376623-(1)", title: "موضوع بكالوريا رقم 2", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة لغات اجنبية/رياضيات/dzexams-bac-mathematiques-1376623 (1).pdf" },
  { id: "dzexams-bac-mathematiques-758265", title: "موضوع بكالوريا رقم 3", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة لغات اجنبية/رياضيات/dzexams-bac-mathematiques-758265.pdf" },
]);
if (!RESOURCES['3AS-Languages-Arabic']) RESOURCES['3AS-Languages-Arabic'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Languages-Arabic'].exams.push(...[
  { id: "dzexams-bac-arabe-1258854", title: "موضوع بكالوريا رقم 1", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة لغات اجنبية/عربية/dzexams-bac-arabe-1258854.pdf" },
  { id: "dzexams-bac-arabe-2179524", title: "موضوع بكالوريا رقم 2", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة لغات اجنبية/عربية/dzexams-bac-arabe-2179524.pdf" },
  { id: "dzexams-bac-arabe-256076", title: "موضوع بكالوريا رقم 3", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة لغات اجنبية/عربية/dzexams-bac-arabe-256076.pdf" },
]);
if (!RESOURCES['3AS-Languages-French']) RESOURCES['3AS-Languages-French'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Languages-French'].exams.push(...[
  { id: "dzexams-bac-francais-2090468", title: "موضوع بكالوريا رقم 1", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة لغات اجنبية/فرنسية/dzexams-bac-francais-2090468.pdf" },
  { id: "dzexams-bac-francais-335607", title: "موضوع بكالوريا رقم 2", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة لغات اجنبية/فرنسية/dzexams-bac-francais-335607.pdf" },
  { id: "dzexams-bac-francais-989726", title: "موضوع بكالوريا رقم 3", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة لغات اجنبية/فرنسية/dzexams-bac-francais-989726.pdf" },
]);
if (!RESOURCES['3AS-Languages-Philosophy']) RESOURCES['3AS-Languages-Philosophy'] = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
RESOURCES['3AS-Languages-Philosophy'].exams.push(...[
  { id: "dzexams-bac-philosophie-1060595", title: "موضوع بكالوريا رقم 1", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة لغات اجنبية/فلسفة/dzexams-bac-philosophie-1060595.pdf" },
  { id: "dzexams-bac-philosophie-288493", title: "موضوع بكالوريا رقم 2", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة لغات اجنبية/فلسفة/dzexams-bac-philosophie-288493.pdf" },
  { id: "dzexams-bac-philosophie-598660", title: "موضوع بكالوريا رقم 3", desc: "موضوع البكالوريا", date: "بكالوريا", url: "اختبارات/باكالوريا/شعبة لغات اجنبية/فلسفة/dzexams-bac-philosophie-598660.pdf" },
]);

// ROUTER — reads URL params and initializes the correct page
// ============================================================

function getParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    year: params.get('year') || '3AS',
    track: params.get('track') || 'Sciences',
    subject: params.get('subject') || 'Math'
  };
}

function initPage() {
  const path = window.location.pathname;
  if (path.includes('bac.html')) { getParams = () => ({year:'3AS'}); initYearPage(); }
  else if (path.includes('bac_track.html')) {
    const t = new URLSearchParams(window.location.search).get('track') || 'Sciences';
    getParams = () => ({year:'3AS', track:t}); 
    initTrackPage(); 
  }
  else if (path.includes('bac_subject.html')) {
    const p = new URLSearchParams(window.location.search);
    getParams = () => ({year:'3AS', track:p.get('track') || 'Sciences', subject:p.get('subject') || 'Math'});
    initSubjectPage();
  }
  else if (path.includes('year.html')) initYearPage();
  else if (path.includes('track.html')) initTrackPage();
  else if (path.includes('subject.html')) initSubjectPage();
  else if (path.includes('favorites.html')) initFavoritesPage();
  else initHomePage();
}


// ============================================================
// DARK MODE — toggle + localStorage persistence
// ============================================================

const THEME_KEY = 'studyhub-theme';

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  applyTheme(theme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
  updateThemeIcon(theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('themeIcon');
  if (icon) icon.innerHTML = theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
}

document.getElementById('darkModeToggle')?.addEventListener('click', toggleTheme);


// ============================================================
// FAVORITES — add/remove/read from localStorage
// ============================================================

const FAV_KEY = 'studyhub-favorites';

function getFavorites() {
  return JSON.parse(localStorage.getItem(FAV_KEY) || '[]');
}

function toggleFavorite(id, label) {
  const favs = getFavorites();
  const idx = favs.findIndex(f => f.id === id);
  if (idx === -1) {
    favs.push({ id, label, addedAt: Date.now() });
    showToast(`تمت الإضافة إلى المفضلة <i class="fa-solid fa-check"></i>`);
  } else {
    favs.splice(idx, 1);
    showToast(`تمت الإزالة من المفضلة <i class="fa-solid fa-trash-can"></i>`);
  }
  localStorage.setItem(FAV_KEY, JSON.stringify(favs));
  updateFavoritesUI();
}

function isFavorite(id) {
  return getFavorites().some(f => f.id === id);
}

function updateFavoritesUI() {
  const count = getFavorites().length;
  const badge = document.getElementById('favBadge');
  if (badge) badge.textContent = count;
  
  document.querySelectorAll('[data-id]').forEach(btn => {
    const id = btn.getAttribute('data-id');
    const isFav = isFavorite(id);
    btn.classList.toggle('favorited', isFav);
    if (!btn.hasAttribute('data-icon-only')) {
      if (btn.classList.contains('btn-primary')) {
         btn.innerHTML = isFav ? '<i class="fa-solid fa-heart"></i> في المفضلة' : '<i class="fa-regular fa-heart"></i> أضف للمفضلة';
      } else {
         btn.innerHTML = isFav ? '<i class="fa-solid fa-heart"></i>' : '<i class="fa-regular fa-heart"></i>';
      }
    } else {
         btn.innerHTML = isFav ? '<i class="fa-solid fa-heart"></i>' : '<i class="fa-regular fa-heart"></i>';
    }
  });
}


// ============================================================
// SEARCH — global search (navbar) + local search (subject page)
// ============================================================

function initGlobalSearch() {
  const input = document.getElementById('globalSearch');
  if (input) {
    input.addEventListener('keydown', (e) => {
      if(e.key === 'Enter') {
         showToast("ميزة البحث ستتوفر قريباً!");
         input.value = '';
      }
    });
  }
}

function initResourceSearch() {
  const input = document.getElementById('resourceSearch');
  if (!input) return;
  input.addEventListener('input', debounce(filterResources, 200));
}

function filterResources() {
  const input = document.getElementById('resourceSearch');
  if (!input) return;
  const query = input.value.toLowerCase().trim();
  const activePanel = document.querySelector('.tab-panel.active');
  if (!activePanel) return;
  
  const items = activePanel.querySelectorAll('.resource-item, .channel-card');
  let visibleCount = 0;
  
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    const match = !query || text.includes(query);
    item.style.display = match ? '' : 'none';
    if (match && item.offsetParent !== null) { 
        visibleCount++;
    }
  });

  const emptyEl = activePanel.querySelector('.empty-state');
  const rList = activePanel.querySelector('.resource-list, .channels-grid');
  
  if (visibleCount === 0 && items.length > 0) {
    if (emptyEl) emptyEl.style.display = 'flex';
    if (rList) rList.style.display = 'none';
  } else {
    if (emptyEl) emptyEl.style.display = 'none';
    if (rList) rList.style.display = '';
  }
}

window.clearSearch = function() {
  const input = document.getElementById('resourceSearch');
  if(input) {
    input.value = '';
    filterResources();
  }
};

function debounce(fn, delay) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), delay); };
}


// ============================================================
// TABS — subject page tab switching
// ============================================================

function initTabs() {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const panelId = tab.getAttribute('data-tab');
      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      document.getElementById(`panel-${panelId}`)?.classList.add('active');
      
      const searchInput = document.getElementById('resourceSearch');
      if (searchInput) searchInput.value = '';
      
      document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.filter-pill[data-filter="all"]').forEach(p => p.classList.add('active'));
      document.querySelectorAll('.resource-item').forEach(i => i.style.display = '');

      filterResources();
    });
  });
}


// ============================================================
// CHAPTER FILTERS — filter resource list by chapter tag
// ============================================================

function initChapterFilters() {
  document.querySelectorAll('.chapter-filters').forEach(filterGroup => {
    filterGroup.querySelectorAll('.filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        filterGroup.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const filter = pill.getAttribute('data-filter');
        const list = filterGroup.nextElementSibling;
        list?.querySelectorAll('.resource-item').forEach(item => {
          const chapter = item.getAttribute('data-chapter');
          item.style.display = (filter === 'all' || chapter === filter) ? '' : 'none';
        });
        filterResources();
      });
    });
  });
}


// ============================================================
// MOBILE MENU — hamburger open/close
// ============================================================

function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger?.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', open);
  });
  
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
      navLinks?.classList.remove('open');
      hamburger?.classList.remove('active');
      hamburger?.setAttribute('aria-expanded', 'false');
    }
  });
}


// ============================================================
// TOAST — brief feedback messages
// ============================================================

function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('visible'));
  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}


// ============================================================
// LOADER — show on page load, hide after content ready
// ============================================================

function hideLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;
  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => loader.style.display = 'none', 300);
  }, 600);
}


// ============================================================
// NAVBAR — add shadow on scroll
// ============================================================

function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

window.scrollToSection = function(id) {
  if (id === 'search') {
    const el = document.getElementById('resourceSearch');
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => el.focus(), 500);
    }
  }
}

window.viewResource = function(el) {
  showToast("جاري فتح الملف... <i class='fa-solid fa-spinner fa-spin'></i>");
}

// ============================================================
// PAGE RENDERERS
// ============================================================

function initHomePage() {
  // Static HTML
}

function initYearPage() {
  const { year } = getParams();
  const yearData = YEARS[year];
  
  if (!yearData) { window.location.href = 'index.html'; return; }
  
  const titleEl = document.getElementById('pageTitle');
  const descEl = document.getElementById('pageDesc');
  const badgeEl = document.getElementById('pageBadge');
  const bcYear = document.getElementById('bc-year');
  
  const isBacFlowGlob = window.location.pathname.includes('bac.html');
  if(titleEl) titleEl.textContent = isBacFlowGlob ? 'البكالوريا' : yearData.title;
  if(descEl) descEl.style.display = 'none';
  if(badgeEl) badgeEl.textContent = isBacFlowGlob ? 'BAC' : yearData.badge;
  if(bcYear) { bcYear.textContent = isBacFlowGlob ? 'البكالوريا' : yearData.title; bcYear.href = isBacFlowGlob ? 'bac.html' : `year.html?year=${year}`; }
  
  const container = document.getElementById('tracksContainer');
  if (container) {
    let html = '';
    const tracksObj = year === '1AS' ? TRACKS_1AS : (year === '2AS' ? TRACKS_2AS : TRACKS);
    
    Object.keys(tracksObj).forEach(trackName => {
      const t = tracksObj[trackName];
      const isBacFlow = window.location.pathname.includes('bac.html');
      const link = isBacFlow ? `bac_track.html?track=${encodeURIComponent(trackName)}` : `track.html?year=${year}&track=${encodeURIComponent(trackName)}`;
      let arTrackName = "";
      if (trackName === "Sciences") arTrackName = "علوم تجريبية";
      else if (trackName === "Math") arTrackName = "رياضيات";
      else if (trackName === "Technical Math") arTrackName = "تقني رياضي";
      else if (trackName === "Literature") arTrackName = "آداب وفلسفة";
      else if (trackName === "Languages") arTrackName = "لغات أجنبية";
      else if (trackName === "Management") arTrackName = "تسيير واقتصاد";
      else if (trackName === "Common Science") arTrackName = "جذع مشترك علوم وتكنولوجيا";
      else if (trackName === "Common Literature") arTrackName = "جذع مشترك آداب";
      else arTrackName = trackName;

      html += `
        <a href="${link}" class="track-card" style="border-top-color: ${t.color}">
          <div class="track-card-header">
            <div class="track-icon" style="background: ${t.color}20">${t.icon}</div>
            <div class="track-subject-count">${t.subjects.length} مواد</div>
          </div>
          <h3 class="track-name">${arTrackName}</h3>
          <div class="track-subjects-preview">
            ${t.subjects.slice(0, 3).map(s => {
                let sAr = s;
                if(s==="Math") sAr = "رياضيات"; else if(s==="Physics") sAr="علوم فيزيائية"; else if(s==="Biology" || s==="Science") sAr="علوم الطبيعة والحياة"; else if(s==="Arabic") sAr = "لغة عربية"; else if(s==="French") sAr="لغة فرنسية"; else if(s==="Computer Science") sAr="إعلام آلي"; else if(s==="Electrical Engineering") sAr="هندسة كهربائية"; else if(s==="Civil Engineering") sAr="هندسة مدنية"; else if(s==="Law") sAr="قانون"; else if(s==="Economics") sAr="اقتصاد ومانجمنت"; else if(s==="Accounting") sAr="تسيير محاسبي ومالي"; else if(s==="Third Language") sAr="لغة أجنبية ثالثة"; else if(s==="Philosophy") sAr="فلسفة"; else if(s==="Islamic Studies") sAr="تربية إسلامية"; else if(s==="History & Geography") sAr="تاريخ وجغرافيا";
                return `<span>${sAr}</span>`;
            }).join('')}
            ${t.subjects.length > 3 ? `<span class="more">+${t.subjects.length - 3} أخرى</span>` : ''}
          </div>
          <div class="track-cta" style="color: ${t.color}">تصفح الشعبة <i class="fa-solid fa-arrow-left" style="margin-right: 6px;"></i></div>
        </a>
      `;
    });
    container.innerHTML = html;
  }
}

function initTrackPage() {
  const { year, track } = getParams();
  const tracksObj = year === '1AS' ? TRACKS_1AS : (year === '2AS' ? TRACKS_2AS : TRACKS);
  const trackData = tracksObj[track];
  
  if (!trackData) { window.location.href = 'index.html'; return; }
  
  let arTrackName = track;
  if (track === "Sciences") arTrackName = "علوم تجريبية";
  else if (track === "Math") arTrackName = "رياضيات";
  else if (track === "Technical Math") arTrackName = "تقني رياضي";
  else if (track === "Literature") arTrackName = "آداب وفلسفة";
  else if (track === "Languages") arTrackName = "لغات أجنبية";
  else if (track === "Management") arTrackName = "تسيير واقتصاد";
  else if (track === "Common Science") arTrackName = "جذع مشترك علوم وتكنولوجيا";
  else if (track === "Common Literature") arTrackName = "جذع مشترك آداب";

  const titleEl = document.getElementById('pageTitle');
  const descEl = document.getElementById('pageDesc');
  const badgeEl = document.getElementById('pageBadge');
  const bcYear = document.getElementById('bc-year');
  const bcTrack = document.getElementById('bc-track');
  
  const isBacFlowTrack = window.location.pathname.includes('bac_track.html');
  if(titleEl) titleEl.textContent = arTrackName;
  if(descEl) descEl.style.display = 'none';
  if(badgeEl) badgeEl.textContent = `${isBacFlowTrack ? 'BAC' : (YEARS[year]?.badge || year)} • ${arTrackName}`;
  if(bcYear) { bcYear.textContent = isBacFlowTrack ? 'البكالوريا' : (YEARS[year]?.title || year); bcYear.href = isBacFlowTrack ? 'bac.html' : `year.html?year=${year}`; }
  if(bcTrack) { bcTrack.textContent = arTrackName; }
  
  const container = document.getElementById('subjectsContainer');
  if (container) {
    let html = '';
    trackData.subjects.forEach(subjectName => {
      const s = SUBJECTS[subjectName];
      const color = s?.color || '#5B5BD6';
      const icon = s?.icon || '<i class="fa-solid fa-book-bookmark"></i>';
      const desc = s?.description || 'Subject description';
      const counts = s?.resourceCount || { lessons: 0, exercises: 0, exams: 0, channels: 0 };
      
      const isBacFlow = window.location.pathname.includes('bac_track.html');
      const link = isBacFlow ? `bac_subject.html?track=${encodeURIComponent(track)}&subject=${encodeURIComponent(subjectName)}` : `subject.html?year=${year}&track=${encodeURIComponent(track)}&subject=${encodeURIComponent(subjectName)}`;
      const favId = `${year}-${track}-${subjectName}`;
      
      let sAr = subjectName;
      if(subjectName==="Math") sAr = "رياضيات"; 
      else if(subjectName==="Physics") sAr="علوم فيزيائية"; 
      else if(subjectName==="Biology" || subjectName==="Science") sAr="علوم الطبيعة والحياة";
      else if(subjectName==="Chemistry") sAr="الكيمياء";
      else if(subjectName==="Arabic") sAr = "لغة عربية";
      else if(subjectName==="French") sAr="لغة فرنسية";
      else if(subjectName==="English") sAr="لغة إنجليزية";
      else if(subjectName==="Philosophy") sAr="فلسفة";
      else if(subjectName==="History & Geography") sAr="تاريخ وجغرافيا";
      else if(subjectName==="Islamic Studies") sAr="تربية إسلامية";
      else if(subjectName==="Spanish") sAr="اللغة الإسبانية";
      else if(subjectName==="Technology") sAr="تكنولوجيا";
      else if(subjectName==="Computer Science") sAr="إعلام آلي";
      else if(subjectName==="Electrical Engineering") sAr="هندسة كهربائية";
      else if(subjectName==="Civil Engineering") sAr="هندسة مدنية";
      else if(subjectName==="Law") sAr="قانون";
      else if(subjectName==="Economics") sAr="اقتصاد ومانجمنت";
      else if(subjectName==="Accounting") sAr="تسيير محاسبي ومالي";
      else if(subjectName==="Third Language") sAr="لغة أجنبية ثالثة";

      html += `
        <div class="subject-card" style="position:relative;">
          <a href="${link}" style="display:block; flex-grow:1;">
            <div class="subject-card-icon" style="background: ${color}15; color: ${color}">${icon}</div>
            <h3 style="color: var(--text-primary); margin-bottom: 0.5rem">${sAr}</h3>
          </a>
          <div class="subject-card-footer">
            <button class="btn-favorite-sm" data-id="${favId}" data-icon-only="true" aria-label="أضف للمفضلة"><i class="fa-regular fa-heart"></i></button>
            <a href="${link}" class="subject-card-cta" style="color: ${color}">استعراض <i class="fa-solid fa-arrow-left"></i></a>
          </div>
        </div>
      `;
    });
    container.innerHTML = html;
  }
}

function initSubjectPage() {
  const { year, track, subject } = getParams();
  const subjectData = SUBJECTS[subject] || { icon: '<i class="fa-solid fa-book-bookmark"></i>', color: '#5B5BD6', description: 'موارد وملفات التلميذ', resourceCount: { lessons: 0, exercises: 0, exams: 0, channels: 0 } };
  
  let arTrackName = track;
  if (track === "Sciences") arTrackName = "علوم تجريبية";
  else if (track === "Math") arTrackName = "رياضيات";
  else if (track === "Technical Math") arTrackName = "تقني رياضي";
  else if (track === "Literature") arTrackName = "آداب وفلسفة";
  else if (track === "Languages") arTrackName = "لغات أجنبية";
  else if (track === "Management") arTrackName = "تسيير واقتصاد";
  else if (track === "Common Science") arTrackName = "جذع مشترك علوم وتكنولوجيا";
  else if (track === "Common Literature") arTrackName = "جذع مشترك آداب";

  let sAr = subject;
  if(subject==="Math") sAr = "رياضيات"; 
  else if(subject==="Physics") sAr="علوم فيزيائية"; 
  else if(subject==="Biology" || subject==="Science") sAr="علوم الطبيعة والحياة";
  else if(subject==="Chemistry") sAr="الكيمياء";
  else if(subject==="Arabic") sAr = "لغة عربية";
  else if(subject==="French") sAr="لغة فرنسية";
  else if(subject==="English") sAr="لغة إنجليزية";
  else if(subject==="Philosophy") sAr="فلسفة";
  else if(subject==="History & Geography") sAr="تاريخ وجغرافيا";
  else if(subject==="Islamic Studies") sAr="تربية إسلامية";
  else if(subject==="Spanish") sAr="اللغة الإسبانية";
  else if(subject==="Technology") sAr="تكنولوجيا";
  else if(subject==="Computer Science") sAr="إعلام آلي";
  else if(subject==="Electrical Engineering") sAr="هندسة كهربائية";
  else if(subject==="Civil Engineering") sAr="هندسة مدنية";
  else if(subject==="Law") sAr="قانون";
  else if(subject==="Economics") sAr="اقتصاد ومانجمنت";
  else if(subject==="Accounting") sAr="تسيير محاسبي ومالي";
  else if(subject==="Third Language") sAr="لغة أجنبية ثالثة";
  
  const bcYear = document.getElementById('bc-year');
  const bcTrack = document.getElementById('bc-track');
  const bcSubj = document.getElementById('bc-subj');
  
  const isBacFlow = window.location.pathname.includes('bac_subject.html');
  
  if(bcYear) { bcYear.textContent = isBacFlow ? 'البكالوريا' : (YEARS[year]?.title || year); bcYear.href = isBacFlow ? 'bac.html' : `year.html?year=${year}`; }
  if(bcTrack) { bcTrack.textContent = arTrackName; bcTrack.href = isBacFlow ? `bac_track.html?track=${encodeURIComponent(track)}` : `track.html?year=${year}&track=${encodeURIComponent(track)}`; }
  if(bcSubj) { bcSubj.textContent = sAr; }
  
  const iconEl = document.getElementById('sub-icon');
  if(iconEl) iconEl.innerHTML = subjectData.icon;
  
  const bYearEl = document.getElementById('b-year');
  const bTrackEl = document.getElementById('b-track');
  if(bYearEl) bYearEl.textContent = year;
  if(bTrackEl) {
    bTrackEl.textContent = arTrackName;
    bTrackEl.style.background = `${subjectData.color}20`;
    bTrackEl.style.color = subjectData.color;
  }
  
  const titleEl = document.getElementById('sub-title');
  const descEl = document.getElementById('sub-desc');
  if(titleEl) titleEl.textContent = sAr;
  if(descEl) descEl.style.display = 'none';
  
  const favBtn = document.getElementById('favSubjectBtn');
  if(favBtn) {
    const favId = `${year}-${track}-${subject}`;
    favBtn.setAttribute('data-id', favId);
    favBtn.addEventListener('click', () => toggleFavorite(favId, `${year} ${arTrackName} - ${sAr}`));
  }
  
  const dKey = `${year}-${track}-${subject}`;
  let data = RESOURCES[dKey];
  if (!data && year === '3AS' && track === 'Sciences' && subject === 'Math') data = RESOURCES["3AS-Sciences-Math"];
  
  if (!data) {
     data = { channels: [], lessons: [], exercises: [], exams: [], summaries: [] };
  }

  // Auto-inject channels from MASTER_CHANNELS if empty or for "all شعب" consistency
  const masterKey = (subject === "Math") ? "Math" : 
                    (subject === "Physics") ? "Physics" :
                    (subject === "Science" || subject === "Biology") ? "Science" :
                    (subject === "History & Geography") ? "History & Geography" :
                    (subject === "English") ? "English" :
                    (subject === "French") ? "French" :
                    (subject === "Arabic") ? "Arabic" : null;

  if (masterKey && MASTER_CHANNELS[masterKey]) {
      // Merge: unique by id
      const existingIds = new Set(data.channels.map(c => c.id));
      MASTER_CHANNELS[masterKey].forEach(ch => {
          if (!existingIds.has(ch.id)) {
              data.channels.push(ch);
          }
      });
  }
  
  // Render all tabs: channels, lessons, exercises, exams
  const catNames = {
    'channels': 'قنوات',
    'lessons': 'دروس',
    'exercises': 'تمارين',
    'exams': 'اختبارات'
  };

  const isBacSubjectFlow = window.location.pathname.includes('bac_subject.html');

  ['channels', 'lessons', 'exercises', 'exams'].forEach(cat => {
    let itemsToRender = data[cat] || [];

    // On regular subject.html, exclude official bac exams (they belong on bac_subject.html only)
    if (cat === 'exams' && !isBacSubjectFlow) {
      itemsToRender = itemsToRender.filter(i =>
        !i.title.toLowerCase().includes('بكالوريا') && !i.id.toLowerCase().includes('bac')
      );
    }

    const tabEl = document.querySelector(`.tab[data-tab="${cat}"] .tab-count`);
    if(tabEl) tabEl.textContent = itemsToRender.length;
    const statEl = document.getElementById(`stat-${cat}`);
    if(statEl) statEl.innerHTML = itemsToRender.length + ' ' + catNames[cat];

    renderResourceList(cat, itemsToRender, subjectData.color);
  });
}

function renderResourceList(cat, items, color) {
  let html = '';
  
  if (cat === 'channels') {
    const container = document.getElementById('channels-container');
    if(!container) return;
    
    if (items.length === 0) {
      container.innerHTML = `<p style="padding: 2rem; text-align:center;">لا توجد قنوات يوتيوب متوفرة لهذه المادة لاحقاً.</p>`;
      return;
    }
    
    html += '<div class="channels-grid">';
    items.forEach(c => {
      html += `
      <div class="channel-card">
        <div class="channel-thumbnail">
          <div class="channel-avatar" style="background: ${c.bg}">${c.name}</div>
          <div class="platform-badge"><i class="fa-brands fa-youtube" style="margin-right:4px;"></i>يوتيوب</div>
        </div>
        <div class="channel-info" style="text-align: center; padding-bottom: 0;">
          <h3 class="channel-name" style="margin-bottom: 1.5rem; font-size: var(--text-xl);">${c.title}</h3>
        </div>
        <div class="channel-actions" style="justify-content: center; border-top: none; padding-top: 0;">
          <a href="${c.url || '#'}" target="_blank" rel="noopener" class="btn btn-primary btn-sm" style="background: ${color}; width: 100%; justify-content: center;">
            زيارة القناة <i class="fa-solid fa-arrow-left" style="margin-right:6px"></i>
          </a>
        </div>
      </div>`;
    });
    html += '</div>';
    container.innerHTML = html;
  } else {
    // lessons, exercises, exams, summaries
    const listEl = document.getElementById(`list-${cat}`);
    if (!listEl) return;
    
    // Default icons
    let icon = '<i class="fa-solid fa-file-lines"></i>';
    if(cat === 'exercises') icon = '<i class="fa-solid fa-pen-to-square"></i>';
    if(cat === 'exams') icon = '<i class="fa-solid fa-chart-bar"></i>';
    if(cat === 'summaries') icon = '<i class="fa-solid fa-brain"></i>';

    // SPECIAL HANDLING FOR EXAMS — ORGANIZED BY TERM
    if (cat === 'exams') {
      const { year } = getParams();
      const term1 = [], term2 = [], term3 = [], official = [], general = [];

      items.forEach(i => {
        const title = i.title.toLowerCase();
        const id = i.id.toLowerCase();
        
        if (title.includes('بكالوريا') || id.includes('bac')) official.push(i);
        else if (title.includes('الأول') || id.includes('tr1')) term1.push(i);
        else if (title.includes('الثاني') || id.includes('tr2')) term2.push(i);
        else if (title.includes('الثالث') || id.includes('tr3')) term3.push(i);
        else general.push(i);
      });

      let examsHtml = '';
      const isBacFlow = window.location.pathname.includes('bac_subject.html');
      
      // Official Baccalaureate Section — only shown on bac_subject.html
      if (isBacFlow) {
        examsHtml += `<div class="term-section">
          <div class="term-header"><h3>المواضيع</h3></div>
          ${official.length > 0 ? official.map(i => renderItem(i, cat, icon, color)).join('') : renderEmptyTerm("لا توجد مواضيع متوفرة حالياً لهذه المادة.")}
        </div>`;
      }

      if (!isBacFlow) {
        // Term 1
        examsHtml += `<div class="term-section">
          <div class="term-header"><h3>الفصل الأول</h3></div>
          ${term1.length > 0 ? term1.map(i => renderItem(i, cat, icon, color)).join('') : renderEmptyTerm("لا توجد اختبارات متوفرة للفصل الأول حالياً.")}
        </div>`;

        // Term 2
        examsHtml += `<div class="term-section">
          <div class="term-header"><h3>الفصل الثاني</h3></div>
          ${term2.length > 0 ? term2.map(i => renderItem(i, cat, icon, color)).join('') : renderEmptyTerm("لا توجد اختبارات متوفرة للفصل الثاني حالياً.")}
        </div>`;

        // Term 3
        examsHtml += `<div class="term-section">
          <div class="term-header"><h3>الفصل الثالث</h3></div>
          ${term3.length > 0 ? term3.map(i => renderItem(i, cat, icon, color)).join('') : renderEmptyTerm("لا توجد اختبارات متوفرة للفصل الثالث حالياً.")}
        </div>`;

        // General / Others
        if (general.length > 0) {
          examsHtml += `<div class="term-section">
            <div class="term-header"><h3>أخرى</h3></div>
            ${general.map(i => renderItem(i, cat, icon, color)).join('')}
          </div>`;
        }
      }

      listEl.innerHTML = examsHtml;
      return;
    }

    // Standard list for lessons, exercises, summaries
    if (items.length === 0) {
      listEl.innerHTML = `<p style="padding: 2rem; text-align:center;">لا توجد موارد متوفرة في هذا القسم حاليا.</p>`;
      return;
    }
    
    let html = '';
    items.forEach(i => {
      html += renderItem(i, cat, icon, color);
    });
    listEl.innerHTML = html;
  }
}

// Helper to render a single resource item
function renderItem(i, cat, icon, color) {
  let cap = "";
  if (i.chapter === 'algebra') cap = 'الجبر / المتتاليات / الأعداد المركبة';
  else if (i.chapter === 'calculus') cap = 'الدوال / الاشتقاقية / النهايات';
  else if (i.chapter === 'stats') cap = 'الإحصاء / الاحتمالات';
  else if (i.chapter === 'all') cap = 'شامل';
  else cap = i.chapter;

  return `
  <div class="resource-item" data-chapter="${i.chapter}">
    <div class="resource-icon" style="color: ${color}">${icon}</div>
    <div class="resource-info">
      <h4>${i.title}</h4>
      <p>${i.desc}</p>
      <div class="resource-meta">
        <span class="tag tag-chapter" style="background: ${color}20; color: ${color}">${cap}</span>
        <span class="resource-date"><i class="fa-solid fa-calendar-days"></i> ${i.date}</span>
        <span class="resource-size" dir="ltr"><i class="fa-solid fa-file-pdf"></i> ${i.size}</span>
      </div>
    </div>
    <div class="resource-actions">
      <button class="btn-favorite-sm" data-id="${i.id}" data-icon-only="true" aria-label="أضف للمفضلة"><i class="fa-regular fa-heart"></i></button>
      <a href="${i.url || '#'}" target="_blank" class="btn btn-ghost btn-sm" onclick="viewResource(this)"><i class="fa-solid fa-eye"></i> معاينة</a>
      <a href="${i.url || '#'}" download class="btn btn-primary btn-sm" style="background: ${color}"><i class="fa-solid fa-download"></i> تحميل</a>
    </div>
  </div>`;
}

// Helper to render an empty term placeholder
function renderEmptyTerm(msg) {
  return `
  <div class="term-empty-card">
    <div class="term-empty-icon"><i class="fa-solid fa-folder-open"></i></div>
    <p>${msg}</p>
  </div>`;
}

function initFavoritesPage() {
  const container = document.getElementById('favoritesContainer');
  const emptyState = document.getElementById('favoritesEmptyState');
  if (!container || !emptyState) return;

  const favs = getFavorites().filter(f => f.id.split('-').length === 3);
  
  if (favs.length === 0) {
    emptyState.style.display = 'block';
    return;
  }
  
  let html = '';
  favs.forEach(f => {
    const parts = f.id.split('-');
    const year = parts[0];
    const track = parts[1];
    const subjectName = parts[2];
    
    const s = SUBJECTS[subjectName];
    const color = s?.color || '#5B5BD6';
    const icon = s?.icon || '<i class="fa-solid fa-book-bookmark"></i>';
    
    let arTrackName = track;
    if (track === "Sciences") arTrackName = "علوم تجريبية";
    else if (track === "Math") arTrackName = "رياضيات";
    else if (track === "Technical Math") arTrackName = "تقني رياضي";
    else if (track === "Literature") arTrackName = "آداب وفلسفة";
    else if (track === "Languages") arTrackName = "لغات أجنبية";
    else if (track === "Management") arTrackName = "تسيير واقتصاد";
    else if (track === "Common Science") arTrackName = "جذع مشترك علوم وتكنولوجيا";
    else if (track === "Common Literature") arTrackName = "جذع مشترك آداب";

    let sAr = subjectName;
    if(subjectName==="Math") sAr = (year==="3AS" && track==="Math") ? "رياضيات (مكثفة)" : "رياضيات"; 
    else if(subjectName==="Physics") sAr="علوم فيزيائية"; 
    else if(subjectName==="Biology" || subjectName==="Science") sAr="علوم الطبيعة والحياة";
    else if(subjectName==="Chemistry") sAr="الكيمياء";
    else if(subjectName==="Arabic") sAr = (year==="3AS" && track==="Literature") ? "لغة عربية (مكثفة)" : "لغة عربية";
    else if(subjectName==="French") sAr="لغة فرنسية";
    else if(subjectName==="English") sAr="لغة إنجليزية";
    else if(subjectName==="Philosophy") sAr="فلسفة";
    else if(subjectName==="History & Geography") sAr="تاريخ وجغرافيا";
    else if(subjectName==="Islamic Studies") sAr="تربية إسلامية";
    else if(subjectName==="Technology") sAr="تكنولوجيا";
    else if(subjectName==="Computer Science") sAr="إعلام آلي";
    else if(subjectName==="Electrical Engineering") sAr="هندسة كهربائية";
    else if(subjectName==="Civil Engineering") sAr="هندسة مدنية";
    else if(subjectName==="Law") sAr="قانون";
    else if(subjectName==="Economics") sAr="اقتصاد ومانجمنت";
    else if(subjectName==="Accounting") sAr="تسيير محاسبي ومالي";
    else if(subjectName==="Third Language") sAr="لغة أجنبية ثالثة";
    
    const link = `subject.html?year=${year}&track=${encodeURIComponent(track)}&subject=${encodeURIComponent(subjectName)}`;
    
    html += `
        <div class="subject-card" style="position:relative;">
          <a href="${link}" style="display:block; flex-grow:1;">
            <div class="subject-card-icon" style="background: ${color}15; color: ${color}">${icon}</div>
            <h3 style="color: var(--text-primary); margin-bottom: 0.5rem">${sAr}</h3>
            <p style="color: var(--text-secondary); font-size: var(--text-sm);">${year} - ${arTrackName}</p>
          </a>
          <div class="subject-card-footer">
            <button class="btn-favorite-sm" data-id="${f.id}" data-icon-only="true" aria-label="أضف للمفضلة"><i class="fa-regular fa-heart"></i></button>
            <a href="${link}" class="subject-card-cta" style="color: ${color}">استعراض <i class="fa-solid fa-arrow-left"></i></a>
          </div>
        </div>
    `;
  });
  
  container.innerHTML = html;
}

document.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn-favorite-sm');
  if (btn) {
    e.preventDefault();
    const id = btn.getAttribute('data-id');
    toggleFavorite(id, id);
  }
});

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initGlobalSearch();
    initMobileMenu();
    initNavbarScroll();
    initPage();
    updateFavoritesUI();
    
    if(window.location.pathname.includes('subject.html')) {
        initTabs();
        initResourceSearch();
        initChapterFilters();
    }
    if(window.location.pathname.includes('bac_subject.html')) {
        initResourceSearch();
    }
});
window.addEventListener('load', hideLoader);
