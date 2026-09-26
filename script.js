/* =====================================================
   AGRISARTHI - LANGUAGE + NAVIGATION + FEEDBACK
===================================================== */

const menuItems = document.querySelectorAll(".menu-item");
const pages = document.querySelectorAll(".page");
const response = document.getElementById("response");
const language = document.getElementById("language");
const settingsLanguage = document.getElementById("settingsLanguage");

/* =====================================================
   MULTI-LANGUAGE UI
   The selected language changes the dashboard text and
   is also used by AgriVoice speech recognition.
===================================================== */

const translations = {
    "en-IN": {
        dashboard: "DASHBOARD", appName: "AgriSarthi", aiOnline: "AI Online",
        navAlerts: "Alerts & Advisory", navVoice: "Ask AgriVoice", navWeather: "Weather Center", navProfile: "My Profile",
        navCrop: "Crop History", navSensor: "Sensor Dashboard", navSettings: "Settings", navFeedback: "Feedback",
        alertsTitle: "Alerts & Advisory", alertsSubtitle: "Important updates and recommendations for your farm",
        pestTitle: "Pest Alert", pestText: "Monitor your crops regularly for signs of pest activity.",
        irrigationTitle: "Irrigation Advisory", irrigationText: "Check soil moisture before your next irrigation cycle.",
        cropAdvisoryTitle: "Crop Advisory", cropAdvisoryText: "Monitor crop growth and field conditions regularly.",
        voiceTitle: "Ask AgriVoice", voiceSubtitle: "Speak about your crop or capture an image",
        tapSpeak: "Tap to Speak", liveCamera: "Live Camera", capture: "Capture", closeCamera: "Close Camera",
        selectLanguage: "Select Language", weatherTitle: "Weather Center",
        weatherSubtitle: "Current weather information for your farm", partlyCloudy: "Partly Cloudy",
        humidity: "Humidity", rainfall: "Rainfall", wind: "Wind", forecastTitle: "3-Day Forecast",
        today: "Today", tomorrow: "Tomorrow", day3: "Day 3", cropTitle: "Crop History",
        cropSubtitle: "Previous crops and farming records", cropHeader: "Crop", seasonHeader: "Season",
        sowingHeader: "Sowing Date", statusHeader: "Status", monsoon: "Monsoon", harvested: "Harvested",
        growing: "Growing", winter: "Winter", sensorTitle: "Sensor Dashboard",
        sensorSubtitle: "Monitor important farm conditions", soilMoisture: "Soil Moisture", good: "Good",
        temperature: "Temperature", normal: "Normal", soilPh: "Soil pH", healthy: "Healthy",
        airHumidity: "Air Humidity", settingsTitle: "Settings", settingsSubtitle: "Manage your AgriSarthi preferences",
        languageSetting: "Language", chooseLanguage: "Choose your preferred language", notifications: "Notifications",
        receiveAlerts: "Receive farming alerts", aiAssistance: "AI Assistance", enableVoice: "Enable AgriVoice assistance",
        readyResponse: "Your AI farming assistant is ready.",
        feedbackTitle: "Feedback", feedbackSubtitle: "Tell us how AgriSarthi can serve farmers better",
        ratingLabel: "How would you rate your experience?", categoryLabel: "Feedback type",
        generalFeedback: "General feedback", featureRequest: "Feature request", bugReport: "Report a problem",
        advisoryFeedback: "Advisory quality", messageLabel: "Your feedback",
        feedbackPlaceholder: "Share your suggestions or experience...", submitFeedback: "Submit Feedback",
        thankYou: "Thank you for your feedback!", feedbackSaved: "Your response has been saved on this device.",
        chooseRating: "Please select a rating.", enterFeedback: "Please enter your feedback.",
        feedbackSuccess: "Feedback submitted successfully. Thank you!", listening: "Listening...",
        tapToSpeak: "Tap to Speak", listeningQuestion: "Listening to your question...",
        voiceUnsupported: "Voice recognition is not supported. Please use Google Chrome.",
        voiceError: "Sorry, I couldn't understand. Please try again.",
        cameraReady: "Camera is ready. Capture a crop image.", cameraError: "Unable to access camera. Please allow camera permission.",
        cameraNotActive: "Camera is not active.", imageCaptured: "Crop image captured successfully.", cameraClosed: "Camera closed.", profileTitle: "My Farmer Profile", profileSubtitle: "Save your farm details on this device for a personalized dashboard.", profileName: "Farmer name", profileFarm: "Farm name", profileVillage: "Village / Location", profileCrop: "Main crop", profileLand: "Land size (acres)", profilePhone: "Phone (optional)", saveProfile: "Save Profile", editProfile: "Edit Profile", farmerId: "Farmer ID", profileFarmLabel: "Farm", profileLocationLabel: "Location", profileCropLabel: "Main Crop", profileLandLabel: "Land Size", profilePhoneLabel: "Phone", notProvided: "Not provided", acres: "acres", loginTitle: "Farmer Login", loginSubtitle: "Create a simple farmer profile so your saved details stay available on this device.", loginExistingSubtitle: "Enter your Farmer ID to access your saved profile on this device.", loginName: "Farmer name", loginId: "Farmer ID", loginButton: "Login / Create Profile", loginExistingButton: "Login", cancel: "Cancel"
    },
    "hi-IN": {
        dashboard: "डैशबोर्ड", appName: "एग्रीसारथी", aiOnline: "AI ऑनलाइन",
        navAlerts: "अलर्ट और सलाह", navVoice: "एग्रीवॉइस से पूछें", navWeather: "मौसम केंद्र", navProfile: "मेरी प्रोफ़ाइल",
        navCrop: "फसल इतिहास", navSensor: "सेंसर डैशबोर्ड", navSettings: "सेटिंग्स", navFeedback: "प्रतिक्रिया",
        alertsTitle: "अलर्ट और सलाह", alertsSubtitle: "आपके खेत के लिए महत्वपूर्ण अपडेट और सुझाव",
        pestTitle: "कीट अलर्ट", pestText: "कीट गतिविधि के संकेतों के लिए फसलों की नियमित निगरानी करें।",
        irrigationTitle: "सिंचाई सलाह", irrigationText: "अगली सिंचाई से पहले मिट्टी की नमी जांचें।",
        cropAdvisoryTitle: "फसल सलाह", cropAdvisoryText: "फसल की वृद्धि और खेत की स्थिति की नियमित निगरानी करें।",
        voiceTitle: "एग्रीवॉइस से पूछें", voiceSubtitle: "अपनी फसल के बारे में बोलें या तस्वीर लें",
        tapSpeak: "बोलने के लिए टैप करें", liveCamera: "लाइव कैमरा", capture: "तस्वीर लें", closeCamera: "कैमरा बंद करें",
        selectLanguage: "भाषा चुनें", weatherTitle: "मौसम केंद्र", weatherSubtitle: "आपके खेत की वर्तमान मौसम जानकारी",
        partlyCloudy: "आंशिक रूप से बादल", humidity: "नमी", rainfall: "वर्षा", wind: "हवा", forecastTitle: "3 दिन का पूर्वानुमान",
        today: "आज", tomorrow: "कल", day3: "तीसरा दिन", cropTitle: "फसल इतिहास", cropSubtitle: "पिछली फसलें और खेती के रिकॉर्ड",
        cropHeader: "फसल", seasonHeader: "मौसम", sowingHeader: "बुवाई की तारीख", statusHeader: "स्थिति", monsoon: "मानसून",
        harvested: "कटाई पूरी", growing: "बढ़ रही है", winter: "सर्दी", sensorTitle: "सेंसर डैशबोर्ड",
        sensorSubtitle: "खेत की महत्वपूर्ण स्थितियों की निगरानी करें", soilMoisture: "मिट्टी की नमी", good: "अच्छी",
        temperature: "तापमान", normal: "सामान्य", soilPh: "मिट्टी का pH", healthy: "स्वस्थ", airHumidity: "हवा की नमी",
        settingsTitle: "सेटिंग्स", settingsSubtitle: "एग्रीसारथी की प्राथमिकताएं प्रबंधित करें", languageSetting: "भाषा",
        chooseLanguage: "अपनी पसंदीदा भाषा चुनें", notifications: "सूचनाएं", receiveAlerts: "खेती के अलर्ट प्राप्त करें",
        aiAssistance: "AI सहायता", enableVoice: "एग्रीवॉइस सहायता सक्षम करें", readyResponse: "आपका AI कृषि सहायक तैयार है।",
        feedbackTitle: "प्रतिक्रिया", feedbackSubtitle: "बताएं कि एग्रीसारथी किसानों की बेहतर सेवा कैसे कर सकता है",
        ratingLabel: "आप अपने अनुभव को कितनी रेटिंग देंगे?", categoryLabel: "प्रतिक्रिया का प्रकार",
        generalFeedback: "सामान्य प्रतिक्रिया", featureRequest: "फीचर का सुझाव", bugReport: "समस्या बताएं", advisoryFeedback: "सलाह की गुणवत्ता",
        messageLabel: "आपकी प्रतिक्रिया", feedbackPlaceholder: "अपने सुझाव या अनुभव साझा करें...", submitFeedback: "प्रतिक्रिया भेजें",
        thankYou: "आपकी प्रतिक्रिया के लिए धन्यवाद!", feedbackSaved: "आपकी प्रतिक्रिया इस डिवाइस पर सेव हो गई है।",
        chooseRating: "कृपया रेटिंग चुनें।", enterFeedback: "कृपया अपनी प्रतिक्रिया लिखें।", feedbackSuccess: "प्रतिक्रिया सफलतापूर्वक भेजी गई। धन्यवाद!",
        listening: "सुन रहा है...", tapToSpeak: "बोलने के लिए टैप करें", listeningQuestion: "आपका प्रश्न सुना जा रहा है...",
        voiceUnsupported: "वॉइस रिकग्निशन उपलब्ध नहीं है। कृपया Google Chrome का उपयोग करें।", voiceError: "माफ कीजिए, मैं समझ नहीं पाया। फिर से प्रयास करें।",
        cameraReady: "कैमरा तैयार है। फसल की तस्वीर लें।", cameraError: "कैमरा नहीं खुल सका। कृपया कैमरा अनुमति दें।",
        cameraNotActive: "कैमरा सक्रिय नहीं है।", imageCaptured: "फसल की तस्वीर सफलतापूर्वक ली गई।", profileTitle: "मेरी किसान प्रोफ़ाइल", profileSubtitle: "व्यक्तिगत डैशबोर्ड के लिए अपने खेत की जानकारी इस डिवाइस पर सहेजें।", profileName: "किसान का नाम", profileFarm: "खेत का नाम", profileVillage: "गाँव / स्थान", profileCrop: "मुख्य फसल", profileLand: "भूमि का आकार (एकड़)", profilePhone: "फोन (वैकल्पिक)", saveProfile: "प्रोफ़ाइल सहेजें", editProfile: "प्रोफ़ाइल संपादित करें", farmerId: "किसान आईडी", profileFarmLabel: "खेत", profileLocationLabel: "स्थान", profileCropLabel: "मुख्य फसल", profileLandLabel: "भूमि का आकार", profilePhoneLabel: "फोन", notProvided: "उपलब्ध नहीं", acres: "एकड़", loginExistingSubtitle: "अपनी सहेजी हुई प्रोफ़ाइल खोलने के लिए किसान आईडी दर्ज करें।", loginExistingButton: "लॉगिन करें", cameraClosed: "कैमरा बंद है।"
    },
    "mr-IN": {
        dashboard: "डॅशबोर्ड", appName: "अ‍ॅग्रीसारथी", aiOnline: "AI ऑनलाइन",
        navAlerts: "सूचना आणि सल्ला", navVoice: "अ‍ॅग्रीव्हॉइसला विचारा", navWeather: "हवामान केंद्र", navProfile: "माझी प्रोफाइल",
        navCrop: "पीक इतिहास", navSensor: "सेन्सर डॅशबोर्ड", navSettings: "सेटिंग्ज", navFeedback: "अभिप्राय",
        alertsTitle: "सूचना आणि सल्ला", alertsSubtitle: "तुमच्या शेतासाठी महत्त्वाचे अपडेट्स आणि शिफारसी",
        pestTitle: "किडीचा इशारा", pestText: "किडीच्या लक्षणांसाठी पिकांची नियमित पाहणी करा.",
        irrigationTitle: "सिंचन सल्ला", irrigationText: "पुढील सिंचनापूर्वी मातीतील ओलावा तपासा.",
        cropAdvisoryTitle: "पीक सल्ला", cropAdvisoryText: "पिकांची वाढ आणि शेताची स्थिती नियमित तपासा.",
        voiceTitle: "अ‍ॅग्रीव्हॉइसला विचारा", voiceSubtitle: "तुमच्या पिकाबद्दल बोला किंवा फोटो काढा",
        tapSpeak: "बोलण्यासाठी टॅप करा", liveCamera: "लाइव्ह कॅमेरा", capture: "फोटो घ्या", closeCamera: "कॅमेरा बंद करा",
        selectLanguage: "भाषा निवडा", weatherTitle: "हवामान केंद्र", weatherSubtitle: "तुमच्या शेताची सध्याची हवामान माहिती",
        partlyCloudy: "अंशतः ढगाळ", humidity: "आर्द्रता", rainfall: "पाऊस", wind: "वारा", forecastTitle: "३ दिवसांचा अंदाज",
        today: "आज", tomorrow: "उद्या", day3: "तिसरा दिवस", cropTitle: "पीक इतिहास", cropSubtitle: "मागील पिके आणि शेतीचे रेकॉर्ड",
        cropHeader: "पीक", seasonHeader: "हंगाम", sowingHeader: "पेरणीची तारीख", statusHeader: "स्थिती", monsoon: "पावसाळा",
        harvested: "कापणी झाली", growing: "वाढत आहे", winter: "हिवाळा", sensorTitle: "सेन्सर डॅशबोर्ड",
        sensorSubtitle: "शेतातील महत्त्वाच्या स्थितींचे निरीक्षण करा", soilMoisture: "मातीतील ओलावा", good: "चांगले",
        temperature: "तापमान", normal: "सामान्य", soilPh: "मातीचा pH", healthy: "निरोगी", airHumidity: "हवेतील आर्द्रता",
        settingsTitle: "सेटिंग्ज", settingsSubtitle: "अ‍ॅग्रीसारथीच्या पसंती व्यवस्थापित करा", languageSetting: "भाषा",
        chooseLanguage: "तुमची पसंतीची भाषा निवडा", notifications: "सूचना", receiveAlerts: "शेतीविषयक सूचना मिळवा",
        aiAssistance: "AI सहाय्य", enableVoice: "अ‍ॅग्रीव्हॉइस सहाय्य सुरू करा", readyResponse: "तुमचा AI शेती सहाय्यक तयार आहे.",
        feedbackTitle: "अभिप्राय", feedbackSubtitle: "अ‍ॅग्रीसारथी शेतकऱ्यांना अधिक चांगली सेवा कशी देऊ शकतो ते सांगा",
        ratingLabel: "तुमच्या अनुभवाला किती रेटिंग द्याल?", categoryLabel: "अभिप्रायाचा प्रकार",
        generalFeedback: "सामान्य अभिप्राय", featureRequest: "फीचर सुचवा", bugReport: "समस्या कळवा", advisoryFeedback: "सल्ल्याची गुणवत्ता",
        messageLabel: "तुमचा अभिप्राय", feedbackPlaceholder: "तुमच्या सूचना किंवा अनुभव शेअर करा...", submitFeedback: "अभिप्राय पाठवा",
        thankYou: "अभिप्रायाबद्दल धन्यवाद!", feedbackSaved: "तुमचा प्रतिसाद या डिव्हाइसवर सेव्ह झाला आहे.",
        chooseRating: "कृपया रेटिंग निवडा.", enterFeedback: "कृपया तुमचा अभिप्राय लिहा.", feedbackSuccess: "अभिप्राय यशस्वीपणे पाठवला. धन्यवाद!",
        listening: "ऐकत आहे...", tapToSpeak: "बोलण्यासाठी टॅप करा", listeningQuestion: "तुमचा प्रश्न ऐकला जात आहे...",
        voiceUnsupported: "व्हॉइस रिकग्निशन समर्थित नाही. कृपया Google Chrome वापरा.", voiceError: "माफ करा, मला समजले नाही. पुन्हा प्रयत्न करा.",
        cameraReady: "कॅमेरा तयार आहे. पिकाचा फोटो घ्या.", cameraError: "कॅमेरा उघडता आला नाही. कृपया कॅमेरा परवानगी द्या.",
        cameraNotActive: "कॅमेरा सक्रिय नाही.", imageCaptured: "पिकाचा फोटो यशस्वीपणे घेतला.", profileTitle: "माझी शेतकरी प्रोफाइल", profileSubtitle: "वैयक्तिक डॅशबोर्डसाठी तुमची शेताची माहिती या डिव्हाइसवर जतन करा.", profileName: "शेतकऱ्याचे नाव", profileFarm: "शेताचे नाव", profileVillage: "गाव / ठिकाण", profileCrop: "मुख्य पीक", profileLand: "जमिनीचे क्षेत्रफळ (एकर)", profilePhone: "फोन (ऐच्छिक)", saveProfile: "प्रोफाइल जतन करा", editProfile: "प्रोफाइल संपादित करा", farmerId: "शेतकरी आयडी", profileFarmLabel: "शेत", profileLocationLabel: "ठिकाण", profileCropLabel: "मुख्य पीक", profileLandLabel: "जमिनीचे क्षेत्रफळ", profilePhoneLabel: "फोन", notProvided: "माहिती नाही", acres: "एकर", loginExistingSubtitle: "तुमची जतन केलेली प्रोफाइल उघडण्यासाठी शेतकरी आयडी द्या.", loginExistingButton: "लॉगिन करा", cameraClosed: "कॅमेरा बंद केला."
    },
    "gu-IN": {
        dashboard: "ડેશબોર્ડ", appName: "એગ્રીસારથી", aiOnline: "AI ઓનલાઇન",
        navAlerts: "ચેતવણીઓ અને સલાહ", navVoice: "એગ્રીવૉઇસને પૂછો", navWeather: "હવામાન કેન્દ્ર", navProfile: "મારી પ્રોફાઇલ",
        navCrop: "પાક ઇતિહાસ", navSensor: "સેન્સર ડેશબોર્ડ", navSettings: "સેટિંગ્સ", navFeedback: "પ્રતિસાદ",
        alertsTitle: "ચેતવણીઓ અને સલાહ", alertsSubtitle: "તમારા ખેતર માટે મહત્વપૂર્ણ અપડેટ્સ અને ભલામણો",
        pestTitle: "જીવાત ચેતવણી", pestText: "જીવાતની પ્રવૃત્તિના સંકેતો માટે પાકની નિયમિત તપાસ કરો.",
        irrigationTitle: "સિંચાઈ સલાહ", irrigationText: "આગામી સિંચાઈ પહેલાં જમીનની ભેજ તપાસો.",
        cropAdvisoryTitle: "પાક સલાહ", cropAdvisoryText: "પાકની વૃદ્ધિ અને ખેતરની સ્થિતિની નિયમિત દેખરેખ રાખો.",
        voiceTitle: "એગ્રીવૉઇસને પૂછો", voiceSubtitle: "તમારા પાક વિશે બોલો અથવા ફોટો લો",
        tapSpeak: "બોલવા માટે ટૅપ કરો", liveCamera: "લાઇવ કેમેરા", capture: "ફોટો લો", closeCamera: "કેમેરા બંધ કરો",
        selectLanguage: "ભાષા પસંદ કરો", weatherTitle: "હવામાન કેન્દ્ર", weatherSubtitle: "તમારા ખેતરની વર્તમાન હવામાન માહિતી",
        partlyCloudy: "આંશિક વાદળછાયું", humidity: "ભેજ", rainfall: "વરસાદ", wind: "પવન", forecastTitle: "3 દિવસની આગાહી",
        today: "આજે", tomorrow: "આવતીકાલે", day3: "દિવસ 3", cropTitle: "પાક ઇતિહાસ", cropSubtitle: "અગાઉના પાક અને ખેતીના રેકોર્ડ",
        cropHeader: "પાક", seasonHeader: "મોસમ", sowingHeader: "વાવણીની તારીખ", statusHeader: "સ્થિતિ", monsoon: "ચોમાસું",
        harvested: "કાપણી થઈ", growing: "વધી રહ્યો છે", winter: "શિયાળો", sensorTitle: "સેન્સર ડેશબોર્ડ",
        sensorSubtitle: "ખેતરની મહત્વપૂર્ણ પરિસ્થિતિઓનું નિરીક્ષણ કરો", soilMoisture: "જમીનની ભેજ", good: "સારું",
        temperature: "તાપમાન", normal: "સામાન્ય", soilPh: "જમીનનો pH", healthy: "સ્વસ્થ", airHumidity: "હવાની ભેજ",
        settingsTitle: "સેટિંગ્સ", settingsSubtitle: "એગ્રીસારથીની પસંદગીઓ મેનેજ કરો", languageSetting: "ભાષા",
        chooseLanguage: "તમારી પસંદગીની ભાષા પસંદ કરો", notifications: "સૂચનાઓ", receiveAlerts: "ખેતીની ચેતવણીઓ મેળવો",
        aiAssistance: "AI સહાય", enableVoice: "એગ્રીવૉઇસ સહાય સક્ષમ કરો", readyResponse: "તમારો AI કૃષિ સહાયક તૈયાર છે.",
        feedbackTitle: "પ્રતિસાદ", feedbackSubtitle: "એગ્રીસારથી ખેડૂતોને વધુ સારી સેવા કેવી રીતે આપી શકે તે જણાવો",
        ratingLabel: "તમારા અનુભવને કેટલું રેટિંગ આપશો?", categoryLabel: "પ્રતિસાદનો પ્રકાર",
        generalFeedback: "સામાન્ય પ્રતિસાદ", featureRequest: "ફીચર સૂચન", bugReport: "સમસ્યા જણાવો", advisoryFeedback: "સલાહની ગુણવત્તા",
        messageLabel: "તમારો પ્રતિસાદ", feedbackPlaceholder: "તમારા સૂચનો અથવા અનુભવ શેર કરો...", submitFeedback: "પ્રતિસાદ મોકલો",
        thankYou: "પ્રતિસાદ માટે આભાર!", feedbackSaved: "તમારો જવાબ આ ડિવાઇસ પર સેવ થયો છે.",
        chooseRating: "કૃપા કરીને રેટિંગ પસંદ કરો.", enterFeedback: "કૃપા કરીને તમારો પ્રતિસાદ લખો.", feedbackSuccess: "પ્રતિસાદ સફળતાપૂર્વક મોકલાયો. આભાર!",
        listening: "સાંભળી રહ્યું છે...", tapToSpeak: "બોલવા માટે ટૅપ કરો", listeningQuestion: "તમારો પ્રશ્ન સાંભળવામાં આવી રહ્યો છે...",
        voiceUnsupported: "વૉઇસ રેકગ્નિશન સપોર્ટેડ નથી. કૃપા કરીને Google Chrome વાપરો.", voiceError: "માફ કરશો, હું સમજી શક્યો નહીં. ફરી પ્રયાસ કરો.",
        cameraReady: "કેમેરા તૈયાર છે. પાકનો ફોટો લો.", cameraError: "કેમેરા ખોલી શકાયો નથી. કૃપા કરીને કેમેરાની પરવાનગી આપો.",
        cameraNotActive: "કેમેરા સક્રિય નથી.", imageCaptured: "પાકનો ફોટો સફળતાપૂર્વક લેવામાં આવ્યો.", profileTitle: "મારી ખેડૂત પ્રોફાઇલ", profileSubtitle: "વ્યક્તિગત ડેશબોર્ડ માટે તમારા ખેતરની માહિતી આ ઉપકરણ પર સાચવો.", profileName: "ખેડૂતનું નામ", profileFarm: "ખેતરનું નામ", profileVillage: "ગામ / સ્થળ", profileCrop: "મુખ્ય પાક", profileLand: "જમીનનું કદ (એકર)", profilePhone: "ફોન (વૈકલ્પિક)", saveProfile: "પ્રોફાઇલ સાચવો", editProfile: "પ્રોફાઇલ સંપાદિત કરો", farmerId: "ખેડૂત ID", profileFarmLabel: "ખેતર", profileLocationLabel: "સ્થળ", profileCropLabel: "મુખ્ય પાક", profileLandLabel: "જમીનનું કદ", profilePhoneLabel: "ફોન", notProvided: "આપેલ નથી", acres: "એકર", loginExistingSubtitle: "તમારી સાચવેલી પ્રોફાઇલ ખોલવા માટે ખેડૂત ID દાખલ કરો.", loginExistingButton: "લોગિન", cameraClosed: "કેમેરા બંધ કર્યો."
    },
    "ta-IN": {
        dashboard: "டாஷ்போர்டு", appName: "அக்ரிசாரதி", aiOnline: "AI ஆன்லைன்",
        navAlerts: "எச்சரிக்கைகள் மற்றும் ஆலோசனை", navVoice: "அக்ரிவாய்ஸிடம் கேளுங்கள்", navWeather: "வானிலை மையம்", navProfile: "என் சுயவிவரம்",
        navCrop: "பயிர் வரலாறு", navSensor: "சென்சார் டாஷ்போர்டு", navSettings: "அமைப்புகள்", navFeedback: "கருத்து",
        alertsTitle: "எச்சரிக்கைகள் மற்றும் ஆலோசனை", alertsSubtitle: "உங்கள் பண்ணைக்கான முக்கிய தகவல்கள் மற்றும் பரிந்துரைகள்",
        pestTitle: "பூச்சி எச்சரிக்கை", pestText: "பூச்சி தாக்குதலின் அறிகுறிகளுக்காக பயிர்களை தொடர்ந்து கண்காணிக்கவும்.",
        irrigationTitle: "நீர்ப்பாசன ஆலோசனை", irrigationText: "அடுத்த நீர்ப்பாசனத்திற்கு முன் மண் ஈரப்பதத்தை சரிபார்க்கவும்.",
        cropAdvisoryTitle: "பயிர் ஆலோசனை", cropAdvisoryText: "பயிர் வளர்ச்சி மற்றும் வயல் நிலையை தொடர்ந்து கண்காணிக்கவும்.",
        voiceTitle: "அக்ரிவாய்ஸிடம் கேளுங்கள்", voiceSubtitle: "உங்கள் பயிரைப் பற்றி பேசுங்கள் அல்லது படம் எடுக்கவும்",
        tapSpeak: "பேச தட்டவும்", liveCamera: "நேரடி கேமரா", capture: "படம் எடுக்கவும்", closeCamera: "கேமராவை மூடு",
        selectLanguage: "மொழியைத் தேர்ந்தெடுக்கவும்", weatherTitle: "வானிலை மையம்", weatherSubtitle: "உங்கள் பண்ணைக்கான தற்போதைய வானிலை தகவல்",
        partlyCloudy: "பகுதி மேகமூட்டம்", humidity: "ஈரப்பதம்", rainfall: "மழைப்பொழிவு", wind: "காற்று", forecastTitle: "3 நாள் முன்னறிவிப்பு",
        today: "இன்று", tomorrow: "நாளை", day3: "நாள் 3", cropTitle: "பயிர் வரலாறு", cropSubtitle: "முந்தைய பயிர்கள் மற்றும் விவசாய பதிவுகள்",
        cropHeader: "பயிர்", seasonHeader: "பருவம்", sowingHeader: "விதைப்பு தேதி", statusHeader: "நிலை", monsoon: "மழைக்காலம்",
        harvested: "அறுவடை செய்யப்பட்டது", growing: "வளர்ந்து வருகிறது", winter: "குளிர்காலம்", sensorTitle: "சென்சார் டாஷ்போர்டு",
        sensorSubtitle: "முக்கிய பண்ணை நிலைகளை கண்காணிக்கவும்", soilMoisture: "மண் ஈரப்பதம்", good: "நன்று",
        temperature: "வெப்பநிலை", normal: "இயல்பு", soilPh: "மண் pH", healthy: "ஆரோக்கியமானது", airHumidity: "காற்று ஈரப்பதம்",
        settingsTitle: "அமைப்புகள்", settingsSubtitle: "அக்ரிசாரதி விருப்பங்களை நிர்வகிக்கவும்", languageSetting: "மொழி",
        chooseLanguage: "உங்கள் விருப்பமான மொழியைத் தேர்ந்தெடுக்கவும்", notifications: "அறிவிப்புகள்", receiveAlerts: "விவசாய எச்சரிக்கைகளைப் பெறுங்கள்",
        aiAssistance: "AI உதவி", enableVoice: "அக்ரிவாய்ஸ் உதவியை இயக்கவும்", readyResponse: "உங்கள் AI விவசாய உதவியாளர் தயாராக உள்ளது.",
        feedbackTitle: "கருத்து", feedbackSubtitle: "விவசாயிகளுக்கு அக்ரிசாரதி சிறப்பாக சேவை செய்ய எவ்வாறு உதவலாம் என்பதை சொல்லுங்கள்",
        ratingLabel: "உங்கள் அனுபவத்திற்கு எவ்வளவு மதிப்பெண் அளிப்பீர்கள்?", categoryLabel: "கருத்து வகை",
        generalFeedback: "பொது கருத்து", featureRequest: "அம்ச கோரிக்கை", bugReport: "சிக்கலை தெரிவிக்கவும்", advisoryFeedback: "ஆலோசனை தரம்",
        messageLabel: "உங்கள் கருத்து", feedbackPlaceholder: "உங்கள் பரிந்துரைகள் அல்லது அனுபவத்தை பகிரவும்...", submitFeedback: "கருத்தை அனுப்பவும்",
        thankYou: "உங்கள் கருத்துக்கு நன்றி!", feedbackSaved: "உங்கள் பதில் இந்த சாதனத்தில் சேமிக்கப்பட்டது.",
        chooseRating: "மதிப்பீட்டைத் தேர்ந்தெடுக்கவும்.", enterFeedback: "உங்கள் கருத்தை எழுதவும்.", feedbackSuccess: "கருத்து வெற்றிகரமாக அனுப்பப்பட்டது. நன்றி!",
        listening: "கேட்கிறது...", tapToSpeak: "பேச தட்டவும்", listeningQuestion: "உங்கள் கேள்வி கேட்கப்படுகிறது...",
        voiceUnsupported: "குரல் அறிதல் ஆதரிக்கப்படவில்லை. Google Chrome பயன்படுத்தவும்.", voiceError: "மன்னிக்கவும், புரிந்து கொள்ள முடியவில்லை. மீண்டும் முயற்சிக்கவும்.",
        cameraReady: "கேமரா தயாராக உள்ளது. பயிர் படத்தை எடுக்கவும்.", cameraError: "கேமராவை அணுக முடியவில்லை. கேமரா அனுமதியை வழங்கவும்.",
        cameraNotActive: "கேமரா செயலில் இல்லை.", imageCaptured: "பயிர் படம் வெற்றிகரமாக எடுக்கப்பட்டது.", profileTitle: "என் விவசாயி சுயவிவரம்", profileSubtitle: "தனிப்பயன் டாஷ்போர்டுக்காக உங்கள் பண்ணை விவரங்களை இந்த சாதனத்தில் சேமிக்கவும்.", profileName: "விவசாயி பெயர்", profileFarm: "பண்ணை பெயர்", profileVillage: "கிராமம் / இடம்", profileCrop: "முக்கிய பயிர்", profileLand: "நில அளவு (ஏக்கர்)", profilePhone: "தொலைபேசி (விருப்பம்)", saveProfile: "சுயவிவரத்தை சேமிக்கவும்", editProfile: "சுயவிவரத்தை திருத்தவும்", farmerId: "விவசாயி ID", profileFarmLabel: "பண்ணை", profileLocationLabel: "இடம்", profileCropLabel: "முக்கிய பயிர்", profileLandLabel: "நில அளவு", profilePhoneLabel: "தொலைபேசி", notProvided: "வழங்கப்படவில்லை", acres: "ஏக்கர்", loginExistingSubtitle: "சேமித்த சுயவிவரத்தைத் திறக்க விவசாயி ID-ஐ உள்ளிடவும்.", loginExistingButton: "உள்நுழை", cameraClosed: "கேமரா மூடப்பட்டது."
    },
    "te-IN": {
        dashboard: "డాష్‌బోర్డ్", appName: "అగ్రిసారథి", aiOnline: "AI ఆన్‌లైన్",
        navAlerts: "హెచ్చరికలు & సలహా", navVoice: "అగ్రివాయిస్‌ను అడగండి", navWeather: "వాతావరణ కేంద్రం", navProfile: "నా ప్రొఫైల్",
        navCrop: "పంట చరిత్ర", navSensor: "సెన్సార్ డాష్‌బోర్డ్", navSettings: "సెట్టింగ్‌లు", navFeedback: "అభిప్రాయం",
        alertsTitle: "హెచ్చరికలు & సలహా", alertsSubtitle: "మీ పొలానికి ముఖ్యమైన నవీకరణలు మరియు సూచనలు",
        pestTitle: "పురుగు హెచ్చరిక", pestText: "పురుగు కార్యకలాపాల లక్షణాల కోసం పంటలను క్రమం తప్పకుండా పరిశీలించండి.",
        irrigationTitle: "నీటిపారుదల సలహా", irrigationText: "తదుపరి నీటిపారుదల ముందు నేల తేమను తనిఖీ చేయండి.",
        cropAdvisoryTitle: "పంట సలహా", cropAdvisoryText: "పంట పెరుగుదల మరియు పొల పరిస్థితులను క్రమం తప్పకుండా గమనించండి.",
        voiceTitle: "అగ్రివాయిస్‌ను అడగండి", voiceSubtitle: "మీ పంట గురించి మాట్లాడండి లేదా చిత్రాన్ని తీయండి",
        tapSpeak: "మాట్లాడటానికి నొక్కండి", liveCamera: "లైవ్ కెమెరా", capture: "చిత్రం తీయండి", closeCamera: "కెమెరా మూసివేయండి",
        selectLanguage: "భాషను ఎంచుకోండి", weatherTitle: "వాతావరణ కేంద్రం", weatherSubtitle: "మీ పొలానికి ప్రస్తుత వాతావరణ సమాచారం",
        partlyCloudy: "పాక్షికంగా మేఘావృతం", humidity: "తేమ", rainfall: "వర్షపాతం", wind: "గాలి", forecastTitle: "3 రోజుల అంచనా",
        today: "ఈరోజు", tomorrow: "రేపు", day3: "3వ రోజు", cropTitle: "పంట చరిత్ర", cropSubtitle: "మునుపటి పంటలు మరియు వ్యవసాయ రికార్డులు",
        cropHeader: "పంట", seasonHeader: "కాలం", sowingHeader: "విత్తిన తేదీ", statusHeader: "స్థితి", monsoon: "వర్షాకాలం",
        harvested: "కోత పూర్తైంది", growing: "పెరుగుతోంది", winter: "శీతాకాలం", sensorTitle: "సెన్సార్ డాష్‌బోర్డ్",
        sensorSubtitle: "ముఖ్యమైన పొల పరిస్థితులను పర్యవేక్షించండి", soilMoisture: "నేల తేమ", good: "మంచిది",
        temperature: "ఉష్ణోగ్రత", normal: "సాధారణం", soilPh: "నేల pH", healthy: "ఆరోగ్యకరం", airHumidity: "గాలి తేమ",
        settingsTitle: "సెట్టింగ్‌లు", settingsSubtitle: "అగ్రిసారథి ప్రాధాన్యతలను నిర్వహించండి", languageSetting: "భాష",
        chooseLanguage: "మీకు నచ్చిన భాషను ఎంచుకోండి", notifications: "నోటిఫికేషన్‌లు", receiveAlerts: "వ్యవసాయ హెచ్చరికలను పొందండి",
        aiAssistance: "AI సహాయం", enableVoice: "అగ్రివాయిస్ సహాయాన్ని ప్రారంభించండి", readyResponse: "మీ AI వ్యవసాయ సహాయకుడు సిద్ధంగా ఉన్నాడు.",
        feedbackTitle: "అభిప్రాయం", feedbackSubtitle: "రైతులకు అగ్రిసారథి మరింత మెరుగైన సేవ అందించడానికి మీ సూచనలు చెప్పండి",
        ratingLabel: "మీ అనుభవానికి ఎంత రేటింగ్ ఇస్తారు?", categoryLabel: "అభిప్రాయం రకం",
        generalFeedback: "సాధారణ అభిప్రాయం", featureRequest: "ఫీచర్ సూచన", bugReport: "సమస్యను నివేదించండి", advisoryFeedback: "సలహా నాణ్యత",
        messageLabel: "మీ అభిప్రాయం", feedbackPlaceholder: "మీ సూచనలు లేదా అనుభవాన్ని పంచుకోండి...", submitFeedback: "అభిప్రాయం పంపండి",
        thankYou: "మీ అభిప్రాయానికి ధన్యవాదాలు!", feedbackSaved: "మీ స్పందన ఈ పరికరంలో సేవ్ చేయబడింది.",
        chooseRating: "దయచేసి రేటింగ్ ఎంచుకోండి.", enterFeedback: "దయచేసి మీ అభిప్రాయాన్ని రాయండి.", feedbackSuccess: "అభిప్రాయం విజయవంతంగా పంపబడింది. ధన్యవాదాలు!",
        listening: "వింటోంది...", tapToSpeak: "మాట్లాడటానికి నొక్కండి", listeningQuestion: "మీ ప్రశ్నను వింటోంది...",
        voiceUnsupported: "వాయిస్ గుర్తింపు మద్దతు లేదు. Google Chrome ఉపయోగించండి.", voiceError: "క్షమించండి, అర్థం కాలేదు. మళ్లీ ప్రయత్నించండి.",
        cameraReady: "కెమెరా సిద్ధంగా ఉంది. పంట చిత్రాన్ని తీయండి.", cameraError: "కెమెరాను యాక్సెస్ చేయలేకపోయాము. కెమెరా అనుమతి ఇవ్వండి.",
        cameraNotActive: "కెమెరా సక్రియంగా లేదు.", imageCaptured: "పంట చిత్రం విజయవంతంగా తీసుకోబడింది.", profileTitle: "నా రైతు ప్రొఫైల్", profileSubtitle: "వ్యక్తిగత డాష్‌బోర్డ్ కోసం మీ వ్యవసాయ వివరాలను ఈ పరికరంలో సేవ్ చేయండి.", profileName: "రైతు పేరు", profileFarm: "పొలం పేరు", profileVillage: "గ్రామం / స్థలం", profileCrop: "ప్రధాన పంట", profileLand: "భూమి పరిమాణం (ఎకరాలు)", profilePhone: "ఫోన్ (ఐచ్ఛికం)", saveProfile: "ప్రొఫైల్ సేవ్ చేయండి", editProfile: "ప్రొఫైల్ సవరించండి", farmerId: "రైతు ID", profileFarmLabel: "పొలం", profileLocationLabel: "స్థలం", profileCropLabel: "ప్రధాన పంట", profileLandLabel: "భూమి పరిమాణం", profilePhoneLabel: "ఫోన్", notProvided: "అందించలేదు", acres: "ఎకరాలు", loginExistingSubtitle: "సేవ్ చేసిన ప్రొఫైల్‌ను తెరవడానికి రైతు ID నమోదు చేయండి.", loginExistingButton: "లాగిన్", cameraClosed: "కెమెరా మూసివేయబడింది."
    },
    "kn-IN": {
        dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್", appName: "ಅಗ್ರಿಸಾರಥಿ", aiOnline: "AI ಆನ್‌ಲೈನ್",
        navAlerts: "ಎಚ್ಚರಿಕೆಗಳು ಮತ್ತು ಸಲಹೆ", navVoice: "ಅಗ್ರಿವಾಯ್ಸ್ ಕೇಳಿ", navWeather: "ಹವಾಮಾನ ಕೇಂದ್ರ", navProfile: "ನನ್ನ ಪ್ರೊಫೈಲ್",
        navCrop: "ಬೆಳೆ ಇತಿಹಾಸ", navSensor: "ಸೆನ್ಸರ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್", navSettings: "ಸೆಟ್ಟಿಂಗ್‌ಗಳು", navFeedback: "ಪ್ರತಿಕ್ರಿಯೆ",
        alertsTitle: "ಎಚ್ಚರಿಕೆಗಳು ಮತ್ತು ಸಲಹೆ", alertsSubtitle: "ನಿಮ್ಮ ಜಮೀನಿಗೆ ಪ್ರಮುಖ ಮಾಹಿತಿ ಮತ್ತು ಶಿಫಾರಸುಗಳು",
        pestTitle: "ಕೀಟ ಎಚ್ಚರಿಕೆ", pestText: "ಕೀಟ ಚಟುವಟಿಕೆಯ ಲಕ್ಷಣಗಳಿಗಾಗಿ ಬೆಳೆಗಳನ್ನು ನಿಯಮಿತವಾಗಿ ಪರಿಶೀಲಿಸಿ.",
        irrigationTitle: "ನೀರಾವರಿ ಸಲಹೆ", irrigationText: "ಮುಂದಿನ ನೀರಾವರಿಗೂ ಮೊದಲು ಮಣ್ಣಿನ ತೇವಾಂಶವನ್ನು ಪರಿಶೀಲಿಸಿ.",
        cropAdvisoryTitle: "ಬೆಳೆ ಸಲಹೆ", cropAdvisoryText: "ಬೆಳೆ ಬೆಳವಣಿಗೆ ಮತ್ತು ಜಮೀನಿನ ಸ್ಥಿತಿಯನ್ನು ನಿಯಮಿತವಾಗಿ ಗಮನಿಸಿ.",
        voiceTitle: "ಅಗ್ರಿವಾಯ್ಸ್ ಕೇಳಿ", voiceSubtitle: "ನಿಮ್ಮ ಬೆಳೆಯ ಬಗ್ಗೆ ಮಾತನಾಡಿ ಅಥವಾ ಚಿತ್ರ ತೆಗೆಯಿರಿ",
        tapSpeak: "ಮಾತನಾಡಲು ಟ್ಯಾಪ್ ಮಾಡಿ", liveCamera: "ಲೈವ್ ಕ್ಯಾಮೆರಾ", capture: "ಚಿತ್ರ ತೆಗೆಯಿರಿ", closeCamera: "ಕ್ಯಾಮೆರಾ ಮುಚ್ಚಿ",
        selectLanguage: "ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ", weatherTitle: "ಹವಾಮಾನ ಕೇಂದ್ರ", weatherSubtitle: "ನಿಮ್ಮ ಜಮೀನಿನ ಪ್ರಸ್ತುತ ಹವಾಮಾನ ಮಾಹಿತಿ",
        partlyCloudy: "ಭಾಗಶಃ ಮೋಡ", humidity: "ಆರ್ದ್ರತೆ", rainfall: "ಮಳೆ", wind: "ಗಾಳಿ", forecastTitle: "3 ದಿನಗಳ ಮುನ್ಸೂಚನೆ",
        today: "ಇಂದು", tomorrow: "ನಾಳೆ", day3: "ದಿನ 3", cropTitle: "ಬೆಳೆ ಇತಿಹಾಸ", cropSubtitle: "ಹಿಂದಿನ ಬೆಳೆಗಳು ಮತ್ತು ಕೃಷಿ ದಾಖಲೆಗಳು",
        cropHeader: "ಬೆಳೆ", seasonHeader: "ಋತು", sowingHeader: "ಬಿತ್ತನೆ ದಿನಾಂಕ", statusHeader: "ಸ್ಥಿತಿ", monsoon: "ಮಳೆಗಾಲ",
        harvested: "ಕೊಯ್ಲು ಮಾಡಲಾಗಿದೆ", growing: "ಬೆಳೆಯುತ್ತಿದೆ", winter: "ಚಳಿಗಾಲ", sensorTitle: "ಸೆನ್ಸರ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
        sensorSubtitle: "ಪ್ರಮುಖ ಜಮೀನು ಪರಿಸ್ಥಿತಿಗಳನ್ನು ಗಮನಿಸಿ", soilMoisture: "ಮಣ್ಣಿನ ತೇವಾಂಶ", good: "ಉತ್ತಮ",
        temperature: "ತಾಪಮಾನ", normal: "ಸಾಮಾನ್ಯ", soilPh: "ಮಣ್ಣಿನ pH", healthy: "ಆರೋಗ್ಯಕರ", airHumidity: "ಗಾಳಿಯ ಆರ್ದ್ರತೆ",
        settingsTitle: "ಸೆಟ್ಟಿಂಗ್‌ಗಳು", settingsSubtitle: "ಅಗ್ರಿಸಾರಥಿ ಆದ್ಯತೆಗಳನ್ನು ನಿರ್ವಹಿಸಿ", languageSetting: "ಭಾಷೆ",
        chooseLanguage: "ನಿಮ್ಮ ಆದ್ಯತೆಯ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ", notifications: "ಅಧಿಸೂಚನೆಗಳು", receiveAlerts: "ಕೃಷಿ ಎಚ್ಚರಿಕೆಗಳನ್ನು ಪಡೆಯಿರಿ",
        aiAssistance: "AI ಸಹಾಯ", enableVoice: "ಅಗ್ರಿವಾಯ್ಸ್ ಸಹಾಯವನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ", readyResponse: "ನಿಮ್ಮ AI ಕೃಷಿ ಸಹಾಯಕ ಸಿದ್ಧವಾಗಿದೆ.",
        feedbackTitle: "ಪ್ರತಿಕ್ರಿಯೆ", feedbackSubtitle: "ರೈತರಿಗೆ ಅಗ್ರಿಸಾರಥಿ ಉತ್ತಮ ಸೇವೆ ನೀಡಲು ನಿಮ್ಮ ಸಲಹೆಗಳನ್ನು ತಿಳಿಸಿ",
        ratingLabel: "ನಿಮ್ಮ ಅನುಭವಕ್ಕೆ ಎಷ್ಟು ರೇಟಿಂಗ್ ನೀಡುತ್ತೀರಿ?", categoryLabel: "ಪ್ರತಿಕ್ರಿಯೆಯ ಪ್ರಕಾರ",
        generalFeedback: "ಸಾಮಾನ್ಯ ಪ್ರತಿಕ್ರಿಯೆ", featureRequest: "ವೈಶಿಷ್ಟ್ಯ ಸಲಹೆ", bugReport: "ಸಮಸ್ಯೆ ವರದಿ", advisoryFeedback: "ಸಲಹೆಯ ಗುಣಮಟ್ಟ",
        messageLabel: "ನಿಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆ", feedbackPlaceholder: "ನಿಮ್ಮ ಸಲಹೆಗಳು ಅಥವಾ ಅನುಭವವನ್ನು ಹಂಚಿಕೊಳ್ಳಿ...", submitFeedback: "ಪ್ರತಿಕ್ರಿಯೆ ಕಳುಹಿಸಿ",
        thankYou: "ನಿಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆಗೆ ಧನ್ಯವಾದಗಳು!", feedbackSaved: "ನಿಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ಈ ಸಾಧನದಲ್ಲಿ ಉಳಿಸಲಾಗಿದೆ.",
        chooseRating: "ದಯವಿಟ್ಟು ರೇಟಿಂಗ್ ಆಯ್ಕೆಮಾಡಿ.", enterFeedback: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ಬರೆಯಿರಿ.", feedbackSuccess: "ಪ್ರತಿಕ್ರಿಯೆ ಯಶಸ್ವಿಯಾಗಿ ಕಳುಹಿಸಲಾಗಿದೆ. ಧನ್ಯವಾದಗಳು!",
        listening: "ಕೇಳುತ್ತಿದೆ...", tapToSpeak: "ಮಾತನಾಡಲು ಟ್ಯಾಪ್ ಮಾಡಿ", listeningQuestion: "ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳುತ್ತಿದೆ...",
        voiceUnsupported: "ಧ್ವನಿ ಗುರುತಿಸುವಿಕೆ ಬೆಂಬಲಿತವಲ್ಲ. Google Chrome ಬಳಸಿ.", voiceError: "ಕ್ಷಮಿಸಿ, ಅರ್ಥವಾಗಲಿಲ್ಲ. ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
        cameraReady: "ಕ್ಯಾಮೆರಾ ಸಿದ್ಧವಾಗಿದೆ. ಬೆಳೆಯ ಚಿತ್ರ ತೆಗೆಯಿರಿ.", cameraError: "ಕ್ಯಾಮೆರಾವನ್ನು ಪ್ರವೇಶಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ಕ್ಯಾಮೆರಾ ಅನುಮತಿ ನೀಡಿ.",
        cameraNotActive: "ಕ್ಯಾಮೆರಾ ಸಕ್ರಿಯವಾಗಿಲ್ಲ.", imageCaptured: "ಬೆಳೆಯ ಚಿತ್ರ ಯಶಸ್ವಿಯಾಗಿ ತೆಗೆದುಕೊಳ್ಳಲಾಗಿದೆ.", profileTitle: "ನನ್ನ ರೈತ ಪ್ರೊಫೈಲ್", profileSubtitle: "ವೈಯಕ್ತಿಕ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗಾಗಿ ನಿಮ್ಮ ಕೃಷಿ ವಿವರಗಳನ್ನು ಈ ಸಾಧನದಲ್ಲಿ ಉಳಿಸಿ.", profileName: "ರೈತರ ಹೆಸರು", profileFarm: "ಹೊಲದ ಹೆಸರು", profileVillage: "ಗ್ರಾಮ / ಸ್ಥಳ", profileCrop: "ಮುಖ್ಯ ಬೆಳೆ", profileLand: "ಭೂಮಿ ಗಾತ್ರ (ಎಕರೆ)", profilePhone: "ಫೋನ್ (ಐಚ್ಛಿಕ)", saveProfile: "ಪ್ರೊಫೈಲ್ ಉಳಿಸಿ", editProfile: "ಪ್ರೊಫೈಲ್ ಸಂಪಾದಿಸಿ", farmerId: "ರೈತ ID", profileFarmLabel: "ಹೊಲ", profileLocationLabel: "ಸ್ಥಳ", profileCropLabel: "ಮುಖ್ಯ ಬೆಳೆ", profileLandLabel: "ಭೂಮಿ ಗಾತ್ರ", profilePhoneLabel: "ಫೋನ್", notProvided: "ನೀಡಲಾಗಿಲ್ಲ", acres: "ಎಕರೆ", loginExistingSubtitle: "ನಿಮ್ಮ ಉಳಿಸಿದ ಪ್ರೊಫೈಲ್ ತೆರೆಯಲು ರೈತ ID ನಮೂದಿಸಿ.", loginExistingButton: "ಲಾಗಿನ್", cameraClosed: "ಕ್ಯಾಮೆರಾ ಮುಚ್ಚಲಾಗಿದೆ."
    },
    "bn-IN": {
        dashboard: "ড্যাশবোর্ড", appName: "এগ্রিসারথি", aiOnline: "AI অনলাইন",
        navAlerts: "সতর্কতা ও পরামর্শ", navVoice: "এগ্রিভয়েসকে জিজ্ঞাসা করুন", navWeather: "আবহাওয়া কেন্দ্র", navProfile: "আমার প্রোফাইল",
        navCrop: "ফসলের ইতিহাস", navSensor: "সেন্সর ড্যাশবোর্ড", navSettings: "সেটিংস", navFeedback: "মতামত",
        alertsTitle: "সতর্কতা ও পরামর্শ", alertsSubtitle: "আপনার খামারের জন্য গুরুত্বপূর্ণ আপডেট ও সুপারিশ",
        pestTitle: "পোকা সতর্কতা", pestText: "পোকার আক্রমণের লক্ষণের জন্য নিয়মিত ফসল পর্যবেক্ষণ করুন।",
        irrigationTitle: "সেচ পরামর্শ", irrigationText: "পরবর্তী সেচের আগে মাটির আর্দ্রতা পরীক্ষা করুন।",
        cropAdvisoryTitle: "ফসল পরামর্শ", cropAdvisoryText: "ফসলের বৃদ্ধি ও জমির অবস্থা নিয়মিত পর্যবেক্ষণ করুন।",
        voiceTitle: "এগ্রিভয়েসকে জিজ্ঞাসা করুন", voiceSubtitle: "আপনার ফসল সম্পর্কে বলুন বা ছবি তুলুন",
        tapSpeak: "কথা বলতে ট্যাপ করুন", liveCamera: "লাইভ ক্যামেরা", capture: "ছবি তুলুন", closeCamera: "ক্যামেরা বন্ধ করুন",
        selectLanguage: "ভাষা নির্বাচন করুন", weatherTitle: "আবহাওয়া কেন্দ্র", weatherSubtitle: "আপনার খামারের বর্তমান আবহাওয়ার তথ্য",
        partlyCloudy: "আংশিক মেঘলা", humidity: "আর্দ্রতা", rainfall: "বৃষ্টিপাত", wind: "বাতাস", forecastTitle: "৩ দিনের পূর্বাভাস",
        today: "আজ", tomorrow: "আগামীকাল", day3: "দিন ৩", cropTitle: "ফসলের ইতিহাস", cropSubtitle: "পূর্ববর্তী ফসল ও কৃষি রেকর্ড",
        cropHeader: "ফসল", seasonHeader: "মৌসুম", sowingHeader: "বপনের তারিখ", statusHeader: "অবস্থা", monsoon: "বর্ষা",
        harvested: "ফসল কাটা হয়েছে", growing: "বাড়ছে", winter: "শীত", sensorTitle: "সেন্সর ড্যাশবোর্ড",
        sensorSubtitle: "গুরুত্বপূর্ণ খামার পরিস্থিতি পর্যবেক্ষণ করুন", soilMoisture: "মাটির আর্দ্রতা", good: "ভালো",
        temperature: "তাপমাত্রা", normal: "স্বাভাবিক", soilPh: "মাটির pH", healthy: "সুস্থ", airHumidity: "বাতাসের আর্দ্রতা",
        settingsTitle: "সেটিংস", settingsSubtitle: "এগ্রিসারথির পছন্দগুলি পরিচালনা করুন", languageSetting: "ভাষা",
        chooseLanguage: "আপনার পছন্দের ভাষা নির্বাচন করুন", notifications: "বিজ্ঞপ্তি", receiveAlerts: "কৃষি সতর্কতা পান",
        aiAssistance: "AI সহায়তা", enableVoice: "এগ্রিভয়েস সহায়তা চালু করুন", readyResponse: "আপনার AI কৃষি সহায়ক প্রস্তুত।",
        feedbackTitle: "মতামত", feedbackSubtitle: "কৃষকদের আরও ভালোভাবে সেবা দিতে এগ্রিসারথি কীভাবে উন্নত হতে পারে তা জানান",
        ratingLabel: "আপনার অভিজ্ঞতাকে কত রেটিং দেবেন?", categoryLabel: "মতামতের ধরন",
        generalFeedback: "সাধারণ মতামত", featureRequest: "ফিচার অনুরোধ", bugReport: "সমস্যা জানান", advisoryFeedback: "পরামর্শের মান",
        messageLabel: "আপনার মতামত", feedbackPlaceholder: "আপনার পরামর্শ বা অভিজ্ঞতা শেয়ার করুন...", submitFeedback: "মতামত পাঠান",
        thankYou: "আপনার মতামতের জন্য ধন্যবাদ!", feedbackSaved: "আপনার উত্তর এই ডিভাইসে সংরক্ষণ করা হয়েছে।",
        chooseRating: "দয়া করে রেটিং নির্বাচন করুন।", enterFeedback: "দয়া করে আপনার মতামত লিখুন।", feedbackSuccess: "মতামত সফলভাবে পাঠানো হয়েছে। ধন্যবাদ!",
        listening: "শুনছি...", tapToSpeak: "কথা বলতে ট্যাপ করুন", listeningQuestion: "আপনার প্রশ্ন শোনা হচ্ছে...",
        voiceUnsupported: "ভয়েস রিকগনিশন সমর্থিত নয়। Google Chrome ব্যবহার করুন।", voiceError: "দুঃখিত, বুঝতে পারিনি। আবার চেষ্টা করুন।",
        cameraReady: "ক্যামেরা প্রস্তুত। ফসলের ছবি তুলুন।", cameraError: "ক্যামেরা অ্যাক্সেস করা যায়নি। ক্যামেরার অনুমতি দিন।",
        cameraNotActive: "ক্যামেরা সক্রিয় নয়।", imageCaptured: "ফসলের ছবি সফলভাবে তোলা হয়েছে।", profileTitle: "আমার কৃষক প্রোফাইল", profileSubtitle: "ব্যক্তিগত ড্যাশবোর্ডের জন্য আপনার খামারের তথ্য এই ডিভাইসে সংরক্ষণ করুন।", profileName: "কৃষকের নাম", profileFarm: "খামারের নাম", profileVillage: "গ্রাম / অবস্থান", profileCrop: "প্রধান ফসল", profileLand: "জমির আকার (একর)", profilePhone: "ফোন (ঐচ্ছিক)", saveProfile: "প্রোফাইল সংরক্ষণ করুন", editProfile: "প্রোফাইল সম্পাদনা করুন", farmerId: "কৃষক ID", profileFarmLabel: "খামার", profileLocationLabel: "অবস্থান", profileCropLabel: "প্রধান ফসল", profileLandLabel: "জমির আকার", profilePhoneLabel: "ফোন", notProvided: "দেওয়া হয়নি", acres: "একর", loginExistingSubtitle: "আপনার সংরক্ষিত প্রোফাইল খুলতে কৃষক ID দিন।", loginExistingButton: "লগইন", cameraClosed: "ক্যামেরা বন্ধ করা হয়েছে।"
    }
};

