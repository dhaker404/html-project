function alpha(ch){
    ch=ch.toUpperCase();
    i=0;
    tst=true;
    do{
        if(ch.charAt(i)<'A'||ch.charAt(i)>'Z'){
            tst=false;
        }
        else{
            i++
        }
    }while(tst==true && i<ch.length)
    return tst
}

function reserve(){
    ln=document.getElementById('lname').value;
    if(ln=='' || !alpha(ln)){
        alert("Last name invalid");
        return false;
    }
    fn=document.getElementById('fname').value;
    if(fn=='' || !alpha(fn)){
        alert("First name invalid");
        return false;
    }
    mail=document.getElementById('mail').value;
    if(mail.length>50 || mail.indexOf('@')==-1 || mail.indexOf('.')==-1 || mail.indexOf('@')>mail.indexOf('.')){
        alert('Mail adress invalid');
        return false;
    }
    if((document.getElementById('room1').checked)==false && (document.getElementById('room2').checked)==false && (document.getElementById('room3').checked)==false && (document.getElementById('room4').checked)==false && (document.getElementById('room5').checked)==false){
        alert("selelct a room");
        return false;
    }
    
}