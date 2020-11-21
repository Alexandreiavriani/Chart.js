function ceil_task1(n){
    n=4.512
    document.write(Math.ceil(n))
}

function floor_task2(n){
    n=4.512
    document.write(Math.floor(n))
}

function round_task3(n){
    n=11.2
    k=11.6
    document.write(Math.round(n))
    document.write("<br>")
    document.write(Math.round(k))
}

function random_task5(){
    //document.write(Math.random()*1)+1
    document.write(Math.random())
}

function random2_task6(){
    document.write(Math.random()*45+5)
    //Math.random() * (max - min) + min
}

function random3_task7(a,b){
    a=7
    b=20
    document.write(Math.random()*(b-a)+a)
    
}

function random4_task8(a,b){
    a=7
    b=20
    let random=Math.floor(Math.random()*(b-a)+a)
    document.write(random)
    
}

function random_task9(a,b){
    a=15
    b=25
    let random=Math.floor(Math.random()*(b-a)+a)
    document.write(random)
    
}

function random_task10(a,b){
    a=10
    b=1000
    let random=Math.floor(Math.random()*(b-a)+a)
    document.write(random)
    
}