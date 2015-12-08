/*jslint white: true */

"use strict";

// Generic Data
var genericEthnicityData = {
  "oth" : {
    "Name": "Overall Rank",
    "ActiveColor": "#123456",
  },
  "aai" : {
    "Name": "American Indian/Alaska Native",
    "ShortName": "American Indian",
    "ActiveColor": "#a6a8ab",
  },
  "asn" : {
    "Name": "Asian",
    "ActiveColor": "#a73e3f",
  },
  "blk": {
    "Name": "Black/African American",
    "ActiveColor": "#ca6d54",
    "ShortName": "Black",
  },
  "hsp" : {
    "Name": "Hispanic/Latino",
    "ActiveColor": "#9fa76b",
  },
  "nhp" : {
    "Name": "Native Hawaiian or Other Pacific Islander",
    "ActiveColor": "#00736b",
    "ShortName": "Other Pacific Islander",
  },
  "wht" : {
    "Name": "White",
    "ActiveColor": "#c7a51c",
  },
  "two" : {
    "Name": "Two or more races",
    "ActiveColor": "#a2c6d4",
  },
  "unk" : {
    "Name": "Unknown",
    "ActiveColor": "#37758c",
  },
  "nra" : {
    "Name": "Nonresident alien",
    "ActiveColor": "#5c180c"
  },
};

var genericInstitutionData = {
  "uc": {
    "Name": "UC",
    "ActiveColor": "#37758c",
    "InactiveColor": "#",
  },
  "csu": {
    "Name": "CSU",
    "ActiveColor": "#c7a51c",
    "InactiveColor": "#",
  },
  "nonprofit": {
    "Name": "Non-Profits",
    "ActiveColor": "#9fa76b",
    "InactiveColor": "#",
  },
  "forprofit": {
    "Name": "For Profits",
    "ActiveColor": "#c46d26",
    "InactiveColor": "#",
  },
  "cc": {
    "Name": "Community College",
    "ActiveColor": "#5c180c",
    "InactiveColor": "#",
  },
}

var slide_2_0_0_data = [
  ["Year", "Cumulative Degrees", "Degrees Added Per Year", "Projected Degrees"],
  ["2015-01-01", 0, 312836, 312836],
  ["2016-01-01", 41080, 343494, 302414],
  ["2017-01-01", 111522, 377156, 306714],
  ["2018-01-01", 218101, 414118, 307539],
  ["2019-01-01", 365584, 454701, 307218],
  ["2020-01-01", 558369, 499262, 306476],
  ["2021-01-01", 803183, 548189, 303376],
  ["2022-01-01", 1105305, 601912, 299790],
  ["2023-01-01", 1467437, 660899, 298768],
  ["2024-01-01", 1890488, 725667, 302616],
  ["2025-01-01", 2388867, 796783, 298404],
];

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
    "Percent":  0.23,
    "TopProviders": "",
    "Rank2004": "",
    "ColorInactive" : "#e3e3e3",
    "ColorActive" : "#e3e3e3"
  }
];

