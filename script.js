// desktop sub-menus
const productDesktopBtn = document.getElementById('productDesktop');
const productSubMenu = document.getElementById('productSubMenu');
const arrowProductDesktop = document.getElementById('arrowProductDesktop');

function openProductSubMenu(){
    productSubMenu.classList.toggle('hidden');
    arrowProductDesktop.classList.toggle('rotate');
}

const companyDesktopBtn = document.getElementById('companyDesktop');
const companySubMenu = document.getElementById('companySubMenu');
const arrowCompanyDesktop = document.getElementById('arrowCompanyDesktop');


function openCompanySubMenu(){
    companySubMenu.classList.toggle('hidden');
    arrowCompanyDesktop.classList.toggle('rotate');
}

const connectDesktopBtn = document.getElementById('connectDesktop');
const connectSubMenu = document.getElementById('connectSubMenu');
const arrowConnectDesktop = document.getElementById('arrowConnectDesktop');

function openConnectSubMenu(){
    connectSubMenu.classList.toggle('hidden');
    arrowConnectDesktop.classList.toggle('rotate');

}
productDesktopBtn.addEventListener('click', openProductSubMenu);
companyDesktopBtn.addEventListener('click', openCompanySubMenu);
connectDesktopBtn.addEventListener('click', openConnectSubMenu);

////////////////////////

//mobile menu open-close

const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

function toggleMenu() {
    if (mobileMenu.classList.contains('hidden')) {
        // Open the menu
        mobileMenu.classList.remove('hidden');
        menuBtn.src = "./images/icon-close.svg"; 
    } else {
        // Close the menu
        mobileMenu.classList.add('hidden');
        menuBtn.src = "./images/icon-hamburger.svg"; 
    }
}

menuBtn.addEventListener('click', toggleMenu);

/////////////////////////

//mobile sub-menus

const productMobileBtn = document.getElementById('productMobile');
const productSubMenuMobile = document.getElementById('productSubMenuMobile');
const arrowProductMobile = document.getElementById('arrowProductMobile');


function openProductSubMenuMobile(){
    productSubMenuMobile.classList.toggle('hidden');
    arrowProductMobile.classList.toggle('rotate');
}

productMobileBtn.addEventListener('click', openProductSubMenuMobile);

const companyMobileBtn = document.getElementById('companyMobile');
const companySubMenuMobile = document.getElementById('companySubMenuMobile');
const arrowCompanyMobile = document.getElementById('arrowCompanyMobile');


function openCompanySubMenuMobile(){
    companySubMenuMobile.classList.toggle('hidden');
    arrowCompanyMobile.classList.toggle('rotate');
}

companyMobileBtn.addEventListener('click', openCompanySubMenuMobile);

const connectMobileBtn = document.getElementById('connectMobile');
const connectSubMenuMobile = document.getElementById('connectSubMenuMobile');
const arrowConnectMobile = document.getElementById('arrowConnectMobile');

function openConnectSubMenuMobile(){
    connectSubMenuMobile.classList.toggle('hidden');
    arrowConnectDesktop.classList.toggle('rotate');
}

connectMobileBtn.addEventListener('click', openConnectSubMenuMobile);
//////////////////////////////////