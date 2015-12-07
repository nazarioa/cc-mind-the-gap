"use strict";

// Generic Data
var genericEthnicityData = {
  "aai" : {
    "Name": "American Indian/Alaska Native",
    "ActiveColor": '#a6a8ab',
  },
  "asn" : {
    "Name": "Asian",
    "ActiveColor": '#a73e3f',
  },
  "blk": {
    "Name": 'Black/African American',
    "ActiveColor": '#ca6d54',
  },
  "hsp" : {
    "Name": "Hispanic/Latino",
    "ActiveColor": '#9fa76b',
  },
  "nhp" : {
    "Name": "Native Hawaiian or Other Pacific Islander",
    "ActiveColor": '#00736b',
  },
  "wht" : {
    "Name": "White",
    "ActiveColor": '#c7a51c',
  },
  "tw" : {
    "Name": "Two or more races",
    "ActiveColor": '#a2c6d4',
  },
  "unk" : {
    "Name": "Unknown",
    "ActiveColor": '#37758c',
  },
  "nra" : {
    "Name": "Nonresident alien",
    "ActiveColor": '#5c180c'
  },
};

var genericInstitutionData = {
  'uc': {
    'Name': 'UC',
    'ActiveColor': '#37758c',
    'InactiveColor': '#',
  },
  'csu': {
    'Name': 'CSU',
    'ActiveColor': '#c7a51c',
    'InactiveColor': '#',
  },
  'nonprofit': {
    'Name': 'Non-Profits',
    'ActiveColor': '#9fa76b',
    'InactiveColor': '#',
  },
  'forprofit': {
    'Name': 'For Profits',
    'ActiveColor': '#c46d26',
    'InactiveColor': '#',
  },
  'cc': {
    'Name': 'Community College',
    'ActiveColor': '#5c180c',
    'InactiveColor': '#',
  },
}

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

var slide_3_2_0_data = [
  {
    "Major": "Computer Science",
    "ColorActive": '#37758c',
    "Y2004":{
      'uc': 687,
      'csu': 687,
      'nonprofit': 343,
      'forprofit': 3,
    },
    "Y2013": {
      'uc': 907,
      'csu': 798,
      'nonprofit': 321,
      'forprofit': 44
    },
  },
  {
    "Major": "CIS, General",
    "ColorActive": '#9fa76b',
    "Y2004":{
      'uc': 599,
      'csu': 223,
      'nonprofit': 453,
      'forprofit': 448,
    },
    "Y2013": {
      'uc': 69,
      'csu': 304,
      'nonprofit': 125,
      'forprofit': 163
    },
  },
  {
    "Major": "Computer Engineering",
    "ColorActive": '#6e6e70',
    "Y2004":{
      'uc': 550,
      'csu': 304,
      'nonprofit': 131,
      'forprofit': 18,
    },
    "Y2013": {
      'uc': 289,
      'csu': 317,
      'nonprofit': 76,
      'forprofit': 74
    },
  },
  {
    "Major": "Computer Systems Networking & Telecommunications",
    "ColorActive": '#c46d26',
    "Y2004":{
      'uc': 0,
      'csu': 0,
      'nonprofit': 0,
      'forprofit': 611,
    },
    "Y2013": {
      'uc': 0,
      'csu': 0,
      'nonprofit': 97,
      'forprofit': 137
    },
  },
  {
    "Major": "Computer Software & Media Applications",
    "ColorActive": '#a2c6d4',
    "Y2004":{
      'uc': 0,
      'csu': 75,
      'nonprofit': 1,
      'forprofit': 400,
    },
    "Y2013": {
      'uc': 0,
      'csu': 36,
      'nonprofit': 62,
      'forprofit': 541
    },
  },
  {
    "Major": "Computer Systems Analysis",
    "ColorActive": '#00736b',
    "Y2004":{
      'uc': 0,
      'csu': 0,
      'nonprofit': 0,
      'forprofit': 405,
    },
    "Y2013": {
      'uc': 0,
      'csu': 0,
      'nonprofit': 0,
      'forprofit': 110
    },
  },
  {
    "Major": "CIS & Support Services, Other",
    "ColorActive": '#5c180c',
    "Y2004":{
      'uc': 33,
      'csu': 0,
      'nonprofit': 106,
      'forprofit': 70,
    },
    "Y2013": {
      'uc': 12,
      'csu': 0,
      'nonprofit': 3,
      'forprofit': 3
    },
  },
  {
    "Major": "Information Science/Studies",
    "ColorActive": '#c7a51c',
    "Y2004":{
      'uc': 11,
      'csu': 0,
      'nonprofit': 166,
      'forprofit': 0,
    },
    "Y2013": {
      'uc': 12,
      'csu': 0,
      'nonprofit': 3,
      'forprofit': 3
    },
  },
  {
    "Major": "CIT Admin & Management",
    "ColorActive": '#a73e3f',
    "Y2004":{
      'uc': 0,
      'csu': 0,
      'nonprofit': 83,
      'forprofit': 37,
    },
    "Y2013": {
      'uc': 32,
      'csu': 0,
      'nonprofit': 106,
      'forprofit': 324
    },
  },
  {
    "Major": "Computer Programming",
    "ColorActive": '#a6a8ab',
    "Y2004":{
      'uc': 0,
      'csu': 0,
      'nonprofit': 61,
      'forprofit': 15,
    },
    "Y2013": {
      'uc': 0,
      'csu': 0,
      'nonprofit': 31,
      'forprofit': 96
    },
  },
];

