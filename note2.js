
function document2(){
    var heading2 = localStorage.getItem("Note2_head");
    var note_text2 = localStorage.getItem("Note2_text");
    document.getElementById("textarea2").innerHTML = note_text2;
    document.getElementById("note2_heading").innerHTML = heading2;
    bold_2 = localStorage.getItem("bold2");
    underline_2 = localStorage.getItem("underline2");
    italic_2 = localStorage.getItem("italic2");
    if(bold_2 == "Yes"){
        document.getElementById("note2_heading").style.fontWeight = "bold";
    }
    if(underline_2 == "Yes"){
        document.getElementById("note2_heading").style.textDecoration = "underline";
    }
    if(italic_2 == "Yes"){
        document.getElementById("note2_heading").style.fontStyle = "italic";
    }
    document.getElementById("textarea2").style.fontSize = localStorage.getItem("font_size2");
    
}

function save2(){
    var head2 = document.getElementById("note2_heading").value;
    var text2 = document.getElementById("textarea2").value;
    window.location = "index.html";
    if(head2 != ""){
        localStorage.setItem("Note2_head", head2);
        localStorage.setItem("Note2_text", text2);
    }
    else{
        localStorage.setItem("Note2_head", "Note 2");
    }
}

function bold2(){
        bold_2 = "Yes";
        localStorage.setItem("bold2", bold_2);
        document.getElementById("note2_heading").style.fontWeight="bold";
        document.getElementById("bold_button2_2").style.display="initial";
        document.getElementById("bold_button2").style.display="none";
} 

function bold2_2(){
    bold_2 = "No";
    localStorage.setItem("bold2", bold_2);
    document.getElementById("note2_heading").style.fontWeight="normal";
    document.getElementById("bold_button2_2").style.display="none";
    document.getElementById("bold_button2").style.display="initial";
}

function underline2(){
    underline_2 = "Yes";
    localStorage.setItem("underline2", underline_2);
    document.getElementById("note2_heading").style.textDecoration="underline";
    document.getElementById("underline_button2_2").style.display="initial";
    document.getElementById("underline_button2").style.display="none";
} 

function underline2_2(){
    underline_2 = "No";
    localStorage.setItem("underline2", underline_2);
document.getElementById("note2_heading").style.textDecoration="none";
document.getElementById("underline_button2_2").style.display="none";
document.getElementById("underline_button2").style.display="initial";
}

function italic2(){
    italic_2 = "Yes";
    localStorage.setItem("italic2", italic_2);
    document.getElementById("note2_heading").style.fontStyle="italic";
    document.getElementById("italic_button2_2").style.display="initial";
    document.getElementById("italic_button2").style.display="none";
} 

function italic2_2(){
    italic_2 = "No";
    localStorage.setItem("italic2", italic_2);
document.getElementById("note2_heading").style.fontStyle="normal";
document.getElementById("italic_button2_2").style.display="none";
document.getElementById("italic_button2").style.display="initial";
}


function sort_up2(){
    
    var font_size2 = localStorage.getItem("font_size2");
    font_size2 = font_size2*1;
    font_size2 = font_size2 + 2;
    localStorage.setItem("font_size2", font_size2);
    document.getElementById("textarea2").style.fontSize= font_size2;
}

function sort_down2(){
    var font_size2 = localStorage.getItem("font_size2");
    font_size2 = font_size2*1;
    font_size2 = font_size2 - 2;
    localStorage.setItem("font_size2", font_size2);
    document.getElementById("textarea2").style.fontSize= font_size2;
}
        
