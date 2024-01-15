
$(document).ready(function(){

    $('#feedbackduo_table').DataTable({
        "paging": true,
            "info": false,
            "searching": true,
            "order": [
                [3, 'desc']
            ]
    });

    $('.delete_duo').on("click", function () {
        let delete_id = $(this).data('id');
        $('#feedbackModalCenter').modal('show');
        
        $('#confirmDeleteButton').off('click').on("click", function () {
            $.ajax({
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                url: BASE_URL + "/admin/manage_feedback/delete_Duofeedback/" + delete_id,
                type: "DELETE",
              
                success: function (result) {
                    if (result.status === 200) { 
                        $(`.product[data-id="${delete_id}"]`).remove();
                        $('#feedbackModalCenter').modal('hide');
                        setTimeout(function () {
                            window.location.reload();
                            toastr.success('Feedback deleted successfully');
                        }, 1000);
                    }
                },
                complete: function () {
                }
            });
        });
    
        $('#cancelDeleteButton').off('click').on("click", function () {
            $('#feedbackModalCenter').modal('hide');
        });
    });

// ==============================================================Vendor Feedback=========================================================================================


    $('#feedback_table').DataTable({
        "paging": true,
            "info": false,
            "searching": true,
            "order": [
                [3, 'desc']
            ]
    });


     $('.delete_vendor').on("click", function () {
        let delete_id = $(this).data('id');
        $('#exampleModalCenter').modal('show');
        
        $('#confirmDeleteButton').off('click').on("click", function () {
            $.ajax({
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                url: BASE_URL + "/admin/manage_feedback/delete_feedback/" + delete_id,
                type: "DELETE",
              
                success: function (result) {
                    if (result.status === 200) { 
                        $(`.product[data-id="${delete_id}"]`).remove();
                        $('#exampleModalCenter').modal('hide');
                        setTimeout(function () {
                            window.location.reload();
                            toastr.success('Feedback deleted successfully');
                        }, 1000);
                    }
                },
                complete: function () {
                }
            });
        });
    
        $('#cancelDeleteButton').off('click').on("click", function () {
            $('#exampleModalCenter').modal('hide');
        });
    });
})
