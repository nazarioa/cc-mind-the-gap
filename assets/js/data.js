"use strict";

var slide_3_1_0_data = [
  {
    "Major": "Business & Marketing",
    "Percent": 0.17,
    "TopProviders": "CSU, Nonprofits",
    "Rank2004": "1 (20%) No Change",
    "ColorInactive" : "#e3e3e3",
    "ColorActive" : "#e3e3e3"
  },
  {
    "Major": "Social Sciences (various)",
    "Percent":  0.12,
    "TopProviders": "UC, Nonprofits",
    "Rank2004": "2 (12%) No Change",
    "ColorInactive" : "#e3e3e3",
    "ColorActive" : "#e3e3e3"
  },
  {
    "Major": "Psychology",
    "Percent":  0.08,
    "TopProviders": "CSU, UC",
    "Rank2004": "3 (7%) Decreased",
    "ColorInactive" : "#e3e3e3",
    "ColorActive" : "#e3e3e3"
  },
  {
    "Major": "Visual & Performing Arts",
    "Percent":  0.07,
    "TopProviders": "CSU, Nonprofits",
    "Rank2004": "3 (7%) Decreased",
    "ColorInactive" : "#e3e3e3",
    "ColorActive" : "#e3e3e3"
  },
  {
    "Major": "Biology",
    "Percent":  0.07,
    "TopProviders": "UC, CSU",
    "Rank2004": "6 (5%) Increased",
    "ColorInactive" : "#e3e3e3",
    "ColorActive" : "#e3e3e3"
  },
  {
    "Major": "Health Professions",
    "Percent":  0.07,
    "TopProviders": "CSU, Nonprofits",
    "Rank2004": "11 (3%) Increased",
    "ColorInactive" : "#e3e3e3",
    "ColorActive" : "#e3e3e3"
  },
  {
    "Major": "Engineering",
    "Percent":  0.06,
    "TopProviders": "CSU, UC",
    "Rank2004": "7 (5%) No Change",
    "ColorInactive" : "#e3e3e3",
    "ColorActive" : "#e3e3e3"
  },
  {
    "Major": "Communication",
    "Percent":  0.04,
    "TopProviders": "CSU, Nonprofits",
    "Rank2004": "10 (4%) Increased",
    "ColorInactive" : "#e3e3e3",
    "ColorActive" : "#e3e3e3"
  },
  {
    "Major": "English",
    "Percent":  0.04,
    "TopProviders": "CSU, UC",
    "Rank2004": "9 (4%) No Change",
    "ColorInactive" : "#e3e3e3",
    "ColorActive" : "#e3e3e3"
  },
  {
    "Major": "Liberal Arts",
    "Percent":  0.03,
    "TopProviders": "CSU, Nonprofits",
    "Rank2004": "4 (7%) Decreased",
    "ColorInactive" : "#e3e3e3",
    "ColorActive" : "#e3e3e3"
  },
  {
    "Major": "Computer & Information Sciences",
    "Percent":  0.02,
    "TopProviders": "For-Profits, CSU",
    "Rank2004": "8 (5%) Decreased",
    "ColorInactive" : "#e3e3e3",
    "ColorActive" : "#e3e3e3"
  },
  {
    "Major": "Other",
    "Percent":  .23,
    "TopProviders": "",
    "Rank2004": "",
    "ColorInactive" : "#e3e3e3",
    "ColorActive" : "#e3e3e3"
  }
];

var slide_3_3_0_data = [
  {"Ethicity": "American Indian/Alaska Native",
    "UC": 188,
    "CSU": 414,
    "NonProfit": 209,
    "ForProfit": 81
  },
  {"Ethicity": "Asian",
    "UC": 17374,
    "CSU": 13413,
    "NonProfit": 4757,
    "ForProfit": 1477
  },
  {"Ethicity": "Asian",
    "UC": 17374,
    "CSU": 13413,
    "NonProfit": 4757,
    "ForProfit": 1477
  },
  {"Ethicity": "Black/African American",
    "UC": 1397,
    "CSU": 3602,
    "NonProfit": 1754,
    "ForProfit": 1211
  },
  {"Ethicity": "Hispanic/Latino",
    "UC": 8488,
    "CSU": 21686,
    "NonProfit": 6694,
    "ForProfit": 3259
  },
  {"Ethicity": "Native Hawaiian or Other Pacific Islander",
    "UC": 149,
    "CSU": 597,
    "NonProfit": 234,
    "ForProfit": 174
  },
  {"Ethicity": "White",
    "UC": 15798,
    "CSU": 28990,
    "NonProfit": 17046,
    "ForProfit": 3279
  },
  {"Ethicity": "Two or more races",
    "UC": 950,
    "CSU": 2506,
    "NonProfit": 1281,
    "ForProfit": 184
  },
  {"Ethicity": "Unknown",
    "UC": 2518,
    "CSU": 7576,
    "NonProfit": 2330,
    "ForProfit": 3294
  },
  {"Ethicity": "Nonresident alien",
    "UC": 2084,
    "CSU": 3019,
    "NonProfit": 2074,
    "ForProfit": 506
  }
];


