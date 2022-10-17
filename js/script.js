document.addEventListener('DOMContentLoaded', () => {

    const tabName = document.querySelectorAll('.tabs_item'),
        tabParent = document.querySelector('.tabs_name'),
        contentCont = document.querySelectorAll('.tabs_content_container'),
        contentText =document.querySelectorAll('.tabs_content'),
        flatRadio = document.querySelector('#flat'),
        realRadio = document.querySelector('#real');
            
    
    function changeFile() {
        
        tabParent.addEventListener('click', (e) => {
            let target = e.target;
            
            if (target.classList.contains('tabs_item')) {
                tabName.forEach(item => {
                    item.classList.remove('tabs_item_active');
                });
                target.classList.add('tabs_item_active');
                index = Array.prototype.indexOf.call(tabParent.children, e.target);
                console.log(index);   
            }

            tabName.forEach(item => {
                const backTabInner = item.querySelector('.tabs_item_back');
                arrCont = Array.prototype.slice.call(contentCont);
                arrText = Array.prototype.slice.call(contentText);
                if (item.classList.contains('tabs_item_active')) {
                    backTabInner.classList.add('tabs_item_back_active');
                    arrCont.forEach(i => {
                        i.classList.remove('tabs_content_container_active');
                    });
                    arrText.forEach(i => {
                        i.classList.remove('tabs_content_active');
                    });
                    arrCont[index].classList.add('tabs_content_container_active');
                    arrText[index].classList.add('tabs_content_active');

                } else {
                    backTabInner.classList.remove('tabs_item_back_active');
                }
            });
        });
    }


    function radioChange() {
        flatRadio.addEventListener('change', () => {
           
                console.log("Flat is checked..");
                tabName.forEach(item => {
                    item.classList.remove('tabs_item_real');
                });
                contentCont.forEach(item => {
                    item.classList.remove('tabs_content_container_real');
                });
            
        });

        realRadio.addEventListener('change', () => {
            
                console.log("Real is checked..");
                tabName.forEach(item => {
                    item.classList.add('tabs_item_real');
                });
                contentCont.forEach(item => {
                    item.classList.add('tabs_content_container_real');
                });
            
        });

        
    }


    changeFile();
    radioChange();

});