const data = [
    'Ford Mustang',
    'Audi A4',
    'BMW X1',
    'Chevrolet Camaro',
    'Dodge Charger',
    'Mercedes S-Klasse',
    'VW ID4',
    'Tesla Y',
    'Renault Megane'
  ];
  
  // Function to filter data based on search input
  function filterData(input) {
    return data.filter(item => item.toLowerCase().includes(input.toLowerCase()));
  }
  
  // Function to display search results
  function displayResults(results) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';
  
    results.forEach(result => {
      const li = document.createElement('li');
      li.textContent = result;
      searchResults.appendChild(li);
    });
  }
  
  // Event listener for search button click
  document.getElementById('searchButton').addEventListener('click', function() {
    const searchTerm = document.getElementById('searchInput').value.trim();
  
    if (searchTerm === '') {
      displayResults([]);
      return;
    }
  
    const filteredResults = filterData(searchTerm);
    displayResults(filteredResults);
  });
  