var slide_3_2_0_data = [
  {
    "Major": "Computer Science",
    "ColorActive": "#37758c",
    "Y2004":{
      "uc": 687,
      "csu": 687,
      "nonprofit": 343,
      "forprofit": 3,
    },
    "Y2013": {
      "uc": 907,
      "csu": 798,
      "nonprofit": 321,
      "forprofit": 44
    },
  },
  {
    "Major": "CIS, General",
    "ColorActive": "#9fa76b",
    "Y2004":{
      "uc": 599,
      "csu": 223,
      "nonprofit": 453,
      "forprofit": 448,
    },
    "Y2013": {
      "uc": 69,
      "csu": 304,
      "nonprofit": 125,
      "forprofit": 163
    },
  },
  {
    "Major": "Computer Engineering",
    "ColorActive": "#6e6e70",
    "Y2004":{
      "uc": 550,
      "csu": 304,
      "nonprofit": 131,
      "forprofit": 18,
    },
    "Y2013": {
      "uc": 289,
      "csu": 317,
      "nonprofit": 76,
      "forprofit": 74
    },
  },
  {
    "Major": "Computer Systems Networking & Telecommunications",
    "ColorActive": "#c46d26",
    "Y2004":{
      "uc": 0,
      "csu": 0,
      "nonprofit": 0,
      "forprofit": 611,
    },
    "Y2013": {
      "uc": 0,
      "csu": 0,
      "nonprofit": 97,
      "forprofit": 137
    },
  },
  {
    "Major": "Computer Software & Media Applications",
    "ColorActive": "#a2c6d4",
    "Y2004":{
      "uc": 0,
      "csu": 75,
      "nonprofit": 1,
      "forprofit": 400,
    },
    "Y2013": {
      "uc": 0,
      "csu": 36,
      "nonprofit": 62,
      "forprofit": 541
    },
  },
  {
    "Major": "Computer Systems Analysis",
    "ColorActive": "#00736b",
    "Y2004":{
      "uc": 0,
      "csu": 0,
      "nonprofit": 0,
      "forprofit": 405,
    },
    "Y2013": {
      "uc": 0,
      "csu": 0,
      "nonprofit": 0,
      "forprofit": 110
    },
  },
  {
    "Major": "CIS & Support Services, Other",
    "ColorActive": "#5c180c",
    "Y2004":{
      "uc": 33,
      "csu": 0,
      "nonprofit": 106,
      "forprofit": 70,
    },
    "Y2013": {
      "uc": 12,
      "csu": 0,
      "nonprofit": 3,
      "forprofit": 3
    },
  },
  {
    "Major": "Information Science/Studies",
    "ColorActive": "#c7a51c",
    "Y2004":{
      "uc": 11,
      "csu": 0,
      "nonprofit": 166,
      "forprofit": 0,
    },
    "Y2013": {
      "uc": 12,
      "csu": 0,
      "nonprofit": 3,
      "forprofit": 3
    },
  },
  {
    "Major": "CIT Admin & Management",
    "ColorActive": "#a73e3f",
    "Y2004":{
      "uc": 0,
      "csu": 0,
      "nonprofit": 83,
      "forprofit": 37,
    },
    "Y2013": {
      "uc": 32,
      "csu": 0,
      "nonprofit": 106,
      "forprofit": 324
    },
  },
  {
    "Major": "Computer Programming",
    "ColorActive": "#a6a8ab",
    "Y2004":{
      "uc": 0,
      "csu": 0,
      "nonprofit": 61,
      "forprofit": 15,
    },
    "Y2013": {
      "uc": 0,
      "csu": 0,
      "nonprofit": 31,
      "forprofit": 96
    },
  },
];

var slide_3_3_0_data = [
  {
    "ethCode": "aai",
    "uc": 188,
    "csu": 414,
    "nonprofit": 209,
    "forprofit": 81
  },
  {
    "ethCode": "asn",
    "uc": 17374,
    "csu": 13413,
    "nonprofit": 4757,
    "forprofit": 1477
  },
  {
    "ethCode": "blk",
    "uc": 1397,
    "csu": 3602,
    "nonprofit": 1754,
    "forprofit": 1211
  },
  {
    "ethCode": "hsp",
    "uc": 8488,
    "csu": 21686,
    "nonprofit": 6694,
    "forprofit": 3259
  },
  {
    "ethCode": "nhp",
    "uc": 149,
    "csu": 597,
    "nonprofit": 234,
    "forprofit": 174
  },
  {
    "ethCode": "wht",
    "uc": 15798,
    "csu": 28990,
    "nonprofit": 17046,
    "forprofit": 3279
  },
  {
    "ethCode": "two",
    "uc": 950,
    "csu": 2506,
    "nonprofit": 1281,
    "forprofit": 184
  },
  {
    "ethCode": "unk",
    "uc": 2518,
    "csu": 7576,
    "nonprofit": 2330,
    "forprofit": 3294
  },
  {
    "ethCode": "nra",
    "uc": 2084,
    "csu": 3019,
    "nonprofit": 2074,
    "forprofit": 506
  }
];


