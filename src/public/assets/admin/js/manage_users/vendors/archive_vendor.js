// ===========================================================Archive Vendor============================================================

$('#archive_list').DataTable({
    searching: true
});

$(".tableArchive").on("change", ".active_archive", function() {
    var status = $(this).prop("checked") == true ? 1 : 0;
    // alert(status);
    var program_id = $(this).data("id");
    // alert(program_id);
    $.ajax({
        type: "GET",
        dataType: "json",
        url: BASE_URL + '/manage_user/vendors/updateStatus/' + program_id,
        data: {
            status: status,
            program_id: program_id,
        },
        success: function(data) {
            if (status == 1) {
                toastr.options = {
                    "timeOut": 500
                }
                toastr.success("Status Activate successfully. !!");
                window.location.reload();
            } else {
                toastr.error("Status Deactivate successfully. !!");
            }
        },
    });
});