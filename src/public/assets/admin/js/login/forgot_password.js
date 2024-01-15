/*
Created by : Chandan Yadav
Created at : 30 October 2023
Use : Validate Forgot Password form and submit data to db
*/
$(document).ready(function(){
$('#forgot_password').validate({
    rules: {
        email: {
            required: true,
            email: true,
            remote: {
                url: BASE_URL + '/check_admin_email',
                type: 'POST',
                data: {
                    email: function () {
                        return $('#forgot_password :input[name="email"]').val();
                    },
                    _token: CSRF,
                },
            }
        },

    },
    messages: {
        email: {
            required: "Please enter your email",
            email: "Please enter valid email address",
            remote: "Email does not exist.",
        },

    },
    submitHandler: function (form) {
        let data = new FormData(form);
        $.ajax({
            url: BASE_URL + '/forgot_otp',
            type: 'POST',
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            data: data,
            contentType: false,
            processData: false,
            success: function (result) {
                if(result.status_code == '200'){
                    Swal.fire({ text: result.message, icon: "success", buttonsStyling: !1, confirmButtonText: "Proceed", customClass: { confirmButton: "btn btn-primary popup-button" } }).then(function (t) {
                        if (t.isConfirmed) {
                            var url = BASE_URL+"/two_step_forgot"+"?d="+result.data.email;
                            console.log(url);
                            window.location.replace(url);
                        }
                    });
                }
                else {
                    $('#forgot_password_btn').prop('disabled', false);
                    Swal.fire({
                        text: result.message,
                        icon: "error",
                        buttonsStyling: !1,
                        confirmButtonText: "Ok, got it!",
                        customClass: { confirmButton: "btn btn-primary popup-button" },
                    });
                }
            }
        });
    }
});
})

/*
Created by : Chandan Yadav
Created at : 30 October 2023
Use : Validate reset password form and submit data to db
*/
$('#reset_password').validate({
    rules: {
        password: 'required',
        cnf_password: {
           required: true,
           equalTo : "#password",
        },
     },
     messages: {
        password: 'Password is required',
        cnf_password: {
              required : 'Confirm Password is required',
              equalTo : 'Password is not match please enter valid password',
          }
   },
    submitHandler: function (form) {
        let email = $('#emailid').val();
        let data = new FormData(form);
        $.ajax({
            url: BASE_URL + '/reset_password_submit',
            type: 'POST',
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            data: data,emailid:email,
            contentType: false,
            processData: false,
            success: function (result) {
                if(result.status_code == '200'){
                    Swal.fire({ text: result.message, icon: "success", buttonsStyling: !1, confirmButtonText: "Proceed", customClass: { confirmButton: "btn btn-primary popup-button" } }).then(function (t) {
                        if (t.isConfirmed) {
                            var url = BASE_URL+result.data.redirect;
                            window.location.replace(url);
                        }
                    });
                }
                else {
                    $('#reset_password_btn').prop('disabled', false);
                    Swal.fire({
                        text: result.message,
                        icon: "error",
                        buttonsStyling: !1,
                        confirmButtonText: "Ok, got it!",
                        customClass: { confirmButton: "btn btn-primary popup-button" },
                    });
                }

            }
        });
    }
});

/**
 * Added By : Chandan Yadav
 * Added on : 31 Oct 2023
 * Use : Countdown timer
 */
$(document).ready(function() {
    //countcount timer start
    var timer2 = "09:59";
    var interval = setInterval(function() {
    var timer = timer2.split(':');
    //by parsing integer, I avoid all extra string processing
    var minutes = parseInt(timer[0], 10);
    var seconds = parseInt(timer[1], 10);
    --seconds;
    minutes = (seconds < 0) ? --minutes : minutes;
    seconds = (seconds < 0) ? 59 : seconds;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    //minutes = (minutes < 10) ?  minutes : minutes;
    $('#otp_count_down_forgot_pass').text(minutes + ':' + seconds + ' sec');
    if (minutes < 0) clearInterval(interval);
    //check if both minutes and seconds are 0
    if ((seconds <= 0) && (minutes <= 0)) clearInterval(interval);
    if ((seconds <= 0) && (minutes <= 0)){
        $('#otp_count_time_forgot_pass').html('<span style="color:red">OTP Expired!</span>');
        $('#resend_otp_span_forgot_pass').text('OTP Expired ? ')
    }
    timer2 = minutes + ':' + seconds;
  }, 1000);
  //countcount timer end
});

/**
 * Created By : Chandan Yadav
 * Created at : 31 Oct 2023
 * Use : OTP Input box js
 * @param {*} ele
 */
// OTP Input box js start
let digitValidate = function(ele){
    console.log(ele.value);
    ele.value = ele.value.replace(/[^0-9]/g,'');
}

let tabChange = function(val){
    let ele = document.querySelectorAll('.otp');
    if(ele[val-1].value != ''){
        ele[val].focus()
    }else if(ele[val-1].value == ''){
        ele[val-2].focus()
    }
}
// OTP Input box js end

/*
Created by : Chandan Yadav
Created at : 31 Oct 2023
Use : Required field on step two otp enter validation
*/
$(document).on('click', '#otp_reset_password_btn', function() {
    let d = $('#d').val();
    let code_1 = $('#code_1').val();
    let code_2 = $('#code_2').val();
    let code_3 = $('#code_3').val();
    let code_4 = $('#code_4').val();
    let otp = code_1+code_2+code_3+code_4;
    $.ajax({
        url: 'verify_forgot',
        type: 'POST',
        data: {
            d : d, otp : otp,
            _token: CSRF
        },
        success: function(result) {
            console.log(result);
            if(result.status_code == '200'){
                Swal.fire({ text: result.message, icon: "success", buttonsStyling: !1, confirmButtonText: "Proceed", customClass: { confirmButton: "btn btn-primary popup-button" } }).then(function (t) {
                    if (t.isConfirmed) {
                        let url = BASE_URL+"/reset_password"+"?email="+result.data.email;
                        window.location.replace(url);
                    }
                });
            }
            else {
                Swal.fire({
                    text: result.message,
                    icon: "error",
                    buttonsStyling: !1,
                    confirmButtonText: "Ok, got it!",
                    customClass: { confirmButton: "btn btn-primary popup-button" },
                }).then(function (t) {
                    if (t.isConfirmed) {
                        $('.otp').val('');
                    }
                });
            }
        }
    });
});
