// Public practice-mode answer key. Live scoring uses the protected database copy.
export const ANSWERS = {
  "mdd": {
    "truth": [
      false,
      true,
      true
    ],
    "why": [
      "A positive screen identifies symptoms; it does not establish episode criteria or exclude alternative diagnoses.",
      "Confirm a sustained change from baseline, the required duration, and clinically significant distress or impairment.",
      "A depressive episode can occur in bipolar disorder. A manic/hypomanic history changes the diagnostic and treatment framework."
    ]
  },
  "criteria": {
    "truth": [
      true,
      false,
      true
    ],
    "why": [
      "Depressed mood plus sleep, energy, guilt, and concentration symptoms reaches five symptom domains; exclusions and full frequency criteria still need assessment.",
      "Psychomotor change must be observable by others, rather than subjective restlessness alone.",
      "Bereavement and an episode can coexist. Apply the full diagnostic assessment rather than automatically excluding MDD."
    ]
  },
  "specifiers": {
    "truth": [
      true,
      true,
      false
    ],
    "why": [
      "Atypical features require mood reactivity plus at least two qualifying features; hypersomnia and increased appetite fit that pattern.",
      "Nonreactive mood plus three associated melancholic features supports the specifier, when the full criteria are met.",
      "These overlapping symptoms alone do not establish mixed features; assess qualifying manic/hypomanic symptoms."
    ]
  },
  "patterns": {
    "truth": [
      false,
      false,
      true
    ],
    "why": [
      "The adult duration threshold is at least 2 years; the youth threshold is at least 1 year, with the remaining criteria assessed.",
      "DSM peripartum onset includes pregnancy or the first 4 weeks postpartum. Eight-week onset may fit broader clinical postpartum frameworks.",
      "A single winter episode is insufficient. Assess the required seasonal pattern over the last 2 years and its predominance across the lifetime."
    ]
  },
  "differential": {
    "truth": [
      false,
      true,
      false
    ],
    "why": [
      "Sleep apnea, substance effects, and other contributors can coexist with depression and need targeted assessment.",
      "Clarify the duration, activity/mood change, impairment, and context of those episodes before assuming unipolar MDD.",
      "Use history and examination to guide investigations rather than ordering an indiscriminate panel."
    ]
  },
  "mechanisms": {
    "truth": [
      false,
      true,
      false
    ],
    "why": [
      "Response to a drug does not establish a simple deficiency as the cause of illness.",
      "Current models involve interacting genetic, environmental, circuit, stress-system, and neurotransmission factors.",
      "Routine inflammatory testing has not been established as a reliable way to diagnose MDD or select an antidepressant."
    ]
  },
  "measurement": {
    "truth": [
      true,
      false,
      true
    ],
    "why": [
      "(18 − 9) ÷ 18 = 50%, meeting the commonly used response threshold.",
      "Remission commonly requires PHQ-9 <5. A meaningful decrease and a treatment response are different from remission.",
      "Assess persistent symptoms, functioning, tolerability, adherence, and safety before deciding the next step."
    ]
  },
  "safety": {
    "truth": [
      false,
      true,
      false
    ],
    "why": [
      "A no-suicide contract does not replace risk assessment, safety planning, or an appropriate disposition.",
      "Current intent with a feasible plan and access to means requires urgent evaluation and an appropriate level of care.",
      "Protective factors inform the overall assessment but do not cancel acute intent, preparation, or access to means."
    ]
  },
  "comorbidity": {
    "truth": [
      true,
      true,
      false
    ],
    "why": [
      "Sedation and increased appetite/weight may be useful or undesirable depending on the patient; discuss the tradeoffs.",
      "Comorbid pain may favor an SNRI with a relevant indication, alongside BP monitoring and other patient-specific considerations.",
      "Symptom matching informs shared decisions but cannot guarantee an individual response or remission."
    ]
  },
  "firstline": {
    "truth": [
      true,
      false,
      true
    ],
    "why": [
      "ACP supports CBT or a second-generation antidepressant for initial treatment of moderate to severe adult MDD.",
      "Medication is not mandatory for every moderate episode; incorporate severity, functioning, preferences, and clinical context.",
      "ACP conditionally supports combination treatment; discuss potential benefits, burdens, and the patient’s preference."
    ]
  },
  "therapy": {
    "truth": [
      true,
      true,
      false
    ],
    "why": [
      "CBT uses cognitive and behavioral strategies to assess maladaptive interpretations and avoidance.",
      "Interpersonal therapy addresses grief, role transitions, disputes, and related interpersonal difficulties.",
      "Behavioral activation uses graded achievable activity; action can precede improvement in motivation."
    ]
  },
  "medications": {
    "truth": [
      false,
      true,
      false
    ],
    "why": [
      "Current or prior bulimia/anorexia is a contraindication to bupropion because of seizure risk.",
      "This is the usual adult therapeutic range; the starting dose and titration still require individualization.",
      "The labeled MDD maximum for venlafaxine XR capsules is 225 mg/day. Do not transfer an immediate-release dosing figure to XR."
    ]
  },
  "followup": {
    "truth": [
      true,
      false,
      true
    ],
    "why": [
      "NICE advises review within 1 week for this age group, and earlier assessment if clinical risk requires it.",
      "Five days does not establish an adequate antidepressant trial. Assess dose, adherence, tolerability, and sufficient treatment exposure.",
      "Early improvement helps predict later response; its absence prompts reassessment rather than automatic labeling as TRD."
    ]
  },
  "pediatrics": {
    "truth": [
      true,
      false,
      true
    ],
    "why": [
      "Fluoxetine is approved from age 8 and escitalopram from age 12 for MDD; eligibility does not replace individualized selection.",
      "The warning requires informed counseling, safety planning, and monitoring rather than an absolute prohibition.",
      "Pediatric care addresses family/school context and evidence-based therapy, with monitoring for suicidality, activation, adherence, and functioning."
    ]
  },
  "novel": {
    "truth": [
      true,
      false,
      false
    ],
    "why": [
      "The adult TRD indication permits esketamine alone or with an oral antidepressant, in the required supervised setting.",
      "This separate indication requires an oral antidepressant. It does not establish prevention of suicide or remove the need for appropriate hospitalization.",
      "Zuranolone is approved for adult postpartum depression, not broadly for all adult MDD."
    ]
  },
  "nonresponse": {
    "truth": [
      true,
      false,
      true
    ],
    "why": [
      "A tolerable treatment with partial benefit may be optimized while reassessing diagnosis and contributors.",
      "There is no universal requirement to switch first. Weigh optimization, switching, and augmentation against response, adverse effects, and preferences.",
      "Psychotherapy can augment a helpful but incomplete medication response; assess access and patient preference."
    ]
  },
  "trd": {
    "truth": [
      true,
      false,
      true
    ],
    "why": [
      "The usual operational definition involves inadequate response to at least two adequate trials in the current episode; verify diagnosis and trial details.",
      "Lithium requires serum levels and appropriate renal, thyroid, calcium, interaction, pregnancy, and toxicity assessment.",
      "Assess akathisia/EPS and monitor weight, BP, glucose/A1c, and lipids as appropriate for antipsychotic augmentation."
    ]
  },
  "procedures": {
    "truth": [
      true,
      false,
      false
    ],
    "why": [
      "Severity, psychosis, poor intake, and urgency can justify early ECT consideration. Address medical stabilization and the appropriate care setting.",
      "rTMS is a noninvasive outpatient treatment and generally does not require general anesthesia; repeated sessions and safety screening are needed.",
      "IV racemic ketamine is used off-label for depression. Its regulatory status differs from intranasal esketamine."
    ]
  },
  "maintenance": {
    "truth": [
      false,
      true,
      true
    ],
    "why": [
      "Continuation duration is counted after remission, not from treatment initiation; two further months would not meet that usual minimum.",
      "Continue the effective antidepressant dose for at least 6 months after remission, with ongoing review.",
      "Recurrent, severe, chronic, or difficult-to-treat illness and residual symptoms can favor extended maintenance."
    ]
  },
  "lifestyle": {
    "truth": [
      true,
      false,
      true
    ],
    "why": [
      "A specific graded goal, such as a short walk several days weekly, is a practical starting point and can complement other indicated care.",
      "NNTs from separate populations, comparators, and outcomes do not establish head-to-head superiority.",
      "Address sleep/circadian contributors and consider CBT-I for persistent insomnia when accessible."
    ]
  },
  "microbiome": {
    "truth": [
      false,
      true,
      false
    ],
    "why": [
      "Strain/formulation, dose, population, and trial design matter; findings do not generalize automatically to every product.",
      "St John’s wort has important serotonergic and metabolic interactions. Do not add it casually to an SSRI.",
      "Routine stool-guided antidepressant selection is not established. Mechanistic interest does not establish clinical utility."
    ]
  }
};
