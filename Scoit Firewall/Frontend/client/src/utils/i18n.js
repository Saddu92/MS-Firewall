import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // Detects browser language
  .use(initReactI18next) // Initializes react-i18next
  .init({
    debug: true,
    resources: {
      en: {
        translation: {
          welcome: "Welcome Back",
          email: "Email Address",
          password: "Password",
          login: "Login",
          forgot_password: "Forgot Password?",
          register: "Register",
          footer_text: "Protecting your digital world with cutting-edge security solutions.",
          quick_links: "Quick Links",
          home: "Home",
          service: "Service",
          services: "Services",
          pricing: "Pricing",
          contact: "Contact",
          about: "About",
          help: "Help",
          network: "Network",
          shared_stories: "Shared Stories",
          maintainers: "Maintainers",
          firewall_news: "Firewall News",
          dev_tools: "Developers Tools",
          code_of_conduct: "Code of Conduct",
          follow_us: "Follow Us",
          all_rights_reserved: "All rights reserved.",
          contact_us: "Contact Us",
          placeholder_email: "Your Email",
          placeholder_message: "Your Message",
          send_message: "Send Message",
          error_required: "Both fields are required",
          message_sent: "Message sent successfully!",
          protect_network: "Protect Your Network from Malicious Threats",
          cyber_threats: "Stay one step ahead of cyber threats with our advanced monitoring system. We detect and block malicious activity to keep your online environment safe.",
          learn_more: "Learn More",
          upload_csv: "Upload CSV",
          faq_title: "FAQ",
          faq_firewall_title: "What is a Firewall?",
          faq_firewall_desc: "A firewall is a security system that monitors and controls incoming and outgoing network traffic based on predefined security rules.",
          faq_protection_title: "How does a firewall protect your system?",
          faq_protection_desc: "A firewall acts as a security guard for your network, blocking hackers, malware, and unauthorized access.",
          faq_antivirus_title: "Do I need a firewall if I have antivirus software?",
          faq_antivirus_desc: "Yes! Antivirus detects malware inside your system, while a firewall blocks threats before they reach your device.",
          faq_turn_off_title: "What happens if I turn off my firewall?",
          faq_turn_off_desc: "Disabling your firewall exposes your system to hackers and malware. Only disable it if absolutely necessary.",
          faq_slow_internet_title: "Can a firewall slow down my internet?",
          faq_slow_internet_desc: "Firewalls may slightly impact speed, but modern firewalls are optimized to minimize slowdown.",
          our_services: "Our Services",
          service_description: "We provide a wide range of services to help you stay safe online.",
          network_packet: "Network Packet",
          view_report: "View Report",
          block_address: "Block Address",
          history_of_ip: "History of IP",
          capture_packet: "Capture Packet"
        },
      },
      es: {
        translation: {
          welcome: "Bienvenido de nuevo",
          email: "Dirección de correo electrónico",
          password: "Contraseña",
          login: "Iniciar sesión",
          forgot_password: "¿Olvidaste tu contraseña?",
          register: "Registrarse",
          footer_text: "Protegiendo tu mundo digital con soluciones de seguridad de última generación.",
          quick_links: "Enlaces Rápidos",
          home: "Inicio",
          service: "Servicio",
          services: "Servicios",
          pricing: "Precios",
          contact: "Contacto",
          about: "Acerca de",
          help: "Ayuda",
          network: "Red",
          shared_stories: "Historias Compartidas",
          maintainers: "Mantenedores",
          firewall_news: "Noticias de Firewall",
          dev_tools: "Herramientas para Desarrolladores",
          code_of_conduct: "Código de Conducta",
          follow_us: "Síguenos",
          all_rights_reserved: "Todos los derechos reservados.",
          contact_us: "Contáctenos",
          placeholder_email: "Tu correo electrónico",
          placeholder_message: "Tu mensaje",
          send_message: "Enviar mensaje",
          error_required: "Ambos campos son obligatorios",
          message_sent: "¡Mensaje enviado con éxito!",
          protect_network: "Protege tu red de amenazas maliciosas",
          cyber_threats: "Mantente un paso adelante de las amenazas cibernéticas con nuestro avanzado sistema de monitoreo. Detectamos y bloqueamos actividades maliciosas para mantener tu entorno en línea seguro.",
          learn_more: "Aprender más",
          upload_csv: "Subir CSV",
          faq_title: "Preguntas Frecuentes",
          faq_firewall_title: "¿Qué es un firewall?",
          faq_firewall_desc: "Un firewall es un sistema de seguridad que monitorea y controla el tráfico de red entrante y saliente según reglas de seguridad predefinidas.",
          faq_protection_title: "¿Cómo protege un firewall tu sistema?",
          faq_protection_desc: "Un firewall actúa como un guardia de seguridad para tu red, bloqueando hackers, malware y accesos no autorizados.",
          faq_antivirus_title: "¿Necesito un firewall si ya tengo un antivirus?",
          faq_antivirus_desc: "¡Sí! El antivirus detecta y elimina malware dentro de tu sistema, mientras que un firewall bloquea amenazas antes de que lleguen a tu dispositivo.",
          faq_turn_off_title: "¿Qué pasa si desactivo mi firewall?",
          faq_turn_off_desc: "Desactivar tu firewall expone tu sistema a hackers, virus y accesos no autorizados. Solo desactívalo si es absolutamente necesario.",
          faq_slow_internet_title: "¿Un firewall puede ralentizar mi internet?",
          faq_slow_internet_desc: "Los firewalls pueden afectar levemente la velocidad, pero los modernos están optimizados para minimizar este impacto.",
          our_services: "Nuestros Servicios",
          service_description: "Brindamos una amplia gama de servicios para ayudarlo a mantenerse seguro en línea.",
          network_packet: "Paquete de Red",
          view_report: "Ver Informe",
          block_address: "Bloquear Dirección",
          history_of_ip: "Historial de IP",
          capture_packet: "Capturar Paquete"
        },
      },
      fr: {
        translation: {
          welcome: "Bon retour",
          email: "Adresse e-mail",
          password: "Mot de passe",
          login: "Se connecter",
          forgot_password: "Mot de passe oublié?",
          register: "S'inscrire",
          footer_text: "Protégez votre monde numérique avec des solutions de sécurité de pointe.",
          quick_links: "Liens Rapides",
          home: "Accueil",
          service: "Service",
          services:"Services",
          pricing: "Tarification",
          contact: "Contact",
          about: "À propos",
          help: "Aide",
          network: "Réseau",
          shared_stories: "Histoires Partagées",
          maintainers: "Mainteneurs",
          firewall_news: "Actualités de Firewall",
          dev_tools: "Outils Développeurs",
          code_of_conduct: "Code de Conduite",
          follow_us: "Suivez-nous",
          all_rights_reserved: "Tous droits réservés.",
          contact_us: "Nous contacter",
          placeholder_email: "Votre e-mail",
          placeholder_message: "Votre message",
          send_message: "Envoyer le message",
          error_required: "Tous les champs sont obligatoires",
          message_sent: "Message envoyé avec succès !",
          protect_network: "Protégez votre réseau contre les menaces malveillantes",
          cyber_threats: "Restez un pas en avant des cybermenaces avec notre système de surveillance avancé. Nous détectons et bloquons les activités malveillantes pour sécuriser votre environnement en ligne.",
          learn_more: "En savoir plus",
          upload_csv: "Télécharger CSV",
          faq_title: "FAQ",
          faq_firewall_title: "Qu'est-ce qu'un pare-feu?",
          faq_firewall_desc: "Un pare-feu est un système de sécurité qui surveille et contrôle le trafic réseau entrant et sortant en fonction de règles de sécurité prédéfinies.",
          faq_protection_title: "Comment un pare-feu protège-t-il votre système?",
          faq_protection_desc: "Un pare-feu agit comme un garde de sécurité pour votre réseau, bloquant les pirates, les logiciels malveillants et les accès non autorisés.",
          faq_antivirus_title: "Ai-je besoin d'un pare-feu si j'ai un antivirus?",
          faq_antivirus_desc: "Oui! L'antivirus détecte et supprime les logiciels malveillants dans votre système, tandis qu'un pare-feu bloque les menaces avant qu'elles n'atteignent votre appareil.",
          faq_turn_off_title: "Que se passe-t-il si je désactive mon pare-feu?",
          faq_turn_off_desc: "Désactiver votre pare-feu expose votre système aux pirates et aux logiciels malveillants. Ne le désactivez que si c'est absolument nécessaire.",
          faq_slow_internet_title: "Un pare-feu peut-il ralentir mon Internet?",
          faq_slow_internet_desc: "Les pare-feux peuvent légèrement affecter la vitesse, mais les pare-feux modernes sont optimisés pour minimiser l'impact.",
          our_services: "Nos Services",
          service_description: "Nous proposons une large gamme de services pour vous aider à rester en sécurité en ligne.",
          network_packet: "Paquet Réseau",
          view_report: "Voir le Rapport",
          block_address: "Bloquer l'Adresse",
          history_of_ip: "Historique IP",
          capture_packet: "Capturer le Paquet"
        
        },
      },
      de: {
        translation: {
          welcome: "Willkommen zurück",
          email: "E-Mail-Adresse",
          password: "Passwort",
          login: "Einloggen",
          forgot_password: "Passwort vergessen?",
          register: "Registrieren",
          footer_text: "Schützen Sie Ihre digitale Welt mit modernsten Sicherheitslösungen.",
          quick_links: "Schnellzugriff",
          home: "Startseite",
          service: "Service",
          pricing: "Preise",
          contact: "Kontakt",
          about: "Über uns",
          help: "Hilfe",
          network: "Netzwerk",
          shared_stories: "Geteilte Geschichten",
          maintainers: "Betreuer",
          firewall_news: "Firewall Nachrichten",
          dev_tools: "Entwicklerwerkzeuge",
          code_of_conduct: "Verhaltenskodex",
          follow_us: "Folgen Sie uns",
          all_rights_reserved: "Alle Rechte vorbehalten.",
          contact_us: "Kontaktieren Sie uns",
          placeholder_email: "Ihre E-Mail",
          placeholder_message: "Ihre Nachricht",
          send_message: "Nachricht senden",
          error_required: "Alle Felder sind erforderlich",
          message_sent: "Nachricht erfolgreich gesendet!",
          protect_network: "Schützen Sie Ihr Netzwerk vor bösartigen Bedrohungen",
          cyber_threats: "Bleiben Sie mit unserem fortschrittlichen Überwachungssystem Cyber-Bedrohungen einen Schritt voraus. Wir erkennen und blockieren bösartige Aktivitäten, um Ihre Online-Umgebung sicher zu halten.",
          learn_more: "Mehr erfahren",
          upload_csv: "CSV hochladen",
          faq_title: "Häufig gestellte Fragen",
          faq_firewall_title: "Was ist eine Firewall?",
          faq_firewall_desc: "Eine Firewall ist ein Sicherheitssystem, das den eingehenden und ausgehenden Netzwerkverkehr gemäß vordefinierten Sicherheitsregeln überwacht und steuert.",
          faq_protection_title: "Wie schützt eine Firewall Ihr System?",
          faq_protection_desc: "Eine Firewall fungiert als Sicherheitswächter für Ihr Netzwerk, indem sie Hacker, Malware und unbefugten Zugriff blockiert.",
          faq_antivirus_title: "Brauche ich eine Firewall, wenn ich ein Antivirenprogramm habe?",
          faq_antivirus_desc: "Ja! Ein Antivirenprogramm erkennt und entfernt Malware in Ihrem System, während eine Firewall Bedrohungen blockiert, bevor sie Ihr Gerät erreichen.",
          faq_turn_off_title: "Was passiert, wenn ich meine Firewall deaktiviere?",
          faq_turn_off_desc: "Das Deaktivieren Ihrer Firewall setzt Ihr System Hackern, Viren und unbefugtem Zugriff aus. Deaktivieren Sie sie nur, wenn es unbedingt notwendig ist.",
          faq_slow_internet_title: "Kann eine Firewall mein Internet verlangsamen?",
          faq_slow_internet_desc: "Firewalls können die Geschwindigkeit leicht beeinflussen, aber moderne Firewalls sind optimiert, um die Auswirkungen zu minimieren.",
          our_services: "Unsere Dienstleistungen",
          service_description: "Wir bieten eine breite Palette von Dienstleistungen an, um Ihre Sicherheit im Internet zu gewährleisten.",
          network_packet: "Netzwerkpaket",
          view_report: "Bericht Ansehen",
          block_address: "Adresse Blockieren",
          history_of_ip: "IP-Verlauf",
          capture_packet: "Paket Erfassen"
        },
      },
      hi: {
        translation: {
          welcome: "वापसी पर स्वागत है",
          email: "ईमेल पता",
          password: "पासवर्ड",
          login: "लॉगिन करें",
          forgot_password: "पासवर्ड भूल गए?",
          register: "रजिस्टर करें",
          footer_text: "अत्याधुनिक सुरक्षा समाधान के साथ अपने डिजिटल दुनिया की रक्षा करें।",
          quick_links: "त्वरित लिंक",
          home: "मुखपृष्ठ",
          service: "सेवा",
          services: "सेवाएँ",
          pricing: "मूल्य निर्धारण",
          contact: "संपर्क करें",
          about: "हमारे बारे में",
          help: "सहायता",
          network: "नेटवर्क",
          shared_stories: "साझा कहानियाँ",
          maintainers: "रखरखाव करने वाले",
          firewall_news: "फ़ायरवॉल समाचार",
          dev_tools: "डेवलपर्स टूल्स",
          code_of_conduct: "आचार संहिता",
          follow_us: "हमें फ़ॉलो करें",
          all_rights_reserved: "सभी अधिकार सुरक्षित।",
          contact_us: "संपर्क करें",
          placeholder_email: "आपका ईमेल",
          placeholder_message: "आपका संदेश",
          send_message: "संदेश भेजें",
          error_required: "दोनों फ़ील्ड आवश्यक हैं",
          message_sent: "संदेश सफलतापूर्वक भेजा गया!",
          protect_network: "अपने नेटवर्क को खतरनाक खतरों से सुरक्षित रखें",
          cyber_threats: "हमारी उन्नत निगरानी प्रणाली के साथ साइबर खतरों से एक कदम आगे रहें। हम दुर्भावनापूर्ण गतिविधि का पता लगाते हैं और इसे अवरुद्ध करते हैं ताकि आपका ऑनलाइन वातावरण सुरक्षित बना रहे।",
          learn_more: "अधिक जानें",
          upload_csv: "CSV अपलोड करें",
          faq_title: "सामान्य प्रश्न",
          faq_firewall_title: "फ़ायरवॉल क्या है?",
          faq_firewall_desc: "फ़ायरवॉल एक सुरक्षा प्रणाली है जो पूर्वनिर्धारित नियमों के आधार पर आने-जाने वाले नेटवर्क ट्रैफ़िक की निगरानी और नियंत्रण करता है।",
          faq_protection_title: "फ़ायरवॉल आपके सिस्टम की सुरक्षा कैसे करता है?",
          faq_protection_desc: "फ़ायरवॉल आपके नेटवर्क के लिए एक सुरक्षा गार्ड की तरह काम करता है, जो हैकर्स, मैलवेयर और अनधिकृत पहुंच को रोकता है।",
          faq_antivirus_title: "अगर मेरे पास एंटीवायरस है तो क्या मुझे फ़ायरवॉल की आवश्यकता है?",
          faq_antivirus_desc: "हाँ! एंटीवायरस आपके सिस्टम में मैलवेयर का पता लगाता है और उसे हटाता है, जबकि फ़ायरवॉल खतरों को आपके डिवाइस तक पहुँचने से पहले ही रोकता है।",
          faq_turn_off_title: "अगर मैं अपना फ़ायरवॉल बंद कर दूं तो क्या होगा?",
          faq_turn_off_desc: "फ़ायरवॉल को बंद करने से आपका सिस्टम हैकर्स, वायरस और अनधिकृत पहुंच के लिए असुरक्षित हो जाता है। इसे केवल तब ही बंद करें जब यह अत्यधिक आवश्यक हो।",
          faq_slow_internet_title: "क्या फ़ायरवॉल मेरी इंटरनेट स्पीड को धीमा कर सकता है?",
          faq_slow_internet_desc: "फ़ायरवॉल थोड़ी बहुत स्पीड को प्रभावित कर सकते हैं, लेकिन आधुनिक फ़ायरवॉल न्यूनतम प्रभाव के लिए अनुकूलित होते हैं।",
          our_services: "हमारी सेवाएँ",
          service_description: "हम आपको ऑनलाइन सुरक्षित रखने के लिए विभिन्न प्रकार की सेवाएँ प्रदान करते हैं।",
          network_packet: "नेटवर्क पैकेट",
          view_report: "रिपोर्ट देखें",
          block_address: "पता अवरुद्ध करें",
          history_of_ip: "आईपी इतिहास",
          capture_packet: "पैकेट कैप्चर करें"
        },
      },
      ar: {
        translation: {
          welcome: "مرحبًا بعودتك",
          email: "عنوان البريد الإلكتروني",
          password: "كلمة المرور",
          login: "تسجيل الدخول",
          forgot_password: "هل نسيت كلمة المرور؟",
          register: "تسجيل",
          footer_text: "حماية عالمك الرقمي بأحدث حلول الأمان.",
          quick_links: "روابط سريعة",
          home: "الصفحة الرئيسية",
          service: "الخدمات",
          services: " الخدمات",
          pricing: "التسعير",
          contact: "اتصل بنا",
          about: "معلومات عنا",
          help: "مساعدة",
          network: "الشبكة",
          shared_stories: "قصص مشتركة",
          maintainers: "الصيانة",
          firewall_news: "أخبار الجدار الناري",
          dev_tools: "أدوات المطورين",
          code_of_conduct: "مدونة السلوك",
          follow_us: "تابعنا",
          all_rights_reserved: "جميع الحقوق محفوظة.",
          contact_us: "اتصل بنا",
          placeholder_email: "بريدك الإلكتروني",
          placeholder_message: "رسالتك",
          send_message: "إرسال رسالة",
          error_required: "جميع الحقول مطلوبة",
          message_sent: "تم إرسال الرسالة بنجاح!",
          protect_network: "حماية شبكتك من التهديدات الضارة",
          cyber_threats: "ابقَ متقدمًا بخطوة على التهديدات الإلكترونية من خلال نظام المراقبة المتقدم لدينا. نقوم باكتشاف النشاط الضار وحظره للحفاظ على أمان بيئتك عبر الإنترنت.",
          learn_more: "اعرف المزيد",
          upload_csv: "رفع ملف CSV",
          faq_title: "الأسئلة الشائعة",
          faq_firewall_title: "ما هو جدار الحماية؟",
          faq_firewall_desc: "جدار الحماية هو نظام أمني يراقب حركة المرور الواردة والصادرة وفقًا للقواعد المحددة.",
          faq_protection_title: "كيف يحمي جدار الحماية نظامك؟",
          faq_protection_desc: "يعمل جدار الحماية كحارس أمني، حيث يمنع المخترقين والبرامج الضارة والوصول غير المصرح به.",
          faq_antivirus_title: "هل أحتاج إلى جدار حماية إذا كان لدي برنامج مكافحة الفيروسات؟",
          faq_antivirus_desc: "نعم! يكشف برنامج مكافحة الفيروسات عن البرامج الضارة، بينما يمنع جدار الحماية التهديدات قبل أن تصل إلى جهازك.",
          faq_turn_off_title: "ماذا يحدث إذا قمت بإيقاف تشغيل جدار الحماية؟",
          faq_turn_off_desc: "سيكون جهازك عرضة للهجمات الإلكترونية. لا تقم بتعطيله إلا إذا كان ذلك ضروريًا للغاية.",
          faq_slow_internet_title: "هل يمكن أن يؤدي جدار الحماية إلى إبطاء الإنترنت؟",
          faq_slow_internet_desc: "قد يؤثر جدار الحماية على السرعة قليلاً، لكن الجدران النارية الحديثة مُحسنة لتقليل التأثير.",
          our_services: "خدماتنا",
          service_description: "نحن نقدم مجموعة واسعة من الخدمات لمساعدتك على البقاء آمنًا عبر الإنترنت.",
          network_packet: "حزمة الشبكة",
          view_report: "عرض التقرير",
          block_address: "حظر العنوان",
          history_of_ip: "تاريخ IP",
          capture_packet: "التقاط الحزمة"
        },
      },
      ru: {
        translation: {
          welcome: "С возвращением",
          email: "Электронная почта",
          password: "Пароль",
          login: "Войти",
          forgot_password: "Забыли пароль?",
          register: "Регистрация",
          footer_text: "Защитите свой цифровой мир с передовыми решениями безопасности.",
          quick_links: "Быстрые ссылки",
          home: "Главная",
          service: "Услуги",
          services:"Услуги",
          pricing: "Цены",
          contact: "Контакты",
          about: "О нас",
          help: "Помощь",
          network: "Сеть",
          shared_stories: "Истории пользователей",
          maintainers: "Разработчики",
          firewall_news: "Новости брандмауэра",
          dev_tools: "Инструменты разработчика",
          code_of_conduct: "Кодекс поведения",
          follow_us: "Следите за нами",
          all_rights_reserved: "Все права защищены.",
          contact_us: "Свяжитесь с нами",
          placeholder_email: "Ваш адрес электронной почты",
          placeholder_message: "Ваше сообщение",
          send_message: "Отправить сообщение",
          error_required: "Все поля обязательны",
          message_sent: "Сообщение успешно отправлено!",
          protect_network: "Защитите свою сеть от вредоносных угроз",
          cyber_threats: "Будьте на шаг впереди киберугроз с нашей передовой системой мониторинга. Мы обнаруживаем и блокируем вредоносную активность, чтобы обеспечить безопасность вашей онлайн-среды.",
          learn_more: "Узнать больше",
          upload_csv: "Загрузить CSV",
          faq_title: "Часто задаваемые вопросы",
          faq_firewall_title: "Что такое брандмауэр?",
          faq_firewall_desc: "Брандмауэр – это система безопасности, контролирующая входящий и исходящий трафик на основе заданных правил.",
          faq_protection_title: "Как брандмауэр защищает вашу систему?",
          faq_protection_desc: "Брандмауэр действует как охранник сети, блокируя хакеров, вредоносные программы и несанкционированный доступ.",
          faq_antivirus_title: "Нужен ли мне брандмауэр, если у меня есть антивирус?",
          faq_antivirus_desc: "Да! Антивирус удаляет вредоносное ПО, а брандмауэр предотвращает угрозы до их проникновения в систему.",
          faq_turn_off_title: "Что произойдет, если отключить брандмауэр?",
          faq_turn_off_desc: "Вы подвергаете систему атакам хакеров и вирусов. Отключайте его только в крайнем случае.",
          faq_slow_internet_title: "Может ли брандмауэр замедлить интернет?",
          faq_slow_internet_desc: "Брандмауэры могут немного снижать скорость, но современные решения минимизируют влияние.",
          our_services: "Наши Услуги",
          service_description: "Мы предоставляем широкий спектр услуг для обеспечения вашей безопасности в Интернете.",
          network_packet: "Сетевой Пакет",
          view_report: "Просмотр Отчета",
          block_address: "Блокировка Адреса",
          history_of_ip: "История IP",
          capture_packet: "Захват Пакетов"

        },
      },
      pt: {
        translation: {
          welcome: "Bem-vindo de volta",
          email: "Endereço de e-mail",
          password: "Senha",
          login: "Entrar",
          forgot_password: "Esqueceu a senha?",
          register: "Registrar",
          footer_text: "Proteja seu mundo digital com soluções de segurança avançadas.",
          quick_links: "Links rápidos",
          home: "Início",
          service: "Serviços",
          services: "Serviços",
          pricing: "Preços",
          contact: "Contato",
          about: "Sobre nós",
          help: "Ajuda",
          network: "Rede",
          shared_stories: "Histórias compartilhadas",
          maintainers: "Mantenedores",
          firewall_news: "Notícias do Firewall",
          dev_tools: "Ferramentas para desenvolvedores",
          code_of_conduct: "Código de Conduta",
          follow_us: "Siga-nos",
          all_rights_reserved: "Todos os direitos reservados.",
          contact_us: "Fale Conosco",
          placeholder_email: "Seu e-mail",
          placeholder_message: "Sua mensagem",
          send_message: "Enviar mensagem",
          error_required: "Todos os campos são obrigatórios",
          message_sent: "Mensagem enviada com sucesso!",
          protect_network: "Proteja sua rede contra ameaças maliciosas",
          cyber_threats: "Fique um passo à frente das ameaças cibernéticas com nosso sistema avançado de monitoramento. Detectamos e bloqueamos atividades maliciosas para manter seu ambiente online seguro.",
          learn_more: "Saiba mais",
          upload_csv: "Carregar CSV",
          faq_title: "Perguntas Frequentes",
          faq_firewall_title: "O que é um firewall?",
          faq_firewall_desc: "Um firewall é um sistema de segurança que monitora e controla o tráfego de rede de entrada e saída com base em regras de segurança predefinidas.",
          faq_protection_title: "Como um firewall protege seu sistema?",
          faq_protection_desc: "Um firewall age como um guarda de segurança para sua rede, bloqueando hackers, malware e acessos não autorizados.",
          faq_antivirus_title: "Preciso de um firewall se já tenho um antivírus?",
          faq_antivirus_desc: "Sim! O antivírus detecta e remove malware dentro do seu sistema, enquanto o firewall bloqueia ameaças antes que cheguem ao seu dispositivo.",
          faq_turn_off_title: "O que acontece se eu desligar meu firewall?",
          faq_turn_off_desc: "Desativar seu firewall expõe seu sistema a hackers, vírus e acessos não autorizados. Só desative se for absolutamente necessário.",
          faq_slow_internet_title: "Um firewall pode deixar minha internet lenta?",
          faq_slow_internet_desc: "Firewalls podem afetar levemente a velocidade, mas os modernos são otimizados para minimizar esse impacto.",
          our_services: "Nossos Serviços",
          service_description: "Oferecemos uma ampla gama de serviços para ajudá-lo a se manter seguro online.",
          network_packet: "Pacote de Rede",
          view_report: "Ver Relatório",
          block_address: "Bloquear Endereço",
          history_of_ip: "Histórico de IP",
          capture_packet: "Capturar Pacote"

        },
      },
      it: {
        translation: {
          welcome: "Bentornato",
          email: "Indirizzo e-mail",
          password: "Password",
          login: "Accedi",
          forgot_password: "Hai dimenticato la password?",
          register: "Registrati",
          footer_text: "Proteggi il tuo mondo digitale con soluzioni di sicurezza all'avanguardia.",
          quick_links: "Link veloci",
          home: "Pagina Iniziale",
          service: "Servizo",
          services: "Servizi",
          pricing: "Prezzi",
          contact: "Contatti",
          about: "Chi siamo",
          help: "Aiuto",
          network: "Rete",
          shared_stories: "Storie condivise",
          maintainers: "Manutentori",
          firewall_news: "Notizie sul Firewall",
          dev_tools: "Strumenti per sviluppatori",
          code_of_conduct: "Codice di condotta",
          follow_us: "Seguici",
          all_rights_reserved: "Tutti i diritti riservati.",
          contact_us: "Contattaci",
          placeholder_email: "La tua email",
          placeholder_message: "Il tuo messaggio",
          send_message: "Invia messaggio",
          error_required: "Tutti i campi sono obbligatori",
          message_sent: "Messaggio inviato con successo!",
          protect_network: "Proteggi la tua rete dalle minacce dannose",
          cyber_threats: "Rimani un passo avanti rispetto alle minacce informatiche con il nostro avanzato sistema di monitoraggio. Rileviamo e blocchiamo le attività dannose per mantenere il tuo ambiente online sicuro.",
          learn_more: "Scopri di più",
          upload_csv: "Carica CSV",
          faq_title: "Domande frequenti",
          faq_firewall_title: "Cos'è un firewall?",
          faq_firewall_desc: "Un firewall è un sistema di sicurezza che monitora e controlla il traffico di rete in entrata e in uscita in base a regole predefinite.",
          faq_protection_title: "Come protegge il firewall il tuo sistema?",
          faq_protection_desc: "Il firewall agisce come una guardia di sicurezza, bloccando hacker, malware e accessi non autorizzati.",
          faq_antivirus_title: "Ho bisogno di un firewall se ho un antivirus?",
          faq_antivirus_desc: "Sì! L'antivirus rileva i malware, mentre il firewall blocca le minacce prima che raggiungano il dispositivo.",
          faq_turn_off_title: "Cosa succede se disattivo il firewall?",
          faq_turn_off_desc: "Il tuo sistema sarà esposto agli attacchi. Disattivalo solo se strettamente necessario.",
          faq_slow_internet_title: "Il firewall può rallentare Internet?",
          faq_slow_internet_desc: "I firewall possono influire leggermente sulla velocità, ma quelli moderni sono ottimizzati per ridurre al minimo l'impatto.",
          our_services: "I Nostri Servizi",
          service_description: "Offriamo una vasta gamma di servizi per aiutarti a rimanere al sicuro online.",
          network_packet: "Pacchetto di Rete",
          view_report: "Visualizza Rapporto",
          block_address: "Blocca Indirizzo",
          history_of_ip: "Cronologia IP",
          capture_packet: "Cattura Pacchetto"
                
        },
      },
                  
      
    },
    fallbackLng: "en", // Default language
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
