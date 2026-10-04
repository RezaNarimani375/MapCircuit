export interface EcuModel {
  name: string
  code: string
  description: string
  pinsCount: number
  commonVehicles: string
  faultNotes: string
}

export interface DiagramItem {
  id: string
  title: string
  category: 'pinout' | 'sensor' | 'actuator' | 'power' | 'network'
  description: string
  pins: { pin: string; color: string; label: string; voltage: string; signal: string }[]
}

export interface CarModel {
  id: string
  name: string
  years: string
  engine: string
  ecus: string[]
  diagramCount: number
}

export interface BrandData {
  id: string
  name: string
  englishName: string
  country: string
  modelsCount: number
  diagramsCount: number
  color: string
  models: CarModel[]
  ecus: EcuModel[]
  diagrams: DiagramItem[]
}

export const BRANDS: BrandData[] = [
  {
    id: 'ikco',
    name: 'ایران خودرو',
    englishName: 'IKCO',
    country: 'ایران',
    modelsCount: 14,
    diagramsCount: 42,
    color: '#004785',
    models: [
      { id: '206', name: 'پژو ۲۰۶ (تیپ ۲ و ۵)', years: '۱۳۸۰ - ۱۴۰۲', engine: 'TU3 / TU5', ecus: ['Bosch ME7.4.4', 'Bosch ME7.4.5', 'Valeo J34P', 'Sagem S2000'], diagramCount: 8 },
      { id: '207', name: 'پژو ۲۰۷i', years: '۱۳۸۹ - ۱۴۰۳', engine: 'TU5 / TU5P', ecus: ['Bosch ME17.9.71', 'Siemens Continental', 'Kesens'], diagramCount: 6 },
      { id: 'dena', name: 'دنا و دنا پلاس توربو', years: '۱۳۹۴ - ۱۴۰۳', engine: 'EF7 / TC7', ecus: ['Bosch ME17.9.71', 'Siemens Dual-Fuel', 'EasyU'], diagramCount: 7 },
      { id: 'tara', name: 'تارا (دستی و اتومات)', years: '۱۴۰۰ - ۱۴۰۳', engine: 'TU5P', ecus: ['Bosch ME17.9.71', 'Kesens K01'], diagramCount: 5 },
      { id: 'pars', name: 'پژو پارس', years: '۱۳۷۹ - ۱۴۰۲', engine: 'XU7 / TU5 / XU7P', ecus: ['Siemens VDO', 'SSAT', 'Bosch MP7.3', 'S2000'], diagramCount: 9 },
      { id: 'samand', name: 'سمند و سورن پلاس', years: '۱۳۸۲ - ۱۴۰۳', engine: 'XU7 / EF7 / EF7P', ecus: ['Siemens', 'Bosch ME7.4.9', 'SSAT'], diagramCount: 7 }
    ],
    ecus: [
      { name: 'بوش ME17.9.71', code: 'ME17', description: 'ایسیو میکرو TriCore مورد استفاده در خودروهای TU5P، EF7 و دنا', pinsCount: 121, commonVehicles: 'دنا، تارا، ۲۰۷', faultNotes: 'حساس به نوسان ولتاژ درایور دریچه گاز، خرابی آی‌سی TLE7242' },
      { name: 'زیمنس کنتیننتال', code: 'Siemens VDO', description: 'ایسیو پرکاربرد شبکه و بدون شبکه خودروهای ملی', pinsCount: 90, commonVehicles: 'پارس، سمند، ۴۰۵', faultNotes: 'خطای کاذب سنسور اکسیژن و کوئل ۲ و ۳، رفع عیب با قلع‌کاری آی‌سی انژکتور' },
      { name: 'اس‌اس‌ای‌تی SSAT', code: 'SSAT', description: 'ایسیو با پردازنده اینفینئون تک سوز و دوگانه', pinsCount: 90, commonVehicles: 'پارس، پژو ۴۰۵', faultNotes: 'ریپ زدن در شتاب اولیه، خطای سنسور دریچه گاز' },
      { name: 'والئو Valeo J34P', code: 'J34P', description: 'ایسیو ۲۰۶ تیپ ۲ با دریچه گاز برقی', pinsCount: 112, commonVehicles: '۲۰۶ فرانسوی تیپ ۲', faultNotes: 'خرابی ترانزیستورهای کوئل، خطای سنسور دمای آب' }
    ],
    diagrams: [
      {
        id: 'ikco-me17-pinout',
        title: 'پین اوت کامل سوکت ECU بوش ME17.9.71',
        category: 'pinout',
        description: 'نقشه پایه‌های اصلی تغذیه، رله دوبل، سنسورها و عملگرها',
        pins: [
          { pin: 'A1', color: '#ef4444', label: 'برق دائم (+12V باتری)', voltage: '+12V', signal: 'Battery Constant' },
          { pin: 'A3', color: '#3b82f6', label: 'برق سوئیچ (پایه ۱۵)', voltage: '+12V', signal: 'Ignition ON' },
          { pin: 'A5', color: '#10b981', label: 'بدنه اصلی ECU (GND)', voltage: '0V', signal: 'Ground Chassis' },
          { pin: 'B12', color: '#f59e0b', label: 'سیگنال سنسور دور موتور (CKP+)', voltage: '2.5V AC', signal: 'Crank Sensor +' },
          { pin: 'B13', color: '#8b5cf6', label: 'سیگنال سنسور دور موتور (CKP-)', voltage: '2.5V AC', signal: 'Crank Sensor -' },
          { pin: 'B28', color: '#06b6d4', label: 'خروجی فرمان رله دوبل', voltage: '0V / 12V', signal: 'Main Relay Control' },
          { pin: 'C04', color: '#ec4899', label: 'پالس منفی انژکتور سیلندر ۱', voltage: 'GND Pulsed', signal: 'Injector 1 Driver' },
          { pin: 'C15', color: '#6366f1', label: 'فرمان کوئل ۱ و ۴', voltage: 'Pulsed', signal: 'Ignition Coil 1-4' }
        ]
      }
    ]
  },
  {
    id: 'saipa',
    name: 'سایپا',
    englishName: 'SAIPA',
    country: 'ایران',
    modelsCount: 11,
    diagramsCount: 36,
    color: '#e25822',
    models: [
      { id: 'pride', name: 'پراید (انژکتور و یورو ۴)', years: '۱۳۸۳ - ۱۳۹۹', engine: 'M13', ecus: ['Siemens', 'Sagem S2000', 'BOSCH M7.9.7', 'SSAT'], diagramCount: 9 },
      { id: 'tiba', name: 'تیبا ۱ و تیبا ۲', years: '۱۳۸۹ - ۱۴۰۱', engine: 'M15', ecus: ['Siemens VDO', 'SSAT', 'Bosch M7.4.4', 'Maw'], diagramCount: 7 },
      { id: 'quick', name: 'کوییک (دنده‌ای، R، اتومات)', years: '۱۳۹۷ - ۱۴۰۳', engine: 'M15', ecus: ['Siemens', 'SSAT یورو ۵', 'Kesens', 'EasyU'], diagramCount: 8 },
      { id: 'saina', name: 'ساینا و ساینا S', years: '۱۳۹۵ - ۱۴۰۳', engine: 'M15 / M15GSI', ecus: ['Siemens', 'Kesens K01', 'EasyU'], diagramCount: 6 },
      { id: 'shahin', name: 'شاهین G و اتوماتیک', years: '۱۴۰۰ - ۱۴۰۳', engine: 'M15-TC توربو', ecus: ['Bosch ME17', 'AECU توربو'], diagramCount: 6 }
    ],
    ecus: [
      { name: 'زیمنس یورو ۴', code: 'Siemens E4', description: 'ایسیو بدون شبکه و بایفیول سایپا', pinsCount: 90, commonVehicles: 'پراید، تیبا، ساینا', faultNotes: 'خرابی آی‌سی استپر موتور TLE6209، مشکل گاز خوردن بی دلیل' },
      { name: 'بوش M7.9.7', code: 'M7.9.7', description: 'ایسیو پراید نیمه انژکتور و انژکتور اولیه', pinsCount: 81, commonVehicles: 'پراید ۸۶ تا ۸۹', faultNotes: 'سوختن ترانزیستور کوئل بر اثر وایر شمع بی‌کیفیت' }
    ],
    diagrams: [
      {
        id: 'saipa-siemens-pinout',
        title: 'دیاگرام کامل سیم‌کشی زیمنس پراید و تیبا',
        category: 'pinout',
        description: 'چیدمان سوکت ۹۰ پایه زیمنس شرکت کروز / کنتیننتال',
        pins: [
          { pin: '3', color: '#10b981', label: 'بدنه قدرت ECU', voltage: '0V', signal: 'Chassis Ground' },
          { pin: '30', color: '#ef4444', label: 'مثبت دائم باطری (+12V)', voltage: '+12V', signal: 'Constant Battery' },
          { pin: '29', color: '#3b82f6', label: 'مثبت سوئیچ باز (+15)', voltage: '+12V', signal: 'Switched Power' },
          { pin: '67', color: '#f59e0b', label: 'پالس دور موتور', voltage: 'AC wave', signal: 'RPM Hall Sensor' },
          { pin: '19', color: '#8b5cf6', label: 'فرمان انژکتور ۱', voltage: 'PWM GND', signal: 'Inj 1' },
          { pin: '20', color: '#06b6d4', label: 'فرمان انژکتور ۲', voltage: 'PWM GND', signal: 'Inj 2' }
        ]
      }
    ]
  },
  {
    id: 'mvm',
    name: 'مدیران خودرو',
    englishName: 'MVM / Chery',
    country: 'چین / ایران',
    modelsCount: 12,
    diagramsCount: 30,
    color: '#475569',
    models: [
      { id: 'mvm315', name: 'MVM 315 (هاچبک و صندوقدار)', years: '۱۳۹۱ - ۱۴۰۰', engine: '1.5L', ecus: ['Bosch ME7.9.7', 'Bosch ME17.8.8'], diagramCount: 6 },
      { id: 'mvm530', name: 'MVM 530 / 550', years: '۱۳۸۹ - ۱۳۹۶', engine: '2.0L', ecus: ['Bosch ME7.9.7'], diagramCount: 5 },
      { id: 'x22', name: 'MVM X22 و X22 پرو', years: '۱۳۹۶ - ۱۴۰۳', engine: '1.5L / 1.0L Turbo', ecus: ['Bosch ME17.8.8', 'Delphi MT62.1'], diagramCount: 7 },
      { id: 'x33', name: 'MVM X33 و X33s', years: '۱۳۸۹ - ۱۴۰۱', engine: '2.0L', ecus: ['Bosch ME7.9.7', 'Siemens'], diagramCount: 6 },
      { id: 'arrizo5', name: 'آریزو ۵ و آریزو ۶', years: '۱۳۹۵ - ۱۴۰۳', engine: '1.5L Turbo', ecus: ['Bosch MED17.8.10'], diagramCount: 6 }
    ],
    ecus: [
      { name: 'بوش ME7.9.7 چری', code: 'ME7.9.7', description: 'ایسیو خودروهای چری و ام‌وی‌ام', pinsCount: 81, commonVehicles: 'MVM 110, 315, 530, X33', faultNotes: 'افت ولتاژ سنسور موقعیت دریچه گاز، خرابی رگولاتور 5 ولت داخلی' },
      { name: 'بوش ME17.8.8', code: 'ME17.8.8', description: 'ایسیو پیشرفته توربو و تنفس طبیعی چری', pinsCount: 128, commonVehicles: 'X22, Arrizo, Tiggo', faultNotes: 'خطای سنسور مپ و دریچه گاز بعد از شستشوی موتور' }
    ],
    diagrams: [
      {
        id: 'mvm-me797-pinout',
        title: 'پین اوت ایسیو بوش ME7.9.7 ام‌وی‌ام ۳۱۵ و ۵۳۰',
        category: 'pinout',
        description: 'پایه‌های برق ورودی، سنسورهای کیلومتر، دمای آب و سنسور اکسیژن',
        pins: [
          { pin: '4', color: '#10b981', label: 'بدنه برق ECU', voltage: '0V', signal: 'GND' },
          { pin: '12', color: '#ef4444', label: 'برق ۱۲ ولت باتری', voltage: '+12V', signal: 'BATT' },
          { pin: '13', color: '#3b82f6', label: 'برق سوئیچ پله دوم', voltage: '+12V', signal: 'IGN' },
          { pin: '44', color: '#f59e0b', label: 'سنسور اکسیژن سیگنال', voltage: '0.1-0.9V', signal: 'Lambda Sensor' }
        ]
      }
    ]
  },
  {
    id: 'jac',
    name: 'جک',
    englishName: 'JAC',
    country: 'چین',
    modelsCount: 8,
    diagramsCount: 24,
    color: '#1e293b',
    models: [
      { id: 'j5', name: 'JAC J5 (دستی و اتومات)', years: '۱۳۹۲ - ۱۳۹۶', engine: '1.5L / 1.8L', ecus: ['Delphi MT22.1', 'Bosch ME7.8.8'], diagramCount: 6 },
      { id: 's5', name: 'JAC S5 (دستی و اتومات توربو)', years: '۱۳۹۴ - ۱۴۰۲', engine: '2.0L Turbo / 1.5 TGDI', ecus: ['Delphi MT80', 'Bosch MED17.8.10'], diagramCount: 8 },
      { id: 's3', name: 'JAC S3', years: '۱۳۹۶ - ۱۴۰۳', engine: '1.6L VVT', ecus: ['Delphi MT62.1'], diagramCount: 5 },
      { id: 'j4', name: 'JAC J4', years: '۱۳۹۷ - ۱۴۰۳', engine: '1.5L VVT', ecus: ['Bosch ME17.8.8'], diagramCount: 5 }
    ],
    ecus: [
      { name: 'دلفی MT80', code: 'MT80', description: 'ایسیو بدنه فلزی جک S5 توربو', pinsCount: 128, commonVehicles: 'JAC S5, J5 1.8', faultNotes: 'آسیب دیدگی آی‌سی سوزن انژکتور در صورت اتصال کوتاه سیم‌کشی' }
    ],
    diagrams: [
      {
        id: 'jac-mt80-pinout',
        title: 'نقشه پایه‌های دلفی MT80 جک اس ۵',
        category: 'pinout',
        description: 'سیم‌کشی توربوشارژر، سنسور بوست و اینترکولر',
        pins: [
          { pin: 'J1-01', color: '#ef4444', label: 'ورودی مثبت اصلی', voltage: '12V', signal: 'Main 12V' },
          { pin: 'J1-73', color: '#10b981', label: 'اتصال بدنه ماژول', voltage: '0V', signal: 'Ground' }
        ]
      }
    ]
  },
  {
    id: 'haima',
    name: 'هایما',
    englishName: 'Haima',
    country: 'چین',
    modelsCount: 6,
    diagramsCount: 18,
    color: '#1d4ed8',
    models: [
      { id: 's7', name: 'هایما S7 (۲۰۰۰ و ۱۸۰۰ توربو)', years: '۱۳۹۴ - ۱۴۰۲', engine: '2.0L / 1.8T', ecus: ['Bosch ME17.8.8', 'Delphi MT80'], diagramCount: 6 },
      { id: 's5', name: 'هایما S5 توربو (CVT و 6AT)', years: '۱۳۹۶ - ۱۴۰۳', engine: '1.5 Turbo', ecus: ['Bosch MED17.8.10'], diagramCount: 6 },
      { id: '8s', name: 'هایما 8S و 7X', years: '۱۴۰۱ - ۱۴۰۳', engine: '1.6 TGDI', ecus: ['Bosch MG1'], diagramCount: 6 }
    ],
    ecus: [
      { name: 'بوش MED17.8.10', code: 'MED17', description: 'ایسیو تزریق مستقیم سوخت GDI هایما', pinsCount: 140, commonVehicles: 'Haima S5, S7 Turbo', faultNotes: 'خرابی ترانزیستور فشار بالای پمپ بنزین ریل سوخت' }
    ],
    diagrams: [
      {
        id: 'haima-med17-pinout',
        title: 'نقشه مدار سنسورهای فشار بوست و هوای هایما S5',
        category: 'sensor',
        description: 'بررسی ولتاژ خروجی سنسور مپ و دمای هوای منیفولد',
        pins: [
          { pin: 'K12', color: '#ef4444', label: 'تغذیه ۵ ولت سنسور', voltage: '5.0V', signal: 'VREF 5V' },
          { pin: 'K24', color: '#3b82f6', label: 'سیگنال فشار هوای بوست', voltage: '0.5-4.5V', signal: 'MAP Signal' }
        ]
      }
    ]
  },
  {
    id: 'kia',
    name: 'کیا',
    englishName: 'KIA',
    country: 'کره جنوبی',
    modelsCount: 12,
    diagramsCount: 38,
    color: '#bb162b',
    models: [
      { id: 'cerato', name: 'سراتو (سایپا و وارداتی TD/YD)', years: '۲۰۰۸ - ۲۰۱۸', engine: '1.6L / 2.0L', ecus: ['Bosch ME17.9.11', 'Sim2K-241', 'Kefico'], diagramCount: 8 },
      { id: 'sportage', name: 'اسپورتیج (SL / QL)', years: '۲۰۱۱ - ۲۰۱۸', engine: '2.4L / 2.0L', ecus: ['Sim2K-241', 'Bosch ME17.9.11.1'], diagramCount: 7 },
      { id: 'optima', name: 'اپتیما (TF / JF)', years: '۲۰۱۱ - ۲۰۱۸', engine: '2.4L GDI / MPI', ecus: ['Sim2K-241', 'Sim2K-250'], diagramCount: 8 }
    ],
    ecus: [
      { name: 'زیمنس Sim2K-241', code: 'Sim2K', description: 'ایسیو کیا و هیوندای پیشرانه تتا ۲', pinsCount: 154, commonVehicles: 'سراتو، اپتیما، اسپورتیج', faultNotes: 'سوختن درایور کوئل های تکی، خطای زاویه میل بادامک CVVT' }
    ],
    diagrams: [
      {
        id: 'kia-sim2k-pinout',
        title: 'پین اوت کامل Sim2K-241 سراتو و اپتیما',
        category: 'pinout',
        description: 'نقشه سوکت ۹۴ پایه و ۶۰ پایه موتور ۲۴۰۰',
        pins: [
          { pin: 'E01', color: '#ef4444', label: 'برق اصلی ماژول ECM', voltage: '12V', signal: 'BATT+' },
          { pin: 'E02', color: '#10b981', label: 'بدنه سنسورها', voltage: '0V', signal: 'Sensor GND' }
        ]
      }
    ]
  },
  {
    id: 'hyundai',
    name: 'هیوندای',
    englishName: 'Hyundai',
    country: 'کره جنوبی',
    modelsCount: 15,
    diagramsCount: 40,
    color: '#002c5f',
    models: [
      { id: 'sonata', name: 'سوناتا (NF / YF / LF)', years: '۲۰۰۶ - ۲۰۱۸', engine: '2.4L / 2.0 Turbo', ecus: ['Sim2K-141', 'Sim2K-241', 'Sim2K-250'], diagramCount: 8 },
      { id: 'santafe', name: 'سانتافه (CM / DM)', years: '۲۰۰۷ - ۲۰۱۸', engine: '2.7L / 3.5L / 2.4L GDI', ecus: ['Delphi MT38', 'Sim2K-241'], diagramCount: 9 },
      { id: 'elantra', name: 'النترا (MD / AD)', years: '۲۰۱۱ - ۲۰۱۸', engine: '1.8L / 2.0L', ecus: ['Bosch ME17.9.11', 'Sim2K-241'], diagramCount: 7 }
    ],
    ecus: [
      { name: 'دلفی MT38', code: 'MT38', description: 'ایسیو پیشرانه های ۶ سیلندر خورجینی هیوندای', pinsCount: 140, commonVehicles: 'سانتافه، آزرا، جنسیس کوپه', faultNotes: 'داغ شدن بیش از حد در محل نصب موتور، لحیم سردی پایه های کانکتور' }
    ],
    diagrams: [
      {
        id: 'hyundai-mt38-pinout',
        title: 'دیاگرام برق سانتافه ۲۷۰۰ با ایسیو MT38',
        category: 'pinout',
        description: 'نقشه دریچه گاز برقی و کوئل های دوبل ۶ سیلندر',
        pins: [
          { pin: 'A10', color: '#3b82f6', label: 'سیگنال پدال گاز ۱', voltage: '0.7-4.2V', signal: 'APS 1' },
          { pin: 'A11', color: '#06b6d4', label: 'سیگنال پدال گاز ۲', voltage: '0.3-2.1V', signal: 'APS 2' }
        ]
      }
    ]
  },
  {
    id: 'kerman',
    name: 'کرمان موتور',
    englishName: 'KMC / Kerman Motor',
    country: 'ایران',
    modelsCount: 9,
    diagramsCount: 26,
    color: '#334155',
    models: [
      { id: 'kmc-t8', name: 'KMC T8 پیکاپ', years: '۱۳۹۹ - ۱۴۰۳', engine: '2.0L Turbo 4N20', ecus: ['Delphi MT62.1', 'Bosch MED17.8.10'], diagramCount: 7 },
      { id: 'kmc-k7', name: 'KMC K7', years: '۱۴۰۰ - ۱۴۰۳', engine: '1.5 TGDI', ecus: ['Bosch MED17.8.10'], diagramCount: 6 },
      { id: 'kmc-j7', name: 'KMC J7 سدان اسپرت', years: '۱۴۰۱ - ۱۴۰۳', engine: '1.5 TGDI', ecus: ['Bosch MED17.8.10'], diagramCount: 6 },
      { id: 'lifan-x60', name: 'لیفان X60 و ۶۲۰', years: '۱۳۹۱ - ۱۳۹۷', engine: '1.8L', ecus: ['Delphi MT22.1'], diagramCount: 7 }
    ],
    ecus: [
      { name: 'دلفی MT62.1', code: 'MT62.1', description: 'ایسیو مورد استفاده در وانت KMC T8 و خودروهای نسل جدید جک', pinsCount: 128, commonVehicles: 'KMC T8, J4', faultNotes: 'اتصال نادرست سیم زمین کیت بدنه منجر به خطای سنسور دریچه گاز میشود' }
    ],
    diagrams: [
      {
        id: 'kmc-t8-pinout',
        title: 'نقشه سوکت های کامپیوتر KMC T8 توربو',
        category: 'pinout',
        description: 'مدار سنسور میل لنگ و سنسور موقعیت توربو شارژ',
        pins: [
          { pin: 'T1', color: '#ef4444', label: 'برق ۱۲ ولت باتری', voltage: '12V', signal: 'Batt' },
          { pin: 'T15', color: '#10b981', label: 'اتصال شاسی منفی', voltage: '0V', signal: 'GND' }
        ]
      }
    ]
  },
  {
    id: 'lamari',
    name: 'لاماری',
    englishName: 'Lamari / Forthing',
    country: 'چین / ایران',
    modelsCount: 3,
    diagramsCount: 14,
    color: '#0f172a',
    models: [
      { id: 'ima', name: 'لاماری ایما (Lamari Eama)', years: '۱۴۰۱ - ۱۴۰۳', engine: '1.5L TGDI میتسوبیشی 4A95TD', ecus: ['Bosch MG1US008', 'Delphi'], diagramCount: 7 },
      { id: 'ima-hev', name: 'لاماری ایما هیبرید (HEV)', years: '۱۴۰۲ - ۱۴۰۳', engine: '1.5L Hybrid', ecus: ['Bosch MG1 Dual-Inverter'], diagramCount: 7 }
    ],
    ecus: [
      { name: 'بوش MG1US008', code: 'MG1', description: 'جدیدترین نسل ایسیوهای بوش با میکروکنترلر TC298TP', pinsCount: 154, commonVehicles: 'لاماری ایما، دیگنیتی پرستیژ', faultNotes: 'نیاز به بازگشایی رمز حفاظتی در پروگرامینگ و ریمپ با پروگرمر کاتگ' }
    ],
    diagrams: [
      {
        id: 'lamari-mg1-pinout',
        title: 'پین اوت ایسیو پیشرفته بوش MG1 لاماری ایما',
        category: 'pinout',
        description: 'پایه های شبکه CAN-FD، سنسور فشار ریل سوخت و شیر توربو WGT',
        pins: [
          { pin: '1', color: '#ef4444', label: 'برق اصلی رله موتور', voltage: '12V', signal: 'Main Power' },
          { pin: '28', color: '#3b82f6', label: 'CAN High شبکه پرسرعت', voltage: '2.7V', signal: 'CAN-H' },
          { pin: '29', color: '#8b5cf6', label: 'CAN Low شبکه پرسرعت', voltage: '2.3V', signal: 'CAN-L' }
        ]
      }
    ]
  },
  {
    id: 'changan',
    name: 'چانگان',
    englishName: 'Changan',
    country: 'چین',
    modelsCount: 6,
    diagramsCount: 20,
    color: '#1e40af',
    models: [
      { id: 'cs35', name: 'چانگان CS35 (سایپا و وارداتی)', years: '۱۳۹۴ - ۱۴۰۲', engine: '1.6L BlueCore', ecus: ['Bosch ME17.8.8'], diagramCount: 7 },
      { id: 'cs35plus', name: 'چانگان CS35 پلاس توربو', years: '۱۴۰۲ - ۱۴۰۳', engine: '1.4T NE14', ecus: ['Bosch MED17.8.10'], diagramCount: 6 },
      { id: 'cs55', name: 'چانگان CS55 پلاس و Uni-T', years: '۱۴۰۲ - ۱۴۰۳', engine: '1.5T BlueCore', ecus: ['Bosch MG1'], diagramCount: 7 }
    ],
    ecus: [
      { name: 'بوش ME17.8.8 چانگان', code: 'ME17.8.8', description: 'ایسیو بلوکر چانگان CS35', pinsCount: 128, commonVehicles: 'Changan CS35', faultNotes: 'خطای پتانسیومتر دریچه گاز و تاخیر در شتاب ثانویه' }
    ],
    diagrams: [
      {
        id: 'changan-cs35-pinout',
        title: 'سیم‌کشی کامل چانگان CS35 با ایسیو ME17',
        category: 'pinout',
        description: 'نقشه سوکت های موتور و سوکت رابط اتاق',
        pins: [
          { pin: '02', color: '#ef4444', label: 'تغذیه اصلی رله ECU', voltage: '12V', signal: '+12V' },
          { pin: '06', color: '#10b981', label: 'اتصال بدنه شاسی', voltage: '0V', signal: 'GND' }
        ]
      }
    ]
  },
  {
    id: 'toyota',
    name: 'تویوتا',
    englishName: 'Toyota',
    country: 'ژاپن',
    modelsCount: 12,
    diagramsCount: 36,
    color: '#475569',
    models: [
      { id: 'corolla', name: 'کرولا (۲۰۰۵ - ۲۰۲۳)', years: '۲۰۰۵ - ۲۰۲۳', engine: '1.8L / 2.0L / 1.2T', ecus: ['Denso Gen 1', 'Denso Gen 2'], diagramCount: 8 },
      { id: 'camry', name: 'کمری (GLX, SE, هیبرید)', years: '۲۰۰۷ - ۲۰۱۸', engine: '2.4L / 2.5L', ecus: ['Denso Toyota'], diagramCount: 8 },
      { id: 'prado', name: 'پرادو و لندکروزر (۴ و ۶ سیلندر)', years: '۲۰۰۵ - ۲۰۱۵', engine: '2.7L / 4.0L V6', ecus: ['Denso Toyota'], diagramCount: 9 }
    ],
    ecus: [
      { name: 'دنسو تویوتا Denso', code: 'Denso', description: 'ایسیو فوق العاده پایدار با پردازنده Renesas', pinsCount: 172, commonVehicles: 'کرولا، کمری، هایلوکس', faultNotes: 'بسیار کم استهلاک، بیشترین موارد مربوط به سوختن ترانزیستور کوئل بر اثر فیلر شمع نامناسب' }
    ],
    diagrams: [
      {
        id: 'toyota-denso-pinout',
        title: 'پین اوت ایسیو دنسو کمری و هایلوکس',
        category: 'pinout',
        description: 'سوکت های ۴ قلو با نقشه سنسور اکسیژن AF Sensor',
        pins: [
          { pin: 'B1', color: '#ef4444', label: 'BATT برق باطری', voltage: '12V', signal: 'Battery' },
          { pin: 'E1', color: '#10b981', label: 'E1 بدنه منفی', voltage: '0V', signal: 'Ground' }
        ]
      }
    ]
  },
  {
    id: 'mazda',
    name: 'مزدا',
    englishName: 'Mazda',
    country: 'ژاپن',
    modelsCount: 5,
    diagramsCount: 18,
    color: '#334155',
    models: [
      { id: 'mazda3', name: 'مزدا ۳ قدیم و مزدا ۳ نیو', years: '۱۳۸۶ - ۱۳۹۸', engine: '2.0L MZR', ecus: ['Mitsubishi / Denso'], diagramCount: 8 },
      { id: 'mazda323', name: 'مزda 323 (GLX / FL)', years: '۱۳۷۹ - ۱۳۸۶', engine: '1.6L', ecus: ['Denso'], diagramCount: 6 }
    ],
    ecus: [
      { name: 'میتسوبیشی مزدا ۳ نیو', code: 'Mazda ECM', description: 'کامپیوتر مرکزی موتور و گیربکس مشترک', pinsCount: 140, commonVehicles: 'مزدا ۳ نیو', faultNotes: 'خرابی یونیت گیربکس TCM نصب شده روی گیربکس ناشی از حرارت بالا' }
    ],
    diagrams: [
      {
        id: 'mazda3-pinout',
        title: 'نقشه سیم‌کشی سوکت های مزدا ۳ نیو و یونیت TCM',
        category: 'pinout',
        description: 'بررسی ارتباط شبکه CAN بین ایسیو موتور و گیربکس',
        pins: [
          { pin: '1A', color: '#ef4444', label: 'برق سوئیچ اصلی', voltage: '12V', signal: 'IGN' },
          { pin: '2B', color: '#3b82f6', label: 'سیگنال دور موتور به TCM', voltage: 'Pulsed', signal: 'CAN Bus' }
        ]
      }
    ]
  },
  {
    id: 'citroen',
    name: 'سیتروئن',
    englishName: 'Citroën',
    country: 'فرانسه',
    modelsCount: 6,
    diagramsCount: 22,
    color: '#475569',
    models: [
      { id: 'zantia', name: 'زانتیا (۱۸۰۰ و ۲۰۰۰)', years: '۱۳۸۰ - ۱۳۸۹', engine: 'XU7JP4 / XU10J4R', ecus: ['Bosch MP5.2', 'Bosch MP7.3'], diagramCount: 9 },
      { id: 'c3', name: 'سیتروئن C3 توربو', years: '۱۳۹۷ - ۱۳۹۹', engine: '1.6 THP165', ecus: ['Bosch MED17.4.4'], diagramCount: 7 }
    ],
    ecus: [
      { name: 'بوش MP7.3 زانتیا', code: 'MP7.3', description: 'ایسیو مشهور زانتیا ۲۰۰۰ و ۱۸۰۰', pinsCount: 88, commonVehicles: 'زانتیا ۱۸۰۰ و ۲۰۰۰', faultNotes: 'خرابی آی‌سی پمپ بنزین و استپر موتور بر اثر سولفاته سوکت رله دوبل' }
    ],
    diagrams: [
      {
        id: 'citroen-mp73-pinout',
        title: 'پین اوت کامل بوش MP7.3 زانتیا ۲۰۰۰',
        category: 'pinout',
        description: 'پایه های سوکت ۸۸ پین به همراه نقشه سنسور مپ و پتانسیومتر',
        pins: [
          { pin: '18', color: '#ef4444', label: 'برق دائم حافظه باطری', voltage: '12V', signal: '+12V Mem' },
          { pin: '27', color: '#3b82f6', label: 'برق بعد از سوئیچ', voltage: '12V', signal: '+15 IGN' }
        ]
      }
    ]
  },
  {
    id: 'parskhodro',
    name: 'پارس خودرو',
    englishName: 'Pars Khodro',
    country: 'ایران',
    modelsCount: 8,
    diagramsCount: 24,
    color: '#1d4ed8',
    models: [
      { id: 'tondar90', name: 'تندر ۹۰ (L90 و پارس تندر)', years: '۱۳۸۶ - ۱۳۹۹', engine: 'K4M 1.6L', ecus: ['Valeo S3000', 'Continental EMS3132'], diagramCount: 8 },
      { id: 'sandero', name: 'ساندرو و استپ وی', years: '۱۳۹۴ - ۱۳۹۹', engine: 'K4M', ecus: ['Continental EMS3132'], diagramCount: 7 },
      { id: 'cadila', name: 'کادیلا (P90) و سهند', years: '۱۴۰۲ - ۱۴۰۳', engine: 'ME16 / M15GSI', ecus: ['Kesens', 'Siemens E5'], diagramCount: 5 }
    ],
    ecus: [
      { name: 'کانتیننتال EMS3132', code: 'EMS3132', description: 'ایسیو معروف ال ۹۰ و ساندرو', pinsCount: 90, commonVehicles: 'تندر ۹۰، ساندرو، مگان ۱۶۰۰', faultNotes: 'آسیب دیدگی ناشی از ورود آب به سوکت در زیر باطری، خطای کوئل های تکی' }
    ],
    diagrams: [
      {
        id: 'renault-ems3132-pinout',
        title: 'پین اوت EMS3132 تندر ۹۰ و ساندرو',
        category: 'pinout',
        description: 'نقشه کامل سوکت با رنگ سیم ها و کد پایه های سنسور فشار مپ',
        pins: [
          { pin: '29', color: '#ef4444', label: 'برق ۱۲ ولت دائم', voltage: '12V', signal: '+BATT' },
          { pin: '30', color: '#3b82f6', label: 'برق سوئیچ اصلی', voltage: '12V', signal: '+IGN' }
        ]
      }
    ]
  },
  {
    id: 'bahman',
    name: 'بهمن خودرو',
    englishName: 'Bahman Motor',
    country: 'ایران',
    modelsCount: 7,
    diagramsCount: 22,
    color: '#334155',
    models: [
      { id: 'dignity', name: 'دیگنیتی (پرایم و پرستیژ)', years: '۱۴۰۰ - ۱۴۰۳', engine: '1.5T / 2.0T GDI', ecus: ['Bosch MED17.8.10', 'Bosch MG1'], diagramCount: 7 },
      { id: 'fidelity', name: 'فیدلیتی (پرایم و پرستیژ)', years: '۱۴۰۰ - ۱۴۰۳', engine: '1.5T / 1.6 TGDI', ecus: ['Bosch ME17.8.8', 'Bosch MED17.8.10'], diagramCount: 7 },
      { id: 'b30', name: 'بسترن B30 و B50F', years: '۱۳۹۳ - ۱۳۹۹', engine: '1.6L', ecus: ['Bosch ME17.8.8'], diagramCount: 6 }
    ],
    ecus: [
      { name: 'بوش MED17.8.10 فیدلیتی', code: 'MED17.8.10', description: 'ایسیو موتور ۱۵۰۰ توربو فیدلیتی', pinsCount: 140, commonVehicles: 'فیدلیتی، دیگنیتی', faultNotes: 'خطای انژکتور های فشار بالا و شیر برقی وست گیت توربو' }
    ],
    diagrams: [
      {
        id: 'bahman-fidelity-pinout',
        title: 'دیاگرام کامل برق و انژکتور های فیدلیتی پرایم',
        category: 'actuator',
        description: 'پایه های درایور سوزن های GDI و سنسور دمای رادیاتور',
        pins: [
          { pin: 'C01', color: '#ef4444', label: 'انژکتور ۱ مثبت فشار بالا', voltage: '65V Peak', signal: 'GDI Pulse' },
          { pin: 'C02', color: '#10b981', label: 'انژکتور ۱ منفی کنترلی', voltage: 'PWM', signal: 'GDI Return' }
        ]
      }
    ]
  },
  {
    id: 'lifan',
    name: 'لیفان',
    englishName: 'Lifan',
    country: 'چین',
    modelsCount: 6,
    diagramsCount: 18,
    color: '#2563eb',
    models: [
      { id: 'x60', name: 'لیفان X60', years: '۱۳۹۱ - ۱۳۹۷', engine: '1.8L VVT', ecus: ['Delphi MT22.1'], diagramCount: 6 },
      { id: '620', name: 'لیفان ۶۲۰ (۱۶۰۰ تریتک و ۱۸۰۰)', years: '۱۳۸۹ - ۱۳۹۵', engine: '1.6L / 1.8L', ecus: ['Bosch ME7.9.7', 'Delphi MT20U2'], diagramCount: 6 },
      { id: '820', name: 'لیفان ۸۲۰ سدان لوکس', years: '۱۳۹۵ - ۱۳۹۷', engine: '2.4L', ecus: ['Delphi MT80'], diagramCount: 6 }
    ],
    ecus: [
      { name: 'دلفی MT22.1 لیفان', code: 'MT22.1', description: 'ایسیو خودروهای لیفان ۶۲۰ و X60', pinsCount: 128, commonVehicles: 'لیفان X60, 620', faultNotes: 'خطای سنسور میل سوپاپ و افت توان در سربالایی' }
    ],
    diagrams: [
      {
        id: 'lifan-mt22-pinout',
        title: 'پین اوت ایسیو دلفی MT22.1 لیفان X60',
        category: 'pinout',
        description: 'نقشه سوکت های دوقلو و مسیر سیم‌کشی سوکت OBD2',
        pins: [
          { pin: '1', color: '#ef4444', label: 'برق ۱۲ ولت دائم', voltage: '12V', signal: 'BATT' },
          { pin: '19', color: '#3b82f6', label: 'برق سوئیچ پله دوم', voltage: '12V', signal: 'IGN' }
        ]
      }
    ]
  },
  {
    id: 'chery',
    name: 'چری',
    englishName: 'Chery',
    country: 'چین',
    modelsCount: 9,
    diagramsCount: 26,
    color: '#475569',
    models: [
      { id: 'tiggo5', name: 'تیگو ۵ (Tiggo 5)', years: '۱۳۹۴ - ۱۴۰۰', engine: '2.0L DVVT', ecus: ['Bosch ME17.8.8'], diagramCount: 7 },
      { id: 'tiggo7', name: 'تیگو ۷ (Tiggo 7)', years: '۱۳۹۶ - ۱۴۰۲', engine: '1.5T', ecus: ['Bosch MED17.8.10'], diagramCount: 7 },
      { id: 'arrizo6', name: 'آریزو ۶ و آریزو ۶ پرو', years: '۱۳۹۸ - ۱۴۰۳', engine: '1.5 Turbo', ecus: ['Bosch MED17.8.10'], diagramCount: 7 }
    ],
    ecus: [
      { name: 'بوش ME17.8.8 تیگو ۵', code: 'ME17.8.8', description: 'ایسیو اختصاصی موتور دو لیتری چری', pinsCount: 128, commonVehicles: 'Tiggo 5, Arrizo 5', faultNotes: 'حساسیت بالا به شمع های نامرغوب و خرابی آی‌سی درایور کوئل' }
    ],
    diagrams: [
      {
        id: 'chery-tiggo-pinout',
        title: 'نقشه مدار سنسور اکسیژن و کاتالیزور تیگو ۵',
        category: 'sensor',
        description: 'پین های هیتر سنسور اکسیژن اول و دوم در سوکت ۱۲۸ پایه',
        pins: [
          { pin: '88', color: '#ec4899', label: 'فرمان منفی گرمکن سنسور اول', voltage: 'PWM', signal: 'Heater 1' },
          { pin: '89', color: '#8b5cf6', label: 'فرمان منفی گرمکن سنسور دوم', voltage: 'PWM', signal: 'Heater 2' }
        ]
      }
    ]
  },
  {
    id: 'greatwall',
    name: 'گریت وال',
    englishName: 'Great Wall / Haval',
    country: 'چین',
    modelsCount: 5,
    diagramsCount: 16,
    color: '#334155',
    models: [
      { id: 'haval-h6', name: 'هاوال H6 و هاوال H2', years: '۱۳۹۷ - ۱۳۹۹', engine: '1.5 Turbo', ecus: ['Delphi MT80', 'Bosch MED17'], diagramCount: 7 },
      { id: 'wingle5', name: 'وینگل ۵ پیکاپ (تک و دو دیفرانسیل)', years: '۱۳۹۲ - ۱۳۹۶', engine: '2.4L میتسوبیشی 4G69', ecus: ['Delphi MT22.1'], diagramCount: 5 }
    ],
    ecus: [
      { name: 'دلفی MT20U2 / MT22', code: 'MT22', description: 'ایسیو وانت وینگل ۵', pinsCount: 128, commonVehicles: 'Wingle 5, Haval', faultNotes: 'اتصال بدنه ضعیف در پایه های سوکت اصلی' }
    ],
    diagrams: [
      {
        id: 'greatwall-wingle-pinout',
        title: 'پین اوت ایسیو دلفی وینگل ۵',
        category: 'pinout',
        description: 'نقشه سوکت های کامپیوتر موتور میتسوبیشی ۲۴۰۰',
        pins: [
          { pin: '01', color: '#ef4444', label: 'برق ورودی باطری', voltage: '12V', signal: '12V' },
          { pin: '02', color: '#10b981', label: 'اتصال شاسی', voltage: '0V', signal: 'GND' }
        ]
      }
    ]
  },
  {
    id: 'dongfeng',
    name: 'دانگ فنگ',
    englishName: 'Dongfeng',
    country: 'چین',
    modelsCount: 6,
    diagramsCount: 18,
    color: '#dc2626',
    models: [
      { id: 'h30cross', name: 'دانگ فنگ H30 کراس و S30', years: '۱۳۹۵ - ۱۳۹۹', engine: 'TU5 1.6L', ecus: ['Bosch ME7.8.8'], diagramCount: 8 },
      { id: 'shine-max', name: 'شاین مکس و فنگان', years: '۱۴۰۲ - ۱۴۰۳', engine: '1.5 TGDI', ecus: ['Delphi MT62.1'], diagramCount: 6 }
    ],
    ecus: [
      { name: 'بوش ME7.8.8 دانگ فنگ', code: 'ME7.8.8', description: 'ایسیو خودرو H30 کراس با پیشرانه TU5 و گیربکس آیسین', pinsCount: 121, commonVehicles: 'H30 Cross', faultNotes: 'خطای پتانسیومتر دریچه گاز و خطای شبکه با یونیت گیربکس AT' }
    ],
    diagrams: [
      {
        id: 'dongfeng-h30-pinout',
        title: 'پین اوت بوش ME7.8.8 دانگ فنگ H30 کراس',
        category: 'pinout',
        description: 'نقشه برقراری ارتباط با گیربکس اتوماتیک AISIN و سوکت عیب‌یاب',
        pins: [
          { pin: '1', color: '#ef4444', label: 'برق ورودی رله اصلی', voltage: '12V', signal: '+12V' },
          { pin: '33', color: '#3b82f6', label: 'ارتباط CAN گیربکس High', voltage: '2.6V', signal: 'CAN-H' }
        ]
      }
    ]
  },
  {
    id: 'suzuki',
    name: 'سوزوکی',
    englishName: 'Suzuki',
    country: 'ژاپن',
    modelsCount: 4,
    diagramsCount: 16,
    color: '#e11d48',
    models: [
      { id: 'vitara', name: 'سوزوکی گرند ویتارا (۲۰۰۰ و ۲۴۰۰)', years: '۱۳۸۶ - ۱۳۹۸', engine: 'J20A / J24B', ecus: ['Mitsubishi / Denso'], diagramCount: 8 },
      { id: 'kizashi', name: 'سوزوکی کیزاشی', years: '۱۳۹۱ - ۱۳۹۳', engine: '2.4L J24B', ecus: ['Denso'], diagramCount: 6 }
    ],
    ecus: [
      { name: 'میتسوبیشی گرند ویتارا', code: 'Suzuki ECM', description: 'ایسیو ژاپنی گرند ویتارا ۲۴۰۰ مونتاژ ایران خودرو', pinsCount: 154, commonVehicles: 'ویتارا ۲۴۰۰', faultNotes: 'خطای زاویه میل سوپاپ VVT، حساسیت به کثیفی فیلتر روغن' }
    ],
    diagrams: [
      {
        id: 'suzuki-vitara-pinout',
        title: 'دیاگرام کامل گرند ویتارا ۲۴۰۰ سی‌سی',
        category: 'pinout',
        description: 'نقشه سوکت های ۴ گانه به همراه مدار سنسور MAF',
        pins: [
          { pin: 'A01', color: '#ef4444', label: 'تغذیه باطری', voltage: '12V', signal: '+12V' },
          { pin: 'A02', color: '#10b981', label: 'منفی اصلی بدنه', voltage: '0V', signal: 'GND' }
        ]
      }
    ]
  },
  {
    id: 'geely',
    name: 'جیلی',
    englishName: 'Geely',
    country: 'چین',
    modelsCount: 5,
    diagramsCount: 16,
    color: '#b45309',
    models: [
      { id: 'emgrand7', name: 'جیلی امگرند ۷ (EC7 دنده‌ای و اتومات)', years: '۲۰۱۲ - ۲۰۱۵', engine: '1.8L DVVT', ecus: ['Delphi MT80', 'Bosch M7.8'], diagramCount: 7 },
      { id: 'emgrand-x7', name: 'جیلی شاسی بلند X7', years: '۲۰۱۳ - ۲۰۱۵', engine: '2.4L', ecus: ['Delphi MT80'], diagramCount: 6 }
    ],
    ecus: [
      { name: 'دلفی MT80 جیلی', code: 'MT80', description: 'ایسیو امگرند ۷ با دو سوکت ۶۴ پین', pinsCount: 128, commonVehicles: 'امگرند ۷، X7', faultNotes: 'کد خطای P0300 عدم احتراق ناشی از خرابی کوئل دوبل' }
    ],
    diagrams: [
      {
        id: 'geely-emgrand-pinout',
        title: 'پین اوت ایسیو دلفی MT80 جیلی امگرند ۷',
        category: 'pinout',
        description: 'نقشه مدار سنسور دمای آب و سنسور ضربه ناک (Knock Sensor)',
        pins: [
          { pin: 'J1-12', color: '#ef4444', label: 'برق سوئیچ رله', voltage: '12V', signal: 'Relay Output' },
          { pin: 'J2-35', color: '#f59e0b', label: 'سیگنال ناک سنسور', voltage: '0.2-1.5V AC', signal: 'Knock Sensor' }
        ]
      }
    ]
  },
  {
    id: 'faw',
    name: 'فاو',
    englishName: 'FAW',
    country: 'چین',
    modelsCount: 4,
    diagramsCount: 14,
    color: '#2563eb',
    models: [
      { id: 'b50f', name: 'بسترن B50 و B50F', years: '۱۳۹۲ - ۱۳۹۶', engine: '1.8L', ecus: ['Siemens Simos', 'Bosch ME7.8.8'], diagramCount: 7 },
      { id: 'b30', name: 'بسترن B30 گروه بهمن', years: '۱۳۹۶ - ۱۳۹۹', engine: '1.6L', ecus: ['Bosch ME17.8.8'], diagramCount: 7 }
    ],
    ecus: [
      { name: 'بوش ME17.8.8 بسترن B30', code: 'ME17.8.8', description: 'ایسیو مورد استفاده در خودرو بسترن B30', pinsCount: 128, commonVehicles: 'Besturn B30', faultNotes: 'خطای پتانسیومتر پدال گاز پس از نصب کروز کنترل متفرقه' }
    ],
    diagrams: [
      {
        id: 'faw-b30-pinout',
        title: 'نقشه کامل سوکت ECU بسترن B30',
        category: 'pinout',
        description: 'پایه های کنترل دور آرام، رله تهویه مطبوع A/C و فن رادیاتور',
        pins: [
          { pin: '1', color: '#ef4444', label: 'برق دائم ۱۲ ولت', voltage: '12V', signal: '+12V' },
          { pin: '18', color: '#06b6d4', label: 'فرمان رله کمپرسور کولر', voltage: '0V / 12V', signal: 'A/C Relay' }
        ]
      }
    ]
  }
]
