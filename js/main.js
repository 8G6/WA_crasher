trigger= () => {
    chr=(a)=>String.fromCharCode(a)
$=(a)=>document.getElementById(a)
let no_text=chr(8206)+chr(8207)
let text=$('input').value
let limit=$('limit').value
let sta=0
for(i=0;i<limit;i++){
    sta = (((i+1)*100)/limit).toFixed(3)
    console.log(sta)
    $('output').innerHTML=sta
    text+=no_text
}
$('output').innerHTML=text
}    