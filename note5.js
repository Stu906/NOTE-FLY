
function document5(){
    var heading5 = localStorage.getItem("Note5_head");
    var note_text5 = localStorage.getItem("Note5_text");
    document.getElementById("textarea5").innerHTML = note_text5;
    document.getElementById("note5_heading").innerHTML = heading5;
    bold_5 = localStorage.getItem("bold5");
    underline_5 = localStorage.getItem("underline5");
    italic_5 = localStorage.getItem("italic5");
    if(bold_5 == "Yes"){
        document.getElementById("note5_heading").style.fontWeight = "bold";
    }
    if(underline_5 == "Yes"){
        document.getElementById("note5_heading").style.textDecoration = "underline";
    }
    if(italic_5 == "Yes"){
        document.getElementById("note5_heading").style.fontStyle = "italic";
    }
    document.getElementById("textarea5").style.fontSize = localStorage.getItem("font_size5");
}


function save5(){
    var head5 = document.getElementById("note5_heading").value;
    var text5 = document.getElementById("textarea5").value;
    window.location = "index.html";
    if(head5 != ""){
        localStorage.setItem("Note5_head", head5);
        localStorage.setItem("Note5_text", text5);
    }
    else{
        localStorage.setItem("Note5_head", "Note 5");
    }
}

function bold5(){
    bold_5 = "Yes";
    localStorage.setItem("bold5", bold_5);
        document.getElementById("note5_heading").style.fontWeight="bold";
        document.getElementById("bold_button5_2").style.display="initial";
        document.getElementById("bold_button5").style.display="none";
} 

function bold5_2(){
    bold_5 = "No";
    localStorage.setItem("bold5", bold_5);
    document.getElementById("note5_heading").style.fontWeight="normal";
    document.getElementById("bold_button5_2").style.display="none";
    document.getElementById("bold_button5").style.display="initial";
}

function underline5(){
    underline_5 = "Yes";
    localStorage.setItem("underline5", underline_5);
    document.getElementById("note5_heading").style.textDecoration="underline";
    document.getElementById("underline_button5_2").style.display="initial";
    document.getElementById("underline_button5").style.display="none";
} 

function underline5_2(){
    underline_5 = "No";
    localStorage.setItem("underline5", underline_5);
document.getElementById("note5_heading").style.textDecoration="none";
document.getElementById("underline_button5_2").style.display="none";
document.getElementById("underline_button5").style.display="initial";
}

function italic5(){
    italic_5 = "Yes";
    localStorage.setItem("italic5", italic_5);
    document.getElementById("note5_heading").style.fontStyle="italic";
    document.getElementById("italic_button5_2").style.display="initial";
    document.getElementById("italic_button5").style.display="none";
} 

function italic5_2(){
    italic_5 = "No";
    localStorage.setItem("italic5", italic_5);
document.getElementById("note5_heading").style.fontStyle="normal";
document.getElementById("italic_button5_2").style.display="none";
document.getElementById("italic_button5").style.display="initial";
}

function sort_up5(){
    
    var font_size5 = localStorage.getItem("font_size5");
    font_size5 = font_size5*1;
    font_size5 = font_size5 + 2;
    localStorage.setItem("font_size5", font_size5);
    document.getElementById("textarea5").style.fontSize= font_size5;
}

function sort_down5(){
    var font_size5 = localStorage.getItem("font_size5");
    font_size5 = font_size5*1;
    font_size5 = font_size5 - 2;
    localStorage.setItem("font_size5", font_size5);
    document.getElementById("textarea5").style.fontSize= font_size5;
}
       