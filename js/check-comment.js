$(document).ready(function(){

	var commentFormCheck = (function(){

		// Переменные модуля
		var _form = $('#comment-add-form');
		var _commentTextarea = $('#commentText');
		var _commentErrorEmpty = $('#commentErrorEmpty');

		// Метод инициализации (запуска) модуля
		var init = function(){
			console.log('Hello from _formInit');
			_setUpListeners(); // Запускаем прослушку событий
		}

		// Метод прослушки событий
		// В нем прослушиваем события на странице, например клики по кнопкам, и при срабатывании события запускаем нужный метод нашего модуля
		var _setUpListeners = function(){
			_form.on('submit', function(event){
				console.log('Hello from _formClick');
				_formValidate(event);

			});
		}

		// Приватные методы
		var _formValidate = function (event) {
			console.log('Hello from _formValidate');
    		event.preventDefault();
    	
    		if (_commentTextarea.val().trim() == '') {
    			_commentErrorEmpty.fadeIn(700);
    		} else {
    			_commentErrorEmpty.fadeOut();
    			$('form').unbind('submit').submit();
    		}
			
		}

		// Возвращаем публичные медоты, которые будут доступны снаружи
		return {
			init
		}
	
	}());
  
	// Запускаем модуль
	commentFormCheck.init();

});