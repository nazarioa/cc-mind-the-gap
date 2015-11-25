"use strict";

var slide_3_1_0_data = [
  ['Business & Marketing', 0.17],
  ['Social Sciences (various)', 0.12],
  ['Psychology', 0.08],
  ['Visual & Performing Arts', 0.07],
  ['Biology', 0.07],
  ['Health Professions', 0.07],
  ['Engineering', 0.06],
  ['Communication', 0.04],
  ['English', 0.04],
  ['Liberal Arts', 0.03],
  ['Computer and Information Sciences', 0.02],
  ['Other', .23]
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

window.onload = function(){


  var slideSize = function(percent){
    var slideWidth = $('#slide-0-0').width();
    console.log();
    return Math.floor(slideWidth * percent);
  };

  // slide
  var slide_2_0_0 = c3.generate({
    bindto: '#graph-2-0-0',
    padding: {
      top: 10,
      right: 20,
      bottom: 10,
      left: 50,
    },
    data: {
      url: 'assets/data/slide_2_0_0.csv',
      x: 'Year',
      colors:{
        'Projected Degrees': '#35768A',
        'Degrees Added Per Year': '#9EA771',
        'Cumulative Degrees': '#A93B41'
      },
      type: 'area',
    },
    point: {
      show: false
    },
    size: {
      width: slideSize(.5)
    },
    tooltip: {
      format: {
        title: function (d) { return d; },
        value: function (value, ratio, id) {
          var format = (id === 'Cumulative Degrees' || id === 'Degrees Added Per Year' || id === 'Projected Degrees') ? d3.format(',') : false;
          return format(value);
        }
        // value: d3.format(',') // apply this format to both y and y2
      }
    }
  });

  // slide
  var slide_3_1_0 = c3.generate({
    bindto: '#graph-3-1-0',
    data: {
      columns: slide_3_1_0_data,
      type: 'pie',
    },
    legend: {
      hide: true
    },
    size: {
      height: slideSize(.45)
    }
  });

  // slide
  var slide_3_2_0 = c3.generate({
    bindto: '#graph-3-2-0',
    data: {
      url: 'assets/data/slide_3_2_0_2014_sort.csv',
      x: 'Institution',
      columns: ['Institution', 'Major', 'Count'],
      type: 'bar'
    },
    axis: {
      rotated: true,
      x: {
        type: 'category' // this needed to load string x value
      }
    }
  });
}
