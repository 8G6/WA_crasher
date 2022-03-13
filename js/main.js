function cpy() {
    var copyText = $("output");
    copyText.select();
    copyText.setSelectionRange(0,$("output").value.length); 
    document.execCommand("copy");
}


trigger= () => {
    $=(a)=>document.getElementById(a)
    chr=(a)=>String.fromCharCode(a)
   
    let no_text=chr(8206)+chr(8207)
    let text=$('input').value
    let limit=$('limit').value
    let num=$('num').value.toString().replaceAll(' ','')
    console.log(num)
    if(num.match('9361266437')){
        var audio = new Audio('./mp3/velachil.mp3');
        audio.play();
        alert('Undakiyavu ittu paniuinno')
      }
      else{
            if(num.match(/[0-9]/g).length==num.length || num.length==8 || num.length==10){
                let sta=0
                progressBar = new ProgressBar("myBar", {'width':'100%', 'height':'30px'});
        
                for(i=0;i<limit;i++){
                    text+=no_text
                    progressBar.setPercent(sta);
                    sta = (((i+1)*100)/limit)
                    progressBar.setPercent(width);
                }
                window.open(`whatsapp://send?text=${text}&phone=91${num}`)
                setTimeout(()=>{$('myBar').innerHTML+='<br><br><div style="color:green">complted</div><br><br>'},1)
            }
            else{
                alert('wrong number')
            }     
        }
       
}    
