/*
Created by : Chandan Yadav
Created at : 30 October 2023
Use : Validate login form and submit data to db
*/
$(document).ready(function () {
    $("#kt_sign_in_form").validate({
        rules: {
            email: {
                required: true,
                email: true,
                remote: {
                    url: BASE_URL + "/check_admin_email",
                    type: "POST",
                    data: {
                        email: function () {
                            return $(
                                '#kt_sign_in_form :input[name="email"]'
                            ).val();
                        },
                        _token: CSRF,
                    },
                },
            },
            password: "required",
        },
        messages: {
            email: {
                required: "Please enter your email",
                email: "Please enter valid email address",
                remote: "Email does not exist.",
            },
            password: "Please enter your password",
        },
        submitHandler: function (form) {
            let data = new FormData(form);
            $.ajax({
                url: BASE_URL + "/send_otp",
                type: "POST",
                headers: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                        "content"
                    ),
                },
                data: data,
                contentType: false,
                processData: false,
                success: function (result) {
                    // console.log(result);
                    if (result.status_code == 200) {
                        Swal.fire({
                            text: result.message,
                            icon: "success",
                            buttonsStyling: !1,
                            confirmButtonText: "Proceed",
                            customClass: {
                                confirmButton: "btn btn-primary popup-button",
                            },
                        }).then(function (t) {
                            if (t.isConfirmed) {
                                let url =
                                    BASE_URL +
                                    "/two_step" +
                                    "?d=" +
                                    result.data.email;
                                console.log(url);
                                window.location.replace(url);
                            }
                        });
                    } else {
                        // $('#sign_in_btn').prop('disabled', false);
                        Swal.fire({
                            text: result.message,
                            icon: "error",
                            buttonsStyling: !1,
                            confirmButtonText: "Ok, got it!",
                            customClass: {
                                confirmButton: "btn btn-primary popup-button",
                            },
                        });
                    }
                },
            });
        },
    });
});
