/*
Created by : Chandan Yadav
Created at : 06 November 2023
Use :  for datatable searching.
*/
$(document).ready(function () {
    $('#category_list').DataTable({
        searching: true
    });
});



/*
Created by : Chandan Yadav
Created at : 06 November 2023
Use : Validate category  form and submit data to db
*/


    $('#add_category_form').validate({
        rules: {
            category_name: {
                required: true
            },
        },
        messages: {
            category_name: {
                required: "Please enter category name",
            },
        },

        submitHandler: function (form) {
            let data = new FormData(form);
            console.log(data);
            $.ajax({
                url: BASE_URL + '/save_category_data',
                type: 'POST',
                headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
                data: data,
                contentType: false,
                processData: false,
                success: function (result) {
                    if (result.status_code == 200) {
                        toastr.success(result.message);
                        setTimeout(function () {
                            window.location.href = BASE_URL + '/manage_category';
                        }, 1000);

                    } else {
                        toastr.error(result.message);
                    }
                }
            });
        }
    });


$(document).on('click', '.edit_category_details', function (e) {
    let id = $(this).data('id');
    let name = $(this).data('name');

    $('.id').val(id);
    $('.name').val(name);
});


/*
Created by : Chandan Yadav
Created at : 06 November 2023
Use : Validate edit category form and submit data to db
*/


    $('#edit_category_form').validate({

        rules: {
            edit_category_name: {
                required: true
            },
        },
        messages: {
            edit_category_name: {
                required: "Please enter category name",
            },
        },

        submitHandler: function (form) {
            let data = new FormData(form);
            console.log(data);
            $.ajax({
                url: BASE_URL + '/update_category_data',
                type: 'POST',
                headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
                data: data, id: id,
                contentType: false,
                processData: false,
                success: function (result) {
                    if (result.status_code == 200) {
                        toastr.success(result.message);
                        setTimeout(function () {
                            window.location.href = BASE_URL + '/manage_category';
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
Created at : 06 November 2023
Use : Change status Active and Inactive
*/

$(document).on('click', '.status_onoffswitch', function () {
    let id = $(this).data('id');
    let is_active = 0;
    if ($(this).prop("checked") == true) {
        is_active = 1;
    } else {
        is_active = 0;
    }
    $.ajax({
        url: BASE_URL + "/change_category_status",
        type: 'POST',
        headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
        data: {
            id: id, is_active: is_active, _token: CSRF,
        },
        success: function (result) {
            if (result.status_code == 200) {
                toastr.success(result.message);
            }
            else {
                toastr.error(result.message);
            }
        }
    });
});


/*
Created by : Chandan Yadav
Created at : 06 November 2023
Use : Delete category  list data.
*/

$(document).on('click', '#delete_btn', function () {
    let category_id = $(this).data('id');
    $('#delete_category_modal').modal('show');
    $('#category_id_delete').val(category_id);
});


$(document).on('click', '#delete_category_form_btn', function (event) {
    let id = $('#category_id_delete').val();
    $('#delete_category_modal').modal('hide');
    event.preventDefault();
    $.ajax({
        url: BASE_URL + "/delete_category_data",
        type: 'DELETE',
        headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
        data: {
            id: id, _token: CSRF,
        },
        success: function (result) {
            if (result.status_code == 200) {
                toastr.success(result.message);
                setTimeout(function () {
                    window.location.href = BASE_URL + '/manage_category';
                }, 1000);
            }
            else {
                toastr.error(result.message);
            }
        }
    });
});
