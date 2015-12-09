/*jshint bitwise: false*/
/*jslint white: true */
"use strict";
window.onload = function(){
  var bachelorInstitutions = ['uc', 'csu', 'nonprofit', 'forprofit'] ;
  var subBachelorInstitutions = ['nonprofit', 'forprofit', 'cc'] ;
  var graph_zero_padding = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };



  /*
  User Interacticity
  */
  $('#container-graph-3-2-0 .option').on('click', function(d){
    $('#container-graph-3-2-0 .option').removeClass('active');
    $(this).addClass('active');

    var option = $(this).html();

    if(option.toLowerCase() === 'compare' ){
      slide_3_2_0.unload();
      $('#container-graph-3-2-0 .the-tally-flex').addClass('hidden');
    }else{
      slide_3_2_0.load({
        type: 'bar',
        names: exampleMajor_getNames(option, slide_3_2_0_data),
        columns: exampleMajor_getData(option, bachelorInstitutions, slide_3_2_0_data),
        groups: [exampleMajor_getKeys(option, slide_3_2_0_data)],
        colors: exampleMajor_getColors(option, slide_3_2_0_data),

        unload: true
      });
      exampleMajor_updateTotals('#container-graph-3-2-0', option, bachelorInstitutions, slide_3_2_0_data);
      $('#container-graph-3-2-0 .the-tally-flex').removeClass('hidden');
    }
  });

  $('#container-graph-4-2-0 .option').on('click', function(d){
    $('#container-graph-4-2-0 .option').removeClass('active');
    $(this).addClass('active');

    var option = $(this).html();

    if(option.toLowerCase() === 'compare' ){
      slide_4_2_0.unload();
      $('#container-graph-4-2-0 .the-tally-flex').addClass('hidden');
    }else{
      slide_4_2_0.load({
        type: 'bar',
        names: exampleMajor_getNames(option, slide_4_2_0_data),
        columns: exampleMajor_getData(option, subBachelorInstitutions, slide_4_2_0_data),
        groups: [exampleMajor_getKeys(option, slide_4_2_0_data)],
        colors: exampleMajor_getColors(option, slide_4_2_0_data),

        unload: true
      });
      exampleMajor_updateTotals('#container-graph-4-2-0', option, subBachelorInstitutions, slide_4_2_0_data);
      $('#container-graph-4-2-0 .the-tally-flex').removeClass('hidden');
    }
  });


  /*
  Utility functions
  */

  // Used for updating the mini graphs and stats for slide 3-3, 4-3
  function updateSideData (x, slide, section, institutions, dataObject) {
    // The Stats Data //
    $(slide + ' .left-panel.data .ethnicity').html( ethnicity_getNames(x.id, false)[x.id]);
    $(slide + ' .stats-general .percentage > span').html(percentify(x.ratio));
    $(slide + ' .stats-general .totals > span').html(x.value.toLocaleString());

    // Update Tables Highlight //
    $(slide + '-table .selected').removeClass('selected');
    $(slide + '-table .' + x.id ).addClass('selected');

    // Update Mini-Maps //
    for (var inst in dataObject) {
      if (dataObject.hasOwnProperty(inst)) {
        $( slide + '-mini-graphs .mini-graph.' + inst + ' .percent').html( percentify( getPercent( dataObject[inst].data(), x.id ) ) );
      }
    }

    function getPercent( data, name ){
      var total = 0; var single = 0; var bit; for (bit of data) { total = total + bit.values[0].value; if( bit.id === name ){ single = bit.values[0].value; } } return(single / total);
    }
  }


  function generateTable (dataObject) {
    var carriersArray = Object.keys(dataObject);
    var ethCodeArray = Object.keys(dataObject[carriersArray[0]]);
    var temp;
    var tableObject;
    var rows = '';
    var tableHead = '<thead><tr><th class="table-origin">Top Majors Among Bachelor’s Recipients Overall and by Race/Ethnicity, <span class="Year">2013</span></th>';
    for ( var ethCode of ethCodeArray) {
        rows = rows + '<th class="rotate ' + ethCode + '"><div>' + ethnicity_getNames(ethCode, true)[ethCode] + '</div></th>';
    }
    tableHead = tableHead + rows + '</tr></thead>';
    rows = '';
    var tableBody = '<tbody>';
    for (var dataRow in dataObject) {
      if (dataObject.hasOwnProperty(dataRow)) {
        rows = rows + '<tr><td class="major">' + dataRow + '</td>';
        temp = '';
        var scores = dataObject[dataRow];
        for (var score in scores) {
          if (scores.hasOwnProperty(score)) {
            if(scores[score] !== null){
              temp = temp + '<td class="' + score + '">' + scores[score] + '</td>';
            }else{
              temp = temp + '<td class="' + score + ' not-applicable">n/a</td>';
            }
          }
        }
        rows = rows + temp + '</tr>';
      }
    }

    tableBody = tableBody + rows + '</tbody>';
    tableObject = tableHead + tableBody;
    return tableObject;
  }

  function slideSize (percent) {
    var slideWidth = $('#slide-0-0').width();
    var slideHeight = $('#slide-0-0').height();
    return { width: Math.floor(slideWidth * percent), height: Math.floor(slideHeight * percent) };
  };

  function percentify (ratio) {
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

  function instituation_getNames(institautions, style){
    if(style === 'array'){
      var result = [];
    }else{
      var result = {};
    }

    if( typeof institautions !== 'string' && isIterable(institautions) === true){
      for (var institaution of institautions) {
        if (genericInstitutionData.hasOwnProperty(institaution)) {
          if(style === 'array'){
            result.push(genericInstitutionData[institaution].Name);
          }else{
            result[institaution] = genericInstitutionData[institaution].Name;
          }
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
      for (var eth in genericEthnicityData) {
        if (genericEthnicityData.hasOwnProperty(eth)) {
          result[eth] = genericEthnicityData[eth].ActiveColor;
        }
      }
    }else{
      result[ethnicity] = genericEthnicityData[ethnicity].ActiveColor;
    }
    return result;
  }

  function ethnicity_getNames(ethCode, short, style){
    var result;
    var ethObj;
    var temp;
    if(style === 'array'){
      result = [];
    }else{
      result = {};
    }

    if (ethCode === undefined) {
      for (ethObj in genericEthnicityData) {
        if (genericEthnicityData.hasOwnProperty(ethObj)) {
          if(style === 'array'){
            if(short === true){
              temp = (genericEthnicityData[ethObj].ShortName !== undefined) ? genericEthnicityData[ethObj].ShortName : genericEthnicityData[ethObj].Name;
            }else{
              temp = genericEthnicityData[ethObj].Name;
            }
            result.push(temp);
          }else{
            if(short === true){
              result[ethObj] = (genericEthnicityData[ethObj].ShortName !== undefined) ? genericEthnicityData[ethObj].ShortName : genericEthnicityData[ethObj].Name;
            }else{
              result[ethObj] = genericEthnicityData[ethObj].Name;
            }
          }
        }
      }
    }
    else {
      if(short === true){
          result[ethCode] = (genericEthnicityData[ethCode].ShortName !== undefined) ? genericEthnicityData[ethCode].ShortName : genericEthnicityData[ethCode].Name;
        }else{
          result[ethCode] = genericEthnicityData[ethCode].Name;
        }
    }
    return result;
  }

  function exampleMajor_getKeys(year, data, keyOverride){
    var keys = [];
    var dataYear = 'Y' + year;
    for ( var i = 0; i < data.length; i++) {
       var majorCode = data[i].Major.replace(/\s/g, '').replace(/\(|\)|,|\/|&|\./g, '');

      if(keyOverride !== undefined){
        keys.push(majorCode + '_' + keyOverride);
      }
      else{
        keys.push(majorCode);
      }
    }
    return keys;
  };

  function exampleMajor_getData(year, institutions, data, keyOverride){
    var result = [];
    var dataYear = 'Y' + year;
    for ( var i = 0; i < data.length; i++) {
      var scores = [];
       var majorCode = data[i].Major.replace(/\s/g, '').replace(/\(|\)|,|\/|&|\./g, '');
      for (var institution of institutions ) {
        scores.push(data[i][dataYear][institution]);
      }

      if(keyOverride !== undefined){
        scores.unshift(majorCode + '_' + keyOverride);
      }
      else{
        scores.unshift(majorCode);
      }

      result.push(scores);
    }
    return result;
  }

  function exampleMajor_getNames(year, data, style, keyOverride){
    var result = {};
    var dataYear = 'Y' + year;
    for ( var i = 0; i < data.length; i++) {
       var majorCode = data[i].Major.replace(/\s/g, '').replace(/\(|\)|,|\/|&|\./g, '');
      // result[dataYear + '_' + majorName] = data[i].Major;

      if(keyOverride !== undefined){
        result[majorCode + '_' + keyOverride] = data[i].Major;
      }
      else{
        result[majorCode] = data[i].Major;
      }
    }
    return result;
  }

  function exampleMajor_getColors(year, data){
    var result = {};
    var dataYear = 'Y' + year;
    for ( var i = 0; i < data.length; i++) {
       var majorCode = data[i].Major.replace(/\s/g, '').replace(/\(|\)|,|\/|&|\./g, '');
      // result[dataYear + '_' + majorName] = data[i].ColorActive;
      result[majorCode] = data[i].ColorActive;
    }
    return result;
  }

  function exampleMajor_calculateTotals(year, institutions, data){
    var result = {};
    var dataYear = 'Y' + year;
     var total = 0;
    for (var institution of institutions ) {
      for ( var i = 0; i < data.length; i++) {
          total = total + data[i][dataYear][institution];
      }
      result[institution] = total;
      total = 0;
    }
    return result;
  }

  function exampleMajor_updateTotals(slide, year, institutions, data){
     var totals = exampleMajor_calculateTotals(year, institutions, data);
    for (var institution of institutions) {
      $(slide + ' .' + institution + ' .value').html(totals[institution].toLocaleString());
    }
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
      bottom: 100,
      left: 50,
    },
    data: {
      rows: slide_2_0_0_data,
      x: 'Year',
      colors:{
        'Projected Degrees': '#35768A',
        'Degrees Added Per Year': '#9EA771',
        'Cumulative Degrees': '#A93B41'
      },
      type: 'area',
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
    point: {
      show: false
    },
    size: {
      width: slideSize(0.5).width,
      height: slideSize(0.6).height
    },
    tooltip: {
      format: {
        title: function (d) { return d; },
        value: function (value, ratio, id) {
          var format = (id === 'Cumulative Degrees' || id === 'Degrees Added Per Year' || id === 'Projected Degrees') ? d3.format(',') : false;
          return format(value);
        }
      }
    },
    legend: {
      position: 'inset',
      inset: {
        anchor: 'bottom-right',
        x: (slideSize(0.5).width)/3,
        y: -10,
        step: 3
      }
    },
    tooltip:{
      grouped: false
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
      onmouseover: function (d, i) {
        var currentColor = d3.select(i).style("fill");
        d3.select(i).style("fill", "#35768a").on("mouseleave", function(d) { d3.select(this).style("fill", currentColor); });
      },
    },
    legend: {
      hide: true
    },
    size: {
      width: slideSize(0.45).width,
      height: slideSize(0.48).width
    },
    pie: {
      label: {
        format: function (value, ratio, id) {
          return percentify(ratio) + " " + id ;
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

  var slide_3_2_0 = c3.generate({
    bindto: '#graph-3-2-0',
    padding: {
      top: 10,
      right: 50,
      bottom: 10,
      left: slideSize(0.4).width
    },
    size: {
      width: slideSize(0.9).width,
      height: slideSize(0.4).width
    },
    data: {
      columns: exampleMajor_getData(2004, bachelorInstitutions, slide_3_2_0_data),
      groups: [exampleMajor_getKeys(2004, slide_3_2_0_data)],
      names: exampleMajor_getNames(2004, slide_3_2_0_data),
      type: 'bar',
      colors: exampleMajor_getColors(2004, slide_3_2_0_data),
    },
    axis: {
      rotated: true,
      x: {
        type: 'category',
        categories: instituation_getNames(bachelorInstitutions, 'array')
      },
      y: {
        tick: {
          format: d3.format('s')
        }
      }
    },
    legend: {
      position: 'inset',
      inset: {
        anchor: 'top-left',
        x: -(slideSize(0.4).width),
        y: 0,
        step: 20
      }
    },
    tooltip:{
      grouped: false
    }
  });


  // slide
  var slide_3_3_0_data_keys = slide_3_3_0_data.map(function(x) {
    return x;
  });

  var slide_3_3_0_data_TotalsValues = slide_3_3_0_data.map(function(x) {
    var totals = x.uc + x.csu + x.nonprofit + x.forprofit;
    return [ x.ethCode, totals];
  });

  var slide_3_3_0 = c3.generate({
    bindto: '#graph-3-3-0',
    padding: graph_zero_padding,
    data: {
      columns: slide_3_3_0_data_TotalsValues,
      keys: slide_3_3_0_data_keys,
      type: 'pie',
      colors: ethnicity_getColors(),
      names: ethnicity_getNames(undefined, false),
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
              updateSideData(d, '#slide-3-3', 3, bachelorInstitutions, {"uc": graph_3_3_uc, "csu": graph_3_3_csu, "nonprofit": graph_3_3_nonprofit, "forprofit": graph_3_3_forprofit} );
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
          updateSideData(d, '#slide-3-3', 3, bachelorInstitutions, {"uc": graph_3_3_uc, "csu": graph_3_3_csu, "nonprofit": graph_3_3_nonprofit, "forprofit": graph_3_3_forprofit} );
        }
      }
    },
    legend: {
      hide: true
    },
    size: {
      width: slideSize(0.5).width,
      height: slideSize(1).height
    },
    pie: {
      label: {
        format: function (value, ratio, id) {
          return percentify(ratio) + " " + ethnicity_getNames(id, true, "array")[id];
        }
      }
    }
  });


  // Mini Graphs //

  // function to get 'Y' values for Mini Pie Graphs
  // UC
  var slide_3_3_0_data_Values_uc = slide_3_3_0_data.map(function(x) {
    if(x.uc){
      return [x.ethCode, x.uc];
    }
  });

  // CSU
  var slide_3_3_0_data_Values_csu = slide_3_3_0_data.map(function(x) {
    if(x.csu){
      return [x.ethCode, x.csu];
    }
  });

  // FP
  var slide_3_3_0_data_Values_forprofit = slide_3_3_0_data.map(function(x) {
    if(x.forprofit){
      return [x.ethCode, x.forprofit];
    }
  });

  // NFP
  var slide_3_3_0_data_Values_nonprofit = slide_3_3_0_data.map(function(x) {
    if(x.nonprofit){
      return [x.ethCode, x.nonprofit];
    }
  });

  // 1 Mini Pie Graph
  var graph_3_3_uc = c3.generate({
    bindto: '#graph-3-3-uc',
    padding: graph_zero_padding,
    data: {
      columns: slide_3_3_0_data_Values_uc,
      keys: slide_3_3_0_data_keys,
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
      height: slideSize(0.15).height
    },
    tooltip: {
      show: false
    },
    pie: {
      label:{
        show: false
      }
    }
  });

  // 2 Mini Pie Graph
  var graph_3_3_csu = c3.generate({
    bindto: '#graph-3-3-csu',
    padding: graph_zero_padding,
    data: {
      columns: slide_3_3_0_data_Values_csu,
      keys: slide_3_3_0_data_keys,
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
      height: slideSize(0.15).height
    },
    tooltip: {
      show: false
    },
    pie: {
      label:{
        show: false
      }
    }
  });

  // 3 Mini Pie Graph
  var graph_3_3_forprofit = c3.generate({
    bindto: '#graph-3-3-forprofit',
    padding: graph_zero_padding,
    data: {
      columns: slide_3_3_0_data_Values_forprofit,
      keys: slide_3_3_0_data_keys,
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
      height: slideSize(0.15).height
    },
    tooltip: {
      show: false
    },
    pie: {
      label:{
        show: false
      }
    }
  });

  // 4 Mini Pie Graph
  var graph_3_3_nonprofit = c3.generate({
    bindto: '#graph-3-3-nonprofit',
    padding: graph_zero_padding,
    data: {
      columns: slide_3_3_0_data_Values_nonprofit,
      keys: slide_3_3_0_data_keys,
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
      height: slideSize(0.15).height
    },
    tooltip: {
      show: false
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
      width: slideSize(0.5).width,
      height: slideSize(0.17).height
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
      width: slideSize(0.4).width,
      height: slideSize(0.45).height
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
    tooltip:{
      grouped: false
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
      onmouseover: function (d, i) {
        var currentColor = d3.select(i).style("fill");
        d3.select(i).style("fill", "#35768a").on("mouseleave", function(d) { d3.select(this).style("fill", currentColor);});
      },
    },
    legend: {
      hide: true
    },
    size: {
      width: slideSize(0.45).width,
      height: slideSize(0.48).width
    },
    pie: {
      label: {
        format: function (value, ratio, id) {
          return percentify(ratio) + " " + id;
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

  var slide_4_2_0 = c3.generate({
    bindto: '#graph-4-2-0',
    padding: {
      top: 10,
      right: 50,
      bottom: 10,
      left: slideSize(0.5).width
    },
    size: {
      width: slideSize(0.9).width,
      height: slideSize(0.4).width
    },
    data: {
      columns: exampleMajor_getData(2004, subBachelorInstitutions, slide_4_2_0_data),
      groups: [exampleMajor_getKeys(2004, slide_4_2_0_data)],
      names: exampleMajor_getNames(2004, slide_4_2_0_data),
      type: 'bar',
      colors: exampleMajor_getColors(2004, slide_4_2_0_data),
    },
    axis: {
      rotated: true,
      x: {
        type: 'category',
        categories: instituation_getNames(subBachelorInstitutions, 'array')

      },
      y: {
        tick: {
          format: d3.format('s')
        }
      }
    },
    legend: {
      position: 'inset',
      inset: {
        anchor: 'top-left',
        x: -(slideSize(0.45).width),
        y: 0,
        step: 20
      }
    },
    tooltip:{
      grouped: false
    }
  });

  // slide
  var slide_4_3_0_data_keys = slide_4_3_0_data.map(function(x) {
    return x;
  });

  var slide_4_3_0_data_TotalsValues = slide_4_3_0_data.map(function(x) {
    var totals = x.cc + x.nonprofit + x.forprofit;
    return [ x.ethCode, totals];
  });

  var slide_4_3_0 = c3.generate({
    bindto: '#graph-4-3-0',
    padding: graph_zero_padding,
    data: {
      columns: slide_4_3_0_data_TotalsValues,
      keys: slide_4_3_0_data_keys,
      type: 'pie',
      names: ethnicity_getNames(undefined, false),
      colors: ethnicity_getColors(),
      onclick: function(d) {
        var leftPanelWidth = $('#slide-4-3 .left-panel').width();

        // If the info panel is not .hidden, slide it out and present data panel
        if($('#slide-4-3 .left-panel.info').hasClass('hidden') === false ){

          //start info slide out animation
          $('#slide-4-3 .left-panel.info').animate(
            {left: -leftPanelWidth},
            500,
            "swing",
            function(){
              // swap out the info div with the data div
              $('#slide-4-3 .left-panel.info').addClass('hidden');
              $('#slide-4-3 .left-panel.data').removeClass('hidden');

              updateSideData(d, '#slide-4-3', 4, bachelorInstitutions, {"cc": graph_4_3_cc, "nonprofit": graph_4_3_nonprofit, "forprofit": graph_4_3_forprofit} );
            }
          );
          //end info slide out animation

          //start data slide in animation
          $('#slide-4-3 .left-panel.data').css('left', -leftPanelWidth);
          $('#slide-4-3 .left-panel.data').animate(
            {left: 0},
            1500,
            "swing"
          );
          //end data slide in animation

        }

        // else -- the data panel is up, just update the content
        else{
          updateSideData(d, '#slide-4-3', 4, bachelorInstitutions, {"cc": graph_4_3_cc, "nonprofit": graph_4_3_nonprofit, "forprofit": graph_4_3_forprofit} );
        }
      }
    },
    legend: {
      hide: true
    },
    size: {
      width: slideSize(0.5).width,
      height: slideSize(1).height
    },
    pie: {
      label: {
        format: function (value, ratio, id) {
          return percentify(ratio) + " " + ethnicity_getNames(id, true, "array")[id];
        }
      }
    }
  });


  // Mini Graphs //

  // function to get 'Y' values for Mini Pie Graphs
  // CC
  var slide_4_3_0_data_Values_cc = slide_4_3_0_data.map(function(x) {
    if(x.cc){
      return [x.ethCode, x.cc];
    }
  });

  // FP
  var slide_4_3_0_data_Values_forprofit = slide_4_3_0_data.map(function(x) {
    if(x.forprofit){
      return [x.ethCode, x.forprofit];
    }
  });

  // NFP
  var slide_4_3_0_data_Values_nonprofit = slide_4_3_0_data.map(function(x) {
    if(x.nonprofit){
      return [x.ethCode, x.nonprofit];
    }
  });


  // 1 Mini Pie Graph
  var graph_4_3_cc = c3.generate({
    bindto: '#graph-4-3-cc',
    padding: graph_zero_padding,
    data: {
      columns: slide_4_3_0_data_Values_cc,
      keys: slide_4_3_0_data_keys,
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
      height: slideSize(0.15).height
    },
    tooltip: {
      show: false
    },
    pie: {
      label:{
        show: false
      }
    }
  });


  // 2 Mini Pie Graph
  var graph_4_3_forprofit = c3.generate({
    bindto: '#graph-4-3-forprofit',
    padding: graph_zero_padding,
    data: {
      columns: slide_4_3_0_data_Values_forprofit,
      keys: slide_4_3_0_data_keys,
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
      height: slideSize(0.15).height
    },
    tooltip: {
      show: false
    },
    pie: {
      label:{
        show: false
      }
    }
  });

  // 4 Mini Pie Graph
  var graph_4_3_nonprofit = c3.generate({
    bindto: '#graph-4-3-nonprofit',
    padding: graph_zero_padding,
    data: {
      columns: slide_4_3_0_data_Values_nonprofit,
      keys: slide_4_3_0_data_keys,
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
      height: slideSize(0.15).height
    },
    tooltip: {
      show: false
    },
    pie: {
      label:{
        show: false
      }
    }
  });

  // slide
  var slide_4_4_0 = c3.generate({
    bindto: '#graph-4-4-0',
    data: {
      columns: slide_4_4_0_data,
      colors: instituation_getColors(subBachelorInstitutions),
      names: instituation_getNames(subBachelorInstitutions),
      type: 'bar',
      labels: {
        format: function (value, id, index, subIndex) {
          return instituation_getNames(id) + ' - ' + value + '%';
        }
      },
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
      width: slideSize(0.5).width,
      height: slideSize(0.15).height
    },
    tooltip: {
      show: false
    }
  });

  var slide_4_4_1 = c3.generate({
    bindto: '#graph-4-4-1',
    data: {
      x: 'Year',
      columns: slide_4_4_1_data,
      type: 'area',
      colors: instituation_getColors(subBachelorInstitutions),
      names: instituation_getNames(subBachelorInstitutions),
    },
    size: {
      width: slideSize(0.4).width,
      height: slideSize(0.45).height
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
    tooltip:{
      grouped: false
    }
  });

  //Primer
  $('#slide-3-3-table').html(generateTable(slide_3_3_1_data));
  $('#slide-4-3-table').html(generateTable(slide_4_3_1_data));

  exampleMajor_updateTotals('#container-graph-3-2-0', 2004, bachelorInstitutions, slide_3_2_0_data);
  exampleMajor_updateTotals('#container-graph-4-2-0', 2004, subBachelorInstitutions, slide_4_2_0_data);
}
