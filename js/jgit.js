/**
 * Created by vineelal on 18/11/13.
 */
function nextLine(e){
    if(e.keyCode === 13){
           /* user.insertAdjacentHTML('afterend','<div id="user">vineelal@vineela-l:~$<input id="cmd" type="text" onkeypress="nextLine(event)"></div>');
            console.log("The command to be executed "+cmd.value);*/
        var command = document.getElementById("input").value;
        var output = executeCommand(command);
        document.getElementById("output").value = output;
        var div = document.createElement("div");
        div.setAttribute("id","user");
        var text = document.createTextNode("vineelal@vineela-l:~$");
        var input = document.createElement("input");
        input.setAttribute("onkeypress","nextLine(e)")
//        input.onkeypress = nextLine(e);
        input.addEventListener("onkeypress", function(){nextLine(event)}, false);
        var output = document.createElement("input");
        div.appendChild(text);
        div.appendChild(input);
        div.appendChild(output);
        document.body.appendChild(div);
    }
   /* else{
        var length = (cmd.value.length+1)*8;
        cmd.setAttribute('width',length);
    }*/
}

function executeCommand(input){
    return "the output of the command "+input;
}
