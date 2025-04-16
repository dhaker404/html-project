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
    sys_date = new Date();
    yy = sys_date.getFullYear();
    mm = sys_date.getMonth();
    dd = sys_date.getDate();

    sysDate = new Date(yy, mm, dd);

    fdayStr = document.getElementById('fday').value;
    fday = new Date(fdayStr);
    fyy = fday.getFullYear();
    fmm = fday.getMonth();
    fdd = fday.getDate();

    firstDate = new Date(fyy, fmm, fdd);

if (firstDate < sysDate) {
    alert("First day invalid");
    return false;
}
    lday=document.getElementById('lday').value;
    if(lday<fday){
        alert("invalide duration");
        return false;
    }

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
