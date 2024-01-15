/**
        * Developed By : Ravindra Gawade
        * Created On : 16 Nov 2023
        * uses : js for FAQ customer
    */

// ================================================mange wedsrent listing ===============================================================================
$(document).ready(function () {

    $("#recipes-popbtn").on("click", function () {
        $('#view_details').modal('hide');
        $('#recipes-pop').modal('show');
    });
    $('.table').off('change', '.active_product');
    $('.table').on('change', '.active_product', function () {
        var status = $(this).prop("checked") ? 1 : 0;
        var program_id = $(this).data("id");

        $.ajax({
            type: "GET",
            dataType: "json",
            url: BASE_URL + '/manage_weds_rents/products/status/' + program_id,
            data: {
                status: status,
                program_id: program_id,
            },
            success: function (data) {
                if (data.status === 200) {
                    var toastrMessage = status === 1 ? "Status Activate successfully." : "Status Deactivate successfully.";
                    toastr.options = {
                        "timeOut": 500
                    }
                    toastr.success(toastrMessage);
                } else {
                    toastr.error("An error occurred while changing the status.");
                }
            },
            error: function () {
                toastr.error("An error occurred while processing your request.");
            }
        });
    });


});

// ======================================================end manage wedsrent listing=================================================================================
// =========================================================File Ponf start=================================================================================================================
$(document).ready(function () {
    FilePond.registerPlugin(FilePondPluginImagePreview);

    const thumbnailImageInput = document.querySelector('input[name="filepond"]');
    const thumbnailImagePond = FilePond.create(thumbnailImageInput, {
        storeAsFile: true,
        allowImagePreview: true,
        allowRemove: true,

    });

    const productImagesInput = document.querySelector('input[name="file[]"]');
    const productImagesPond = FilePond.create(productImagesInput, {
        storeAsFile: true,
        allowImagePreview: true,
        allowRemove: true
    });

    // ==================================================file pond end ========================================================================================================


    $(document).on("click", '#add_productWedsrent', function (e) {
        // alert('hftyy');
        $('#add_wedsrent_form').validate({
            ignore: [],
            rules: {
                //     wedsrentImage: {
                //         required: true,
                //     },
                //     status: {
                //         required: true,
                //         noLeadingSpace: true,
                //     },
                wedsrentTitle: {
                    required: true,
                    // noLeadingSpace: true,
                },
                //     wedsrentCate: {
                //         required: true,
                //         noLeadingSpace: true,
                //     },
                wedsrentDesc: {
                    required: true,
                    // noLeadingSpace: true,
                },
                wedsrentSKU: {
                    required: true,
                    // noLeadingSpace: true,
                },
                //     wedsrentCalemder: {
                //         required: true,
                //         noLeadingSpace: true,
                //     },
                //     category: {
                //         required: true,
                //         noLeadingSpace: true,
                //     },
                //     days: {
                //         required: true,
                //         noLeadingSpace: true,
                //     },
                wedsrentMin: {
                    required: true,
                    // noLeadingSpace: true,
                },
                wedsrentMax: {
                    required: true,
                    // noLeadingSpace: true,
                },
                //     wedsrentReq: {
                //         required: true,
                //         noLeadingSpace: true,
                //     },
                wedsrentWeight: {
                    required: true,
                    // noLeadingSpace: true,
                },
                wedsrentLength: {
                    required: true,
                    // noLeadingSpace: true,
                },
                wedsrentWidth: {
                    required: true,
                    // noLeadingSpace: true,
                },
                wedsrentHeight: {
                    required: true,
                    // noLeadingSpace: true,
                },
                //     wedsrentUpsells: {
                //         required: true,
                //         noLeadingSpace: true,
                //     },
                //      wedsrentCrosssells: {
                //          required: true,
                //         noLeadingSpace: true,
                //      },
                //      wedsrentBundle1: {
                //         required: true,
                //          noLeadingSpace: true,
                //      },
                //      wedsrentBundle2: {
                //          required: true,
                //          noLeadingSpace: true,
                //      },
                //      wedsrentBundle3: {
                //          required: true,
                //     noLeadingSpace: true,
                //     },

            },
            messages: {
                //     wedsrentImage: {
                //         required: "Please Select Category",
                //     },
                //     status: {
                //         required: "Please Enter Question",
                //     },
                wedsrentTitle: {
                    required: "Please Enter Answer",
                },
                //     wedsrentCate: {
                //         required: "Please Select Category",
                //     },
                wedsrentDesc: {
                    required: "Please Enter Question",
                },
                //     wedsrentSKU: {
                //         required: "Please Enter Answer",
                //     },
                //     wedsrentCalemder: {
                //         required: "Please Select Category",
                //     },
                //     category: {
                //         required: "Please Enter Question",
                //     },
                //     days: {
                //         required: "Please Enter Question",
                //     },
                wedsrentMin: {
                    required: "Please Enter Answer",
                },
                wedsrentMax: {
                    required: "Please Enter Answer",
                },
                //     wedsrentReq: {
                //         required: "Please Enter Answer",
                //     },
                wedsrentWeight: {
                    required: "Please Enter Answer",
                },
                wedsrentLength: {
                    required: "Please Enter Answer",
                },
                wedsrentWidth: {
                    required: "Please Enter Answer",
                },
                wedsrentHeight: {
                    required: "Please Enter Answer",
                },
                //      wedsrentUpsells: {
                //          required: "Please Enter Answer",
                //      },
                //      wedsrentCrosssells: {
                //          required: "Please Enter Answer",
                //      },
                //      wedsrentBundle1: {
                //          required: "Please Enter Answer",
                //      },
                //      wedsrentBundle2: {
                //          required: "Please Enter Answer",
                //      },
                //      wedsrentBundle3: {
                //          required: "Please Enter Answer",
                //      },
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
                e.preventDefault(),
                    $.ajaxSetup({
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        }
                    });

                $.ajax({
                    url: BASE_URL + "/manage_weds_rents/products/addProduct",
                    type: 'POST',
                    data: formData,

                    processData: false,
                    contentType: false,
                    success: function (response) {
                        if (response.status == 200) {
                            toastr.success('Wedsrent Product Added Successfully');
                            $('#exampleModalCenter').modal('show');
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


    $('#nextButton').on('click', function () {
        var nextTab = $("#myTab .nav-link.active").parent().next("li");
        if (nextTab.length > 0) {
            nextTab.find("#profile-tab").tab("show");
        }
    });

    $('#nextButton1').on('click', function () {
        var nextTab = $("#myTab .nav-link.active").parent().next("li");
        if (nextTab.length > 0) {
            nextTab.find("#contact-tab").tab("show");
        }
    });

    $('#nextButton2').on('click', function () {
        var nextTab = $("#myTab .nav-link.active").parent().next("li");
        if (nextTab.length > 0) {
            nextTab.find("#linked-tab").tab("show");
        }
    });

    $('#nextButton3').on('click', function () {
        var nextTab = $("#myTab .nav-link.active").parent().next("li");
        if (nextTab.length > 0) {
            nextTab.find("#Frequently-tab").tab("show");
        }
    });

});




// ====================================================Delete Wedsrent Product=======================================================

$('.delete-product').on("click", function () {
    // alert('hiiiii');
    let delete_id = $(this).data('id');
    $('#exampleModalCenter2').modal('show');

    $('#yes_delete').off('click').on("click", function () {
        $.ajax({
            headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
            url: BASE_URL + "/manage_weds_rents/products/delete/" + delete_id,
            type: "DELETE",
            data: {
                "_token": $('meta[name="csrf-token"]').attr('content')
            },
            success: function (result) {
                if (result.status === 200) {
                    $(`.product[data-id="${delete_id}"]`).remove();
                    $('#exampleModalCenter2').modal('hide');
                    setTimeout(function () {
                        window.location.reload();
                        toastr.success('Product deleted successfully');
                    }, 1000);
                }
            },
            complete: function () {
            }
        });
    });

    $('#no_delete').off('click').on("click", function () {
        $('#exampleModalCenter2').modal('hide');
    });
});


// =================================================================manage wedsrent listing modal=============================================================================
$(document).ready(function () {

    $(".view-btn").click(function () {
        var dataHashtags = $(this).data("hashtags");
        var hashtagsArray = dataHashtags ? dataHashtags.split(',') : [];

        $(".yummy").empty();

        if (hashtagsArray.length > 0) {
            hashtagsArray.forEach(function (hashtag) {
                $(".yummy").append('<button>' + '#' + hashtag + '</button>');
            });
        } else {
            $(".yummy").append('<h1>No hashtags available for this product.</h1>');
        }
    });

    $('.view-btn-wishlist').click(function () {
        var wishList = $(this).data("wishlist");
        $(".yummy").empty();
        if (wishList && wishList.trim() !== "") {
            var wishListArray = wishList.split(',');
            wishListArray.forEach(function (wishlistItem) {
                $(".yummy").append('<button>' + wishlistItem.trim() + '</button>');
            });
        } else {
            $(".yummy").append('<h1>No wishlist available for this product.</h1>');
        }
    });
});








