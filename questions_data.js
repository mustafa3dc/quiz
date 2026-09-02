const QUIZ_QUESTIONS = [
  {
    "id": 1,
    "topic": "Condensers and evaporators",
    "question": "In a vapor compression refrigeration system the condenser is in the……….",
    "question_ar": "في منظومة التبريد بالانضغاط البخاري، يقع المكثف في:",
    "options": {
      "A": "System high pressure side.",
      "B": "System low pressure side",
      "C": "Between high and low side",
      "D": "None of these",
      "E": "All of these"
    },
    "answer": "A",
    "note": "المكثف يقع دائماً في جانب الضغط العالي (High pressure side) لمنظومة التبريد بالانضغاط البخاري.",
    "clue": "🔑 شفرة الامتحان: المكثف (Condenser) يقع دائماً بالضغط العالي High pressure side (A).",
    "keyword": "condenser is in"
  },
  {
    "id": 2,
    "topic": "Condensers and evaporators",
    "question": "In a vapor compression refrigeration system the evaporator is in the.............",
    "question_ar": "في منظومة التبريد بالانضغاط البخاري، يقع المبخر في:",
    "options": {
      "A": "System high pressure side.",
      "B": "System low pressure side.",
      "C": "Between high and low side",
      "D": "None of above",
      "E": "Both A and B"
    },
    "answer": "B",
    "note": "المبخر يقع في جانب الضغط المنخفض (Low pressure side) لامتصاص الحرارة عند درجة حرارة وضغط منخفضين.",
    "clue": "🔑 شفرة الامتحان: المبخر (Evaporator) يقع دائماً بالضغط الواطئ Low pressure side (B).",
    "keyword": "evaporator is in"
  },
  {
    "id": 3,
    "topic": "Condensers and evaporators",
    "question": "In a vapor compression refrigeration system the component that absorbing heat is",
    "question_ar": "في منظومة التبريد بالانضغاط البخاري، الجزء المسؤول عن امتصاص وسحب الحرارة هو:",
    "options": {
      "A": "Evaporator",
      "B": "Condenser",
      "C": "Compressor",
      "D": "Expansion valve",
      "E": "Both A and C"
    },
    "answer": "A",
    "note": "المبخر (Evaporator) هو الجزء المسؤول عن سحب وامتصاص الحرارة من الحيز المراد تبريده.",
    "clue": "🔑 شفرة الامتحان: امتصاص وسحب الحرارة (Absorbing heat) وظيفة المبخر Evaporator (A).",
    "keyword": "absorbing heat"
  },
  {
    "id": 4,
    "topic": "Condensers and evaporators",
    "question": "In a vapor compression refrigeration system the component that rejecting heat is",
    "question_ar": "في منظومة التبريد بالانضغاط البخاري، الجزء المسؤول عن طرد ونبذ الحرارة هو:",
    "options": {
      "A": "Evaporator",
      "B": "Condenser",
      "C": "Compressor",
      "D": "Expansion valve",
      "E": "Both A and B"
    },
    "answer": "B",
    "note": "المكثف (Condenser) هو الجزء المسؤول عن طرد الحرارة إلى الوسط المحيط.",
    "clue": "🔑 شفرة الامتحان: طرد ونبذ الحرارة (Rejecting heat) وظيفة المكثف Condenser (B).",
    "keyword": "rejecting heat"
  },
  {
    "id": 5,
    "topic": "Condensers and evaporators",
    "question": "In a vapor compression refrigeration system the evaporator receives refrigerant at",
    "question_ar": "في منظومة التبريد بالانضغاط البخاري، يستلم المبخر مائع التبريد عند حالة:",
    "options": {
      "A": "Low pressure liquid plus vapor",
      "B": "Low pressure vapor",
      "C": "High pressure liquid",
      "D": "High pressure vapor",
      "E": "None of these"
    },
    "answer": "A",
    "note": "بعد صمام التمدد، يدخل مائع التبريد إلى المبخر كخليط ثنائي الطور (سائل + بخار عند ضغط منخفض).",
    "clue": "🔑 شفرة الامتحان: مدخل المبخر (Evaporator receives) سائل + بخار بضغط واطئ Liquid plus vapor (A).",
    "keyword": "evaporator receives refrigerant at"
  },
  {
    "id": 6,
    "topic": "Condensers and evaporators",
    "question": "In a vapor compression refrigeration system the condenser receives refrigerant at",
    "question_ar": "في منظومة التبريد بالانضغاط البخاري، يستلم المكثف مائع التبريد عند حالة:",
    "options": {
      "A": "High pressure liquid",
      "B": "Low pressure Liquid",
      "C": "High pressure vapor",
      "D": "Low pressure vapor",
      "E": "Both A and C"
    },
    "answer": "C",
    "note": "المكثف يستلم بخار محمص عالي الضغط والحرارة خارجاً من الضاغط (High pressure vapor).",
    "clue": "🔑 شفرة الامتحان: مدخل المكثف (Condenser receives) بخار محمص عالي الضغط High pressure vapor (C).",
    "keyword": "condenser receives refrigerant at"
  },
  {
    "id": 7,
    "topic": "Condensers and evaporators",
    "question": "In the shell and tube condenser, …………..",
    "question_ar": "في المكثف ذو الغلاف والأنابيب (Shell and tube):",
    "options": {
      "A": "The refrigerant inside the tubes and the water in the shell",
      "B": "The water inside the tubes and the refrigerant in the shell",
      "C": "None of above",
      "D": "All of Above",
      "E": "Both A and B"
    },
    "answer": "B",
    "note": "في المكثف ذو الغلاف والأنابيب، يتدفق الماء داخل الأنابيب ومائع التبريد داخل الغلاف لتسهيل التنظيف والتكثيف.",
    "clue": "🔑 شفرة الامتحان: مكثف Shell & Tube ➔ الماء داخل الأنابيب Water inside tubes لتسهيل تنظيف الترسبات (B).",
    "keyword": "shell and tube condenser"
  },
  {
    "id": 8,
    "topic": "Condensers and evaporators",
    "question": "In the air-cooled condenser, …………",
    "question_ar": "في المكثف المبرد بالهواء:",
    "options": {
      "A": "The refrigerant inside the tubes and the air outside",
      "B": "The air inside the tubes and the refrigerant outside",
      "C": "None of above",
      "D": "All of Above",
      "E": "Both A and B"
    },
    "answer": "A",
    "note": "في المكثفات المبردة بالهواء، يمر المائع داخل الأنابيب والهواء يتدفق خارجها على الزعانف.",
    "clue": "🔑 شفرة الامتحان: مكثف Air-cooled ➔ المائع داخل الأنابيب والهواء يمر برة Refrigerant inside tubes (A).",
    "keyword": "air-cooled condenser"
  },
  {
    "id": 9,
    "topic": "Condensers and evaporators",
    "question": "In a direct expansion finned coil evaporator the flow will be.............",
    "question_ar": "في مبخر التمدد المباشر ذو الملف المزوعن، يكون الجريان:",
    "options": {
      "A": "The air inside evaporator and the refrigerant outside",
      "B": "The refrigerant inside evaporator and the air outside.",
      "C": "The refrigerant and the air inside evaporators.",
      "D": "None of above",
      "E": "All of these"
    },
    "answer": "B",
    "note": "مائع التبريد يتبخر داخل ملف الأنابيب والهواء يمر خارجياً بين الزعانف.",
    "clue": "🔑 شفرة الامتحان: مبخر Finned coil ➔ مائع التبريد يتبخر جوة والهواء برة Refrigerant inside & air outside (B).",
    "keyword": "direct expansion finned coil evaporator"
  },
  {
    "id": 10,
    "topic": "Condensers and evaporators",
    "question": "In a finned coil when the gas flowing over finned tube the air heat transfer coefficient will be",
    "question_ar": "في ملف الزعانف عند جريان الغاز فوق الأنابيب المزوعنة، فإن معامل انتقال حرارة الهواء يُحسب من:",
    "options": {
      "A": "hf = 38 T^0.5",
      "B": "hf = 38 V^0.5",
      "C": "hf = 58 p^0.5",
      "D": "None of above",
      "E": "All of these"
    },
    "answer": "B",
    "note": "معامل انتقال الحرارة لجانب الهواء يتناسب مع سرعة الهواء مرفوعة للأس 0.5: hf = 38 V^0.5.",
    "clue": "🔑 شفرة الامتحان: معامل انتقال حرارة الهواء hf ➔ احفظ الرقم: hf = 38 V^0.5 (السرعة أس نص) (B).",
    "keyword": "finned coil ... air heat transfer coefficient"
  },
  {
    "id": 11,
    "topic": "Condensers and evaporators",
    "question": "The heat rejection ratio (HRR) is defined as",
    "question_ar": "تُعرّف نسبة طرد الحرارة (HRR) بأنها:",
    "options": {
      "A": "Heat absorbed by evaporator / Heat rejected by condenser",
      "B": "Heat rejected by condenser / Heat absorbed by evaporator",
      "C": "Heat absorbed by evaporator / Work of compressor",
      "D": "None of above",
      "E": "Both A and B"
    },
    "answer": "B",
    "note": "نسبة طرد الحرارة HRR = الحرارة المطروحة في المكثف ÷ الحرارة الممتصة في المبخر.",
    "clue": "🔑 شفرة الامتحان: نسبة طرد الحرارة HRR ➔ الطرد بالبسط والامتصاص بالمقام: Heat rejected / Heat absorbed (B).",
    "keyword": "heat rejection ratio (HRR)"
  },
  {
    "id": 12,
    "topic": "Condensers and evaporators",
    "question": "In the water-cooled condenser when the fouling due to the water impurities collect inside the tubes",
    "question_ar": "في المكثف المبرد بالماء، عند تجمع الترسبات والشوائب الناتجة عن الماء داخل الأنابيب، فإنها تؤدي إلى:",
    "options": {
      "A": "Increase the resistance to heat transfer",
      "B": "Decrease the resistance to heat transfer",
      "C": "Decrease the water side pressure drops",
      "D": "None of above",
      "E": "Both A and C"
    },
    "answer": "A",
    "note": "تراكم الشوائب والترسبات (Fouling) يزيد من المقاومة الحرارية لانتقال الحرارة.",
    "clue": "🔑 شفرة الامتحان: الترسبات (Fouling) ➔ تزيد المقاومة الحرارية Increase resistance to heat transfer (A).",
    "keyword": "fouling due to the water impurities"
  },
  {
    "id": 13,
    "topic": "Condensers and evaporators",
    "question": "In the vapor compression refrigeration system the condensation is a process of",
    "question_ar": "في منظومة التبريد بالانضغاط البخاري، عملية التكثيف هي عملية:",
    "options": {
      "A": "Changing the refrigerant state from gas to liquid",
      "B": "Changing the refrigerant state from liquid to gas",
      "C": "Increasing the refrigerant gas pressure",
      "D": "None of above",
      "E": "Both A and C"
    },
    "answer": "A",
    "note": "التكثيف هو تحول مائع التبريد من الحالة الغازية إلى الحالة السائلة عند طرد الحرارة.",
    "clue": "🔑 شفرة الامتحان: التكثيف (Condensation) ➔ تحول من غاز إلى سائل Gas to liquid (A).",
    "keyword": "condensation is a process of"
  },
  {
    "id": 14,
    "topic": "Condensers and evaporators",
    "question": "The Wilson plot for shell and tube water cooled condenser is a graph of 1/Uo versus",
    "question_ar": "مخطط ويلسون (Wilson plot) للمكثف المائي ذو الغلاف والأنابيب هو رسم بياني لـ 1/Uo مقابل:",
    "options": {
      "A": "1/V^0.2",
      "B": "1/V^0.4",
      "C": "1/V^0.8",
      "D": "None of above",
      "E": "All of these"
    },
    "answer": "C",
    "note": "مخطط ويلسون يرسم العلاقة بين 1/Uo مقابل 1/V^0.8 لتحديد معاملات انتقال الحرارة.",
    "clue": "🔑 شفرة الامتحان: مخطط ويلسون (Wilson plot) ➔ ابحث عن الكسر ذو الأس 0.8: (1/V^0.8) (C).",
    "keyword": "Wilson plot ... 1/Uo versus"
  },
  {
    "id": 15,
    "topic": "Condensers and evaporators",
    "question": "In the vapor compression refrigeration system the evaporation is a process of",
    "question_ar": "في منظومة التبريد بالانضغاط البخاري، عملية التبخير هي عملية:",
    "options": {
      "A": "Changing the refrigerant state from liquid to gas",
      "B": "Changing the refrigerant state from gas to liquid",
      "C": "Reducing the liquid refrigerant pressure",
      "D": "None of above",
      "E": "Both A and C"
    },
    "answer": "A",
    "note": "التبخير هو تحول مائع التبريد من الحالة السائلة إلى الغازية عند امتصاص الحرارة.",
    "clue": "🔑 شفرة الامتحان: التبخير (Evaporation) ➔ تحول من سائل إلى غاز Liquid to gas (A).",
    "keyword": "evaporation is a process of"
  },
  {
    "id": 16,
    "topic": "Condensers and evaporators",
    "question": "The effect of frost forming over the outer surface of evaporator is",
    "question_ar": "تأثير تشكّل الصقيع (Frost) على السطح الخارجي للمبخر يؤدي إلى:",
    "options": {
      "A": "Increasing the evaporator capacity",
      "B": "Increasing the pressure drop inside evaporator.",
      "C": "Act as insulation and reducing the evaporator capacity.",
      "D": "Decreasing the air flow rate over the evaporator.",
      "E": "Both C and D"
    },
    "answer": "E",
    "note": "تكون الثلج/الصقيع يعمل كعازل حراري ويقلل تدفق الهواء عبر الملف، وبالتالي يقلل السعة.",
    "clue": "🔑 شفرة الامتحان: تشكل الصقيع (Frost) ➔ عازل حراري ويقلل تدفق الهواء: Both C and D (E).",
    "keyword": "frost forming over the outer surface"
  },
  {
    "id": 17,
    "topic": "Condensers and evaporators",
    "question": "In refrigeration system the collecting of noncondensable gases inside the condenser will be............",
    "question_ar": "في منظومة التبريد، يؤدي تجمع الغازات غير القابلة للتكثيف داخل المكثف إلى:",
    "options": {
      "A": "Increasing the system capacity.",
      "B": "Reducing the condensing surface area",
      "C": "Increasing the power required for compression process.",
      "D": "None of above",
      "E": "Both B and C"
    },
    "answer": "E",
    "note": "الغازات غير القابلة للتكثيف تقلل المساحة الفعالة للتكثيف وترفع ضغط وشغل الانضغاط.",
    "clue": "🔑 شفرة الامتحان: الغازات غير القابلة للتكثيف ➔ تقلل مساحة التكثيف وتزيد شغل الانضغاط: Both B and C (E).",
    "keyword": "collecting of noncondensable gases"
  },
  {
    "id": 18,
    "topic": "Condensers and evaporators",
    "question": "For one ton refrigeration plant, if the heat rejected at the condenser is 4.66 KW, heat rejection ratio is…………..",
    "question_ar": "لمنظومة بسعة 1 طن تبريد (1 TR)، إذا كانت الحرارة المطرودة في المكثف 4.66 kW، فإن نسبة طرد الحرارة (HRR) تساوي:",
    "options": {
      "A": "2.333",
      "B": "1.333",
      "C": "1.2",
      "D": "2.2",
      "E": "2.7"
    },
    "answer": "B",
    "note": "1 TR = 3.517 kW تقريباً -> HRR = 4.66 / 3.5 = 1.333.",
    "clue": "🔑 شفرة الامتحان: مسألة طن تبريد واحد مع 4.66 kW ➔ احفظ الناتج فوراً: 1.333 (B).",
    "keyword": "one ton ... heat rejected at the condenser is 4.66 KW"
  },
  {
    "id": 19,
    "topic": "Condensers and evaporators",
    "question": "Air and other non-condensable gases enter the refrigeration these could be removed by",
    "question_ar": "الهواء والغازات غير القابلة للتكثيف التي تدخل منظومة التبريد يمكن إزالتها وتفريغها بواسطة:",
    "options": {
      "A": "Flooding",
      "B": "Purging",
      "C": "Starving",
      "D": "None of these",
      "E": "All of these"
    },
    "answer": "B",
    "note": "عملية التنفيس (Purging) تستخدم للتخلص من الهواء والغازات غير القابلة للتكثيف.",
    "clue": "🔑 شفرة الامتحان: التخلص من الغازات والهواء ➔ عملية التنفيس Purging (B).",
    "keyword": "Air and other non-condensable gases ... removed by"
  },
  {
    "id": 20,
    "topic": "Condensers and evaporators",
    "question": "In the air cooled condenser, when using fins, the ……… in the air-side will be decreased.",
    "question_ar": "في المكثف المبرد بالهواء، عند استخدام الزعانف (Fins)، فإن ما يقل في جانب الهواء هو:",
    "options": {
      "A": "Heat transfer resistance",
      "B": "Area",
      "C": "Heat-transfer coefficient",
      "D": "Rate of heat transfer",
      "E": "Both A and B"
    },
    "answer": "A",
    "note": "إضافة الزعانف تزيد المساحة السطحية وبالتالي تقلل المقاومة الحرارية لجانب الهواء.",
    "clue": "🔑 شفرة الامتحان: إضافة الزعانف للمكثف ➔ تقلل المقاومة الحرارية لجانب الهواء Heat transfer resistance (A).",
    "keyword": "air cooled condenser, when using fins"
  },
  {
    "id": 21,
    "topic": "Condensers and evaporators",
    "question": "The evaporator generally used in home freezers ice cream cabinets etc. is ...............",
    "question_ar": "المبخر المستخدم عادةً في المجمدات المنزلية وخزائن الآيسكريم هو:",
    "options": {
      "A": "Plate evaporator",
      "B": "Finned evaporator",
      "C": "Shell and tube evaporator",
      "D": "Shell and coil evaporator",
      "E": "All of these"
    },
    "answer": "A",
    "note": "المبخر اللوحي (Plate evaporator) شائع جداً في المجمدات المنزلية وحافظات الآيسكريم.",
    "clue": "🔑 شفرة الامتحان: الثلاجات والمجمدات وحافظات الآيسكريم ➔ مبخر لوحي Plate evaporator (A).",
    "keyword": "home freezers ice cream cabinets"
  },
  {
    "id": 22,
    "topic": "Condensers and evaporators",
    "question": "A thick layer of frost on the cooling coil acts as ___________.",
    "question_ar": "تعمل الطبقة السميكة من الصقيع على ملف التبريد كـ:",
    "options": {
      "A": "Thermal conductor",
      "B": "Thermal insulation",
      "C": "Heat rejected",
      "D": "Not affect",
      "E": "Both A and B"
    },
    "answer": "B",
    "note": "طبقة الصقيع تعمل كعازل حراري رديء التوصيل يقلل من كفاءة التبريد.",
    "clue": "🔑 شفرة الامتحان: طبقة الصقيع تعمل كـ ➔ عازل حراري Thermal insulation (B).",
    "keyword": "thick layer of frost on the cooling coil"
  },
  {
    "id": 23,
    "topic": "Condensers and evaporators",
    "question": "The heat transfer capacity of water cooled condenser as compared with air cooled condenser is ___________ .",
    "question_ar": "سعة انتقال الحرارة للمكثف المبرد بالماء مقارنة بالمكثف المبرد بالهواء تكون:",
    "options": {
      "A": "Lower",
      "B": "Larger",
      "C": "Equal",
      "D": "May be lower or larger",
      "E": "Both A and D"
    },
    "answer": "B",
    "note": "سعة ومعامل انتقال الحرارة في المكثفات المبردة بالماء أكبر بكثير مقارنة بالهواء.",
    "clue": "🔑 شفرة الامتحان: سعة المكثف المائي مقارنة بالهوائي ➔ أكبر بكثير Larger (B).",
    "keyword": "water cooled condenser as compared with air cooled"
  },
  {
    "id": 24,
    "topic": "Condensers and evaporators",
    "question": "The surface area of natural convection type condensers is _____________ the forced convection ones for same capacity.",
    "question_ar": "المساحة السطحية لمكثفات الحمل الطبيعي مقارنة بمكثفات الحمل القسري لنفس السعة تكون:",
    "options": {
      "A": "Less than.",
      "B": "More than.",
      "C": "Equal to.",
      "D": "Very much less than.",
      "E": "Both A and C"
    },
    "answer": "B",
    "note": "الحمل الحر الشريعي أقل كفاءة بنقل الحرارة، لذا يحتاج مساحة سطحية أكبر بكثير من الحمل القسري.",
    "clue": "🔑 شفرة الامتحان: مساحة مكثف الحمل الطبيعي مقارنة بالقسري ➔ أكبر More than (B).",
    "keyword": "surface area of natural convection ... forced convection"
  },
  {
    "id": 25,
    "topic": "Condensers and evaporators",
    "question": "For a fixed condensing temperature, the heat rejection ratio:",
    "question_ar": "عند ثبوت درجة حرارة التكثيف، فإن نسبة طرد الحرارة (HRR):",
    "options": {
      "A": "Increases with decrease in suction temperature.",
      "B": "Decreases with decrease in suction temperature.",
      "C": "Remains unaffected with decrease in suction temperature.",
      "D": "Is not predictable with decrease in suction temperature",
      "E": "Both A and C"
    },
    "answer": "C",
    "note": "وفقاً للملزمة المعتمدة، تبقى غير متأثرة بانخفاض درجة حرارة السحب.",
    "clue": "🔑 شفرة الامتحان: نسبة طرد الحرارة مع هبوط حرارة السحب ➔ تبقى غير متأثرة Remains unaffected (C).",
    "keyword": "heat rejection ratio ... decrease in suction temperature"
  },
  {
    "id": 26,
    "topic": "Condensers and evaporators",
    "question": "The processes that occur in the condensers of vapor compression cycle are:",
    "question_ar": "العمليات المتتالية التي تحدث داخل مكثف دورة الانضغاط البخاري هي:",
    "options": {
      "A": "Superheating, condensing, subcooling",
      "B": "Superheating, evaporating, subcooling",
      "C": "De-superheating, condensing, subcooling.",
      "D": "Superheating, evaporating, compression",
      "E": "De-superheating, evaporating, subcooling"
    },
    "answer": "C",
    "note": "المراحل الثلاث داخل المكثف: إزالة التحميص (De-superheating)، ثم التكثيف (Condensing)، ثم التبريد الدوني (Subcooling).",
    "clue": "🔑 شفرة الامتحان: عمليات المكثف ➔ تبدأ بإزالة التحميص De-superheating, condensing, subcooling (C).",
    "keyword": "processes that occur in the condensers"
  },
  {
    "id": 27,
    "topic": "Condensers and evaporators",
    "question": "The air-side coefficient (hf) can be computed from the equation",
    "question_ar": "يمكن حساب معامل انتقال الحرارة لجانب الهواء (hf) من المعادلة:",
    "options": {
      "A": "hf = 38 V^0.5",
      "B": "hf = 38 Ta^0.5",
      "C": "hf = 38 Tc^0.5",
      "D": "None of these",
      "E": "All of these"
    },
    "answer": "A",
    "note": "معادلة انتقال الحرارة لجانب الهواء تعتمد على سرعة الهواء: hf = 38 V^0.5.",
    "clue": "🔑 شفرة الامتحان: معادلة hf لجانب الهواء ➔ تعتمد على السرعة: hf = 38 V^0.5 (A).",
    "keyword": "air-side coefficient (hf)"
  },
  {
    "id": 28,
    "topic": "Condensers and evaporators",
    "question": "In traditional window air conditioners in home appliances, what is the type of condenser used?",
    "question_ar": "في مكيفات الهواء الشباكية المنزلية التقليدية، ما نوع المكثف المستخدم؟",
    "options": {
      "A": "Natural convection type",
      "B": "Forced convection type",
      "C": "Flash Type",
      "D": "Rotary condensers",
      "E": "None of these"
    },
    "answer": "B",
    "note": "مكيفات الشباك تستخدم مروحة لدفع الهواء قسرياً عبر المكثف (Forced convection).",
    "clue": "🔑 شفرة الامتحان: مكيف الشباك المنزلي ➔ حمل قسري بمروحة Forced convection type (B).",
    "keyword": "window air conditioners"
  },
  {
    "id": 29,
    "topic": "Condensers and evaporators",
    "question": "Compute the rate of heat rejected at condenser assume rate of heat evaporator 80 kw and heat-rejection ratio is 1.27",
    "question_ar": "احسب معدل الحرارة المطرودة في المكثف بفرض أن حرارة المبخر 80 kW ونسبة طرد الحرارة 1.27:",
    "options": {
      "A": "99.6 kw",
      "B": "100.6 kw",
      "C": "101.6 kw",
      "D": "None of these",
      "E": "All of these"
    },
    "answer": "C",
    "note": "Q_cond = Q_evap × HRR = 80 kW × 1.27 = 101.6 kW.",
    "clue": "🔑 شفرة الامتحان: مسألة 80 kw مع نسبة 1.27 ➔ اضرب 80 × 1.27 = 101.6 kw (C).",
    "keyword": "80 kw and heat-rejection ratio is 1.27"
  },
  {
    "id": 30,
    "topic": "Condensers and evaporators",
    "question": "Air cooled evaporator can be classified to three more categories, which one of the following is incorrect?",
    "question_ar": "يمكن تصنيف المبخرات المبردة بالهواء إلى ثلاثة أصناف، أيٌّ من الخيارات التالية غير صحيح؟",
    "options": {
      "A": "Plate type",
      "B": "Finned tube",
      "C": "Shell-and-tubes type",
      "D": "Both A and B",
      "E": "Both B and C"
    },
    "answer": "C",
    "note": "Shell-and-tube هو مبخر مبرد بالماء أو السائل وليس مبخراً مبرداً بالهواء.",
    "clue": "🔑 شفرة الامتحان: الغريب في مبخرات الهواء ➔ Shell-and-tubes لأنه مبخر مائي (C).",
    "keyword": "Air cooled evaporator ... incorrect"
  },
  {
    "id": 31,
    "topic": "Condensers and evaporators",
    "question": "The natural convection air-cooled condensers are used in",
    "question_ar": "تُستخدم المكثفات المبردة بالهواء ذات الحمل الطبيعي في:",
    "options": {
      "A": "Water coolers",
      "B": "Domestic refrigerators",
      "C": "Window Air condition",
      "D": "Both A and B",
      "E": "Both B and C"
    },
    "answer": "D",
    "note": "المكثفات ذات الحمل الحر الطبيعي تستخدم في برادات الماء الصغيرة والثلاجات المنزلية.",
    "clue": "🔑 شفرة الامتحان: مكثفات الحمل الطبيعي ➔ في برادات الماء والثلاجات: Both A and B (D).",
    "keyword": "natural convection air-cooled condensers are used in"
  },
  {
    "id": 32,
    "topic": "Condensers and evaporators",
    "question": "Water cooled evaporator can be classified to three more categories, which one of the following is incorrect?",
    "question_ar": "تصنف المبخرات المبردة بالماء إلى ثلاثة أصناف، أيٌّ مما يلي لا ينتمي إليها (غير صحيح)؟",
    "options": {
      "A": "Plate type",
      "B": "Double pipe",
      "C": "Shell-and-tube type",
      "D": "Shell-and-coil type",
      "E": "All of these"
    },
    "answer": "A",
    "note": "النوع غير المائي في هذه القائمة هو Plate type.",
    "clue": "🔑 شفرة الامتحان: الغريب في مبخرات الماء ➔ Plate type لأنه مبخر هواء ومجمدات (A).",
    "keyword": "Water cooled evaporator ... incorrect"
  },
  {
    "id": 33,
    "topic": "Condensers and evaporators",
    "question": "Water cooled evaporator can be classified to three more categories, which one of the following is correct?",
    "question_ar": "تصنف المبخرات المبردة بالماء إلى ثلاثة أصناف، أيٌّ مما يلي صحيح؟",
    "options": {
      "A": "Shell-and-tube type",
      "B": "Double pipe",
      "C": "Shell-and-coil type",
      "D": "All of these",
      "E": "None of these"
    },
    "answer": "D",
    "note": "جميع هذه الأنواع الثلاثة هي تصنيفات لمبخرات مبردة بالماء.",
    "clue": "🔑 شفرة الامتحان: مبخرات الماء تشمل ➔ كل الأنواع المذكورة: All of these (D).",
    "keyword": "Water cooled evaporator ... correct"
  },
  {
    "id": 34,
    "topic": "Expansion devices",
    "question": "In the vapor compression refrigeration system, the purpose of the expansion devices:",
    "question_ar": "في منظومة التبريد بالانضغاط البخاري، الغرض الأساسي من أداة التمدد هو:",
    "options": {
      "A": "Increasing the liquid refrigerant pressure",
      "B": "Reducing the liquid refrigerant pressure",
      "C": "Regulating flow to the evaporator",
      "D": "Both A and B",
      "E": "Both B and C"
    },
    "answer": "E",
    "note": "وظيفة أداة التمدد هي خفض ضغط السائل وتنظيم معدل تدفقه إلى المبخر (Both B and C).",
    "clue": "🔑 شفرة الامتحان: وظيفة أداة التمدد ➔ خفض الضغط وتنظيم التدفق: Both B and C (E).",
    "keyword": "purpose of the expansion devices"
  },
  {
    "id": 35,
    "topic": "Expansion devices",
    "question": "The most type of expansion device used in domestic refrigeration systems is the…………",
    "question_ar": "النوع الأكثر استخداماً من أدوات التمدد في منظومات التبريد المنزلية (الثلاجات) هو:",
    "options": {
      "A": "Automatic expansion valve",
      "B": "Thermostatic expansion valve",
      "C": "Capillary tube",
      "D": "Float valve",
      "E": "All of these"
    },
    "answer": "C",
    "note": "الأنبوبة الشعرية (Capillary tube) هي الأكثر بساطة وتكلفة اقتصادية للثلاجات المنزلية.",
    "clue": "🔑 شفرة الامتحان: أداة التمدد بالثلاجات المنزلية ➔ أنبوبة شعرية Capillary tube (C).",
    "keyword": "domestic refrigeration systems"
  },
  {
    "id": 36,
    "topic": "Expansion devices",
    "question": "For capillary tube in the refrigeration system the evaporator flooding condition occurs when the .......",
    "question_ar": "في منظومة الأنبوبة الشعرية، تحدث حالة غمر المبخر (Evaporator flooding) عندما:",
    "options": {
      "A": "Evaporator pressure drops and the capillary tube feed more refrigerant",
      "B": "Evaporator pressure rises and the capillary tube doesn’t feed more refrigerant",
      "C": "Compressor discharge pressure decreased",
      "D": "Both A and B",
      "E": "Both B and C"
    },
    "answer": "A",
    "note": "يحدث الغمر (Flooding) عندما ينخفض ضغط المبخر فيمرر الأنبوب الشعري كمية مائع تبريد زائدة.",
    "clue": "🔑 شفرة الامتحان: غمر المبخر (Flooding) بالأنبوبة ➔ انخفاض ضغط المبخر وتدفق مائع أكثر Evaporator pressure drops and feed more (A).",
    "keyword": "capillary tube ... flooding condition occurs"
  },
  {
    "id": 37,
    "topic": "Expansion devices",
    "question": "One of the disadvantages of capillary tubes is that they are ………… to changing load conditions",
    "question_ar": "أحد عيوب الأنابيب الشعرية أنها ........... لتغيرات أحمال التبريد:",
    "options": {
      "A": "Adjustable",
      "B": "Not adjustable",
      "C": "Adaptable",
      "D": "Both A and B",
      "E": "Both B and C"
    },
    "answer": "B",
    "note": "الأنبوبة الشعرية ذات فتحة ثابتة وغير قابلة للتعديل (Not adjustable) مع تغير أحمال التبريد.",
    "clue": "🔑 شفرة الامتحان: عيب الأنبوبة الشعرية ➔ فتحة ثابتة غير قابلة للتعديل Not adjustable (B).",
    "keyword": "disadvantages of capillary tubes"
  },
  {
    "id": 38,
    "topic": "Expansion devices",
    "question": "Starving of evaporator followed by reduction cooling capacity occurs when ........",
    "question_ar": "تحدث حالة تجويع المبخر (Starving) المصحوبة بانخفاض سعة التبريد عندما:",
    "options": {
      "A": "There is a refrigerant leakage in the system",
      "B": "The expansion valve is located at a higher elevation compared to condenser",
      "C": "The inlet to the expansion valve is in two-phase region",
      "D": "All of these",
      "E": "None of these"
    },
    "answer": "D",
    "note": "كل هذه الحالات تسبب نقص التغذية بالمائع (Starving) وبالتالي تقليل سعة التبريد.",
    "clue": "🔑 شفرة الامتحان: تجويع المبخر (Starving) يحدث بسبب ➔ كل الأسباب المذكورة: All of these (D).",
    "keyword": "Starving of evaporator ... occurs when"
  },
  {
    "id": 39,
    "topic": "Expansion devices",
    "question": "For capillary tube in the refrigeration system the evaporator starving condition occurs when the .........",
    "question_ar": "في منظومة الأنبوبة الشعرية، تحدث حالة تجويع المبخر (Starving) عندما:",
    "options": {
      "A": "Evaporator pressure rises and the capillary tube doesn’t feed more refrigerant",
      "B": "Evaporator pressure drops and the capillary tube feed more refrigerant",
      "C": "Condenser pressure increased",
      "D": "Both A and B",
      "E": "Both B and C"
    },
    "answer": "A",
    "note": "حالة التجويع (Starving) تحدث عندما يرتفع ضغط المبخر فلا يستطيع الأنبوب الشعري تغذية مائع كافٍ.",
    "clue": "🔑 شفرة الامتحان: تجويع المبخر (Starving) بالأنبوبة ➔ ارتفاع ضغط المبخر وعدم تدفق مائع كافي Evaporator pressure rises and doesn't feed (A).",
    "keyword": "capillary tube ... starving condition occurs"
  },
  {
    "id": 40,
    "topic": "Expansion devices",
    "question": "The function of automatic expansion valve is ...........",
    "question_ar": "وظيفة صمام التمدد الأوتوماتيكي (AXV) هي:",
    "options": {
      "A": "The degree of superheat of the suction gas leaving the evaporator",
      "B": "Increasing the evaporator pressure",
      "C": "Maintaining a constant evaporator pressure.",
      "D": "The temperature in the condenser",
      "E": "All of these"
    },
    "answer": "C",
    "note": "صمام التمدد الأوتوماتيكي (AXV) وظيفته الأساسية الحفاظ على ضغط ثابت في المبخر.",
    "clue": "🔑 شفرة الامتحان: صمام التمدد الأوتوماتيكي (AXV) ➔ تثبيت ضغط المبخر Maintaining a constant evaporator pressure (C).",
    "keyword": "automatic expansion valve is"
  },
  {
    "id": 41,
    "topic": "Expansion devices",
    "question": "The pressure in a capillary tube decreases due to .................",
    "question_ar": "ينخفض الضغط داخل الأنبوبة الشعرية نتيجة لـ:",
    "options": {
      "A": "Frictional resistance offered by the tube wall",
      "B": "Heat transfer from the tube",
      "C": "Acceleration of refrigerant in the tube",
      "D": "Both A and C",
      "E": "Both B and C"
    },
    "answer": "D",
    "note": "هبوط الضغط في الأنبوب الشعري ينتج عن الاحتكاك مع جدار الأنبوب وتسارع المائع (Both A and C).",
    "clue": "🔑 شفرة الامتحان: انخفاض الضغط بالأنبوبة الشعرية ➔ احتكاك وتسارع المائع: Both A and C (D).",
    "keyword": "pressure in a capillary tube decreases due to"
  },
  {
    "id": 42,
    "topic": "Expansion devices",
    "question": "Which one the following is fixed opening type expansion device .............",
    "question_ar": "أيٌّ من الأجهزة التالية يعتبر أداة تمدد ذات فتحة ثابتة (Fixed opening)؟",
    "options": {
      "A": "Thermostatic expansion device",
      "B": "Automatic expansion device",
      "C": "Capillary tube",
      "D": "Both A and B",
      "E": "Both B and C"
    },
    "answer": "C",
    "note": "الأنبوبة الشعرية هي أداة تمدد ذات فتحة ثابتة (Fixed opening).",
    "clue": "🔑 شفرة الامتحان: أداة تمدد فتحتها ثابتة Fixed opening ➔ الأنبوبة الشعرية Capillary tube (C).",
    "keyword": "fixed opening type expansion device"
  },
  {
    "id": 43,
    "topic": "Expansion devices",
    "question": "Flooding in evaporator occurs when ...............",
    "question_ar": "يحدث غمر المبخر (Flooding) عندما:",
    "options": {
      "A": "Compressor delivers less than the capillary tube can handle",
      "B": "Suction pressure of compressor decreases",
      "C": "Load decrease",
      "D": "All of these",
      "E": "None of these"
    },
    "answer": "D",
    "note": "يحدث غمر المبخر عند انخفاض الحمل، أو انخفاض ضغط السحب، أو ضخ كمية أكبر مما يسحبه الضاغط.",
    "clue": "🔑 شفرة الامتحان: غمر المبخر Flooding يحدث عند ➔ كل ما ذُكر: All of these (D).",
    "keyword": "flooding in evaporator occurs when"
  },
  {
    "id": 44,
    "topic": "Expansion devices",
    "question": "The function of the thermostatic expansion valve is controlling ..............",
    "question_ar": "وظيفة صمام التمدد الثرموستاتي (TXV) هي التحكم في:",
    "options": {
      "A": "The degree of superheat of the suction gas leaving the evaporator",
      "B": "The temperature in the condenser",
      "C": "The pressure in the evaporator",
      "D": "The temperature in the evaporator",
      "E": "None of these"
    },
    "answer": "A",
    "note": "صمام التمدد الثرموستاتي (TXV) يتحكم في درجة التحميص (Superheat) عند مخرج المبخر لمنع وصول سائل للضاغط.",
    "clue": "🔑 شفرة الامتحان: صمام التمدد الثرموستاتي (TXV) ➔ يتحكم بدرجة التحميص Degree of superheat (A).",
    "keyword": "thermostatic expansion valve is controlling"
  },
  {
    "id": 45,
    "topic": "Expansion devices",
    "question": "The working principle of the constant expansion valve depends on ................",
    "question_ar": "يعتمد مبدأ عمل صمام التمدد ذو الضغط الثابت على توازن:",
    "options": {
      "A": "Evaporator pressure force, spring force, and the pressure force of a feeler bulb",
      "B": "Evaporator pressure force and spring force",
      "C": "Evaporator pressure force only",
      "D": "Both A and B",
      "E": "Both B and C"
    },
    "answer": "B",
    "note": "صمام التمدد ذو الضغط الثابت (Constant pressure valve) يتوازن بين قوة ضغط المبخر وقوة النابض.",
    "clue": "🔑 شفرة الامتحان: صمام التمدد ذو الضغط الثابت ➔ توازن ضغط المبخر والنابض Evaporator pressure force and spring force (B).",
    "keyword": "constant expansion valve depends on"
  },
  {
    "id": 46,
    "topic": "Expansion devices",
    "question": "……… serves almost all small refrigeration systems, and its application extends up to refrigerating capacities of the order of 10 KW.",
    "question_ar": "يخدم تقريباً جميع منظومات التبريد الصغيرة ويمتد تطبيقه حتى سعات تبريدية بحدود 10 kW:",
    "options": {
      "A": "Thermostatic expansion device",
      "B": "Automatic expansion device",
      "C": "Capillary tube",
      "D": "Both A and B",
      "E": "Both B and C"
    },
    "answer": "C",
    "note": "الأنبوبة الشعرية تخدم تقريباً كل المنظومات الصغيرة وحتى سعات 10 كيلوواط.",
    "clue": "🔑 شفرة الامتحان: سعات صغيرة حتى 10 kW ➔ الأنبوبة الشعرية Capillary tube (C).",
    "keyword": "small refrigeration systems ... order of 10 KW"
  },
  {
    "id": 47,
    "topic": "Expansion devices",
    "question": "In capillary tube, when the outlet pressure of refrigerant reduced until the sonic velocity occurs at the throat, the flow is called ...........",
    "question_ar": "في الأنبوبة الشعرية، عند انخفاض ضغط المخرج حتى حدوث سرعة الصوت عند الخنق، يُسمى الجريان:",
    "options": {
      "A": "Starving",
      "B": "Choked",
      "C": "Balanced",
      "D": "Both A and B",
      "E": "Both B and C"
    },
    "answer": "B",
    "note": "عند وصول سرعة المائع لسرعة الصوت عند المخرج يُسمى الجريان بالاختناق (Choked flow).",
    "clue": "🔑 شفرة الامتحان: وصول السرعة لسرعة الصوت عند الخنق ➔ جريان خانق Choked flow (B).",
    "keyword": "sonic velocity occurs at the throat"
  },
  {
    "id": 48,
    "topic": "Expansion devices",
    "question": "Starving in evaporator occurs when ............",
    "question_ar": "تحدث ظاهرة التجويع (Starving) في المبخر عندما:",
    "options": {
      "A": "Load increase",
      "B": "Suction pressure of compressor increases",
      "C": "Suction pressure of compressor decreases",
      "D": "All of these",
      "E": "None of these"
    },
    "answer": "D",
    "note": "تحدث ظاهرة التجويع تحت هذه العوامل التشغيلية المختلفة المذكورة.",
    "clue": "🔑 شفرة الامتحان: تجويع المبخر يحدث عند ➔ كل ما ذُكر: All of these (D).",
    "keyword": "Starving in evaporator occurs when"
  },
  {
    "id": 49,
    "topic": "VCRS analysis",
    "question": "……….. represent the point of operation of two components of vapor compression system where plotted the performance characteristic of two components on the graph",
    "question_ar": "تمثل نقطة تشغيل جزأين من أجزاء منظومة الانضغاط البخاري عند تقاطع منحنيي أدائهما على المخطط البياني:",
    "options": {
      "A": "Balance point",
      "B": "System simulation",
      "C": "System performance",
      "D": "System effectiveness",
      "E": "System efficiency"
    },
    "answer": "A",
    "note": "نقطة التوازن (Balance point) هي نقطة تقاطع خواص أداء جزأين من أجزاء المنظومة على الرسم البياني.",
    "clue": "🔑 شفرة الامتحان: نقطة تشغيل جزأين على المخطط ➔ نقطة التوازن Balance point (A).",
    "keyword": "point of operation of two components ... on the graph"
  },
  {
    "id": 50,
    "topic": "VCRS analysis",
    "question": "For reciprocating hermetic compressor, when the condensing temperature increased will be",
    "question_ar": "للضاغط الترددي المحكم، عند ارتفاع درجة حرارة التكثيف يحدث:",
    "options": {
      "A": "The system capacity decreased",
      "B": "The system capacity increased",
      "C": "The power requirement increased",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "E",
    "note": "ارتفاع درجة حرارة التكثيف يقلل السعة ويزيد القدرة المطلوبة لتشغيل الضاغط (Both A and C).",
    "clue": "🔑 شفرة الامتحان: ارتفاع حرارة التكثيف ➔ يقلل السعة ويزيد استهلاك الكهرباء: Both A and C (E).",
    "keyword": "condensing temperature increased"
  },
  {
    "id": 51,
    "topic": "VCRS analysis",
    "question": "For the direct-expansion inner fin chiller, the cooling capacity increased when",
    "question_ar": "لمثلج التمدد المباشر ذو الزعانف الداخلية، تزداد سعة التبريد عندما:",
    "options": {
      "A": "Evaporating temperature decrease",
      "B": "Water flow rate increasing",
      "C": "Water entering temperature increasing",
      "D": "All of these",
      "E": "None of these"
    },
    "answer": "D",
    "note": "سعة التبريد تزداد بزيادة معدل تدفق الماء وحرارة دخوله وغيرها وفق الملزمة المعتمدة.",
    "clue": "🔑 شفرة الامتحان: زيادة سعة مبرد الزعانف الداخلية ➔ كل الحالات: All of these (D).",
    "keyword": "direct-expansion inner fin chiller ... capacity increased"
  },
  {
    "id": 52,
    "topic": "VCRS analysis",
    "question": "There are many conditions which may lead to starving of evaporator such as",
    "question_ar": "هناك ظروف تشغيلية عديدة تؤدي إلى تجويع المبخر، مثل:",
    "options": {
      "A": "Expansion valve is too small",
      "B": "Some vapor is present in the liquid entering the expansion valve",
      "C": "Pressure difference across the expansion valve is small",
      "D": "All of these",
      "E": "None of these"
    },
    "answer": "D",
    "note": "جميع الأسباب تؤدي إلى تقليل تدفق مائع التبريد إلى المبخر (Starving).",
    "clue": "🔑 شفرة الامتحان: حالات تجويع المبخر ➔ كل الأسباب: All of these (D).",
    "keyword": "conditions which may lead to starving of evaporator"
  },
  {
    "id": 53,
    "topic": "VCRS analysis",
    "question": "………. represent the mathematical procedure for simultaneous solution of two equations representing the performance of all components of system",
    "question_ar": "يمثل الإجراء الرياضي للحل الآني المتزامن للمعادلات التي تصف أداء جميع مكونات المنظومة:",
    "options": {
      "A": "Balance point",
      "B": "System simulation",
      "C": "System performance",
      "D": "System effectiveness",
      "E": "System efficiency"
    },
    "answer": "B",
    "note": "محاكاة المنظومة (System simulation) هي الحل الرياضي المتزامن لمعادلات الأداء لجميع الأجزاء.",
    "clue": "🔑 شفرة الامتحان: الحل الرياضي المتزامن للمعادلات ➔ محاكاة المنظومة System simulation (B).",
    "keyword": "mathematical procedure for simultaneous solution"
  },
  {
    "id": 54,
    "topic": "VCRS analysis",
    "question": "For reciprocating hermetic compressor, when the evaporating temperature increased will be",
    "question_ar": "للضاغط الترددي المحكم، عند ارتفاع درجة حرارة التبخير يحدث:",
    "options": {
      "A": "The power requirement increased",
      "B": "The system capacity increased",
      "C": "The power does not change",
      "D": "Both A and B",
      "E": "Both B and C"
    },
    "answer": "E",
    "note": "وفقاً للملزمة المعتمدة: تزداد سعة المنظومة ويبقى استهلاك القدرة ثابتاً نسبياً (Both B and C).",
    "clue": "🔑 شفرة الامتحان: ارتفاع حرارة التبخير للضاغط المحكم ➔ تزيد السعة ولا يتغير الشغل: Both B and C (E).",
    "keyword": "evaporating temperature increased"
  },
  {
    "id": 55,
    "topic": "VCRS analysis",
    "question": "Refrigeration capacity …………….. with high ambient temperature",
    "question_ar": "سعة التبريد ........... عند ارتفاع درجة حرارة الجو المحيط:",
    "options": {
      "A": "Increase",
      "B": "Decreased",
      "C": "Remain constant",
      "D": "Both A and B",
      "E": "Both B and C"
    },
    "answer": "B",
    "note": "مع ارتفاع درجة حرارة الجو المحيط تنخفض سعة التبريد (Decreased) بسبب ارتفاع ضغط التكثيف.",
    "clue": "🔑 شفرة الامتحان: سعة التبريد بالجو الحار ➔ تنخفض Decreased (B).",
    "keyword": "Refrigeration capacity ... high ambient temperature"
  },
  {
    "id": 56,
    "topic": "VCRS analysis",
    "question": "The performance characteristics of a condensing unit are obtained by matching the characteristics of",
    "question_ar": "يتم الحصول على خواص أداء وحدة التكثيف (Condensing unit) عن طريق مواءمة خصائص:",
    "options": {
      "A": "Compressor and evaporator",
      "B": "Compressor and expansion",
      "C": "Evaporator and expansion",
      "D": "Compressor and cooling tower",
      "E": "Compressor and condenser"
    },
    "answer": "E",
    "note": "وحدة التكثيف (Condensing unit) تتكون من الضاغط والمكثف معاً.",
    "clue": "🔑 شفرة الامتحان: وحدة التكثيف Condensing unit ➔ تتكون من ضاغط ومكثف Compressor and condenser (E).",
    "keyword": "condensing unit are obtained by matching"
  },
  {
    "id": 57,
    "topic": "VCRS analysis",
    "question": "For air cooled condenser, the heat rejection increased when",
    "question_ar": "في المكثف المبرد بالهواء، يزداد معدل طرد الحرارة عندما:",
    "options": {
      "A": "Condensing temperature increased and ambient temperature decreased",
      "B": "Condensing temperature increased and ambient temperature increased",
      "C": "Condensing temperature decreased and ambient temperature decreased",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "A",
    "note": "يزداد معدل طرد الحرارة بازدياد الفرق الحراري (ارتفاع حرارة المكثف وانخفاض حرارة الجو).",
    "clue": "🔑 شفرة الامتحان: زيادة طرد الحرارة بالمكثف الهوائي ➔ حرارة تكثيف أعلى وجو أبرد (A).",
    "keyword": "air cooled condenser, the heat rejection increased when"
  },
  {
    "id": 58,
    "topic": "VCRS analysis",
    "question": "When sufficient quantity of refrigerant could not be supplied to evaporator, this condition was referred to as",
    "question_ar": "عندما يتعذر تزويد المبخر بالكمية الكافية من مائع التبريد، يُطلق على هذه الحالة:",
    "options": {
      "A": "Flooded evaporator",
      "B": "Direct expansion evaporator",
      "C": "Starving evaporator",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "C",
    "note": "عدم كفاية مائع التبريد المغذي للمبخر تسمى حالة المبخر المُجوّع (Starving evaporator).",
    "clue": "🔑 شفرة الامتحان: عدم كفاية مائع التبريد للمبخر ➔ حالة التجويع Starving evaporator (C).",
    "keyword": "sufficient quantity of refrigerant could not be supplied"
  },
  {
    "id": 60,
    "topic": "VCRS analysis",
    "question": "For starving evaporator, the heat transfer coefficient in evaporator will be",
    "question_ar": "في حالة المبخر المُجوّع، فإن معامل انتقال الحرارة داخل المبخر سوف:",
    "options": {
      "A": "Increase",
      "B": "Decreased",
      "C": "Remain constant",
      "D": "Both A and B",
      "E": "Both B and C"
    },
    "answer": "B",
    "note": "في حالة تجويع المبخر يقل معامل انتقال الحرارة بسبب قلة السائل الملامس للأنابيب.",
    "clue": "🔑 شفرة الامتحان: معامل انتقال الحرارة بحالة التجويع ➔ ينخفض Decreased (B).",
    "keyword": "for starving evaporator, the heat transfer coefficient"
  },
  {
    "id": 61,
    "topic": "Cooling tower and evaporative condenser",
    "question": "The cooling tower is a heat exchanger in which.",
    "question_ar": "برج التبريد هو مبادل حراري تحدث فيه عملية:",
    "options": {
      "A": "Only heat transfer process take place.",
      "B": "A combined heat and mass transfer process take place.",
      "C": "Only mass transfer process take place.",
      "D": "Only pressure drop process take place.",
      "E": "None of above."
    },
    "answer": "B",
    "note": "برج التبريد يعتمد على انتقال الحرارة والكتلة معاً (Heat and mass transfer) من خلال التبخير الجزئي.",
    "clue": "🔑 شفرة الامتحان: برج التبريد مبادل حراري يحدث فيه ➔ انتقال حرارة وكتلة معاً Combined heat and mass transfer (B).",
    "keyword": "cooling tower is a heat exchanger in which"
  },
  {
    "id": 62,
    "topic": "Cooling tower and evaporative condenser",
    "question": "The ……... is the reduction in temperature of the water through the cooling tower.",
    "question_ar": "يمثل مقدار الانخفاض في درجة حرارة الماء أثناء مروره وتبريده في برج التبريد:",
    "options": {
      "A": "Approach",
      "B": "Range",
      "C": "Efficiency",
      "D": "None of these",
      "E": "All of these"
    },
    "answer": "B",
    "note": "مدى برج التبريد (Range) هو الفرق بين درجة حرارة دخول وخروج الماء من البرج.",
    "clue": "🔑 شفرة الامتحان: مقدار هبوط حرارة الماء بالبرج ➔ مدى البرج Range (B).",
    "keyword": "reduction in temperature of the water through cooling tower"
  },
  {
    "id": 63,
    "topic": "Cooling tower and evaporative condenser",
    "question": "For a cooling tower acceptance test the calculated (hc A/ Cpm) compared with manufacturer data will be",
    "question_ar": "في اختبار قبول برج التبريد، تكون القيمة المحسوبة لـ (hc A/ Cpm) مقارنة ببيانات المصنّع:",
    "options": {
      "A": "Lower value",
      "B": "Equal value",
      "C": "Higher value",
      "D": "None of these",
      "E": "All of these"
    },
    "answer": "B",
    "note": "في اختبار القبول (Acceptance test) يجب أن تتطابق وتتساوى القيمة المحسوبة مع مواصفات المصنع.",
    "clue": "🔑 شفرة الامتحان: اختبار قبول برج التبريد ➔ القيمة المحسوبة مساوية لبيانات المصنع Equal value (B).",
    "keyword": "acceptance test the calculated (hc A/ Cpm)"
  },
  {
    "id": 64,
    "topic": "Cooling tower and evaporative condenser",
    "question": "The purpose of the fill in the cooling tower is",
    "question_ar": "الغرض من الحشوة (Fill) داخل برج التبريد هو:",
    "options": {
      "A": "To provide the required surface area for heat transfer between air and the water",
      "B": "To prevent the water droplets from splashing out of the tower",
      "C": "To reduce the entrainment of water droplets in the air",
      "D": "To change the direction of air inlet flow in a uniform manner",
      "E": "All of these"
    },
    "answer": "A",
    "note": "الحشوة (Fill) وظيفتها توفير مساحة سطحية وزمن تلامس كافيين بين الهواء والماء.",
    "clue": "🔑 شفرة الامتحان: الغرض من حشوة البرج (Fill) ➔ توفير مساحة سطحية لانتقال الحرارة Provide required surface area (A).",
    "keyword": "purpose of the fill in the cooling tower"
  },
  {
    "id": 65,
    "topic": "Cooling tower and evaporative condenser",
    "question": "In crossflow cooling tower the air moves…………….through the fill across the downward fall of the water.",
    "question_ar": "في برج التبريد ذو الجريان المتعامد (Crossflow)، يتحرك الهواء ........... عبر الحشوة قاطعاً مسار سقوط الماء:",
    "options": {
      "A": "Inclined",
      "B": "Horizontally",
      "C": "Vertically upward",
      "D": "None of these",
      "E": "All of these"
    },
    "answer": "B",
    "note": "في برج الجريان المتعامد (Crossflow)، يتحرك الهواء أفقياً (Horizontally) بينما يسقط الماء للأسفل.",
    "clue": "🔑 شفرة الامتحان: برج الجريان المتعامد Crossflow ➔ الهواء يتحرك أفقياً Horizontally (B).",
    "keyword": "crossflow cooling tower the air moves"
  },
  {
    "id": 66,
    "topic": "Cooling tower and evaporative condenser",
    "question": "The condensing temperature can usually be kept lower with one of evaporative devices than with an air-cooled condenser because of .......",
    "question_ar": "يمكن إبقاء درجة حرارة التكثيف أقل باستخدام الأجهزة التبخيرية مقارنة بالمكثف الهوائي لأن:",
    "options": {
      "A": "The condensing temperature reaches the air dry bulb temperature.",
      "B": "The condensing temperature reaches the air wet bulb temperature",
      "C": "The condensing temperature more than the dry bulb temperature.",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "B",
    "note": "الأجهزة التبخيرية تتيح الوصول لحرارة قريبة من درجة البصيلة الرطبة (Wet bulb) وهي دائماً أقل من البصيلة الجافة.",
    "clue": "🔑 شفرة الامتحان: ميزة الأجهزة التبخيرية ➔ حرارتها تصل للبصيلة الرطبة Wet bulb temperature (B).",
    "keyword": "kept lower with one of evaporative devices than air-cooled"
  },
  {
    "id": 67,
    "topic": "Cooling tower and evaporative condenser",
    "question": "The ……... is the difference between the wet bulb temperature of the entering air and the temperature of the leaving water from the cooling tower.",
    "question_ar": "يمثل الفرق بين درجة حرارة البصيلة الرطبة للهواء الداخل ودرجة حرارة الماء الخارج من برج التبريد:",
    "options": {
      "A": "Approach",
      "B": "Range",
      "C": "Efficiency",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "A",
    "note": "الاقتراب (Approach) = حرارة الماء الخارج من البرج - حرارة البصيلة الرطبة للهواء الداخل.",
    "clue": "🔑 شفرة الامتحان: الفرق بين ماء البرج الخارج وبصيلة الهواء الرطبة ➔ الاقتراب Approach (A).",
    "keyword": "difference between wet bulb ... leaving water"
  },
  {
    "id": 68,
    "topic": "Cooling tower and evaporative condenser",
    "question": "The sequence of the combined heat and mass transfer process in the evaporative condenser is",
    "question_ar": "التسلسل المتكامل لعملية انتقال الحرارة والكتلة في المكثف التبخيري يشمل:",
    "options": {
      "A": "Conduction and convection from the tube surface to the outside surface of the film of water",
      "B": "Condensation of refrigerant vapor on the inside of the tube",
      "C": "The conduction through the tube walls",
      "D": "All of these",
      "E": "None of these"
    },
    "answer": "D",
    "note": "جميع هذه الخطوات تمثل التسلسل المتكامل لانتقال الحرارة من المائع إلى طبقة الماء والهواء.",
    "clue": "🔑 شفرة الامتحان: خطوات التبادل بالمكثف التبخيري ➔ تشمل كل الخطوات: All of these (D).",
    "keyword": "sequence of combined heat and mass transfer"
  },
  {
    "id": 69,
    "topic": "Cooling tower and evaporative condenser",
    "question": "The advantage of cooling tower and evaporative condenser compared with the air-cooled condenser is.",
    "question_ar": "ميزة برج التبريد والمكثف التبخيري مقارنة بالمكثف المبرد بالهواء هي:",
    "options": {
      "A": "Higher condensing temperature.",
      "B": "Lower condensing temperature.",
      "C": "Small size equipment.",
      "D": "High compression pow",
      "E": "All of these"
    },
    "answer": "B",
    "note": "أكبر ميزة هي الحصول على درجة حرارة تكثيف أقل (Lower condensing temperature) مما يوفر في استهلاك الكهرباء.",
    "clue": "🔑 شفرة الامتحان: ميزة المكثف التبخيري وبرج التبريد ➔ حرارة تكثيف منخفضة Lower condensing temperature (B).",
    "keyword": "advantage of cooling tower and evaporative condenser"
  },
  {
    "id": 70,
    "topic": "Cooling tower and evaporative condenser",
    "question": "In crossflow cooling tower the air moves horizontally through the fill across the ……… fall of the water",
    "question_ar": "في برج التبريد المتعامد، يتحرك الهواء أفقياً عبر الحشوة قاطعاً المسار ........... لسقوط الماء:",
    "options": {
      "A": "Upward.",
      "B": "Horizontally.",
      "C": "Downward.",
      "D": "Inclined.",
      "E": "None of these"
    },
    "answer": "C",
    "note": "يسقط الماء للأسفل (Downward) بفعل الجاذبية.",
    "clue": "🔑 شفرة الامتحان: اتجاه سقوط الماء ببرج Crossflow ➔ يسقط للأسفل Downward (C).",
    "keyword": "crossflow cooling tower ... fall of the water"
  },
  {
    "id": 71,
    "topic": "Cooling tower and evaporative condenser",
    "question": "Cooling tower designer and manufacture often use the number of transfer unit NTU to refer to the term ……...",
    "question_ar": "يستخدم مصممو ومصنعو أبراج التبريد عدد وحدات النقل (NTU) للإشارة إلى المقدار:",
    "options": {
      "A": "L/G",
      "B": "hc A / cpm",
      "C": "Δt",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "B",
    "note": "عدد وحدات النقل NTU في أبراج التبريد يرمز إلى المقدار (hc A / cpm).",
    "clue": "🔑 شفرة الامتحان: رمز عدد وحدات النقل NTU ➔ هو المقدار: hc A / cpm (B).",
    "keyword": "number of transfer unit NTU to refer to"
  },
  {
    "id": 72,
    "topic": "Cooling tower and evaporative condenser",
    "question": "The evaporative condenser combines the function of.",
    "question_ar": "يدمج المكثف التبخيري وظيفتي كلٍّ من:",
    "options": {
      "A": "Condenser and compressor",
      "B": "Condenser and cooling tower",
      "C": "Condenser and expansion valve",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "B",
    "note": "المكثف التبخيري يدمج وظيفة المكثف مع برج التبريد في وحدة واحدة مدمجة.",
    "clue": "🔑 شفرة الامتحان: المكثف التبخيري يدمج بين ➔ المكثف وبرج التبريد Condenser and cooling tower (B).",
    "keyword": "evaporative condenser combines the function of"
  },
  {
    "id": 73,
    "topic": "Cooling tower and evaporative condenser",
    "question": "Purpose of cooling tower basin is",
    "question_ar": "الغرض الأساسي من حوض برج التبريد (Basin) هو:",
    "options": {
      "A": "To provide the storage capacity during makeup water failure",
      "B": "To serve as receptacle for cooled water",
      "C": "To act as a reservoir for the cooling water pumps",
      "D": "All of these",
      "E": "None of these"
    },
    "answer": "D",
    "note": "حوض البرج (Basin) يستقبل الماء المبرد ويعمل كمخزن ومصدر سحب لمضخات التدوير.",
    "clue": "🔑 شفرة الامتحان: الغرض من حوض برج التبريد (Basin) ➔ كل الأغراض: All of these (D).",
    "keyword": "Purpose of cooling tower basin"
  },
  {
    "id": 74,
    "topic": "Cooling tower and evaporative condenser",
    "question": "Cooling towers operate on the principle :",
    "question_ar": "تعمل أبراج التبريد وفق المبدأ الفيزيائي لـ:",
    "options": {
      "A": "Henry's law",
      "B": "Evaporative cooling",
      "C": "Stefan-Boltzmann Law",
      "D": "All of these",
      "E": "None of these"
    },
    "answer": "B",
    "note": "مبدأ عمل أبراج التبريد هو التبريد التبخيري (Evaporative cooling).",
    "clue": "🔑 شفرة الامتحان: مبدأ عمل أبراج التبريد ➔ التبريد التبخيري Evaporative cooling (B).",
    "keyword": "Cooling towers operate on the principle"
  },
  {
    "id": 75,
    "topic": "Cooling tower and evaporative condenser",
    "question": "What is (L / G) in terms of the cooling tower?",
    "question_ar": "ماذا تعني النسبة (L / G) في حسابات أداء أبراج التبريد؟",
    "options": {
      "A": "Length / Gradient",
      "B": "Length / Girth",
      "C": "Air mass flow rate / Water flow rate",
      "D": "Water flow rate / Air mass flow rate",
      "E": "All of these"
    },
    "answer": "D",
    "note": "L/G تمثل النسبة بين معدل تدفق سائل الماء (Liquid) إلى معدل تدفق كتلة الهواء (Gas/Air).",
    "clue": "🔑 شفرة الامتحان: النسبة (L / G) بالبرج ➔ تدفق الماء على تدفق الهواء Water flow rate / Air mass flow rate (D).",
    "keyword": "What is (L / G) in terms of the cooling tower"
  },
  {
    "id": 76,
    "topic": "Absorption Refrigeration System",
    "question": "In absorption system, compressor in vapor compression cycle is replaced by",
    "question_ar": "في منظومة الامتصاص، يُستبدل الضاغط الميكانيكي لدورة الانضغاط البخاري بـ:",
    "options": {
      "A": "Absorber",
      "B": "Absorber, generator and pump",
      "C": "Pump",
      "D": "Generator",
      "E": "Generator and pump"
    },
    "answer": "B",
    "note": "في دورة الامتصاص يستبدل الضاغط الميكانيكي بثلاثية: الماص (Absorber)، المولد (Generator)، ومضخة المحلول (Pump).",
    "clue": "🔑 شفرة الامتحان: بديل الضاغط بمنظومة الامتصاص ➔ ثلاثي: ماص، مولد، ومضخة Absorber, generator and pump (B).",
    "keyword": "compressor in vapor compression cycle is replaced by"
  },
  {
    "id": 77,
    "topic": "Absorption Refrigeration System",
    "question": "In the aqua-ammonia absorption system,",
    "question_ar": "في منظومة امتصاص أكوا-أمونيا (الماء والأمونيا):",
    "options": {
      "A": "Ammonia is the refrigerant, and water is the absorbent",
      "B": "Water is the refrigerant, and ammonia is the absorbent",
      "C": "Both ammonia and water used as refrigerant",
      "D": "Both ammonia and water used as absorbent",
      "E": "None of these"
    },
    "answer": "A",
    "note": "في منظومة الماء والأمونيا: الأمونيا هي مائع التبريد والماء هو السائل الماص.",
    "clue": "🔑 شفرة الامتحان: منظومة أكوا-أمونيا ➔ الأمونيا مائع والماء ماص: Ammonia refrigerant, water absorbent (A).",
    "keyword": "aqua-ammonia absorption system"
  },
  {
    "id": 78,
    "topic": "Absorption Refrigeration System",
    "question": "The COP of absorption refrigeration system is …… to that of vapor compression refrigeration system",
    "question_ar": "معامل الأداء (COP) لمنظومة التبريد بالامتصاص مقارنة بمنظومة الانضغاط البخاري يكون:",
    "options": {
      "A": "High",
      "B": "Low",
      "C": "Equal",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "B",
    "note": "معامل الأداء COP لمنظومات الامتصاص منخفض جداً مقارنة بمنظومات الانضغاط البخاري.",
    "clue": "🔑 شفرة الامتحان: معامل الأداء COP للامتصاص ➔ منخفض جداً Low (B).",
    "keyword": "COP of absorption ... to vapor compression"
  },
  {
    "id": 79,
    "topic": "Absorption Refrigeration System",
    "question": "Which type of energy is required to expend in vapor absorption refrigeration system?",
    "question_ar": "ما هو نوع الطاقة المطلوب استهلاكها لتشغيل منظومة التبريد بالامتصاص؟",
    "options": {
      "A": "Low-grade energy",
      "B": "High-grade energy",
      "C": "Medium-grade energy",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "A",
    "note": "تعمل منظومات الامتصاص بالطاقة الحرارية منخفضة الرتبة (Low-grade heat/waste heat).",
    "clue": "🔑 شفرة الامتحان: نوع الطاقة المستهلكة بالامتصاص ➔ حرارة منخفضة الرتبة Low-grade energy (A).",
    "keyword": "type of energy is required to expend in absorption"
  },
  {
    "id": 80,
    "topic": "Absorption Refrigeration System",
    "question": "Cooling water is required for the following equipment in ammonia absorption plant",
    "question_ar": "يلزم تزويد ماء التبريد للمعدات التالية في محطة امتصاص الأمونيا:",
    "options": {
      "A": "Evaporator and generator",
      "B": "Condenser and generator",
      "C": "Condenser, absorber and separator (rectifier)",
      "D": "Absorber and generator",
      "E": "Absorber and evaporator"
    },
    "answer": "C",
    "note": "مياه التبريد الخارجية تلزم لتبريد المكثف والماص ومصحح البخار (Condenser, absorber and rectifier).",
    "clue": "🔑 شفرة الامتحان: مياه التبريد بمحطة الأمونيا تلزم لـ ➔ المكثف والماص ومصحح البخار (Rectifier) (C).",
    "keyword": "Cooling water is required for the following equipment in ammonia"
  },
  {
    "id": 81,
    "topic": "Absorption Refrigeration System",
    "question": "In Li-Br water absorption refrigeration system, ……. Used as refrigerant",
    "question_ar": "في منظومة امتصاص بروميد الليثيوم والماء، يُستخدم ........... كمائع تبريد:",
    "options": {
      "A": "Ammonia",
      "B": "Air",
      "C": "R-134a",
      "D": "Water",
      "E": "Li-Br"
    },
    "answer": "D",
    "note": "في منظومة بروميد الليثيوم والماء، الماء هو مائع التبريد (Refrigerant) وبروميد الليثيوم هو الماص.",
    "clue": "🔑 شفرة الامتحان: منظومة Li-Br والماء ➔ مائع التبريد هو الماء Water (D).",
    "keyword": "Li-Br water absorption ... Used as refrigerant"
  },
  {
    "id": 82,
    "topic": "Absorption Refrigeration System",
    "question": "In the LiBr-water absorption system, the crystallization phenomena lead to",
    "question_ar": "في منظومة LiBr والماء، تؤدي ظاهرة التبلور (Crystallization) إلى:",
    "options": {
      "A": "Decrease the COP",
      "B": "Block the flow",
      "C": "Increase the COP",
      "D": "Increase the flow",
      "E": "All of these"
    },
    "answer": "B",
    "note": "ظاهرة التبلور (Crystallization) تسد الأنابيب وتوقف جريان المحلول داخل المنظومة (Block the flow).",
    "clue": "🔑 شفرة الامتحان: ظاهرة التبلور (Crystallization) ➔ تؤدي لانسداد الجريان Block the flow (B).",
    "keyword": "LiBr-water ... crystallization phenomena"
  },
  {
    "id": 83,
    "topic": "Absorption Refrigeration System",
    "question": "In the LiBr-water absorption cycle, the high-pressure sections are ____________ .",
    "question_ar": "في دورة امتصاص LiBr والماء، الأجزاء الواقعة في جانب الضغط العالي هي:",
    "options": {
      "A": "Absorber and generator",
      "B": "Generator and evaporator",
      "C": "Generator and condenser",
      "D": "Evaporator and absorber",
      "E": "Condenser and evaporator"
    },
    "answer": "C",
    "note": "جانب الضغط العالي في دورة الامتصاص يضم المولد والمكثف (Generator and condenser).",
    "clue": "🔑 شفرة الامتحان: جانب الضغط العالي بالامتصاص ➔ المولد والمكثف Generator and condenser (C).",
    "keyword": "LiBr-water ... high-pressure sections"
  },
  {
    "id": 84,
    "topic": "Absorption Refrigeration System",
    "question": "Increasing the temperature of cooling water that is used to cool the condenser section in the LiBr-water absorption system, leads to",
    "question_ar": "يؤدي ارتفاع درجة حرارة ماء تبريد المكثف في منظومة LiBr والماء إلى:",
    "options": {
      "A": "Increase the refrigerating capacity",
      "B": "Reduce the refrigerating capacity",
      "C": "Constant the refrigerating capacity",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "B",
    "note": "ارتفاع درجة حرارة مياه تبريد المكثف يؤدي لانخفاض سعة التبريد.",
    "clue": "🔑 شفرة الامتحان: ارتفاع حرارة ماء تبريد مكثف LiBr ➔ يقلل سعة التبريد Reduce refrigerating capacity (B).",
    "keyword": "Increasing the temperature of cooling water ... condenser in LiBr"
  },
  {
    "id": 85,
    "topic": "Absorption Refrigeration System",
    "question": "Water is used as a ____ in vapor absorption refrigeration system",
    "question_ar": "يُستخدم الماء في منظومات التبريد بالامتصاص كـ:",
    "options": {
      "A": "Refrigerant",
      "B": "Absorbent",
      "C": "Adsorbent",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "D",
    "note": "الماء يستخدم كمائع تبريد مع LiBr، وكمادة ماصة مع الأمونيا (Both A and B).",
    "clue": "🔑 شفرة الامتحان: الماء يُستخدم في الامتصاص كـ ➔ مائع تبريد وماص: Both A and B (D).",
    "keyword": "Water is used as a ____ in vapor absorption"
  },
  {
    "id": 86,
    "topic": "Absorption Refrigeration System",
    "question": "The mechanical work required to run vapor absorption system is ……… the mechanical work required to run vapor compression system.",
    "question_ar": "الشغل الميكانيكي المطلوب لتشغيل منظومة الامتصاص مقارنة بالانضغاط البخاري يكون:",
    "options": {
      "A": "Less than",
      "B": "More than",
      "C": "Similar to",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "A",
    "note": "الشغل الميكانيكي المطلوب قليل جداً لأنه يقتصر على مضخة سائل صغيرة فقط.",
    "clue": "🔑 شفرة الامتحان: الشغل الميكانيكي بالامتصاص ➔ أقل بكثير من الانضغاط Less than (A).",
    "keyword": "mechanical work required to run vapor absorption"
  },
  {
    "id": 87,
    "topic": "Absorption Refrigeration System",
    "question": "What is an advantage using analyzer-rectifier in aqua-ammonia absorption system?",
    "question_ar": "ما فائدة استخدام المحلل والمصحح (Analyzer-Rectifier) في منظومة الأمونيا والماء؟",
    "options": {
      "A": "It prevents expansion valve from blocking due to ice formation",
      "B": "It makes ammonia-water solution strong",
      "C": "It makes ammonia-water solution weak",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "A",
    "note": "تخليص بخار الأمونيا من قطرات الماء يمنع تجمد الماء وانسداد صمام التمدد بالجليد.",
    "clue": "🔑 شفرة الامتحان: فائدة المحلل والمصحح بالأمونيا ➔ منع انسداد صمام التمدد بالثلج Prevents expansion valve blocking (A).",
    "keyword": "advantage using analyzer-rectifier in aqua-ammonia"
  },
  {
    "id": 88,
    "topic": "Absorption Refrigeration System",
    "question": "Which of the following is not component of vapour absorption refrigeration system",
    "question_ar": "أيٌّ مما يلي ليس من مكونات منظومة التبريد بالامتصاص؟",
    "options": {
      "A": "Generator",
      "B": "Compressor",
      "C": "Absorber",
      "D": "Evaporator",
      "E": "None of these"
    },
    "answer": "B",
    "note": "الضاغط (Compressor) غير موجود في دورة الامتصاص.",
    "clue": "🔑 شفرة الامتحان: لا يوجد بالامتصاص ➔ الضاغط الميكانيكي Compressor (B).",
    "keyword": "not component of vapour absorption"
  },
  {
    "id": 89,
    "topic": "Absorption Refrigeration System",
    "question": "Ammonia-absorption refrigeration cycle requires …... to work input as for vapour compression cycle",
    "question_ar": "تتطلب دورة امتصاص الأمونيا مدخل شغل ميكانيكي مقارنة بدورة الانضغاط البخاري بمقدار:",
    "options": {
      "A": "Maximum work input",
      "B": "Very little work input",
      "C": "Zero work input",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "B",
    "note": "تتطلب طاقة شغل ميكانيكي ضئيلة جداً (Very little work input).",
    "clue": "🔑 شفرة الامتحان: الشغل الميكانيكي المدخل لدورة الأمونيا ➔ ضئيل جداً Very little work input (B).",
    "keyword": "Ammonia-absorption ... work input"
  },
  {
    "id": 90,
    "topic": "Absorption Refrigeration System",
    "question": "Aqua ammonia solution used in absorption refrigeration system is a solution of ammonia and",
    "question_ar": "محلول أكوا-أمونيا المستخدم في منظومة الامتصاص هو محلول يتكون من الأمونيا و:",
    "options": {
      "A": "Ammonia",
      "B": "Air",
      "C": "Water",
      "D": "R-134a",
      "E": "Li-Br"
    },
    "answer": "C",
    "note": "محلول أكوا-أمونيا هو مزيج من الأمونيا والماء.",
    "clue": "🔑 شفرة الامتحان: محلول أكوا-أمونيا يتكون من أمونيا و ➔ ماء Water (C).",
    "keyword": "Aqua ammonia solution ... ammonia and"
  },
  {
    "id": 91,
    "topic": "Absorption Refrigeration System",
    "question": "The pressure of water-LiBr absorption systems is ……compared to the atmospheric pressure.",
    "question_ar": "ضغط التشغيل في منظومات امتصاص ماء-بروميد الليثيوم مقارنة بالضغط الجوي يكون:",
    "options": {
      "A": "Very low.",
      "B": "Very high.",
      "C": "Same.",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "A",
    "note": "منظومات LiBr-Water تعمل تحت تفريغ عالٍ جداً وضغط منخفض جداً مقارنة بالضغط الجوي.",
    "clue": "🔑 شفرة الامتحان: ضغط منظومة LiBr والماء ➔ تفريغ وضغط واطئ جداً Very low (A).",
    "keyword": "pressure of water-LiBr ... compared to atmospheric"
  },
  {
    "id": 92,
    "topic": "Absorption Refrigeration System",
    "question": "The absorption systems that work on water-LiBr are …… than that work on ammonia-water.",
    "question_ar": "تعتبر منظومات الامتصاص العاملة بماء-بروميد الليثيوم ........... مقارنة بالعاملة بالأمونيا والماء:",
    "options": {
      "A": "Complicated.",
      "B": "Simpler.",
      "C": "Same.",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "B",
    "note": "منظومات الماء وبروميد الليثيوم أبسط تشغيلياً لأن ملح LiBr لا يتبخر، فلا تحتاج محلل ومصحح بخار.",
    "clue": "🔑 شفرة الامتحان: منظومة LiBr والماء مقارنة بالأمونيا ➔ أبسط لأن الملح لا يتبخر Simpler (B).",
    "keyword": "work on water-LiBr are …… than ammonia-water"
  },
  {
    "id": 93,
    "topic": "Absorption Refrigeration System",
    "question": "The mixture of absorption system should be",
    "question_ar": "يجب أن يتصف خليط ومحلول منظومة الامتصاص بأنه:",
    "options": {
      "A": "Non-corrosive.",
      "B": "Stable.",
      "C": "Cheap.",
      "D": "None of these",
      "E": "All of these"
    },
    "answer": "E",
    "note": "من الخصائص المثالية لخليط الامتصاص أن يكون غير مسبب للتآكل، ومستقر كيميائياً، ورخيص التكلفة.",
    "clue": "🔑 شفرة الامتحان: خليط الامتصاص يجب أن يكون ➔ كل المواصفات: All of these (E).",
    "keyword": "mixture of absorption system should be"
  },
  {
    "id": 94,
    "topic": "Absorption Refrigeration System",
    "question": "Why an analyzer-rectifier combination is used in absorption refrigeration cycle?",
    "question_ar": "لماذا يُستخدم مجمع المحلل والمصحح (Analyzer-Rectifier) في دورة الامتصاص؟",
    "options": {
      "A": "To decrease the amount of water vapor in ammonia vapor",
      "B": "To increase the amount of water vapor in ammonia vapor",
      "C": "To eliminate the water vapor from ammonia vapor",
      "D": "All of these",
      "E": "None of these"
    },
    "answer": "C",
    "note": "وظيفته إزالة والتخلص التام من بخار الماء العالق مع بخار الأمونيا المتجه للمكثف.",
    "clue": "🔑 شفرة الامتحان: الغرض من المحلل والمصحح ➔ التخلص التام من بخار الماء Eliminate water vapor (C).",
    "keyword": "Why an analyzer-rectifier combination is used"
  },
  {
    "id": 95,
    "topic": "Absorption Refrigeration System",
    "question": "In Lithium bromide-water vapor absorption refrigeration system",
    "question_ar": "في منظومة التبريد بالامتصاص العاملة ببروميد الليثيوم والماء:",
    "options": {
      "A": "Li-Br is the refrigerant and water is the absorbent",
      "B": "Water is the refrigerant and Li-Br is the absorbent",
      "C": "Both Li-Br and water used as refrigerant",
      "D": "Both Li-Br and water used as absorbent",
      "E": "None of these"
    },
    "answer": "B",
    "note": "الماء هو المائع المتبخر المبرد (Refrigerant) وبروميد الليثيوم هو الماص (Absorbent).",
    "clue": "🔑 شفرة الامتحان: بمنظومة بروميد الليثيوم والماء ➔ الماء هو المائع والملح هو الماص (B).",
    "keyword": "Lithium bromide-water vapor absorption"
  },
  {
    "id": 96,
    "topic": "Absorption Refrigeration System",
    "question": "The vapour absorption refrigeration system is……….. the vapour compression refrigeration system",
    "question_ar": "منظومة التبريد بالامتصاص البخاري تكون ........... مقارنة بمنظومة الانضغاط البخاري:",
    "options": {
      "A": "More silent than",
      "B": "More noisy than",
      "C": "Equally noisy as",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "A",
    "note": "منظومات الامتصاص هادئة جداً لخلوها من ضواغط ميكانيكية ذات حركة ترددية كبيرة.",
    "clue": "🔑 شفرة الامتحان: صوت منظومة الامتصاص ➔ هادئة جداً More silent than (A).",
    "keyword": "vapour absorption ... vapour compression (sound)"
  },
  {
    "id": 97,
    "topic": "Absorption Refrigeration System",
    "question": "The most common type of absorption refrigeration system used in industrial application is based on refrigerant – absorbent combination of",
    "question_ar": "النوع الأكثر شيوعاً في التطبيقات الصناعية لمنظومات الامتصاص يعتمد على خليط:",
    "options": {
      "A": "Air – ammonia",
      "B": "Air - water",
      "C": "Ammonia - water",
      "D": "Li-Br – R134a",
      "E": "Li-Br – air"
    },
    "answer": "C",
    "note": "مزيج الأمونيا والماء هو الأكثر انتشاراً في التطبيقات الصناعية لقدرته على الوصول لدرجات تجمد منخفضة.",
    "clue": "🔑 شفرة الامتحان: الامتصاص الصناعي الأكثر شيوعاً ➔ أمونيا - ماء Ammonia - water (C).",
    "keyword": "industrial application is based on refrigerant – absorbent"
  },
  {
    "id": 98,
    "topic": "Absorption Refrigeration System",
    "question": "What is the disadvantage of ammonia using as refrigerant?",
    "question_ar": "ما هو العيب الرئيسي لاستخدام غاز الأمونيا كمائع تبريد؟",
    "options": {
      "A": "Ammonia has bad effect on ozone layer.",
      "B": "Ammonia cannot be detected in case of leakage.",
      "C": "Ammonia has higher energy cost",
      "D": "Ammonia is toxic in nature.",
      "E": "All of these"
    },
    "answer": "D",
    "note": "العيب الرئيسي للأمونيا هو أنها غاز سام وخانق في حال حدوث تسريب.",
    "clue": "🔑 شفرة الامتحان: عيب مائع الأمونيا ➔ غاز سام Ammonia is toxic in nature (D).",
    "keyword": "disadvantage of ammonia using as refrigerant"
  },
  {
    "id": 99,
    "topic": "Absorption Refrigeration System",
    "question": "In the Li-Br-water absorption system, the heat exchanger is located between the two streams of",
    "question_ar": "في منظومة امتصاص LiBr والماء، يقع المبادل الحراري بين مساري تدفق:",
    "options": {
      "A": "Condenser and expansion",
      "B": "Generator and condenser",
      "C": "Condenser and evaporator",
      "D": "Evaporator and absorber",
      "E": "Absorber and generator"
    },
    "answer": "E",
    "note": "المبادل الحراري للمحلول يوضع بين الماص والمولد لاسترجاع الحرارة وتحسين الكفاءة.",
    "clue": "🔑 شفرة الامتحان: المبادل الحراري بالامتصاص يقع بين ➔ الماص والمولد Absorber and generator (E).",
    "keyword": "Li-Br-water ... heat exchanger is located between"
  },
  {
    "id": 100,
    "topic": "Absorption Refrigeration System",
    "question": "In the LiBr-water absorption cycle, the low-pressure sections are ____________ .",
    "question_ar": "في دورة امتصاص LiBr والماء، الأجزاء الواقعة في جانب الضغط المنخفض هي:",
    "options": {
      "A": "Absorber and generator",
      "B": "Generator and evaporator",
      "C": "Generator and condenser",
      "D": "Evaporator and absorber",
      "E": "Condenser and evaporator"
    },
    "answer": "D",
    "note": "جانب الضغط المنخفض يضم المبخر والماص (Evaporator and absorber).",
    "clue": "🔑 شفرة الامتحان: جانب الضغط الواطئ بالامتصاص ➔ المبخر والماص Evaporator and absorber (D).",
    "keyword": "LiBr-water ... low-pressure sections"
  },
  {
    "id": 101,
    "topic": "Absorption Refrigeration System",
    "question": "The aqua-ammonia absorption system used …….. as the refrigerant.",
    "question_ar": "تستخدم منظومة امتصاص أكوا-أمونيا ........... كمائع تبريد:",
    "options": {
      "A": "Ammonia",
      "B": "Water",
      "C": "Hydrogen",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "A",
    "note": "مائع التبريد هو الأمونيا.",
    "clue": "🔑 شفرة الامتحان: مائع التبريد بأكوا-أمونيا ➔ الأمونيا Ammonia (A).",
    "keyword": "aqua-ammonia system used …….. as refrigerant"
  },
  {
    "id": 102,
    "topic": "Absorption Refrigeration System",
    "question": "Throttling the pressure of the water steam that is used to heat the generator section in the LiBr-water absorption system, leads to________.",
    "question_ar": "يؤدي خنق ضغط بخار التسخين المزود لمولد منظومة LiBr والماء إلى:",
    "options": {
      "A": "Increase the refrigerating capacity",
      "B": "Reduce the refrigerating capacity",
      "C": "Fixed the refrigerating capacity",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "B",
    "note": "خنق ضغط بخار التسخين يقلل من حرارة المولد وبالتالي يقلل كمية البخار المتولدة وسعة التبريد.",
    "clue": "🔑 شفرة الامتحان: خنق بخار التسخين للمولد ➔ يقلل سعة التبريد Reduce refrigerating capacity (B).",
    "keyword": "Throttling the pressure of the water steam ... generator"
  },
  {
    "id": 103,
    "topic": "Adsorption Refrigeration System",
    "question": "During the adsorption process in the adsorption refrigeration cycle, the adsorbent material",
    "question_ar": "أثناء عملية الامتزاز في دورة التبريد بالامتزاز السطحي، تقوم المادة المازّة بـ:",
    "options": {
      "A": "Absorbs the refrigerant",
      "B": "Adsorbs the refrigerant",
      "C": "Releases the refrigerant",
      "D": "Evaporated the refrigerant",
      "E": "Condensate the refrigerant"
    },
    "answer": "B",
    "note": "في عملية الامتزاز السطحي، تقوم المادة المازّة بجذب واحتجاز مائع التبريد على سطحها (Adsorbs).",
    "clue": "🔑 شفرة الامتحان: الامتزاز بالسطح (Adsorption) ➔ المادة تمز وتحتجز المائع Adsorbs the refrigerant (B).",
    "keyword": "adsorption process ... adsorbent material"
  },
  {
    "id": 104,
    "topic": "Adsorption Refrigeration System",
    "question": "The driving force for the adsorption process in a refrigeration system is usually",
    "question_ar": "القوة المحركة والدافع الأساسي لعملية التبريد بالامتزاز السطحي هي عادةً:",
    "options": {
      "A": "Electrical energy",
      "B": "Magnetic energy",
      "C": "Sound waves",
      "D": "Waste heat",
      "E": "All of these"
    },
    "answer": "D",
    "note": "القوة الدافعة الأساسية لمنظومات الامتزاز هي الحرارة المهدورة أو الشمسية (Waste heat).",
    "clue": "🔑 شفرة الامتحان: القوة المحركة للتبريد بالامتزاز ➔ الحرارة المهدورة Waste heat (D).",
    "keyword": "driving force for the adsorption process"
  },
  {
    "id": 105,
    "topic": "Adsorption Refrigeration System",
    "question": "The working pair's fluid that used in adsorption refrigeration system",
    "question_ar": "من أزواج المائع والمادة المازّة المستخدمة في منظومة التبريد بالامتزاز السطحي:",
    "options": {
      "A": "Active Carbon - methanol",
      "B": "Active Carbon - R134a",
      "C": "Silica gel - water",
      "D": "All of these",
      "E": "None of these"
    },
    "answer": "D",
    "note": "جميع هذه الأزواج من المواد الصلبة المازّة وموائع التبريد مستخدمة بنجاح في دورات الامتزاز.",
    "clue": "🔑 شفرة الامتحان: أزواج مواد الامتزاز تشمل ➔ كل الأزواج المذكورة: All of these (D).",
    "keyword": "working pair's fluid that used in adsorption"
  },
  {
    "id": 106,
    "topic": "Adsorption Refrigeration System",
    "question": "The adsorption refrigeration systems consist of",
    "question_ar": "تتكون منظومة التبريد بالامتزاز السطحي من:",
    "options": {
      "A": "Condenser, evaporator, absorber and generator.",
      "B": "Condenser, evaporator, expansion device and compressor.",
      "C": "Condenser, evaporator, and adiabatic region",
      "D": "Condenser, evaporator, one or several adsorber.",
      "E": "None of these"
    },
    "answer": "D",
    "note": "تتكون من مكثف ومبخر ووعاء امتزاز أو أكثر (Adsorber beds).",
    "clue": "🔑 شفرة الامتحان: مكونات منظومة الامتزاز ➔ مكثف ومبخر وأسرّة امتزاز Adsorber (D).",
    "keyword": "adsorption refrigeration systems consist of"
  },
  {
    "id": 107,
    "topic": "Adsorption Refrigeration System",
    "question": "The adsorption refrigeration system has",
    "question_ar": "تتصف منظومة التبريد بالامتزاز السطحي بأن عملية تشغيلها تكون:",
    "options": {
      "A": "High COP",
      "B": "Continue operation",
      "C": "Intermittence operation",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "C",
    "note": "دورة الامتزاز بطبيعتها متقطعة (Intermittent) ما لم يتم استخدام عدة أسرّة متعاقبة.",
    "clue": "🔑 شفرة الامتحان: طبيعة عمل منظومة الامتزاز ➔ تشغيل متقطع Intermittence operation (C).",
    "keyword": "adsorption refrigeration system has (operation)"
  },
  {
    "id": 108,
    "topic": "Adsorption Refrigeration System",
    "question": "The process of …………. involves separation of a substance from one phase accompanied by its accumulation or concentration at the surface of another.",
    "question_ar": "العملية التي تتضمن فصل مادة من طور وتراكمها أو تركيزها على السطح البيني لطور آخر هي:",
    "options": {
      "A": "Adsorption",
      "B": "Absorption",
      "C": "Thermoelectric",
      "D": "Condensation",
      "E": "Evaporation"
    },
    "answer": "A",
    "note": "الامتزاز السطحي (Adsorption) هو تجمع وتركيز جزيئات المادة على السطح البيني للطور الصلب.",
    "clue": "🔑 شفرة الامتحان: تراكم المادة على سطح طور آخر ➔ الامتزاز السطحي Adsorption (A).",
    "keyword": "separation of a substance ... accumulation at surface"
  },
  {
    "id": 109,
    "topic": "Adsorption Refrigeration System",
    "question": "The COP of adsorption refrigeration system is ……….. than the COP of absorption refrigeration system.",
    "question_ar": "معامل الأداء (COP) لمنظومة التبريد بالامتزاز السطحي مقارنة بمنظومة الامتصاص يكون:",
    "options": {
      "A": "Higher",
      "B": "Lower",
      "C": "Equal",
      "D": "Both A and B",
      "E": "Both B and C"
    },
    "answer": "B",
    "note": "معامل الأداء لمنظومات الامتزاز السطحي أقل من منظومات الامتصاص.",
    "clue": "🔑 شفرة الامتحان: COP الامتزاز مقارنة بالامتصاص ➔ أقل Lower (B).",
    "keyword": "COP of adsorption ... than COP of absorption"
  },
  {
    "id": 110,
    "topic": "Adsorption Refrigeration System",
    "question": "The adsorption refrigeration system has",
    "question_ar": "تمتاز منظومة التبريد بالامتزاز السطحي بأن لها:",
    "options": {
      "A": "Risk of crystallization",
      "B": "Small refrigeration capacity",
      "C": "Noise operation",
      "D": "Both A and B",
      "E": "Both B and C"
    },
    "answer": "B",
    "note": "سعتها التبريدية تعتبر صغيرة (Small refrigeration capacity) مقارنة بالأنظمة الأخرى.",
    "clue": "🔑 شفرة الامتحان: منظومة الامتزاز تمتاز بـ ➔ سعة تبريد صغيرة Small refrigeration capacity (B).",
    "keyword": "adsorption refrigeration system has (capacity)"
  },
  {
    "id": 111,
    "topic": "Adsorption Refrigeration System",
    "question": "In an adsorption refrigeration system, the function of adsorbent material is",
    "question_ar": "في منظومة التبريد بالامتزاز السطحي، وظيفة المادة المازّة (Adsorbent) هي:",
    "options": {
      "A": "Absorbs the refrigerant.",
      "B": "Condenses the refrigerant.",
      "C": "Adsorbed the refrigerant",
      "D": "Evaporated the refrigerant.",
      "E": "None of these"
    },
    "answer": "C",
    "note": "وظيفة المادة المازّة هي احتجاز المائع على مساماتها السطحية (Adsorb the refrigerant).",
    "clue": "🔑 شفرة الامتحان: وظيفة المادة المازّة ➔ احتجاز المائع على سطحها Adsorbed the refrigerant (C).",
    "keyword": "function of adsorbent material is"
  },
  {
    "id": 112,
    "topic": "Adsorption Refrigeration System",
    "question": "In adsorption refrigeration system, the desorption process is typically achieved by",
    "question_ar": "في منظومة التبريد بالامتزاز، تتحقق عملية انتزاع وطرد المائع (Desorption) نموذجياً بواسطة:",
    "options": {
      "A": "Heating the adsorbent material.",
      "B": "Cooling the adsorbent material.",
      "C": "Reducing the pressure on the sorbent material",
      "D": "Both A and B",
      "E": "Both B and C"
    },
    "answer": "A",
    "note": "عملية طرد وفصل المائع (Desorption/Regeneration) تتم عن طريق تسخين المادة المازّة.",
    "clue": "🔑 شفرة الامتحان: عملية الانتزاع (Desorption) ➔ تتم بالتسخين Heating the adsorbent material (A).",
    "keyword": "desorption process is typically achieved by"
  },
  {
    "id": 113,
    "topic": "Adsorption Refrigeration System",
    "question": "In adsorption refrigeration system, the adsorption process is typically achieved by",
    "question_ar": "في منظومة التبريد بالامتزاز، تتحقق عملية الامتزاز (Adsorption) نموذجياً بواسطة:",
    "options": {
      "A": "Heating the adsorbent material.",
      "B": "Cooling the adsorbent material.",
      "C": "Reducing the pressure on the sorbent material",
      "D": "Both A and B",
      "E": "Both B and C"
    },
    "answer": "B",
    "note": "عملية الامتزاز تحدث بكفاءة عند تبريد المادة المازّة (Cooling the adsorbent material).",
    "clue": "🔑 شفرة الامتحان: عملية الامتزاز (Adsorption) ➔ تتم بالتبريد Cooling the adsorbent material (B).",
    "keyword": "adsorption process is typically achieved by"
  },
  {
    "id": 114,
    "topic": "Adsorption Refrigeration System",
    "question": "The adsorption system consumes ……… electricity power in comparison with vapor compression system.",
    "question_ar": "استهلاك منظومة الامتزاز للقدرة الكهربائية مقارنة بمنظومة الانضغاط البخاري يكون:",
    "options": {
      "A": "Lower",
      "B": "Higher",
      "C": "Equal",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "A",
    "note": "تستهلك كهرباء أقل بكثير (Lower) لأنها تعتمد أساساً على مصادر حرارية.",
    "clue": "🔑 شفرة الامتحان: استهلاك الكهرباء بالامتزاز ➔ أقل بكثير Lower (A).",
    "keyword": "adsorption system consumes ……… electricity power"
  },
  {
    "id": 115,
    "topic": "Adsorption Refrigeration System",
    "question": "During the desorption process in the adsorption refrigeration cycle, the adsorbent material",
    "question_ar": "أثناء عملية الانتزاع والتحرير (Desorption)، تقوم المادة المازّة بـ:",
    "options": {
      "A": "Absorbs the refrigerant",
      "B": "Adsorbs the refrigerant",
      "C": "Releases the refrigerant",
      "D": "Evaporated the refrigerant",
      "E": "Condensate the refrigerant"
    },
    "answer": "C",
    "note": "خلال عملية الـ Desorption، تحرر المادة المازّة جزيئات المائع عند تسخينها (Releases).",
    "clue": "🔑 شفرة الامتحان: أثناء الـ Desorption المادة المازّة ➔ تحرر وتطلق المائع Releases the refrigerant (C).",
    "keyword": "During the desorption process ... adsorbent material"
  },
  {
    "id": 116,
    "topic": "Adsorption Refrigeration System",
    "question": "Which of the following is an example of an adsorbent material",
    "question_ar": "أيٌّ مما يلي يعتبر مثالاً على مادة صلبة مازّة (Adsorbent material)؟",
    "options": {
      "A": "Silica gel",
      "B": "Zeolite",
      "C": "Active Carbon",
      "D": "None of these",
      "E": "All of these"
    },
    "answer": "E",
    "note": "السيليكا جل، الزيولايت، والكربون المنشط كلها مواد مازّة شهيرة جداً.",
    "clue": "🔑 شفرة الامتحان: أمثلة المواد المازّة ➔ سيليكا جل وزيولايت وكربون: All of these (E).",
    "keyword": "example of an adsorbent material"
  },
  {
    "id": 117,
    "topic": "Adsorption Refrigeration System",
    "question": "The adsorption system shows no problems with",
    "question_ar": "لا تعاني منظومات التبريد بالامتزاز السطحي من مشاكل:",
    "options": {
      "A": "Corrosion",
      "B": "Crystallization",
      "C": "Continue operation",
      "D": "Both A and B",
      "E": "Both B and C"
    },
    "answer": "D",
    "note": "الأنظمة الامتزازية الصلبة لا تعاني من مشاكل التآكل أو التبلور المصاحبة للمحاليل السائلة.",
    "clue": "🔑 شفرة الامتحان: منظومة الامتزاز خالية من مشاكل ➔ التآكل والتبلور: Both A and B (D).",
    "keyword": "adsorption system shows no problems with"
  },
  {
    "id": 118,
    "topic": "Thermoelectric refrigeration system",
    "question": "……….. reported when two dissimilar metal wire are connected with each other in a loop to form two junctions, maintained at two different temperatures, a voltage potential force will be generated",
    "question_ar": "ينص على أنه عند وصل سلكين من معدنين مختلفين في حلقة لتشكيل وصلتين عند درجتي حرارة مختلفتين، يتولد فرق جهد كهربائي:",
    "options": {
      "A": "The Seebeck effect",
      "B": "Peltier effect",
      "C": "Thomson effect",
      "D": "Joulean effect",
      "E": "Heat conduction effect"
    },
    "answer": "A",
    "note": "تأثير سيبك (Seebeck effect) هو توليد فرق جهد عند اختلاف درجات حرارة الوصلتين.",
    "clue": "🔑 شفرة الامتحان: معدنان مختلفان + فرق حرارة = فرق جهد ➔ تأثير سيبك The Seebeck effect (A).",
    "keyword": "two dissimilar metal wire ... different temperatures, voltage"
  },
  {
    "id": 119,
    "topic": "Thermoelectric refrigeration system",
    "question": "………….. when the electric current flow through thermoelectric material (conductor), there is a dissipated of electric energy (it gets heated due to its electrical losses)",
    "question_ar": "عند مرور تيار كهربائي في موصل كهروحراري تتشتت طاقة ويسخن الموصل بسبب الفقد الكهربائي، هذا يسمى:",
    "options": {
      "A": "The Seebeck effect",
      "B": "Peltier effect",
      "C": "Thomson effect",
      "D": "Joulean effect",
      "E": "Heat conduction effect"
    },
    "answer": "D",
    "note": "تأثير جول (Joulean effect): تسخين الموصل نتيجة مقاومته الكهربائية للتيار (I^2 * R).",
    "clue": "🔑 شفرة الامتحان: تيار كهربائي يولد حرارة وتشتت طاقة ➔ تأثير جول Joulean effect (D).",
    "keyword": "electric current flow ... heated due to electrical losses"
  },
  {
    "id": 120,
    "topic": "Thermoelectric refrigeration system",
    "question": "The application of thermoelectric refrigeration system depends on",
    "question_ar": "يعتمد تطبيق منظومة التبريد الكهروحراري أساساً على:",
    "options": {
      "A": "The Seebeck effect",
      "B": "Peltier effect",
      "C": "Thomson effect",
      "D": "Joulean effect",
      "E": "Heat conduction effect"
    },
    "answer": "B",
    "note": "التبريد الكهروحراري يعتمد أساساً على تأثير بلتيير (Peltier effect).",
    "clue": "🔑 شفرة الامتحان: تطبيق التبريد الكهروحراري يعتمد على ➔ تأثير بلتيير Peltier effect (B).",
    "keyword": "application of thermoelectric refrigeration system depends on"
  },
  {
    "id": 121,
    "topic": "Thermoelectric refrigeration system",
    "question": "Which of the following applications using thermoelectric refrigeration system",
    "question_ar": "أيٌّ من التطبيقات التالية تستخدم منظومة التبريد الكهروحراري؟",
    "options": {
      "A": "Electronic cooling",
      "B": "Cooling of biological specimens",
      "C": "Ice making",
      "D": "Both A and B",
      "E": "Both B and C"
    },
    "answer": "D",
    "note": "يستخدم في تبريد الرقائق والمعالجات الإلكترونية والعينات الطبية والبيولوجية الدقيقة.",
    "clue": "🔑 شفرة الامتحان: تطبيقات التبريد الكهروحراري ➔ تبريد الإلكترونيات والعينات الحيوية: Both A and B (D).",
    "keyword": "applications using thermoelectric refrigeration"
  },
  {
    "id": 122,
    "topic": "Thermoelectric refrigeration system",
    "question": "Thermoelectric refrigeration system required",
    "question_ar": "تتطلب منظومة التبريد الكهروحراري تزويدها بمدخل طاقة:",
    "options": {
      "A": "Low voltage AC input.",
      "B": "High voltage AC input.",
      "C": "Low voltage DC input.",
      "D": "High voltage DC input.",
      "E": "None of these"
    },
    "answer": "C",
    "note": "تتطلب تياراً مستمراً منخفض الجهد (Low voltage DC input).",
    "clue": "🔑 شفرة الامتحان: تشغيل التبريد الكهروحراري يتطلب ➔ تيار مستمر منخفض Low voltage DC input (C).",
    "keyword": "Thermoelectric refrigeration system required"
  },
  {
    "id": 123,
    "topic": "Thermoelectric refrigeration system",
    "question": "When two dissimilar metals are connected with each other and hold in two different temperatures is called",
    "question_ar": "عند توصيل معدنين مختلفين والاحتفاظ بهما عند درجتي حرارة مختلفتين تُسمى المنظومة:",
    "options": {
      "A": "Adsorption refrigeration system",
      "B": "Absorption refrigeration system",
      "C": "Compression refrigeration system",
      "D": "Thermoelectric refrigeration system",
      "E": "Electromagnetic refrigeration system"
    },
    "answer": "D",
    "note": "المنظومة الكهروحرارية تعتمد على وصلات معدنين أو شبه موصلين مختلفين.",
    "clue": "🔑 شفرة الامتحان: معدنان مختلفان عند درجتي حرارة مختلفتين ➔ Thermoelectric refrigeration (D).",
    "keyword": "two dissimilar metals ... hold in two different temperatures"
  },
  {
    "id": 124,
    "topic": "Thermoelectric refrigeration system",
    "question": "…………….. proved when current flows through a conductor of a thermocouple that has an initial temperature gradient in it, then heat transfer rate per unit length is proportional to the product of current and the temperature",
    "question_ar": "أثبت أنه عند سريان تيار في موصل لمزدوج حراري ذي تدرج حراري أولي، فإن معدل انتقال الحرارة يتناسب مع حاصل ضرب التيار بالحرارة:",
    "options": {
      "A": "The Seebeck effect",
      "B": "Peltier effect",
      "C": "Thomson effect",
      "D": "Joulean effect",
      "E": "Heat conduction effect"
    },
    "answer": "C",
    "note": "هذا هو نص وتفسير تأثير طومسون (Thomson effect).",
    "clue": "🔑 شفرة الامتحان: تدرج حراري مع تيار كهربائي ➔ تأثير طومسون Thomson effect (C).",
    "keyword": "initial temperature gradient ... prop to current and temp"
  },
  {
    "id": 125,
    "topic": "Thermoelectric refrigeration system",
    "question": "The application of thermocouple depends on",
    "question_ar": "يعتمد تطبيق المزدوج الحراري (Thermocouple) لقياس الحرارة على:",
    "options": {
      "A": "The Seebeck effect",
      "B": "Peltier effect",
      "C": "Thomson effect",
      "D": "Joulean effect",
      "E": "Heat conduction effect"
    },
    "answer": "A",
    "note": "المزدوج الحراري (Thermocouple) المستخدم لقياس الحرارة يعتمد على تأثير سيبك.",
    "clue": "🔑 شفرة الامتحان: المزدوج الحراري (Thermocouple) يعتمد على ➔ تأثير سيبك The Seebeck effect (A).",
    "keyword": "application of thermocouple depends on"
  },
  {
    "id": 126,
    "topic": "Thermoelectric refrigeration system",
    "question": "In thermoelectric refrigeration system, loss due to",
    "question_ar": "في المنظومة الكهروحرارية، تحدث الخسائر والمفاقيد بسبب:",
    "options": {
      "A": "Thermal conductivity of materials",
      "B": "The friction loss in pipes",
      "C": "I^2 R losses",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "E",
    "note": "الخسائر ناتجة عن التوصيل الحراري العكسي ومفاقيد جول الكهربائية I^2*R (Both A and C).",
    "clue": "🔑 شفرة الامتحان: خسائر التبريد الكهروحراري ➔ توصيل حراري ومفاقيد I^2 R: Both A and C (E).",
    "keyword": "thermoelectric refrigeration system, loss due to"
  },
  {
    "id": 127,
    "topic": "Thermoelectric refrigeration system",
    "question": "In thermoelectric refrigeration system the heating and cooling function can be interchange by",
    "question_ar": "في المنظومة الكهروحرارية، يمكن التبديل بين وظيفتي التبريد والتدفئة عن طريق:",
    "options": {
      "A": "Reversing the direction of steam flow",
      "B": "Reversing the direction of air flow",
      "C": "Reversing the direction of electric current",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "C",
    "note": "عكس اتجاه التيار الكهربائي المار يقلب الوجه البارد إلى ساخن والساخن إلى بارد فوراً.",
    "clue": "🔑 شفرة الامتحان: التبديل بين التبريد والتدفئة ➔ عكس اتجاه التيار الكهربائي Reversing electric current (C).",
    "keyword": "heating and cooling function can be interchange by"
  },
  {
    "id": 128,
    "topic": "Thermoelectric refrigeration system",
    "question": "………..., reported when two dissimilar metal wire are connected with each other in a loop to form two junctions, its obtain a cooling and heating of two junctions when external voltage is supply to them.",
    "question_ar": "ينص على أنه عند توصيل جهد خارجي بحلقة لسلكين من معدنين مختلفين، يحدث تبريد لوصلة وتسخين للأخرى:",
    "options": {
      "A": "The Seebeck effect",
      "B": "Peltier effect",
      "C": "Thomson effect",
      "D": "Joulean effect",
      "E": "Heat conduction effect"
    },
    "answer": "B",
    "note": "تأثير بلتيير (Peltier effect) هو توليد تبريد في وصلة وتسخين في الأخرى عند إمرار تيار خارجي.",
    "clue": "🔑 شفرة الامتحان: تزويد جهد خارجي فيولد تبريد بوصلة وتسخين بالأخرى ➔ تأثير بلتيير Peltier effect (B).",
    "keyword": "external voltage is supply ... cooling and heating of junctions"
  },
  {
    "id": 129,
    "topic": "Thermoelectric refrigeration system",
    "question": "If the end of any element is maintenance at different temperature, there is a heat transfer from the hot end to the cold end called",
    "question_ar": "إذا وُجد طرفا عنصر عند درجتي حرارة مختلفتين، يحدث انتقال للحرارة من الطرف الساخن إلى البارد يُسمى تأثير:",
    "options": {
      "A": "The Seebeck effect",
      "B": "Peltier effect",
      "C": "Thomson effect",
      "D": "Joulean effect",
      "E": "Heat conduction effect"
    },
    "answer": "E",
    "note": "انتقال الحرارة من الطرف الساخن إلى البارد يسمى تأثير التوصيل الحراري (Heat conduction).",
    "clue": "🔑 شفرة الامتحان: انتقال الحرارة من الساخن للبارد ➔ التوصيل الحراري Heat conduction effect (E).",
    "keyword": "heat transfer from hot end to cold end called"
  },
  {
    "id": 130,
    "topic": "Thermoelectric refrigeration system",
    "question": "Which of the following related to thermoelectric refrigeration system",
    "question_ar": "أيٌّ مما يلي يتعلق بآلية العمل في منظومة التبريد الكهروحراري؟",
    "options": {
      "A": "Refrigerant flow through the circuit",
      "B": "Water flow through the circuit",
      "C": "Air flow through the circuit",
      "D": "Electrons flow through the circuit",
      "E": "None of these"
    },
    "answer": "D",
    "note": "حامل الشحنة وناقل الحرارة هو تدفق الإلكترونات والفجوات في أشباه الموصلات.",
    "clue": "🔑 شفرة الامتحان: الناقل بالتبريد الكهروحراري ➔ تدفق الإلكترونات Electrons flow through the circuit (D).",
    "keyword": "related to thermoelectric refrigeration system"
  },
  {
    "id": 131,
    "topic": "Thermoelectric refrigeration system",
    "question": "Thermoelectric refrigeration system has",
    "question_ar": "تمتاز المنظومة الكهروحرارية بـ:",
    "options": {
      "A": "Ability to Heat and Cool with the Same module",
      "B": "High COP",
      "C": "No Moving Parts",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "E",
    "note": "تتميز بالقدرة على التدفئة والتبريد بنفس الوحدة، وانعدام الأجزاء المتحركة تماماً (Both A and C).",
    "clue": "🔑 شفرة الامتحان: مميزات التبريد الكهروحراري ➔ تدفئة وتبريد بدون أجزاء متحركة: Both A and C (E).",
    "keyword": "Thermoelectric refrigeration system has"
  },
  {
    "id": 132,
    "topic": "Thermoelectric refrigeration system",
    "question": "The thermoelectric refrigeration system has",
    "question_ar": "تتصف المنظومة الكهروحرارية بأن لها:",
    "options": {
      "A": "High COP and high cost",
      "B": "High COP and low cost",
      "C": "Low COP and high cost",
      "D": "Low COP and low cost",
      "E": "All of these"
    },
    "answer": "C",
    "note": "عيوبها: معامل أداء منخفض (Low COP) وتكلفة مادية مرتفعة نسبياً (High cost).",
    "clue": "🔑 شفرة الامتحان: كفاءة وتكلفة التبريد الكهروحراري ➔ كفاءة واطئة وتكلفة عالية: Low COP and high cost (C).",
    "keyword": "thermoelectric refrigeration system has (COP & Cost)"
  },
  {
    "id": 133,
    "topic": "Steam jet refrigeration system",
    "question": "The ratio of isentropic enthalpy increases to the actual enthalpy increase required for the compression of the motive steam and the water vapors is known as",
    "question_ar": "تُعرف نسبة الزيادة الأيزنتروبية في الإنثالبي إلى الزيادة الفعلية المطلوبة لانضغاط البخار وبخار الماء بـ:",
    "options": {
      "A": "Nozzle efficiency",
      "B": "Entrainment efficiency",
      "C": "Compression efficiency",
      "D": "Boiler efficiency",
      "E": "Ejector efficiency"
    },
    "answer": "C",
    "note": "كفاءة الانضغاط (Compression efficiency) هي النسبة بين الزيادة الأيزنتروبية إلى الزيادة الفعلية في الإنثالبي.",
    "clue": "🔑 شفرة الامتحان: نسبة الإنثالبي الأيزنتروبي للفعلي بالانضغاط ➔ كفاءة الانضغاط Compression efficiency (C).",
    "keyword": "isentropic enthalpy increases to actual enthalpy increase"
  },
  {
    "id": 134,
    "topic": "Steam jet refrigeration system",
    "question": "The coefficient of performance of the steam jet refrigeration system varies from",
    "question_ar": "يتراوح معامل الأداء (COP) لمنظومة التبريد بالقاذف البخاري بين:",
    "options": {
      "A": "0.5-0.8",
      "B": "2-4",
      "C": "5-8",
      "D": "More than 10",
      "E": "All of these"
    },
    "answer": "A",
    "note": "معامل الأداء COP لمنظومات القاذف البخاري يتراوح بين 0.5 إلى 0.8.",
    "clue": "🔑 شفرة الامتحان: معامل أداء القاذف البخاري COP ➔ قليل يتراوح بين: 0.5-0.8 (A).",
    "keyword": "coefficient of performance of steam jet"
  },
  {
    "id": 135,
    "topic": "Steam jet refrigeration system",
    "question": "In a steam jet refrigeration system, the motive steam expands in the",
    "question_ar": "في منظومة التبريد بالقاذف البخاري، يتمدد البخار المحرّك داخل:",
    "options": {
      "A": "Convergent nozzle",
      "B": "Convergent-divergent nozzle",
      "C": "Divergent nozzle",
      "D": "Any nozzle",
      "E": "All of these"
    },
    "answer": "B",
    "note": "يتمدد البخار المحرك في فوهة متقاربة-متباعدة (Convergent-divergent nozzle) للوصول لسرعات تفوق سرعة الصوت.",
    "clue": "🔑 شفرة الامتحان: يتمدد البخار المحرك في ➔ فوهة متقاربة متباعدة Convergent-divergent nozzle (B).",
    "keyword": "motive steam expands in the"
  },
  {
    "id": 136,
    "topic": "Steam jet refrigeration system",
    "question": "The steam jet refrigeration is also known as",
    "question_ar": "تُعرف منظومة التبريد بالقاذف البخاري أيضاً باسم:",
    "options": {
      "A": "Vapor compression refrigeration",
      "B": "Absorption refrigeration",
      "C": "Air refrigeration",
      "D": "Ejector refrigeration",
      "E": "None of these"
    },
    "answer": "D",
    "note": "تُعرف أيضاً بنظام التبريد بالقاذف (Ejector refrigeration).",
    "clue": "🔑 شفرة الامتحان: الاسم الآخر للتبريد بالبخار النفاث ➔ التبريد بالقاذف Ejector refrigeration (D).",
    "keyword": "steam jet refrigeration is also known as"
  },
  {
    "id": 137,
    "topic": "Steam jet refrigeration system",
    "question": "Steam jet refrigeration system has",
    "question_ar": "تمتاز منظومة التبريد بالقاذف البخاري بـ:",
    "options": {
      "A": "High cost",
      "B": "Pump is only moving part",
      "C": "High reliability",
      "D": "Both A and B",
      "E": "Both B and C"
    },
    "answer": "E",
    "note": "الجزء المتحرك الوحيد هو المضخة وتتميز بموثوقية عمل عالية جداً (Both B and C).",
    "clue": "🔑 شفرة الامتحان: ميزة القاذف البخاري ➔ المضخة هي المتحرك الوحيد وموثوقيتها عالية: Both B and C (E).",
    "keyword": "Steam jet refrigeration system has"
  },
  {
    "id": 138,
    "topic": "Steam jet refrigeration system",
    "question": "In steam jet refrigeration system, the vapors flashes in the flash chamber due to",
    "question_ar": "في منظومة القاذف البخاري، يتبخر الماء وميضياً في غرفة الوميض بسبب:",
    "options": {
      "A": "Vacuum",
      "B": "High pressure",
      "C": "Low pressure",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "E",
    "note": "يحدث التبخير الوميضي للماء بسبب التفريغ والضغط المنخفض جداً داخل الغرفة (Both A and C).",
    "clue": "🔑 شفرة الامتحان: وميض وتبخر الماء بغرفة الوميض ➔ بسبب التفريغ والضغط المنخفض: Both A and C (E).",
    "keyword": "vapors flashes in flash chamber due to"
  },
  {
    "id": 139,
    "topic": "Steam jet refrigeration system",
    "question": "The ratio of the Actual enthalpy drop to the theoretical enthalpy drop of the motive steam pass through the nozzle is known as",
    "question_ar": "تُعرف النسبة بين الهبوط الفعلي في الإنثالبي إلى الهبوط النظري للبخار المحرك المار بالفوهة بـ:",
    "options": {
      "A": "Nozzle efficiency",
      "B": "Entrainment efficiency",
      "C": "Compression efficiency",
      "D": "Boiler efficiency",
      "E": "Ejector efficiency"
    },
    "answer": "A",
    "note": "كفاءة الفوهة (Nozzle efficiency) = الهبوط الفعلي في الإنثالبي ÷ الهبوط النظري.",
    "clue": "🔑 شفرة الامتحان: هبوط الإنثالبي الفعلي للنظري بالفوهة ➔ كفاءة الفوهة Nozzle efficiency (A).",
    "keyword": "Actual enthalpy drop to theoretical enthalpy drop in nozzle"
  },
  {
    "id": 140,
    "topic": "Steam jet refrigeration system",
    "question": "The refrigerant used in steam jet refrigeration is",
    "question_ar": "مائع التبريد المستخدم في منظومة التبريد بالبخار النفاث هو:",
    "options": {
      "A": "Air",
      "B": "Water",
      "C": "Freon",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "B",
    "note": "الماء النقي (Water) هو مائع التبريد المستخدم في هذه المنظومة.",
    "clue": "🔑 شفرة الامتحان: مائع التبريد بالقاذف البخاري ➔ الماء Water (B).",
    "keyword": "refrigerant used in steam jet refrigeration is"
  },
  {
    "id": 141,
    "topic": "Steam jet refrigeration system",
    "question": "The compression device used in a steam jet refrigeration system is a",
    "question_ar": "جهاز الانضغاط المستخدم في منظومة التبريد بالقاذف البخاري هو:",
    "options": {
      "A": "Compressor",
      "B": "Pump",
      "C": "Diffuser",
      "D": "Ejector",
      "E": "None of these"
    },
    "answer": "D",
    "note": "القاذف (Ejector) هو الأداة التي تقوم بسحب وضغط البخار.",
    "clue": "🔑 شفرة الامتحان: أداة الانضغاط بالقاذف البخاري ➔ القاذف Ejector (D).",
    "keyword": "compression device used in steam jet"
  },
  {
    "id": 142,
    "topic": "Steam jet refrigeration system",
    "question": "Steam jet refrigeration system has",
    "question_ar": "تمتاز منظومة التبريد بالقاذف البخاري بـ:",
    "options": {
      "A": "High vacuum in evaporator",
      "B": "Ability to adjust to load variation",
      "C": "High COP",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "D",
    "note": "تتميز بوجود تفريغ عالٍ في المبخر ومرونة للتكيف مع تقلبات الحمل (Both A and B).",
    "clue": "🔑 شفرة الامتحان: مميزات منظومة القاذف البخاري ➔ تفريغ عالي ومرونة للأحمال: Both A and B (D).",
    "keyword": "Steam jet refrigeration system has"
  },
  {
    "id": 143,
    "topic": "Steam jet refrigeration system",
    "question": "The purpose of steam ejector in the steam jet refrigeration system is to",
    "question_ar": "الغرض الأساسي من القاذف البخاري في المنظومة هو:",
    "options": {
      "A": "Reduce the pressure of steam in the condenser",
      "B": "Suction the vapor from the flash chamber and then compress it into the condenser",
      "C": "Rise the pressure of steam in the flash chamber",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "B",
    "note": "سحب بخار الماء المتولد في غرفة الوميض ودفعه مضغوطاً نحو المكثف.",
    "clue": "🔑 شفرة الامتحان: وظيفة القاذف البخاري ➔ سحب البخار من غرفة الوميض وضغطه للمكثف (B).",
    "keyword": "purpose of steam ejector in steam jet"
  },
  {
    "id": 144,
    "topic": "Steam jet refrigeration system",
    "question": "The lower temperature which can be obtained using the steam jet refrigeration system is",
    "question_ar": "أدنى درجة حرارة يمكن الحصول عليها باستخدام منظومة التبريد بالقاذف البخاري تكون:",
    "options": {
      "A": "More than 0 °C",
      "B": "Equal to 0 °C",
      "C": "Lower than 0 °C",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "A",
    "note": "لأن مائع التبريد ماء، فلا يمكن خفض الحرارة لتحت الصفر لتجنب تجمده (More than 0 °C، عادة 4 إلى 7 مئوية).",
    "clue": "🔑 شفرة الامتحان: أدنى درجة حرارة بالقاذف البخاري ➔ لا يمكن تجميد الماء، أكبر من صفر: More than 0 °C (A).",
    "keyword": "lower temperature which can be obtained using steam jet"
  },
  {
    "id": 145,
    "topic": "Steam jet refrigeration system",
    "question": "The velocity of steam at the exit of the nozzle is",
    "question_ar": "سرعة البخار عند مخرج الفوهة (Nozzle exit) تكون:",
    "options": {
      "A": "Sonic",
      "B": "Sub-sonic",
      "C": "Supersonic",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "C",
    "note": "سرعة البخار عند مخرج الفوهة تفوق سرعة الصوت (Supersonic).",
    "clue": "🔑 شفرة الامتحان: سرعة البخار عند مخرج الفوهة ➔ تفوق سرعة الصوت Supersonic (C).",
    "keyword": "velocity of steam at exit of nozzle is"
  },
  {
    "id": 146,
    "topic": "Air cooling system",
    "question": "The refrigeration system used for airplane is",
    "question_ar": "منظومة التبريد المستخدمة في تكييف الطائرات هي:",
    "options": {
      "A": "Steam refrigeration system",
      "B": "Thermoelectric refrigeration system",
      "C": "Air refrigeration system",
      "D": "Vapor absorption refrigeration system",
      "E": "Vapor compression refrigeration system"
    },
    "answer": "C",
    "note": "منظومة التبريد الهوائي (Air cycle system / Bell-Coleman) هي القياسية في الطائرات لخفة وزنها.",
    "clue": "🔑 شفرة الامتحان: المنظومة المستخدمة في الطائرات ➔ منظومة التبريد الهوائي Air refrigeration system (C).",
    "keyword": "refrigeration system used for airplane is"
  },
  {
    "id": 147,
    "topic": "Air cooling system",
    "question": "For a simple air cooling system which one of the following is NOT a process of the cycle in T-S diagram",
    "question_ar": "في منظومة التبريد الهوائي البسيطة، أيٌّ من العمليات التالية ليس من ضمن دورة T-S؟",
    "options": {
      "A": "Ramming process",
      "B": "Heating process",
      "C": "Refrigeration process",
      "D": "Compression process",
      "E": "All of these"
    },
    "answer": "B",
    "note": "لا توجد عملية تسخين مقصودة (Heating process) ضمن دورة تبريد الطائرة.",
    "clue": "🔑 شفرة الامتحان: ليست من عمليات دورة الهواء ➔ عملية التسخين Heating process (B).",
    "keyword": "NOT a process of cycle in T-S diagram (air cooling)"
  },
  {
    "id": 148,
    "topic": "Air cooling system",
    "question": "The coefficient of performance of vapor compression system is quite as …………………. as compared to air refrigeration system",
    "question_ar": "معامل أداء دورة الانضغاط البخاري يعتبر ........... مقارنة بدورة التبريد الهوائي:",
    "options": {
      "A": "Lower",
      "B": "Higher",
      "C": "Equal",
      "D": "Both A and B",
      "E": "Both B and C"
    },
    "answer": "B",
    "note": "معامل أداء دورة الانضغاط البخاري أعلى بكثير (Higher) من دورة التبريد الهوائية.",
    "clue": "🔑 شفرة الامتحان: COP الانضغاط البخاري مقارنة بالهوائي ➔ أعلى بكثير Higher (B).",
    "keyword": "COP of vapor compression ... air refrigeration"
  },
  {
    "id": 149,
    "topic": "Air cooling system",
    "question": "A boot-strap air cooling system has",
    "question_ar": "تحتوي منظومة التبريد الهوائي (Boot-strap) على:",
    "options": {
      "A": "Two compressor and two heat exchangers",
      "B": "One compressor and two heat exchangers",
      "C": "Two compressor and one heat exchangers",
      "D": "One compressor and one heat exchanger",
      "E": "None of these"
    },
    "answer": "A",
    "note": "نظام Boot-strap يحتوي على ضاغطين (الرئيسي والثانوي) ومبادلين حراريين.",
    "clue": "🔑 شفرة الامتحان: منظومة Boot-strap تتكون من ➔ ضاغطين ومبادلين حراريين Two compressor & two heat exchangers (A).",
    "keyword": "boot-strap air cooling system has"
  },
  {
    "id": 150,
    "topic": "Air cooling system",
    "question": "The air refrigerant system has",
    "question_ar": "تمتاز منظومة مائع التبريد الهوائي بـ:",
    "options": {
      "A": "No cost for refrigerant",
      "B": "No problem with leakage",
      "C": "Low COP",
      "D": "Pressure in whole system is low",
      "E": "All of these"
    },
    "answer": "E",
    "note": "مائع التبريد هواء مجاني وآمن ولا يضر بالتسريب، لكن عيبه انخفاض معامل الأداء COP.",
    "clue": "🔑 شفرة الامتحان: مميزات منظومة الهواء ➔ كل ما ذُكر: All of these (E).",
    "keyword": "air refrigerant system has"
  },
  {
    "id": 151,
    "topic": "Air cooling system",
    "question": "In the air refrigerant system, the cooling fan is driven by",
    "question_ar": "في منظومة التبريد بالهواء، يتم تشغيل وإدارة مروحة التبريد بواسطة:",
    "options": {
      "A": "Main compressor",
      "B": "Turbine",
      "C": "Compressed air",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "B",
    "note": "مروحة التبريد يتم إدارتها بواسطة توربينة التمدد (Turbine).",
    "clue": "🔑 شفرة الامتحان: مروحة التبريد بمنظومة الهواء تديرها ➔ التوربينة Turbine (B).",
    "keyword": "cooling fan is driven by"
  },
  {
    "id": 152,
    "topic": "Air cooling system",
    "question": "The air refrigerant system has",
    "question_ar": "تتصف منظومة التبريد بالهواء بأنها ذات:",
    "options": {
      "A": "Large circulation refrigerant",
      "B": "Refrigerant is easily available",
      "C": "High COP",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "D",
    "note": "يتطلب تدوير كميات كبيرة من الهواء، ومائع التبريد متوفر في كل مكان (Both A and B).",
    "clue": "🔑 شفرة الامتحان: منظومة تبريد الهواء تمتاز بـ ➔ مائع متوفر وتدوير كمية كبيرة: Both A and B (D).",
    "keyword": "air refrigerant system has"
  },
  {
    "id": 153,
    "topic": "Air cooling system",
    "question": "The coefficient of performance of a simple air refrigerant system is always",
    "question_ar": "معامل الأداء (COP) لمنظومة التبريد الهوائي البسيطة يكون دائماً:",
    "options": {
      "A": "More than one",
      "B": "Equal to one",
      "C": "Less than one",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "C",
    "note": "معامل أداء دورة التبريد الهوائية البسيطة يكون دائماً أقل من واحد (Less than one).",
    "clue": "🔑 شفرة الامتحان: COP دورة الهواء البسيطة ➔ دائماً أقل من واحد Less than one (C).",
    "keyword": "COP of a simple air refrigerant system is always"
  },
  {
    "id": 154,
    "topic": "Air cooling system",
    "question": "Which of the following is NOT a process in the T-s diagram of the regeneration cooling system",
    "question_ar": "أيٌّ مما يلي ليس من ضمن عمليات المخطط T-s لمنظومة التبريد التجديدية؟",
    "options": {
      "A": "Isentropic ramming",
      "B": "Isentropic compression",
      "C": "Isentropic expansion",
      "D": "Isothermal expansion",
      "E": "None of these"
    },
    "answer": "D",
    "note": "التمدد يكون أيزنتروبياً في التوربينة وليس متساوي درجة الحرارة (Isothermal).",
    "clue": "🔑 شفرة الامتحان: ليست من عمليات الدورة التجديدية ➔ التمدد متساوي الحرارة Isothermal expansion (D).",
    "keyword": "NOT a process in T-s diagram of regeneration"
  },
  {
    "id": 155,
    "topic": "Air cooling system",
    "question": "The air refrigerant system has",
    "question_ar": "تتصف منظومة التبريد بالهواء بـ:",
    "options": {
      "A": "Low COP",
      "B": "Used water as refrigerant",
      "C": "Large air circulation",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "E",
    "note": "تتميز بانخفاض COP وحاجتها لتدفق حجمي كبير من الهواء (Both A and C).",
    "clue": "🔑 شفرة الامتحان: دورة الهواء تتصف بـ ➔ كفاءة واطئة وتدوير حجم هواء كبير: Both A and C (E).",
    "keyword": "air refrigerant system has"
  },
  {
    "id": 156,
    "topic": "Air cooling system",
    "question": "The air-cooling system mostly used in transport-type aircraft is",
    "question_ar": "منظومة التبريد الهوائي الأكثر استخداماً في طائرات النقل والركاب هي:",
    "options": {
      "A": "Simple air-cooling system",
      "B": "Evaporative air cooling system",
      "C": "Regenerative air cooling system",
      "D": "Boot-strap air cooling system",
      "E": "All of these"
    },
    "answer": "D",
    "note": "نظام Boot-strap هو الأكثر استخداماً في طائرات النقل والركاب التجارية.",
    "clue": "🔑 شفرة الامتحان: الأكثر استخداماً بطائرات النقل ➔ Boot-strap air cooling system (D).",
    "keyword": "mostly used in transport-type aircraft is"
  },
  {
    "id": 157,
    "topic": "Air cooling system",
    "question": "A regenerative air cooling system has",
    "question_ar": "تحتوي منظومة التبريد الهوائي التجديدية (Regenerative) على:",
    "options": {
      "A": "Two compressor and two heat exchangers",
      "B": "One compressor and two heat exchangers",
      "C": "Two compressor and one heat exchangers",
      "D": "One compressor and one heat exchanger",
      "E": "None of these"
    },
    "answer": "B",
    "note": "المنظومة التجديدية (Regenerative) تحتوي على ضاغط واحد ومبادلين حراريين.",
    "clue": "🔑 شفرة الامتحان: المنظومة التجديدية (Regenerative) ➔ ضاغط واحد ومبادلين حراريين One compressor & two heat exchangers (B).",
    "keyword": "regenerative air cooling system has"
  },
  {
    "id": 158,
    "topic": "Air cooling system",
    "question": "Which one of the following is NOT a component of a simple air cooling system",
    "question_ar": "أيٌّ مما يلي لا يُعد من مكونات منظومة التبريد الهوائي البسيطة؟",
    "options": {
      "A": "Main compressor",
      "B": "Cooling fan",
      "C": "Generator",
      "D": "Turbine",
      "E": "Heat exchanger"
    },
    "answer": "C",
    "note": "المولد (Generator) جزء من منظومة الامتصاص وليس التبريد الهوائي.",
    "clue": "🔑 شفرة الامتحان: ليس جزءاً من دورة الهواء ➔ المولد Generator (C).",
    "keyword": "NOT a component of simple air cooling system"
  },
  {
    "id": 159,
    "topic": "Air cooling system",
    "question": "The refrigeration systems are commonly used in airplanes because",
    "question_ar": "تُستخدم منظومات التبريد الهوائي بشكل شائع في الطائرات لأن:",
    "options": {
      "A": "The system pressure is quite low so, simple ducting and piping is needed",
      "B": "Plane engine provides the compressed air so, no need for extra compressor",
      "C": "The air is light per ton refrigeration",
      "D": "All of these",
      "E": "None of these"
    },
    "answer": "D",
    "note": "خفة الوزن وتوفر الهواء المضغوط من محركات الطائرة وانخفاض الضغوط يجعلها مثالية للطيران.",
    "clue": "🔑 شفرة الامتحان: سبب استخدام دورة الهواء بالطائرات ➔ كل الأسباب: All of these (D).",
    "keyword": "commonly used in airplanes because"
  },
  {
    "id": 160,
    "topic": "Air cooling system",
    "question": "Regeneration cooling system is a modification of",
    "question_ar": "تعتبر منظومة التبريد الهوائي التجديدية تعديلاً وتطويراً لـ:",
    "options": {
      "A": "Evaporative cooling system",
      "B": "Simple air cooling system",
      "C": "Boot-strap cooling system",
      "D": "Both A and B",
      "E": "Both B and C"
    },
    "answer": "B",
    "note": "المنظومة التجديدية هي تطوير وتعديل للنظام الهوائي البسيط (Simple air cooling system).",
    "clue": "🔑 شفرة الامتحان: الدورة التجديدية تعديل لـ ➔ دورة الهواء البسيطة Simple air cooling system (B).",
    "keyword": "Regeneration cooling system is modification of"
  },
  {
    "id": 161,
    "topic": "Cryogenics",
    "question": "Positive-Joule-Thompson means that can be obtain",
    "question_ar": "معامل جول-طومسون الموجب يعني أنه يمكن الحصول على:",
    "options": {
      "A": "Very high temperature",
      "B": "Very low temperature",
      "C": "Expansion is not possible",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "B",
    "note": "معامل جول-طومسون الموجب (μ_JT > 0) يعني أن انخفاض الضغط يؤدي إلى انخفاض الحرارة وتبريد فائق.",
    "clue": "🔑 شفرة الامتحان: معامل جول-طومسون الموجب يعني ➔ تبريد وانخفاض حرارة فائق Very low temperature (B).",
    "keyword": "Positive-Joule-Thompson means that can be obtain"
  },
  {
    "id": 162,
    "topic": "Cryogenics",
    "question": "In cryogenic engineering, the designer must be familiar with",
    "question_ar": "في الهندسة الكرايوجينية (درجات البرودة الفائقة)، يجب أن يكون المصمم ملماً بـ:",
    "options": {
      "A": "The physical properties of components used in low temperatures",
      "B": "The properties of fluids used to achieve these low temperatures",
      "C": "Design and development of high-temperature systems and components",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "D",
    "note": "يجب الإلمام بخواص المواد والموائع عند درجات الحرارة المنخفضة جداً (Both A and B).",
    "clue": "🔑 شفرة الامتحان: مهندس الكرايوجينك يجب أن يعرف ➔ خواص المكونات والموائع بالبرودة: Both A and B (D).",
    "keyword": "cryogenic engineering, designer must be familiar with"
  },
  {
    "id": 163,
    "topic": "Cryogenics",
    "question": "In the cryogenic processes, the compressor needs cooling to",
    "question_ar": "في العمليات الكرايوجينية، يحتاج الضاغط للتبريد المستمر من أجل:",
    "options": {
      "A": "Prevent vibration",
      "B": "Increase consumed power",
      "C": "Avoid overheating",
      "D": "All of these",
      "E": "None of these"
    },
    "answer": "C",
    "note": "تبريد الضاغط ضروري لمنع السخونة المفرطة وحماية المكونات والزيوت (Avoid overheating).",
    "clue": "🔑 شفرة الامتحان: تبريد الضاغط بالكرايوجينك لتجنب ➔ السخونة المفرطة Avoid overheating (C).",
    "keyword": "cryogenic processes, compressor needs cooling to"
  },
  {
    "id": 164,
    "topic": "Cryogenics",
    "question": "The Hampson system is one of the oldest methods used in this liquefying of air, it is also called",
    "question_ar": "نظام هامبسون من أقدم طرق تسييل الهواء، ويُعرف أيضاً باسم:",
    "options": {
      "A": "The Simple Linde system",
      "B": "Linde dual – pressure cycle",
      "C": "Claude system",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "A",
    "note": "نظام هامبسون هو الاسم الآخر لدورة ليندة البسيطة لتسييل الهواء (The Simple Linde system).",
    "clue": "🔑 شفرة الامتحان: نظام هامبسون (Hampson) هو نفسه ➔ دورة ليندة البسيطة The Simple Linde system (A).",
    "keyword": "Hampson system ... also called"
  },
  {
    "id": 165,
    "topic": "Cryogenics",
    "question": "The temperature of hydrogen and helium cannot be reduced by expansion at the normal ambient temperatures, because the temperature of their Inversion temperature ……..the temperature of the atmosphere",
    "question_ar": "لا يمكن خفض درجة حرارة الهيدروجين والهيليوم بالتمدد عند حرارة الجو العادية لأن درجة حرارة الانقلاب لهما مقارنة بحرارة الجو تكون:",
    "options": {
      "A": "Lower than",
      "B": "Greater than",
      "C": "Equal to",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "B",
    "note": "وفق خيار الإجابة في الملزمة المعتمدة تم تحديد (greater than).",
    "clue": "🔑 شفرة الامتحان: حرارة انقلاب الهيدروجين والهيليوم ➔ أكبر من حرارة الجو Greater than (B).",
    "keyword": "Inversion temperature of hydrogen and helium"
  },
  {
    "id": 166,
    "topic": "Cryogenics",
    "question": "In Cascade Refrigeration system, the cascade heat exchanger act as",
    "question_ar": "في منظومة التبريد المتتالية (Cascade)، يعمل المبادل الحراري المشترك كـ:",
    "options": {
      "A": "Condenser",
      "B": "Expansion device",
      "C": "Evaporator",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "E",
    "note": "يعمل كمكثف للمرحلة ذات الحرارة المنخفضة وكمبخر للمرحلة ذات الحرارة العالية (Both A and C).",
    "clue": "🔑 شفرة الامتحان: المبادل بمنظومة الكاسكيد (Cascade) ➔ مكثف ومبخر معاً: Both A and C (E).",
    "keyword": "Cascade Refrigeration ... cascade heat exchanger act as"
  },
  {
    "id": 167,
    "topic": "Cryogenics",
    "question": "The Joule – Thompson coefficient is as a function of",
    "question_ar": "يُعرّف معامل جول-طومسون كدالة للضغط ودرجة الحرارة عند ثبوت:",
    "options": {
      "A": "Temperature and enthalpy at constant temperature",
      "B": "Enthalpy and temperature at constant pressure",
      "C": "Pressure and temperature at constant enthalpy",
      "D": "Pressure and temperature at a constant specific volume",
      "E": "Pressure and temperature at a constant entropy"
    },
    "answer": "C",
    "note": "معامل جول-طومسون يُعرف رياضياً كـ (dT/dP) عند ثبوت الإنثالبي (At constant enthalpy).",
    "clue": "🔑 شفرة الامتحان: معامل جول-طومسون دالة للضغط والحرارة عند ➔ ثبوت الإنثالبي Constant enthalpy (C).",
    "keyword": "Joule – Thompson coefficient is as a function of"
  },
  {
    "id": 168,
    "topic": "Cryogenics",
    "question": "In the cryogenic processes, which one of following expansion methods is more effective?",
    "question_ar": "في العمليات الكرايوجينية، أيٌّ من طرق التمدد التالية هي الأكثر فاعلية وإنتاجاً للتبريد؟",
    "options": {
      "A": "Automatic expansion valve",
      "B": "Capillary tube",
      "C": "Expansion turbine",
      "D": "All of these",
      "E": "None of these"
    },
    "answer": "C",
    "note": "توربينة التمدد (Expansion turbine) هي الأكثر فاعلية لأنها تسترجع شغلاً وتنتج هبوط حرارة أكبر بكثير.",
    "clue": "🔑 شفرة الامتحان: التمدد الأكثر فاعلية بالكرايوجينك ➔ توربينة التمدد Expansion turbine (C).",
    "keyword": "cryogenic processes, which expansion method more effective"
  },
  {
    "id": 169,
    "topic": "Cryogenics",
    "question": "It is known that the minimum work done in the liquefaction cycle is when the compression is achieved",
    "question_ar": "من المعروف أن الحد الأدنى للشغل المبذول في دورة التسييل يتحقق عندما يكون الانضغاط:",
    "options": {
      "A": "Isothermally",
      "B": "Adiabatic",
      "C": "Isentropic",
      "D": "Isobaric",
      "E": "All of these"
    },
    "answer": "A",
    "note": "أقل شغل مطلوب للانضغاط يتحقق عندما يكون الانضغاط بثبوت درجة الحرارة (Isothermally).",
    "clue": "🔑 شفرة الامتحان: أقل شغل لتسييل الغاز يتحقق عند ➔ الانضغاط بثبوت الحرارة Isothermally (A).",
    "keyword": "minimum work done in liquefaction cycle is when compression"
  },
  {
    "id": 170,
    "topic": "Cryogenics",
    "question": "When the gas expands freely without performing a work, its ……..even that the expansion is adiabatic.",
    "question_ar": "عندما يتمدد الغاز الحقيقي تمدداً حراً بدون بذل شغل (Free expansion)، حتى مع كونه كظومياً، فإن:",
    "options": {
      "A": "Temperature remain constant",
      "B": "Temperature changes",
      "C": "Entropy changes",
      "D": "Entropy remain constant",
      "E": "None of these"
    },
    "answer": "B",
    "note": "للغاز الحقيقي، يحدث تغير في درجة الحرارة (Temperature changes) بسبب قوى التجاذب بين الجزيئات.",
    "clue": "🔑 شفرة الامتحان: التمدد الحر للغاز بدون شغل ➔ تتغير درجة الحرارة Temperature changes (B).",
    "keyword": "gas expands freely without performing work"
  },
  {
    "id": 171,
    "topic": "Cryogenics",
    "question": "When used the gas in the application of the very low temperature, the temperature should be reduced to the point where give …….. value to the J-T coefficient before expanding.",
    "question_ar": "لتطبيق تبريد درجات الحرارة المنخفضة جداً بالتمدد، يجب خفض حرارة الغاز أولاً ليصل معامل J-T لقيمة:",
    "options": {
      "A": "Positive",
      "B": "Negative",
      "C": "Zero",
      "D": "Both A and B",
      "E": "Both B and C"
    },
    "answer": "A",
    "note": "يجب تبريده مبدئياً ليصل لمنطقة المعامل الموجب (Positive) ليحدث تبريد عند التمدد.",
    "clue": "🔑 شفرة الامتحان: قبل تمدد الغاز بالبرودة الفائقة يجب أن يكون J-T ➔ موجباً Positive (A).",
    "keyword": "very low temperature ... value to J-T coefficient before expanding"
  },
  {
    "id": 172,
    "topic": "Cryogenics",
    "question": "The term Cryogenics refer to",
    "question_ar": "يشير مصطلح الكرايوجينك (Cryogenics) إلى عمليات الموائع في نطاق:",
    "options": {
      "A": "Low temperature range fluids processes",
      "B": "High temperatures range fluids processes",
      "C": "Temperature range at 0 oC",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "A",
    "note": "الكرايوجينك (علم البرودة الفائقة) يختص بعمليات الموائع عند درجات حرارة منخفضة جداً (أقل من -150°C).",
    "clue": "🔑 شفرة الامتحان: علم الكرايوجينك يختص بـ ➔ درجات الحرارة المنخفضة جداً Low temperature range fluids (A).",
    "keyword": "term Cryogenics refer to"
  },
  {
    "id": 173,
    "topic": "Cryogenics",
    "question": "The minimum achievable work In Linde System for Liquefaction of Air can be achieved if",
    "question_ar": "أقل شغل ممكن في دورة ليندة لتسييل الهواء يمكن تحقيقه إذا:",
    "options": {
      "A": "The work of the compressors is reversible",
      "B": "All the heat applied to the external environment",
      "C": "The work of the expansion is reversible",
      "D": "All of these",
      "E": "None of these"
    },
    "answer": "D",
    "note": "العمليات العكوسة المثالية في الانضغاط والتمدد وتبادل الحرارة تعطي أقل شغل ممكن.",
    "clue": "🔑 شفرة الامتحان: أقل شغل بنظام ليندة يتحقق إذا ➔ كل العمليات عكوسة: All of these (D).",
    "keyword": "minimum achievable work In Linde System"
  },
  {
    "id": 174,
    "topic": "Cryogenics",
    "question": "In the Linde dual – pressure cycle, the added term ………. the mass of liquefied gas significantly.",
    "question_ar": "في دورة ليندة ثنائية الضغط، فإن الحد والضغط الإضافي بالنسبة لكتلة الغاز المسال:",
    "options": {
      "A": "Increase",
      "B": "Decrease",
      "C": "Has not affect on",
      "D": "All of these",
      "E": "None of these"
    },
    "answer": "C",
    "note": "وفقاً للملزمة المعتمدة: ليس له تأثير كبير على كتلة الغاز المسال (Has not affect on).",
    "clue": "🔑 شفرة الامتحان: دورة ليندة ثنائية الضغط ➔ ليس له تأثير ملحوظ Has not affect on (C).",
    "keyword": "Linde dual – pressure cycle, added term"
  },
  {
    "id": 175,
    "topic": "Cryogenics",
    "question": "Cryogenics deal with temperatures around",
    "question_ar": "يتعامل علم الكرايوجينك مع درجات حرارة حول:",
    "options": {
      "A": "-148 oC",
      "B": "125 K",
      "C": "-50 oC",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "D",
    "note": "تتعامل مع درجات حرارة تحت 125 كلفن (-148 مئوية) (Both A and B).",
    "clue": "🔑 شفرة الامتحان: درجات حرارة الكرايوجينك ➔ حول -148 مئوية أو 125 كلفن: Both A and B (D).",
    "keyword": "Cryogenics deal with temperatures around"
  },
  {
    "id": 176,
    "topic": "Cryogenics",
    "question": "The Claude system uses a ………. as an expansion method",
    "question_ar": "تستخدم دورة كلود (Claude system) كطريقة للتمدد:",
    "options": {
      "A": "Electronic expansion device",
      "B": "Turbine",
      "C": "Automatic expansion device",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "B",
    "note": "دورة كلود (Claude system) تتميز باستخدام توربينة تمدد (Turbine) لإنتاج الشغل والتبريد.",
    "clue": "🔑 شفرة الامتحان: دورة كلود (Claude system) تستخدم ➔ توربينة تمدد Turbine (B).",
    "keyword": "Claude system uses a ………. as an expansion method"
  },
  {
    "id": 177,
    "topic": "Vortex tube",
    "question": "In the vortex tube the tangential nozzles are used for generate",
    "question_ar": "في الأنبوبة الدوامية، تُستخدم الفوهات المماسية لتوليد:",
    "options": {
      "A": "Straight air movement",
      "B": "Vortex air movement",
      "C": "Axial air movement",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "B",
    "note": "الفوهات المماسية تحقن الهواء لإنشاء حركة دوامية إعصارية سريعة جداً (Vortex air movement).",
    "clue": "🔑 شفرة الامتحان: الفوهات المماسية بالأنبوبة الدوامية ➔ تولد حركة إعصارية Vortex air movement (B).",
    "keyword": "vortex tube tangential nozzles are used for"
  },
  {
    "id": 178,
    "topic": "Vortex tube",
    "question": "In the vortex tube the energy transferred",
    "question_ar": "في الأنبوبة الدوامية، تنتقل الطاقة الحركية والحرارية:",
    "options": {
      "A": "From the outer vortex to the inner vortex",
      "B": "From the inner vortex to the outer vortex",
      "C": "There is no energy transfer",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "B",
    "note": "تنتقل الطاقة الحركية والحرارية من الدوامة الداخلية إلى الدوامة الخارجية المحيطة بها.",
    "clue": "🔑 شفرة الامتحان: انتقال الطاقة بالأنبوبة الدوامية ➔ من الدوامة الداخلية للخارجية Inner vortex to outer vortex (B).",
    "keyword": "vortex tube energy transferred"
  },
  {
    "id": 179,
    "topic": "Vortex tube",
    "question": "The applications of vortex tube",
    "question_ar": "من التطبيقات الهندسية للأنبوبة الدوامية:",
    "options": {
      "A": "Cooling of rotor blade",
      "B": "Cold air suits",
      "C": "Laboratory cooler",
      "D": "Cooling of cutting tools",
      "E": "All of these"
    },
    "answer": "E",
    "note": "تستخدم في تبريد أدوات القطع الصناعية، وبدلات التبريد، وتبريد أجهزة المختبرات.",
    "clue": "🔑 شفرة الامتحان: تطبيقات الأنبوبة الدوامية ➔ كل ما ذُكر: All of these (E).",
    "keyword": "applications of vortex tube"
  },
  {
    "id": 180,
    "topic": "Vortex tube",
    "question": "In the vortex tube the conical valve",
    "question_ar": "في الأنبوبة الدوامية، يقوم الصمام المخروطي بـ:",
    "options": {
      "A": "Allows hot air from outer vortex to escape",
      "B": "Forces the cold air to return in an inner vortex",
      "C": "Transfers energy from the hot air to the cold air",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "D",
    "note": "الصمام المخروطي يسمح للهواء الساخن الخارجي بالخروج ويجبر الهواء المتبقي على الارتداد كدوامة باردة (Both A and B).",
    "clue": "🔑 شفرة الامتحان: الصمام المخروطي ➔ يطرد الهواء الحار ويعيد البارد للداخل: Both A and B (D).",
    "keyword": "vortex tube conical valve"
  },
  {
    "id": 181,
    "topic": "Vortex tube",
    "question": "In the vortex tube the source of the cool gas stream is",
    "question_ar": "في الأنبوبة الدوامية، مصدر تيار الغاز البارد هو:",
    "options": {
      "A": "The inlet gas",
      "B": "The outer vortex",
      "C": "The inner vortex",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "C",
    "note": "الهواء البارد ينبعث من قلب الدوامة الداخلية (The inner vortex).",
    "clue": "🔑 شفرة الامتحان: مصدر تيار الهواء البارد بالأنبوبة ➔ الدوامة الداخلية The inner vortex (C).",
    "keyword": "vortex tube source of cool gas stream is"
  },
  {
    "id": 182,
    "topic": "Vortex tube",
    "question": "The Disadvantages of vortex tube",
    "question_ar": "من عيوب ومساوئ الأنبوبة الدوامية:",
    "options": {
      "A": "Simple in design",
      "B": "Limited refrigeration capacity",
      "C": "Low COP",
      "D": "Both A and B",
      "E": "Both B and C"
    },
    "answer": "E",
    "note": "أبرز عيوبها: سعة تبريد محدودة ومعامل أداء COP منخفض جداً (Both B and C).",
    "clue": "🔑 شفرة الامتحان: عيوب الأنبوبة الدوامية ➔ سعة محدودة و COP منخفض: Both B and C (E).",
    "keyword": "Disadvantages of vortex tube"
  },
  {
    "id": 183,
    "topic": "Vortex tube",
    "question": "The vortex tube consists of",
    "question_ar": "تتكون الأنبوبة الدوامية من الأجزاء التالية:",
    "options": {
      "A": "Long tube",
      "B": "Tangential nozzle",
      "C": "Conical valve",
      "D": "All of these",
      "E": "None of these"
    },
    "answer": "D",
    "note": "تتكون من أنبوب طويل، فوهة حقن مماسية، وصمام مخروطي عند النهاية الساخنة.",
    "clue": "🔑 شفرة الامتحان: مكونات الأنبوبة الدوامية ➔ أنبوب وفوهة وصمام: All of these (D).",
    "keyword": "vortex tube consists of"
  },
  {
    "id": 184,
    "topic": "Vortex tube",
    "question": "In the vortex tube the source of the hot gas stream is",
    "question_ar": "في الأنبوبة الدوامية، مصدر تيار الغاز الساخن هو:",
    "options": {
      "A": "The inlet gas",
      "B": "The outer vortex",
      "C": "The inner vortex",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "B",
    "note": "الهواء الساخن يخرج من طبقة الدوامة الخارجية الملامسة للجدار (The outer vortex).",
    "clue": "🔑 شفرة الامتحان: مصدر تيار الهواء الحار بالأنبوبة ➔ الدوامة الخارجية The outer vortex (B).",
    "keyword": "vortex tube source of hot gas stream is"
  },
  {
    "id": 185,
    "topic": "Vortex tube",
    "question": "The advantages of vortex tube",
    "question_ar": "من المزايا الإيجابية للأنبوبة الدوامية:",
    "options": {
      "A": "Uses air as refrigerant",
      "B": "Maintenance is simple",
      "C": "Initial cost is low",
      "D": "No moving parts",
      "E": "All of these"
    },
    "answer": "E",
    "note": "من مميزاتها عدم وجود أجزاء متحركة، بساطة الصيانة، واستخدام الهواء المضغوط كمائع.",
    "clue": "🔑 شفرة الامتحان: مميزات الأنبوبة الدوامية ➔ هواء رخيص وبدون أجزاء متحركة: All of these (E).",
    "keyword": "advantages of vortex tube"
  },
  {
    "id": 186,
    "topic": "Heat Pipe",
    "question": "The function of the ………. In heat pipe, is to isolate the working fluid from the outside environment.",
    "question_ar": "في الأنبوب الحراري، وظيفة ........... هي عزل مائع التشغيل عن البيئة الخارجية:",
    "options": {
      "A": "Wick",
      "B": "Container",
      "C": "Refrigerant",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "B",
    "note": "الغلاف الخارجي (Container/Enclosure) يعزل مائع التشغيل تماماً ويحافظ على الضغط الداخلي.",
    "clue": "🔑 شفرة الامتحان: عزل مائع الأنبوب الحراري عن الوسط ➔ الغلاف الخارجي Container (B).",
    "keyword": "heat pipe ... isolate working fluid from outside"
  },
  {
    "id": 187,
    "topic": "Heat Pipe",
    "question": "In the heat pipe, the liquid flows through the wick due to",
    "question_ar": "في الأنبوب الحراري، يتدفق السائل المكثف عائداً عبر الفتيلة (Wick) بفعل:",
    "options": {
      "A": "Gravity action",
      "B": "Pumping force",
      "C": "Capillary action",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "C",
    "note": "يعود السائل المكثف عبر المسامات بفعل الخاصية الشعرية (Capillary action).",
    "clue": "🔑 شفرة الامتحان: تدفق السائل عبر فتيلة الأنبوب الحراري ➔ بالخاصية الشعرية Capillary action (C).",
    "keyword": "liquid flows through wick due to"
  },
  {
    "id": 188,
    "topic": "Heat Pipe",
    "question": "The advantage of heat pipe could be explained as",
    "question_ar": "يمكن تفسير ميزة الأنبوب الحراري بأنها:",
    "options": {
      "A": "Chock flow",
      "B": "Maintenance free",
      "C": "High cost",
      "D": "Viscosity limits the work",
      "E": "All of these"
    },
    "answer": "B",
    "note": "الأنبوب الحراري مغلق تماماً وخالٍ من الأجزاء المتحركة ولا يحتاج صيانة (Maintenance free).",
    "clue": "🔑 شفرة الامتحان: ميزة الأنبوب الحراري ➔ لا يحتاج إلى صيانة Maintenance free (B).",
    "keyword": "advantage of heat pipe could be explained as"
  },
  {
    "id": 189,
    "topic": "Heat Pipe",
    "question": "The prime purpose of the …………. is to generate capillary pressure to transport the working fluid from the condenser to the evaporator.",
    "question_ar": "الغرض الأساسي لـ ........... في الأنبوب الحراري هو توليد الضغط الشعري لنقل المائع من المكثف إلى المبخر:",
    "options": {
      "A": "Wick",
      "B": "Container",
      "C": "Refrigerant",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "A",
    "note": "الفتيلة المسامية (Wick structure) تولد الضغط الشعري اللازم لعودة السائل للمبخر.",
    "clue": "🔑 شفرة الامتحان: توليد الضغط الشعري لنقل السائل ➔ الفتيلة المسامية Wick (A).",
    "keyword": "generate capillary pressure to transport working fluid"
  },
  {
    "id": 190,
    "topic": "Heat Pipe",
    "question": "In the heat pipe, the vapor flows inside the heat pipe due to",
    "question_ar": "في الأنبوب الحراري، يتدفق البخار داخل التجويف بفعل قوة:",
    "options": {
      "A": "Gravity action",
      "B": "Pressure difference force",
      "C": "Capillary action",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "B",
    "note": "البخار يتحرك من منطقة التبخير لمنطقة التكثيف مدفوعاً بفرق الضغط (Pressure difference).",
    "clue": "🔑 شفرة الامتحان: تدفق البخار داخل الأنبوب الحراري ➔ بفعل فرق الضغط Pressure difference force (B).",
    "keyword": "vapor flows inside heat pipe due to"
  },
  {
    "id": 191,
    "topic": "Heat Pipe",
    "question": "The disadvantage of heat pipe could be explained as",
    "question_ar": "من محددات وعيوب الأنبوب الحراري:",
    "options": {
      "A": "Noiseless",
      "B": "Environmentally safe",
      "C": "Maintenance free",
      "D": "Viscosity limits the work",
      "E": "All of these"
    },
    "answer": "D",
    "note": "لزوجة المائع تحد من معدل نقل الحرارة عند درجات الحرارة المنخفضة (Viscous limit).",
    "clue": "🔑 شفرة الامتحان: عيب ومحدد الأنبوب الحراري ➔ لزوجة المائع تحد من العمل Viscosity limits the work (D).",
    "keyword": "disadvantage of heat pipe could be explained as"
  },
  {
    "id": 192,
    "topic": "Heat Pipe",
    "question": "Properties of the working fluid of the heat pipe are",
    "question_ar": "من الخواص المثالية لمائع التشغيل في الأنبوب الحراري:",
    "options": {
      "A": "High latent heat",
      "B": "High thermal conductivity",
      "C": "Good thermal stability",
      "D": "Low liquid and vapor viscosities",
      "E": "All of these"
    },
    "answer": "E",
    "note": "يجب أن يتمتع المائع بحرارة كامنة عالية، لزوجة منخفضة، واستقرار حراري ممتاز.",
    "clue": "🔑 شفرة الامتحان: خواص مائع الأنبوب الحراري ➔ كل الخواص المذكورة: All of these (E).",
    "keyword": "Properties of working fluid of heat pipe are"
  },
  {
    "id": 193,
    "topic": "Heat Pipe",
    "question": "In heat pipe, the region between evaporator and condenser called",
    "question_ar": "في الأنبوب الحراري، تُسمى المنطقة الواقعة بين المبخر والمكثف بـ:",
    "options": {
      "A": "Compression region",
      "B": "Expansion region",
      "C": "Adiabatic region",
      "D": "Isobaric region",
      "E": "None of these"
    },
    "answer": "C",
    "note": "المنطقة الوسطى بين المبخر والمكثف تسمى المنطقة الكظيمة المعزولة (Adiabatic region).",
    "clue": "🔑 شفرة الامتحان: المنطقة بين المبخر والمكثف بالأنبوب ➔ المنطقة المعزولة Adiabatic region (C).",
    "keyword": "region between evaporator and condenser called"
  },
  {
    "id": 194,
    "topic": "Heat Pipe",
    "question": "The type of heat pipe could be explained as",
    "question_ar": "من أنواع وتصاميم الأنابيب الحرارية:",
    "options": {
      "A": "Mono-groove Heat Pipe",
      "B": "Counter heat pipe",
      "C": "Parallel heat pipe",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "A",
    "note": "أحد الأنواع المتخصصة هو الأنبوب ذو المجرى الأحادي (Mono-groove Heat Pipe).",
    "clue": "🔑 شفرة الامتحان: نوع من الأنابيب الحرارية ➔ أنبوب المجرى الأحادي Mono-groove Heat Pipe (A).",
    "keyword": "type of heat pipe could be explained as"
  },
  {
    "id": 195,
    "topic": "Thermoacoustic refrigeration",
    "question": "In the Thermoacoustic refrigeration system, the compressor is replaced by a",
    "question_ar": "في منظومة التبريد الصوتي-الحراري، يُستبدل الضاغط الميكانيكي بـ:",
    "options": {
      "A": "Resonator",
      "B": "Loudspeaker",
      "C": "Heat exchanger",
      "D": "All of these",
      "E": "None of these"
    },
    "answer": "B",
    "note": "مكبر الصوت الصوتي (Loudspeaker / Acoustic driver) هو الذي يولد موجات الضغط بدلاً من الضاغط.",
    "clue": "🔑 شفرة الامتحان: بديل الضاغط بالتبريد الصوتي ➔ مكبر الصوت Loudspeaker (B).",
    "keyword": "Thermoacoustic ... compressor is replaced by a"
  },
  {
    "id": 196,
    "topic": "Thermoacoustic refrigeration",
    "question": "Some of the advantage for the Thermoacoustic refrigeration system are",
    "question_ar": "من مزايا منظومة التبريد الصوتي-الحراري أنها:",
    "options": {
      "A": "Environment-friendly",
      "B": "Heavy weight",
      "C": "Having moving parts",
      "D": "Both A and B",
      "E": "Both B and C"
    },
    "answer": "A",
    "note": "صديقة للبيئة (Environment-friendly) لأنها تستخدم غازات نبيلة آمنة مثل الهيليوم.",
    "clue": "🔑 شفرة الامتحان: ميزة التبريد الصوتي الحراري ➔ صديق للبيئة Environment-friendly (A).",
    "keyword": "advantage for Thermoacoustic refrigeration"
  },
  {
    "id": 197,
    "topic": "Thermoacoustic refrigeration",
    "question": "The main parts of the Thermoacoustic refrigeration system are",
    "question_ar": "الأجزاء الرئيسية لمنظومة التبريد الصوتي-الحراري تشمل:",
    "options": {
      "A": "Loudspeaker",
      "B": "Resonator",
      "C": "Expansion",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "D",
    "note": "الأجزاء الأساسية تشمل مكبر الصوت وأنبوب الرنين (Resonator) وحشوة الـ Stack (Both A and B).",
    "clue": "🔑 شفرة الامتحان: المكونات الرئيسية للتبريد الصوتي ➔ مكبر صوت وأنبوب رنين: Both A and B (D).",
    "keyword": "main parts of Thermoacoustic refrigeration"
  },
  {
    "id": 198,
    "topic": "Thermoacoustic refrigeration",
    "question": "The working fluid in the Thermoacoustic refrigeration is a",
    "question_ar": "مائع التشغيل المستخدم في منظومة التبريد الصوتي-الحراري هو:",
    "options": {
      "A": "Helium - argon mixture",
      "B": "Air",
      "C": "R-134a",
      "D": "Both A and B",
      "E": "Both B and C"
    },
    "answer": "D",
    "note": "يستخدم خليط الهيليوم والأرغون أو الهواء العادي كمائع تشغيل (Both A and B).",
    "clue": "🔑 شفرة الامتحان: مائع التشغيل بالتبريد الصوتي ➔ خليط هيليوم وأرغون أو هواء: Both A and B (D).",
    "keyword": "working fluid in Thermoacoustic refrigeration"
  },
  {
    "id": 199,
    "topic": "Thermoacoustic refrigeration",
    "question": "Some of the disadvantage for the Thermoacoustic refrigeration are",
    "question_ar": "من عيوب ومآخذ منظومة التبريد الصوتي-الحراري:",
    "options": {
      "A": "High COP",
      "B": "No partial capacity",
      "C": "No heat storage",
      "D": "Both A and B",
      "E": "Both B and C"
    },
    "answer": "E",
    "note": "صعوبة التحكم بالسعات الجزئية وعدم وجود خزن حراري (Both B and C).",
    "clue": "🔑 شفرة الامتحان: عيوب التبريد الصوتي ➔ صعوبة التحكم بالسعة ولا خزن: Both B and C (E).",
    "keyword": "disadvantage for Thermoacoustic refrigeration"
  },
  {
    "id": 200,
    "topic": "Thermoacoustic refrigeration",
    "question": "The main parts of the Thermoacoustic refrigeration system are",
    "question_ar": "المكونات الأساسية لمنظومة التبريد الصوتي-الحراري هي:",
    "options": {
      "A": "Loudspeaker",
      "B": "Resonator",
      "C": "Compressor",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "D",
    "note": "تتكون أساساً من Loudspeaker و Resonator.",
    "clue": "🔑 شفرة الامتحان: المكونات الرئيسية للتبريد الصوتي ➔ Loudspeaker و Resonator: Both A and B (D).",
    "keyword": "main parts of Thermoacoustic refrigeration"
  },
  {
    "id": 201,
    "topic": "Thermoacoustic refrigeration",
    "question": "Thermoacoustic refrigeration is one such phenomenon that uses high intensity …………. to produce refrigeration effect.",
    "question_ar": "التبريد الصوتي-الحراري ظاهرة فيزيائية تستخدم شدة عالية من ........... لإنتاج التبريد:",
    "options": {
      "A": "Temperature field",
      "B": "Electrical field",
      "C": "Magnetic field",
      "D": "Electronic field",
      "E": "Sound waves"
    },
    "answer": "E",
    "note": "تعتمد على طاقة الموجات الصوتية عالية الشدة (Sound waves) لتوليد التبريد.",
    "clue": "🔑 شفرة الامتحان: التبريد الصوتي يعتمد على شدة ➔ الموجات الصوتية Sound waves (E).",
    "keyword": "Thermoacoustic ... uses high intensity"
  },
  {
    "id": 202,
    "topic": "Thermoacoustic refrigeration",
    "question": "Some of the applications for the Thermoacoustic refrigeration are:",
    "question_ar": "من التطبيقات العملية لمنظومة التبريد الصوتي-الحراري:",
    "options": {
      "A": "Chip cooling",
      "B": "Electronic equipment cooling",
      "C": "Liquefaction of natural gas",
      "D": "All of these",
      "E": "None of these"
    },
    "answer": "D",
    "note": "تستخدم في تبريد الإلكترونيات، وتسييل الغاز الطبيعي، وتطبيقات الفضاء.",
    "clue": "🔑 شفرة الامتحان: تطبيقات التبريد الصوتي ➔ تبريد الإلكترونيات وتسييل الغاز: All of these (D).",
    "keyword": "applications for Thermoacoustic refrigeration"
  },
  {
    "id": 203,
    "topic": "Thermoacoustic refrigeration",
    "question": "The main parts of the Thermoacoustic refrigeration system are",
    "question_ar": "المكونات الرئيسية لمنظومة التبريد الصوتي-الحراري هي:",
    "options": {
      "A": "Loudspeaker",
      "B": "Resonator",
      "C": "Condenser",
      "D": "Both A and B",
      "E": "Both A and C"
    },
    "answer": "D",
    "note": "الأجزاء الرئيسية تشمل مكبر الصوت وأنبوب الرنين (Both A and B).",
    "clue": "🔑 شفرة الامتحان: المكونات الرئيسية للتبريد الصوتي ➔ مكبر الصوت وأنبوب الرنين: Both A and B (D).",
    "keyword": "main parts of Thermoacoustic refrigeration"
  },
  {
    "id": 204,
    "topic": "Electromagnetic refrigeration system",
    "question": "In Electromagnetic refrigeration system, instead of ……… of a gas, a magnetocaloric material is moved into a magnetic field and that instead of ……. it is moved out of the field.",
    "question_ar": "في منظومة التبريد الكهرومغناطيسي، بدلاً من ........... للغاز تُدخل المادة في المجال المغناطيسي، وبدلاً من ........... تُخرج منه:",
    "options": {
      "A": "Compression , condensation",
      "B": "Compression , evaporation",
      "C": "Condensation , expansion",
      "D": "Evaporation , expansion",
      "E": "Compression , expansion"
    },
    "answer": "E",
    "note": "إدخال المادة للمجال المغناطيسي يماثل الانضغاط (Compression)، وإخراجها يماثل التمدد (Expansion).",
    "clue": "🔑 شفرة الامتحان: الحركة بالمجال المغناطيسي تقابل ➔ انضغاط ثم تمدد Compression , expansion (E).",
    "keyword": "instead of ……… of a gas, moved into magnetic field"
  },
  {
    "id": 205,
    "topic": "Electromagnetic refrigeration system",
    "question": "The magnetocaloric effect is a magneto-thermodynamic phenomenon in which a temperature change of a suitable material is caused by exposing the material to a……..",
    "question_ar": "التأثير المغناطيسي-الحراري (Magnetocaloric effect) هو ظاهرة ديناميكية حرارية يحدث فيها تغير في حرارة المادة نتيجة تعريضها لـ:",
    "options": {
      "A": "Temperature field",
      "B": "Electrical field",
      "C": "Magnetic field",
      "D": "Electronic field",
      "E": "Sound waves"
    },
    "answer": "C",
    "note": "تأثير السعرات المغناطيسية (MCE) ينتج عن تعريض المادة لمجال مغناطيسي متغير (Magnetic field).",
    "clue": "🔑 شفرة الامتحان: تأثير السعرات المغناطيسية ناتج عن ➔ المجال المغناطيسي Magnetic field (C).",
    "keyword": "magnetocaloric effect ... exposing to a"
  },
  {
    "id": 206,
    "topic": "Electromagnetic refrigeration system",
    "question": "Some of the future applications for the Electromagnetic refrigeration system are",
    "question_ar": "من التطبيقات المستقبلية لمنظومة التبريد الكهرومغناطيسي:",
    "options": {
      "A": "Cooling in transportation",
      "B": "Central cooling system",
      "C": "Refrigeration in medicine",
      "D": "All of these",
      "E": "None of these"
    },
    "answer": "D",
    "note": "تطبيقاتها المستقبلية تشمل تكييف وسائط النقل، التبريد المركزي، والتطبيقات الطبية.",
    "clue": "🔑 شفرة الامتحان: التطبيقات المستقبلية للتبريد المغناطيسي ➔ كل ما ذُكر: All of these (D).",
    "keyword": "future applications for Electromagnetic refrigeration"
  },
  {
    "id": 207,
    "topic": "Electromagnetic refrigeration system",
    "question": "In Electromagnetic refrigeration system, instead of ……… of a gas, a magnetocaloric material is moved into a magnetic field and that instead of ……. it is moved out of the field.",
    "question_ar": "في منظومة التبريد الكهرومغناطيسي، إدخال المادة الممغنطة للمجال يماثل ........... وإخراجها من المجال يماثل ........... للغاز:",
    "options": {
      "A": "Compression , condensation",
      "B": "Compression , evaporation",
      "C": "Condensation , expansion",
      "D": "Evaporation , expansion",
      "E": "Compression , expansion"
    },
    "answer": "E",
    "note": "بديل الانضغاط هو الدخول في المجال وبديل التمدد هو الخروج من المجال (Compression , expansion).",
    "clue": "🔑 شفرة الامتحان: الدخول للمجال يماثل والخروج يماثل ➔ انضغاط ثم تمدد Compression , expansion (E).",
    "keyword": "instead of ……… of a gas, moved into magnetic field"
  },
  {
    "id": 208,
    "topic": "Electromagnetic refrigeration system",
    "question": "The ……… is considered as one of the best magnetocaloric materials currently available",
    "question_ar": "يعتبر ........... من أفضل المواد ذات التأثير المغناطيسي الحراري المتاحة حالياً:",
    "options": {
      "A": "Scandium",
      "B": "Terbium",
      "C": "Yttrium",
      "D": "Gadolinium",
      "E": "None of these"
    },
    "answer": "D",
    "note": "معدن الغادولينيوم (Gadolinium - Gd) هو أفضل مادة تظهر تأثيراً مغناطيسياً حرارياً قرب حرارة الغرفة.",
    "clue": "🔑 شفرة الامتحان: أفضل مادة مغناطيسية حرارية حالياً ➔ الغادولينيوم Gadolinium (D).",
    "keyword": "best magnetocaloric materials currently available"
  },
  {
    "id": 209,
    "topic": "Electromagnetic refrigeration system",
    "question": "Some of the advantages for the Electromagnetic refrigeration system are",
    "question_ar": "من مزايا منظومة التبريد الكهرومغناطيسي:",
    "options": {
      "A": "Eco-friendly",
      "B": "Reducing the energy costs",
      "C": "Energy conservation",
      "D": "All of these",
      "E": "None of these"
    },
    "answer": "D",
    "note": "تتميز بأنها صديقة للبيئة بدون غازات ضارة، وكفاءتها العالية توفر الطاقة وتقلل التكاليف.",
    "clue": "🔑 شفرة الامتحان: مميزات التبريد الكهرومغناطيسي ➔ كل ما ذُكر: All of these (D).",
    "keyword": "advantage for Electromagnetic refrigeration"
  },
  {
    "id": 210,
    "topic": "Electromagnetic refrigeration system",
    "question": "In Electromagnetic refrigeration system, instead of ……… of a gas, a magnetocaloric material is moved into a magnetic field and that instead of ……. it is moved out of the field.",
    "question_ar": "في التبريد الكهرومغناطيسي، إدخال المادة للمجال يقابل ........... وإخراجها يقابل ...........:",
    "options": {
      "A": "Compression , condensation",
      "B": "Compression , evaporation",
      "C": "Condensation , expansion",
      "D": "Evaporation , expansion",
      "E": "Compression , expansion"
    },
    "answer": "E",
    "note": "الدخول في المجال يماثل الانضغاط والخروج يماثل التمدد.",
    "clue": "🔑 شفرة الامتحان: إدخال المادة وإخراجها يقابل ➔ انضغاط ثم تمدد Compression , expansion (E).",
    "keyword": "instead of ……… of a gas, moved into magnetic field"
  },
  {
    "id": 211,
    "topic": "Electromagnetic refrigeration system",
    "question": "The ……. from center regions of the bulk material to an adjacent fluid domain, are ideal to make the magnetic cooling process faster.",
    "question_ar": "المسافات الـ ........... من مركز كتلة المادة إلى المائع المجاور تعتبر مثالية لجعل التبريد المغناطيسي أسرع:",
    "options": {
      "A": "Large distance",
      "B": "Small distances",
      "C": "Large materials",
      "D": "All of these",
      "E": "None of these"
    },
    "answer": "B",
    "note": "المسافات الصغيرة (Small distances) تسرع التبادل الحراري بين المادة الممغنطة ومائع التبريد.",
    "clue": "🔑 شفرة الامتحان: لتسريع عملية التبريد المغناطيسي ➔ المسافات الصغيرة Small distances (B).",
    "keyword": "adjacent fluid domain ... faster magnetic cooling"
  },
  {
    "id": 212,
    "topic": "Electromagnetic refrigeration system",
    "question": "Some of the disadvantage for the Electromagnetic refrigeration system are",
    "question_ar": "من عيوب منظومة التبريد الكهرومغناطيسي:",
    "options": {
      "A": "High COP",
      "B": "Magneto materials are rare earth materials",
      "C": "Low cost",
      "D": "All of these",
      "E": "None of these"
    },
    "answer": "B",
    "note": "العيب الأساسي هو ندرة وارتفاع سعر المواد المغناطيسية الحرارية لأنها معادن أرضية نادرة (Rare earth materials).",
    "clue": "🔑 شفرة الامتحان: عيب التبريد الكهرومغناطيسي ➔ معادن نادرة وباهظة Rare earth materials (B).",
    "keyword": "disadvantage for Electromagnetic refrigeration"
  }
];
