/**
 * Added By : Chandan Yadav
 * Added on : 30 Oct 2023
 * Use : Countdown timer
 */
/**
 * Added By : Chandan Yadav
 * Added on : 31 Oct 2023
 * Use : Countdown timer
 */
$(document).ready(function() {
    //countcount timer start
    var timer2 = "04:59";
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
    $('#otp_count_down').text(minutes + ':' + seconds + ' sec');
    if (minutes < 0) clearInterval(interval);
    //check if both minutes and seconds are 0
    if ((seconds <= 0) && (minutes <= 0)) clearInterval(interval);

    if ((seconds <= 0) && (minutes <= 0)){
        $('#otp_count_time').html('<span style="color:red">OTP Expired!</span>');
        $('#resend_otp_span').text('OTP Expired ? ')
    }

    timer2 = minutes + ':' + seconds;
  }, 1000);
  //countcount timer end

  /**
 * Created By : Chandan Yadav
 * Created at : 30 Oct 2023
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
});

/*
Created by : Chandan Yadav
Created at : 30 Oct 2023
Use : Required field on step two otp enter validation
*/
$(document).on('click', '#otp_sign_in_btn', function() {
    let d = $('#d').val();
    let code_1 = $('#code_1').val();
    let code_2 = $('#code_2').val();
    let code_3 = $('#code_3').val();
    let code_4 = $('#code_4').val();

    let otp = code_1+code_2+code_3+code_4;
    $.ajax({
        url: 'verify_login',
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
                        let url = BASE_URL+result.data.redirect;
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
