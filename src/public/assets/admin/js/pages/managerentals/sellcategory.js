$(document).ready(function () {
    $('#category_list_sell').DataTable({
        searching: true
    });

     /*
    Created By: Sneha Yadav
    Created at: 22 December 2023
    Use: To add Manage Rental- Sell Category Page.
    */

    $('#add_sellcategory_form').validate({
        rules: {
            sell_type: {
                required: true
            },
            category_name: {
                required: true
            },
        },
        messages: {
            sell_type: {
                required: "Please Select The Type"
            },
            category_name: {
                required: "Please Enter Category Name",
            },
        },
        submitHandler: function (form) {
            var formData = new FormData(form);

            $.ajax({
                url: BASE_URL + '/manage_sell_category/store_sell_category',
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function (data) {
                    if (data.status == 'success') {
                      
                        toastr.success('Category Added Successfully');
                        window.location.href = BASE_URL + '/manage_sell_category/sell_category';
                    
                        } else {
                        toastr.error('Request failed. Please try again.');
                    }
                },
                error: function (error) {
                    toastr.error('Network Error! Please Try Again After Some Time.');
                }
            });
        }
    });


    /*
    Created By: Sneha Yadav
    Created at: 22 December 2023
    Use: To edit Manage Rental- Sell Category Page.
    */


    $(document).on('click', '.edit_category_details', function (e) {
        let id = $(this).data('id');
        let name = $(this).data('name');
    
        $('.id').val(id);
        $('.name').val(name);
    });
    
    $('#edit_sell_category_form').validate({
        rules: {
            sell_type_edit: {
                required: true
            },
            category_name_edit: {  
                required: true
            },
        },
        messages: {
            sell_type_edit: {
                required: "Please Select The Type"
            },
            category_name_edit: {  
                required: "Please Enter Category Name",
            },
        },
        submitHandler: function (form) {
            var formData = new FormData(form);
    
            $.ajax({
                url: BASE_URL + '/manage_sell_category/update_sell_category',
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function (data) {
                    if (data.status == 'success') {
                        toastr.success('Category Updated Successfully');
                        window.location.href = BASE_URL + '/manage_sell_category/sell_category';
                    } 
                    
                },
                error: function (error) {
                    toastr.error('Network Error! Please Try Again After Some Time.');
                }
            });
        }
    });
    $('#editCMSCategory').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var id = button.data('id');
        var sellType = button.data('sell-type');
        var categoryTitle = button.data('category-title');
        console.log(categoryTitle);
         
        $('#id').val(id);
        $('#sell_type_edit').val(sellType);
        $('.name_category').val(categoryTitle);
        // console.log(Title);
    });
  
    /*
    Created By: Sneha Yadav
    Created at: 22 December 2023
    Use: To change the status Manage Rental- Sell Category Page.
    */


    $(document).on('click', '.status_onoffswitchsell', function () {
        let id = $(this).data('id');
        let is_active = 0;
        if ($(this).prop("checked") == true) {
            is_active = 1;
        } else {
            is_active = 0;
        }
        $.ajax({
            url: BASE_URL + "/manage_sell_category/change_sell_category",
            type: 'POST',
            headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
            data: {
                id: id, is_active: is_active, _token: CSRF,
            },
            success: function (data) {
                if (data.success) {
                    toastr.success('Category Updated Successfully');
                    window.location.href = BASE_URL + '/manage_sell_category/sell_category';
                } else {
                    toastr.error('Request failed. Please try again.');
                }
            },
            error: function (error) {
                toastr.error('Network Error! Please Try Again After Some Time.');
            }
            
        });
    });

    /*
    Created By: Sneha Yadav
    Created at: 22 December 2023
    Use: To Delete Manage Rental- Sell Category Page.
    */

    $(document).on('click', '#delete_sell_btn', function () {
        let category_id = $(this).data('id');
        $('#delete_category_modal').modal('show');
        $('#category_id_delete').val(category_id);
    });
    
    
    $(document).on('click', '#delete_category_sell_btn', function (event) {
        let id = $('#category_id_delete').val();
        $('#delete_category_modal').modal('hide');
        event.preventDefault();
        $.ajax({
            url: BASE_URL + "/manage_sell_category/delete_sell_category",
            type: 'DELETE',
            headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
            data: {
                id: id, _token: CSRF,
            },
            success: function (result) {
                if (result.status == 'success') {
                    toastr.success(result.message);
                    setTimeout(function () {
                        window.location.href = BASE_URL + '/manage_sell_category/sell_category';
                    }, 1000);
                } else {
                    toastr.error(result.message);
                }
            }
            
        });
    });
});