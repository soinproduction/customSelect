document.addEventListener('DOMContentLoaded', function() {
    // Initialize the single select
    const defaultSelect = new CustomSelect('#default-select', {
        mode: 'single',
        placeholder: 'Choose a color',
        hideOnSelect: true,
        showRemoveButton: false,
        name: 'color-single'
    });

    // Initialize the single select
    const singleSelect = new CustomSelect('#single-select', {
        mode: 'single',
        placeholder: 'Choose a color',
        hideOnSelect: true,
        name: 'color-single'
    });

    // Initialize the multiple select
    const multipleSelect = new CustomSelect('#multiple-select', {
        mode: 'multiple',
        placeholder: 'Choose multiple colors',
        name: 'colors-multiple'
    });

    // Set up event handlers for the "Get Selected Values" buttons
    document.getElementById('single-get-values').addEventListener('click', function() {
        const selectedValues = singleSelect.getValues();
        const resultElement = document.getElementById('single-result');

        if (selectedValues.length === 0) {
            resultElement.innerHTML = '<p>No color selected</p>';
        } else {
            const value = selectedValues[0];
            const option = document.querySelector(`#single-select .option[data-value="${value}"]`);
            const text = option.querySelector('.option-text').textContent;

            resultElement.innerHTML = `
                <p>Selected color: <strong>${text}</strong> (value: ${value})</p>
                <p>Hidden input value: ${document.querySelector('input[name="color-single"]').value}</p>
            `;
        }
    });

    document.getElementById('multiple-get-values').addEventListener('click', function() {
        const selectedValues = multipleSelect.getValues();
        const resultElement = document.getElementById('multiple-result');

        if (selectedValues.length === 0) {
            resultElement.innerHTML = '<p>No colors selected</p>';
        } else {
            let valuesHtml = '<p><strong>Selected colors:</strong></p><ul>';

            selectedValues.forEach(value => {
                const option = document.querySelector(`#multiple-select .option[data-value="${value}"]`);
                const text = option.querySelector('.option-text').textContent;
                valuesHtml += `<li>${text} (value: ${value})</li>`;
            });

            valuesHtml += '</ul>';
            valuesHtml += `<p>Hidden input value: ${document.querySelector('input[name="colors-multiple"]').value}</p>`;

            resultElement.innerHTML = valuesHtml;
        }
    });
});
