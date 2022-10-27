window.addEventListener("load", ()=>{

    // 헤더랩
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

        // tab
        if(window.innerWidth >= 560 && window.innerWidth < 960){
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
    const content1 = document.querySelector(".content1"); // 
    const content2 = document.querySelector(".content2");
    const content3 = document.querySelector(".content3");
    const content4 = document.querySelector(".content4");
    const main = document.querySelector("#main"); 
    const sections = main.children;

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

        // pc sections
        if(window.innerWidth >= 960){
            if(scroll > 200){
                content1.classList.add("on");
            }if(scroll > 1100){
                content2.classList.add("on");
            }if(scroll > 2100){
                content3.classList.add("on");
            }if(scroll > 3100){
                content4.classList.add("on");
            }if(scroll > 3800){
                sections[1].classList.add("on");
            }if(scroll > 4200){
                sections[2].classList.add("on");
            }if(scroll > 5300){
                sections[3].classList.add("on");
            }if(scroll > 7700){
                sections[4].classList.add("on");
            }
        }

        // tab sections
        if(window.innerWidth >= 560 && window.innerWidth < 960){
            if(scroll > 300){
                content1.classList.add("on");
            }if(scroll > 1100){
                content2.classList.add("on");
            }if(scroll > 1900){
                content3.classList.add("on");
            }if(scroll > 2700){
                content4.classList.add("on");
            }if(scroll > 3700){
                sections[1].classList.add("on");
            }if(scroll > 6400){
                sections[2].classList.add("on");
            }if(scroll > 8000){
                sections[3].classList.add("on");
            }if(scroll > 11000){
                sections[4].classList.add("on");
            }
        }

        // mob sections
        if(window.innerWidth < 560){
            if(scroll > 200){
                content1.classList.add("on");
            }if(scroll > 1000){
                content2.classList.add("on");
            }if(scroll > 2000){
                content3.classList.add("on");
            }if(scroll > 3000){
                content4.classList.add("on");
            }if(scroll > 3600){
                sections[1].classList.add("on");
            }if(scroll > 5700){
                sections[2].classList.add("on");
            }if(scroll > 7400){
                sections[3].classList.add("on");
            }if(scroll > 9500){
                sections[4].classList.add("on");
            }
        }
        
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


    // 리사이즈, 배너섹션 창 크기
    const bnnSections = document.querySelectorAll(".banner > section");
    const bgWeb = document.querySelector(".bg_web");
    const bgMob = document.querySelector(".bg_mob");
    let devHeight = window.innerHeight;
    let w = window.innerWidth;

    for(let i=0; i<bnnSections.length; i++){
        bnnSections[i].style.height = devHeight + "px";
        sections[i].style.width = w + "px";
    }

    window.addEventListener("resize", e=>{
        devHeight = window.innerHeight;
        w = window.innerWidth;

        for(let i=0; i<bnnSections.length; i++){
            bnnSections[i].style.height = devHeight + "px";
            sections[i].style.width = w + "px";
        }
    });


    function activation(index,list){
        for(let el of list){
            el.classList.remove("on");
        }
        list[index].classList.add("on");
    }


    // main_banner
    // slide roll > li누르면 배너프레임의 left값이 -w / 해당 li.on
    const rollList = document.querySelectorAll(".slide_roll > ul > li");
    console.log(rollList);
    const bannerFrame = document.querySelector(".banner_frame");
    const bannerList = document.querySelectorAll(".banner_frame > section");

    let bnnIdx = 0;
    let lastIdx = bannerList.length -1;

    for(let i=0; i<rollList.length; i++){
        rollList[i].addEventListener("click", e=>{
            bannerFrame.style.left = `-${w*i}px`;
            activation(i,rollList);
        });

    }


    // lounge 배너
    const btnPrev = document.querySelector("ul.slide_arr > li > a.btn_prev");
    const btnNext = document.querySelector("ul.slide_arr > li > a.btn_next");
    const slideSpan = document.querySelector("ul.slide_arr > li > span");
    const loungeFrame = document.querySelector("ul.lounge_frame");
    const loungeSlides = document.querySelectorAll("ul.lounge_frame > li");
    const loungeBar = document.querySelector(".rolling_bar > .rolling_now");
    const current = document.querySelector("ul.slide_arr > li > span.current");

    let slideIdx = 0;
    let lastSlideIdx = loungeSlides.length -1; // 

        btnPrev.addEventListener("click", e=>{
            e.preventDefault();
            slideIdx--;
            if(slideIdx < 0) slideIdx = lastSlideIdx;
            loungeFrame.style.left = `-${1130*slideIdx}px`;   
            current.innerHTML = slideIdx+1;
            loungeBar.style.width = `${33.3 * (slideIdx+1)}%`;
        });

        btnNext.addEventListener("click", e=>{
            e.preventDefault();
            slideIdx++;
            if(slideIdx > lastSlideIdx) slideIdx = 0;
            loungeFrame.style.left = `-${1130*slideIdx}px`;
            current.innerHTML = slideIdx+1;
            loungeBar.style.width = `${33.3 * (slideIdx+1)}%`;
        });


    // contact us
    const keywords = document.querySelectorAll("ul.keyword_wrap > li");
    for(let k=0; k<keywords.length; k++){
        keywords[k].addEventListener("mouseover", e=>{
            activation(k,keywords);
        })
    }
    for(let k=0; k<keywords.length; k++){
        keywords[k].addEventListener("mouseout", e=>{
            e.currentTarget.classList.remove("on");
        })
    }


    // esg 배너
    const esgSlides = document.querySelectorAll("ul.esg_wrap > li");
    console.log(esgSlides);
    const esgRolls = document.querySelectorAll("ul.esg_roll > li");
    console.log(esgRolls);

    for(let k=0; k<esgRolls.length; k++){
        esgRolls[k].addEventListener("mouseover", e=>{
            activation(k,esgRolls);
            activation(k,esgSlides);
        });
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