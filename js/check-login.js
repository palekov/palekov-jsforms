$(document).ready(function(){

	var loginFormCheck = (function(){

		// Переменные модуля
		var _form = $('#login-form');
		var _emailTextarea = $('#emailText');
		var _emailErrorEmpty = $('#emailErrorEmpty');
		var _emailPasswordError = $('#emailPasswordError')
		var _passwordTextarea = $('#passwordText');
		var _passwordErrorEmpty = $('#passwordErrorEmpty');		

		// Метод инициализации (запуска) модуля
		var init = function(){
			console.log('Hello from _loginInit');
			_setUpListeners(); // Запускаем прослушку событий
		}

		// Метод прослушки событий
		// В нем прослушиваем события на странице, например клики по кнопкам, и при срабатывании события запускаем нужный метод нашего модуля
		var _setUpListeners = function(){
			_form.on('submit', function(event){
				console.log('Hello from _loginClick');
				_formValidate(event);

			});
		}

		// Приватные методы
		var _formValidate = function (event) {
			console.log('Hello from _loginValidate');
    		event.preventDefault();
    		var _emailNotEmpty = false, _passwordNotEmpty = false;
    		var _emailOkay = false, _passwordOkay = false; 
    		var _email = "mail@mail.com", _password = "123";

    		if (_emailTextarea.val().trim() == '') {
    			_emailErrorEmpty.fadeIn(700);
    		} else {
    			_emailErrorEmpty.fadeOut();
    			_emailNotEmpty = true;
    			if ( _emailTextarea.val() == _email )
    				_emailOkay = true;
    		}

   			if (_passwordTextarea.val().trim() == '') {
    			_passwordErrorEmpty.fadeIn(700);
    		} else {
    			_passwordErrorEmpty.fadeOut(); 
    			_passwordNotEmpty = true;
    			if ( _passwordTextarea.val() == _password )  
    				_passwordOkay = true;
    		}
    		console.log(_emailOkay);
    		console.log(_passwordOkay);
    		if ( _emailOkay && _passwordOkay ) {
    			_emailPasswordError.fadeOut();
    			$('form').unbind('submit').submit();
    		} else {
    			if ( _emailNotEmpty && _passwordNotEmpty ) 
    				_emailPasswordError.fadeIn(700);   
    			}
    		}

		// Возвращаем публичные медоты, которые будут доступны снаружи
		return {
			init
		}
	
	}());
  
	// Запускаем модуль
	loginFormCheck.init();

});