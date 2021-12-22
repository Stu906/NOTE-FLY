
function document4(){
    var heading4 = localStorage.getItem("Note4_head");
    var note_text4 = localStorage.getItem("Note4_text");
    document.getElementById("textarea4").innerHTML = note_text4;
    document.getElementById("note4_heading").innerHTML = heading4;
    bold_4 = localStorage.getItem("bold4");
    underline_4 = localStorage.getItem("underline4");
    italic_4 = localStorage.getItem("italic4");
    if(bold_4 == "Yes"){
        document.getElementById("note4_heading").style.fontWeight = "bold";
    }
    if(underline_4 == "Yes"){
        document.getElementById("note4_heading").style.textDecoration = "underline";
    }
    if(italic_4 == "Yes"){
        document.getElementById("note4_heading").style.fontStyle = "italic";
    }
    document.getElementById("textarea4").style.fontSize = localStorage.getItem("font_size4");
}

function save4(){
    var head4 = document.getElementById("note4_heading").value;
    var text4 = document.getElementById("textarea4").value;
    window.location = "index.html";
    if(head4 != ""){
        localStorage.setItem("Note4_head", head4);
        localStorage.setItem("Note4_text", text4);
    }
    else{
        localStorage.setItem("Note4_head", "Note 4");
    }
}

function bold4(){
    bold_4 = "Yes";
    localStorage.setItem("bold4", bold_4);
        document.getElementById("note4_heading").style.fontWeight="bold";
        document.getElementById("bold_button4_2").style.display="initial";
        document.getElementById("bold_button4").style.display="none";
} 

function bold4_2(){
    bold_4 = "No";
    localStorage.setItem("bold4", bold_4);
    document.getElementById("note4_heading").style.fontWeight="normal";
    document.getElementById("bold_button4_2").style.display="none";
    document.getElementById("bold_button4").style.display="initial";
}

function underline4(){
    underline_4 = "Yes";
    localStorage.setItem("underline4", underline_4);
    document.getElementById("note4_heading").style.textDecoration="underline";
    document.getElementById("underline_button4_2").style.display="initial";
    document.getElementById("underline_button4").style.display="none";
} 

function underline4_2(){
    underline_4 = "No";
    localStorage.setItem("underline4", underline_4);
document.getElementById("note4_heading").style.textDecoration="none";
document.getElementById("underline_button4_2").style.display="none";
document.getElementById("underline_button4").style.display="initial";
}

function italic4(){
    italic_4 = "Yes";
    localStorage.setItem("italic4", italic_4);
    document.getElementById("note4_heading").style.fontStyle="italic";
    document.getElementById("italic_button4_2").style.display="initial";
    document.getElementById("italic_button4").style.display="none";
} 

function italic4_2(){
    italic_4 = "No";
    localStorage.setItem("italic4", italic_4);
document.getElementById("note4_heading").style.fontStyle="normal";
document.getElementById("italic_button4_2").style.display="none";
document.getElementById("italic_button4").style.display="initial";
}


function sort_up4(){
    
    var font_size4 = localStorage.getItem("font_size4");
    font_size4 = font_size4*1;
    font_size4 = font_size4 + 2;
    localStorage.setItem("font_size4", font_size4);
    document.getElementById("textarea4").style.fontSize= font_size4;
}

function sort_down4(){
    var font_size4 = localStorage.getItem("font_size4");
    font_size4 = font_size4*1;
    font_size4 = font_size4 - 2;
    localStorage.setItem("font_size4", font_size4);
    document.getElementById("textarea4").style.fontSize= font_size4;
}
       