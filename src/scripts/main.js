    document.addEventListener('DOMContentLoaded', function() {
        var cpfInput = document.getElementById('cpf');
        cpfInput.addEventListener('input', function() {
            var value = cpfInput.value.replace(/\D/g, '');
            var formattedValue = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
            cpfInput.value = formattedValue;
        });
    });