var slide_3_3_0_data = [
  {
    "Ethicity": "American Indian/Alaska Native",
    'uc': 188,
    'csu': 414,
    'nonprofit': 209,
    'forprofit': 81
  },
  {
    "Ethicity": "Asian",
    'uc': 17374,
    'csu': 13413,
    'nonprofit': 4757,
    'forprofit': 1477
  },
  {
    "Ethicity": "Black/African American",
    'uc': 1397,
    'csu': 3602,
    'nonprofit': 1754,
    'forprofit': 1211
  },
  {
    "Ethicity": "Hispanic/Latino",
    'uc': 8488,
    'csu': 21686,
    'nonprofit': 6694,
    'forprofit': 3259
  },
  {
    "Ethicity": "Native Hawaiian or Other Pacific Islander",
    'uc': 149,
    'csu': 597,
    'nonprofit': 234,
    'forprofit': 174
  },
  {
    "Ethicity": "White",
    'uc': 15798,
    'csu': 28990,
    'nonprofit': 17046,
    'forprofit': 3279
  },
  {
    "Ethicity": "Two or more races",
    'uc': 950,
    'csu': 2506,
    'nonprofit': 1281,
    'forprofit': 184
  },
  {
    "Ethicity": "Unknown",
    'uc': 2518,
    'csu': 7576,
    'nonprofit': 2330,
    'forprofit': 3294
  },
  {
    "Ethicity": "Nonresident alien",
    'uc': 2084,
    'csu': 3019,
    'nonprofit': 2074,
    'forprofit': 506
  }
];


