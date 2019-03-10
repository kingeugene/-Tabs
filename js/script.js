window.addEventListener('DOMContentLoaded', function () {

    'use strict';
    function tabModule(tabbAll, headerTab, tabCont) {
        let tab = document.querySelectorAll('.' + tabbAll),
            info = document.querySelector('.' + headerTab),
            tabContent = document.querySelectorAll('.' + tabCont);



        function hideContent(a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }
        hideContent(1);

        function showContent(b) {
            if(tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.add('show');
                tabContent[b].classList.remove('hide');
            }
        }

        info.addEventListener('click', function (event) {
            let target = event.target;
            if (target && target.classList.contains(tabbAll) ) {
                for ( let i = 0; i < tab.length; i++ ) {
                    if (target == tab[i]) {
                        hideContent(0);
                        showContent(i);
                        break;
                    }

                }
            }
        })
    }
    tabModule('info-header-tab', 'info-header', 'info-tabcontent');


});