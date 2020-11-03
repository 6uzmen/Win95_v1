var GlobalW = window.innerWidth;
var GlobalH = window.innerHeight;
var GlobalCells 

window.onload = function() {

   //MAKE DRAGGABLE LOGIN
    document.getElementById("black_screen").style.animationName = "blackFade";
    document.getElementById("black_screen").style.webkitAnimationName = "blackFade";
    document.getElementById("turn_on").style.animationName = "turnOn";
    document.getElementById("turn_on").style.webkitAnimationName = "turnOn";
    setTimeout(typeWriter, 3000);
    dragElement(document.getElementById("window_login"));
    //CREATE CELLS FOR THE GRID
    loadGrid();
    //CALCULATE HOW MANY ARE THERE
    GlobalCells = (document.getElementById("grid").style.gridTemplateRows.slice(7,9).replace(',','') * document.getElementById("grid").style.gridTemplateColumns.slice(7,9).replace(',',''));
   //CRATE DIV FOR EVERY CELL EXISTING
    for (let i = 0; i< GlobalCells; i++) {
        addElement("grid","div","cell" + i);
        document.getElementById("cell" +i).setAttribute('ondragover',"over()");
        document.getElementById("cell" +i).setAttribute('ondrop',"drop()");
        document.getElementById("cell" + i).setAttribute('class',"cells");
    } 
}


var N = 0;
var word = "";
var word2 = "";

function typeWriter(){

    var txt = "@6uzmen";
    var psw = "kikipipo"

    if (N <= txt.length - 1) {

        word += txt.charAt(N);
        N++;
        document.getElementById("username_val").setAttribute('value', word + "|");
        setTimeout(typeWriter, (Math.random() * 300) + 50);
        

      } else if ( N < (txt.length + psw.length)){
        document.getElementById("username_val").setAttribute('value', word);
        word2 += psw.charAt(N - txt.length);
        N++;
        document.getElementById("password_val").setAttribute('value', word2);
        setTimeout(typeWriter, (Math.random() * 300) + 100);
      }

}

function hover(){
    document.getElementById("cursor").setAttribute("src" , "./img/hand1.png");
    //document.getElementById("cursor").setAttribute("height" , "18px");
    //document.getElementById("cursor").setAttribute("width" , "13px");
}

function clicking(){
    event.preventDefault();
    console.log(event)
}



//RESIZE WINDOW DISPLAY ON VIEW ROTATION
window.addEventListener("orientationchange", function() {
    TextResponsive()
});
//DETECT RESIZE
window.onresize = function(){

    if (GlobalW -200 > window.innerWidth ){
        GlobalW = window.innerWidth
        responsive();
    } else if (GlobalW +200 < window.innerWidth){
        GlobalW = window.innerWidth
        responsive();
    }
    if (GlobalH -200 > window.innerHeight ){
        GlobalH = window.innerHeight
        responsive();
    } else if (GlobalH +200 < window.innerHeight){
        GlobalH = window.innerHeight
        responsive();
    }

    TextResponsive();
    
}