var dataYellowSlide = {
  "Business, Management, Marketing & Related Support Services": {
    "Overall rank": 1,
    "American Indian/Alaska Native": 1,
    "Asian": 1,
    "Black/African American": 1,
    "Hispanic/Latino": 1,
    "Native Hawaiian or Other Pacific Islander": 1,
    "White": 1,
    "Two or more races": 2,
    "Unknown": 1,
    "Nonresident alien": 1
  },
  "Social Sciences": {
    "Overall rank": 2,
    "American Indian/Alaska Native": 2,
    "Asian": 3,
    "Black/African American": 2,
    "Hispanic/Latino": 2,
    "Native Hawaiian or Other Pacific Islander": 4,
    "White": 2,
    "Two or more races": 1,
    "Unknown": 2,
    "Nonresident alien": 2
  },
  "Psychology": {
    "Overall rank": 3,
    "American Indian/Alaska Native": 4,
    "Asian": 6,
    "Black/African American": 3,
    "Hispanic/Latino": 3,
    "Native Hawaiian or Other Pacific Islander": 6,
    "White": 4,
    "Two or more races": 3,
    "Unknown": 5,
    "Nonresident alien": 5
  },
  "Visual & Performing Arts": {
    "Overall rank": 4,
    "American Indian/Alaska Native": 3,
    "Asian": 7,
    "Black/African American": 5,
    "Hispanic/Latino": 4,
    "Native Hawaiian or Other Pacific Islander": 7,
    "White": 3,
    "Two or more races": 4,
    "Unknown": 3,
    "Nonresident alien": 3
  },
  "Biological & Biomedical Sciences": {
    "Overall rank": 5,
    "American Indian/Alaska Native": 6,
    "Asian": 2,
    "Black/African American": 8,
    "Hispanic/Latino": 9,
    "Native Hawaiian or Other Pacific Islander": 5,
    "White": 6,
    "Two or more races": 7,
    "Unknown": 6,
    "Nonresident alien": 6
  },
  "Health Professions & Related Programs": {
    "Overall rank": 6,
    "American Indian/Alaska Native": 5,
    "Asian": 4,
    "Black/African American": 4,
    "Hispanic/Latino": 5,
    "Native Hawaiian or Other Pacific Islander": 2,
    "White": 5,
    "Two or more races": 5,
    "Unknown": 4,
    "Nonresident alien": 10
  },
  "Engineering": {
    "Overall rank": 7,
    "American Indian/Alaska Native": 9,
    "Asian": 5,
    "Black/African American": 15,
    "Hispanic/Latino": 11,
    "Native Hawaiian or Other Pacific Islander": 3,
    "White": 8,
    "Two or more races": 9,
    "Unknown": 7,
    "Nonresident alien": 4
  },
  "Communication, Journalism & Related Programs": {
    "Overall rank": 8,
    "American Indian/Alaska Native": 8,
    "Asian": 8,
    "Black/African American": 6,
    "Hispanic/Latino": 8,
    "Native Hawaiian or Other Pacific Islander": 9,
    "White": 7,
    "Two or more races": 6,
    "Unknown": 9,
    "Nonresident alien": 7
  },
  "English Language & Literature/Letters": {
    "Overall rank": 9,
    "American Indian/Alaska Native": 10,
    "Asian": 12,
    "Black/African American": 9,
    "Hispanic/Latino": 10,
    "Native Hawaiian or Other Pacific Islander": 12,
    "White": 9,
    "Two or more races": 8,
    "Unknown": 10,
    "Nonresident alien": 15
  },
  "Liberal Arts and Sciences, General Studies & Humanities": {
    "Overall rank": 10,
    "American Indian/Alaska Native": 7,
    "Asian": 15,
    "Black/African American": 12,
    "Hispanic/Latino": 7,
    "Native Hawaiian or Other Pacific Islander": 13,
    "White": 10,
    "Two or more races": 10,
    "Unknown": 8,
    "Nonresident alien": 13
  },
  "Homeland Security, Law Enforcement, Firefighting & Related Protective Service": {
    "Overall rank": 11,
    "American Indian/Alaska Native": 13,
    "Asian": 18,
    "Black/African American": 7,
    "Hispanic/Latino": 6,
    "Native Hawaiian or Other Pacific Islander": 9,
    "White": 17,
    "Two or more races": 14,
    "Unknown": 11,
    "Nonresident alien": 27
  },
  "Computer & Information Sciences ": {
    "Overall rank": 12,
    "American Indian/Alaska Native": 17,
    "Asian": 9,
    "Black/African American": 11,
    "Hispanic/Latino": 19,
    "Native Hawaiian or Other Pacific Islander": 8,
    "White": 14,
    "Two or more races": 15,
    "Unknown": 12,
    "Nonresident alien": 9
  },
  "Parks, Recreation, Leisure & Fitness Studies": {
    "Overall rank": 13,
    "American Indian/Alaska Native": 12,
    "Asian": 14,
    "Black/African American": 16,
    "Hispanic/Latino": 15,
    "Native Hawaiian or Other Pacific Islander": 11,
    "White": 11,
    "Two or more races": 11,
    "Unknown": 13,
    "Nonresident alien": 17
  }
}

var slide_3_4_0_data = [
  ['uc', 21.22],
  ['csu', 19.63],
  ['nonprofit', 19.03],
  ['forprofit', 39.72]
];


var slide_3_4_1_data = [
  ["Year", "2004-01-01", "2005-01-01", "2006-01-01", "2007-01-01", "2008-01-01", "2009-01-01", "2010-01-01", "2011-01-01", "2012-01-01", "2013-01-01"],
  ['csu', 65743, 66768, 69361, 71074, 73762, 74643, 75419, 77731, 76427, 81803],
  ['uc', 38558, 40851, 41639, 41587, 42416, 42664, 44856, 46935, 48899, 48946],
  ['nonprofit', 29455, 30185, 30631, 31040, 31990, 31343, 31435, 32892, 34889, 36378],
  ['forprofit', 8117, 8469, 8751, 9094, 10071, 11949, 12350, 12045, 12281, 13465],
]

