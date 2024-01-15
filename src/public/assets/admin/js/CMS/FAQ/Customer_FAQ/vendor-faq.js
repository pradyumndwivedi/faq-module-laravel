/**
        * Developed By : Ravindra Gawade
        * Created On : 2 Nov 2023
        * uses : js for FAQ customer
    */

$(document).ready(function () {

    $('#add_vendor').on("click", function (e) {

        jQuery.validator.addMethod("noLeadingSpace", function (value, element) {
            return this.optional(element) || /^[^\s].*$/.test(value);
        }, "First character cannot be a space");

        $('#add_vendor_faq_form').validate({
            ignore: [],
            debug: false,
            rules: {
                vendor_category: {
                    required: true,
                },
                vendor_question: {
                    required: true,
                    noLeadingSpace: true,
                },
                vendor_answer: {
                    required: true,
                    noLeadingSpace: true,
                },
                
            },
            messages: {
                vendor_category: {
                    required: "Please Select Category",
                },
                vendor_question: {
                    required: "Please Enter Question",
                },
                vendor_answer: {
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
                    url:BASE_URL + '/cms/manage_faqs/vendor/add-vendor',
                    type: 'POST',
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function (response) {
                        if (response.status == 200) {
                            toastr.success('Vendor FAQ Added Successfully');
                            setTimeout(function () {
                                window.location.href = BASE_URL + "/cms/manage_faqs/vendor";

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

      $('#update_vendor_faq').on("click", function (e) {
        let edit_id = $('#hidden_id').val();
        // alert(edit_id);
        jQuery.validator.addMethod("noLeadingSpace", function (value, element) {
            return this.optional(element) || /^[^\s].*$/.test(value);
        }, "First character cannot be a space");

        $('#update_vendor_faq_form').validate({

            ignore: [],
            debug: false,
            rules: {
                update_vendor_category: {
                    required: true,
                },
                update_vendor_question: {
                    required: true,
                    noLeadingSpace: true,
                },
                update_vendor_answer: {
                    required: true,
                    noLeadingSpace: true,
                },
                
            },
            messages: {
                update_vendor_category: {
                    required: "Please Select Category",
                },
                update_vendor_question: {
                    required: "Please Enter Question",
                },
                update_vendor_answer: {
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
                    url:  BASE_URL + "/cms/manage_faqs/vendor/update/" + edit_id,
                    type: 'POST',
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function (response) {
                        if (response.status == 200) {
                            toastr.success('Vendor FAQ Updated Successfully');
                            setTimeout(function () {
                                window.location.href = BASE_URL + "/cms/manage_faqs/vendor";

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