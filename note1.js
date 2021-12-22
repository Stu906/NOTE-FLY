
function document1(){
    var heading1 = localStorage.getItem("Note1_head");
    var note_text1 = localStorage.getItem("Note1_text");
    document.getElementById("textarea1").innerHTML = note_text1;
    document.getElementById("note1_heading").innerHTML = heading1;
    bold1 = localStorage.getItem("bold1");
    underline1 = localStorage.getItem("underline1");
    italic1 = localStorage.getItem("italic1");
    if(bold1 == "Yes"){
        document.getElementById("note1_heading").style.fontWeight = "bold";
    }
    if(underline1 == "Yes"){
        document.getElementById("note1_heading").style.textDecoration = "underline";
    }
    if(italic1 == "Yes"){
        document.getElementById("note1_heading").style.fontStyle = "italic";
    }
    document.getElementById("textarea1").style.fontSize = localStorage.getItem("font_size1");
    
}

function save(){
    var head1 = document.getElementById("note1_heading").value;
    var text1 = document.getElementById("textarea1").value;
    window.location = "index.html";
    if(head1 != ""){
        localStorage.setItem("Note1_head", head1);
        localStorage.setItem("Note1_text", text1);
    }
    else{
        localStorage.setItem("Note1_head", "Note 1");
    }
}

function bold(){
        bold1 = "Yes";
        localStorage.setItem("bold1", bold1);
        document.getElementById("note1_heading").style.fontWeight="bold";
        document.getElementById("bold_button1_2").style.display="initial";
        document.getElementById("bold_button").style.display="none";
} 

function bold1_2(){
    bold1 = "No"
    localStorage.setItem("bold1", bold1);
    document.getElementById("note1_heading").style.fontWeight="normal";
    document.getElementById("bold_button1_2").style.display="none";
    document.getElementById("bold_button").style.display="initial";
}

function underline(){
    underline1 = "Yes"
    localStorage.setItem("underline1", underline1);
    document.getElementById("note1_heading").style.textDecoration="underline";
    document.getElementById("underline_button1_2").style.display="initial";
    document.getElementById("underline_button").style.display="none";
} 

function underline1_2(){
    underline1 = "No"
    localStorage.setItem("underline1", underline1);
document.getElementById("note1_heading").style.textDecoration="none";
document.getElementById("underline_button1_2").style.display="none";
document.getElementById("underline_button").style.display="initial";
}

function italic(){
    italic1 = "Yes"
    localStorage.setItem("italic1", italic1);
    document.getElementById("note1_heading").style.fontStyle="italic";
    document.getElementById("italic_button1_2").style.display="initial";
    document.getElementById("italic_button").style.display="none";
} 

function italic1_2(){
    italic1 = "No"
    localStorage.setItem("italic1", italic1);
document.getElementById("note1_heading").style.fontStyle="normal";
document.getElementById("italic_button1_2").style.display="none";
document.getElementById("italic_button").style.display="initial";
}


function sort_up(){
    var font_size1 = localStorage.getItem("font_size1");
    font_size1 = font_size1*1;
    font_size1 = font_size1 + 2;
    localStorage.setItem("font_size1", font_size1);
    document.getElementById("textarea1").style.fontSize= font_size1;
}

function sort_down(){
    var font_size1 = localStorage.getItem("font_size1");
    font_size1 = font_size1*1;
    font_size1 = font_size1 - 2;
    localStorage.setItem("font_size1", font_size1);
    document.getElementById("textarea1").style.fontSize= font_size1;
}
        
