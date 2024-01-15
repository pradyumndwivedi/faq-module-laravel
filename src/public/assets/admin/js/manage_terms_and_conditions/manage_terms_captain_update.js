$('#terms_customer').validate({
    ignore: [],
    debug: false,
    rules: {
        terms_condition_captain:{
            required: true
        }
    },
    terms_condition_captain:{
        terms_of_use:{
            required: '<span style="color: red; font-size: 12px;">Enter text</span>'
        }
    },
    submitHandler: function(form) {
        var formData = new FormData(form);
        
        // Add CSRF token to formData
        formData.append('_token', $('meta[name="csrf-token"]').attr('content'));

        $.ajax({
            url: '/cms/terms_conditions/captain/update/',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(data){
                if(data.status == 200) {
                    
                    location.reload();
                }
            },
           
        });
    }
});
