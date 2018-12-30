$(document).ready(function(){

	var registrationFormCheck = (function(){

		// Переменные модуля
		var _form = $('#reg-form');
		var _emailTextarea = $('#regEmailText');
		var _emailErrorEmpty = $('#emailErrorEmpty');
		var _emailErrorBusy = $('#emailErrorBusy')
		var _emailErrorInvalid= $('#emailErrorInvalid');
		var _passwordTextarea = $('#regPasswordText');
		var _passwordErrorEmpty = $('#passwordErrorEmpty');		

		// Метод инициализации (запуска) модуля
		var init = function(){
			console.log('Hello from _regInit');
			_setUpListeners(); // Запускаем прослушку событий
		}

		// Метод прослушки событий
		// В нем прослушиваем события на странице, например клики по кнопкам, и при срабатывании события запускаем нужный метод нашего модуля
		var _setUpListeners = function(){
			_form.on('submit', function(event){
				console.log('Hello from _regClick');
				_formValidate(event);

			});
		}

		// Приватные методы
		var _formValidate = function (event) {
			console.log('Hello from _regValidate');
    		event.preventDefault();
    		var _emailNotEmpty = false, _passwordNotEmpty = false;
    		var _emailOkay = true; 
    		var _email = "mail@mail.com";

    		if (_emailTextarea.val().trim() == '') {
    			_emailErrorEmpty.fadeIn(700);
    		} else {
    			_emailErrorEmpty.fadeOut();
    			_emailNotEmpty = true;

    			var input = $(_emailTextarea), value = input.val().trim();

				console.log('input.attr(type) = ' + input );

			//	if ( !(input.is('textarea')) ) {
					if ( input.attr('type').toLowerCase() === 'email' ) {
						if ( value !== '' ) {
	      					var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
	      					if ( pattern.test( value ) ) {
	  							_emailErrorInvalid.fadeOut();
	  							console.log('Email is VALID');
	      					} else {
	      						_emailErrorInvalid.fadeIn(700);
	  							console.log('Email is INVALID');
	      					}
						}
					}
			//	}

    			if ( _emailTextarea.val() == _email )
    				_emailOkay = false;
    		}

   			if (_passwordTextarea.val().trim() == '') {
    			_passwordErrorEmpty.fadeIn(700);
    		} else {
    			_passwordErrorEmpty.fadeOut(); 
    			_passwordNotEmpty = true;
    		}

    		console.log(_emailOkay);

    		if ( _emailOkay ) {     // Если введенный емейл не занят - скрываем соотв. сообщ. об ошибке
    			_emailErrorBusy.fadeOut();	
    		} else {
    			if ( _emailNotEmpty )   // иначе если введенный емейл не пустой, но занят - показываем ошибку
    				_emailErrorBusy.fadeIn(700);   
    			}

    		// если все данные верны - разрешаем отправку формы
    		if ( _emailNotEmpty && _emailOkay && _passwordNotEmpty) {
    			$('form').unbind('submit').submit();
    		}
		}
    	// _formValidate

		// Возвращаем публичные медоты, которые будут доступны снаружи
		return {
			init
		}
	
	}());
  
	// Запускаем модуль
	registrationFormCheck.init();

});