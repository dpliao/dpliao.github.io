function getRandom(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
};

const ctx = document.getElementById('myChart').getContext('2d');
// const labels = Utils.months({count: 7});
// const data = {
//   labels: labels,
//   datasets: [{
//     label: 'My First Dataset',
//     data: [65, 59, 80, 81, 56, 55, 40],
//     fill: false,
//     borderColor: 'rgb(75, 192, 192)',
//     tension: 0.1
//   }]
// };

var n = [];
var arr = {'TSMC':[], 'ASML':[]};
for(i=1;i<=200*2;i++){
    n.push(i);
    arr['TSMC'].push(getRandom(50, 100));
    arr['ASML'].push(getRandom(0, 50));
};

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: n,
        datasets: [{
            label: 'TSMC',
            data: arr['TSMC'],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'//,
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'//,
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
    {
            label: 'ASML',
            data: arr['ASML'],
            backgroundColor: [
                // 'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'//,
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                // 'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'//,
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        },
        elements: {
            point:{
                radius: 1
            }
        }
    }
});
