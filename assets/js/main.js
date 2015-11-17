"use strict";

window.onload = function(){

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

  var slide5chart1 = c3.generate({
    bindto: '#slide-5-top-ten-majors-graph',
    data: {
      columns: dataSlide5chart1,
      type: 'pie',
      groups: [
        ['data1', 'data2']
      ],
      color:{
        data1: '#99393E',
        data2: '#9EA0A0'
      },
      names:{
        data1: 'Degrees Needed',
        data2: 'Degrees Attained'
      }
    },
    axis: {
      x: {
        type: 'category',
        categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025']
      },
      y:{
        label:{
          text: 'Number of Degrees',
          position: 'outer-middle'
        },
        tick:{
          max: 10
        }
      }
    }
  });
}
