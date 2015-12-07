"use strict";
window.onload = function(){
  var bachelorInstitutions = ['uc', 'csu', 'nonprofit', 'forprofit'] ;
  var subBachelorInstitutions = ['nonprofit', 'forprofit', 'cc'] ;


  /*
  User Interacticity
  */
  $('#container-graph-3-2-0 .option').on('click', function(d){
    $('#container-graph-3-2-0 .option').removeClass('active');
    $(this).addClass('active');

    let option = $(this).html();

    if(option.toLowerCase() === 'compare' ){
      slide_3_2_0.unload();
      $('#container-graph-3-2-0 .the-tally-flex').addClass('hidden');
    }else{
      slide_3_2_0.load({
        type: 'bar',
        names: exampleMajor_getNames(option, slide_3_2_0_data),
        columns: exampleMajor_getData(option, bachelorInstitutions, slide_3_2_0_data),
        groups: exampleMajor_getKeys(option, slide_3_2_0_data),
        colors: exampleMajor_getColors(option, slide_3_2_0_data),

        unload: true
      });
      slide_3_2_0_updateTotals(option);
      $('#container-graph-3-2-0 .the-tally-flex').removeClass('hidden');
    }
  });

  $('#container-graph-4-2-0 .option').on('click', function(d){
    $('#container-graph-4-2-0 .option').removeClass('active');
    $(this).addClass('active');

    let option = $(this).html();

    if(option.toLowerCase() === 'compare' ){
      slide_4_2_0.unload();
      $('#container-graph-4-2-0 .the-tally-flex').addClass('hidden');
    }else{
      slide_4_2_0.load({
        type: 'bar',
        names: exampleMajor_getNames(option, slide_4_2_0_data),
        columns: exampleMajor_getData(option, bachelorInstitutions, slide_4_2_0_data),
        groups: exampleMajor_getKeys(option, slide_4_2_0_data),
        colors: exampleMajor_getColors(option, slide_4_2_0_data),

        unload: true
      });
      slide_4_2_0_updateTotals(option);
      $('#container-graph-4-2-0 .the-tally-flex').removeClass('hidden');
    }
  });


  /*
  Utility functions
  */
  var mini_graph_padding = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };

  function slideSize(percent){
    var slideWidth = $('#slide-0-0').width();
    var slideHeight = $('#slide-0-0').height();
    return { width: Math.floor(slideWidth * percent), height: Math.floor(slideHeight * percent) };
  };

  function percentify(ratio){
    return Math.floor((ratio * 100)) + '%';
  };

  function grayScale(value, lower, upper){
    return Math.max(Math.min(Math.floor( value * 100 / 255), upper), lower);
  };


  /*
  Generic Graphs and Graph Accessor functions
  */

  function instituation_getColors(institautions){
    var result = {};
    if( typeof institautions !== 'string' && isIterable(institautions) === true){
      // get all colors and retrun an object with key: color pairs
      for (var inst in genericInstitutionData) {
        if (genericInstitutionData.hasOwnProperty(inst)) {
          result[inst] = genericInstitutionData[inst].ActiveColor;
        }
      }
    }else if(typeof institautions === 'string'){
      result = genericInstitutionData[inst].ActiveColor;
    }else{
      result = undefined;
    }
    return result;
  }

  function instituation_getNames(institautions){
    var result = {};
    if( typeof institautions !== 'string' && isIterable(institautions) === true){
      for (var inst in genericInstitutionData) {
        if (genericInstitutionData.hasOwnProperty(inst)) {
          result[inst] = genericInstitutionData[inst].Name;
        }
      }
    }else if(typeof institautions === 'string'){
      result = genericInstitutionData[institautions].Name;
    }else{
      result = undefined;
    }
    return result;
  }

  function ethnicity_getColors(ethnicity){
    var result = {};
    if(ethnicity === undefined){
      // get all colors and retrun an object with key: color pairs
      for (var eth in genericInstitutionData) {
        if (genericEthnicityData.hasOwnProperty(eth)) {
          result[eth] = genericEthnicityData[eth].ActiveColor;
        }
      }
    }else{
      result[eth] = genericEthnicityData[eth].ActiveColor;
    }
    return result;
  }

  function ethnicity_getNames(ethnicity){
    var result = {};
    if(ethnicity === undefined){
      for (var eth in genericInstitutionData) {
        if (genericEthnicityData.hasOwnProperty(inst)) {
          result[eth] = genericEthnicityData[eth].Name;
        }
      }
    }else{
      result[eth] = genericEthnicityData[eth].Name;
    }
    return result;
  }

  function exampleMajor_getKeys(year, data){
    var keys = [];
    var dataYear = 'Y' + year;
    for (let i = 0; i < data.length; i++) {
      let majorName = data[i].Major.replace(/\s/g, '').replace(/\(|\)|,|\/|\&/g, '');
      keys.push(dataYear + '_' + majorName);
    }
    return [keys];
  };

  function exampleMajor_getData(year, institutions, data){
    var result = [];
    var dataYear = 'Y' + year;
    for (let i = 0; i < data.length; i++) {
      var scores = [];
      let majorName = data[i].Major.replace(/\s/g, '').replace(/\(|\)|,|\/|\&/g, '');
      for (var institution of institutions ) {
        scores.push(data[i][dataYear][institution]);
      }
      let key = (dataYear + '_' + majorName);
      scores.unshift(key);
      result.push(scores);
    }
    return result;
  }

  function exampleMajor_getNames(year, data){
    var result = {};
    var dataYear = 'Y' + year;
    for (let i = 0; i < data.length; i++) {
      let majorName = data[i].Major.replace(/\s/g, '').replace(/\(|\)|,|\/|\&/g, '');
      result[dataYear + '_' + majorName] = data[i].Major;
    }
    return result;
  }

  function exampleMajor_getColors(year, data){
    var result = {};
    var dataYear = 'Y' + year;
    for (let i = 0; i < data.length; i++) {
      let majorName = data[i].Major.replace(/\s/g, '').replace(/\(|\)|,|\/|\&/g, '');
      result[dataYear + '_' + majorName] = data[i].ColorActive;
    }
    return result;
  }

  function exampleMajor_getTotals(year, institutions, data){
    var result = {};
    var dataYear = 'Y' + year;
    let total = 0;
    for (var institution of institutions ) {
      for (let i = 0; i < data.length; i++) {
          total = total + data[i][dataYear][institution];
      }
      result[institution] = total;
      total = 0;
    }
    return result;
  }

  function topTen_getMetaData(key, attribute, data){
    for (var i = 0; i < data.length; i++) {
      var thisObject = data[i];

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


  /*
  Specific Graphs and Graph Accessor functions
  */

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
          return '<div class="tooltip top-ten-majors"><div class="major">The Stats:<span> ' + d[0].name + '</span></div><hr><ul><li class="percent">Percent of all BAs in 2013<br /><span>' + percentify(d[0].ratio) + '</span></li><li class="rank">Rank in 2004<br /><span>' + topTen_getMetaData(d[0].id, 'Rank2004', slide_3_1_0_data) + '</span></li><li class="top-providers">Top Providers<br /><span>' + topTen_getMetaData(d[0].id, 'TopProviders', slide_3_1_0_data) + '</span></li></ul></div>';
        }
      }
    }
  });


  // slide
  function slide_3_2_0_updateTotals(year){
    let totals = exampleMajor_getTotals(year, bachelorInstitutions, slide_3_2_0_data);
    $('#container-graph-3-2-0 .uc .value').html(totals.uc.toLocaleString());
    $('#container-graph-3-2-0 .csu .value').html(totals.csu.toLocaleString());
    $('#container-graph-3-2-0 .nonprofit .value').html(totals.nonprofit.toLocaleString());
    $('#container-graph-3-2-0 .forprofit .value').html(totals.forprofit.toLocaleString());
  }

  var slide_3_2_0 = c3.generate({
    bindto: '#graph-3-2-0',
    padding: {
      top: 10,
      right: 50,
      bottom: 10,
      left: slideSize(.4).width
    },
    size: {
      width: slideSize(.9).width,
      height: slideSize(.4).width
    },
    data: {
      columns: exampleMajor_getData(2004, bachelorInstitutions, slide_3_2_0_data),
      groups: exampleMajor_getKeys(2004, slide_3_2_0_data),
      names: exampleMajor_getNames(2004, slide_3_2_0_data),
      type: 'bar',
      colors: exampleMajor_getColors(2004, slide_3_2_0_data),
    },
    axis: {
      rotated: true,
      x: {
        type: 'category',
        categories: bachelorInstitutions
      }
    },
    legend: {
      position: 'inset',
      inset: {
        anchor: 'top-left',
        x: -(slideSize(.4).width),
        y: 0,
        step: 10
      }
    }
  });


  // slide
  var slide_3_3_0_data_keys = slide_3_3_0_data.map(function(x) {
    return x;
  });

  var slide_3_3_0_data_TotalsValues = slide_3_3_0_data.map(function(x) {
    var totals = x.uc + x.csu + x.nonprofit + x.forprofit;
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

    // START - MiniGraphs Data Update
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
      colors: ethnicity_getColors(),
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
            "swing"
          );
          //end data slide in animation

        }

        // else -- the data panel is up, just update the content
        else{
          updateData_3_3_0(d);
        }
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
    if(x.uc){
      return [x.Ethicity, x.uc];
    }
  });

  // CSU
  var slide_3_3_0_data_Values_CSU = slide_3_3_0_data.map(function(x) {
    if(x.csu){
      return [x.Ethicity, x.csu];
    }
  });

  // FP
  var slide_3_3_0_data_Values_ForProfit = slide_3_3_0_data.map(function(x) {
    if(x.forprofit){
      return [x.Ethicity, x.forprofit];
    }
  });

  // NFP
  var slide_3_3_0_data_Values_NonProfit = slide_3_3_0_data.map(function(x) {
    if(x.nonprofit){
      return [x.Ethicity, x.nonprofit];
    }
  });

  // 1 Mini Pie Graph
  var slide_3_3_1 = c3.generate({
    bindto: '#graph-3-3-1-UC',
    padding: mini_graph_padding,
    data: {
      columns: slide_3_3_0_data_Values_UC,
      keys: slide_3_3_0_data_keys,
      type: 'pie',
      colors: ethnicity_getColors(),
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

  // 2 Mini Pie Graph
  var slide_3_3_2 = c3.generate({
    bindto: '#graph-3-3-2-CSU',
    padding: mini_graph_padding,
    data: {
      columns: slide_3_3_0_data_Values_CSU,
      keys: slide_3_3_0_data_keys,
      type: 'pie',
      colors: ethnicity_getColors(),
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

  // 3 Mini Pie Graph
  var slide_3_3_3 = c3.generate({
    bindto: '#graph-3-3-3-FP',
    padding: mini_graph_padding,
    data: {
      columns: slide_3_3_0_data_Values_ForProfit,
      keys: slide_3_3_0_data_keys,
      type: 'pie',
      colors: ethnicity_getColors(),
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

  // 4 Mini Pie Graph
  var slide_3_3_4 = c3.generate({
    bindto: '#graph-3-3-4-NFP',
    padding: mini_graph_padding,
    data: {
      columns: slide_3_3_0_data_Values_NonProfit,
      keys: slide_3_3_0_data_keys,
      type: 'pie',
      colors: ethnicity_getColors(),
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


  // slide
  var slide_3_4_0 = c3.generate({
    bindto: '#graph-3-4-0',
    data: {
      columns: slide_3_4_0_data,
      type: 'bar',
      labels: {
        format: function (value, id, index, subIndex) {
          return '' + instituation_getNames(id) + ' - ' + value + '%' ;
        }
      },
      colors: instituation_getColors(bachelorInstitutions),
      names: instituation_getNames(bachelorInstitutions),
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

  var slide_3_4_1 = c3.generate({
    bindto: '#graph-3-4-1',
    data: {
      x: 'Year',
      columns: slide_3_4_1_data,
      type: 'area',
      colors: instituation_getColors(bachelorInstitutions),
      names: instituation_getNames(bachelorInstitutions),
    },
    size: {
      width: slideSize(.4).width,
      height: slideSize(.45).height
    },
    axis: {
      x: {
        type: 'timeseries',
        tick: {
          format: function (x) { return x.getFullYear(); }
        }
      },
      y: {
        tick: {
          format: d3.format('s')
        }
      }
    },
  });


  // slide
  function slide_4_2_0_updateTotals(year){
    let totals = exampleMajor_getTotals(year, bachelorInstitutions, slide_4_2_0_data);
    $('#container-graph-4-2-0 .cc .value').html(totals.cc.toLocaleString());
    $('#container-graph-4-2-0 .forprofit .value').html(totals.forprofit.toLocaleString());
    $('#container-graph-4-2-0 .nonprofit .value').html(totals.nonprofit.toLocaleString());
  }

  var slide_4_2_0 = c3.generate({
    bindto: '#graph-4-2-0',
    padding: {
      top: 10,
      right: 50,
      bottom: 10,
      left: slideSize(.4).width
    },
    size: {
      width: slideSize(.9).width,
      height: slideSize(.4).width
    },
    data: {
      columns: exampleMajor_getData(2004, subBachelorInstitutions, slide_4_2_0_data),
      groups: exampleMajor_getKeys(2004, slide_4_2_0_data),
      names: exampleMajor_getNames(2004, slide_4_2_0_data),
      type: 'bar',
      colors: exampleMajor_getColors(2004, slide_4_2_0_data),
    },
    axis: {
      rotated: true,
      x: {
        type: 'category',
        categories: subBachelorInstitutions
      }
    },
    legend: {
      position: 'inset',
      inset: {
        anchor: 'top-left',
        x: -(slideSize(.4).width),
        y: 0,
        step: 10
      }
    }
  });

  // slide
  var slide_4_4_0 = c3.generate({
    bindto: '#graph-4-4-0',
    data: {
      columns: slide_4_4_0_data,
      colors: instituation_getColors(bachelorInstitutions),
      names: instituation_getNames(bachelorInstitutions),
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

  // slide

  var slide_4_1_0_data_keys = slide_4_1_0_data.map(function(x) {
    return x;
  });

  var slide_4_1_0_data_result = slide_4_1_0_data.map(function(x) {
    return [ x.Major, x.Percent];
  });

  var slide_4_1_0 = c3.generate({
    bindto: '#graph-4-1-0',
    padding: {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10,
    },
    data: {
      columns: slide_4_1_0_data_result,
      keys: slide_4_1_0_data_keys,
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
          return '<div class="tooltip top-ten-majors"><div class="major">The Stats:<span> ' + d[0].name + '</span></div><hr><ul><li class="percent">Percent of all Sub-bachs in 2013<br /><span>' + percentify(d[0].ratio) + '</span></li><li class="rank">Rank in 2004<br /><span>' + topTen_getMetaData(d[0].id, 'Rank2004', slide_4_1_0_data) + '</span></li><li class="top-providers">Top Providers<br /><span>' + topTen_getMetaData(d[0].id, 'TopProviders', slide_4_1_0_data) + '</span></li></ul></div>';
        }
      }
    }
  });


  //Primer
  slide_3_2_0_updateTotals(2004);
}