function currentLanguage() {
    return localStorage.getItem("agrisarthiLanguage") || "en-IN";
}

function applyLanguage(lang, save = true) {
    if (!translations[lang]) lang = "en-IN";
    const dictionary = translations[lang];

    document.documentElement.lang = lang.split("-")[0];

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
        const key = element.getAttribute("data-i18n");
        if (dictionary[key] !== undefined) element.textContent = dictionary[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {
        const key = element.getAttribute("data-i18n-placeholder");
        if (dictionary[key] !== undefined) element.placeholder = dictionary[key];
    });

    if (language) language.value = lang;
    if (settingsLanguage) settingsLanguage.value = lang;
    if (save) localStorage.setItem("agrisarthiLanguage", lang);

    if (micText && !isListening) micText.textContent = dictionary.tapToSpeak;
}

function t(key) {
    const dictionary = translations[currentLanguage()] || translations["en-IN"];
    return dictionary[key] || translations["en-IN"][key] || key;
}

if (language) language.addEventListener("change", function () {
    applyLanguage(this.value);
    if (typeof getActiveAccount === "function" && getActiveAccount()) renderProfileSummary(getActiveAccount());
    if (typeof updateLoginMode === "function") updateLoginMode();
});
if (settingsLanguage) settingsLanguage.addEventListener("change", function () {
    applyLanguage(this.value);
    if (typeof getActiveAccount === "function" && getActiveAccount()) renderProfileSummary(getActiveAccount());
    if (typeof updateLoginMode === "function") updateLoginMode();
});