var dataYellowSlide = {
  "Business, Management, Marketing & Related Support Services": {
    "oth": 1,
    "aai": 1,
    "asn": 1,
    "blk": 1,
    "hsp": 1,
    "nhp": 1,
    "wht": 1,
    "two": 2,
    "unk": 1,
    "nra": 1
  },
  "Social Sciences": {
    "oth": 2,
    "aai": 2,
    "asn": 3,
    "blk": 2,
    "hsp": 2,
    "nhp": 4,
    "wht": 2,
    "two": 1,
    "unk": 2,
    "nra": 2
  },
  "Psychology": {
    "oth": 3,
    "aai": 4,
    "asn": 6,
    "blk": 3,
    "hsp": 3,
    "nhp": 6,
    "wht": 4,
    "two": 3,
    "unk": 5,
    "nra": 5
  },
  "Visual & Performing Arts": {
    "oth": 4,
    "aai": 3,
    "asn": 7,
    "blk": 5,
    "hsp": 4,
    "nhp": 7,
    "wht": 3,
    "two": 4,
    "unk": 3,
    "nra": 3
  },
  "Biological & Biomedical Sciences": {
    "oth": 5,
    "aai": 6,
    "asn": 2,
    "blk": 8,
    "hsp": 9,
    "nhp": 5,
    "wht": 6,
    "two": 7,
    "unk": 6,
    "nra": 6
  },
  "Health Professions & Related Programs": {
    "oth": 6,
    "aai": 5,
    "asn": 4,
    "blk": 4,
    "hsp": 5,
    "nhp": 2,
    "wht": 5,
    "two": 5,
    "unk": 4,
    "nra": 10
  },
  "Engineering": {
    "oth": 7,
    "aai": 9,
    "asn": 5,
    "blk": 15,
    "hsp": 11,
    "nhp": 3,
    "wht": 8,
    "two": 9,
    "unk": 7,
    "nra": 4
  },
  "Communication, Journalism & Related Programs": {
    "oth": 8,
    "aai": 8,
    "asn": 8,
    "blk": 6,
    "hsp": 8,
    "nhp": 9,
    "wht": 7,
    "two": 6,
    "unk": 9,
    "nra": 7
  },
  "English Language & Literature/Letters": {
    "oth": 9,
    "aai": 10,
    "asn": 12,
    "blk": 9,
    "hsp": 10,
    "nhp": 12,
    "wht": 9,
    "two": 8,
    "unk": 10,
    "nra": 15
  },
  "Liberal Arts and Sciences, General Studies & Humanities": {
    "oth": 10,
    "aai": 7,
    "asn": 15,
    "blk": 12,
    "hsp": 7,
    "nhp": 13,
    "wht": 10,
    "two": 10,
    "unk": 8,
    "nra": 13
  },
  "Homeland Security, Law Enforcement, Firefighting & Related Protective Service": {
    "oth": 11,
    "aai": 13,
    "asn": 18,
    "blk": 7,
    "hsp": 6,
    "nhp": 9,
    "wht": 17,
    "two": 14,
    "unk": 11,
    "nra": 27
  },
  "Computer & Information Sciences ": {
    "oth": 12,
    "aai": 17,
    "asn": 9,
    "blk": 11,
    "hsp": 19,
    "nhp": 8,
    "wht": 14,
    "two": 15,
    "unk": 12,
    "nra": 9
  },
  "Parks, Recreation, Leisure & Fitness Studies": {
    "oth": 13,
    "aai": 12,
    "asn": 14,
    "blk": 16,
    "hsp": 15,
    "nhp": 11,
    "wht": 11,
    "two": 11,
    "unk": 13,
    "nra": 17
  }
}

var slide_3_4_0_data = [
  ["uc", 21.22],
  ["csu", 19.63],
  ["nonprofit", 19.03],
  ["forprofit", 39.72]
];


