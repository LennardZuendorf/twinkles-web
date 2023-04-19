//mostly by Kolappan Nathan, found at: found at: https://github.com/kolappannathan/bootstrap-cookie-banner

/* Javascript to show and hide cookie banner using localstorage */
/* Shows the Cookie banner */
function showCookieBanner(){
    let cookieBanner = document.getElementById("cookie-banner");
    cookieBanner.classList.remove("hide");
}

/* Hides the Cookie banner and saves the value to localstorage */
function hideCookieBanner(){
    window.localStorage.setItem("twinkles_cookieCheck", "yes");
    let cookieBanner = document.getElementById("cookie-banner");
    cookieBanner.classList.add("hide");

    console.log("hiding cookie banner in the future")
    console.log(window.localStorage.getItem("z.me_cookieCheck"))
}

/* Checks the localstorage and shows Cookie banner based on it. */
function initializeCookieBanner(){

    let isCookieAccepted = window.localStorage.getItem("twinkles_cookieCheck");

    if(isCookieAccepted === "no"){
        console.log("cookie banner not accepted - showing banner")
        showCookieBanner();

    } else if(isCookieAccepted === null) {
        window.localStorage.setItem("twinkles_cookieCheck", "no");
        console.log("cookie banner not accepted - showing banner")
        showCookieBanner();

    }else console.log("cookie banner accepted - not showing banner")

}