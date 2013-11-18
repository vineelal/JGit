/**
 * Created by vineelal on 18/11/13.
 */
function nextLine(e){
    var cmd = document.getElementById('cmd');
    var user = document.getElementById('user');
    if(e.keyCode === 13){
        user.insertAdjacentHTML('afterend','<div id="user">vineelal@vineela-l:~$<input id="cmd" type="text" onkeypress="nextLine(event)"></div>');
    }

}
