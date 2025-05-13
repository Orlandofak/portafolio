document.getElementById('quizForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const form = e.target;
  let score = 0;
  const questionScores = [];

  for (let i = 1; i <= 3; i++) {
    const answer = form[`q${i}`].value;
    const val = parseInt(answer);
    score += val;
    questionScores.push(val);
  }

  document.getElementById('result').textContent = `Puntaje total: ${score} / 3`;

  
  const ctx = document.getElementById('resultChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Pregunta 1', 'Pregunta 2', 'Pregunta 3'],
      datasets: [{
        label: 'Puntaje',
        data: questionScores,
        backgroundColor: ['#4CAF50', '#2196F3', '#FFC107']
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true, max: 1 }
      }
    }
  });
});


document.getElementById('downloadPDF').addEventListener('click', () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.text('Resultado del Diagnóstico HTML', 10, 10);
  doc.text(document.getElementById('result').textContent, 10, 20);
  doc.save('diagnostico_html.pdf');
});
