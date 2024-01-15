

// =============================================================Archive js===================================================
$(document).ready(function () {
    $('#subadminarchive_list').DataTable({
        searching: true
    });


    $(".table").on("change", ".active_archive", function() {
        // alert('hiii');
        var status = $(this).prop("checked") == true ? 1 : 0;
        var program_id = $(this).data("id");
    
        $('#caregiver-archive-modal').modal('show');
    
        $('.download-btn').on('click', function() {
  
            $('#caregiver-archive-modal').modal('hide');
    
            $.ajax({
                type: "GET",
                dataType: "json",
                url: BASE_URL + '/manage_user/subadmins/subadminStatus/' + program_id,
                data: {
                    status: status,
                    program_id: program_id,
                },
                success: function(data) {
                    if (status == 1) {
                        toastr.options = {
                            "timeOut": 500
                        };
                        toastr.success("Status Activate successfully. !!");
                        window.location.reload();
                    } else {
                        toastr.error("Status Deactivate successfully. !!");
                    }
                },
            });
        });
    
        $('.extra-btn, .btn-close').on('click', function() {
            $('#caregiver-archive-modal').modal('hide');
            $(".active_subadmin").prop("checked", status);
            window.location.reload();
        });
    });
    
});
// ===================================================================subadmin js=========================================================
$(document).ready(function () {
    $('#subadmin_list').DataTable({
        searching: true
    });
});

$(".table").on("change", ".active_subadmin", function() {
    var status = $(this).prop("checked") == true ? 1 : 0;
    var program_id = $(this).data("id");

    $('#caregiver-unarchive-modal').modal('show');
    $('.download-btn').on('click', function() {
        $('#caregiver-unarchive-modal').modal('hide');

        $.ajax({
            type: "GET",
            dataType: "json",
            url: BASE_URL + '/manage_user/subadmins/subadminStatus/' + program_id,
            data: {
                status: status,
                program_id: program_id,
            },
            success: function(data) {
                if (status == 1) {
                    toastr.options = {
                        "timeOut": 500
                    };
                    toastr.success("Status Activate successfully. !!");
                } else {
                    toastr.error("Status Deactivate successfully. !!");
                    window.location.reload();
                }
            },
        });
    });

    $('.extra-btn, .btn-close').on('click', function() {
        $('#caregiver-unarchive-modal').modal('hide');
        $(".active_subadmin").prop("checked", status);
        window.location.reload();
    });
});
