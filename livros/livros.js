
        // JavaScript code goes here
        document.addEventListener('DOMContentLoaded', function () {
          const table = document.getElementById('emp-table');
          const rows = table.getElementsByTagName('tr');
          const predioFilter = document.createElement('select');
          const periodoFilter = document.createElement('select');
    
          // Add an "all" option to the filters
          const allOption = document.createElement('option');
          allOption.textContent = 'All';
          predioFilter.appendChild(allOption.cloneNode(true));
          periodoFilter.appendChild(allOption);
    
          // Get unique values for 'Prédio' and 'Período' columns
          const predioValues = new Set();
          const periodoValues = new Set();
    
          for (let i = 1; i < rows.length; i++) {
            const row = rows[i];
            const predioCell = row.getElementsByTagName('td')[0];
            const periodoCell = row.getElementsByTagName('td')[1];
    
            predioValues.add(predioCell.textContent);
            periodoValues.add(periodoCell.textContent);
          }
    
          // Create options for 'Prédio' filter
          predioValues.forEach((value) => {
            const option = document.createElement('option');
            option.textContent = value;
            predioFilter.appendChild(option);
          });
    
          // Create options for 'Período' filter
          periodoValues.forEach((value) => {
            const option = document.createElement('option');
            option.textContent = value;
            periodoFilter.appendChild(option);
          });
    
          // Add event listeners to the filters
          predioFilter.addEventListener('change', filterTable);
          periodoFilter.addEventListener('change', filterTable);
    
          // Insert the filters into the table header
          table.rows[0].cells[0].appendChild(predioFilter);
          table.rows[0].cells[1].appendChild(periodoFilter);
    
          // Function to filter the table
          function filterTable() {
            const selectedPredio = predioFilter.value;
            const selectedPeriodo = periodoFilter.value;
    
            for (let i = 1; i < rows.length; i++) {
              const row = rows[i];
              const predioCell = row.getElementsByTagName('td')[0];
              const periodoCell = row.getElementsByTagName('td')[1];
    
              const predioMatch = selectedPredio === 'All' || predioCell.textContent === selectedPredio;
              const periodoMatch = selectedPeriodo === 'All' || periodoCell.textContent === selectedPeriodo;
    
              row.style.display = predioMatch && periodoMatch ? 'table-row' : 'none';
            }
          }
        });