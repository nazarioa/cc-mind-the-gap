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

  var percentify = function(ratio){
    return Math.floor((ratio * 100)) + '%';
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
          return percentify(ratio) + "\n " + id ;
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
      percentify(x.ratio)
    );
    $('#slide-3-3 .stats-general .totals > span').html(
      function(){
        // return x.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return x.value.toLocaleString();
      }
    );
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
          return percentify(ratio) + "\n " + id ;
        }
      }
    }
  });

  //fourups test
  var slide_3_3_1 = c3.generate({
    bindto: '#graph-3-3-1',
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
    }
  });

  //fourups test
  var slide_3_3_2 = c3.generate({
    bindto: '#graph-3-3-2',
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
    }
  });

  //fourups test
  var slide_3_3_3 = c3.generate({
    bindto: '#graph-3-3-3',
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
    }
  });

  //fourups test
  var slide_3_3_4 = c3.generate({
    bindto: '#graph-3-3-4',
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
    }
  });

  // slide
  var slide_3_4_0 = c3.generate({
    bindto: '#graph-3-4-0',
    data: {
      columns: slide_3_4_0_data,
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
    tooltip: {
      show: false
    }
  });

}
