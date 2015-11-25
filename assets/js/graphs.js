"use strict";

var slide_3_1_0_data = [
  {
    "Major": "Business & Marketing",
    "Percent": 0.17,
    "ColorInactive" : "#e3e3e3",
    "ColorActive" : "#e3e3e3"
  },
  {
    "Major": "Social Sciences (various)",
    "Percent":  0.12,
    "ColorInactive" : "#e3e3e3",
    "ColorActive" : "#e3e3e3"
  },
  {
    "Major": "Psychology",
    "Percent":  0.08,
    "ColorInactive" : "#e3e3e3",
    "ColorActive" : "#e3e3e3"
  },
  {
    "Major": "Visual & Performing Arts",
    "Percent":  0.07,
    "ColorInactive" : "#e3e3e3",
    "ColorActive" : "#e3e3e3"
  },
  {
    "Major": "Biology",
    "Percent":  0.07,
    "ColorInactive" : "#e3e3e3",
    "ColorActive" : "#e3e3e3"
  },
  {
    "Major": "Health Professions",
    "Percent":  0.07,
    "ColorInactive" : "#e3e3e3",
    "ColorActive" : "#e3e3e3"
  },
  {
    "Major": "Engineering",
    "Percent":  0.06,
    "ColorInactive" : "#e3e3e3",
    "ColorActive" : "#e3e3e3"
  },
  {
    "Major": "Communication",
    "Percent":  0.04,
    "ColorInactive" : "#e3e3e3",
    "ColorActive" : "#e3e3e3"
  },
  {
    "Major": "English",
    "Percent":  0.04,
    "ColorInactive" : "#e3e3e3",
    "ColorActive" : "#e3e3e3"
  },
  {
    "Major": "Liberal Arts",
    "Percent":  0.03,
    "ColorInactive" : "#e3e3e3",
    "ColorActive" : "#e3e3e3"
  },
  {
    "Major": "Computer & Information Sciences",
    "Percent":  0.02,
    "ColorInactive" : "#e3e3e3",
    "ColorActive" : "#e3e3e3"
  },
  {
    "Major": "Other",
    "Percent":  .23,
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
    axis: {
      y: {
        tick: {
          format: d3.format('s')
        }
      }
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
      }
    }
  });

  // slide
  var slide_3_1_0_data_keys = slide_3_1_0_data.map(function(x) {
    return x;
  });

  var slide_3_1_0_data_result = slide_3_1_0_data.map(function(x) {
      return [ x.Major, x.Percent];
  });

  var slide_3_1_0_data_colors = slide_3_1_0_data.map(function(x) {
      return { "Active": x.ColorActive, "Inactive": x.ColorInactive };
  });

  var slide_3_1_0 = c3.generate({
    bindto: '#graph-3-1-0',
    data: {
      columns: slide_3_1_0_data_result,
      keys: slide_3_1_0_data_keys,
      type: 'pie',
    },
    legend: {
      hide: true
    },
    size: {
      height: slideSize(.45)
    },
    pie: {
      label: {
        format: function (value, ratio, id) {
          return Math.floor((value * 100)) + '% ' + "\n" + id ;
        }
      }
    },
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

  // slide
  var slide_3_3_0_data_keys = slide_3_3_0_data.map(function(x) {
    return x;
  });

  var slide_3_3_0_data_TotalsValues = slide_3_3_0_data.map(function(x) {
      var totals = x.UC + x.CSU + x.NonProfit + x.ForProfit;
      return [ x.Ethicity, totals];
  });

  var fillData_3_3_0 = function(x){
    console.log(x);
  };

  var slide_3_3_0 = c3.generate({
    bindto: '#graph-3-3-0',
    data: {
      columns: slide_3_3_0_data_TotalsValues,
      keys: slide_3_3_0_data_keys,
      type: 'pie',
      onclick: function(d) {
        // console.log(d);

        var leftPanelWidth = $('#slide-3-3 .left-panel').width();
        $('#slide-3-3 .left-panel').animate(
          {left: -leftPanelWidth},
          300,
          "swing",
          fillData_3_3_0(d)
        );
      },
      onmouseout: function(){
        console.log('Test');
      }
    },
    size: {
      height: slideSize(.6)
    }
  });

  //fourups test
  var slide_3_3_1 = c3.generate({
    bindto: '#graph-3-3-1',
    data: {
      columns: slide_3_3_0_data_TotalsValues,
      keys: slide_3_3_0_data_keys,
      type: 'pie',
    },
    legend: {
      hide: true
    },
    size: {
      height: slideSize(.15)
    }
  });

  //fourups test
  var slide_3_3_2 = c3.generate({
    bindto: '#graph-3-3-2',
    data: {
      columns: slide_3_3_0_data_TotalsValues,
      keys: slide_3_3_0_data_keys,
      type: 'pie',
    },
    legend: {
      hide: true
    },
    size: {
      height: slideSize(.15)
    }
  });

  //fourups test
  var slide_3_3_3 = c3.generate({
    bindto: '#graph-3-3-3',
    data: {
      columns: slide_3_3_0_data_TotalsValues,
      keys: slide_3_3_0_data_keys,
      type: 'pie',
    },
    legend: {
      hide: true
    },
    size: {
      height: slideSize(.15)
    }
  });

  //fourups test
  var slide_3_3_4 = c3.generate({
    bindto: '#graph-3-3-4',
    data: {
      columns: slide_3_3_0_data_TotalsValues,
      keys: slide_3_3_0_data_keys,
      type: 'pie',
    },
    legend: {
      hide: true
    },
    size: {
      height: slideSize(.15)
    }
  });
}
