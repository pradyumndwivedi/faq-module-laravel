function sweetAlert(){
    Swal.fire({
        html: `Are you sure want you to <strong>delete ?</strong>`,
        icon: "error",
        buttonsStyling: false,
        showCancelButton: true,
        confirmButtonText: "Ok, got it!",
        cancelButtonText: 'Nope, cancel it',
        customClass: {
            confirmButton: "btn btn-primary",
            cancelButton: 'btn btn-danger'
        }
    });
}