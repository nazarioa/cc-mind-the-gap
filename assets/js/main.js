"use strict";

window.onload = function(){

  // Slide 3 ---
  var slide3chart1 = c3.generate({
    bindto: '#slide-3-degrees-needed-graph',
    data: {
      columns: [
        ['data1', 10916729, 11011864, 11083431, 11156005, 11244562, 11336323, 11432868, 11525823, 11607133, 11677103, 11732387, 11782761, 11825384, 11860759, 11894741, 11920060],
        ['data2', 7701256, 7788391, 8018762, 8032324, 8187211, 8341821, 8484984, 8626679, 8760757, 8887231, 9003317, 9116301, 9223876, 9326289, 9428045, 9523307],
        ['gap', 3215473, 3223473, 3064669, 3123681, 3057351, 2994502, 2947884, 2899144, 2846376, 2789872, 2729070, 2666460, 2601508, 2534470, 2466696, 2396753]
      ],
      type: 'area',
      groups: [
        ['data1', 'data2']
      ],
      colors:{
        data1: '#99393E',
        data2: '#9EA0A0'
      },
      names:{
        data1: 'Degrees Needed',
        data2: 'Degrees Attained',
        gap: 'Gap'
      },
      hide: true,
      hide: ['gap'],
      onmouseover: function(d) {
        
        if(d.id === 'gap'){
          var gap_array= d.value.toString().split("");
          var counter_squares = $('#degree-deficit-counter .counter').children('span');

          for(var i = 0; i < gap_array.length; i++){
            $(counter_squares[i]).html(gap_array[i]);
          }
        }
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
    /*,
    grid:{
      y: {
        lines: [{value:0}]
      }
    }*/
  });

  var slide5chart1 = c3.generate({
    bindto: '#slide-5-top-ten-majors-graph',
    data: {
      columns: [
        ['data1', 10916729, 11011864, 11083431, 11156005, 11244562, 11336323, 11432868, 11525823, 11607133, 11677103, 11732387, 11782761, 11825384, 11860759, 11894741, 11920060],
      ],
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
    /*,
    grid:{
      y: {
        lines: [{value:0}]
      }
    }*/
  });

}
