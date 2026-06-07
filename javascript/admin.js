'use strict'

const ctx = document.getElementById('graficoCrescimento');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    datasets: [
      {
        label: 'Agências ativas',
        data: [200, 120, 380, 280, 180, 150, 300],
        borderColor: '#8b5cf6'
      },
      {
        label: 'Veículos publicados',
        data: [120, 90, 290, 280, 90, 100, 300],
        borderColor: '#22c55e'
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  }
}); 

const botao = document.getElementById('toggleSidebar')
const sidebar = document.querySelector('.sidebar-admin')

botao.addEventListener('click', () => {
  sidebar.classList.toggle('ativa')
})