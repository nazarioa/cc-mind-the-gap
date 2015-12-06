"use strict";
window.onload = function(){

  var mini_graph_padding = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };

  var slideSize = function(percent){
    var slideWidth = $('#slide-0-0').width();
    var slideHeight = $('#slide-0-0').height();
    return { width: Math.floor(slideWidth * percent), height: Math.floor(slideHeight * percent) };
  };

  var percentify = function(ratio){
    return Math.floor((ratio * 100)) + '%';
  }

  var grayScale = function(value, lower, upper){
    return Math.max(Math.min(Math.floor( value * 100 / 255), upper), lower);
  }

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

  function slide_3_1_0_data_getMeta(key, attribute){
    for (var i = 0; i < slide_3_1_0_data.length; i++) {
      var thisObject = slide_3_1_0_data[i];

      if ( thisObject.Major !== undefined && thisObject.Major === key ) {
        switch (attribute) {
          case 'Rank2004':
          return thisObject.Rank2004;
          break;

          case 'TopProviders':
          return thisObject.TopProviders;
          break;

          case 'ColorInactive':
          return thisObject.ColorInactive;
          break;

          case 'ColorActive':
          return thisObject.ColorActive;
          break;

          default:
          return undefined;
        }
      }
    }
  }

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
      color: function (color, d) {
        if(d !== undefined ){
          var grayValue = grayScale(d3.rgb(color).r, 50, 255) + grayScale(d3.rgb(color).g, 50, 255) + grayScale(d3.rgb(color).b, 50, 255);
          return d3.rgb(grayValue, grayValue, grayValue);
        }
        return '#dedede';
      },
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
          return percentify(ratio) + "\n " + id ;
        }
      }
    },
    tooltip: {
      contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
        if(d[0].id !== undefined && d[0].id !== 'Other'){
          return '<div class="tooltip"><div class="major">The Stats <span>' + d[0].name + '</span></div><hr><ul><li class="percent">Percent of all BAs in 2013<br /><span>' + percentify(d[0].ratio) + '</span></li><li class="rank">Rank in 2004<br /><span>' + slide_3_1_0_data_getMeta(d[0].id, 'Rank2004') + '</span></li><li class="top-providers">Top Providers<br /><span>' + slide_3_1_0_data_getMeta(d[0].id, 'TopProviders') + '</span></li></ul></div>';
        }
      }
    }
  });

  // slide
  var institutions = ['UC', 'CSU', 'NonProfit', 'ForProfit'] ;
  function slide_3_2_0_getKeys(year){
    var keys = [];
    var dataYear = 'Y' + year;
    for (let i = 0; i < slide_3_2_0_data.length; i++) {
      let majorName = slide_3_2_0_data[i].Major.replace(/\s/g, '').replace(/\(|\)|,|\/|\&/g, '');
      keys.push(dataYear + '_' + majorName);
    }
    console.log(keys);
    return [keys];
  };

  function slide_3_2_0_getData(year){
    var result = [];
    var dataYear = 'Y' + year;
    for (let i = 0; i < slide_3_2_0_data.length; i++) {
      var scores = [];
      let majorName = slide_3_2_0_data[i].Major.replace(/\s/g, '').replace(/\(|\)|,|\/|\&/g, '');
      for (var institution of institutions ) {
        scores.push(slide_3_2_0_data[i][dataYear][institution]);
      }
      let key = (dataYear + '_' + majorName);
      scores.unshift(key);
      result.push(scores);
    }
    return result;
  }

  function slide_3_2_0_getNames(year){
    var result = {};
    var dataYear = 'Y' + year;
    for (let i = 0; i < slide_3_2_0_data.length; i++) {
      let majorName = slide_3_2_0_data[i].Major.replace(/\s/g, '').replace(/\(|\)|,|\/|\&/g, '');
      result[dataYear + '_' + majorName] = slide_3_2_0_data[i].Major;
    }
    return result;
  }

  var slide_3_2_0 = c3.generate({
    bindto: '#graph-3-2-0',
    padding: {
      top: 10,
      right: 50,
      bottom: 10,
      left: 50,
    },
    size: {
      width: slideSize(.9).width,
      height: slideSize(.5).width
    },
    data: {
      columns: slide_3_2_0_getData(2004),
      groups: slide_3_2_0_getKeys(2004),
      names: slide_3_2_0_getNames(2004),
      type: 'bar',
    },
    axis: {
      rotated: true,
      x: {
        type: 'category',
        categories: ['UC', 'CSU', 'Non Profit', 'For Profit' ]
      }
    },
  });

  // slide
  var slide_3_3_0_data_keys = slide_3_3_0_data.map(function(x) {
    return x;
  });

  var slide_3_3_0_data_TotalsValues = slide_3_3_0_data.map(function(x) {
    var totals = x.UC + x.CSU + x.NonProfit + x.ForProfit;
    return [ x.Ethicity, totals];
  });

  // Used for updating the mini graphs and stats for slide 3-3
  function updateData_3_3_0(x){
    // The Stats Data -- Mains stuff
    $('#slide-3-3 .left-panel.data .ethicity').html(x.name);
    $('#slide-3-3 .stats-general .percentage > span').html(
      percentify(x.ratio)
    );
    $('#slide-3-3 .stats-general .totals > span').html(
      function(){
        return x.value.toLocaleString();
      }
    );

    // START - Table Data Update
    var rowData = '';
    for (var attr in dataYellowSlide) {
      var row = '<tr><td class="major">' + attr + '</td>';
      if (dataYellowSlide.hasOwnProperty(attr) ) {
        var attrData = dataYellowSlide[attr];
        for (var ethnicity in attrData) {
          if (attrData.hasOwnProperty(ethnicity) && x.id === ethnicity) {
            row = row + '<td class="selected">' + attrData[ethnicity] + '</td>';
          }
          else{
            row = row + '<td>' + attrData[ethnicity] + '</td>';
          }
        }
        row = row + '</tr>';
      }
      rowData += row + '</tr>';
    }
    $('#slide-3-3-table tbody').html(rowData);
    // END - Table Data

    // START - MiniGraphs

    // END - MiniGraphs

  };

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
      colors: race_chart_colors_active,
      onclick: function(d) {
        var leftPanelWidth = $('#slide-3-3 .left-panel').width();

        // If the info panel is not .hidden, slide it out and present data panel
        if($('#slide-3-3 .left-panel.info').hasClass('hidden') === false ){

          //start info slide out animation
          $('#slide-3-3 .left-panel.info').animate(
            {left: -leftPanelWidth},
            500,
            "swing",
            function(){
              // swap out the info div with the data div
              $('#slide-3-3 .left-panel.info').addClass('hidden');
              $('#slide-3-3 .left-panel.data').removeClass('hidden');
              // update data div
              updateData_3_3_0(d);
            }
          );
          //end info slide out animation

          //start data slide in animation
          $('#slide-3-3 .left-panel.data').css('left', -leftPanelWidth);
          $('#slide-3-3 .left-panel.data').animate(
            {left: 0},
            1500,
            "swing",
            function(){
              // updateData_3_3_0(d);
            }
          );
          //end data slide in animation

        }

        // else -- the data panel is up, just update the content
        else{
          updateData_3_3_0(d);
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
          return percentify(ratio) + "\n " + id ;
        }
      }
    }
  });


  //* Mini Graphs *//

  // function to get 'Y' values for Mini Pie Graphs
  // UC
  var slide_3_3_0_data_Values_UC = slide_3_3_0_data.map(function(x) {
    if(x.UC){
      return [x.Ethicity, x.UC];
    }
  });

  // CSU
  var slide_3_3_0_data_Values_CSU = slide_3_3_0_data.map(function(x) {
    if(x.CSU){
      return [x.Ethicity, x.CSU];
    }
  });

  // FP
  var slide_3_3_0_data_Values_ForProfit = slide_3_3_0_data.map(function(x) {
    if(x.ForProfit){
      return [x.Ethicity, x.ForProfit];
    }
  });

  // NFP
  var slide_3_3_0_data_Values_NonProfit = slide_3_3_0_data.map(function(x) {
    if(x.NonProfit){
      return [x.Ethicity, x.NonProfit];
    }
  });


  var slide_3_3_1 = c3.generate({
    bindto: '#graph-3-3-1-UC',
    padding: mini_graph_padding,
    data: {
      columns: slide_3_3_0_data_Values_UC,
      keys: slide_3_3_0_data_keys,
      type: 'pie',
      colors: race_chart_colors_active
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

  // Mini Pie Graph
  var slide_3_3_2 = c3.generate({
    bindto: '#graph-3-3-2-CSU',
    padding: mini_graph_padding,
    data: {
      columns: slide_3_3_0_data_Values_CSU,
      keys: slide_3_3_0_data_keys,
      type: 'pie',
      colors: race_chart_colors_active
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

  // Mini Pie Graph
  var slide_3_3_3 = c3.generate({
    bindto: '#graph-3-3-3-FP',
    padding: mini_graph_padding,
    data: {
      columns: slide_3_3_0_data_Values_ForProfit,
      keys: slide_3_3_0_data_keys,
      type: 'pie',
      colors: race_chart_colors_active
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

  // Mini Pie Graph
  var slide_3_3_4 = c3.generate({
    bindto: '#graph-3-3-4-NFP',
    padding: mini_graph_padding,
    data: {
      columns: slide_3_3_0_data_Values_NonProfit,
      keys: slide_3_3_0_data_keys,
      type: 'pie',
      colors: race_chart_colors_active
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

  // Mini Pie Graph
  var slide_3_4_0 = c3.generate({
    bindto: '#graph-3-4-0',
    data: {
      columns: slide_3_4_0_data,
      type: 'bar',
      labels: {
        format: function (value, id, index, subIndex) {
          return '' + id + ' - ' + value + '%' ;
        }
      }
    },
    axis: {
      rotated: true,
      x: {
        show: false
      },
      y: {
        show: false
      }
    },
    size: {
      width: slideSize(.5).width,
      height: slideSize(.17).height
    },
    tooltip: {
      show: false
    },
    interaction: {
      enabled: false
    },
    legend: {
      show: false
    }
  });


  // slide
  var slide_4_4_0 = c3.generate({
    bindto: '#graph-4-4-0',
    data: {
      columns: slide_4_4_0_data,
      type: 'bar'
    },
    axis: {
      rotated: true,
      x: {
        show: false
      },
      y: {
        show: false
      }
    },
    size: {
      width: slideSize(.5).width,
      height: slideSize(.15).height
    },
    tooltip: {
      show: false
    }
  });

}