/* =====================================================
   PAGE NAVIGATION
===================================================== */

menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
        menuItems.forEach(function (menu) { menu.classList.remove("active"); });
        item.classList.add("active");

        const pageId = item.getAttribute("data-page");
        pages.forEach(function (page) { page.classList.remove("active"); });

        const selectedPage = document.getElementById(pageId);
        if (selectedPage) selectedPage.classList.add("active");

        const menuName = item.querySelector("p").textContent;
        response.textContent = menuName + " is now open.";
    });
});

/* =====================================================
   VOICE RECOGNITION
===================================================== */

const micButton = document.getElementById("micButton");
const micText = document.getElementById("micText");
let recognition = null;
let isListening = false;

if ("webkitSpeechRecognition" in window) recognition = new webkitSpeechRecognition();
else if ("SpeechRecognition" in window) recognition = new SpeechRecognition();

if (micButton) {
    micButton.addEventListener("click", function () {
        if (!recognition) {
            response.textContent = t("voiceUnsupported");
            return;
        }
        if (isListening) {
            recognition.stop();
            return;
        }

        recognition.lang = language ? language.value : currentLanguage();
        recognition.continuous = false;
        recognition.interimResults = false;

        try {
            recognition.start();
            isListening = true;
            micButton.classList.add("listening");
            micText.textContent = t("listening");
            response.textContent = t("listeningQuestion");
        } catch (error) {
            console.log(error);
        }
    });
}

