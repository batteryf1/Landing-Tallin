$(document).ready(function(){

// Проверка поля

        var field = new Array("name", "phone");//поля обязательные      
        $("form:not(.alone_form)").submit(function(event) {// обрабатываем отправку формы    
        	event.preventDefault();
            var error=0; // индекс ошибки
            var $this_form = $(this);
            $(this).find("input").each(function() {// проверяем каждое поле в форме
                for(var i=0;i<field.length;i++){ // если поле присутствует в списке обязательных
                    if($(this).attr("name")==field[i]){ //проверяем поле формы на пустоту

                        if(!$(this).val()){// если в поле пустое
                            $(this).addClass("messenger");// устанавливаем рамку красного цвета
                            error=1;// определяем индекс ошибки                                
                        }
                        else{
                            $(this).removeClass("messenger");// устанавливаем рамку обычного цвета
                        }
                    }               
                }
            })
            if(error==0){ // если ошибок нет то отправляем данные
                // alert("Спасибо за заказ")
                // $.ajax({
                // 	type: "POST",
                // 	url: "mail.php",
                // 	data: $(this).serialize()
                // }).done(function() {
                // 	$.fancybox({
                // 		content: '<div style="text-align: center;margin: 10px;">'+"Спасибо за заявку, наш менеджер свяжется с Вами!"+'</div>',
                // 		padding:50,
                // 	});
                // });
                $this_form.trigger('submit')
                
            }         
        });

// Спам

// Функция, которая добавляет поле _antispam во все формы на странице
function appendAntiSpamField(){
    var forms = document.getElementsByTagName("form");
    for(var i = 0,l = forms.length;i < l;i++){
        var inp = document.createElement('input');
        inp.setAttribute("type","hidden");
        inp.setAttribute("name","_antispam");
        var d = new Date();
        //Случайное значение
        inp.value = "antispam_"+d.getMilliseconds();
        forms[i].appendChild(inp);
    }
}

//Запустить функцию после загрузки документа
window.onload = appendAntiSpamField;     

// номер телефона
$(".search_number").mask("+7 (999) 999-99-99");

document.addEventListener('DOMContentLoaded', function(){
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var name_input = document.getElementById('devSDate')
    name_input.value = day + "-" + month + "-" + year;
});


// Селект
$("select").select2();

$(".use_select_in").val("stpetersburg-coach-station").trigger("change"); 

// Проверка e-mail
        var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
        var mail = $('#mail');
        
        mail.blur(function(e){
            e.preventDefault();
            if(mail.val() != ''){
                if(mail.val().search(pattern) == 0){
                    mail.removeClass("messenger");
                    $.ajax({
                       type: "POST",
                       url: "mail.php",
                       data: $(this).serialize()
                   }).done(function() {
                    $(".new_year_people_copi_new_form").detach();
                    $(".alone_select_mail").css("padding-top", "45px");
                       $.fancybox({
                           content: '<div style="text-align: center;margin: 10px;">'+"Спасибо за обращение к нам, мы перезвоним на номер <номер телефона> в ближайшее время"+'</div>',
                           padding:50,
                       });

                   });

                }else{
                    mail.addClass("messenger");
                }
            }else{
                mail.removeClass("messenger");

            }
        });



// календарь
$("input.DateFrom").datepicker({});

$(function ($) {
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: '&#x3c;Пред',
        nextText: 'След&#x3e;',
        currentText: 'Сегодня',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        weekHeader: 'Нед',
        dateFormat: 'dd.mm.yy',
        minDate: 0,
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);

    $("input.DateFrom").datepicker( "setDate" , "0");
});

// Отправка адресной строки

$(".alone_form").submit(function(e) {
    e.preventDefault();
    e.stopPropagation();
    var select_1=$(".use_select_in", $(this)).val();
    var select_2=$(".use_select1_in", $(this)).val();
    var input_3=$(".DateFrom", $(this)).val();

    var text_str = "avtobusvtallin.ru/search/?lux_type=1&lux_from="+select_1+"&lux_to="+select_2+"&lux_departure="+input_3+"&lux_return=&lux_quantity=1";
    // console.log(text_str);
    location.href = "http://" + text_str;
    return false;
});

    });