var dataYellowSlide = {
    "Overall rank": {
        "Business, Management, Marketing & Related Support Services": 1,
        "Social Sciences": 2,
        "Psychology": 3,
        "Visual & Performing Arts": 4,
        "Biological&BiomedicalSciences": 5,
        "Health Professions & Related Programs": 6,
        "Engineering": 7,
        "Communication, Journalism & Related Programs": 8,
        "English Language & Literature/Letters": 9,
        "Liberal Arts and Sciences, General Studies & Humanities": 10,
        "Homeland Security, Law Enforcement, Firefighting & Related Protective Service": 11,
        "Computer & Information Sciences ": 12,
        "Parks, Recreation, Leisure & Fitness Studies": 13
    },
    "American Indian/Alaska Native": {
        "Business, Management, Marketing & Related Support Services": 1,
        "Social Sciences": 2,
        "Psychology": 4,
        "Visual & Performing Arts": 3,
        "Biological&BiomedicalSciences": 6,
        "Health Professions & Related Programs": 5,
        "Engineering": 9,
        "Communication, Journalism & Related Programs": 8,
        "English Language & Literature/Letters": 10,
        "Liberal Arts and Sciences, General Studies & Humanities": 7,
        "Homeland Security, Law Enforcement, Firefighting & Related Protective Service": 13,
        "Computer & Information Sciences ": 17,
        "Parks, Recreation, Leisure & Fitness Studies": 12
    },
    "Asian": {
        "Business, Management, Marketing & Related Support Services": 1,
        "Social Sciences": 3,
        "Psychology": 6,
        "Visual & Performing Arts": 7,
        "Biological&BiomedicalSciences": 2,
        "Health Professions & Related Programs": 4,
        "Engineering": 5,
        "Communication, Journalism & Related Programs": 8,
        "English Language & Literature/Letters": 12,
        "Liberal Arts and Sciences, General Studies & Humanities": 15,
        "Homeland Security, Law Enforcement, Firefighting & Related Protective Service": 18,
        "Computer & Information Sciences ": 9,
        "Parks, Recreation, Leisure & Fitness Studies": 14
    },
    "Black/African American": {
        "Business, Management, Marketing & Related Support Services": 1,
        "Social Sciences": 2,
        "Psychology": 3,
        "Visual & Performing Arts": 5,
        "Biological&BiomedicalSciences": 8,
        "Health Professions & Related Programs": 4,
        "Engineering": 15,
        "Communication, Journalism & Related Programs": 6,
        "English Language & Literature/Letters": 9,
        "Liberal Arts and Sciences, General Studies & Humanities": 12,
        "Homeland Security, Law Enforcement, Firefighting & Related Protective Service": 7,
        "Computer & Information Sciences ": 11,
        "Parks, Recreation, Leisure & Fitness Studies": 16
    },
    "Hispanic/Latino": {
        "Business, Management, Marketing & Related Support Services": 1,
        "Social Sciences": 2,
        "Psychology": 3,
        "Visual & Performing Arts": 4,
        "Biological&BiomedicalSciences": 9,
        "Health Professions & Related Programs": 5,
        "Engineering": 11,
        "Communication, Journalism & Related Programs": 8,
        "English Language & Literature/Letters": 10,
        "Liberal Arts and Sciences, General Studies & Humanities": 7,
        "Homeland Security, Law Enforcement, Firefighting & Related Protective Service": 6,
        "Computer & Information Sciences ": 19,
        "Parks, Recreation, Leisure & Fitness Studies": 15
    },
    "Native Hawaiian or Other Pacific Islander": {
        "Business, Management, Marketing & Related Support Services": 1,
        "Social Sciences": 4,
        "Psychology": 6,
        "Visual & Performing Arts": 7,
        "Biological&BiomedicalSciences": 5,
        "Health Professions & Related Programs": 2,
        "Engineering": 3,
        "Communication, Journalism & Related Programs": 9,
        "English Language & Literature/Letters": 12,
        "Liberal Arts and Sciences, General Studies & Humanities": 13,
        "Homeland Security, Law Enforcement, Firefighting & Related Protective Service": 9,
        "Computer & Information Sciences ": 8,
        "Parks, Recreation, Leisure & Fitness Studies": 11
    },
    "White": {
        "Business, Management, Marketing & Related Support Services": 1,
        "Social Sciences": 2,
        "Psychology": 4,
        "Visual & Performing Arts": 3,
        "Biological&BiomedicalSciences": 6,
        "Health Professions & Related Programs": 5,
        "Engineering": 8,
        "Communication, Journalism & Related Programs": 7,
        "English Language & Literature/Letters": 9,
        "Liberal Arts and Sciences, General Studies & Humanities": 10,
        "Homeland Security, Law Enforcement, Firefighting & Related Protective Service": 17,
        "Computer & Information Sciences ": 14,
        "Parks, Recreation, Leisure & Fitness Studies": 11
    },
    "Two or more races": {
        "Business, Management, Marketing & Related Support Services": 2,
        "Social Sciences": 1,
        "Psychology": 3,
        "Visual & Performing Arts": 3,
        "Biological&BiomedicalSciences": 7,
        "Health Professions & Related Programs": 5,
        "Engineering": 9,
        "Communication, Journalism & Related Programs": 6,
        "English Language & Literature/Letters": 8,
        "Liberal Arts and Sciences, General Studies & Humanities": 10,
        "Homeland Security, Law Enforcement, Firefighting & Related Protective Service": 14,
        "Computer & Information Sciences ": 15,
        "Parks, Recreation, Leisure & Fitness Studies": 11
    },
    "Unknown": {
        "Business, Management, Marketing & Related Support Services": 1,
        "Social Sciences": 2,
        "Psychology": 5,
        "Visual & Performing Arts": 3,
        "Biological&BiomedicalSciences": 6,
        "Health Professions & Related Programs": 4,
        "Engineering": 7,
        "Communication, Journalism & Related Programs": 9,
        "English Language & Literature/Letters": 10,
        "Liberal Arts and Sciences, General Studies & Humanities": 8,
        "Homeland Security, Law Enforcement, Firefighting & Related Protective Service": 11,
        "Computer & Information Sciences ": 12,
        "Parks, Recreation, Leisure & Fitness Studies": 13
    },
    "Nonresident alien": {
        "Business, Management, Marketing & Related Support Services": 1,
        "Social Sciences": 2,
        "Psychology": 5,
        "Visual & Performing Arts": 3,
        "Biological&BiomedicalSciences": 6,
        "Health Professions & Related Programs": 10,
        "Engineering": 4,
        "Communication, Journalism & Related Programs": 7,
        "English Language & Literature/Letters": 15,
        "Liberal Arts and Sciences, General Studies & Humanities": 13,
        "Homeland Security, Law Enforcement, Firefighting & Related Protective Service": 27,
        "Computer & Information Sciences ": 9,
        "Parks, Recreation, Leisure & Fitness Studies": 17
    }
}