if (recognition) {
    recognition.onresult = function (event) {
        const spokenText = event.results[0][0].transcript;
        response.textContent = "You said: " + spokenText;
    };

    recognition.onerror = function (event) {
        console.log(event.error);
        response.textContent = t("voiceError");
    };

    recognition.onend = function () {
        isListening = false;
        micButton.classList.remove("listening");
        micText.textContent = t("tapToSpeak");
    };
}

/* =====================================================
   CAMERA
===================================================== */

const cameraButton = document.getElementById("cameraButton");
const cameraContainer = document.getElementById("cameraContainer");
const camera = document.getElementById("camera");
const captureButton = document.getElementById("captureButton");
const closeCamera = document.getElementById("closeCamera");
const canvas = document.getElementById("canvas");
const preview = document.getElementById("preview");
let cameraStream = null;

if (cameraButton) {
    cameraButton.addEventListener("click", async function () {
        try {
            cameraStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
            camera.srcObject = cameraStream;
            cameraContainer.style.display = "block";
            preview.style.display = "none";
            response.textContent = t("cameraReady");
        } catch (error) {
            console.log(error);
            response.textContent = t("cameraError");
        }
    });
}

if (captureButton) {
    captureButton.addEventListener("click", function () {
        if (!cameraStream) {
            response.textContent = t("cameraNotActive");
            return;
        }

        canvas.width = camera.videoWidth;
        canvas.height = camera.videoHeight;
        const context = canvas.getContext("2d");
        context.drawImage(camera, 0, 0, canvas.width, canvas.height);
        preview.src = canvas.toDataURL("image/png");
        preview.style.display = "block";
        response.textContent = t("imageCaptured");
        stopCamera();
    });
}

