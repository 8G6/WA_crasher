trigger= () => {
    chr=(a)=>String.fromCharCode(a)
$=(a)=>document.getElementById(a)
let no_text=chr(8206)+chr(8207)
let text=$('input').value
let limit=$('limit').value
let sta=0

for(i=0;i<limit;i++){
    sta = (((i+1)*100)/limit).toFixed(3)
    $('bar').innerHTML+=sta+'<br>'
    text+=no_text
}


setTimeout(()=>{alert('complte');$('bar').innerHTML='<br><div style="color:green">complted</div>'},500)
$('out').innerHTML=`<br>
<input id='output'></input>
<br>
<button onclick="cpy()">COPY</button>`
$('output').value=text
}    
function cpy() {
    var copyText = $("output");
    copyText.select();
    copyText.setSelectionRange(0,$("output").value.length); 
    document.execCommand("copy");
}