var slide_4_1_0_data = [
  {
    "Major":"Health Professions",
    "Percent":0.43,
    "Rank2004":"1 (32%) No Change",
    "TopProviders":"For-profit",
    "ColorInactive" : "",
  },
  {
    "Major":"Protective Services",
    "Percent":0.09,
    "Rank2004":"6 (7%) Increase",
    "TopProviders":"For-profit",
    "ColorInactive" : "",
  },
  {
    "Major":"Mechanic Tech/Repair",
    "Percent":0.07,
    "Rank2004":"7 (7%) Increase",
    "TopProviders":"For-profit",
    "ColorInactive" : "",
  },
  {
    "Major":"Cosmetology & Culinary",
    "Percent":0.07,
    "Rank2004":"4 (8%) No Change",
    "TopProviders":"For-profit",
    "ColorInactive" : "",
  },
  {
    "Major":"Business & Marketing",
    "Percent":0.05,
    "Rank2004":"2 (9%) Decrease",
    "TopProviders":"For-profit",
    "ColorInactive" : "",
  },
  {
    "Major":"Visual & Performing Arts",
    "Percent":0.05,
    "Rank2004":"8 (7%) Increase",
    "TopProviders":"For-profit",
    "ColorInactive" : "",
  },
  {
    "Major":"Engineering Tech",
    "Percent":0.04,
    "Rank2004":"5 (7%) Decrease",
    "TopProviders":"For-profit",
    "ColorInactive" : "",
  },
  {
    "Major":"Computer Tech",
    "Percent":0.04,
    "Rank2004":"3 (8%) Decrease",
    "TopProviders":"For-profit",
    "ColorInactive" : "",
  },
  {
    "Major":"Family & Consumer Sciences",
    "Percent":0.04,
    "Rank2004":"9 (4%) - ",
    "TopProviders":"For-profit",
    "ColorInactive" : "",
  },
  {
    "Major":"Construction Trades",
    "Percent":0.02,
    "Rank2004":"12 (1%) Increase",
    "TopProviders":"For-profit",
    "ColorInactive" : "",
  },
  {
    "Major":"Paralegal",
    "Percent":0.02,
    "Rank2004":"10 (2%) - ",
    "TopProviders":"Community Colleges",
    "ColorInactive" : "",
  },
  {
    "Major":"Other",
    "Percent":0.08,
    "ColorInactive" : "",
  }
];

var slide_4_2_0_data = [
  {
    "Major":	"Medical Assisting Services",
    "ColorActive" : "#37758c",
    "Y2013":{
      "forprofit": 10333,
      "cc": 1130,
      "nonprofit": 278,
    },
    "Y2004": {
      "forprofit": 1435,
      "cc": 501,
      "nonprofit": 36,
    },
  },
  {
    "Major":	"Registered Nursing, Nursing Admin, etc.",
    "ColorActive" : "#9fa76b",
    "Y2013":{
      "forprofit": 509,
      "cc": 5739,
      "nonprofit": 206,
    },
    "Y2004": {
      "forprofit": 1262,
      "cc": 5094,
      "nonprofit": 350,
    },
  },
  {
    "Major":	"Practical Nursing, Vocational Nursing & Nursing Assistants",
    "ColorActive" : "#c46d26",
    "Y2013":{
      "forprofit": 3374,
      "cc": 1211,
      "nonprofit": 250,
    },
    "Y2004": {
      "forprofit": null,
      "cc": null,
      "nonprofit": null,
    },
  },
  {
    "Major":	"Allied Health Diagnostic, Intervention & Treatment",
    "ColorActive" : "#5c180c",
    "Y2013":{
      "forprofit": 0,
      "cc": 1688,
      "nonprofit": 374,
    },
    "Y2004": {
      "forprofit": 1091,
      "cc": 1093,
      "nonprofit": 94,
    },
  },
  {
    "Major":	"Health & Medical Admin Services",
    "ColorActive" : "#00736b",
    "Y2013":{
      "forprofit": 0,
      "cc": 534,
      "nonprofit": 62,
    },
    "Y2004": {
      "forprofit": 478,
      "cc": 271,
      "nonprofit": 18,
    },
  },
  {
    "Major":	"Health Services, General",
    "ColorActive" : "#c7a51c",
    "Y2013":{
      "forprofit": 0,
      "cc": 160,
      "nonprofit": 25,
    },
    "Y2004": {
      "forprofit": null,
      "cc": null,
      "nonprofit": null,
    },
  },
  {
    "Major":	"Mental & Social Health Services",
    "ColorActive" : "#a6a8ab",
    "Y2013":{
      "forprofit": 451,
      "cc": 1143,
      "nonprofit": 10,
    },
    "Y2004": {
      "forprofit": null,
      "cc": 1142,
      "nonprofit": 10,
    },
  },
  {
    "Major":	"Health/Medical Prep Programs",
    "ColorActive" : "#a2c6d4",
    "Y2013":{
      "forprofit": null,
      "cc": 646,
      "nonprofit": 150,
    },
    "Y2004": {
      "forprofit": null,
      "cc": null,
      "nonprofit": 7,
    },
  },
  {
    "Major":	"Dental Support Services",
    "ColorActive" : "#6e6e70",
    "Y2013":{
      "forprofit": null,
      "cc": 751,
      "nonprofit": 8,
    },
    "Y2004": {
      "forprofit": 382,
      "cc": 595,
      "nonprofit": null,
    },
  },
  {
    "Major":	"Somatic Bodywork & Therapeutic Services",
    "ColorActive" : "#a73e3f",
    "Y2013":{
      "forprofit": 637,
      "cc": 8,
      "nonprofit": null,
    },
    "Y2004": {
      "forprofit": 130,
      "cc": null,
      "nonprofit": null,
    },
  },
];

var slide_4_4_0_data = [
  ['nonprofit', 9.66],
  ['cc', 39.72],
  ['forprofit', 54.35]
];
