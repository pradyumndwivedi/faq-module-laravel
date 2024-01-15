$(document).ready(function () {
    $('#category_list_rental').DataTable({
        searching: true
    });

    /*
    Created By: Sneha Yadav
    Created at: 20 December 2023
    Use: To add Manage Rental- Category List Page.
    */

    $('#add_rentalcategory_form').validate({
        rules: {
            rent_type: {
                required: true
            },
            rental_product_category_title: {
                required: true
            },
        },
        messages: {
            rent_type: {
                required: "Please Select The Type"
            },
            rental_product_category_title: {
                required: "Please Enter Category Name",
            },
        },
        submitHandler: function (form) {
            var formData = new FormData(form);

            $.ajax({
                url: BASE_URL + '/manage_rental_category/store_category',
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function (data) {
                    if (data.status == 'success') {

                        toastr.success('Category Added Successfully');
                        window.location.href = BASE_URL + '/manage_rental_category/category';
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
    Created at: 20 December 2023
    Use: To edit Manage Rental- Category List Page.
    */


    $(document).on('click', '.edit_category_details', function (e) {
        let id = $(this).data('id');
        let name = $(this).data('name');

        $('.id').val(id);
        $('.name').val(name);
    });

    $('#edit_category_form').validate({
        rules: {
            rent_type_edit: {
                required: true
            },
            rental_product_category_title_edit: {
                required: true
            },
        },
        messages: {
            rent_type_edit: {
                required: "Please Select The Type"
            },
            rental_product_category_title_edit: {
                required: "Please Enter Category Name",
            },
        },
        submitHandler: function (form) {
            var formData = new FormData(form);

            $.ajax({
                url: BASE_URL + '/manage_rental_category/update_category',
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function (data) {
                    if (data.status == 'success') {
                        toastr.success('Category Updated Successfully');
                        window.location.href = BASE_URL + '/manage_rental_category/category';
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

    $('#editCMSCategory').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var id = button.data('id');
        var rentType = button.data('rent-type');
        var categoryTitle = button.data('category-title');
        console.log(categoryTitle);

        $('#id').val(id);
        $('#rent_type_edit').val(rentType);
        $('.name_category').val(categoryTitle);
        // console.log(Title);
    });


    /*
    Created By: Sneha Yadav
    Created at: 20 December 2023
    Use: To change status Manage Rental- Category List Page.
    */

    $(document).on('click', '.status_onoffswitch_rental', function () {
        let id = $(this).data('id');
        let is_active = 0;
        if ($(this).prop("checked") == true) {
            is_active = 1;
        } else {
            is_active = 0;
        }
        $.ajax({
            url: BASE_URL + "/manage_rental_category/change_category",
            type: 'POST',
            headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
            data: {
                id: id, is_active: is_active, _token: CSRF,
            },
            success: function (data) {
                if (data.success) {
                    toastr.success('Category Updated Successfully');
                    window.location.href = BASE_URL + '/manage_rental_category/category';
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
    Created at: 20 December 2023
    Use: To delete Manage Rental- Category List Page.
    */

    $(document).on('click', '#delete_rent_btn', function () {
        let category_id = $(this).data('id');
        $('#delete_category_modal').modal('show');
        $('#category_id_delete').val(category_id);
    });


    $(document).on('click', '#delete_category_rent_btn', function (event) {
        let id = $('#category_id_delete').val();
        $('#delete_category_modal').modal('hide');
        event.preventDefault();
        $.ajax({
            url: BASE_URL + "/manage_rental_category/delete_category",
            type: 'DELETE',
            headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
            data: {
                id: id, _token: CSRF,
            },
            success: function (result) {
                if (result.status == 'success') {
                    toastr.success(result.message);
                    setTimeout(function () {
                        window.location.href = BASE_URL + '/manage_rental_category/category';
                    }, 1000);
                } else {
                    toastr.error(result.message);
                }
            }

        });
    });

});
