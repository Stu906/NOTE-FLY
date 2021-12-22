function edit1(){
    window.location="note1.html";
}
function edit2(){
    window.location="note2.html";
}
function edit3(){
    window.location="note3.html";
}
function edit4(){
    window.location="note4.html";
}
function edit5(){
    window.location="note5.html";
}
function edit6(){
    window.location="note6.html";
}
function edit7(){
    window.location="note7.html";
}
function edit8(){
    window.location="note8.html";
}
function edit9(){
    window.location="note9.html";
}
function edit10(){
    window.location="note10.html";
}

var heading = localStorage.getItem("Note1_head");
    console.log(heading);

var heading2 = localStorage.getItem("Note2_head");
    console.log(heading2);

var heading3 = localStorage.getItem("Note3_head");
    console.log(heading3);

var heading4 = localStorage.getItem("Note4_head");
    console.log(heading4);

var heading5 = localStorage.getItem("Note5_head");
    console.log(heading5);

var heading6 = localStorage.getItem("Note6_head");
    console.log(heading6);

var heading7 = localStorage.getItem("Note7_head");
    console.log(heading7);

var heading8 = localStorage.getItem("Note8_head");
    console.log(heading8);

var heading9 = localStorage.getItem("Note9_head");
    console.log(heading9);

var heading10 = localStorage.getItem("Note10_head");
    console.log(heading10);

    function myfunction(){

        document.getElementById("note1_head_tag").innerHTML=heading;

        document.getElementById("note2_head_tag").innerHTML=heading2;

        document.getElementById("note3_head_tag").innerHTML=heading3;

        document.getElementById("note4_head_tag").innerHTML=heading4;

        document.getElementById("note5_head_tag").innerHTML=heading5;

        document.getElementById("note6_head_tag").innerHTML=heading6;

        document.getElementById("note7_head_tag").innerHTML=heading7;

        document.getElementById("note8_head_tag").innerHTML=heading8;

        document.getElementById("note9_head_tag").innerHTML=heading9;

        document.getElementById("note10_head_tag").innerHTML=heading10;
    }

function delete1() {
    localStorage.setItem("Note1_head", "");
    localStorage.setItem("Note1_text", "");
    localStorage.setItem("bold1", "No");
    localStorage.setItem("underline1", "No");
    localStorage.setItem("italic1", "No");
    localStorage.setItem("font_size1", "18");
    document.getElementById("note1_head_tag").innerHTML= "Note 1";
}

function delete2() {
    localStorage.setItem("Note2_head", "");
    localStorage.setItem("Note2_text", "");
    localStorage.setItem("bold2", "No");
    localStorage.setItem("underline2", "No");
    localStorage.setItem("italic2", "No");
    localStorage.setItem("font_size2", "18");
    document.getElementById("note2_head_tag").innerHTML= "Note 2";
}

function delete3() {
    localStorage.setItem("Note3_head", "");
    localStorage.setItem("Note3_text", "");
    localStorage.setItem("bold3", "No");
    localStorage.setItem("underline3", "No");
    localStorage.setItem("italic3", "No");
    localStorage.setItem("font_size3", "18");
    document.getElementById("note3_head_tag").innerHTML= "Note 3";
}

function delete4() {
    localStorage.setItem("Note4_head", "");
    localStorage.setItem("Note4_text", "");
    localStorage.setItem("bold4", "No");
    localStorage.setItem("underline4", "No");
    localStorage.setItem("italic4", "No");
    localStorage.setItem("font_size4", "18");
    document.getElementById("note4_head_tag").innerHTML= "Note 4";
}

function delete5() {
    localStorage.setItem("Note5_head", "");
    localStorage.setItem("Note5_text", "");
    localStorage.setItem("bold5", "No");
    localStorage.setItem("underline5", "No");
    localStorage.setItem("italic5", "No");
    localStorage.setItem("font_size5", "18");
    document.getElementById("note5_head_tag").innerHTML= "Note 5";
}

function delete6() {
    localStorage.setItem("Note6_head", "");
    localStorage.setItem("Note6_text", "");
    document.getElementById("note6_head_tag").innerHTML= "Note 6";
}

function delete6() {
    localStorage.setItem("Note6_head", "");
    localStorage.setItem("Note6_head", "");
    document.getElementById("note6_head_tag").innerHTML= "Note 6";
}

function delete7() {
    localStorage.setItem("Note7_head", "");
    localStorage.setItem("Note7_text", "");
    document.getElementById("note7_head_tag").innerHTML= "Note 7";
}

function delete8() {
    localStorage.setItem("Note8_head", "");
    localStorage.setItem("Note8_text", "");
    document.getElementById("note8_head_tag").innerHTML= "Note 8";
}

function delete9() {
    localStorage.setItem("Note9_head", "");
    localStorage.setItem("Note9_text", "");
    document.getElementById("note9_head_tag").innerHTML= "Note 9";
}

function delete10() {
    localStorage.setItem("Note10_head", "");
    localStorage.setItem("Note10_text", "");
    document.getElementById("note10_head_tag").innerHTML= "Note 10";
}

