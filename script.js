document.getElementById('add-row').addEventListener('click', function() {
    const tableBody = document.querySelector('#invoice-items tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td><input type="text" placeholder="Description"></td>
        <td><input type="number" value="1" min="1"></td>
        <td><input type="number" value="0.00" step="0.01"></td>
        <td class="total-row">0.00</td>
        <td><button class="remove-row">Supprimer</button></td>
    `;
    tableBody.appendChild(newRow);
    
    newRow.querySelector('.remove-row').addEventListener('click', function() {
        tableBody.removeChild(newRow);
        updateTotals();
    });

    updateTotals();
});

function updateTotals() {
    const rows = document.querySelectorAll('#invoice-items tbody tr');
    let subtotal = 0;
    rows.forEach(row => {
        const quantity = row.querySelector('input[type="number"]:nth-of-type(1)').value;
        const price = row.querySelector('input[type="number"]:nth-of-type(2)').value;
        const total = quantity * price;
        row.querySelector('.total-row').innerText = total.toFixed(2);
        subtotal += total;
    });
    document.getElementById('subtotal').innerText = subtotal.toFixed(2);
    document.getElementById('grand-total').innerText = subtotal.toFixed(2);
}