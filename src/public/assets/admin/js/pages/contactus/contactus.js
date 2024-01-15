$(document).on('click', '.show_contact_details', function (e) {
    let message = $(this).data('message');

    $('.message').text(message);
});


$(document).on('click', '.show_mail_details', function (e) {
    let id= $(this).data('id');
    let name = $(this).data('name');
    let email = $(this).data('email');

    $('.id').val(id);
    $('.name').text(name);
    $('.email').val(email);
    $('.contactusname').html(name);
    $('#exampleModalCentertwo').modal('show');

});

/*
Created by : Chandan Yadav
Created at : 01 November 2023
Use : Validate reply form and submit data to db
*/

$('#reply_mail_form').validate({
    rules: {
        message: {
            required: true
        }
    },
    messages: {
        message: {
            required: "Please enter the message",
        }
    },
    submitHandler: function (form) {
        var data = new FormData(form);
        $.ajax({
            url: BASE_URL + '/manage_contact_us/replyMail',
            type: 'POST',
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            data: data,
            contentType: false,
            processData: false,
            success: function (response) {
                if (response.status_code == 200) {
                    toastr.success(response.message);
                    setTimeout(function () {
                        window.location.href = BASE_URL + '/manage_contact_us/listing';
                    }, 1000);
                } else {
                    toastr.error(response.message);
                }
            },
        });
    },
});
