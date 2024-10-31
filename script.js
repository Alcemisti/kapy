// Fetch the ticker text from a file
fetch('ticker.txt')
  .then(response => response.text())
  .then(data => {
      // Insert text into the ticker
      document.getElementById('ticker-text').innerText = data;
  })
  .catch(error => console.error('Error loading ticker text:', error));
