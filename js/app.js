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
}

function closeSignup()
{
    document.getElementsByClassName("login-main-box")[0].style.display = "none";
}