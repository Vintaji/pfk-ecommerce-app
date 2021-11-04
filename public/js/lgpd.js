Swal.fire({
    text: 'Esse site utiliza cookies, você concorda ?',
    icon: 'warning',
    showDenyButton: 'Não',
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim',
    denyButtonText: 'Não'
}).then((result) => {
    if (result.isConfirmed) {
        Swal.fire(
            'Os cookies foram salvos.',
        );
    }
    if (result.isDenied) {
        Swal.fire(
            'Os cookis não foram salvos.',
        );
    }
});