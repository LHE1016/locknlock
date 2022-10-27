window.addEventListener("load", ()=>{

    /// 헤더랩
    const headerWrap = document.querySelector(".header_wrap");
    const gnbMenu = document.querySelectorAll("nav.gnb > ul > li");
    const long = document.querySelector("li.long");
    console.log(long);

    headerWrap.addEventListener("mouseover" , e => {

        // pc
        if(window.innerWidth >= 960){
            e.currentTarget.classList.add("on");
        }

    });

    headerWrap.addEventListener("mouseout" , e => {

        // pc
        if(window.innerWidth >= 960){
            e.currentTarget.classList.remove("on");
            if(lang.classList.contains("on")){
                e.currentTarget.classList.add("on");
            }
            if(e.currentTarget.classList.contains("srch")){
                e.currentTarget.classList.add("on");
            }
        }

    });    

    function activation(index,list){
        for(let el of list){
            el.classList.remove("on");
        }
        list[index].classList.add("on");
    }


    // 주메뉴
    const backDrop = document.querySelector("#backdrop");

    for(let i=0;i<gnbMenu.length;i++){

        // pc
        if(window.innerWidth >= 960){
            gnbMenu[i].addEventListener("mouseover", e=>{
                backDrop.classList.add("on");
                e.currentTarget.classList.add("on");
                headerWrap.classList.add("on");
                headerWrap.style.height = "330px";
            });

            gnbMenu[i].addEventListener("mouseout", e=>{
                backDrop.classList.remove("on");
                e.currentTarget.classList.remove("on");
                headerWrap.classList.remove("on");
                headerWrap.style.height = "64px";
            });
        }

        // tab&mob
        if(window.innerWidth >= 560 && window.innerWidth < 960 || window.innerWidth < 560){
            gnbMenu[i].addEventListener("click", e=>{
                e.currentTarget.classList.toggle("on")
                if(e.currentTarget.classList.contains("on")){
                    activation(i,gnbMenu);
                }
            })
        }



    } //for문


    // 검색박스
    const srchBox = document.querySelector(".srch_box");
    const srchForm = document.querySelector(".srch_box > form");
    const btnSrch = document.querySelector(".srch_button");
    const srchRecom = document.querySelector(".recom");

    btnSrch.addEventListener("click", e=>{

        e.preventDefault();
        srchBox.classList.toggle("on");
        e.currentTarget.classList.toggle("close");

        if(e.currentTarget.classList.contains("close")){
            srchForm.style.display = "block";
            total.style.position = "fixed";
            backDrop.classList.add("on");
        }else{
            total.style.position = "relative";
            backDrop.classList.remove("on");
        }

        // pc
        if(window.innerWidth >= 960){
            headerWrap.classList.toggle("srch");
        }

        // mob&tab
        if(window.innerWidth < 560 || window.innerWidth >= 560 && window.innerWidth < 960){
            headerWrap.classList.toggle("srch");
            headerWrap.classList.remove("on");
            srchBox.style.height = window.innerHeight+"px";
        }
    });


    // .header_wrap.active 배경설정
    const hamburger = document.querySelector(".hamburger");
    const total =document.querySelector("#total");
    const gnbWrap = document.querySelector("nav.gnb");
    const topMenu = document.querySelector("dl.top_menu");

    hamburger.addEventListener("click", e=>{

        e.preventDefault();
        total.style.position = "fixed";
        backDrop.classList.add("on");
        headerWrap.classList.add("active");
        headerWrap.classList.remove("on");
        gnbWrap.style.height = window.innerHeight +"px";
        topMenu.style.display = "none";  

    });

    // .header_close 
    const headerClose = document.querySelector(".header_close");

    headerClose.addEventListener("click", e=>{

        e.preventDefault();
        total.style.position = "relative";
        backDrop.classList.remove("on");
        headerWrap.classList.remove("active");
        topMenu.style.display = "block";
        
    });

    // 스크롤
    let lastScroll = 0;
    const btnMall = document.querySelector(".mall");

    window.addEventListener("scroll",()=>{

        let scroll = document.querySelector("html").scrollTop;
        console.log(scroll);

        btnMall.style.top = `${scroll+800}px`;

        if(scroll > lastScroll){
            headerWrap.classList.add("on");
            headerWrap.style.transform = `translateY(-64px)`;
        }if(scroll < lastScroll){
            headerWrap.style.transform = `translateY(0)`;
            srchForm.style.display = "none";
        }
        lastScroll = scroll;
        
    });


    // topmenu
        // topmenu .lang의 kor(a)를 클릭하면 .lang에 .on이 붙음
        const kor = document.querySelector(".lang > ul > li:first-of-type a");
        const eng = document.querySelector(".lang > ul > li:nth-of-type(2) a");
        const lang = document.querySelector(".lang");
        kor.addEventListener("click", e=>{
            e.preventDefault();
            lang.classList.toggle("on");
        })


    // faq
    const faqList = document.querySelectorAll(".faq_list > ul > li");

    for(let k=0; k<faqList.length; k++){
        faqList[k].addEventListener("click", e=>{
            e.preventDefault();
            e.currentTarget.classList.toggle("on");
            if(e.currentTarget.classList.contains("on")){
                activation(k,faqList);
            }
        })
}


    // footer > family site, copy
    const fam = document.querySelector(".family");
    const btnFam = document.querySelector(".family > button");
    const address = document.querySelector("li.address");

    btnFam.addEventListener("click", ()=>{
        fam.classList.toggle("on");
    })

    address.addEventListener("click", e=>{
        e.currentTarget.classList.toggle("on");
    });


    // footer menu (tab,mob)
    const footer = document.querySelector("#footer");
    const footMenuList = document.querySelectorAll(".foot_nav > ul > li");
    const footSubMenu = document.querySelectorAll(".foot_nav > ul > li > ul");

    const shop = document.querySelector("ul.shop");

    for(let i=0; i<footMenuList.length; i++){
        footMenuList[i].addEventListener("click", e=>{
            e.preventDefault();

            // mob&tab
            if(window.innerWidth < 560 || window.innerWidth >= 560 && window.innerWidth < 960){
                e.currentTarget.classList.toggle("on");
                if(e.currentTarget.classList.contains("on")){
                    activation(i,footMenuList);
                }
            }

        })
    }

    // topbutton
    const btnTop = document.querySelector(".btn_top");

    btnTop.addEventListener("click", e=>{
        e.preventDefault();
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    })

})