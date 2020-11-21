function range_6(){
    document.write(Math.random()*45+5)
    console.log(Math.random()*45+5)
}

function range_7(a,b){
    n=document.write(Math.random()*b+a)
    console.log(Math.random()*b+a)
    /* 10-dan,35-mde */
}

function range_10(i,a,b){
    let arr=[]
    while(arr.length<i){
        let m=(Math.floor(Math.random()*b+a))
        if(arr.indexOf(m)===-1) arr.push(m)
    /*https://stackoverflow.com/
    questions/2380019/generate-unique-random-numbers-between-1-and-100  */  
    }
    document.write(arr)
    console.log(arr)
    }

function range_13(){
    /*n=Math.random()*2;
    url="img/"+Math.ceil(n)+".jpg"
    img="<img class = 'image' src =' "+url+"'></img>"
    document.write(img)*/
    var a=Math.round(Math.floor(Math.random()*2))
    image = new Array();
    image[0]="shutterstock_741805882_C.jpg"
    image[1]="stock-riverflow1-720x522.jpg.img.jpg"
    image[2]="983794168.jpg"
    
    document.write ("<img src="+image[a]+">");
}