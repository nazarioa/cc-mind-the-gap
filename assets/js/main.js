"use strict";

window.onload = function(){

  // slide
  var slide_2_0_0 = c3.generate({
    bindto: '#graph-2-0-0',
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
  });

  // slide
  var slide_3_1_0 = c3.generate({
    bindto: '#graph-3-1-0',
    data: {
      columns: [
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
      ],
      type: 'pie',
    },
    legend: {
      hide: true
    }
  });

  // slide
  var slide_3_2_0 = c3.generate({
    bindto: '#graph-3-2-0',
    data: {
      url: 'assets/data/slide_3_2_0_2014_sort.csv',
      x: 'Institution',
      columns: ['Institution', 'Major', 'Count'],
      // groups: [['Institution', 'Major']],
      // groups: [['CIS & Support Services', 'CIS, General', 'CIT Admin & Management', 'Computer Engineering', 'Computer Programming', 'Computer Science', 'Computer Software & Media Applications', 'Computer Systems Analysis', 'Computer Systems Networking & Telecommunications', 'Information Science/Studies']],
      type: 'bar'
    },
    axis: {
      rotated: true,
      x: {
        type: 'category' // this needed to load string x value
      }
    }
  });


  /* DEPRECATED */
  // Slide 3 ---
  var slide3chart1 = c3.generate({
    bindto: '#slide-3-degrees-needed-graph',
    data: {
      columns: dataSlide3chart1,
      type: 'area',
      colors:{
        data1: '#99393E',
        data2: '#9EA0A0'
      },
      names:{
        data1: 'Needed',
        data2: 'Attained',
        gap: 'Gap'
      },
      hide: ['gap'],
      onmouseover: function(d) {

        if(d.id === 'gap'){
          // Hacky way of doing this.
          // Reading D3 documentation maybe I should be
          // using the D3 selecters instead of jQuery.
          var gap_array= d.value.toString().split("");
          var counter_squares = $('#degree-deficit-counter .counter').children('span');

          for(var i = 0; i < gap_array.length; i++){
            $(counter_squares[i]).html(gap_array[i]);
          }
        }
      }
    },
    point: {
      show: false
    },
    legend: {
      hide: ['gap']
    },
    axis: {
      x: {
        type: 'category',
        categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025']
      },
      y:{
        label:{
          text: 'Degrees',
          position: 'outer-middle'
        },
        min: 5000000,
        max: 12000000,
        tick:{
          format: d3.format('s'),
          // format: d3.format('-,'),
          count: 5
        }
      }
    }
  });
}
