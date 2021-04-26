$(document).ready(function() {
    var ctx = document.getElementById('gramChart').getContext('2d');
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            datasets: [{
                data: [65, 35],
                backgroundColor: [
                    '#015cab',
                    '#B8D3EB'
                ]
            }]

        }
    });
});