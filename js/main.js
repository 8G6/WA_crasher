function cpy() {
    var copyText = $("output");
    copyText.select();
    copyText.setSelectionRange(0,$("output").value.length); 
    document.execCommand("copy");
}


trigger= () => {
    chr=(a)=>String.fromCharCode(a)
    $=(a)=>document.getElementById(a)
    let no_text=chr(8206)+chr(8207)
    let text=$('input').value
    let limit=$('limit').value
    let num=$('num').value
    let sta=0
    progressBar = new ProgressBar("myBar", {'width':'100%', 'height':'30px'});
    progressBar.setPercent(0);
    for(i=0;i<limit;i++){
        sta = (((i+1)*100)/limit).toFixed(3)
        width=parseInt(sta);
        setTimeout(progressBar.setPercent(width),1)
        text+=no_text
    }
    window.location.href = `whatsapp://send?text=${text}&phone=${num}`
    setTimeout(()=>{$('myBar').innerHTML+='<br><br><div style="color:green">complted</div><br><br>'},100)
    $('out').innerHTML=`<br>
    <input id='output'></input>
    <br>
    <button onclick="cpy()">COPY</button>`
    $('output').value=text
}    