if (closeCamera) {
    closeCamera.addEventListener("click", function () {
        stopCamera();
        response.textContent = t("cameraClosed");
    });
}

function stopCamera() {
    if (cameraStream) {
        cameraStream.getTracks().forEach(function (track) { track.stop(); });
        cameraStream = null;
    }
    camera.srcObject = null;
    cameraContainer.style.display = "none";
}

/* =====================================================
   FEEDBACK FEATURE
   Stores submissions locally so the demo works without a backend.
===================================================== */

const feedbackForm = document.getElementById("feedbackForm");
const feedbackRating = document.getElementById("feedbackRating");
const feedbackMessage = document.getElementById("feedbackMessage");
const feedbackStatus = document.getElementById("feedbackStatus");
const feedbackSummary = document.getElementById("feedbackSummary");
const ratingButtons = document.querySelectorAll(".rating-btn");

ratingButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const rating = Number(this.dataset.rating);
        feedbackRating.value = rating;
        ratingButtons.forEach(function (item) {
            item.classList.toggle("selected", Number(item.dataset.rating) <= rating);
        });
    });
});

if (feedbackForm) {
    feedbackForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const rating = Number(feedbackRating.value);
        const message = feedbackMessage.value.trim();
        const category = document.getElementById("feedbackCategory").value;

        if (!rating) {
            feedbackStatus.textContent = t("chooseRating");
            feedbackStatus.className = "feedback-status error";
            return;
        }
        if (!message) {
            feedbackStatus.textContent = t("enterFeedback");
            feedbackStatus.className = "feedback-status error";
            feedbackMessage.focus();
            return;
        }

        const existing = JSON.parse(localStorage.getItem("agrisarthiFeedback") || "[]");
        existing.push({
            rating: rating,
            category: category,
            message: message,
            language: currentLanguage(),
            createdAt: new Date().toISOString()
        });
        localStorage.setItem("agrisarthiFeedback", JSON.stringify(existing));

        feedbackStatus.textContent = t("feedbackSuccess");
        feedbackStatus.className = "feedback-status success";
        feedbackSummary.hidden = false;
        feedbackForm.reset();
        feedbackRating.value = "0";
        ratingButtons.forEach(function (item) { item.classList.remove("selected"); });
    });
}

