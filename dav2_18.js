window.onload = function() {
    let myPics = ['983794168.jpg','shutterstock_741805882_C.jpg','stock-riverflow1-720x522.jpg.img.jpg']
      
  
    function showPics() {
      document.querySelectorAll('.img').forEach(function(tag) {
        let index = getRandomIndex();
        tag.src = myPics[index];
        tag.addEventListener('click', getImageName);
        tag.dataset.index = index;
      })
    }
  
    function getRandomIndex() {
      return Math.floor(Math.random() * myPics.length);
    }
  
    function getImageName() {
       alert(myPics[this.dataset.index])
    }
  
    showPics();
  }
    