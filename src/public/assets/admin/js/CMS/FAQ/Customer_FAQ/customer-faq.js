  /**
        * Developed By : Ravindra Gawade
        * Created On : 1 Nov 2023
        * uses : js for FAQ customer
    */

  $(document).ready(function () {

    $('#add_customer').on("click", function (e) {

        jQuery.validator.addMethod("noLeadingSpace", function (value, element) {
            return this.optional(element) || /^[^\s].*$/.test(value);
        }, "First character cannot be a space");

        $('#add_customer_faq_form').validate({
            ignore: [],
            debug: false,
            rules: {
                category: {
                    required: true,
                },
                question: {
                    required: true,
                    noLeadingSpace: true,
                },
                answer: {
                    required: true,
                    noLeadingSpace: true,
                },
                
            },
            messages: {
                category: {
                    required: "Please Select Category",
                },
                question: {
                    required: "Please Enter Question",
                },
                answer: {
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
                    url: BASE_URL + '/cms/manage_faqs/customer/add-faq',
                    type: 'POST',
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function (response) {
                        if (response.status == 200) {
                            toastr.success('Customer FAQ Added Successfully');
                            setTimeout(function () {
                                window.location.href = BASE_URL + "/cms/manage_faqs/customer";

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

    $('#update_faq').on("click", function (e) {
        let edit_id = $('#hidden_id').val();
        // alert(edit_id);
        jQuery.validator.addMethod("noLeadingSpace", function (value, element) {
            return this.optional(element) || /^[^\s].*$/.test(value);
        }, "First character cannot be a space");

        $('#kt_sign_in_form').validate({

            ignore: [],
            debug: false,
            rules: {
                update_category: {
                    required: true,
                },
                update_question: {
                    required: true,
                    noLeadingSpace: true,
                },
                update_answer: {
                    required: true,
                    noLeadingSpace: true,
                },
                
            },
            messages: {
                update_category: {
                    required: "Please Select Category",
                },
                update_question: {
                    required: "Please Enter Question",
                },
                update_answer: {
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
                    url:  BASE_URL + "/cms/manage_faqs/customer/update/" + edit_id,
                    type: 'POST',
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function (response) {
                        if (response.status == 200) {
                            toastr.success('Customer FAQ Updated Successfully');
                            setTimeout(function () {
                                window.location.href = BASE_URL + "/cms/manage_faqs/customer";

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