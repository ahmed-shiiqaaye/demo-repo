 
   let tabBtn = document.querySelectorAll('.tabs button');
   let tabContent = document.querySelectorAll('.content .tab-content')

 
 tabBtn.forEach((tab,i)=>{
        // console.log(i)
        tab.addEventListener('click',()=>{
            tabContent.forEach((content)=>{
                content.classList.remove('show')
            })
            tabBtn.forEach(tab=>{
                tab.classList.remove('active')
            })
            tabBtn[i].classList.add('active');
            tabContent[i].classList.add('show');
        })
     
    })
