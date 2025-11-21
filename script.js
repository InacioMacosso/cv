document.addEventListener('DOMContentLoaded', () => {
  const printBtn = document.getElementById('print-pdf-btn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
});