/* Apply saved language as soon as the page loads. */
applyLanguage(currentLanguage(), false);

/* =====================================================
   FARMER ACCOUNT + SAVED PROFILE
   This lightweight demo stores account/profile data in the
   browser. It is not a server-side authentication system.
===================================================== */

const ACCOUNT_KEY = "agrisarthiAccounts";
const ACTIVE_ACCOUNT_KEY = "agrisarthiActiveAccount";

const loginOverlay = document.getElementById("loginOverlay");
const accountButton = document.getElementById("accountButton");
const loginSubmit = document.getElementById("loginSubmit");
const loginCancel = document.getElementById("loginCancel");
const loginName = document.getElementById("loginName");
const loginId = document.getElementById("loginId");
const loginStatus = document.getElementById("loginStatus");
const userNameDisplay = document.getElementById("userNameDisplay");
const userFarmDisplay = document.getElementById("userFarmDisplay");
const userAvatar = document.getElementById("userAvatar");

const profileForm = document.getElementById("profileForm");
const profileName = document.getElementById("profileName");
const profileFarm = document.getElementById("profileFarm");
const profileVillage = document.getElementById("profileVillage");
const profileCrop = document.getElementById("profileCrop");
const profileLand = document.getElementById("profileLand");
const profilePhone = document.getElementById("profilePhone");
const profileStatus = document.getElementById("profileStatus");
const profileSummary = document.getElementById("profileSummary");
const profileMenuItem = document.getElementById("profileMenuItem");
const profileAvatarLarge = document.getElementById("profileAvatarLarge");
const profileSummaryName = document.getElementById("profileSummaryName");
const profileSummaryId = document.getElementById("profileSummaryId");
const profileSummaryFarm = document.getElementById("profileSummaryFarm");
const profileSummaryVillage = document.getElementById("profileSummaryVillage");
const profileSummaryCrop = document.getElementById("profileSummaryCrop");
const profileSummaryLand = document.getElementById("profileSummaryLand");
const profileSummaryPhone = document.getElementById("profileSummaryPhone");
const profileEditButton = document.getElementById("profileEditButton");

