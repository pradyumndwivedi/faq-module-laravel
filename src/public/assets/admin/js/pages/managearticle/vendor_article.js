/*
Created by : Chandan Yadav
Created at : 03 November 2023
Use : Validate vendor article list form and submit data to db
*/
$(document).ready(function () {
    $('#add_vendor_form').validate({
        rules: {
            title_name: {
                required: true
            },
            article_category:
            {
                required: true
            },
            image:
            {
                required: true

            },
            thumbnail_image:
            {
                required: true

            },
            short_text:
            {
                required: true

            },
            long_description:
            {
                required: true

            },
        },
        messages: {
            title_name: {
                required: "Please enter title name",
            },
            article_category:
            {
                required: "Please select article category",
            },
            image:
            {
                required: "Please upload image",
            },
            thumbnail_image:
            {
                required: "Please upload thumbnail image",
            },
            short_text:
            {
                required: "Please enter short text",
            },
            long_description:
            {
                required: "Please enter description",
            },

        },

        submitHandler: function (form) {
            let data = new FormData(form);

            console.log(data);
            $.ajax({
                url: BASE_URL + '/save_vendor_data',
                type: 'POST',
                headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
                data: data,
                contentType: false,
                processData: false,
                success: function (result) {
                    if (result.status_code == 200) {
                        toastr.success(result.message);
                        setTimeout(function () {
                            window.location.href = BASE_URL + '/cms/news_ideas/vendor';
                        }, 1000);

                    } else {
                        toastr.error(result.message);
                    }
                }
            });
        }
    });
});

/*
Created by : Chandan Yadav
Created at : 03 November 2023
Use : Validate vendor article list form and submit data to db
*/

$(document).ready(function () {
    $('#edit_vendor_form').validate({
        rules: {
            edit_title: {
                required: true
            },
            edit_category:
            {
                required: true
            },
            edit_image:
            {
                required: true

            },
            edit_thumbnail_image:
            {
                required: true

            },
            edit_date:
            {
                required: true

            },
        },
        messages: {
            edit_title: {
                required: "Please enter title name",
            },
            edit_category:
            {
                required: "Please select article category",
            },
            edit_image:
            {
                required: "Please upload image",
            },
            edit_thumbnail_image:
            {
                required: "Please upload image",
            },
            edit_date:
            {
                required: "Please enter change date",
            },
        },

        submitHandler: function (form) {
            let data = new FormData(form);
            console.log(data);
            $.ajax({
                url: BASE_URL + '/update_vendor_data',
                type: 'POST',
                headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
                data: data, id: id,
                contentType: false,
                processData: false,
                success: function (result) {
                    if (result.status_code == 200) {
                        toastr.success(result.message);
                        setTimeout(function () {
                            window.location.href = BASE_URL + '/cms/news_ideas/vendor';
                        }, 1000);

                    } else {
                        toastr.error(result.message);
                    }
                }
            });
        }
    });
});


/*
Created by : Chandan Yadav
Created at : 03 November 2023
Use : Change status Active and Inactive
*/

$(document).on('click', '.status_onoffswitchvendor', function () {
    let id = $(this).data('id');
    let is_active = 0;
    if ($(this).prop("checked") == true) {
        is_active = 1;
    } else {
        is_active = 0;
    }
    $.ajax({
        url: BASE_URL + "/change_vendor_status",
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
Created at : 03 November 2023
Use : Delete vendor article list data.
*/

$(document).on('click', '#delete_btn', function () {
    let bride_id = $(this).data('id');
    $('#delete_vendor_modal').modal('show');
    $('#vendor_id_delete').val(bride_id);
});


$(document).on('click', '#delete_vendor_form_btn', function (event) {
    let id = $('#vendor_id_delete').val();
    $('#delete_vendor_modal').modal('hide');
    event.preventDefault();
    $.ajax({
        url: BASE_URL + "/delete_vendor_data",
        type: 'DELETE',
        headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
        data: {
            id: id, _token: CSRF,
        },
        success: function (result) {
            if (result.status_code == 200) {
                toastr.success(result.message);
                setTimeout(function () {
                    window.location.href = BASE_URL + '/cms/news_ideas/vendor';
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
Created at : 03 November 2023
Use :  for datatable searching.
*/
$(document).ready(function () {
    $('#vendor_article_list').DataTable({
        searching: true
    });
});


/*
Created by : Chandan Yadav
Created at : 03 November 2023
Use :  for Image preview.
*/
selectImage.onchange = evt => {
    preview = document.getElementById('preview');
    preview.style.display = 'block';
    const [file] = selectImage.files
    if (file) {
        preview.src = URL.createObjectURL(file)
    }
}

selectThumbnailImage.onchange = evt => {
    preview = document.getElementById('previewthumbnailimage');
    preview.style.display = 'block';
    const [file] = selectThumbnailImage.files
    if (file) {
        preview.src = URL.createObjectURL(file)
    }
}







