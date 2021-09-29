window.alert("this is my first JS code \n(my Github : https://github.com/Abtinz)");
document.write("Repositories author informations : <br/>");
// personal informations
var name = "Abtin";
var lastName ="Zandi";
var country = "Iran";
var city = "Tehran";
var age = 19;
document.write("Name  : "+name+"<br/>");
document.write("Last Name :"+lastName+"<br/>");
document.write("Country :"+country+"<br/>");
document.write("City : "+city+"<br/>");
document.write("Age :"+age+"<br/>");
// university informations
var university="AmirKabir";
var email="abtinzandi@gmail.com";
var program = "B.sc. computer engineering";
var studentCode = 9931071;
document.write("University : "+university+"<br/>");
document.write("Email :"+email+"<br/>");
document.write("Program :"+program+"<br/>");
document.write("Student Code : "+studentCode+"<br/>");
// Skills 
var skills ={ Array : ["Python","Java","Html and Css","C","Java Scripte"]}
var index = 0;
while(index < skills.Array.length) {
    document.write(index+1 + ") "+skills.Array[index]+"<br/>");
    index-=-1;
}

