

const moneyFrom = window.data.money.dates.indexOf('2019-01-01');
const creditFrom = window.data.credit.dates.indexOf('2019-01-01');

function mul1000(x) {
  return x * 1000
}

const m2 = window.data.money.m2.slice(moneyFrom).map(mul1000)
const m0 = window.data.money.m0.slice(moneyFrom).map(mul1000)
const credit = window.data.credit.credit.slice(creditFrom)

const data = {
  labels: window.data.money.dates.slice(moneyFrom),
  datasets: [{
    label: 'M2',
    data: m2,
    borderColor: 'rgb(255, 99, 132)',
    hoverOffset: 4
  }, {
    label: 'M0',
    data: m0,
    borderColor: 'rgb(99, 132, 255)',
    hoverOffset: 4
  }, {
    label: 'Credit',
    data: credit,
    borderColor: 'rgb(132, 255, 99)',
    hoverOffset: 4
  }]
};

var myChart = new Chart(
  document.getElementById('myChart'), {
    type: 'line',
    data,
    options: {
      radius: 0,
      maintainAspectRatio: false,
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
});