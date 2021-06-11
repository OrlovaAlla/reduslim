 
$(document).ready(function(){

    /*--------- chosen language  ---*/
    $('.form_option_en').on("click", function(){
        if($('.form_option_en:visible')){
            $('.form_option_ru').css({"display": "none"});       
            $('.form_option_en').css({"transform": "translateY(0px)","border": "none", "display": "flex"});
            
        } else {
            $('.form_option_en').css({"display": "none"});
        };

    });
    $('.form_option_ru').on("click", function(){
        if($('.form_option_ru:visible')){
            $('.form_option_en').css({"display": "none"});       
            $('.form_option_ru').css({"transform": "translateY(0px)","border": "none", "display": "flex"});
            
        } ;

    });
    


    $('.button_arrow').on("click", function(){
        if( ($('.form_option_en').css("display") == "none")){
            let fd = $('.form_option_ru').css("display");
            let lj = $('.form_option_en').css("display");
            console.log(fd);
            console.log(lj);
            $('.form_option_en').show('form_option_en');
            $('.form_option_en').css({"background-color": "#F8F8F8",
            "border": "1px solid #E4E4E4", "display": "flex", "align-items": "center", "transform": "translateY(45px)", "transition": "transform 0.4s linear", "height": "30px"});
            
    } else if (($('.form_option_ru').css("display") == "none")){
                $('.form_option_ru').show('form_option_ru');
                $('.form_option_ru').css({"display": "flex", "background-color": "#F8F8F8",
                "border": "1px solid #E4E4E4", "transform": "translateY(45px)", "transition": "transform 0.4s linear", "height": "30px", "align-items": "center"});
            
        };  
    });
       
   

   /* $('.form_option_en').on("click", function(){
        $('.form_option_ru').css({"background-color": "#F8F8F8",
        "border": "1px solid #E4E4E4", "transform": "translateY(40px)", "transition": "transform 0.4s linear", "height": "30px", "align-items": "center"});       
         $('.form_option_en').css({"transform": "translateY(-8px)","border": "none"});  

    });*/


/*-------- отправка формы --------*/
    $('.button').on("click", function(){
            let name = $("#form_name").val().trim();
            let phone = $("#form_phone").val().trim();

            if(name == ""){
                alert("Введите Имя");
                return false;
            } else if(phone.length < 7 ){
                alert("Введите номер телефона, не менее 7 цифр");
                return false;
            }

            $.ajax({
                url: 'form.php',
                type: 'POST',
                cache: false,
                data: {'name': 'form_name', 'phone': 'form_name'},
                dataType: 'html',
                beforeSend: function(){
                    $(".button").prop("disabled", true);
                },
                success: function(data){
                    if(!data)
                    alert('Произошла ошибка, форма не отправлена.');
                    else
                    alert("Форма успешно отправлена."); 
                    $('form').trigger("reset");
                    $('.button').prop("disabled", false);
                }
            });
       
        
    });
});