var slide_3_4_0_data = [
  ["UC", 21.22],
  ["CSU", 19.63],
  ["Non-Profit", 19.03],
  ["For Profit", 39.72]
];

var slide_3_4_1_data = {
  "2004" : {"UC": 38558, "CSU": 65743, "NonProfit":29455, "ForProfit":8117},
  "2005" : {"UC": 40851, "CSU": 66768, "NonProfit":30185, "ForProfit":8469},
  "2006" : {"UC": 41639, "CSU": 69361, "NonProfit":30631, "ForProfit":8751},
  "2007" : {"UC": 41587, "CSU": 71074, "NonProfit":31040, "ForProfit":9094},
  "2008" : {"UC": 42416, "CSU": 73762, "NonProfit":31990, "ForProfit":10071},
  "2009" : {"UC": 42664, "CSU": 74643, "NonProfit":31343, "ForProfit":11949},
  "2010" : {"UC": 44856, "CSU": 75419, "NonProfit":31435, "ForProfit":12350},
  "2011" : {"UC": 46935, "CSU": 77731, "NonProfit":32892, "ForProfit":12045},
  "2012" : {"UC": 48899, "CSU": 76427, "NonProfit":34889, "ForProfit":12281},
  "2013" : {"UC": 48946, "CSU": 81803, "NonProfit":36378, "ForProfit":13465}
}

var slide_4_4_0_data = [
  ["Non-Profit", 9.66],
  ["Community College", 39.72],
  ["For Profit", 54.35]
];