function TextResponsive(){

    //DETECTA TAMAÑO DE LA PANTALLA
    if (window.innerHeight > 800 || window.innerWidth > 1400){
        //TASKBAR SIZE RESPONSIVE CODE
        try{
            for (let i = 0; i < 10; i++) {
            document.getElementById("icon_text" + i).style.fontSize = "15px"
            }
            document.getElementById("taskbar_win_display").style.height = "45%"
            document.getElementById("taskbar_win_display").style.width = (getComputedStyle(document.querySelector('#taskbar_win_display')).height.replace('px','') / 1.9 + "px")
            
        }catch{}
        //PROGRAMS WINDOW & DOCUMENTS  RESPONSIVE CODE
        try{
            document.getElementById("programs_window").style.width = ((((document.getElementById("taskbar_win_display").style.width.replace('px','')) * 75) / 100) + "px");
            ProgramsResponsive();

        } catch{}
        try {
            document.getElementById("documents_window").style.width = ((((document.getElementById("taskbar_win_display").style.width.replace('px','')) * 75) / 100) + "px");
            DocumentsResponsive();
        } catch {}
    } else if (window.innerHeight < 800 && window.innerHeight > 600 || window.innerWidth < 1400 && window.innerHeight > 600){
        //TASKBAR SIZE RESPONSIVE CODE
        try{
            for (let i = 0; i < 10; i++) {
            document.getElementById("icon_text" + i).style.fontSize = "13px"
             }
             document.getElementById("taskbar_win_display").style.height = "55%"
             document.getElementById("taskbar_win_display").style.width = (getComputedStyle(document.querySelector('#taskbar_win_display')).height.replace('px','') / 1.8 + "px")
        }catch{}
        //PROGRAMS WINDOW & DOCUMENTS  RESPONSIVE CODE
        try{
            document.getElementById("programs_window").style.width = ((((document.getElementById("taskbar_win_display").style.width.replace('px','')) * 75) / 100) + "px");
            ProgramsResponsive();
        }catch{}
        try {
            document.getElementById("documents_window").style.width = ((((document.getElementById("taskbar_win_display").style.width.replace('px','')) * 75) / 100) + "px");
            DocumentsResponsive();
        } catch {}
    } else if (window.innerHeight < 600 || window.innerWidth < 600){
        //TASKBAR SIZE RESPONSIVE CODE
        try{
            for (let i = 0; i < 10; i++) {
            document.getElementById("icon_text" + i).style.fontSize = "11px"
             }
             document.getElementById("taskbar_win_display").style.height = "65%"
             document.getElementById("taskbar_win_display").style.width = (getComputedStyle(document.querySelector('#taskbar_win_display')).height.replace('px','') / 1.7 + "px")
        }catch{}
        //PROGRAMS & DOCUMENTS WINDOW RESPONSIVE CODE
        try{
            document.getElementById("programs_window").style.width = ((((document.getElementById("taskbar_win_display").style.width.replace('px','')) * 75) / 100) + "px");
            ProgramsResponsive();

        }catch{}
        try {
            document.getElementById("documents_window").style.width = ((((document.getElementById("taskbar_win_display").style.width.replace('px','')) * 75) / 100) + "px");
            DocumentsResponsive();
        } catch {}
    }
    ProgramsResponsive();
    DocumetnsResponsive();
}
//CREATING THE GRID FOR BACKGROUND BASED ON VIEW SIZE
function loadGrid() {
    if (window.innerWidth > 1400){
        document.getElementById("grid").style.gridTemplateColumns = "repeat(12, calc(8.3%))"
 }
    else if (window.innerWidth < 1400 && window.innerWidth > 800){
        document.getElementById("grid").style.gridTemplateColumns = "repeat(10, calc(10%))"
                //for (let index = 0; index < document.getElementsByClassName("item").length; index++) {
                //document.getElementsByClassName("item")[index].style.width = "60px"
                //document.getElementsByClassName("item")[index].style.height = "60px"
                //}
    } else if (window.innerWidth < 800 && window.innerWidth > 600){
        document.getElementById("grid").style.gridTemplateColumns = "repeat(6, calc(16.6% - 5px))"

    } else if (window.innerWidth < 600 ){
        document.getElementById("grid").style.gridTemplateColumns = "repeat(4, calc(25% - 5px))"

      } 
//RESPONSIVE ALTO
    if (window.innerHeight > 800){
        document.getElementById("grid").style.gridTemplateRows = "repeat(10, calc(10%))"


    } else if (window.innerHeight < 800){
        document.getElementById("grid").style.gridTemplateRows = "repeat(6, calc(16.25% - 5px))"


    }

}

