"use strict";

window.onload = function(){


  var slideSize = function(percent){
    var slideWidth = $('#slide-0-0').width();
    console.log();
    return Math.floor(slideWidth * percent);
  };

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
    size: {
      width: slideSize(.5)
    }
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
    },
    size: {
      width: slideSize(.4)
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
}
