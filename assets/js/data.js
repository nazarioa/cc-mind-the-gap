"use strict";

// Generic Data
var race_chart_colors_active = {
  'American Indian/Alaska Native': '#a6a8ab',
  'Asian': '#a73e3f',
  'Black/African American': '#ca6d54',
  'Hispanic/Latino': '#9fa76b',
  'Native Hawaiian or Other Pacific Islander': '#00736b',
  'White': '#c7a51c',
  'Two or more races': '#a2c6d4',
  'Unknown': '#37758c',
  'Nonresident alien': '#5c180c'
};

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
      "UC": 687,
      "CSU": 687,
      "NonProfit": 343,
      "ForProfit": 3,
    },
    "Y2013": {
      "UC": 907,
      "CSU": 798,
      "NonProfit": 321,
      "ForProfit": 44
    },
  },
  {
    "Major": "CIS, General",
    "ColorActive": '#9fa76b',
    "Y2004":{
      "UC": 599,
      "CSU": 223,
      "NonProfit": 453,
      "ForProfit": 448,
    },
    "Y2013": {
      "UC": 69,
      "CSU": 304,
      "NonProfit": 125,
      "ForProfit": 163
    },
  },
  {
    "Major": "Computer Engineering",
    "ColorActive": '#6e6e70',
    "Y2004":{
      "UC": 550,
      "CSU": 304,
      "NonProfit": 131,
      "ForProfit": 18,
    },
    "Y2013": {
      "UC": 289,
      "CSU": 317,
      "NonProfit": 76,
      "ForProfit": 74
    },
  },
  {
    "Major": "Computer Systems Networking & Telecommunications",
    "ColorActive": '#c46d26',
    "Y2004":{
      "UC": 0,
      "CSU": 0,
      "NonProfit": 0,
      "ForProfit": 611,
    },
    "Y2013": {
      "UC": 0,
      "CSU": 0,
      "NonProfit": 97,
      "ForProfit": 137
    },
  },
  {
    "Major": "Computer Software & Media Applications",
    "ColorActive": '#a2c6d4',
    "Y2004":{
      "UC": 0,
      "CSU": 75,
      "NonProfit": 1,
      "ForProfit": 400,
    },
    "Y2013": {
      "UC": 0,
      "CSU": 36,
      "NonProfit": 62,
      "ForProfit": 541
    },
  },
  {
    "Major": "Computer Systems Analysis",
    "ColorActive": '#00736b',
    "Y2004":{
      "UC": 0,
      "CSU": 0,
      "NonProfit": 0,
      "ForProfit": 405,
    },
    "Y2013": {
      "UC": 0,
      "CSU": 0,
      "NonProfit": 0,
      "ForProfit": 110
    },
  },
  {
    "Major": "CIS & Support Services, Other",
    "ColorActive": '#5c180c',
    "Y2004":{
      "UC": 33,
      "CSU": 0,
      "NonProfit": 106,
      "ForProfit": 70,
    },
    "Y2013": {
      "UC": 12,
      "CSU": 0,
      "NonProfit": 3,
      "ForProfit": 3
    },
  },
  {
    "Major": "Information Science/Studies",
    "ColorActive": '#c7a51c',
    "Y2004":{
      "UC": 11,
      "CSU": 0,
      "NonProfit": 166,
      "ForProfit": 0,
    },
    "Y2013": {
      "UC": 12,
      "CSU": 0,
      "NonProfit": 3,
      "ForProfit": 3
    },
  },
  {
    "Major": "CIT Admin & Management",
    "ColorActive": '#a73e3f',
    "Y2004":{
      "UC": 0,
      "CSU": 0,
      "NonProfit": 83,
      "ForProfit": 37,
    },
    "Y2013": {
      "UC": 32,
      "CSU": 0,
      "NonProfit": 106,
      "ForProfit": 324
    },
  },
  {
    "Major": "Computer Programming",
    "ColorActive": '#a6a8ab',
    "Y2004":{
      "UC": 0,
      "CSU": 0,
      "NonProfit": 61,
      "ForProfit": 15,
    },
    "Y2013": {
      "UC": 0,
      "CSU": 0,
      "NonProfit": 31,
      "ForProfit": 96
    },
  },
];

var slide_3_3_0_data = [
  {
    "Ethicity": "American Indian/Alaska Native",
    "UC": 188,
    "CSU": 414,
    "NonProfit": 209,
    "ForProfit": 81
  },
  {
    "Ethicity": "Asian",
    "UC": 17374,
    "CSU": 13413,
    "NonProfit": 4757,
    "ForProfit": 1477
  },
  {
    "Ethicity": "Black/African American",
    "UC": 1397,
    "CSU": 3602,
    "NonProfit": 1754,
    "ForProfit": 1211
  },
  {
    "Ethicity": "Hispanic/Latino",
    "UC": 8488,
    "CSU": 21686,
    "NonProfit": 6694,
    "ForProfit": 3259
  },
  {
    "Ethicity": "Native Hawaiian or Other Pacific Islander",
    "UC": 149,
    "CSU": 597,
    "NonProfit": 234,
    "ForProfit": 174
  },
  {
    "Ethicity": "White",
    "UC": 15798,
    "CSU": 28990,
    "NonProfit": 17046,
    "ForProfit": 3279
  },
  {
    "Ethicity": "Two or more races",
    "UC": 950,
    "CSU": 2506,
    "NonProfit": 1281,
    "ForProfit": 184
  },
  {
    "Ethicity": "Unknown",
    "UC": 2518,
    "CSU": 7576,
    "NonProfit": 2330,
    "ForProfit": 3294
  },
  {
    "Ethicity": "Nonresident alien",
    "UC": 2084,
    "CSU": 3019,
    "NonProfit": 2074,
    "ForProfit": 506
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
  ["UC", 21.22],
  ["CSU", 19.63],
  ["Non-Profit", 19.03],
  ["For Profit", 39.72]
];


var slide_3_4_1_data = [
["Year", "2004-01-01", "2005-01-01", "2006-01-01", "2007-01-01", "2008-01-01", "2009-01-01", "2010-01-01", "2011-01-01", "2012-01-01", "2013-01-01"],
["CSU", 65743, 66768, 69361, 71074, 73762, 74643, 75419, 77731, 76427, 81803],
["UC", 38558, 40851, 41639, 41587, 42416, 42664, 44856, 46935, 48899, 48946],
["NonProfit", 29455, 30185, 30631, 31040, 31990, 31343, 31435, 32892, 34889, 36378],
["ForProfit", 8117, 8469, 8751, 9094, 10071, 11949, 12350, 12045, 12281, 13465],
]

var slide_4_4_0_data = [
  ["Non-Profit", 9.66],
  ["Community College", 39.72],
  ["For Profit", 54.35]
];