function getAccounts() {
    try { return JSON.parse(localStorage.getItem(ACCOUNT_KEY) || "{}"); }
    catch (e) { return {}; }
}

function saveAccounts(accounts) {
    localStorage.setItem(ACCOUNT_KEY, JSON.stringify(accounts));
}

function getActiveAccountId() {
    return localStorage.getItem(ACTIVE_ACCOUNT_KEY) || "";
}

function getActiveAccount() {
    const id = getActiveAccountId();
    const accounts = getAccounts();
    return id && accounts[id] ? accounts[id] : null;
}

function setAccountUI() {
    const account = getActiveAccount();
    if (account) {
        const name = account.profile?.name || account.name || "Farmer";
        const farm = account.profile?.farm || "My Farm";
        userNameDisplay.textContent = name;
        userFarmDisplay.textContent = farm;
        userAvatar.textContent = name.trim().charAt(0).toUpperCase() || "F";
        accountButton.textContent = "Logout";
        loadProfileForm(account);
        renderProfileSummary(account);
    } else {
        userNameDisplay.textContent = "Guest Farmer";
        userFarmDisplay.textContent = "Local profile";
        userAvatar.textContent = "G";
        accountButton.textContent = "Login";
        if (profileForm) profileForm.reset();
        if (profileSummary) profileSummary.classList.add("hidden");
        if (profileForm) profileForm.classList.remove("hidden");
        if (profileMenuItem) profileMenuItem.classList.remove("hidden");
    }
}

