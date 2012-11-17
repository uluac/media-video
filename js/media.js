// JavaScript Document
// Wait for Cordova to load
//
/*document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready
//
function onDeviceReady() {
	playAudio("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3");
}

// Audio player
//
var my_media = null;
var mediaTimer = null;

// Play audio
//
function playAudio(src) {
	if (my_media == null) {
		// Create Media object from src
		my_media = new Media(src, onSuccess, onError);
	} // else play current audio
	// Play audio
	my_media.play();

	// Update my_media position every second
	if (mediaTimer == null) {
		mediaTimer = setInterval(function() {
			// get my_media position
			my_media.getCurrentPosition(
				// success callback
				function(position) {
					if (position > -1) {
						setAudioPosition((position) + " sec");
					}
				},
				// error callback
				function(e) {
					console.log("Error getting pos=" + e);
					setAudioPosition("Error: " + e);
				}
			);
		}, 1000);
	}
}

// Pause audio
// 
function pauseAudio() {
	if (my_media) {
		my_media.pause();
	}
}

// Stop audio
// 
function stopAudio() {
	if (my_media) {
		my_media.stop();
	}
	clearInterval(mediaTimer);
	mediaTimer = null;
}

// onSuccess Callback
//
function onSuccess() {
	console.log("playAudio():Audio Success");
}

// onError Callback 
//
function onError(error) {
	alert('code: '    + error.code    + '\n' + 
		  'message: ' + error.message + '\n');
}

// Set audio position
// 
function setAudioPosition(position) {
	document.getElementById('audio_position').innerHTML = position;
}*/
/*function inspeccionar(obj)
{
  var msg = new Array();
 
  for (var property in obj)
  {
    if (typeof obj[property] == 'function')
    {
      var inicio = obj[property].toString().indexOf('function');
      var fin = obj[property].toString().indexOf(')')+1;
      var propertyValue=obj[property].toString().substring(inicio,fin);
      msg[msg.length] = {'type' : (typeof obj[property]), name : property, 'value' : propertyValue};
    }
    else if (typeof obj[property] == 'unknown')
    {
      msg[msg.length] = {'type' : 'unknown', name : property, value : 'unknown'};
    }
    else
    {
      msg[msg.length] ={'type' : (typeof obj[property]), name : property, 'value' : obj[property]};
    }
  }
  return msg;
}*/
function inspeccionar(obj)
{
  var msg = '';
  for (var property in obj)
  {
    if (typeof obj[property] == 'function')
    {
      var inicio = obj[property].toString().indexOf('function');
      var fin = obj[property].toString().indexOf(')')+1;
      var propertyValue=obj[property].toString().substring(inicio,fin);
      msg +=(typeof obj[property])+' '+property+' : '+propertyValue+' ;\n';
    }
    else if (typeof obj[property] == 'unknown')
    {
      msg += 'unknown '+property+' : unknown ;\n';
    }
    else
    {
      msg +=(typeof obj[property])+' '+property+' : '+obj[property]+' ;\n';
    }
  }
  return msg;
}
document.addEventListener("deviceready", function(){
	var options = { limit: 2 };
	navigator.device.capture.captureVideo(function(mediaFiles){
		for(i=0;i<mediaFiles.length;i++){
			$('body').append(mediaFiles[i].fullPath);
		}
	}, function(err){
		alert(err.code);
	}, options);
}, false);