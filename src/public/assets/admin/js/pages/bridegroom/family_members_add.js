$('#add_family').validate({
    rules: {
        family_members: {
            required: true,

        },
        email: {
            required: true,
            email: true,
        },
        first_name: {
            required: true,

        },
        location: {
            required: true,

        },
        last_name: {
            required: true,

        },
        mobile_no:{
            required: true,
        }
    },
    messages: {
        family_members: {
            required: "Please enter your family members",
        },

        email: {
            required: "Please enter your email",
            email: "Please enter valid email address",

        },
        first_name: {
            required: "Please enter your first name",
        },
        location: {
            required: "Please enter your location",
        },
        last_name: {
            required: "Please enter your last name",
        },
        mobile_no: {
            required: "Please enter your mobile number",
        },
    },
    submitHandler: function (form) {
        let data = new FormData(form);

        console.log(data);
        $.ajax({
            url: BASE_URL + '/save_family_data',
            type: 'POST',
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            data: data,
            contentType: false,
            processData: false,
            success: function (result) {
                if (result.status_code == 200) {
                    toastr.success(result.message);
                    setTimeout(function () {
                        window.location.href = BASE_URL + '/manage_user/bride/subusers/family/family_list';
                    }, 1000);

                } else {
                    toastr.error(result.message);
                }
            }
        });
    }
});



$('#edit_family_form').validate({
    rules: {
        edit_family_members: {
            required: true,

        },
        edit_email: {
            required: true,
            email: true,
        },
        edit_first_name: {
            required: true,

        },
        edit_location: {
            required: true,

        },
        edit_last_name: {
            required: true,

        },
       edit_mobile_no:{
            required: true,
        }
    },
    messages: {
        edit_family_members: {
            required: "Please enter your family members",
        },

        edit_email: {
            required: "Please enter your email",
            email: "Please enter valid email address",

        },
        edit_first_name: {
            required: "Please enter your first name",
        },
        edit_location: {
            required: "Please enter your location",
        },
        edit_last_name: {
            required: "Please enter your last name",
        },
        edit_mobile_no: {
            required: "Please enter your mobile number",
        },
    },
    submitHandler: function (form) {
        let data = new FormData(form);

        console.log(data);
        $.ajax({
            url: BASE_URL + '/update_family_data',
            type: 'POST',
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            data: data,
            contentType: false,
            processData: false,
            success: function (result) {
                if (result.status_code == 200) {
                    toastr.success(result.message);
                    setTimeout(function () {
                        // alert(BASE_URL + 'manage_user/bride/subusers/family/family_list');
                        window.location.href = BASE_URL + '/manage_user/bride/subusers/family/family_list';
                    }, 1000);

                } else {
                    toastr.error(result.message);
                }
            }
        });
    }
});