//RESPONSIVE MODIFICATIONS 
function responsive(){

        //RELOAD THE GRID
        loadGrid();
        //ACTUAL CELLS
        var LocalCells = (document.getElementById("grid").style.gridTemplateRows.slice(7,9).replace(',','') * document.getElementById("grid").style.gridTemplateColumns.slice(7,9).replace(',',''));
        
        // Quitar Celldas

        if (LocalCells < GlobalCells){
                for (let i = GlobalCells - 1; i > LocalCells - 1; i--) {
                removeElement("cell" + i);
        }
            GlobalCells = LocalCells
        }

        // Agregar Celdas

         if (LocalCells > GlobalCells){
            for (let i = GlobalCells  ; i < LocalCells; i++) {

                addElement("grid","div","cell" + i);
                document.getElementById("cell" +i).setAttribute('ondragover',"over()");
                document.getElementById("cell" +i).setAttribute('ondrop',"drop()");
                document.getElementById("cell" + i).setAttribute('class',"cells");
            }
            GlobalCells = LocalCells
        }

}


//DRAW WINDOW
    function dragElement(elmnt) {

        var pos1 = 0,
            pos2 = 0,
            pos3 = 0,
            pos4 = 0;
        if (document.getElementById(elmnt.id + "_tab")) {
            /* if present, the header is where you move the DIV from:*/
            document.getElementById(elmnt.id  + "_tab").onmousedown = dragMouseDown;
        } else {
            /* otherwise, move the DIV from anywhere inside the DIV:*/
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            /* stop moving when mouse button is released:*/
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
//AFTER LOGIN
        function login(){
            

    //REMOVE LOGIN
            removeElement("window_login") 

    //DESKTOP ICONS
            //ICON 1
            addElement("cell0","img","desk_elemt1");
            createDesktopIcon("1","pc.ico");

            //ICON 2
            addElement("cell1","img","desk_elemt2");
            createDesktopIcon("2","trash.ico");
            


    //ADD TASKBAR & STAFF
            addElement("background","div","taskbar");
                    
            //ADD START
            addElement("taskbar","div","taskbar_win");
            document.getElementById("taskbar_win").addEventListener("ontouch", touchwin);
            document.getElementById("taskbar_win").addEventListener("click", touchwin);

            //ICON & TEXT
            addElement("taskbar_win","img","taskbar_win_ico");
            addElement("taskbar_win","h6","taskbar_win_text");
            document.getElementById("taskbar_win_ico").setAttribute('src',"icons/win95.png");
            document.getElementById("taskbar_win_text").innerHTML = "Start";
        
            //CLOCK & VOLUME
            addElement("taskbar","div","taskbar_clock");
            addElement("taskbar_clock","img","taskbar_vol");
            document.getElementById("taskbar_vol").setAttribute('src',"icons/sound.png");
            addElement("taskbar_clock","h6","taskbar_time");
    
            //WINDISPLAY
            addElement("background","div","taskbar_win_display");

            addElement("taskbar_win_display","div","taskbar_win_display_banner");

            addElement("taskbar_win_display_banner","h3","display_banner_text");
            document.getElementById("display_banner_text").innerHTML = "Windows";

            addElement("display_banner_text","span","display_banner_text_95");
            document.getElementById("display_banner_text_95").innerHTML = " 95";

              //MAKE DRAGGABLE LOGIN
            document.getElementById("taskbar").style.animationName = "taskbarin";
            document.getElementById("taskbar").style.webkitAnimationName = "taskbarin"; 
     //WIN_DISPLAY ELEMENTS
            for (let i = 0; i < 30; i++) {
                addElement("taskbar_win_display","div","taskbar_win_display_element" + i);
                document.getElementById("taskbar_win_display_element" + i).setAttribute('class',"taskbar_win_display_element");
                document.getElementById("taskbar_win_display_element" + i).setAttribute('onmouseover',"taskbarHover()");
                document.getElementById("taskbar_win_display_element" + i).setAttribute('onmouseout',"taskbarOutHover()");
            }
                for (let i = 0; i < 10; i++) {
                    document.getElementById("taskbar_win_display_element" + i).style.gridArea = (i +1) + "/2";
                } 
                for (let i = 10; i < 20; i++) {
                    document.getElementById("taskbar_win_display_element" + i).style.gridArea = (i - 9) + "/3";
                    document.getElementById("taskbar_win_display_element" + i).style.borderLeft = "2px black";
                }
            
            for (let i = 0; i < 10; i++) {

                addElement("taskbar_win_display_element" + i,"img","icon" + i);
                document.getElementById("icon" + i).setAttribute('src',"icons/" + i + ".ico");
                document.getElementById("icon" + i).setAttribute('class',"icons");
                
            }
            for (let i = 0; i < 10; i++) {

                addElement("taskbar_win_display_element" + (i + 10),"h6","icon_text" + i);
               
                document.getElementById("icon_text" + i).setAttribute('class',"icons_text");
                document.getElementById("icon_text" + i).style.gridArea = "3/" + i;
            }
            for (let i = 0; i < 10; i++) {

                addElement("taskbar_win_display_element" + (i + 20),"h6","icon_text_plus" + i);
               
                document.getElementById("icon_text_plus" + i).setAttribute('class',"icons_text_plus");
                document.getElementById("icon_text_plus" + i).style.gridArea = "4/" + i;
            }

         //TASKBAR ELEMENTS NAMES

            document.getElementById("icon_text" + 9).innerHTML = "ShutDown";
            document.getElementById("icon_text" + 8).innerHTML = "Suspend";
            document.getElementById("icon_text" + 7).innerHTML = "Run...";
            document.getElementById("icon_text" + 6).innerHTML = "Help";
            document.getElementById("icon_text" + 5).innerHTML = "Network";
            document.getElementById("icon_text" + 4).innerHTML = "Search";
            document.getElementById("icon_text" + 3).innerHTML = "Settings";
            document.getElementById("icon_text" + 2).innerHTML = "Documents";
            document.getElementById("icon_text" + 1).innerHTML = "Programs";
            document.getElementById("icon_text" + 0).innerHTML = "Connection";

         //OPENANLE ELEMENTS

            document.getElementById("icon_text_plus" + 1).innerHTML = "4";
            document.getElementById("icon_text_plus" + 2).innerHTML = "4";


        //ADD TASKBAR_WIN_ELEMENTS DISPLAY ONCLICK
        
                    //PROGRAMS
            document.getElementById("taskbar_win_display_element1").setAttribute('onclick',"DisplayPrograms()");
            document.getElementById("taskbar_win_display_element11").setAttribute('onclick',"DisplayPrograms()");
            document.getElementById("taskbar_win_display_element21").setAttribute('onclick',"DisplayPrograms()");
            document.getElementById("taskbar_win_display_element1").addEventListener("ontouch", DisplayPrograms);
            document.getElementById("taskbar_win_display_element11").addEventListener("ontouch", DisplayPrograms);
            document.getElementById("taskbar_win_display_element21").addEventListener("ontouch", DisplayPrograms);
                    //DOCUMENTS
            document.getElementById("taskbar_win_display_element2").setAttribute('onclick',"DisplayDocuments()");
            document.getElementById("taskbar_win_display_element12").setAttribute('onclick',"DisplayDocuments()");
            document.getElementById("taskbar_win_display_element22").setAttribute('onclick',"DisplayDocuments()");
            document.getElementById("taskbar_win_display_element2").addEventListener("ontouch", DisplayDocuments);
            document.getElementById("taskbar_win_display_element12").addEventListener("ontouch", DisplayDocuments);
            document.getElementById("taskbar_win_display_element22").addEventListener("ontouch", DisplayDocuments);
    //ADDINSIDE TASKBAR_WIN_ELEMENTS 


            TextResponsive();
           

    //UPADTE CLOCK
            clock();

     
        }
        
//CREATE DESKTOP ICON
        function createDesktopIcon(id,src){
            document.getElementById("desk_elemt" + id).setAttribute('src',"icons/" + src);
            document.getElementById("desk_elemt" + id).setAttribute('class',"item");
            document.getElementById("desk_elemt" + id).setAttribute('draggable',"true");
            document.getElementById("desk_elemt" + id).setAttribute('ondragstart',"drag()");
            document.getElementById("desk_elemt" + id).addEventListener("touchstart", touch);
            document.getElementById("desk_elemt" + id).addEventListener("touchmove", touchmove);
            document.getElementById("desk_elemt" + id).addEventListener("touchend", touchend);
            document.getElementById("desk_elemt" + id).addEventListener("touchend", touchend);
        }

//DISPLAY WIN BAR HOVER EFFECT
        function taskbarHover(){
            document.getElementById("" + event.target.id + "").style.backgroundColor = "#c0c0c0";
            if ((event.target.id).length == 29) {
                let id = parseInt((event.target.id).slice(27,29));
                if (id < 20){
                    document.getElementById(  "taskbar_win_display_element" +  (id - 10)  ).style.backgroundColor = "#c0c0c0";
                    document.getElementById(  "taskbar_win_display_element" +  (id + 10)  ).style.backgroundColor = "#c0c0c0";
                } else {
                    document.getElementById(  "taskbar_win_display_element" +  (id - 10)  ).style.backgroundColor = "#c0c0c0";
                    document.getElementById(  "taskbar_win_display_element" +  (id - 20)  ).style.backgroundColor = "#c0c0c0"; 
                }
            } else if ((event.target.id).length == 28) {
                let id = parseInt((event.target.id).slice(27));
                    document.getElementById(  "taskbar_win_display_element" +  (id + 10)  ).style.backgroundColor = "#c0c0c0";
                    document.getElementById(  "taskbar_win_display_element" +  (id + 20)  ).style.backgroundColor = "#c0c0c0";
            }
        }
    // UNHOVER EFFECT
        function taskbarOutHover(){
            document.getElementById("" + event.target.id + "").style.backgroundColor = "";
            if ((event.target.id).length == 29) {
                let id = parseInt((event.target.id).slice(27,29));
                if (id < 20){
                    document.getElementById(  "taskbar_win_display_element" +  (id - 10)  ).style.backgroundColor = "";
                    document.getElementById(  "taskbar_win_display_element" +  (id + 10)  ).style.backgroundColor = "";
                } else {
                    document.getElementById(  "taskbar_win_display_element" +  (id - 10)  ).style.backgroundColor = "";
                    document.getElementById(  "taskbar_win_display_element" +  (id - 20)  ).style.backgroundColor = "";
                }
            } else if ((event.target.id).length == 28) {
                let id = parseInt((event.target.id).slice(27));
                    document.getElementById(  "taskbar_win_display_element" +  (id + 10)  ).style.backgroundColor = "";
                    document.getElementById(  "taskbar_win_display_element" +  (id + 20)  ).style.backgroundColor = "";
            }
        }
//DISPLAY PROGRAMS
        function DisplayPrograms(){
            if (document.getElementById("programs_window") == null){
                addElement("background","div","programs_window");
            } else {
                removeElement("programs_window");
            }
            try {
                removeElement("documents_window");
            } catch { }
            ProgramsResponsive();
            TextResponsive();
        }
        function ProgramsResponsive(){
        try{
            var programs_windowX = (document.getElementById("taskbar_win_display_element21").getBoundingClientRect().x) + ((document.getElementById("taskbar_win_display_element21").offsetWidth));
            var programs_windowY = (document.getElementById("taskbar_win_display_element21").getBoundingClientRect().y);
            document.getElementById("programs_window").style.left = (programs_windowX + 3 ) + "px";
            document.getElementById("programs_window").style.top = programs_windowY + "px";
        } catch{}
        }
//DISPLAY DOCUMENTS
        function DisplayDocuments(){
            if (document.getElementById("documents_window") == null){
                addElement("background","div","documents_window");
                    addElement("documents_window","div","documents_readme");
                        addElement("documents_readme","img","readme_ico");
                        document.getElementById("readme_ico").setAttribute('src',"icons/text.ico");
                        addElement("documents_readme","h6","readme");
                        document.getElementById("readme").innerHTML = "Readme";
                    addElement("documents_window","div","documents_contact");
                        addElement("documents_contact","img","contact_ico");
                        document.getElementById("contact_ico").setAttribute('src',"icons/text.ico");
                        addElement("documents_contact","h6","contact");
                        document.getElementById("contact").innerHTML = "Contact";
            } else {
                removeElement("documents_window");
            }
            try {
                removeElement("programs_window");
            } catch { }
            DocumetnsResponsive();
            TextResponsive();
        }

        function DocumetnsResponsive(){
            try{
                var documents_windowX = (document.getElementById("taskbar_win_display_element22").getBoundingClientRect().x) + ((document.getElementById("taskbar_win_display_element22").offsetWidth));
                var documents_windowY = (document.getElementById("taskbar_win_display_element22").getBoundingClientRect().y);
                document.getElementById("documents_window").style.left = (documents_windowX + 3 ) + "px";
                document.getElementById("documents_window").style.top = documents_windowY + "px";
            } catch{}
        }
 //HIDE AND SHOW WINDOW DISPLAY
        var hide = true
        
        function touchwin() {
            //hide
            if(hide == false){

            document.getElementById("taskbar_win").style.backgroundColor = '#b6b6b6';
            document.getElementById("taskbar_win").style.border = '3px outset #e6e6e6';
            document.getElementById("taskbar_win").style.borderRightColor = '#8a8a8a';
            document.getElementById("taskbar_win").style.borderBottomColor = '#8a8a8a';
            
            document.getElementById("taskbar_win_display").style.animationName = 'taskbarDisout';
            document.getElementById("taskbar_win_display").style.webkitAnimationName = 'taskbarDisout';
            document.getElementById("taskbar_win_display").style.pointerEvents = 'none';

            try{
            removeElement("programs_window");
            }catch{}

            try{
                removeElement("documents_window");
            }catch{}

            hide = true;
            //visible
            } else if (hide == true){
            document.getElementById("taskbar_win").style.backgroundColor = '#a8a8a8';
            document.getElementById("taskbar_win").style.border = '3px inset #e6e6e6';
            document.getElementById("taskbar_win").style.borderTopColor = '#8a8a8a';
            document.getElementById("taskbar_win").style.borderLeftColor = '#8a8a8a';

            document.getElementById("taskbar_win_display").style.animationName = 'taskbarDisin';
            document.getElementById("taskbar_win_display").style.webkitAnimationName = 'taskbarDisin';
            document.getElementById("taskbar_win_display").style.pointerEvents = 'all';
            hide = false;
            }

        }


//CREATE NEW ELEMENT
        function addElement(parentId, elementTag, elementId) {
            // Adds an element to the document
            var p = document.getElementById(parentId);
            var newElement = document.createElement(elementTag);
            newElement.setAttribute('id', elementId);
            p.appendChild(newElement);
        }
//REMOVE ELEMENT
        function removeElement(elementId) {
            // Removes an element from the document
            var element = document.getElementById(elementId);
            element.parentNode.removeChild(element);
        }
//CLOCK       
        function clock(){
            var d = new Date();  
            var min, hour, time;
            if (d.getMinutes() < 10) {
                min = "0" + d.getMinutes();
            } else {
                min = d.getMinutes(); 
            }
            if (d.getHours() < 10){
                hour = "0" + d.getHours();
            } else {
                hour = d.getHours();
            }
            if (d.getHours() < 12){
                time = " AM"
            } else {
                time = " PM"
            }
            try {
                document.getElementById("taskbar_time").innerHTML = (hour + ":" + min + time);
            } catch (e) {
            
                return;
            }

        }
//UPADATE CLOCK
        window.setInterval(function(){
            clock();
        }, 1000);

//ICON DRAG & DROP
        var dragObj
        var parent1
        var iconlocation

        function touch() {
            dragObj = event.target.id
            parent1 = event.path[1].id
            iconlocation = event.path[0].src
            removeElement(dragObj);
            addElement( "background","img",dragObj + "temp");
            document.getElementById(dragObj + "temp").style.zIndex = "10";
            document.getElementById(dragObj + "temp").style.opacity = "80%";
            document.getElementById(dragObj + "temp").setAttribute('src',iconlocation);
            document.getElementById(dragObj + "temp").setAttribute('class',"itemtemp");
            document.getElementById(dragObj + "temp").style.left = event.touches[0].clientX + "px";
            document.getElementById(dragObj + "temp").style.top = event.touches[0].clientY + "px";
            
        }
    //TOUCH ICON
        function touchmove() {
            
            document.getElementById(dragObj + "temp").style.left = event.touches[0].clientX + "px";
            document.getElementById(dragObj + "temp").style.top = event.touches[0].clientY + "px";
        }

    //STOP TOUCH ICON
        function touchend(){
            
            var cellDetect;
            var cellCount = 0;
            var dragObjX = document.getElementById(dragObj + "temp").getBoundingClientRect().x;
            var dragObjY = document.getElementById(dragObj + "temp").getBoundingClientRect().y;
            var cellSizeX = ((document.getElementById("cell0").offsetWidth) / 2);
            var cellSizeY = ((document.getElementById("cell0").offsetHeight) / 2);

            while (cellDetect != 1) {
                try{
                if(dragObjX >= ((document.getElementById("cell" + cellCount).getBoundingClientRect().x) - cellSizeX) && dragObjX <= ((document.getElementById("cell" + cellCount).getBoundingClientRect().x) + cellSizeX) ){
                    if(dragObjY >= ((document.getElementById("cell" + cellCount).getBoundingClientRect().y) - cellSizeY) && dragObjY <= ((document.getElementById("cell" + cellCount).getBoundingClientRect().y) + cellSizeY) ){
                        cellDetect = 1;
                        if(document.getElementById("cell" + cellCount).children.length == 0){
                        parent1 = ("cell" + cellCount);
                        }
                    }
                } 
            } catch {
                console.log("error")
            }
                if(cellCount <= GlobalCells){
                    cellCount += 1;
                    
                } else {
                    cellDetect =  1;
                }
                
            }
            
            removeElement(dragObj + "temp");
            addElement( parent1,"img",dragObj);
            document.getElementById(dragObj).setAttribute('src',iconlocation);
            document.getElementById(dragObj).setAttribute('class',"item");
            document.getElementById(dragObj).setAttribute('draggable',"true");
            document.getElementById(dragObj).setAttribute('ondragstart',"drag()");
            document.getElementById(dragObj).addEventListener("touchstart", touch);
            document.getElementById(dragObj).addEventListener("touchmove", touchmove);
            document.getElementById(dragObj).addEventListener("touchend", touchend);
        }


        function touchover(){
            console.log(event);
        }

    //DRAG ICON PC
        function drag(){
            
            dragObj = event.toElement.id
            parent1 = event.path[1].id
            iconlocation = event.path[0].src

        }
    
        function over() {
                event.preventDefault();
        
            }
    //DROP ICON
        function drop() {
            
            removeElement(dragObj);

            try{
                if(event.path[0].children.length > 0) throw "empty";
                if(event.path[1].id != "grid") throw "empty";
            addElement(event.target.id  ,"img",dragObj);
            document.getElementById(dragObj).setAttribute('src',iconlocation);
            document.getElementById(dragObj).setAttribute('class',"item");
            document.getElementById(dragObj).setAttribute('draggable',"true");
            document.getElementById(dragObj).setAttribute('ondragstart',"drag()");
            }catch{
                addElement(parent1,"img",dragObj);
                document.getElementById(dragObj).setAttribute('src',iconlocation);
                document.getElementById(dragObj).setAttribute('class',"item");
                document.getElementById(dragObj).setAttribute('draggable',"true");
                document.getElementById(dragObj).setAttribute('ondragstart',"drag()");
            }
            }