var slide_3_4_1_data = [
  ["Year", "2004-01-01", "2005-01-01", "2006-01-01", "2007-01-01", "2008-01-01", "2009-01-01", "2010-01-01", "2011-01-01", "2012-01-01", "2013-01-01"],
  ["csu", 65743, 66768, 69361, 71074, 73762, 74643, 75419, 77731, 76427, 81803],
  ["uc", 38558, 40851, 41639, 41587, 42416, 42664, 44856, 46935, 48899, 48946],
  ["nonprofit", 29455, 30185, 30631, 31040, 31990, 31343, 31435, 32892, 34889, 36378],
  ["forprofit", 8117, 8469, 8751, 9094, 10071, 11949, 12350, 12045, 12281, 13465],
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
    "Rank2004":"9 (4%) No Change",
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
    "Rank2004":"10 (2%) No Change",
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
    "Major": "Medical Assisting Services",
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
    "Major": "Registered Nursing, Nursing Admin, etc.",
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
    "Major": "Practical Nursing, Vocational Nursing & Nursing Assistants",
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
    "Major": "Allied Health Diagnostic, Intervention & Treatment",
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
    "Major": "Health & Medical Admin Services",
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
    "Major": "Health Services, General",
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
    "Major": "Mental & Social Health Services",
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
    "Major": "Health/Medical Prep Programs",
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
    "Major": "Dental Support Services",
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
    "Major": "Somatic Bodywork & Therapeutic Services",
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

var slide_4_3_0_data = [
  {
    "ethCode":"aai",
    "cc":692,
    "nonprofit":18,
    "forprofit":476,
  },
  {
    "ethCode":"asn",
    "cc":17320,
    "nonprofit":476,
    "forprofit":5878,
  },
  {
    "ethCode":"blk",
    "cc":6774,
    "nonprofit":457,
    "forprofit":6960,
  },
  {
    "ethCode":"hsp",
    "cc":43039,
    "nonprofit":1966,
    "forprofit":29403,
  },
  {
    "ethCode":"nhp",
    "cc":696,
    "nonprofit":49,
    "forprofit":1123,
  },
  {
    "ethCode":"wht",
    "cc":45174,
    "nonprofit":1015,
    "forprofit":17106,
  },
  {
    "ethCode":"two",
    "cc":3671,
    "nonprofit":66,
    "forprofit":1852,
  },
  {
    "ethCode":"unk",
    "cc":6070,
    "nonprofit":88,
    "forprofit":8897,
  },
  {
    "ethCode":"nra",
    "cc":3436,
    "nonprofit":81,
    "forprofit":786,
  }
];

var dataGreenSlide = {
  "Health Professions": {
    "oth": 1,
    "asn": 1,
    "blk": 1,
    "hsp": 1,
    "wht": 1,
    "nra": 2,
    "aai": null,
    "nhp": null,
    "two": null,
    "unk": null
  },
  "Protective Services": {
    "oth": 2,
    "asn": 6,
    "blk": 2,
    "hsp": 2,
    "wht": 3,
    "nra": 8,
    "aai": null,
    "nhp": null,
    "two": null,
    "unk": null
  },
  "Mechanic Tech/Repair": {
    "oth": 3,
    "asn": 2,
    "blk": 4,
    "hsp": 3,
    "wht": 4,
    "nra": 7,
    "aai": null,
    "nhp": null,
    "two": null,
    "unk": null
  },
  "Cosmetology & Culinary": {
    "oth": 4,
    "asn": 4,
    "blk": 3,
    "hsp": 4,
    "wht": 6,
    "nra": 6,
    "aai": null,
    "nhp": null,
    "two": null,
    "unk": null
  },
  "Business & Marketing": {
    "oth": 5,
    "asn": 8,
    "blk": 7,
    "hsp": 8,
    "wht": 10,
    "nra": 4,
    "aai": null,
    "nhp": null,
    "two": null,
    "unk": null
  },
  "Visual & Performing Arts": {
    "oth": 6,
    "asn": 3,
    "blk": 5,
    "hsp": 7,
    "wht": 2,
    "nra": 1,
    "aai": null,
    "nhp": null,
    "two": null,
    "unk": null
  },
  "Engineering Tech": {
    "oth": 7,
    "asn": 9,
    "blk": 8,
    "hsp": 5,
    "wht": 7,
    "nra": 9,
    "aai": null,
    "nhp": null,
    "two": null,
    "unk": null
  },
  "Computer Tech": {
    "oth": 8,
    "asn": 5,
    "blk": 6,
    "hsp": 10,
    "wht": 5,
    "nra": 5,
    "aai": null,
    "nhp": null,
    "two": null,
    "unk": null
  },
  "Family & Consumer Sciences": {
    "oth": 9,
    "asn": 7,
    "blk": 9,
    "hsp": 6,
    "wht": 8,
    "nra": 3,
    "aai": null,
    "nhp": null,
    "two": null,
    "unk": null
  },
  "Construction Trades": {
    "oth": 10,
    "asn": 11,
    "blk": 10,
    "hsp": 9,
    "wht": 11,
    "nra": 11,
    "aai": null,
    "nhp": null,
    "two": null,
    "unk": null
  },
  "Paralegal": {
    "oth": 11,
    "asn": 10,
    "blk": 11,
    "hsp": 11,
    "wht": 9,
    "nra": 10,
    "aai": null,
    "nhp": null,
    "two": null,
    "unk": null
  }
}

var slide_4_4_0_data = [
  ["nonprofit", 9.66],
  ["cc", 39.72],
  ["forprofit", 54.35]
];

var slide_4_4_1_data = [
  ["Year", "2004-01-01", "2005-01-01", "2006-01-01", "2007-01-01", "2008-01-01", "2009-01-01", "2010-01-01", "2011-01-01", "2012-01-01", "2013-01-01"],
  ["cc", 28387, 28865, 29818, 31161, 33328, 34001, 33798, 34893, 36940, 39628],
  ["forprofit", 22999, 23613, 22717, 22700, 27365, 28520, 31248, 52760, 54579, 50379],
  ["nonprofit", 1927, 1447, 1490, 1734, 1697, 1801, 1714, 2046, 2370, 2133]
];
