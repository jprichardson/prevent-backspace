
function captureBackspace(e) {
  var rx = /INPUT|SELECT|TEXTAREA/i;

  if( e.which == 8 ){ // 8 == backspace
    if(e.target.contentEditable) return;
    if(!rx.test(e.target.tagName) || e.target.disabled || e.target.readOnly) {
      e.preventDefault();
    }
  }
}

module.exports = function preventBackspace() {
  if (window.addEventListener)
    window.addEventListener('keydown', captureBackspace, true)
  else if (document.attachEvent)
    document.attachEvent('onkeydown', captureBackspace)
  else 
    document.addEventListener('keydown', captureBackspace, true)
}
