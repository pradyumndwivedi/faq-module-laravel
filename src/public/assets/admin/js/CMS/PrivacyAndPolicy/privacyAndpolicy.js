$(document).ready(function () {
    $('.ckeditor').ckeditor();
});

// =======================================================Customer Privacy and Policy==================================================================
$('#UpdateCustomerPPBtn').on("click", function (e) {
    let edit_id = $('#hidden_id').val();

    $('#CustomerPPform').validate({

        ignore: [],
        debug: false,
        rules: {
            privacy_policy_customer: {
                required: true,
                // noLeadingSpace:true,
            },
        },
        messages: {
            privacy_policy_customer: {
                required: "Please Enter Privacy And Policy Content",
            },
        },
        submitHandler: function (form) {
            var formData = new FormData(form);
            e.preventDefault(),
                $.ajaxSetup({
                    headers: {
                        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
                    },
                });
            $.ajax({
                url: BASE_URL + "/cms/privacy_policy/customer/update/" + edit_id,
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function (response) {
                    if (response.status == 200) {
                        toastr.success('Customer Privacy And Policy Updated Successfully');
                        // $('#alert-success').addClass('alert alert-success').text(response.message).show();
                        setTimeout(function () {
                            window.location.href = BASE_URL + "/cms/privacy_policy/customer/";
                        }, 1000);
                    } else {
                        toastr.error("Something went wrong");
                    }
                },
            });
        }
    });

})


// =======================================================Vendor Privacy and Policy==================================================================
$('#UpdateVendorPPBtn').on("click", function (e) {
    let edit_id = $('#hidden_id').val();

    $('#VendorPPform').validate({

        ignore: [],
        debug: false,
        rules: {
            privacy_policy_vendor: {
                required: true,
                // noLeadingSpace:true,
            },
        },
        messages: {
            privacy_policy_vendor: {
                required: "Please Enter Privacy And Policy Content",
            },
        },
        submitHandler: function (form) {
            var formData = new FormData(form);
            e.preventDefault(),
                $.ajaxSetup({
                    headers: {
                        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
                    },
                });
            $.ajax({
                url: BASE_URL + "/cms/privacy_policy/vendor/update/" + edit_id,
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function (response) {
                    if (response.status == 200) {
                        toastr.success('Vendor Privacy And Policy Updated Successfully');
                        // $('#alert-success').addClass('alert alert-success').text(response.message).show();
                        setTimeout(function () {
                            window.location.href = BASE_URL + "/cms/privacy_policy/vendor/";
                        }, 1000);
                    } else {
                        toastr.error("Something went wrong");
                    }
                },
            });
        }
    });

})


// =======================================================Captain Privacy and Policy==================================================================
$('#UpdateCaptainPPBtn').on("click", function (e) {
    let edit_id = $('#hidden_id').val();

    $('#CaptainPPform').validate({

        ignore: [],
        debug: false,
        rules: {
            privacy_policy_captain: {
                required: true,
                // noLeadingSpace:true,
            },
        },
        messages: {
            privacy_policy_captain: {
                required: "Please Enter Privacy And Policy Content",
            },
        },
        submitHandler: function (form) {
            var formData = new FormData(form);
            e.preventDefault(),
                $.ajaxSetup({
                    headers: {
                        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
                    },
                });
            $.ajax({
                url: BASE_URL + "/cms/privacy_policy/captain/update/" + edit_id,
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function (response) {
                    if (response.status == 200) {
                        toastr.success('Captain Privacy And Policy Updated Successfully');
                        // $('#alert-success').addClass('alert alert-success').text(response.message).show();
                        setTimeout(function () {
                            window.location.href = BASE_URL + "/cms/privacy_policy/captain/";
                        }, 1000);
                    } else {
                        toastr.error("Something went wrong");
                    }
                },
            });
        }
    });

})