$(function (){
	var socket = io();
	var name = prompt("Nombre:");

	socket.on('chat', function(data){
	    $('.chat-box ul').append($('<li>').text(data.name +": "+ data.message));
	});

	$('form').on("submit", function(event){
		event.preventDefault();
		var data = {     
		    name: name,
		    message: $('#message').val()
		}

		socket.emit('chat', data);
	    $('#message').val('');
	    return false;
	});
});
