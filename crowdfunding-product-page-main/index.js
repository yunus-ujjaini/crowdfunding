function openmenu(){
    var links=document.getElementById('links');
    if(links.classList.contains("hide")==true)
    {
        var menu=document.getElementById('menubtn');
        menu.src='images/icon-close-menu.svg'
        links.classList.remove("hide");
    }
    else{
        var menu=document.getElementById('menubtn');
        menu.src='images/icon-hamburger.svg'
        links.classList.add("hide");

    }
}

function toggleModal(){
    let btn=document.getElementById("modalbtn");
    // let card_action=document.getElementById("card-action");
    if(btn.classList.contains("modal-open")==true)
    {
        btn.classList.remove("modal-open");
        btn.classList.add("modal-close");
        // card_action.style.justifyContent='space-between';
    }
    else{
        if(btn.classList.contains("modal-close")==true)
        {
            btn.classList.remove("modal-close");
        }
        // card_action.style.justifyContent='flex-end';
        btn.classList.add("modal-open");
        
    }
}

function selectcard(number)
{
    let cards=document.getElementsByClassName("modal-card-footer");
    let cardsMain=document.getElementsByClassName("modal-card");
    let radios=document.getElementsByName("radiobtn");
    for(let i=0;i<cards.length;i++){
        if(cards[i].classList.contains("modal-footer-selected")==true)
        {
            cards[i].classList.remove("modal-footer-selected");
            cardsMain[i].classList.remove("modal-color");
            radios[i].checked=false;
        }
    }
    cards[number].classList.add("modal-footer-selected");
    cardsMain[number].classList.add("modal-color");
    radios[number].checked=true;
}
function openconfirm(){
    var dialog=document.getElementById('confirm');
    if(dialog.classList.contains("hideConfirm")==true)
    {
        dialog.classList.remove("hideConfirm");
    }
    else{
        dialog.classList.add("hideConfirm");

    }
    // toggleModal();
    let mainsection=document.getElementById("mainsection");
    mainsection.scrollIntoView();
}

function selectRewardBottom(number)
{
    toggleModal();
    selectcard(number);
    let mainsection=document.getElementById("mainsection2");
    mainsection.scrollIntoView();
}
function toggleBookmark(){
    console.log("Inside Bookmark");
    let bookmark=document.getElementById("bookmark");
    let bookmarkSpan=document.getElementById("bookmark-span");
    if(bookmark.classList.contains("bookmarked")==true)
    {
        bookmark.classList.remove("bookmarked");
        bookmarkSpan.innerText="Bookmark";
    }
    else{
        bookmark.classList.add("bookmarked");
        bookmarkSpan.innerText="Bookmarked";
    }
}