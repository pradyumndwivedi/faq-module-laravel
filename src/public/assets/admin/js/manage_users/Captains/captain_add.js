//*********************** */ Add Captain List*******************************************************************
$(document).ready(function () {
    $.validator.addMethod("emailRegex", function(value, element) {
    	return this.optional(element) || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
    }, "Please Enter A Valid Email Address");
          $.validator.addMethod("full_name", function(full_name, element) {
        full_name = full_name.replace(/\s+/g, "");
        return this.optional(element) || full_name.length > 2 &&
            full_name.match(/^[a-zA-Z]+(\s[a-zA-Z]+)*$/);
    }, "Please Add A Name");

    $('#add_captainlist_form').validate({
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
            first_name:{
        		required: "Please Enter Your Name",
                                full_name: "Enter A Valid Name"
        	},
            last_name:{
        		required: "Please Enter Your Name",
                                full_name: "Enter A Valid Name"
        	},
            email_address:{
        		required: "Please Enter Your Email Id",
                email: "Please Enter A Valid Email Address"
        	},
            phone_number:{
        		required: "Please Enter Your Contact Number",
                
        	},
        	couple_id:{
        		required: "Please Select Duo ID",

        	},
            address_line1:{
        		required: "Please Enter Your Address",
                minlength: "Address Should Be Of Minimum 20 Characters"
        	}

        },
        submitHandler: function (form) {
            
            var formData = new FormData(form);
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
            $.ajax({
                url: BASE_URL + '/manage_user/captains/captain_store_list',
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function (data) {
                    if (data.status == 'success') {
                        $('#add_captainlist_form')[0].reset();
                        toastr.success('Captain Details Added Successfully');
                        window.location.href = BASE_URL + '/manage_user/captains/captain_list';

                    } else {
                        toastr.error('Request failed. Please try again.');
                    }
                }
            });
        }
    });
  

    //**********************************************Status Update Captain List*******************************************************************

    $(".table").on("change", ".active_captain", function() {
        // alert("hi");
        var status = $(this).prop("checked") == true ? 1 : 0;
    //  alert(status); 
     var program_id = $(this).data("id");
    //  alert(program_id);
     $.ajax({
         type: "GET",
         dataType: "json",
         url: BASE_URL + '/manage_user/captains/captain_status_list/' + program_id,
         data: {
             status: status,
             program_id: program_id,
         },
         success: function(data) {
            if (status == 'success') {
                 
                //  window.location.href = '/manage_user/captains/captain_list';
                toastr.success("Status Activated Successfully. !!");
            } else {
                toastr.error("Status Deactivated Successfully. !!");
                window.location.reload();
            }
         },
     });
 });

});

// ********************************************************************************************************



