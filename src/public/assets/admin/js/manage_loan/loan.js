// =============================================================== loan Archive js==============================================================
 /**
     * Developed By : Ravindra Gawade
     * Created On : 5 nov 2023
     * uses : to change archive loan status and loan status js
     */
$(document).ready(function() {
    $('#loanarchive_list').DataTable({
        searching: true
    });


    $(".view-btn-loan-archive").on("click", function() {
        var loanReason = $(this).data("reason");
        $("#post-meta-description-archive").val(loanReason);
        $('#exampleModalCenter11').modal('show');
    });
    

    $(".table").on("change", ".active_loan_archive", function() {
        var status = $(this).prop("checked") == true ? 1 : 0;
        // alert(status);
        var program_id = $(this).data("id");
        // alert(program_id);
        $.ajax({
            type: "GET",
            dataType: "json",
            url: BASE_URL + '/manage_loan/archive_loan/status/' + program_id,
            data: {
                status: status,
                program_id: program_id,
            },
            success: function(data) {
                if (status == 1) {
                    toastr.options = {
                        "timeOut": 1000
                    }
                    toastr.success("Status Activate successfully. !!");
                    setTimeout(function() {
                        window.location.reload();
                    }, 1000);
                } else {
                    toastr.options = {
                        "timeOut": 1000
                    }
                    toastr.error("Status Deactivate successfully. !!");

                }
            },
        });
    });



// =======================================================loan main js========================================================================================

    $('#loan_list').DataTable({
        searching: true
    });

    $(".view-btn-loan").on("click", function() {
        var loanReason = $(this).data("reason");
        $("#post-meta-description").val(loanReason);
        $('#exampleModalCenter').modal('show');
    });


    $(".table").on("change", ".active_loan", function() {
        var status = $(this).prop("checked") == true ? 1 : 0;
        // alert(status);
        var program_id = $(this).data("id");
        // alert(program_id);
        $.ajax({
            type: "GET",
            dataType: "json",
            url: BASE_URL + '/manage_loan/list_loan/status/' + program_id,
            data: {
                status: status,
                program_id: program_id,
            },
            success: function(data) {
                if (status == 1) {
                    toastr.options = {
                        "timeOut": 1000
                    }
                    toastr.success("Status Activate successfully. !!");

                } else {
                    toastr.options = {
                        "timeOut": 1000
                    }
                    toastr.error("Status Deactivate successfully. !!");
                    setTimeout(function() {
                        window.location.reload();
                    }, 1000);
                }
            },
        });
    });

});