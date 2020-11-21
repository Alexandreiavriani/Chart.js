function dav4_3(){
    p=prompt('შემოიტანე კვირის დღე(1,2,3,4,5,6,7)')
    if(p==1){
        document.write('დღეს ორშაბათია')
    }
    else if(p==2){
        document.write('დღეს სამშაბათია')
    }
    else if(p==3){
        document.write('დღეს ოთხშაბათია')
    }
    else if(p==4){
        document.write('დღეს ხუთშაბათია')
    }
    else if(p==5){
        document.write('დღეს პარასკევია')
    }
    else if(p==5){
        document.write('დღეს შაბათია')
    }
    else if(p==5){
        document.write('დღეს კვირაა')
    }
    else if(p==null){
        document.write('თქვენ დააჭირეთ cancel')
    }
    else
    document.write('ასეთი დღე არ არსებობს')

}