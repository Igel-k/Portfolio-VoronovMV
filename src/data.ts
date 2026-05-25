import { Section, Document } from './types';
import blenderVideoLight from './assets/videos/test_light_2.mp4';
import blenderVideoDark from './assets/videos/test_dark_2.mp4';

export const portfolioSections: Section[] = [
  {
    id: "structural",
    title: "Прочностные расчёты и динамика конструкций",
    projects: [
      {
        id: "blender",
        title: "Прочностной анализ ножа блендера",
        desc: "Оценка НДС при центробежных и гидродинамических нагрузках. Сетка с измельчением на режущих кромках. Использован материал 14Х17Н2.",
        tags: ["Static Structural", "Non-linear"],
        videoLight: blenderVideoLight,
        videoDark: blenderVideoDark
      },
      {
        id: "amg3-frame",
        title: "Анализ несущей рамы",
        desc: "Расчет на статическую прочность и поиск собственных частот конструкции из сплава АМг3.",
        tags: ["Modal Analysis", "Linear Dynamics"]
      }
    ]
  },
  {
    id: "explicit",
    title: "Быстропротекающие процессы и удары",
    projects: [
      {
        id: "drop-test",
        title: "Drop-test корпуса электроники",
        desc: "Моделирование падения прибора из ABS-пластика на жесткое основание. Оценка пластических деформаций и целостности защелок.",
        tags: ["Explicit Dynamics", "Drop Test"]
      }
    ]
  },
  {
    id: "cfd-thermal",
    title: "Гидрогазодинамика, теплообмен и эрозионный износ",
    projects: [
      {
        id: "amplifier",
        title: "Тепловой расчет электрического усилителя",
        desc: "Анализ температурных полей радиатора и компонентов платы при пиковых нагрузках.",
        tags: ["Steady-State Thermal", "Convection"]
      }
    ]
  },
  {
    id: "reverse-engineering",
    title: "Оптимизация, реверс-инжиниринг и 3D-печать",
    projects: [
      {
        id: "shining3d-scan",
        title: "Реверс-инжиниринг сложной геометрии",
        desc: "Обработка облака точек со сканера Shining 3D, восстановление CAD-геометрии и топологическая оптимизация под 3D-печать.",
        tags: ["Reverse Engineering", "Topological Optimization"]
      }
    ]
  }
];

export const documents: Document[] = [
  {
    id: "rep-blender",
    title: "Отчет по расчету промышленного ножа блендера",
    type: "Технический отчет",
    date: "Май 2026"
  },
  {
    id: "rep-amplifier",
    title: "Отчет по тепловому режиму электрического усилителя",
    type: "Технический отчет",
    date: "Май 2026"
  },
  {
    id: "article-1",
    title: "Влияние плотности сетки на сингулярности напряжений",
    type: "Научная статья",
    date: "2025"
  }
];