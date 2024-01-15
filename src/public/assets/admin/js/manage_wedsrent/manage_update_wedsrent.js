$(document).ready(function () {

    FilePond.registerPlugin(FilePondPluginImagePreview);
    const inputElements = document.querySelectorAll('input[name="file[]"], input[name="update_thumbnail"]');
    inputElements.forEach(inputElement => {
        FilePond.create(inputElement, {
            storeAsFile: true,
        });
    });

    // ====================================================================edit  wedsrent image preview =========================================================================



    $('body').on('click', ".update__img-close", function (e) {
        var imageId = $(this).parent().data("id");
        var removedImagesInput = $('#removed_Updateimages');
        var removedImages = removedImagesInput.val();
        removedImages += (removedImages === '' ? '' : ',') + imageId;
        removedImagesInput.val(removedImages);
        $(this).parent().parent().remove();
        console.log('Removed Images: ' + removedImagesInput.val());
    });


    // =================================================================================================================================================
    $('#submit_wedsrent').on("click", function (e) {
        // alert('hiiii');
        getId = $("#hidden_id").val();
        // alert(getId);
        jQuery.validator.addMethod("noLeadingSpace", function (value, element) {
            return this.optional(element) || /^[^\s].*$/.test(value);
        }, "First character cannot be a space");

        $('#edit_wedsrents_form').validate({
            ignore: [],
            debug: false,
            rules: {
                // wedsrentImage: {
                //     required: true,
                // },
                // status: {
                //     required: true,
                //     noLeadingSpace: true,
                // },
                update_title: {
                    required: true,
                    noLeadingSpace: true,
                },
                // wedsrentCate: {
                //     required: true,
                //     noLeadingSpace: true,
                // },
                update_description: {
                    required: true,
                    noLeadingSpace: true,
                },
                update_rentAmount: {
                    required: true,
                },
                update_sku: {
                    required: true,
                    noLeadingSpace: true,
                },
                update_depositAmount: {
                    required: true,
                },
                wedsrentCalemder: {
                    required: true,
                    noLeadingSpace: true,
                },

                //    category: {
                //        required: true,
                //        noLeadingSpace: true,
                //    },
                //    days: {
                //        required: true,
                //        noLeadingSpace: true,
                //    },
                update_min: {
                    required: true,
                    noLeadingSpace: true,
                },
                update_max: {
                    required: true,
                    noLeadingSpace: true,
                },
                wedsrentReq: {
                    required: true,
                    noLeadingSpace: true,
                },
                update_weight: {
                    required: true,
                    noLeadingSpace: true,
                },
                update_length: {
                    required: true,
                    noLeadingSpace: true,
                },
                update_width: {
                    required: true,
                    noLeadingSpace: true,
                },
                update_height: {
                    required: true,
                    noLeadingSpace: true,
                },
                wedsrentUpsells: {
                    required: true,
                    noLeadingSpace: true,
                },
                wedsrentCrosssells: {
                    required: true,
                    noLeadingSpace: true,
                },
                wedsrentBundle1: {
                    required: true,
                    noLeadingSpace: true,
                },
                wedsrentBundle2: {
                    required: true,
                    noLeadingSpace: true,
                },
                wedsrentBundle3: {
                    required: true,
                    noLeadingSpace: true,
                },

            },
            messages: {
                // wedsrentImage: {
                //     required: "Please Select Category",
                // },
                // status: {
                //     required: "Please Enter Question",
                // },
                update_title: {
                    required: "Please Enter Title Here",
                },
                wedsrentCate: {
                    required: "Please Select Category",
                },
                update_description: {
                    required: "Please Enter Description Here",
                },
                update_rentAmount: {
                    required: "Please Enter Rent Amount Here",
                },
                update_sku: {
                    required: "Please Enter SKU Here",
                },
                wedsrentCalemder: {
                    required: "Please Select Category",
                },
                //    category: {
                //        required: "Please Enter Question",
                //    },
                //    days: {
                //        required: "Please Enter Question",
                //    },
                update_min: {
                    required: "Please Enter Minimum Duration",
                },
                update_max: {
                    required: "Please Enter Maximum Duration",
                },
                wedsrentReq: {
                    required: "Please Enter Answer",
                },
                update_weight: {
                    required: "Please Enter Weight Here",
                },
                update_length: {
                    required: "Please Enter Length Here",
                },
                update_width: {
                    required: "Please Enter Width Here",
                },
                update_height: {
                    required: "Please Enter Height Here",
                },
                wedsrentUpsells: {
                    required: "Please Enter Answer",
                },
                wedsrentCrosssells: {
                    required: "Please Enter Answer",
                },
                wedsrentBundle1: {
                    required: "Please Enter Answer",
                },
                wedsrentBundle2: {
                    required: "Please Enter Answer",
                },
                wedsrentBundle3: {
                    required: "Please Enter Answer",
                },
            },
            invalidHandler: function (event, validator) {
                toastr.options = {
                    "closeButton": true,
                    "progressBar": true,
                };
                toastr.info('Please check and fill all fields.');
                toastr.options = {};
                validator.errorList.forEach(function (error) {
                    $(error.element).addClass('error');
                });
            },
            submitHandler: function (form) {
                var formData = new FormData(form);
                console.log(formData)
                e.preventDefault(),
                    $.ajaxSetup({
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        }
                    });

                $.ajax({

                    url: BASE_URL + "/manage_weds_rents/products/update/" + getId,
                    type: 'POST',
                    data: formData,
                    dataType: "json",
                    cache: false,
                    processData: false,
                    contentType: false,
                    success: function (response) {
                        // alert(response);
                        if (response.status == 200) {
                            toastr.success('Wedsrent Product Updated Successfully');
                            $('#exampleModalCenterUpdate').modal('show');
                            setTimeout(function () {
                                window.location.href = BASE_URL + "/manage_weds_rents/products";

                            }, 1000);
                        } else {
                            toastr.error("Something went wrong");
                        }
                    },
                });
            }
        });

    });

})