function renderProfileSummary(account) {
    if (!profileSummary || !profileForm || !account) return;
    const p = account.profile || {};
    const hasProfile = Boolean(p.name && p.name.trim() && p.farm && p.farm.trim() && p.village && p.village.trim() && p.crop && p.crop.trim() && String(p.land ?? "").trim() !== "");
    if (!hasProfile) {
        profileSummary.classList.add("hidden");
        profileForm.classList.remove("hidden");
        if (profileMenuItem) profileMenuItem.classList.remove("hidden");
        return;
    }

    const name = p.name.trim();
    profileAvatarLarge.textContent = name.charAt(0).toUpperCase();
    profileSummaryName.textContent = name;
    profileSummaryId.textContent = t("farmerId") + ": " + (getActiveAccountId() || "—");
    profileSummaryFarm.textContent = p.farm || t("notProvided");
    profileSummaryVillage.textContent = p.village || t("notProvided");
    profileSummaryCrop.textContent = p.crop || t("notProvided");
    profileSummaryLand.textContent = String(p.land ?? "").trim() !== "" ? p.land + " " + t("acres") : t("notProvided");
    profileSummaryPhone.textContent = p.phone || t("notProvided");

    profileSummary.classList.remove("hidden");
    profileForm.classList.add("hidden");
    // Keep My Profile visible in the dashboard so the farmer can reopen it anytime.
    if (profileMenuItem) profileMenuItem.classList.remove("hidden");
}

function showProfileEditor() {
    const account = getActiveAccount();
    if (!account) {
        openLogin();
        return;
    }
    loadProfileForm(account);
    if (profileSummary) profileSummary.classList.add("hidden");
    if (profileForm) profileForm.classList.remove("hidden");
    if (profileMenuItem) profileMenuItem.classList.remove("hidden");
    if (profileForm) profileForm.scrollIntoView({ behavior: "smooth", block: "center" });
}

function loadProfileForm(account) {
    if (!profileForm || !account) return;
    const p = account.profile || {};
    profileName.value = p.name || account.name || "";
    profileFarm.value = p.farm || "";
    profileVillage.value = p.village || "";
    profileCrop.value = p.crop || "";
    profileLand.value = p.land || "";
    profilePhone.value = p.phone || "";
}

function updateLoginMode() {
    if (!loginId) return;
    const id = loginId.value.trim().toUpperCase().replace(/[^A-Z0-9_-]/g, "");
    const existing = id ? getAccounts()[id] : null;
    const existingComplete = Boolean(existing && existing.profile && existing.profile.name && existing.profile.farm && existing.profile.village && existing.profile.crop && String(existing.profile.land ?? "").trim() !== "");
    const nameLabel = document.querySelector('label[for="loginName"]');
    const subtitle = loginOverlay ? loginOverlay.querySelector('[data-i18n="loginSubtitle"]') : null;
    if (nameLabel) nameLabel.classList.toggle("hidden", existingComplete);
    if (loginName) {
        loginName.classList.toggle("hidden", existingComplete);
        if (existingComplete) loginName.value = existing.profile.name || existing.name || "";
    }
    if (subtitle) subtitle.textContent = existingComplete ? t("loginExistingSubtitle") : t("loginSubtitle");
    if (loginSubmit) loginSubmit.textContent = existingComplete ? t("loginExistingButton") : t("loginButton");
}

function openLogin() {
    if (!loginOverlay) return;
    loginOverlay.classList.remove("hidden");
    loginName.value = "";
    loginId.value = "";
    loginStatus.textContent = "";
    updateLoginMode();
    setTimeout(function () { loginId.focus(); }, 50);
}

function closeLogin() {
    if (loginOverlay) loginOverlay.classList.add("hidden");
}

if (accountButton) {
    accountButton.addEventListener("click", function () {
        if (getActiveAccount()) {
            localStorage.removeItem(ACTIVE_ACCOUNT_KEY);
            setAccountUI();
            response.textContent = "You are now logged out.";
        } else {
            openLogin();
        }
    });
}

if (loginCancel) loginCancel.addEventListener("click", closeLogin);
if (loginId) loginId.addEventListener("input", updateLoginMode);

if (loginSubmit) {
    loginSubmit.addEventListener("click", function () {
        let name = loginName.value.trim();
        const id = loginId.value.trim().toUpperCase().replace(/[^A-Z0-9_-]/g, "");
        const accounts = getAccounts();
        const existing = accounts[id];
        const existingComplete = Boolean(existing && existing.profile && existing.profile.name && existing.profile.farm && existing.profile.village && existing.profile.crop && String(existing.profile.land ?? "").trim() !== "");
        if (!id || (!existingComplete && !name)) {
            loginStatus.textContent = "Enter your name and a Farmer ID.";
            loginStatus.className = "login-status error";
            return;
        }
        if (existingComplete) {
            name = existing.profile.name || existing.name || name;
        } else {
            accounts[id] = existing || { name: name, createdAt: new Date().toISOString(), profile: {} };
            accounts[id].name = name;
            accounts[id].profile = accounts[id].profile || {};
            accounts[id].profile.name = name;
            saveAccounts(accounts);
        }
        localStorage.setItem(ACTIVE_ACCOUNT_KEY, id);
        setAccountUI();
        closeLogin();
        response.textContent = "Welcome, " + name + ". Your profile is ready to save.";
    });
}

if (profileForm) {
    profileForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const id = getActiveAccountId();
        if (!id) {
            openLogin();
            return;
        }

        const accounts = getAccounts();
        if (!accounts[id]) return;
        accounts[id].profile = {
            name: profileName.value.trim(),
            farm: profileFarm.value.trim(),
            village: profileVillage.value.trim(),
            crop: profileCrop.value.trim(),
            land: profileLand.value,
            phone: profilePhone.value.trim()
        };
        accounts[id].name = accounts[id].profile.name || accounts[id].name;
        saveAccounts(accounts);
        setAccountUI();
        profileStatus.textContent = "Profile saved ✓";
        profileStatus.className = "profile-status success";
        response.textContent = "Your farmer profile has been saved.";
    });
}

if (profileEditButton) profileEditButton.addEventListener("click", showProfileEditor);

// The centered avatar opens the farmer profile after the profile is saved.
if (userAvatar) {
    userAvatar.addEventListener("click", function () {
        const account = getActiveAccount();
        if (!account) {
            openLogin();
            return;
        }
        const profilePage = document.getElementById("profilePage");
        const menuItems = document.querySelectorAll(".menu-item");
        const pages = document.querySelectorAll(".page");
        pages.forEach(function (page) { page.classList.remove("active"); });
        if (profilePage) profilePage.classList.add("active");
        menuItems.forEach(function (item) { item.classList.remove("active"); });
        if (profileMenuItem && !profileMenuItem.classList.contains("hidden")) profileMenuItem.classList.add("active");
    });
}

// Keep feedback tied to the active farmer account when possible.
const originalFeedbackSubmit = feedbackForm;
if (originalFeedbackSubmit) {
    originalFeedbackSubmit.addEventListener("submit", function () {
        const id = getActiveAccountId();
        if (!id) return;
        const accounts = getAccounts();
        if (!accounts[id]) return;
        accounts[id].feedbackCount = Number(accounts[id].feedbackCount || 0) + 1;
        saveAccounts(accounts);
    });
}

setAccountUI();
if (getActiveAccount()) renderProfileSummary(getActiveAccount());
