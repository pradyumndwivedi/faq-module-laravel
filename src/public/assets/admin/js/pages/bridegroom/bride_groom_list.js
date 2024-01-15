/*
Created by : Chandan Yadav
Created at : 20 November 2023
Use : Validate bride list form and submit data to db
*/

$('#edit_bride_form').validate({
    rules: {
        name: {
            required: true
            },
        wedding_date:
        {
        required: true
        },
        mobile_no:
        {
        required: true

        },
        location:
        {
        required: true

        },
        // captain_assign:
        // {
        //     required: true

        // },
    },
    messages: {
        name: {
        required: "Please enter name",
        },
        wedding_date:
        {
        required: "Please enter wedding date",
        },

        mobile_no:
        {
        required: "Please enter mobile number",
        },
        location:
        {
        required: "Please enter location",
        },
        // captain_assign:
        // {
        //     required: "Please enter captain assign",
        // },

    },

    submitHandler: function (form) {
        let data = new FormData(form);

        console.log(data);
        $.ajax({
            url: BASE_URL + '/update_bride_groom_form',
            type: 'POST',
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            data: data,id:id,
            contentType: false,
            processData: false,
            success: function (result) {
                if (result.status_code == 200) {
                    toastr.success(result.message);
                    setTimeout(function () {
                        window.location.href = BASE_URL + '/manage_user/bride/bride_groom_list';
                    }, 1000);

                } else {
                    toastr.error(result.message);
                }
            }
        });
    }
});


/*
Created by : Chandan Yadav
Created at : 21 November 2023
Use : to show vendor data id,name
*/
$(document).on('click', '.show_vendor_selected', function (e) {
    let id = $(this).data('id');
    let name = $(this).data('name');

    $('.id').text(id);
    $('.name').text(name);
});


/*
Created by : Chandan Yadav
Created at : 21 November 2023
Use : to show delete modal popup
*/
$(document).on('click', '#delete_btn', function(){
    let bride_id = $(this).data('id');
    $('#delete_bride_modal').modal('show');
    $('#bride_id_delete').val(bride_id);
});

/*
Created by : Chandan Yadav
Created at : 21 November 2023
Use : to delete bride groom listing data
*/
$(document).on('click', '#delete_bride_form_btn', function(event){
    let id = $('#bride_id_delete').val();
    $('#delete_bride_modal').modal('hide');
    event.preventDefault();
    $.ajax({
        url: BASE_URL+"/manage_user/bride/bride_delete",
        type: 'DELETE',
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        data: {
            id: id,_token: CSRF,
        },
        success: function (result) {
            if(result.status_code == 200){
                toastr.success(result.message);
                setTimeout(function () {
                    window.location.href = BASE_URL + '/manage_user/bride/bride_groom_list';
                }, 1000);
            }
            else {
                toastr.error(result.message);
            }
        }
    });
});


/*
Created by : Chandan Yadav
Created at : 21 November 2023
Use : to change status archive
*/
$(document).on('change', '.status_onoffswitch', function () {
    let id = $(this).data('id');
    var status=$(this).prop("checked") == true ? 1 : 0;
    $.ajax({
        url: BASE_URL + "/change_archive_status/" + id,
        type: 'GET',
        headers: { 'X-CSRF-TOKEN': $('meta[s="csrf-token"]').attr('content') },
        data: {
            id: id, status: status, _token: CSRF,
        },
            success: function(data) {
                if (status == 1) {
                    toastr.options = {
                        "timeOut": 500
                    }
                    toastr.success(data.message);
                    window.location.reload();
                } else {
                    toastr.error(data.message);
                }
            },

    });
});


/*
Created by : Chandan Yadav
Created at : 21 November 2023
Use : to change status bride and groom
*/
$(document).on('change', '.status_bloom', function () {
    let id = $(this).data('id');
    var status=$(this).prop("checked") == true ? 1 : 0;
    $.ajax({
        url: BASE_URL + "/change_archive_status/" + id,
        type: 'GET',
        headers: { 'X-CSRF-TOKEN': $('meta[s="csrf-token"]').attr('content') },
        data: {
            id: id, status: status, _token: CSRF,
        },
            success: function(data) {
                if (status == 1) {
                    toastr.options = {
                        "timeOut": 500
                    }
                    toastr.success(data.message);

                } else {
                    toastr.error(data.message);
                    window.location.reload();
                }
            },

    });
});