// =============================================image preview======================================================================================================






// ==========================================================tabs============================================================================

// var next1 = false;
// var next2 = false;
// var next3 = false;
// var next4 = false;
// var next5 = false;

// $('#nextButton').on('click', function () {
//     if ($("#edit_wedsrents_form").valid()) {
//         next1 = true;
//     }
//     if (next1) {
//         var nextTab = $("#myTab .nav-link.active").parent().next("li");
//         if (nextTab.length > 0) {
//             nextTab.find(".nav-link").tab("show");
//         }
//     }
// });

// $('#nextButton1').on('click', function () {
//     if ($("#edit_wedsrents_form").valid()) {
//         next2 = true;
//     }
//     if (next2) {
//         var nextTab = $("#myTab .nav-link.active").parent().next("li");
//         if (nextTab.length > 0) {
//             nextTab.find(".nav-link").tab("show");
//         }
//     }
// });

// $('#nextButton2').on('click', function () {
//     if ($("#edit_wedsrents_form").valid()) {
//         next3 = true;
//     }
//     if (next3) {
//         var nextTab = $("#myTab .nav-link.active").parent().next("li");
//         if (nextTab.length > 0) {
//             nextTab.find(".nav-link").tab("show");
//         }
//     }
// });

// $('#nextButton3').on('click', function () {
//     if ($("#edit_wedsrents_form").valid()) {
//         next4 = true;
//     }
//     if (next4) {
//         var nextTab = $("#myTab .nav-link.active").parent().next("li");
//         if (nextTab.length > 0) {
//             nextTab.find(".nav-link").tab("show");
//         }
//     }
// });

// $('#nextButton4').on('click', function () {

//     if ($("#edit_wedsrents_form").valid()) {
//         next5 = true;
//     }
//     if (next5) {
//         var nextTab = $("#myTab .nav-link.active").parent().next("li");
//         if (nextTab.length > 0) {
//             nextTab.find(".nav-link").tab("show");
//         }
//     }
//     // Submit the form if all validations are correct
//     if (next1 && next2 && next3 && next4 && next5) {
//         $("#edit_wedsrents_form").submit();
//     }
// });
