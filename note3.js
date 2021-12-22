
function document3(){
    var heading3 = localStorage.getItem("Note3_head");
    var note_text3 = localStorage.getItem("Note3_text");
    document.getElementById("textarea3").innerHTML = note_text3;
    document.getElementById("note3_heading").innerHTML = heading3;
    bold_3 = localStorage.getItem("bold3");
    underline_3 = localStorage.getItem("underline3");
    italic_3 = localStorage.getItem("italic3");
    if(bold_3 == "Yes"){
        document.getElementById("note3_heading").style.fontWeight = "bold";
    }
    if(underline_3 == "Yes"){
        document.getElementById("note3_heading").style.textDecoration = "underline";
    }
    if(italic_3 == "Yes"){
        document.getElementById("note3_heading").style.fontStyle = "italic";
    }
    document.getElementById("textarea3").style.fontSize = localStorage.getItem("font_size3");
    
}

function save3(){
    var head3 = document.getElementById("note3_heading").value;
    var text3 = document.getElementById("textarea3").value;
    window.location = "index.html";
    if(head3 != ""){
        localStorage.setItem("Note3_head", head3);
        localStorage.setItem("Note3_text", text3);
    }
    else{
        localStorage.setItem("Note3_head", "Note 3");
    }
}

function bold3(){
    bold_3 = "Yes";
        localStorage.setItem("bold3", bold_3);
        document.getElementById("note3_heading").style.fontWeight="bold";
        document.getElementById("bold_button3_2").style.display="initial";
        document.getElementById("bold_button3").style.display="none";
} 

function bold3_2(){
    bold_3 = "No";
        localStorage.setItem("bold3", bold_3);
    document.getElementById("note3_heading").style.fontWeight="normal";
    document.getElementById("bold_button3_2").style.display="none";
    document.getElementById("bold_button3").style.display="initial";
}

function underline3(){
    underline_3 = "Yes";
    localStorage.setItem("underline3", underline_3);
    document.getElementById("note3_heading").style.textDecoration="underline";
    document.getElementById("underline_button3_2").style.display="initial";
    document.getElementById("underline_button3").style.display="none";
} 

function underline3_2(){
    underline_3 = "No";
    localStorage.setItem("underline3", underline_3);
document.getElementById("note3_heading").style.textDecoration="none";
document.getElementById("underline_button3_2").style.display="none";
document.getElementById("underline_button3").style.display="initial";
}

function italic3(){
    italic_3 = "Yes";
    localStorage.setItem("italic3", italic_3);
    document.getElementById("note3_heading").style.fontStyle="italic";
    document.getElementById("italic_button3_2").style.display="initial";
    document.getElementById("italic_button3").style.display="none";
} 

function italic3_2(){
    italic_3 = "No";
    localStorage.setItem("italic3", italic_3);
document.getElementById("note3_heading").style.fontStyle="normal";
document.getElementById("italic_button3_2").style.display="none";
document.getElementById("italic_button3").style.display="initial";
}


function sort_up3(){
    
    var font_size3 = localStorage.getItem("font_size3");
    font_size3 = font_size3*1;
    font_size3 = font_size3 + 2;
    localStorage.setItem("font_size3", font_size3);
    document.getElementById("textarea3").style.fontSize= font_size3;
}

function sort_down3(){
    var font_size3 = localStorage.getItem("font_size3");
    font_size3 = font_size3*1;
    font_size3 = font_size3 - 2;
    localStorage.setItem("font_size3", font_size3);
    document.getElementById("textarea3").style.fontSize= font_size3;
}
       