

window.onload = () => {

    if (_get('.toggle-sidebar-btn')) {
        _get('.toggle-sidebar-btn').addEventListener('click', () => {
            _get('body').classList.toggle('toggle-sidebar')
        })
    }

    if(_get('#activeEntitiesChart')){
        buildActiveEntitiesChart();
    }

    if(_get('#bookingsChart')){
      buildBookingsChart()
    }

    if(_get('#topSportCategories')){
      buildTopSportCategories()
    }

    if(_get("#cashflowChart")){
      buildCashFlowChart();
    }

    if(_get("#trafficChart")){
      buildTrafficChart();
    }

    if(_get('#activeVisitorsChart')){
      buildActiveVisitorsEntitiesChart();
    }

    const datatables = [...document.querySelectorAll('.datatable')];
    datatables.forEach(datatable => {
      new simpleDatatables.DataTable(datatable);
    })
}

const _get = (arg) => {
    return document.querySelector(arg)
}

const buildActiveEntitiesChart = ()=>{
  new ApexCharts(_get("#activeEntitiesChart"), {
    series: [44, 55, 13, 43, 22],
    chart: {
      height: 350,
      type: 'pie',
      toolbar: {
        show: true
      }
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E']
  }).render();
}

const buildBookingsChart = ()=>{
  new ApexCharts(_get("#bookingsChart"), {
    series: [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
  }).render();
}

const buildTopSportCategories = ()=>{
    new ApexCharts(_get("#topSportCategories"), {
      series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }],
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
          'United States', 'China', 'Germany'
        ],
      }
    }).render();
}

const buildCashFlowChart = ()=>{
  new ApexCharts(_get("#cashflowChart"), {
    series: [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
  }).render();
}

const buildTrafficChart = ()=>{
  new ApexCharts(_get("#trafficChart"), {
    series: [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
  }).render();
}

const buildActiveVisitorsEntitiesChart = ()=>{
  new ApexCharts(_get("#activeVisitorsChart"), {
    series: [44, 55, 13, 43, 22],
    chart: {
      height: 350,
      type: 'pie',
      toolbar: {
        show: true
      }
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E']
  }).render();
}