$(function (){
	// var io = require('socket.io')(server);
	var socket = io();
	var name = prompt("Nombre:");

	socket.on('chat', function(msg){
	    $('.chat-box ul').append($('<li>').text(msg));
	});


	$('form').on("submit", function(event){
		event.preventDefault();
		socket.emit('chat',$('#message').val());
	    $('#message').val('');
	    return false;
	});
});
