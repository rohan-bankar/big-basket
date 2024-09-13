function viewItem()
{
    document.getElementsByClassName("more-items-window")[0].style.display = "block";
}

function closeItem()
{
    document.getElementsByClassName("more-items-window")[0].style.display = "none";
}

function viewSignup()
{
    const signup = document.getElementsByClassName("login-main-box")[0];
    signup.style.display = "block";
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
    document.getElementsByClassName("main-box")[0].classList.add("blur-effect");
}

function closeSignup()
{
    document.getElementsByClassName("main-box")[0].classList.remove("blur-effect");
    document.getElementsByClassName("login-main-box")[0].style.display = "none";
}

function viewPriceFilter()
{
    document.getElementsByClassName("price-filters")[0].style.display = "block";
}

function closePriceFilter()
{
    document.getElementsByClassName("price-filters")[0].style.display = "none";
}

function viewShopByCategory()
{
     let category = document.getElementsByClassName("shop-by-category")[0];
     category.style.display = "block";
   
    let card = document.getElementsByClassName("card");
    
    for(let i=0;i<card.length;i++)
    {
            card[i].classList.add("col-sm-3");
    }

}

function closeShopByCategory()
{
    document.getElementsByClassName("shop-by-category")[0].style.display = "none";
    let card = document.getElementsByClassName("card");
    for(let i=0;i<=card.length;i++)
    {
        card[i].classList.remove("col-sm-3");
    }
}

function viewLocation()
{
    document.getElementsByClassName("location-box")[0].style.display = "block";
    document.getElementsByClassName("main-box")[0].classList.add("blur-effect");
}

function closeLocation()
{
    document.getElementsByClassName("main-box")[0].classList.remove("blur-effect");
    document.getElementsByClassName("location-box")[0].style.display = "none";
}
