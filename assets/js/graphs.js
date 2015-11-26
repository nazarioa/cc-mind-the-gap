"use strict";


var mini_graph_padding = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

window.onload = function(){

  var slideSize = function(percent){
    var slideWidth = $('#slide-0-0').width();
    var slideHeight = $('#slide-0-0').height();
    return { width: Math.floor(slideWidth * percent), height: Math.floor(slideHeight * percent) };
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
      width: slideSize(.5).width,
      height: slideSize(.6).height
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
    padding: {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10,
    },
    data: {
      columns: slide_3_1_0_data_result,
      keys: slide_3_1_0_data_keys,
      type: 'pie',
    },
    legend: {
      hide: true
    },
    size: {
      width: slideSize(.45).width,
      height: slideSize(.48).width
    },
    pie: {
      label: {
        format: function (value, ratio, id) {
          return Math.floor((ratio * 100)) + '% ' + "\n" + id ;
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
    $('#slide-3-3 .left-panel.data .ethicity').html(x.name);
    $('#slide-3-3 .stats-general .percentage > span').html(
      function(){
        return Math.floor((x.ratio * 100)) + '%';
      }
    );
    $('#slide-3-3 .stats-general .totals > span').html(
      function(){
        return x.value.toLocaleString();
      }
    );

//TODO
/*
    // dataYellowSlide
    for (var ethnicity in dataYellowSlide) {
      if (dataYellowSlide.hasOwnProperty(ethnicity)) {
        // console.log(ethnicity);

        // var row = '<tr><td class="major">' + ethnicity + '</td>';

        for (var majorScore in ethnicity) {
          if (ethnicity.hasOwnProperty(majorScore)) {
            // console.log(ethnicity);
            // console.log(majorScore);
            // row = row + '<td>' + majorScore + '</td>';
          }
        }

        // row = row + '</tr>';
        // $('#slide-3-3-table tbody').append(row);

      }
    }
  };
  */

  var slide_3_3_0 = c3.generate({
    bindto: '#graph-3-3-0',
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    data: {
      columns: slide_3_3_0_data_TotalsValues,
      keys: slide_3_3_0_data_keys,
      type: 'pie',
      onclick: function(d) {
        // console.log(d);
        var leftPanelWidth = $('#slide-3-3 .left-panel').width();

        // If the info panel is not .hidden, slide it out and present data panel
        if($('#slide-3-3 .left-panel.info').hasClass('hidden') === false ){
          $('#slide-3-3 .left-panel.info').animate(
            {left: -leftPanelWidth},
            500,
            "swing",
            function(){
              $('#slide-3-3 .left-panel.info').addClass('hidden');
              $('#slide-3-3 .left-panel.data').removeClass('hidden');
              fillData_3_3_0(d);
            }
          );

          $('#slide-3-3 .left-panel.data').css('left', -leftPanelWidth);
          $('#slide-3-3 .left-panel.data').animate(
            {left: 0},
            1500,
            "swing",
            function(){
              // fillData_3_3_0(d);
            }
          );
        }
        // If the data panel is up, just udpate the content
        else{
          fillData_3_3_0(d);
        }


      },
      onmouseout: function(){
      // alert('Test');
      }
    },
    legend: {
      hide: true
    },
    size: {
      width: slideSize(.5).width,
      height: slideSize(1).height
    },
    pie: {
      label: {
        format: function (value, ratio, id) {
          return Math.floor((ratio * 100)) + '% ' + "\n" + id ;
        }
      }
    }
  });


  //* Mini Graphs *//

  // 'Y' values for Mini Pie Graphs
  // UC
  var slide_3_3_0_data_Values_UC = slide_3_3_0_data.map(function(x) {
    if(x.UC){
      return [ x.Ethicity, x.UC];
    }
  });

  // CSU
  var slide_3_3_0_data_Values_CSU = slide_3_3_0_data.map(function(x) {
    if(x.CSU){
      return [ x.Ethicity, x.CSU];
    }
  });

  // FP
  var slide_3_3_0_data_Values_ForProfit = slide_3_3_0_data.map(function(x) {
    if(x.ForProfit){
      return [ x.Ethicity, x.ForProfit];
    }
  });

  // NFP
  var slide_3_3_0_data_Values_NonProfit = slide_3_3_0_data.map(function(x) {
    if(x.NonProfit){
      return [ x.Ethicity, x.NonProfit];
    }
  });


  var slide_3_3_1 = c3.generate({
    bindto: '#graph-3-3-1-UC',
    padding: mini_graph_padding,
    data: {
      columns: slide_3_3_0_data_Values_UC,
      keys: slide_3_3_0_data_keys,
      type: 'pie'/*,
      color: function (color, d) {
        console.log(slide_3_3_0_data_Values_UC);
        console.log(d);
        if(){

        }
        //d will be 'id' when called for legends
        return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
        return '#8B8B8D';
      }
      */
    },
    legend: {
      hide: true
    },
    size: {
      height: slideSize(.15).height
    },
    tooltip: {
        show: true
    },
    pie: {
      label:{
        show: false
      }
    }
  });

  //fourups test
  var slide_3_3_2 = c3.generate({
    bindto: '#graph-3-3-2-CSU',
    padding: mini_graph_padding,
    data: {
      columns: slide_3_3_0_data_Values_ForProfit,
      keys: slide_3_3_0_data_keys,
      type: 'pie',
    },
    legend: {
      hide: true
    },
    size: {
      height: slideSize(.15).height
    },
    tooltip: {
        show: true
    },
    pie: {
      label:{
        show: false
      }
    }
  });

  //fourups test
  var slide_3_3_3 = c3.generate({
    bindto: '#graph-3-3-3-FP',
    padding: mini_graph_padding,
    data: {
      columns: slide_3_3_0_data_Values_NonProfit,
      keys: slide_3_3_0_data_keys,
      type: 'pie',
    },
    legend: {
      hide: true
    },
    size: {
      height: slideSize(.15).height
    },
    tooltip: {
        show: true
    },
    pie: {
      label:{
        show: false
      }
    }
  });

  //fourups test
  var slide_3_3_4 = c3.generate({
    bindto: '#graph-3-3-4-NFP',
    padding: mini_graph_padding,
    data: {
      columns: slide_3_3_0_data_TotalsValues,
      keys: slide_3_3_0_data_keys,
      type: 'pie',
    },
    legend: {
      hide: true
    },
    size: {
      height: slideSize(.15).height
    },
    tooltip: {
        show: true
    },
    pie: {
      label:{
        show: false
      }
    }
  });
}
