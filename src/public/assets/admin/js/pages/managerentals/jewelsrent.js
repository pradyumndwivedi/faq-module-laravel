$(document).ready(function () {

FilePond.registerPlugin(FilePondPluginImagePreview);
const inputElement = document.querySelector('input[type="file"]');

const pond = FilePond.create(inputElement,
{storeAsFile:true,
}
);

});

$('body').on('click', ".update__img-close", function (e) {
    var imgArray = [];
    var file = $(this).parent().data("file");
    var imageId = $(this).parent().data("id");

    for (var i = 0; i < imgArray.length; i++) {
        if (imgArray[i].file.name === file) {
            imgArray.splice(i, 1);
            break;
        }
    }

    var removedImagesInput = $('#removed_Updateimages');
    var removedImages = removedImagesInput.val();
    removedImages += (removedImages === '' ? '' : ',') + imageId;
    removedImagesInput.val(removedImages);

    $(this).parent().parent().remove();
});



/*
Created by : Chandan Yadav
Created at : 28 November 2023
Use : Change status Active and Inactive
*/

$(document).on('click', '.status_onoffswitchjewelsrent', function () {
    let id = $(this).data('id');
    let is_active = 0;
    if ($(this).prop("checked") == true) {
        is_active = 1;
    } else {
        is_active = 0;
    }
    $.ajax({
        url: BASE_URL + "/change_jewelsrent_status",
        type: 'POST',
        headers: { 'X-CSRF-TOKEN': $('meta[s="csrf-token"]').attr('content') },
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
Created at : 28 November 2023
Use : Validate jewelsrent product form and submit data to db
*/
$(document).ready(function () {
    $('#jewelsrent_form').validate({
        rules: {
            // 'file[]':
            // {
            //     required: true
            // },
            status:
            {
                required: true
            },
            title:
            {
                required: true

            },
            description:
            {
                required: true

            },
            sku:
            {
                required: true

            },
            calendar:
            {
                required: true

            },
            rental_product_category:
            {
                required: true

            },
            // booking_duration:
            // {
            //     required: true

            // },
            // booking_duration_cat:
            // {
            //     required: true

            // },
            // category2:
            // {
            //     required: true

            // },
            minimumduration:
            {
                required: true

            },
            maximumduration:
            {
                required: true

            },
            required_confirm:
            {
                required: true
            },
            required_confirm1:
            {
                required: true
            },
            weight:
            {
                required: true
            },
            dimensionlength: {
                required: true

            },
            dimensionwidth: {
                required: true

            },
            dimensionheight: {
                required: true

            },
            upsells:
            {
                required: true

            },
            crosssells:
            {
                required: true

            },
            bundles1:
            {
                required: true

            },
            bundles2:
            {
                required: true

            },
            bundles3:
            {
                required: true

            },
            baseamount:
            {
                required: true

            },
            singledayrental:
            {
                required: true

            },
            taxes:
            {
                required: true

            },
            total:
            {
                required: true

            },
        },
        messages: {
            // 'file[]': {
            //     required: "Please upload image",
            // },
            status:
            {
                required: "Please enter status",
            },
            title:
            {
                required: "Please enter title",
            },
            description:
            {
                required: "Please enter description",
            },
            sku:
            {
                required: "Please enter sku",
            },
            calendar:
            {
                required: "Please enter calendar",
            },
            rental_product_category: {
                required: "Please select category",
            },
            // booking_duration:
            // {
            //     required: "Please select booking duration",
            // },
            // booking_duration_cat:
            // {
            //     required: "Please booking duration",
            // },
            // category2:
            // {
            //     required: "Please select category",
            // },
            minimumduration: {
                required: "Please enter minimumduration",
            },
            maximumduration: {
                required: "Please enter maximumduration",
            },
            required_confirm:{
                required: "Please select confirmation",
            },
            required_confirm1:{
                required: "Please select confirmation",
            },
            weight:
            {
                required: "Please enter weight",
            },
            dimensionlength: {
                required: "Please enter length",
            },
            dimensionwidth: {
                required: "Please enter width",
            },
            dimensionheight: {
                required: "Please enter height",
            },
            upsells: {
                required: "Please enter upsells",
            },
            crosssells:
            {
                required: "Please enter crosssells",
            },
            bundles1:
            {
                required: "Please select bundles",
            },
            bundles2:
            {
                required: "Please select bundles",
            },
            bundles3:
            {
                required: "Please select bundles",
            },
            baseamount:
            {
                required: "Please enter baseamount",
            },
            singledayrental:
            {
                required: "Please enter singledayrental",
            },
            taxes:
            {
                required: "Please enter taxes",
            },
            total:
            {
                required: "Please enter total",
            },
        },

        submitHandler: function (form) {
            let data = new FormData(form);

            console.log(data);
            $.ajax({
                url: BASE_URL + '/save_jewelsrent_data',
                type: 'POST',
                headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
                data: data,
                contentType: false,
                processData: false,
                success: function (result) {
                    if (result.status_code == 200) {
                        toastr.success(result.message);
                        setTimeout(function () {
                            window.location.href = BASE_URL + '/manage_jewels_rents/products';
                        }, 1000);
                    } else {
                        toastr.error(result.message);
                    }
                }
            });
        }
    });

});


$(document).on('click', '.show_jewelsrent_tags', function (e) {
    let id= $(this).data('id');
    let tags = $(this).data('tags');

    $('.id').val(id);
    $('.tags').text(tags);

    $('#recipes-pop').modal('show');

});



$(document).ready(function () {
    $('#edit_jewelsrent_form').validate({
        rules: {
            // 'file[]':
            // {
            //     required: true
            // },
            edit_status: {
                required: true
            },
            edit_title: {
                required: true

            },
            edit_description: {
                required: true

            },
            edit_sku: {
                required: true

            },
            edit_calendar: {
                required: true

            },
            edit_category: {
                required: true

            },
            // category2:
            // {
            //     required: true

            // },
            edit_minimum_duration: {
                required: true

            },
            edit_maximum_duration: {
                required: true

            },
            edit_required_confirm:
            {
                required: true
            },
            edit_required_confirm1:
            {
                required: true
            },
            edit_weight: {
                required: true
            },
            edit_length: {
                required: true

            },
            edit_width: {
                required: true

            },
            edit_height: {
                required: true

            },
            edit_upsells: {
                required: true

            },
            edit_crosssells: {
                required: true

            },
            edit_bundles1: {
                required: true

            },
            // bundles2: {
            //     required: true

            // },
            // bundles3: {
            //     required: true

            // },
            edit_basecost: {
                required: true

            },
            edit_blockcost: {
                required: true

            },
            edit_displaycost: {
                required: true

            },
        },
        messages: {
            // 'file[]': {
            //     required: "Please upload image",
            // },
            edit_status: {
                required: "Please enter status",
            },
            edit_title: {
                required: "Please enter title",
            },
            edit_description: {
                required: "Please enter description",
            },
            edit_sku: {
                required: "Please enter sku",
            },
            edit_calendar: {
                required: "Please enter calendar",
            },
            edit_category: {
                required: "Please select category",
            },
            // category2:
            // {
            //     required: "Please select category",
            // },
            edit_minimum_duration: {
                required: "Please enter minimumduration",
            },
            edit_maximum_duration: {
                required: "Please enter maximumduration",
            },
            edit_required_confirm:{
                required: "Please select confirmation",
            },
            edit_required_confirm1:{
                required: "Please select confirmation",
            },
            edit_weight: {
                required: "Please enter weight",
            },
            edit_length: {
                required: "Please enter dimension",
            },
            edit_width: {
                required: "please enter width"
            },
            edit_height: {
                required: "please enter width"
            },
            edit_upsells: {
                required: "Please enter upsells",
            },
            edit_crosssells: {
                required: "Please enter crosssells",
            },
            // bundles1: {
            //     required: "Please select bundles",
            // },
            // bundles2: {
            //     required: "Please select bundles",
            // },
            bundles3: {
                required: "Please select bundles",
            },
            edit_basecost: {
                required: "Please enter baseamount",
            },
            edit_blockcost: {
                required: "Please enter singledayrental",
            },
            edit_displaycost: {
                required: "Please enter taxes",
            },
        },

        submitHandler: function (form) {
            let data = new FormData(form);

            console.log(data);
            $.ajax({
                url: BASE_URL + '/update_jewelsrent_data',
                type: 'POST',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                data: data, id: id,
                contentType: false,
                processData: false,
                success: function (result) {
                    if (result.status_code == 200) {
                        toastr.success(result.message);
                        setTimeout(function () {
                            window.location.href = BASE_URL +
                                '/manage_jewels_rents/products';
                        }, 1000);

                    } else {
                        toastr.error(result.message);
                    }
                }
            });
        }
    });

});

$(document).ready(function() {
    $('#jewelsrent_list').DataTable({
        searching: true
    });
});


$(document).on('click', '#delete_btn', function () {
    let jewels_id = $(this).data('id');
    $('#delete_jewelsrent_modal').modal('show');
    $('#jewelsrent_id_delete').val(jewels_id);
});


$(document).on('click', '#delete_jewelsrent_form_btn', function (event) {
    let id = $('#jewelsrent_id_delete').val();
    $('#delete_jewelsrent_modal').modal('hide');
    event.preventDefault();
    $.ajax({
        url: BASE_URL + "/delete_jewelsrent_data",
        type: 'DELETE',
        headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
        data: {
            id: id, _token: CSRF,
        },
        success: function (result) {
            if (result.status_code == 200) {
                toastr.success(result.message);
                setTimeout(function () {
                    window.location.href = BASE_URL + '/manage_jewels_rents/products';
                }, 1000);
            }
            else {
                toastr.error(result.message);
            }
        }
    });
});



