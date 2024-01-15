
$(document).ready(function () {


    //**********************************************Edit/Update Captain List*******************************************************************


    $.validator.addMethod("emailRegex", function (value, element) {
        return this.optional(element) || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
    }, "Please Enter A Valid Email Address");
    $.validator.addMethod("full_name", function (full_name, element) {
        full_name = full_name.replace(/\s+/g, "");
        return this.optional(element) || full_name.length > 2 &&
            full_name.match(/^[a-zA-Z]+(\s[a-zA-Z]+)*$/);
    }, "Please Add A Name");

    $('#update_captainlist_form').validate({
        rules: {
            first_name: {
                required: true,
                full_name: true

            },
            last_name: {
                required: true,
                full_name: true

            },
            email_address: {
                required: true,
                emailRegex: true
            },
            phone_number: {
                required: true,

            },
            couple_id: {
                required: true,

            },
            address_line1: {
                required: true,

            }
        },
        messages: {
            first_name: {
                required: "Please Enter Your Name",
                full_name: "Enter A Valid Name"
            },
            last_name: {
                required: "Please Enter Your Name",
                full_name: "Enter A Valid Name"
            },
            email_address: {
                required: "Please Enter Your Email Id",
                email: "Please Enter A Valid Email Address"
            },
            phone_number: {
                required: "Please Enter Your Contact Number",

            },
            couple_id: {
                required: "Please Enter Duo ID",

            },
            address_line1: {
                required: "Please Enter Your Address",
                minlength: "Address Should Be Of Minimum 20 Characters"
            }

        },
        submitHandler: function (form) {

            var formData = new FormData(form);
            var captain_id = $('#captain_id').val();
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
            $.ajax({
                url: BASE_URL + '/manage_user/captains/captain_update_list/' + captain_id,
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function (data) {
                    if (data.status == 'success') {
                        toastr.options = {
                            "timeOut": 500
                        }
                        toastr.success('Captain Details Updated Successfully');
                        window.location.href = BASE_URL + '/manage_user/captains/captain_list';

                    } else {
                        toastr.error('Request failed. Please try again.');
                    }
                }
            });
        }
    });


});
//**********************************************Task Captain List*******************************************************************

$(document).ready(function () {
    $(".view-btn").on("click", function () {
        var taskName = $(this).data("task");
        $("#post-meta-description").val(taskName);
    });
});

//**********************************************Status Update Captain List*******************************************************************


$(document).ready(function () {
    $('#dou-modal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var coupleId = button.data('couple_id');
        var brideName = button.data('bride_name');
        var groomName = button.data('groom_name');

        var modal = $(this);
        modal.find('.modal-title').text('List of Duo');

        modal.find('.modal-body tbody').empty();

        if (coupleId && brideName && groomName) {
            var newRow = '<tr class="text-center">' +
                '<td>' + coupleId + '</td>' +
                '<td>' + brideName + '</td>' +
                '<td>' + groomName + '</td>' +
                '</tr>';

            modal.find('.modal-body tbody').append(newRow);
        } else {
            var noDataRow = '<tr>' +
                '<td colspan="3">No duo information available.</td>' +
                '</tr>';

            modal.find('.modal-body tbody').append(noDataRow);
        }
    });
});
// **********************************************************************************************************************************

