// CodePass practice questions database
// 20 high-fidelity medical coding questions for CPC, CCS, and CCA exam prep.
// Supports bilingual toggling (English & Hindi) and categorized grading.

const codingQuestions = [
  {
    id: 1,
    category: "Evaluation & Management (E/M)",
    english: {
      question: "A 54-year-old established patient presents to the office for follow-up of their hypertension and Type 2 diabetes. The physician reviews the patient's home glucose log, performs a detailed exam, and spends 30 minutes in total outpatient care. The medical decision making (MDM) is of moderate complexity. What CPT code should be assigned?",
      options: [
        "99213",
        "99214",
        "99215",
        "99204"
      ]
    },
    hindi: {
      question: "एक 54 वर्षीय पुराना (स्थापित) रोगी अपने उच्च रक्तचाप (Hypertension) और टाइप 2 मधुमेह (Type 2 Diabetes) के फॉलो-अप के लिए कार्यालय में आता है। चिकित्सक रोगी के घरेलू ग्लूकोज लॉग की समीक्षा करता है, विस्तृत परीक्षण करता है, और आउटपेशेंट देखभाल में कुल 30 मिनट का समय बिताता है। मेडिकल डिसीजन मेकिंग (MDM) मध्यम जटिलता (Moderate Complexity) का है। कौन सा CPT कोड असाइन किया जाना चाहिए?",
      options: [
        "99213",
        "99214",
        "99215",
        "99204"
      ]
    },
    answer: 1, // 99214 (Index 1)
    rationale: {
      english: "CPT code 99214 is used for an office or other outpatient evaluation and management (E/M) visit of an established patient. Under the 2021/2023 guidelines, an established patient E/M visit requires moderate medical decision making (MDM) or a total of 30-39 minutes of time on the date of the encounter. Here, MDM is moderate and time is 30 minutes, both supporting 99214.",
      hindi: "CPT कोड 99214 का उपयोग किसी स्थापित (पुराने) रोगी के कार्यालय या अन्य बाह्य रोगी मूल्यांकन और प्रबंधन (E/M) के लिए किया जाता है। 2021/2023 दिशानिर्देशों के तहत, स्थापित रोगी E/M यात्रा के लिए मध्यम चिकित्सा निर्णय लेने (MDM) या मुठभेड़ की तारीख पर कुल 30-39 मिनट के समय की आवश्यकता होती है। यहाँ, MDM मध्यम है और समय 30 मिनट है, जो 99214 का समर्थन करता है।"
    }
  },
  {
    id: 2,
    category: "ICD-10-CM Diagnosis Coding",
    english: {
      question: "A patient presents with diabetic peripheral neuropathic arthropathy (Charcot's joints) caused by underlying Type 2 diabetes. According to the ICD-10-CM guidelines, how should this be sequenced?",
      options: [
        "E11.610 (Type 2 diabetes with diabetic neuropathic arthropathy) followed by M14.60 (Charcot's joint)",
        "M14.60 followed by E11.610",
        "E11.9 (Type 2 diabetes without complications) followed by M14.60",
        "E11.610 alone"
      ]
    },
    hindi: {
      question: "एक रोगी अंतर्निहित टाइप 2 मधुमेह के कारण होने वाले मधुमेह परिधीय न्यूरोपैथिक आर्थ्रोपैथी (Charcot's joints) के साथ आता है। ICD-10-CM दिशानिर्देशों के अनुसार, इसे किस क्रम में रखा जाना चाहिए?",
      options: [
        "E11.610 (टाइप 2 मधुमेह मधुमेह न्यूरोपैथिक आर्थ्रोपैथी के साथ) और उसके बाद M14.60 (चारकोट जोड़)",
        "M14.60 और उसके बाद E11.610",
        "E11.9 (बिना जटिलताओं के टाइप 2 मधुमेह) और उसके बाद M14.60",
        "केवल E11.610"
      ]
    },
    answer: 0, // Index 0
    rationale: {
      english: "ICD-10-CM guidelines follow the etiology/manifestation convention (underlying condition first, followed by manifestation). The code for the underlying diabetes (E11.610) must be sequenced first, followed by the code for the manifestation (M14.60, Charcot's joint in diabetic arthropathy), as indicated by the 'use additional code' note under E11.610.",
      hindi: "ICD-10-CM दिशानिर्देश एटियलॉजी/मैनिफेस्टेशन (अंतर्निहित स्थिति पहले, उसके बाद प्रकटीकरण) नियम का पालन करते हैं। अंतर्निहित मधुमेह (E11.610) का कोड पहले रखा जाना चाहिए, उसके बाद प्रकटीकरण कोड (M14.60, मधुमेह आर्थ्रोपैथी में चारकोट जोड़) आना चाहिए, जैसा कि E11.610 के तहत 'अतिरिक्त कोड का उपयोग करें' नोट में निर्दिष्ट है।"
    }
  },
  {
    id: 3,
    category: "Modifiers & Guidelines",
    english: {
      question: "A patient presents to the clinic for a scheduled removal of a benign skin lesion from their left arm (CPT 11402). During the same visit, the patient asks the physician to evaluate a new, unrelated painful lump on their neck. The physician performs a separate, significant, and medically necessary E/M service for the neck lump. What modifier should be appended to the E/M code (99213)?",
      options: [
        "Modifier 59",
        "Modifier 51",
        "Modifier 25",
        "Modifier 24"
      ]
    },
    hindi: {
      question: "एक रोगी अपनी बाईं आंख/बांह से सौम्य त्वचा के घाव (benign skin lesion) को हटाने (CPT 11402) के लिए क्लिनिक में आता है। इसी यात्रा के दौरान, रोगी चिकित्सक से अपनी गर्दन पर एक नई, असंबंधित दर्दनाक गांठ का मूल्यांकन करने के लिए कहता है। चिकित्सक गर्दन की गांठ के लिए एक अलग, महत्वपूर्ण और चिकित्सकीय रूप से आवश्यक E/M सेवा करता है। E/M कोड (99213) में कौन सा संशोधक (Modifier) जोड़ा जाना चाहिए?",
      options: [
        "संशोधक (Modifier) 59",
        "संशोधक (Modifier) 51",
        "संशोधक (Modifier) 25",
        "संशोधक (Modifier) 24"
      ]
    },
    answer: 2, // Modifier 25 (Index 2)
    rationale: {
      english: "Modifier 25 is used to indicate a significant, separately identifiable evaluation and management (E/M) service by the same physician on the same day of a procedure or other service. Since the neck evaluation was unrelated to the scheduled skin lesion removal, appending modifier 25 to the E/M code is appropriate.",
      hindi: "संशोधक (Modifier) 25 का उपयोग उसी दिन एक ही चिकित्सक द्वारा की जाने वाली एक महत्वपूर्ण, अलग से पहचान योग्य मूल्यांकन और प्रबंधन (E/M) सेवा को इंगित करने के लिए किया जाता है। चूंकि गर्दन का मूल्यांकन निर्धारित त्वचा के घाव को हटाने से असंबंधित था, इसलिए E/M कोड में संशोधक 25 जोड़ना उचित है।"
    }
  },
  {
    id: 4,
    category: "Modifiers & Guidelines",
    english: {
      question: "A surgeon performs a surgical excision of a 2.5 cm malignant lesion on the patient's back. During the same operative session, the surgeon also performs a biopsy of a suspicious skin lesion on the patient's left thigh. Which modifier should be appended to the biopsy code (11102) to indicate it is a separate and distinct procedure?",
      options: [
        "Modifier 59",
        "Modifier 51",
        "Modifier 25",
        "Modifier 22"
      ]
    },
    hindi: {
      question: "एक सर्जन रोगी की पीठ पर 2.5 सेमी के घातक घाव (malignant lesion) को हटाने के लिए सर्जरी करता है। उसी ऑपरेशन सत्र के दौरान, सर्जन रोगी की बाईं जांघ पर एक संदिग्ध त्वचा घाव की बायोप्सी (biopsy) भी करता है। बायोप्सी कोड (11102) में कौन सा संशोधक जोड़ा जाना चाहिए ताकि यह दर्शाया जा सके कि यह एक अलग और विशिष्ट प्रक्रिया है?",
      options: [
        "संशोधक (Modifier) 59",
        "संशोधक (Modifier) 51",
        "संशोधक (Modifier) 25",
        "संशोधक (Modifier) 22"
      ]
    },
    answer: 0, // Modifier 59 (Index 0)
    rationale: {
      english: "Modifier 59 is used to identify a procedure or service that was distinct or independent from other non-E/M services performed on the same day. It is appended to the lesser procedural code (biopsy 11102) to show it occurred at a different anatomical site (thigh vs back) and was not an integral part of the excision.",
      hindi: "संशोधक (Modifier) 59 का उपयोग उस प्रक्रिया या सेवा की पहचान करने के लिए किया जाता है जो उसी दिन की गई अन्य गैर-E/M सेवाओं से अलग या स्वतंत्र थी। इसे कमतर प्रक्रियात्मक कोड (बायोप्सी 11102) में जोड़ा जाता है ताकि यह दिखाया जा सके कि यह एक अलग शारीरिक स्थान (जांघ बनाम पीठ) पर हुई थी और हटाने की मुख्य प्रक्रिया का हिस्सा नहीं थी।"
    }
  },
  {
    id: 5,
    category: "Anesthesia Coding",
    english: {
      question: "An anesthesiologist provides anesthesia services for a patient undergoing a total hip replacement. The patient has severe systemic disease that is a constant threat to life (e.g., severe unstable angina). What physical status modifier should be reported?",
      options: [
        "P2",
        "P3",
        "P4",
        "P5"
      ]
    },
    hindi: {
      question: "एक एनेस्थेसियोलॉजिस्ट टोटल हिप रिप्लेसमेंट (कूल्हा प्रत्यारोपण) कराने वाले रोगी को एनेस्थीसिया सेवाएं प्रदान करता है। रोगी को गंभीर प्रणालीगत बीमारी (severe systemic disease) है जो जीवन के लिए निरंतर खतरा है (जैसे, गंभीर अस्थिर एनजाइना)। कौन सा शारीरिक स्थिति संशोधक (Physical Status Modifier) रिपोर्ट किया जाना चाहिए?",
      options: [
        "P2",
        "P3",
        "P4",
        "P5"
      ]
    },
    answer: 2, // P4 (Index 2)
    rationale: {
      english: "Physical status modifier P4 is defined as a patient with severe systemic disease that is a constant threat to life. P1 is normal healthy, P2 is mild systemic disease, P3 is severe systemic disease that is not a threat, and P5 is a moribund patient not expected to survive without the operation.",
      hindi: "शारीरिक स्थिति संशोधक (Physical Status Modifier) P4 को एक गंभीर प्रणालीगत बीमारी वाले रोगी के रूप में परिभाषित किया गया है जो जीवन के लिए निरंतर खतरा है। P1 सामान्य स्वस्थ है, P2 हल्की बीमारी है, P3 गंभीर बीमारी है जो खतरा नहीं है, और P5 एक मरणासन्न रोगी है जिसके ऑपरेशन के बिना बचने की उम्मीद नहीं है।"
    }
  },
  {
    id: 6,
    category: "CPT Surgery - Integumentary",
    english: {
      question: "A patient undergoes surgical debridement of a diabetic foot ulcer. The physician debrides 15 sq cm of subcutaneous tissue, muscle, and bone. What CPT code(s) should be reported?",
      options: [
        "11044",
        "11042",
        "11043, 11047",
        "11044, 11047"
      ]
    },
    hindi: {
      question: "एक रोगी के मधुमेह पैर के अल्सर (diabetic foot ulcer) की सर्जिकल डिब्राइडमेंट (सफाई) की जाती है। चिकित्सक उपत्वचीय ऊतक (subcutaneous tissue), मांसपेशियों और हड्डी के 15 वर्ग सेमी को डिब्राइड करता है। कौन सा CPT कोड रिपोर्ट किया जाना चाहिए?",
      options: [
        "11044",
        "11042",
        "11043, 11047",
        "11044, 11047"
      ]
    },
    answer: 0, // 11044 (Index 0)
    rationale: {
      english: "CPT code 11044 is reported for debridement of bone, including epidermis, dermis, subcutaneous tissue, and muscle/fascia, for the first 20 sq cm or less. Since bone was debrided and the total area is 15 sq cm, 11044 is the correct code.",
      hindi: "CPT कोड 11044 पहले 20 वर्ग सेमी या उससे कम के लिए एपिडर्मिस, डर्मिस, चमड़े के नीचे के ऊतकों और मांसपेशियों/प्रावरणी सहित हड्डी के डिब्राइडमेंट के लिए रिपोर्ट किया जाता है। चूंकि हड्डी को डिब्राइड किया गया था और कुल क्षेत्रफल 15 वर्ग सेमी है, इसलिए 11044 सही कोड है।"
    }
  },
  {
    id: 7,
    category: "CPT Surgery - Musculoskeletal",
    english: {
      question: "A patient presents with a displaced distal radial fracture. The orthopedic surgeon performs closed treatment of the fracture with manipulation, followed by application of a short arm fiberglass cast. What CPT code is billed for the treatment?",
      options: [
        "25600",
        "25605",
        "25606",
        "29125"
      ]
    },
    hindi: {
      question: "एक रोगी विस्थापित डिस्टल रेडियल फ्रैक्चर (displaced distal radial fracture) के साथ आता है। आर्थोपेडिक सर्जन हेरफेर (manipulation) के साथ फ्रैक्चर का बंद उपचार (closed treatment) करता है, जिसके बाद शॉर्ट आर्म फाइबरग्लास कास्ट लगाया जाता है। उपचार के लिए कौन सा CPT कोड बिल किया जाएगा?",
      options: [
        "25600",
        "25605",
        "25606",
        "29125"
      ]
    },
    answer: 1, // 25605 (Index 1)
    rationale: {
      english: "CPT code 25605 is for the closed treatment of a distal radial fracture with manipulation. Code 25600 is without manipulation. The application of the first cast or splint is included in the surgical package, so it is not coded separately.",
      hindi: "CPT कोड 25605 हेरफेर (manipulation) के साथ डिस्टल रेडियल फ्रैक्चर के बंद उपचार के लिए है। कोड 25600 बिना हेरफेर के लिए है। पहले कास्ट या स्प्लिंट को लगाना सर्जिकल पैकेज में शामिल होता है, इसलिए इसे अलग से कोड नहीं किया जाता है।"
    }
  },
  {
    id: 8,
    category: "CPT Surgery - Cardiovascular",
    english: {
      question: "A patient undergoes a coronary artery bypass graft (CABG) surgery using two coronary venous grafts (saphenous vein) and a single arterial graft (internal mammary artery to Left Anterior Descending artery). How should this surgical combination be coded?",
      options: [
        "33533 and 33511",
        "33511 and 33517",
        "33533 and 33518",
        "33512 and 33533"
      ]
    },
    hindi: {
      question: "एक रोगी की दो कोरोनरी वेनस ग्राफ्ट (saphenous vein) और एक सिंगल आर्टेरियल ग्राफ्ट (internal mammary artery to Left Anterior Descending artery) का उपयोग करके कोरोनरी आर्टरी बाईपास ग्राफ्ट (CABG) सर्जरी की जाती है। इस सर्जिकल संयोजन को कैसे कोड किया जाना चाहिए?",
      options: [
        "33533 और 33511",
        "33511 और 33517",
        "33533 और 33518",
        "33512 और 33533"
      ]
    },
    answer: 2, // 33533 and 33518 (Index 2)
    rationale: {
      english: "According to CPT guidelines, when both arterial and venous grafts are performed, the arterial graft is coded first using the primary code (33533 for single arterial graft). The venous grafts are coded using the add-on code for combined arterial-venous grafting (33518 for two venous grafts). Code 33511 is for venous grafting only and is not used in combination.",
      hindi: "CPT दिशानिर्देशों के अनुसार, जब आर्टेरियल और वेनस दोनों ग्राफ्ट किए जाते हैं, तो मुख्य आर्टेरियल ग्राफ्ट कोड (एकल आर्टेरियल ग्राफ्ट के लिए 33533) पहले कोड किया जाता है। वेनस ग्राफ्ट को संयुक्त आर्टेरियल-वेनस ग्राफ्टिंग के लिए ऐड-ऑन कोड (दो वेनस ग्राफ्ट के लिए 33518) का उपयोग करके कोड किया जाता है।"
    }
  },
  {
    id: 9,
    category: "CPT Surgery - Digestive",
    english: {
      question: "A patient undergoes a screening colonoscopy. During the procedure, the gastroenterologist identifies a 4mm polyp in the descending colon and removes it using cold forceps. What CPT code(s) should be reported?",
      options: [
        "45378 (diagnostic/screening colonoscopy)",
        "45380 (colonoscopy with single or multiple biopsies)",
        "45384 (colonoscopy with removal by hot biopsy forceps)",
        "45385 (colonoscopy with removal by snare technique)"
      ]
    },
    hindi: {
      question: "एक रोगी की स्क्रीनिंग कोलोनोस्कोपी (screening colonoscopy) की जाती है। प्रक्रिया के दौरान, गैस्ट्रोएंटेरोलॉजिस्ट अवरोही कोलन में 4 मिमी के पॉलीप की पहचान करता है और इसे कोल्ड फोर्सेप्स (cold forceps) का उपयोग करके हटा देता है। कौन सा CPT कोड रिपोर्ट किया जाना चाहिए?",
      options: [
        "45378 (नैदानिक/स्क्रीनिंग कोलोनोस्कोपी)",
        "45380 (एकल या एकाधिक बायोप्सी के साथ कोलोनोस्कोपी)",
        "45384 (हॉट बायोप्सी फोर्सेप्स द्वारा हटाने के साथ कोलोनोस्कोपी)",
        "45385 (स्नेयर तकनीक द्वारा हटाने के साथ कोलोनोस्कोपी)"
      ]
    },
    answer: 1, // 45380 (Index 1)
    rationale: {
      english: "According to CPT guidelines, removal of a polyp or lesion with biopsy forceps (cold or hot) without the use of a snare is coded as a biopsy (45380). If a snare were used, it would be 45385. Since it was removed using forceps, 45380 is correct.",
      hindi: "CPT दिशानिर्देशों के अनुसार, बिना स्नेयर (snare) के उपयोग के बायोप्सी फोर्सेप्स (कोल्ड या हॉट) के साथ पॉलीप या घाव को हटाने को बायोप्सी (45380) के रूप में कोड किया जाता है। यदि स्नेयर का उपयोग किया गया होता, तो यह 45385 होता।"
    }
  },
  {
    id: 10,
    category: "HCPCS Level II Coding & Drugs",
    english: {
      question: "A patient receives an intramuscular injection of 150 mg of Depo-Provera (medroxyprogesterone acetate) for contraception at the health clinic. In addition to the administration code, what HCPCS Level II code should be assigned for the drug?",
      options: [
        "J1050 (1 mg)",
        "J3490 (Unclassified drugs)",
        "J1050 (150 mg)",
        "J1050 with unit quantity of 150"
      ]
    },
    hindi: {
      question: "एक रोगी को स्वास्थ्य क्लिनिक में गर्भनिरोधक के लिए डिपो-प्रोवेरा (मेड्रॉक्सीप्रोजेस्टेरोन एसीटेट) का 150 मिलीग्राम का इंट्रामस्क्युलर इंजेक्शन प्राप्त होता है। प्रशासन कोड के अलावा, दवा के लिए कौन सा HCPCS लेवल II कोड असाइन किया जाना चाहिए?",
      options: [
        "J1050 (1 मिलीग्राम)",
        "J3490 (अवर्गीकृत दवाएं)",
        "J1050 (150 मिलीग्राम)",
        "J1050 150 की इकाई मात्रा के साथ"
      ]
    },
    answer: 2, // J1050 (150 mg) (Index 2)
    rationale: {
      english: "HCPCS Level II code J1050 description is 'Injection, medroxyprogesterone acetate, 150 mg'. Since the dosage administered is exactly 150 mg, the code is reported with 1 unit of J1050.",
      hindi: "HCPCS लेवल II कोड J1050 का विवरण 'इंजेक्शन, मेड्रॉक्सीप्रोजेस्टेरोन एसीटेट, 150 मिलीग्राम' है। चूंकि दी गई खुराक ठीक 150 मिलीग्राम है, इसलिए कोड को J1050 की 1 इकाई के साथ रिपोर्ट किया जाता है।"
    }
  },
  {
    id: 11,
    category: "ICD-10-CM Diagnosis Coding",
    english: {
      question: "An asymptomatic 50-year-old female patient presents for a routine screening mammogram. She has no personal or family history of breast cancer. What is the correct primary ICD-10-CM diagnosis code?",
      options: [
        "Z12.31 (Encounter for screening mammogram for malignant neoplasm of breast)",
        "Z80.3 (Family history of malignant neoplasm of breast)",
        "C50.919 (Malignant neoplasm of unspecified breast)",
        "Z00.00 (Encounter for general adult medical examination)"
      ]
    },
    hindi: {
      question: "एक स्पर्शोन्मुख (बिना लक्षणों वाली) 50 वर्षीय महिला रोगी नियमित स्क्रीनिंग मैमोग्राम के लिए आती है। स्तन कैंसर का उसका कोई व्यक्तिगत या पारिवारिक इतिहास नहीं है। सही प्राथमिक ICD-10-CM निदान कोड क्या है?",
      options: [
        "Z12.31 (स्तन के घातक नियोप्लाज्म के लिए स्क्रीनिंग मैमोग्राम के लिए मुठभेड़)",
        "Z80.3 (स्तन के घातक नियोप्लाज्म का पारिवारिक इतिहास)",
        "C50.919 (अनिर्दिष्ट स्तन का घातक नियोप्लाज्म)",
        "Z00.00 (सामान्य वयस्क चिकित्सा परीक्षा के लिए मुठभेड़)"
      ]
    },
    answer: 0, // Z12.31 (Index 0)
    rationale: {
      english: "For routine screening mammograms, code Z12.31 is assigned as the primary diagnosis. Screening codes are used when a patient presents for testing without symptoms, and Z12.31 specifically identifies breast cancer screening mammograms.",
      hindi: "नियमित स्क्रीनिंग मैमोग्राम के लिए, कोड Z12.31 को प्राथमिक निदान के रूप में असाइन किया जाता है। स्क्रीनिंग कोड का उपयोग तब किया जाता है जब कोई रोगी बिना लक्षणों के परीक्षण के लिए प्रस्तुत होता है।"
    }
  },
  {
    id: 12,
    category: "ICD-10-CM Diagnosis Coding",
    english: {
      question: "A patient is admitted to the hospital with acute renal failure. The patient also has documented stage 3 chronic kidney disease (CKD) and benign essential hypertension. What are the correct ICD-10-CM codes and their sequencing?",
      options: [
        "N17.9 (Acute kidney failure), I10 (Hypertension), N18.30 (Stage 3 CKD)",
        "N17.9, I12.9 (Hypertensive chronic kidney disease), N18.30",
        "I12.9, N17.9, N18.30",
        "N17.9, N18.30, I10"
      ]
    },
    hindi: {
      question: "एक रोगी को तीव्र गुर्दे की विफलता (Acute Renal Failure) के कारण अस्पताल में भर्ती कराया जाता है। रोगी के पास क्रोनिक किडनी रोग (CKD) चरण 3 और उच्च रक्तचाप (Hypertension) भी प्रलेखित है। सही ICD-10-CM कोड और उनका क्रम क्या है?",
      options: [
        "N17.9 (तीव्र गुर्दे की विफलता), I10 (उच्च रक्तचाप), N18.30 (चरण 3 CKD)",
        "N17.9, I12.9 (उच्च रक्तचाप से ग्रस्त क्रोनिक किडनी रोग), N18.30",
        "I12.9, N17.9, N18.30",
        "N17.9, N18.30, I10"
      ]
    },
    answer: 1, // N17.9, I12.9, N18.30 (Index 1)
    rationale: {
      english: "ICD-10-CM guidelines assume a causal relationship between hypertension and chronic kidney disease, coded as a combination code under category I12.-. Since the primary reason for admission is acute kidney failure, N17.9 is sequenced first, followed by the hypertensive kidney disease code I12.9, and then N18.30 to identify the stage of CKD.",
      hindi: "ICD-10-CM दिशानिर्देश उच्च रक्तचाप और क्रोनिक किडनी रोग के बीच एक कारण संबंध मानते हैं, जिसे श्रेणी I12.- के तहत संयोजन कोड के रूप में कोड किया जाता है। चूंकि भर्ती का प्राथमिक कारण तीव्र गुर्दे की विफलता है, इसलिए N17.9 पहले आता है, उसके बाद I12.9 और फिर N18.30।"
    }
  },
  {
    id: 13,
    category: "CPT Surgery - Respiratory",
    english: {
      question: "A pulmonologist performs a diagnostic bronchoscopy. During the same bronchoscopy session, they perform a transbronchial needle aspiration biopsy of the trachea and a separate bronchial alveolar lavage. What CPT codes should be reported?",
      options: [
        "31622 (diagnostic), 31629 (biopsy), 31624 (lavage)",
        "31629, 31624",
        "31629, 31624-51",
        "31625, 31624"
      ]
    },
    hindi: {
      question: "एक पल्मोनोलॉजिस्ट डायग्नोस्टिक ब्रोंकोस्कोपी (diagnostic bronchoscopy) करता है। उसी ब्रोंकोस्कोपी सत्र के दौरान, वे श्वासनली की ट्रांसब्रोंकियल सुई आकांक्षा बायोप्सी (transbronchial needle aspiration biopsy) और एक अलग ब्रोन्कियल वायुकोशीय पानी से धोना (bronchial alveolar lavage) करते हैं। कौन से CPT कोड रिपोर्ट किए जाने चाहिए?",
      options: [
        "31622 (नैदानिक), 31629 (बायोप्सी), 31624 (धोना)",
        "31629, 31624",
        "31629, 31624-51",
        "31625, 31624"
      ]
    },
    answer: 1, // 31629, 31624 (Index 1)
    rationale: {
      english: "The diagnostic bronchoscopy (31622) is a separate procedure and is not coded when a surgical/biopsy bronchoscopy is performed. Both the transbronchial needle aspiration (31629) and the alveolar lavage (31624) are reported. Multiple procedure modifiers depend on billing policies, but CPT code combinations 31629 and 31624 are the correct active codes.",
      hindi: "नैदानिक ​​ब्रोंकोस्कोपी (31622) एक अलग प्रक्रिया है और सर्जिकल/बायोप्सी ब्रोंकोस्कोपी किए जाने पर इसे कोड नहीं किया जाता है। ट्रांसब्रोंकियल सुई आकांक्षा (31629) और वायुकोशीय कुल्ला (31624) दोनों रिपोर्ट किए जाते हैं।"
    }
  },
  {
    id: 14,
    category: "CPT Surgery - Urinary",
    english: {
      question: "A patient undergoes a cystourethroscopy with biopsy of the bladder. The doctor also performs a separate cystourethroscopy with fulguration of a 1.5 cm bladder tumor during the same operative session. What CPT code(s) should be reported?",
      options: [
        "52204 (biopsy) and 52234 (fulguration, 0.5 to 2.0 cm)",
        "52234",
        "52204",
        "52234 and 52204-59"
      ]
    },
    hindi: {
      question: "एक रोगी की मूत्राशय की बायोप्सी के साथ सिस्टोयूरेथ्रोस्कोपी की जाती है। डॉक्टर उसी ऑपरेशन सत्र के दौरान 1.5 सेमी मूत्राशय के ट्यूमर के फुलगुरेशन (fulguration) के साथ एक अलग सिस्टोयूरेथ्रोस्कोपी भी करता है। कौन सा CPT कोड रिपोर्ट किया जाना चाहिए?",
      options: [
        "52204 (बायोप्सी) और 52234 (फुलगुरेशन, 0.5 से 2.0 सेमी)",
        "52234",
        "52204",
        "52234 और 52204-59"
      ]
    },
    answer: 1, // 52234 (Index 1)
    rationale: {
      english: "According to CPT guidelines, when a biopsy is performed on a bladder lesion and that same lesion/tumor or another lesion is fulgurated/excised in the same session, the biopsy (52204) is considered incidental and is not coded separately. Only the higher-valued excision/destruction (52234) is reported.",
      hindi: "CPT दिशानिर्देशों के अनुसार, जब मूत्राशय के घाव पर बायोप्सी की जाती है और उसी सत्र में उस घाव/ट्यूमर या किसी अन्य घाव को जलाया/नष्ट किया जाता है, तो बायोप्सी (52204) को प्रासंगिक माना जाता है और इसे अलग से कोड नहीं किया जाता है। केवल उच्च-मूल्य वाले विनाश (52234) की रिपोर्ट की जाती है।"
    }
  },
  {
    id: 15,
    category: "CPT Surgery - Nervous System",
    english: {
      question: "A physician performs a diagnostic lumbar spinal puncture (spinal tap) on an adult patient to obtain cerebrospinal fluid for laboratory testing. What is the correct CPT code?",
      options: [
        "62270",
        "62272",
        "62273",
        "62328"
      ]
    },
    hindi: {
      question: "एक चिकित्सक प्रयोगशाला परीक्षण के लिए मस्तिष्कमेरु द्रव (cerebrospinal fluid) प्राप्त करने के लिए एक वयस्क रोगी पर एक नैदानिक काठ का रीढ़ की हड्डी में पंचर (spinal tap) करता है। सही CPT कोड क्या है?",
      options: [
        "62270",
        "62272",
        "62273",
        "62328"
      ]
    },
    answer: 0, // 62270 (Index 0)
    rationale: {
      english: "CPT code 62270 is reported for a diagnostic lumbar spinal puncture. Code 62272 is for therapeutic spinal drainage, which is not what was performed in this scenario.",
      hindi: "नैदानिक काठ स्पाइनल पंचर (diagnostic lumbar spinal puncture) के लिए CPT कोड 62270 रिपोर्ट किया जाता है। कोड 62272 चिकित्सीय स्पाइनल ड्रेनेज (therapeutic spinal drainage) के लिए है।"
    }
  },
  {
    id: 16,
    category: "Radiology Coding",
    english: {
      question: "A patient is sent to radiology for a chest X-ray. The radiologist takes a posteroanterior (PA) view and a lateral view. What CPT code should be reported?",
      options: [
        "71045 (chest, single view)",
        "71046 (chest, 2 views)",
        "71047 (chest, 3 views)",
        "71046-50 (bilateral views)"
      ]
    },
    hindi: {
      question: "एक रोगी को छाती के एक्स-रे के लिए रेडियोलॉजी भेजा जाता है। रेडियोलॉजिस्ट एक पोस्टरोएंटेरियर (PA) दृश्य और एक पार्श्व (lateral) दृश्य लेता है। कौन सा CPT कोड रिपोर्ट किया जाना चाहिए?",
      options: [
        "71045 (छाती, एकल दृश्य)",
        "71046 (छाती, 2 दृश्य)",
        "71047 (छाती, 3 दृश्य)",
        "71046-50 (द्विपक्षीय दृश्य)"
      ]
    },
    answer: 1, // 71046 (Index 1)
    rationale: {
      english: "CPT code 71046 represents a radiologic examination of the chest with 2 views (here, PA and lateral). Code 71045 is for a single view.",
      hindi: "CPT कोड 71046 छाती की रेडियोलॉजिकल परीक्षा को 2 दृश्यों (यहाँ, PA और पार्श्व) के साथ दर्शाता है। कोड 71045 एक एकल दृश्य (single view) के लिए है।"
    }
  },
  {
    id: 17,
    category: "Pathology & Laboratory",
    english: {
      question: "A physician orders a Basic Metabolic Panel (BMP) and a Calcium, total test for a patient. The lab technician performs these tests as a group. What is the correct panel coding representation?",
      options: [
        "Report 80048 (Basic Metabolic Panel) only, as calcium is already included in this panel.",
        "Report 80053 (Comprehensive Metabolic Panel) instead, as it includes calcium.",
        "Report 80048 and 82310 (Calcium) separately.",
        "Report 80047 (Basic Metabolic Panel with ionized calcium)."
      ]
    },
    hindi: {
      question: "एक चिकित्सक एक रोगी के लिए बेसिक मेटाबॉलिक पैनल (BMP) और कैल्शियम, कुल परीक्षण (Calcium, total test) का आदेश देता है। लैब तकनीशियन इन परीक्षणों को एक समूह के रूप में करता है। सही पैनल कोडिंग प्रतिनिधित्व क्या है?",
      options: [
        "केवल 80048 (बेसिक मेटाबॉलिक पैनल) रिपोर्ट करें, क्योंकि कैल्शियम पहले से ही इस पैनल में शामिल है।",
        "इसके बजाय 80053 (व्यापक मेटाबॉलिक पैनल) रिपोर्ट करें, क्योंकि इसमें कैल्शियम शामिल है।",
        "80048 और 82310 (कैल्शियम) को अलग-अलग रिपोर्ट करें।",
        "80047 (आयनीकृत कैल्शियम के साथ बेसिक मेटाबॉलिक पैनल) रिपोर्ट करें।"
      ]
    },
    answer: 0, // Index 0
    rationale: {
      english: "CPT code 80048 (Basic Metabolic Panel) includes total calcium, carbon dioxide, chloride, creatinine, glucose, potassium, sodium, and urea nitrogen (BUN). Therefore, performing BMP automatically covers total calcium, and reporting 80048 alone is correct.",
      hindi: "CPT कोड 80048 (बेसिक मेटाबॉलिक पैनल) में कुल कैल्शियम, कार्बन डाइऑक्साइड, क्लोराइड, क्रिएटिनिन, ग्लूकोज, पोटेशियम, सोडियम और यूरिया नाइट्रोजन (BUN) शामिल हैं। इसलिए, BMP करने से कुल कैल्शियम स्वतः ही कवर हो जाता है।"
    }
  },
  {
    id: 18,
    category: "Modifiers & Guidelines",
    english: {
      question: "A surgeon performs a bilateral screening mammogram on a patient. What modifier is typically appended to indicate the procedure was bilateral?",
      options: [
        "Modifier 50",
        "Modifier 51",
        "Modifier 52",
        "Modifier RT and LT"
      ]
    },
    hindi: {
      question: "एक सर्जन एक रोगी पर द्विपक्षीय (दोनों पक्षों का) Screening mammogram करता है। यह इंगित करने के लिए कि प्रक्रिया द्विपक्षीय थी, आमतौर पर कौन सा संशोधक जोड़ा जाता है?",
      options: [
        "संशोधक (Modifier) 50",
        "संशोधक (Modifier) 51",
        "संशोधक (Modifier) 52",
        "संशोधक (Modifier) RT और LT"
      ]
    },
    answer: 0, // Modifier 50 (Index 0)
    rationale: {
      english: "Modifier 50 is used to report bilateral procedures that are performed at the same operative session. Depending on payer guidelines, some might accept RT/LT modifiers, but CPT standard bilateral modifier is 50.",
      hindi: "संशोधक (Modifier) 50 का उपयोग उन द्विपक्षीय प्रक्रियाओं (bilateral procedures) की रिपोर्ट करने के लिए किया जाता है जो एक ही ऑपरेशन सत्र में की जाती हैं।"
    }
  },
  {
    id: 19,
    category: "ICD-10-CM Diagnosis Coding",
    english: {
      question: "A patient falls off a ladder at home and fractures their distal radius. Which of the following is true regarding External Cause codes (V00-Y99) in ICD-10-CM?",
      options: [
        "External cause codes can be reported as the principal/primary diagnosis.",
        "External cause codes are only reported for work-related accidents.",
        "External cause codes are never reported as primary codes and must be sequenced after the injury diagnosis code.",
        "External cause codes are optional and never billed under any circumstances."
      ]
    },
    hindi: {
      question: "एक रोगी घर पर सीढ़ी से गिर जाता है और उसकी डिस्टल रेडियस टूट जाती है। ICD-10-CM में बाहरी कारण कोड (External Cause codes V00-Y99) के संबंध में निम्नलिखित में से कौन सा सत्य है?",
      options: [
        "बाहरी कारण कोड को प्रमुख/प्राथमिक निदान के रूप में रिपोर्ट किया जा सकता है।",
        "बाहरी कारण कोड केवल काम से संबंधित दुर्घटनाओं के लिए रिपोर्ट किए जाते हैं।",
        "बाहरी कारण कोड को कभी भी प्राथमिक कोड के रूप में रिपोर्ट नहीं किया जाता है और चोट निदान कोड के बाद अनुक्रमित किया जाना चाहिए।",
        "बाहरी कारण कोड वैकल्पिक हैं और किसी भी परिस्थिति में बिल नहीं किए जाते हैं।"
      ]
    },
    answer: 2, // Index 2
    rationale: {
      english: "According to ICD-10-CM guidelines, External Cause codes are never sequenced as the primary or principal diagnosis. They are secondary codes used to describe the cause, intent, place of occurrence, and activity, and must follow the injury code.",
      hindi: "ICD-10-CM दिशानिर्देशों के अनुसार, बाहरी कारण कोड (External Cause codes) को कभी भी प्राथमिक निदान के रूप में अनुक्रमित नहीं किया जाता है। वे चोट कोड के बाद आने वाले माध्यमिक कोड हैं।"
    }
  },
  {
    id: 20,
    category: "Modifiers & Guidelines",
    english: {
      question: "Which of the following describes the chief difference between the coding definition of 'Principal Diagnosis' and 'First-Listed Diagnosis'?",
      options: [
        "Principal diagnosis is used for outpatient services, and first-listed is used for inpatient hospital admissions.",
        "Principal diagnosis is used for inpatient admissions (the condition established after study to be chiefly responsible for occasioning the admission), whereas first-listed diagnosis is used for outpatient services.",
        "Principal diagnosis is determined by the patient's symptoms, and first-listed diagnosis is determined by the final pathology report.",
        "There is no difference; they are interchangeable in all healthcare settings."
      ]
    },
    hindi: {
      question: "निम्नलिखित में से कौन 'मुख्य निदान' (Principal Diagnosis) और 'प्रथम-सूचीबद्ध निदान' (First-Listed Diagnosis) की कोडिंग परिभाषा के बीच मुख्य अंतर का वर्णन करता है?",
      options: [
        "मुख्य निदान का उपयोग आउटपेशेंट सेवाओं के लिए किया जाता है, और प्रथम-सूचीबद्ध का उपयोग इनपेशेंट अस्पताल में भर्ती के लिए किया जाता है।",
        "मुख्य निदान का उपयोग इनपेशेंट अस्पताल में भर्ती के लिए किया जाता है (वह स्थिति जो अध्ययन के बाद भर्ती के लिए मुख्य रूप से जिम्मेदार पाई जाती है), जबकि प्रथम-सूचीबद्ध निदान का उपयोग आउटपेशेंट सेवाओं के लिए किया जाता है।",
        "मुख्य निदान रोगी के लक्षणों से निर्धारित होता है, और प्रथम-सूचीबद्ध निदान अंतिम विकृति रिपोर्ट (pathology report) से निर्धारित होता है।",
        "कोई अंतर नहीं है; वे सभी स्वास्थ्य सेवा सेटिंग्स में विनिमेय हैं।"
      ]
    },
    answer: 1, // Index 1
    rationale: {
      english: "In inpatient coding, the 'Principal Diagnosis' is defined as the condition established after study to be chiefly responsible for occasioning the admission. In outpatient coding, the term 'First-Listed Diagnosis' is used instead, since outpatient visits do not involve formal inpatient admissions.",
      hindi: "इनपेशेंट कोडिंग में, 'मुख्य निदान' (Principal Diagnosis) को उस स्थिति के रूप में परिभाषित किया जाता है जो अध्ययन के बाद अस्पताल में भर्ती के लिए मुख्य रूप से जिम्मेदार पाई जाती है। आउटपेशेंट कोडिंग में, इसके बजाय 'प्रथम-सूचीबद्ध निदान' (First-Listed Diagnosis) शब्द का उपयोग किया जाता है।"
    }
  }
];

// If node environment, export for test validation
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { codingQuestions };
}
