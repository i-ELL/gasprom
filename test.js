var myChart = echarts.init(document.getElementById('main'));


 
  var data01 = [
  { period: "Март", name: "В программе ЦП", value: 120 },
  { period: "Апрель", name: "В программе ЦП", value: 120 },
  { period: "Май", name: "В программе ЦП", value: 120 },
  { period: "Июнь", name: "В программе ЦП", value: 120 },
  { period: "Июль", name: "В программе ЦП", value: 120 },
  { period: "Август", name: "В программе ЦП", value: 120 },
  { period: "Сентябрь", name: "В программе ЦП", value: 120 }
  ];
  var data02 = [
  { period: "Март", name: "В программе ИТ", value: 220 },
  { period: "Апрель", name: "В программе ИТ", value: 182 },
  { period: "Май", name: "В программе ИТ", value: 191 },
  { period: "Июнь", name: "В программе ИТ", value: 234 },
  { period: "Июль", name: "В программе ИТ", value: 290 },
  { period: "Август", name: "В программе ИТ", value: 330 },
  { period: "Сентябрь", name: "В программе ИТ", value: 310 },
  ];
  var data03 = [
  { period: "Март", name: "Вне программ ЦП", value: 620 },
  { period: "Апрель", name: "Вне программ ЦП", value: 732 },
  { period: "Май", name: "Вне программ ЦП", value: 701 },
  { period: "Июнь", name: "Вне программ ЦП", value: 734 },
  { period: "Июль", name: "Вне программ ЦП", value: 1090 },
  { period: "Август", name: "Вне программ ЦП", value: 1130 },
  { period: "Сентябрь", name: "Вне программ ЦП", value: 1120 }
  ];
  var data04 = [
  { period: "Март", name: "Вне программ ИТ", value: 120 },
  { period: "Апрель", name: "Вне программ ИТ", value: 132 },
  { period: "Май", name: "Вне программ ИТ", value: 101 },
  { period: "Июнь", name: "Вне программ ИТ", value: 134 },
  { period: "Июль", name: "Вне программ ИТ", value: 290 },
  { period: "Август", name: "Вне программ ИТ", value: 230 },
  { period: "Сентябрь", name: "Вне программ ИТ", value: 220 }
  ];
  let xAxisData = data01.map(data => data.period);
  

  var emphasisStyle = {
  itemStyle: {
      shadowBlur: 10,
      shadowColor: 'rgba(0,0,0,0.3)'
  }
  };

  option = {
  legend: {
      data: ['В программе ЦП', 'В программе ИТ', 'Вне программы ЦП', 'Вне программы ИТ'],
      left: '94px',
      icon: 'circle',
      bottom: 0,
       
  },
  brush: {
      xAxisIndex: 0
  },
  toolbox: {
      feature: {
      magicType: {
          type: ['stack']
      },
      dataView: {}
      }
  },
  tooltip: {
    trigger: 'axis',
    
  },
  xAxis: {
      data: xAxisData,
      name: 'X Axis',
      axisLine: { onZero: true },
      splitLine: { show: false },
      splitArea: { show: false }
  },
  yAxis: {
    
  },
  grid: {
      bottom: 100
  },
  series: [
      {
      name: 'В программе ЦП',
      type: 'bar',
      stack: 'one',
      emphasis: emphasisStyle,
      data: data01.map(data => data.value),
      color: '#56B9F2'
      },
      {
      name: 'В программе ИТ',
      type: 'bar',
      stack: 'one',
      emphasis: emphasisStyle,
      data: data02.map(data => data.value),
      color: '#0078D2'
    },
      {
      name: 'Вне программы ЦП',
      type: 'bar',
      stack: 'two',
      emphasis: emphasisStyle,
      data: data03.map(data => data.value),
      color: '#22C38E'
      },
      {
      name: 'Вне программы ИТ',
      type: 'bar',
      stack: 'two',
      emphasis: emphasisStyle,
      data: data04.map(data => data.value),
      color: '#00724C'
      }
  ]
  };
  myChart.on('brushSelected', function (params) {
  var brushed = [];
  var brushComponent = params.batch[0];
  for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
      var rawIndices = brushComponent.selected[sIdx].dataIndex;
      brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
  }
  myChart.setOption({
      title: {
      backgroundColor: '#333',
      text: 'SELECTED DATA INDICES: \n' + brushed.join('\n'),
      bottom: 0,
      right: '10%',
      width: 100,
      textStyle: {
          fontSize: 12,
          color: '#fff'
      }
      }
  });
  });
  myChart.setOption(option);