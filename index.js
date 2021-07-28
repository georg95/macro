

const from = 150;

const m2 = window.data.money.m2.slice(from)
const m0 = window.data.money.m0.slice(from)
const ratio = m2.map((_, i) => m2[i] / m0[i])

const data = {
  labels: window.data.money.dates.slice(from),
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
    label: 'Multiplier',
    data: ratio,
    borderColor: 'rgb(132, 255, 99)',
    hoverOffset: 4
  }].slice(0, 2)
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