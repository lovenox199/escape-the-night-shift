import {LECTURE_DETAILS} from './lecture-details.js';
export const SOURCES={
  "dsm": {
    "label": "DSM-5-TR • APA, 2022",
    "url": "https://www.psychiatry.org/psychiatrists/practice/dsm"
  },
  "acp": {
    "label": "ACP living guideline • 2023; update alert 4, 2026",
    "url": "https://pubmed.ncbi.nlm.nih.gov/41802255/"
  },
  "canmat": {
    "label": "CANMAT 2023 update • published 2024",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/"
  },
  "va": {
    "label": "VA/DoD MDD guideline • 2022",
    "url": "https://www.healthquality.va.gov/guidelines/MH/mdd/VADoDMDDCPGFinal508.pdf"
  },
  "aacap": {
    "label": "AACAP pediatric depression guideline • 2023",
    "url": "https://pubmed.ncbi.nlm.nih.gov/36273673/"
  },
  "lifestyle": {
    "label": "Merlo et al. • ACLM consensus, 2026",
    "url": "https://pubmed.ncbi.nlm.nih.gov/41523150/"
  },
  "gut": {
    "label": "Donoso et al. • Microbiome–gut–brain axis",
    "url": "https://pubmed.ncbi.nlm.nih.gov/35278334/"
  },
  "supplements": {
    "label": "Sarris et al. • WFSBP/CANMAT taskforce, 2022",
    "url": "https://pubmed.ncbi.nlm.nih.gov/35311615/"
  },
  "ketamine": {
    "label": "McIntyre et al. • Expert opinion, 2021",
    "url": "https://pubmed.ncbi.nlm.nih.gov/33726522/"
  },
  "spravato": {
    "label": "Spravato • current US prescribing information",
    "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d81a6a79-a74a-44b7-822c-0dfa3036eaed"
  },
  "escitalopram": {
    "label": "Escitalopram • US prescribing information",
    "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=83a642b9-acee-45d3-95a1-52a491b770fd"
  },
  "auvelity": {
    "label": "Auvelity • US prescribing information",
    "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=dcefda7c-9a68-278e-e053-2995a90aec79"
  },
  "zuranolone": {
    "label": "Zurzuvae (zuranolone) • US prescribing information",
    "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f18e53b0-d0bb-422d-8de7-ab64b7292b29"
  },
  "phq": {
    "label": "Kroenke et al. • PHQ-9 validation, 2001",
    "url": "https://pubmed.ncbi.nlm.nih.gov/11556941/"
  },
  "nimh": {
    "label": "NIMH • Depression",
    "url": "https://www.nimh.nih.gov/health/publications/depression"
  },
  "smiles": {
    "label": "Jacka et al. • SMILES randomized trial, 2017",
    "url": "https://pubmed.ncbi.nlm.nih.gov/28137247/"
  },
  "exercise": {
    "label": "Noetel et al. • Exercise network meta-analysis, 2024",
    "url": "https://pubmed.ncbi.nlm.nih.gov/38355154/"
  },
  "bupropion": {
    "label": "Wellbutrin XL • US prescribing information",
    "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a435da9d-f6e8-4ddc-897d-8cd2bf777b21"
  }
};
export const TEAMS=[
  {
    "id": "orange",
    "name": "Orange",
    "character": "Pumpkin",
    "color": "#ed9b51",
    "sprite": 0
  },
  {
    "id": "green",
    "name": "Green",
    "character": "Frankenstein",
    "color": "#9cc77c",
    "sprite": 1
  },
  {
    "id": "blue",
    "name": "Blue",
    "character": "Ghost",
    "color": "#8bc7ef",
    "sprite": 2
  },
  {
    "id": "purple",
    "name": "Purple",
    "character": "Vampire",
    "color": "#ba95e5",
    "sprite": 3
  }
];
export const LESSONS=[
  {
    "id": "criteria",
    "chapter": "01 / Depression, Diagnostic Criteria, and SIGECAPS",
    "title": "Depression, Diagnostic Criteria, and SIGECAPS",
    "difficulty": "Foundation",
    "prompt": "An adult reports 3 weeks of insomnia, weight loss, fatigue, poor concentration, and excessive guilt. They deny depressed mood and continue to enjoy their usual activities. What prevents these symptoms alone from establishing a major depressive episode?",
    "options": [
      "Neither depressed mood nor anhedonia is present",
      "The symptoms have lasted less than 6 months",
      "Weight loss and insomnia count as only one symptom",
      "Six symptoms are required in adults"
    ],
    "sources": [
      "dsm"
    ],
    "notes": "Discuss the clinical decision, then review the answer rationale and the following lecture pages."
  },
  {
    "id": "differential",
    "chapter": "02 / Differential Diagnosis: Psychiatric Conditions",
    "title": "Differential Diagnosis: Psychiatric Conditions",
    "difficulty": "Clinical application",
    "prompt": "A 61-year-old with new depressive symptoms also has constipation, cold intolerance, weight gain, and a slow pulse. Which targeted investigation best addresses a possible medical contributor?",
    "options": [
      "Routine brain MRI",
      "Commercial stool microbiome testing",
      "TSH, with additional thyroid testing as indicated",
      "A broad autoimmune panel for every patient"
    ],
    "sources": [
      "va",
      "canmat",
      "dsm"
    ],
    "notes": "Discuss the clinical decision, then review the answer rationale and the following lecture pages."
  },
  {
    "id": "mechanisms",
    "chapter": "03 / Etiology and Pathophysiology of MDD",
    "title": "Etiology and Pathophysiology of MDD",
    "difficulty": "Clinical application",
    "prompt": "A patient asks why an SSRI can affect neurotransmission quickly while mood improvement may take several weeks. Which explanation is most accurate?",
    "options": [
      "The delay proves that depression is caused by low serotonin",
      "Clinical benefit may involve downstream changes in circuits and neuroplasticity",
      "The medication cannot enter the brain until several weeks have passed",
      "Response to the medication identifies a measurable serotonin deficiency"
    ],
    "sources": [
      "gut",
      "canmat"
    ],
    "notes": "Discuss the clinical decision, then review the answer rationale and the following lecture pages."
  },
  {
    "id": "measurement",
    "chapter": "04 / PHQ-9: Screening and Severity Interpretation",
    "title": "PHQ-9: Screening and Severity Interpretation",
    "difficulty": "Clinical application",
    "prompt": "A patient’s PHQ-9 falls from 22 to 10 after treatment. They still have anhedonia and impaired concentration. How should the symptom-score change be classified?",
    "options": [
      "Remission because the score fell by more than 10 points",
      "No meaningful improvement because the score remains at least 10",
      "Treatment response without symptom remission",
      "Treatment resistance requiring an immediate procedural treatment"
    ],
    "sources": [
      "phq",
      "va"
    ],
    "notes": "Discuss the clinical decision, then review the answer rationale and the following lecture pages."
  },
  {
    "id": "safety",
    "chapter": "05 / Suicide Risk: Direct Clinical Assessment",
    "title": "Suicide Risk: Direct Clinical Assessment",
    "difficulty": "Clinical application",
    "prompt": "A patient reports current suicidal intent, a feasible plan, and access to means. They agree to sign a promise not to act and say a relative can check on them tomorrow. What is the most appropriate disposition?",
    "options": [
      "Routine follow-up in 4 weeks after documenting the promise",
      "Outpatient care because a protective factor overrides intent",
      "Increase the antidepressant and reassess after the next dose",
      "Arrange urgent emergency assessment and an appropriate level of care"
    ],
    "sources": [
      "va"
    ],
    "notes": "Discuss the clinical decision, then review the answer rationale and the following lecture pages."
  },
  {
    "id": "comorbidity",
    "chapter": "06 / Psychiatric and Medical Comorbidity",
    "title": "Psychiatric and Medical Comorbidity",
    "difficulty": "Clinical application",
    "prompt": "An adult with MDD has prominent insomnia, low appetite, and unwanted weight loss. They prefer medication and accept possible appetite and weight increases. Which option has an adverse-effect profile that may best fit these priorities?",
    "options": [
      "Bupropion",
      "Fluoxetine",
      "Mirtazapine",
      "Venlafaxine XR"
    ],
    "sources": [
      "va",
      "canmat"
    ],
    "notes": "Discuss the clinical decision, then review the answer rationale and the following lecture pages."
  },
  {
    "id": "firstline",
    "chapter": "07 / Initial Adult Treatment: Guideline Framework",
    "title": "Initial Adult Treatment: Guideline Framework",
    "difficulty": "Clinical application",
    "prompt": "An adult with moderate MDD prefers psychotherapy, can access CBT, and has no psychosis, inability to maintain intake, or acute safety concern. Under the ACP framework, what is a reasonable initial plan?",
    "options": [
      "Offer CBT with symptom, function, and safety follow-up",
      "Require medication before allowing psychotherapy",
      "Defer treatment until a severe episode develops",
      "Use an antipsychotic alone as routine initial treatment"
    ],
    "sources": [
      "acp",
      "va"
    ],
    "notes": "Discuss the clinical decision, then review the answer rationale and the following lecture pages."
  },
  {
    "id": "therapy",
    "chapter": "08 / Psychotherapy: Mechanisms and Clinical Application",
    "title": "Psychotherapy: Mechanisms and Clinical Application",
    "difficulty": "Clinical application",
    "prompt": "A patient’s depression followed a divorce and a difficult transition to living alone. They want structured work focused on relationship loss and changing interpersonal roles. Which therapy most directly targets that focus?",
    "options": [
      "CBT for insomnia",
      "Exposure and response prevention",
      "Dialectical behavior therapy focused on self-harm",
      "Interpersonal therapy"
    ],
    "sources": [
      "aacap",
      "canmat",
      "va"
    ],
    "notes": "Discuss the clinical decision, then review the answer rationale and the following lecture pages."
  },
  {
    "id": "medications",
    "chapter": "09 / First-Line Antidepressants: Selection Principles",
    "title": "First-Line Antidepressants: Selection Principles",
    "difficulty": "Clinical application",
    "prompt": "A 35-year-old with MDD requests bupropion because of sexual adverse effects with a prior SSRI. They have a history of bulimia nervosa, now in remission. Which factor most directly argues against prescribing bupropion?",
    "options": [
      "Any prior exposure to an SSRI",
      "The history of bulimia nervosa, because of seizure risk",
      "The possibility that sexual function could improve",
      "The preference for a medication with less weight gain"
    ],
    "sources": [
      "va",
      "acp",
      "bupropion"
    ],
    "notes": "Discuss the clinical decision, then review the answer rationale and the following lecture pages."
  },
  {
    "id": "followup",
    "chapter": "10 / Early Follow-Up After Starting an Antidepressant",
    "title": "Early Follow-Up After Starting an Antidepressant",
    "difficulty": "Clinical application",
    "prompt": "A 40-year-old with MDD has taken sertraline 25 mg/day for 2 weeks, missing several doses. Symptoms persist, but there is no activation or acute safety concern. Under the VA/DoD framework, what is the best interpretation before changing treatments?",
    "options": [
      "This establishes failure of an adequate maximized antidepressant trial",
      "Two weeks is enough to diagnose treatment-resistant depression",
      "First verify adherence and optimize tolerable treatment; dose and exposure are not yet adequate",
      "Unchanged symptoms at 2 weeks require immediate ECT"
    ],
    "sources": [
      "va"
    ],
    "notes": "Discuss the clinical decision, then review the answer rationale and the following lecture pages."
  },
  {
    "id": "pediatrics",
    "chapter": "11 / Pediatric Depression: Assessment and Treatment",
    "title": "Pediatric Depression: Assessment and Treatment",
    "difficulty": "Clinical application",
    "prompt": "A 9-year-old with significant MDD is being evaluated by child psychiatry after appropriate psychotherapy and safety assessment. Which listed medication has a US MDD indication at this age?",
    "options": [
      "Sertraline",
      "Escitalopram",
      "Fluoxetine",
      "Venlafaxine"
    ],
    "sources": [
      "aacap",
      "escitalopram"
    ],
    "notes": "Discuss the clinical decision, then review the answer rationale and the following lecture pages."
  },
  {
    "id": "novel",
    "chapter": "12 / Novel Pharmacotherapy: Distinct Indications",
    "title": "Novel Pharmacotherapy: Distinct Indications",
    "difficulty": "Clinical application",
    "prompt": "An adult with TRD cannot tolerate an oral antidepressant and asks whether that automatically rules out intranasal esketamine. Which statement reflects the current US TRD indication?",
    "options": [
      "An oral antidepressant is mandatory under every esketamine indication",
      "The TRD indication requires a concurrent antipsychotic",
      "Zuranolone is the general substitute for all adult TRD",
      "Adult TRD permits esketamine monotherapy in the required supervised setting"
    ],
    "sources": [
      "auvelity",
      "zuranolone",
      "spravato"
    ],
    "notes": "Discuss the clinical decision, then review the answer rationale and the following lecture pages."
  },
  {
    "id": "trd",
    "chapter": "13 / Treatment-Resistant Depression: Definition",
    "title": "Treatment-Resistant Depression: Definition",
    "difficulty": "Clinical reasoning",
    "prompt": "A 46-year-old has persistent unipolar MDD and is referred for possible treatment resistance. Adherence has been verified. Which treatment history best establishes two adequate antidepressant trials in the current episode?",
    "options": [
      "Inadequate response to escitalopram 20 mg/day for 8 weeks, then duloxetine 60 mg/day for 8 weeks",
      "Sertraline stopped after 5 days of nausea, followed by 3 doses of bupropion",
      "Persistent symptoms after 4 weeks of psychotherapy without medication trials",
      "Two antidepressant prescriptions filled but taken only intermittently"
    ],
    "sources": [
      "ketamine",
      "va",
      "canmat"
    ],
    "notes": "Discuss the clinical decision, then review the answer rationale and the following lecture pages."
  },
  {
    "id": "procedures",
    "chapter": "14 / ECT and Repetitive Transcranial Magnetic Stimulation",
    "title": "ECT and Repetitive Transcranial Magnetic Stimulation",
    "difficulty": "Clinical reasoning",
    "prompt": "A patient with severe psychotic depression is refusing food and fluids. Only one antidepressant has been tried. Which specialist treatment should be considered promptly because of the severity and urgency?",
    "options": [
      "Delay specialist treatment until three further medication trials are completed",
      "Use a benzodiazepine alone as definitive depression treatment",
      "Wait for an adequate course of routine outpatient rTMS before considering other options",
      "ECT, alongside medical stabilization and an appropriate care setting"
    ],
    "sources": [
      "va",
      "ketamine",
      "spravato",
      "canmat"
    ],
    "notes": "Discuss the clinical decision, then review the answer rationale and the following lecture pages."
  },
  {
    "id": "maintenance",
    "chapter": "15 / Response, Remission, Recovery, and Relapse",
    "title": "Response, Remission, Recovery, and Relapse",
    "difficulty": "Clinical reasoning",
    "prompt": "A patient has taken an effective antidepressant for 4 months but first reached remission 2 weeks ago. Prior episodes caused major impairment. Which continuation plan is most appropriate?",
    "options": [
      "Stop now because the patient is in remission",
      "Stop in 2 months to complete 6 months from the first dose",
      "Continue the effective dose for at least 6 months after remission, with longer maintenance considered according to risk",
      "Taper immediately to prevent future withdrawal"
    ],
    "sources": [
      "va"
    ],
    "notes": "Discuss the clinical decision, then review the answer rationale and the following lecture pages."
  },
  {
    "id": "lifestyle",
    "chapter": "16 / Lifestyle Interventions: Clinical Prescription",
    "title": "Lifestyle Interventions: Clinical Prescription",
    "difficulty": "Clinical reasoning",
    "prompt": "A patient with MDD eats few vegetables or legumes and is largely inactive. They want specific food and exercise changes alongside treatment. Which plan best matches the evidence reviewed in the lecture?",
    "options": [
      "A Mediterranean-style, fiber-rich eating pattern plus regular walking or another achievable form of exercise",
      "A restrictive ketogenic diet as the only proven dietary treatment for MDD",
      "A probiotic alone, because gut microbes explain all antidepressant benefit",
      "Avoid exercise until motivation and mood have fully recovered"
    ],
    "sources": [
      "lifestyle",
      "smiles",
      "exercise",
      "gut"
    ],
    "notes": "Discuss the clinical decision, then review the answer rationale and the following lecture pages."
  },
  {
    "id": "microbiome",
    "chapter": "17 / Nutraceuticals: Evidence and Clinical Boundaries",
    "title": "Nutraceuticals: Evidence and Clinical Boundaries",
    "difficulty": "Clinical reasoning",
    "prompt": "A patient taking sertraline asks whether a positive trial of one probiotic means any commercial probiotic can replace their medication. Which counseling response best reflects current evidence?",
    "options": [
      "All probiotic products can be assumed to have the same antidepressant effect",
      "Benefits may be formulation-specific and adjunctive; discuss uncertainty without replacing established treatment",
      "A commercial stool test routinely identifies the best antidepressant",
      "A plausible gut–brain mechanism is sufficient to prove clinical benefit"
    ],
    "sources": [
      "gut",
      "supplements",
      "canmat"
    ],
    "notes": "Discuss the clinical decision, then review the answer rationale and the following lecture pages."
  }
];
LESSONS.forEach(l=>{l.pages=LECTURE_DETAILS[l.id];});
export const DECK_VERSION="mdd-2026-10-v8";
