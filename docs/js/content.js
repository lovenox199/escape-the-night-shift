import {LECTURE_DETAILS} from './lecture-details.js';
// Edit teaching copy here. Question truth values and explanations are in
// supabase/seed.sql (live) and js/demo-answers.js (practice only).
export const SOURCES = {
 dsm:{label:'DSM-5-TR • APA, 2022',url:'https://www.psychiatry.org/psychiatrists/practice/dsm'},
 acp:{label:'ACP living guideline • 2023; update alert 4, 2026',url:'https://pubmed.ncbi.nlm.nih.gov/41802255/'},
 canmat:{label:'CANMAT 2023 update • published 2024',url:'https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/'},
 va:{label:'VA/DoD MDD guideline • 2022',url:'https://www.healthquality.va.gov/guidelines/MH/mdd/VADoDMDDCPGFinal508.pdf'},
 nice:{label:'NICE NG222 • Depression in adults',url:'https://www.nice.org.uk/guidance/ng222/chapter/Recommendations'},
 aacap:{label:'AACAP pediatric depression guideline • 2023',url:'https://pubmed.ncbi.nlm.nih.gov/36273673/'},
 lifestyle:{label:'Merlo et al. • ACLM consensus, 2026',url:'https://pubmed.ncbi.nlm.nih.gov/41523150/'},
 gut:{label:'Donoso et al. • Microbiome–gut–brain axis',url:'https://pubmed.ncbi.nlm.nih.gov/35278334/'},
 supplements:{label:'Sarris et al. • WFSBP/CANMAT taskforce, 2022',url:'https://pubmed.ncbi.nlm.nih.gov/35311615/'},
 ketamine:{label:'McIntyre et al. • Expert opinion, 2021',url:'https://pubmed.ncbi.nlm.nih.gov/33726522/'},
 spravato:{label:'Spravato • current US prescribing information',url:'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d81a6a79-a74a-44b7-822c-0dfa3036eaed'},
 escitalopram:{label:'Escitalopram • US prescribing information',url:'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=83a642b9-acee-45d3-95a1-52a491b770fd'},
 auvelity:{label:'Auvelity • US prescribing information',url:'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=dcefda7c-9a68-278e-e053-2995a90aec79'},
 zuranolone:{label:'Zurzuvae (zuranolone) • US prescribing information',url:'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f18e53b0-d0bb-422d-8de7-ab64b7292b29'},
 phq:{label:'Kroenke et al. • PHQ-9 validation, 2001',url:'https://pubmed.ncbi.nlm.nih.gov/11556941/'}
};
export const TEAMS = [
 {id:'orange',name:'Orange',character:'Pumpkin',color:'#ed9b51',sprite:0},
 {id:'green',name:'Green',character:'Frankenstein',color:'#9cc77c',sprite:1},
 {id:'blue',name:'Blue',character:'Ghost',color:'#8bc7ef',sprite:2},
 {id:'purple',name:'Purple',character:'Vampire',color:'#ba95e5',sprite:3}
];
export const LESSONS = [
  {
    "id": "mdd",
    "chapter": "01 / Recognize",
    "title": "Major Depressive Disorder: Definition",
    "lead": "MDD is diagnosed through assessment of depressive symptoms, functional impact, and diagnostic exclusions.",
    "cards": [
      [
        "Symptoms and functioning",
        "Depressive symptoms represent a sustained change from baseline and cause clinically significant distress or impairment."
      ],
      [
        "Core mood symptoms",
        "Depressed mood or loss of interest/pleasure must be present. In youth, mood may be irritable."
      ],
      [
        "Diagnostic assessment",
        "Assess duration, impairment, prior episodes, mania/hypomania, substances, and medical causes."
      ]
    ],
    "pearl": "A positive screening result requires a clinical diagnostic evaluation.",
    "sources": [
      "dsm",
      "aacap",
      "va"
    ],
    "notes": "Introduce MDD as a heterogeneous syndrome. A major depressive episode can occur in bipolar disorder. MDD additionally requires exclusion of a manic/hypomanic history and other explanations. Ask for concrete functional changes.",
    "question": "Which conclusions are supported?",
    "options": [
      "The PHQ-9 score alone is sufficient to diagnose MDD.",
      "The interview should establish symptom duration and functional impact.",
      "A history of mania or hypomania could change the diagnosis."
    ],
    "difficulty": "Foundation",
    "vignette": "A 32-year-old has a PHQ-9 of 16 after several weeks of low mood and reduced work performance. The diagnostic interview is not yet complete.",
    "reviewTargets": [
      1,
      0,
      0
    ]
  },
  {
    "id": "criteria",
    "chapter": "01 / Recognize",
    "title": "DSM-5-TR Diagnostic Criteria",
    "lead": "A major depressive episode requires at least 5 symptoms during the same 2-week period, including depressed mood or anhedonia.",
    "cards": [
      [
        "Core symptoms",
        "Depressed mood; reduced interest or pleasure."
      ],
      [
        "Additional somatic and cognitive symptoms",
        "Appetite/weight change, sleep change, psychomotor change, low energy, worthlessness/guilt, poor concentration."
      ],
      [
        "Suicidal symptoms and diagnostic exclusions",
        "Recurrent thoughts of death/suicide; assess distress/impairment and substance, medical, psychotic, and bipolar explanations."
      ]
    ],
    "pearl": "Symptoms must cause clinically significant distress or impairment; assess for alternative explanations.",
    "sources": [
      "dsm"
    ],
    "notes": "Paraphrase of DSM-5-TR, not a replacement for the diagnostic manual. Most symptoms occur nearly every day; weight change and suicidal thoughts have their own criterion wording. Psychomotor change should be observable by others. Bereavement does not automatically exclude a depressive episode.",
    "question": "Which interpretations of the criteria are correct?",
    "options": [
      "The five listed symptoms include the required mood anchor.",
      "Feeling internally restless is enough to count observable psychomotor agitation.",
      "Bereavement does not by itself exclude a major depressive episode."
    ],
    "difficulty": "Foundation",
    "vignette": "After a bereavement, Alex has 3 weeks of depressed mood, insomnia, fatigue, excessive guilt, and impaired concentration, with declining work function.",
    "reviewTargets": [
      0,
      1,
      2
    ]
  },
  {
    "id": "specifiers",
    "chapter": "02 / Describe",
    "title": "Clinical Specifiers of MDD",
    "lead": "Specifiers characterize the depressive episode and inform assessment and treatment.",
    "cards": [
      [
        "Anxious distress and mixed features",
        "Anxious distress describes anxiety with depression. Mixed features involve concurrent manic/hypomanic symptoms."
      ],
      [
        "Melancholic and atypical features",
        "Melancholic: marked anhedonia or nonreactive mood with other features. Atypical: mood reactivity plus a specific symptom pattern."
      ],
      [
        "Psychotic features and catatonia",
        "Assess delusions, hallucinations, and catatonic signs. These warrant a different level of assessment and often specialist care."
      ]
    ],
    "pearl": "The atypical-features specifier is distinct from the medication category of atypical antidepressants.",
    "sources": [
      "dsm",
      "va",
      "canmat"
    ],
    "notes": "These are summaries, not complete specifier checklists. Atypical features require mood reactivity plus at least two of increased appetite/weight, hypersomnia, leaden paralysis, or longstanding rejection sensitivity. Mixed features are not synonymous with bipolar disorder but should increase attention to bipolarity.",
    "question": "Which specifier interpretations are supported?",
    "options": [
      "Reactive mood, hypersomnia, and increased appetite can support atypical features.",
      "Absent mood reactivity plus early waking, morning worsening, and marked psychomotor slowing can support melancholic features.",
      "Irritability, distractibility, and agitation alone establish mixed features."
    ],
    "difficulty": "Clinical application",
    "vignette": "Three patients with confirmed depressive episodes have different symptom patterns. Assess each proposed classification.",
    "reviewTargets": [
      1,
      1,
      0
    ]
  },
  {
    "id": "patterns",
    "chapter": "02 / Describe",
    "title": "Course and Temporal Specifiers",
    "lead": "Document episode recurrence, severity, remission status, and temporal pattern.",
    "cards": [
      [
        "Episode course",
        "Single episode versus recurrent illness; record severity and remission status."
      ],
      [
        "Seasonal pattern and peripartum onset",
        "Seasonal pattern and peripartum onset describe timing. DSM peripartum onset is narrower than many clinical postpartum frameworks."
      ],
      [
        "Related depressive disorders",
        "Persistent depressive disorder describes chronic depression; bipolar depression and PMDD need their own diagnostic assessment."
      ]
    ],
    "pearl": "Persistent depressive disorder, bipolar disorder, and PMDD require separate diagnostic consideration.",
    "sources": [
      "dsm",
      "aacap",
      "canmat"
    ],
    "notes": "DSM peripartum onset means onset during pregnancy or within 4 weeks postpartum; clinical care often considers a longer postpartum interval. PDD duration is at least 2 years in adults and 1 year in children/adolescents. Seasonal pattern requires a longitudinal relationship, not a single winter episode.",
    "question": "Which course and timing statements are correct?",
    "options": [
      "Persistent depressive disorder requires only 12 months of symptoms in an adult.",
      "First onset 8 weeks postpartum falls within the DSM peripartum-onset window.",
      "Seasonal-pattern assessment requires the last 2 years and the lifetime predominance of seasonal episodes."
    ],
    "difficulty": "Clinical application",
    "vignette": "Consider three separate timing histories: chronic adult depression, postpartum onset, and recurrent winter depression.",
    "reviewTargets": [
      0,
      1,
      1
    ]
  },
  {
    "id": "differential",
    "chapter": "03 / Investigate",
    "title": "Differential Diagnosis of Depression",
    "lead": "Evaluate psychiatric, medical, substance-related, and medication-related explanations.",
    "cards": [
      [
        "Psychiatric differential",
        "Bipolar disorder, grief, adjustment disorder, PTSD, anxiety, substance use, and psychotic disorders."
      ],
      [
        "Medical differential",
        "Consider thyroid disease, anemia, sleep apnea, neurologic illness, and other causes suggested by the history/exam."
      ],
      [
        "Medication review and investigations",
        "Review medications, alcohol/drugs, sleep, chronic pain, and social stressors. Order targeted investigations."
      ]
    ],
    "pearl": "Assess prior mania or hypomania, including decreased need for sleep with increased energy.",
    "sources": [
      "va",
      "canmat",
      "dsm"
    ],
    "notes": "Distinguish decreased need for sleep from insomnia with fatigue. Ask about episodic elevation/irritability, increased activity, impulsivity, prior activation, and family history. Comorbidity does not invalidate MDD. Testing should reflect the presentation; broad indiscriminate panels are not diagnostic.",
    "question": "Which assessment decisions are appropriate?",
    "options": [
      "A positive PHQ-9 makes evaluation of medical contributors unnecessary.",
      "The periods of reduced sleep need warrant a focused bipolar history.",
      "Every patient with depressive symptoms needs the same broad laboratory panel."
    ],
    "difficulty": "Clinical application",
    "vignette": "A patient with depressive symptoms also reports witnessed apneas, heavy alcohol use, and past periods of markedly reduced sleep need with increased energy.",
    "reviewTargets": [
      1,
      0,
      1
    ]
  },
  {
    "id": "mechanisms",
    "chapter": "04 / Understand",
    "title": "Etiology and Pathophysiology",
    "lead": "MDD involves interacting biological, psychological, and social factors.",
    "cards": [
      [
        "Biological mechanisms",
        "Genetic vulnerability, stress systems, neural circuits, plasticity, and neurotransmission contribute."
      ],
      [
        "Psychological and social factors",
        "Trauma, chronic stress, isolation, and learned patterns can shape vulnerability and persistence."
      ],
      [
        "Inflammatory and gut–brain pathways",
        "Inflammation and gut–brain signaling are research areas. Mechanistic plausibility is not proof of treatment benefit."
      ]
    ],
    "pearl": "MDD is a clinical diagnosis; no routine laboratory test establishes the diagnosis.",
    "sources": [
      "gut",
      "canmat"
    ],
    "notes": "Avoid presenting a simple chemical-deficiency model as established causation. Associations may reflect illness, treatment, diet, or confounding. Peripheral serotonin does not simply cross the blood–brain barrier and become brain serotonin.",
    "question": "Which interpretations are justified?",
    "options": [
      "Improvement with an SSRI proves the patient had a serotonin deficiency.",
      "Stress-related circuitry and biological vulnerability can contribute without a single diagnostic biomarker.",
      "An elevated inflammatory marker establishes which antidepressant will work best."
    ],
    "difficulty": "Clinical application",
    "vignette": "An antidepressant helps one patient. Another has an elevated inflammatory marker and asks whether it identifies the best treatment.",
    "reviewTargets": [
      0,
      0,
      1
    ]
  },
  {
    "id": "measurement",
    "chapter": "05 / Assess",
    "title": "Screening and Severity Assessment",
    "lead": "Use validated instruments alongside clinical assessment to monitor symptoms and functioning.",
    "cards": [
      [
        "Screening instruments",
        "PHQ-2/PHQ-9 can identify symptoms needing clinical assessment."
      ],
      [
        "PHQ-9 severity categories",
        "PHQ-9 bands: 0–4 minimal; 5–9 mild; 10–14 moderate; 15–19 moderately severe; 20–27 severe."
      ],
      [
        "Longitudinal assessment",
        "Repeat the same tool. Ask about functioning, tolerability, adherence, and the patient’s own goals."
      ]
    ],
    "pearl": "Treatment outcomes include symptom remission and functional recovery.",
    "sources": [
      "phq",
      "va",
      "canmat",
      "phqchange"
    ],
    "notes": "Other scales include QIDS-SR, BDI-II, HAM-D, and MADRS. Response is commonly a 50% symptom reduction; remission is below a scale-specific threshold. PHQ-9 <5 is a common operational remission threshold, not the whole clinical assessment. A score does not dictate disposition.",
    "question": "How should this change be interpreted?",
    "options": [
      "The 50% reduction meets a common treatment-response definition.",
      "The nine-point decline establishes symptom remission.",
      "Residual symptoms and functional recovery should still guide treatment planning."
    ],
    "difficulty": "Clinical application",
    "vignette": "After treatment, PHQ-9 decreases from 18 to 9. The patient is back at work but still reports anhedonia and poor sleep.",
    "reviewTargets": [
      1,
      1,
      2
    ]
  },
  {
    "id": "safety",
    "chapter": "05 / Assess",
    "title": "Suicide Risk Assessment",
    "lead": "Evaluate suicidal ideation, intent, planning, access to means, and clinical context.",
    "cards": [
      [
        "Suicidal thoughts and behavior",
        "Thoughts of death, suicidal thoughts, intent, plan, access to means, and past attempts."
      ],
      [
        "Risk and protective factors",
        "Agitation, intoxication, psychosis, supports, protective factors, and ability to collaborate on safety."
      ],
      [
        "Safety planning and disposition",
        "Match urgency to the assessment. Use safety planning, means-safety counseling, and reliable follow-up; arrange urgent evaluation when indicated."
      ]
    ],
    "pearl": "PHQ-9 item 9 does not substitute for a comprehensive suicide risk assessment.",
    "sources": [
      "va",
      "nice"
    ],
    "notes": "Follow local emergency pathways for imminent risk. A negative item 9 does not exclude suicide risk. Safety planning is collaborative and concrete; a promise not to self-harm is not a substitute. Keep this slide and question free of competitive jokes.",
    "question": "Which statements about disposition are correct?",
    "options": [
      "The signed promise is sufficient to justify routine outpatient follow-up.",
      "Urgent emergency assessment is warranted despite the promise.",
      "The presence of family support alone makes the current intent low risk."
    ],
    "difficulty": "Clinical application",
    "vignette": "A patient describes current suicidal intent, a feasible plan, and access to means, but agrees to sign a promise not to act.",
    "reviewTargets": [
      1,
      1,
      0
    ]
  },
  {
    "id": "comorbidity",
    "chapter": "06 / Plan",
    "title": "Comorbidities and Treatment Planning",
    "lead": "Psychiatric and medical comorbidities influence treatment selection and recovery.",
    "cards": [
      [
        "Psychiatric comorbidities",
        "Anxiety, trauma-related symptoms, substance use, and eating disorders may need coordinated care."
      ],
      [
        "Medical comorbidities",
        "Pain, sleep disorders, cardiometabolic disease, and medication interactions affect the plan."
      ],
      [
        "Access and patient preferences",
        "Access, cost, work schedules, family supports, and preferences influence whether treatment is usable."
      ]
    ],
    "pearl": "Treatment planning should incorporate comorbid conditions, feasibility, and patient priorities.",
    "sources": [
      "nice",
      "va",
      "canmat"
    ],
    "notes": "Ask what the patient most wants to improve and which adverse effects would be unacceptable. Coordinate treatment for comorbid disorders rather than assuming all symptoms are depression. Avoid claiming a drug is universally best for a symptom profile.",
    "question": "Which treatment discussions are reasonable?",
    "options": [
      "Mirtazapine may fit the sleep/appetite symptoms, with discussion of sedation and weight effects.",
      "An SNRI may be considered when a relevant pain indication is present.",
      "Matching a medication to one symptom reliably predicts remission."
    ],
    "difficulty": "Clinical application",
    "vignette": "An adult with MDD has insomnia, low appetite, and neuropathic pain. They want to understand how these issues affect medication selection.",
    "reviewTargets": [
      1,
      1,
      1
    ]
  },
  {
    "id": "firstline",
    "chapter": "06 / Plan",
    "title": "Initial Treatment of Adult MDD",
    "lead": "ACP recommendations distinguish mild from moderate-to-severe adult MDD.",
    "cards": [
      [
        "Mild MDD",
        "ACP suggests CBT as initial monotherapy; discuss preferences and access."
      ],
      [
        "Moderate-to-severe MDD",
        "ACP recommends CBT or a second-generation antidepressant; combination is a conditional initial option."
      ],
      [
        "Individualized treatment selection",
        "Consider severity, safety, prior treatment, feasibility, adverse effects, and preferences. Escalate when clinically urgent."
      ]
    ],
    "pearl": "Use shared decision-making to select among appropriate evidence-based treatments.",
    "sources": [
      "acp",
      "nice",
      "va",
      "canmat"
    ],
    "notes": "ACP 2026 update alert 4 reaffirmed its prior recommendations; it is not a completely new guideline. Other guidelines may favor combined treatment in particular severe or complex presentations. These statements do not apply automatically to psychotic, catatonic, or imminently unsafe presentations.",
    "question": "Under the ACP framework, which plans are reasonable?",
    "options": [
      "Offer CBT as an initial treatment option.",
      "Require antidepressant medication solely because the episode is moderate.",
      "Discuss CBT plus an antidepressant as another initial option."
    ],
    "difficulty": "Clinical application",
    "vignette": "An adult with moderate MDD prefers structured psychotherapy. There is no psychosis, catatonia, or acute safety concern, and CBT is accessible.",
    "reviewTargets": [
      0,
      0,
      0
    ]
  },
  {
    "id": "therapy",
    "chapter": "06 / Plan",
    "title": "Evidence-Based Psychotherapies",
    "lead": "CBT, behavioral activation, and interpersonal therapy address different therapeutic targets.",
    "cards": [
      [
        "Cognitive behavioral therapy",
        "Examine links between thoughts, emotions, and behavior; practice alternative responses."
      ],
      [
        "Behavioral activation",
        "Schedule manageable activities that restore engagement and reinforcement."
      ],
      [
        "Interpersonal therapy",
        "Work on interpersonal stressors, role transitions, grief, and relationship patterns."
      ]
    ],
    "pearl": "Select psychotherapy according to clinical needs, patient preferences, and availability.",
    "sources": [
      "aacap",
      "nice",
      "canmat",
      "va"
    ],
    "notes": "Offer a concrete referral and discuss access barriers, digital options where appropriate, and follow-up. Behavioral activation is not simply telling someone to stay busy. Match intensity to need and local availability.",
    "question": "Which therapy descriptions fit?",
    "options": [
      "CBT could examine the belief and test it through behavioral experiments.",
      "Interpersonal therapy could address the relationship loss and role transition.",
      "Behavioral activation should wait until the patient feels motivated to resume activities."
    ],
    "difficulty": "Clinical application",
    "vignette": "After a divorce, a patient withdraws from activities and believes “One failed relationship means I fail at everything.”",
    "reviewTargets": [
      0,
      0,
      0
    ]
  },
  {
    "id": "medications",
    "chapter": "07 / Prescribe",
    "title": "Antidepressant Selection",
    "lead": "Select medication based on expected benefit, adverse effects, contraindications, and patient preferences.",
    "cards": [
      [
        "SSRIs and SNRIs",
        "Common treatment options; review gastrointestinal and sexual adverse effects, activation, withdrawal, and interactions. Monitor blood pressure with SNRIs."
      ],
      [
        "Bupropion",
        "Often considered when sexual effects are a concern. Avoid with seizure disorder or current/prior anorexia or bulimia."
      ],
      [
        "Mirtazapine",
        "Sedation and increased appetite or weight gain may influence medication selection and monitoring."
      ]
    ],
    "pearl": "Review the complete medication list and relevant contraindications before prescribing.",
    "sources": [
      "canmat",
      "auvelity",
      "nice",
      "va"
    ],
    "notes": "Bupropion and mirtazapine are often called atypical antidepressants, distinct from atypical antipsychotic augmentation. Selection requires a complete medication and contraindication review. This slide intentionally omits a dosing cookbook; use current prescribing information.",
    "question": "Which prescribing statements are accurate?",
    "options": [
      "Bupropion is an appropriate routine choice despite a prior history of bulimia.",
      "Sertraline 50–200 mg/day is within its usual adult therapeutic range.",
      "Venlafaxine XR has a routine labeled MDD maximum of 375 mg/day."
    ],
    "difficulty": "Clinical application",
    "vignette": "Review three proposed adult antidepressant plans. Assume no organ impairment or interacting medications unless stated.",
    "reviewTargets": [
      2,
      1,
      1
    ]
  },
  {
    "id": "followup",
    "chapter": "07 / Prescribe",
    "title": "Monitoring Antidepressant Treatment",
    "lead": "Early follow-up evaluates tolerability, adherence, safety, and emerging response.",
    "cards": [
      [
        "Expected response and adverse effects",
        "Benefit develops over weeks. Discuss common adverse effects, activation, and how to seek help."
      ],
      [
        "Timing of follow-up",
        "Arrange review generally within 2 weeks; NICE advises 1 week for ages 18–25 or increased suicide concern."
      ],
      [
        "Ongoing assessment and adjustment",
        "Monitor symptoms, safety, adherence, dose, tolerability, and functioning. Plan medication discontinuation and tapering when appropriate."
      ]
    ],
    "pearl": "Provide a defined follow-up interval and instructions for earlier assessment if symptoms worsen.",
    "sources": [
      "nice",
      "aacap",
      "canmat",
      "va"
    ],
    "notes": "Timing must be individualized; pediatric plans need close follow-up and family involvement as appropriate. New suicidal symptoms, severe activation, mania, or significant adverse effects warrant earlier contact. Antidepressant boxed warnings emphasize monitoring children, adolescents, and young adults.",
    "question": "Which follow-up decisions are appropriate?",
    "options": [
      "Arrange the initial review at about 1 week, consistent with NICE advice for ages 18–25.",
      "The lack of benefit after 5 days establishes an adequate failed trial.",
      "If early improvement remains absent at 2–4 weeks, reassess exposure, diagnosis, and the plan."
    ],
    "difficulty": "Clinical application",
    "vignette": "A 22-year-old started an SSRI 5 days ago. There is no clear benefit yet, mild nausea, and no current activation or safety concern.",
    "reviewTargets": [
      0,
      1,
      1
    ]
  },
  {
    "id": "pediatrics",
    "chapter": "08 / Special populations",
    "title": "MDD in Children and Adolescents",
    "lead": "Assessment and treatment incorporate developmental stage, family context, school functioning, and safety.",
    "cards": [
      [
        "Psychotherapy and pharmacotherapy",
        "AACAP supports CBT/IPT and SSRIs, preferably fluoxetine; combined treatment is an option."
      ],
      [
        "FDA-approved pediatric MDD indications",
        "Fluoxetine: age 8 and older. Escitalopram: age 12 and older. Approval differs by drug and indication."
      ],
      [
        "Monitoring and caregiver involvement",
        "Involve caregivers appropriately, preserve confidential assessment, and monitor suicidality and activation."
      ]
    ],
    "pearl": "FDA approval is specific to the medication, age group, and indication.",
    "sources": [
      "aacap",
      "escitalopram"
    ],
    "notes": "AACAP suggests SSRIs except paroxetine, preferably fluoxetine. Assess bipolar risk, substance use, school stressors, and family context. Medication is not automatic for every positive screen. Review local pediatric pathways and specialist access.",
    "question": "Which counseling statements are accurate?",
    "options": [
      "Fluoxetine and escitalopram both have a US MDD indication at this age.",
      "The boxed warning makes an SSRI absolutely contraindicated for this adolescent.",
      "Treatment planning should include psychotherapy, caregiver involvement, school functioning, and close monitoring."
    ],
    "difficulty": "Clinical application",
    "vignette": "A 15-year-old has moderate MDD with school withdrawal. The family asks about medication, therapy, and the antidepressant boxed warning.",
    "reviewTargets": [
      1,
      1,
      0
    ]
  },
  {
    "id": "novel",
    "chapter": "08 / Special populations",
    "title": "Novel Pharmacologic Treatments",
    "lead": "Newer therapies differ in approved indications, administration, and monitoring requirements.",
    "cards": [
      [
        "Dextromethorphan–bupropion",
        "An oral option approved for adult MDD; review seizure/eating-disorder contraindications and drug interactions."
      ],
      [
        "Zuranolone",
        "A neuroactive-steroid treatment for postpartum depression in adults; a 14-day course with important sedation/driving precautions."
      ],
      [
        "Esketamine",
        "Adult TRD: monotherapy or with an oral antidepressant. Supervised treatment and REMS requirements apply."
      ]
    ],
    "pearl": "Confirm the indication and required safety monitoring for each treatment.",
    "sources": [
      "auvelity",
      "zuranolone",
      "spravato"
    ],
    "notes": "Zuranolone is not a general adult MDD indication. Spravato’s separate indication for depressive symptoms in MDD with acute suicidal ideation/behavior requires an oral antidepressant; prevention of suicide has not been demonstrated. Do not extrapolate a 2021 esketamine label into current practice.",
    "question": "Which indication statements are correct?",
    "options": [
      "Adult TRD can be treated with intranasal esketamine as monotherapy under its label.",
      "The MDD-with-acute-suicidal-ideation/behavior indication also permits esketamine without an oral antidepressant.",
      "Zuranolone is approved for adult MDD regardless of a postpartum context."
    ],
    "difficulty": "Clinical application",
    "vignette": "A referral service is reviewing US indications for esketamine and zuranolone. The TRD and acute-suicidality indications must be distinguished.",
    "reviewTargets": [
      1,
      1,
      0
    ]
  },
  {
    "id": "nonresponse",
    "chapter": "09 / Reassess",
    "title": "Assessment of Treatment Nonresponse",
    "lead": "Evaluate treatment adequacy and diagnostic factors before changing therapy.",
    "cards": [
      [
        "Adequacy of the treatment trial",
        "Verify adherence, therapeutic and tolerated dosing, adequate duration, and adverse effects that may limit exposure."
      ],
      [
        "Diagnostic reassessment",
        "Bipolarity, substances, medical illness, sleep, trauma, and ongoing stressors can change the next step."
      ],
      [
        "Subsequent treatment options",
        "Options include dose optimization, switching treatment, adding psychotherapy, or pharmacologic augmentation."
      ]
    ],
    "pearl": "Inadequate adherence or exposure does not establish failure of an adequate medication trial.",
    "sources": [
      "acp",
      "va",
      "canmat"
    ],
    "notes": "Do not treat a fixed number of weeks as proof of adequate exposure without checking dose and adherence. A typical adequate trial often spans 6–8 or more weeks, including meaningful exposure at a therapeutic dose. The correct next step is case-dependent.",
    "question": "Which next-step decisions are reasonable?",
    "options": [
      "Consider optimizing the current treatment after reviewing symptoms, adherence, and contributors.",
      "Partial response requires switching drugs before considering any adjunctive treatment.",
      "Adding evidence-based psychotherapy is an option to discuss."
    ],
    "difficulty": "Clinical application",
    "vignette": "After an adequate, reliably taken antidepressant trial, a patient has meaningful improvement but persistent symptoms. The drug is tolerable and dose optimization remains possible.",
    "reviewTargets": [
      1,
      1,
      1
    ]
  },
  {
    "id": "trd",
    "chapter": "09 / Reassess",
    "title": "Treatment-Resistant Depression",
    "lead": "TRD commonly refers to nonresponse to at least two adequate antidepressant trials; definitions vary.",
    "cards": [
      [
        "Confirmation of treatment resistance",
        "Verify diagnosis, adherence, dose/duration, and comorbidities before applying the label."
      ],
      [
        "Pharmacologic augmentation",
        "Specialist-informed options include selected second-generation antipsychotics or lithium, with agent-specific monitoring."
      ],
      [
        "Psychotherapy and neuromodulation",
        "Discuss psychotherapy and neuromodulation; consider treatment burden, access, urgency, and patient goals."
      ]
    ],
    "pearl": "Treatment selection depends on prior response, tolerability, urgency, and patient preferences.",
    "sources": [
      "ketamine",
      "va",
      "canmat"
    ],
    "notes": "There is no single universally accepted TRD definition. Adequate failures are usually evaluated in the current episode. Distinguish intolerance from nonresponse. Antipsychotic augmentation needs metabolic and movement-disorder monitoring; lithium requires serum levels and renal/thyroid assessment.",
    "question": "Which statements are correct?",
    "options": [
      "This history can meet the common operational definition of TRD after diagnostic reassessment.",
      "Lithium augmentation needs symptom follow-up but no laboratory monitoring.",
      "Adjunctive aripiprazole warrants assessment for akathisia and metabolic adverse effects."
    ],
    "difficulty": "Clinical reasoning",
    "vignette": "An adult remains depressed after two adequately dosed, sufficiently long, reliably taken antidepressant trials in this episode. Specialist augmentation is being considered.",
    "reviewTargets": [
      0,
      1,
      1
    ]
  },
  {
    "id": "procedures",
    "chapter": "09 / Reassess",
    "title": "ECT, rTMS, and Ketamine",
    "lead": "These treatments differ in indications, delivery, adverse effects, and monitoring.",
    "cards": [
      [
        "Electroconvulsive therapy",
        "Consider for severe presentations, psychotic depression, catatonia, urgent need for response, or treatment resistance; anesthesia and cognitive effects matter."
      ],
      [
        "Repetitive transcranial magnetic stimulation",
        "Noninvasive stimulation delivered over repeated sessions. Access, schedule, and contraindications need review."
      ],
      [
        "Ketamine and esketamine",
        "Rapid symptom effects in some patients. IV ketamine for depression is off-label; esketamine has specific FDA indications and monitoring."
      ]
    ],
    "pearl": "Ongoing safety assessment remains necessary even when depressive symptoms improve rapidly.",
    "sources": [
      "va",
      "ketamine",
      "spravato",
      "canmat"
    ],
    "notes": "ECT need not wait for multiple routine medication failures when severity/urgency supports it. The 2020 supplied ECT paper concerns adherence to guidelines, not a randomized comparative efficacy trial. Esketamine monitoring includes BP, sedation, dissociation, and respiratory depression, with at least 2 hours observation.",
    "question": "Which treatment statements are accurate?",
    "options": [
      "ECT may be considered now rather than waiting for several more medication failures.",
      "rTMS usually requires general anesthesia for each treatment session.",
      "IV racemic ketamine has an FDA indication specifically for MDD."
    ],
    "difficulty": "Clinical reasoning",
    "vignette": "A patient with severe psychotic depression is refusing food and fluids. Only one antidepressant has been tried; the team is comparing specialist treatments.",
    "reviewTargets": [
      0,
      0,
      1
    ]
  },
  {
    "id": "maintenance",
    "chapter": "10 / Maintain",
    "title": "Continuation and Relapse Prevention",
    "lead": "Continue effective treatment after remission and individualize the duration of maintenance.",
    "cards": [
      [
        "Continuation treatment",
        "Keep an effective treatment after remission. NICE advises at least 6 months for antidepressants, with regular review."
      ],
      [
        "Maintenance treatment",
        "Recurrent, severe, or residual illness may justify longer maintenance; discuss risks and preferences."
      ],
      [
        "Relapse monitoring and discontinuation",
        "Identify warning signs, supports, and follow-up. Taper gradually and distinguish withdrawal from relapse."
      ]
    ],
    "pearl": "Continuation duration is assessed from remission rather than from the date treatment began.",
    "sources": [
      "nice",
      "va",
      "canmat"
    ],
    "notes": "Avoid a universal stop date. Consider previous episodes, severity, residual symptoms, ongoing stressors, and patient preference. Withdrawal can begin soon after dose reductions and include symptoms unlike the original episode; assessment is needed rather than assuming either diagnosis.",
    "question": "Which continuation plans are appropriate?",
    "options": [
      "Plan to stop in 2 months because that completes 6 months from the first prescription.",
      "Generally continue the effective dose for at least 6 months after remission.",
      "Prior recurrence and episode severity may support a longer maintenance course."
    ],
    "difficulty": "Clinical reasoning",
    "vignette": "A patient has taken sertraline for 4 months and first reached remission 2 weeks ago. Previous episodes have caused major functional impairment.",
    "reviewTargets": [
      0,
      0,
      1
    ]
  },
  {
    "id": "lifestyle",
    "chapter": "11 / Whole-person care",
    "title": "Lifestyle Interventions in MDD",
    "lead": "Integrate feasible activity, sleep, nutrition, and social-support interventions into treatment.",
    "cards": [
      [
        "Physical activity",
        "Individualize activity type and progression according to symptoms, disability, resources, preferences, and safety."
      ],
      [
        "Sleep and social connection",
        "Address sleep regularity, insomnia, isolation, and substance use alongside established treatment."
      ],
      [
        "Nutrition and follow-up",
        "Support accessible nutritious eating, establish an achievable behavioral goal, and reassess at follow-up."
      ]
    ],
    "pearl": "Specify achievable behavioral goals and reassess implementation and symptoms at follow-up.",
    "sources": [
      "lifestyle",
      "nice",
      "canmat"
    ],
    "notes": "Exercise and other lifestyle interventions have evidence, but recommendations vary by severity and intervention. Avoid making adherence a moral judgment. The 2026 ACLM consensus is not a head-to-head exercise-versus-SSRI trial; cross-study NNTs should not be used as a treatment league table.",
    "question": "Which counseling statements are supported?",
    "options": [
      "Start with an achievable activity goal and review symptoms, barriers, and adherence.",
      "A lower exercise NNT from a separate study proves superiority to an SSRI.",
      "Regular wake time and assessment of persistent insomnia belong in the plan."
    ],
    "difficulty": "Clinical reasoning",
    "vignette": "A depressed patient with low energy and insomnia cannot yet manage a 30-minute walk. They ask whether exercise can replace their other treatment.",
    "reviewTargets": [
      0,
      1,
      0
    ]
  },
  {
    "id": "microbiome",
    "chapter": "11 / Whole-person care",
    "title": "Microbiome and Nutraceutical Evidence",
    "lead": "Distinguish proposed mechanisms from evidence of clinical efficacy.",
    "cards": [
      [
        "Gut–brain mechanisms",
        "Immune signaling, metabolites, stress pathways, and neural communication may connect gut and brain."
      ],
      [
        "Probiotic evidence",
        "Probiotic studies vary by strains, doses, populations, and quality; guideline conclusions are not uniform."
      ],
      [
        "Clinical implications",
        "Review supplements and interactions. Commercial microbiome tests and FMT are not routine MDD treatment tools."
      ]
    ],
    "pearl": "Mechanistic plausibility alone does not establish treatment efficacy.",
    "sources": [
      "gut",
      "supplements",
      "canmat"
    ],
    "notes": "The 2022 nutraceutical taskforce provisionally supported adjunctive probiotics, while CANMAT 2023 judged evidence insufficient in its lifestyle table. Do not represent this as unanimous endorsement. St John’s wort has clinically important interactions; “natural” does not mean safe. No universal probiotic brand/dose is endorsed here.",
    "question": "Which statements are correct?",
    "options": [
      "A positive trial of one probiotic formulation supports using any probiotic interchangeably.",
      "St John’s wort requires an interaction review before addition to sertraline.",
      "Commercial stool profiling is an established routine method for selecting an antidepressant."
    ],
    "difficulty": "Clinical reasoning",
    "vignette": "A patient taking sertraline asks about a probiotic trial, St John’s wort, and a commercial stool test marketed to personalize antidepressants.",
    "reviewTargets": [
      1,
      0,
      1
    ]
  }
];
for (const lesson of LESSONS) lesson.pages=LECTURE_DETAILS[lesson.id];
SOURCES.phqchange={label:'Löwe et al. • PHQ-9 change, 2004',url:'https://pubmed.ncbi.nlm.nih.gov/15550799/'};
LECTURE_DETAILS.measurement[1].sources.push('phqchange');
export const DECK_VERSION='mdd-2026-10-v6';
export const SLIDES=LESSONS.flatMap((lesson,i)=>[{type:'question',lesson:i},...lesson.pages.map((_,page)=>({type:'teach',lesson:i,page}))]);
