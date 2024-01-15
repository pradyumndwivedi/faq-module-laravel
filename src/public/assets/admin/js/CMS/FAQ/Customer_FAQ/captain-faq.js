/**
        * Developed By : Ravindra Gawade
        * Created On : 3 Nov 2023
        * uses : js for FAQ customer
    */

$(document).ready(function () {

    $('#add_captain').on("click", function (e) {

        jQuery.validator.addMethod("noLeadingSpace", function (value, element) {
            return this.optional(element) || /^[^\s].*$/.test(value);
        }, "First character cannot be a space");

        $('#add_captain_faq_form').validate({
            ignore: [],
            debug: false,
            rules: {
                captain_category: {
                    required: true,
                },
                captain_question: {
                    required: true,
                    noLeadingSpace: true,
                },
                captain_answer: {
                    required: true,
                    noLeadingSpace: true,
                },

            },
            messages: {
                captain_category: {
                    required: "Please Select Category",
                },
                captain_question: {
                    required: "Please Enter Question",
                },
                captain_answer: {
                    required: "Please Enter Answer",
                }
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
                    url: BASE_URL + '/cms/manage_faqs/captain/add-captain',
                    type: 'POST',
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function (response) {
                        if (response.status == 200) {
                            toastr.success('Captain FAQ Added Successfully');
                            setTimeout(function () {
                                window.location.href = BASE_URL + "/cms/manage_faqs/captain";

                            }, 1000);
                        } else {
                            toastr.error("Something went wrong");
                        }
                    },
                });
            }
        });

    })


    // edit FAQ

    $('#update_Captain_faq').on("click", function (e) {
        let edit_id = $('#hidden_id').val();
        // alert(edit_id);
        jQuery.validator.addMethod("noLeadingSpace", function (value, element) {
            return this.optional(element) || /^[^\s].*$/.test(value);
        }, "First character cannot be a space");

        $('#update_captain_faq_form').validate({

            ignore: [],
            debug: false,
            rules: {
                update_captain_category: {
                    required: true,
                },
                update_captain_question: {
                    required: true,
                    noLeadingSpace: true,
                },
                update_captain_answer: {
                    required: true,
                    noLeadingSpace: true,
                },

            },
            messages: {
                update_captain_category: {
                    required: "Please Select Category",
                },
                update_captain_question: {
                    required: "Please Enter Question",
                },
                update_captain_answer: {
                    required: "Please Enter Answer",
                }
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
                    url: BASE_URL + "/cms/manage_faqs/captain/update/" + edit_id,
                    type: 'POST',
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function (response) {
                        if (response.status == 200) {
                            toastr.success('Captain FAQ Updated Successfully');
                            setTimeout(function () {
                                window.location.href = BASE_URL + "/cms/manage_faqs/captain";

                            }, 1000);
                        } else {
                            toastr.error("Something went wrong");
                        }
                    },
                });
            }
        });

    })




})
