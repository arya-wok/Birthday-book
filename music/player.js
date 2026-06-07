/**
 * player.js
 * Background music — YouTube iframe, autoplay on first user gesture, auto-loop
 */
;(function(){
  'use strict';

  var wrapper = document.createElement('div');
  wrapper.id = 'yt-wrapper';
  wrapper.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden;pointer-events:none;';

  var frame = document.createElement('iframe');
  frame.id = 'ytFrame';
  frame.width  = 0;
  frame.height = 0;
  frame.setAttribute('frameborder', '0');
  frame.setAttribute('allow', 'autoplay; encrypted-media');
  frame.setAttribute('allowfullscreen', '');

  wrapper.appendChild(frame);
  document.body.insertBefore(wrapper, document.body.firstChild);

  var YT_SRC = 'https://www.youtube.com/embed/NZGHXy1IAHM?autoplay=1&start=60&end=150&loop=1&playlist=NZGHXy1IAHM&controls=0&rel=0&modestbranding=1&enablejsapi=1';

  var isPlaying = false;
  var frameReady = false;
  var started = false;

  frame.onload = function(){
    frameReady = true;
  };

  function sendCommand(fn, args){
    if (frameReady && frame.contentWindow){
      frame.contentWindow.postMessage(JSON.stringify({
        event: 'command', func: fn, args: args || []
      }), '*');
    }
  }

  /* Bypass browser autoplay block — muat iframe saat interaksi pertama */
  ['click','touchstart','keydown'].forEach(function(ev){
    document.addEventListener(ev, function initPlayer(){
      if (started) return;
      started = true;
      frame.src = YT_SRC;
    }, { once: true });
  });

  window.addEventListener('message', function(e){
    if (e.origin !== 'https://www.youtube.com') return;
    var d;
    try { d = JSON.parse(e.data); } catch(ex){ return; }
    if (d.event === 'onStateChange'){
      if (d.info === 1) { isPlaying = true; }
      else if (d.info === 2) { isPlaying = false; }
      else if (d.info === 0) { sendCommand('seekTo', [60, true]); sendCommand('playVideo'); }
    }
  });

  console.log('[Player] ✓ Ready — waiting for first interaction');
})();
