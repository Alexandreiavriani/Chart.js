var ctx = document.getElementById('myChart').getContext('2d');
Chart.defaults.global.defaultFontColor = 'red';
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['rgb(255, 99, 132)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(75, 192, 192, 0.2)',],
            borderColor: ['rgb(255, 99, 132)',
            'rgba(255, 206, 86, 1)'],
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: 'green'
            }
        }
    }
});
  