

window.onload = () => {
    const _get = (arg) => {
        return document.querySelector(arg)
    }
    

    if (_get('.toggle-sidebar-btn')) {
        _get('.toggle-sidebar-btn').addEventListener('click', () => {
            _get('body').classList.toggle('toggle-sidebar')
        })
    }
    
    if(_get('#pieChart')){
        buildPieChart()
    }
}


const buildPieChart = ()=>{
    new ApexCharts(document.querySelector("#pieChart"), {
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
