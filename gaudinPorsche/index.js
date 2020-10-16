// Gaudin Porsche script

// global vars

// start of fns 

// Contact Form
const contactFormVar = '#gform_submit_button_3748'
const contactForm = () => {
    var contact = document.querySelectorAll(contactFormVar);

    for(var i = 0; i < contact.length; i++){
        contact[i].addEventListener("click", myFunk);
    }
 
    function myFunk() {
//      console.log("CLICKED Contact Form!");
        return window.dataLayer.push ({ 'event': 'contact_form'})
    }
}
contactForm()


// Directions 
const directionsVar = 'placeHolder'
const directions = () => {
    var dir = document.querySelectorAll(directionsVar);

    for(var i = 0; i < dir.length; i++){
        dir[i].addEventListener("click", myFunk);
    }

    function myFunk() {
//      console.log("CLICKED Directions!");
        return window.dataLayer.push ({ 'event': 'directions'})
    }
}
directions()


// Order Parts 
// const orderPartsVar = '#gform_submit_button_2'
// const orderParts = () => {
//     var Order = document.querySelectorAll(orderPartsVar);

//     for(var i = 0; i < Order.length; i++){
//         Order[i].addEventListener("click", myFunk);
//     }

//     function myFunk() {
//       console.log("CLICKED order parts!");
//         return window.dataLayer.push ({ 'event': 'order_parts'})
//     }
// }
// orderParts()


// SRP-CPO-ePrice-Form
const srpCpoEpriceFormUrl = "certified-pre-owned"
const srpCpoEpriceFormVar = '.ePriceBtn'
const srpCpoEprice = () => {
if (window.location.href.indexOf(srpCpoEpriceFormUrl) != -1){
    var cpoePrice = document.querySelectorAll(srpCpoEpriceFormVar);
    for(var i = 0; i < cpoePrice.length; i++){
        cpoePrice[i].addEventListener("click", myFunk);
    }
}
    function myFunk() {
        return window.dataLayer.push ({ 'event': 'srp-cpo-eprice-form'})
    }
}
srpCpoEprice()


// SRP-New-ePrice-Form
const srpNewEpriceUrlContains1 = "new"
const srpNewEpriceUrlContains2 = "inventory"
const srpNewEpriceVar = '.ePriceBtn'
const srpNewEprice = () => {
if (window.location.href.indexOf(srpNewEpriceUrlContains1) != -1 && 
    window.location.href.indexOf(srpNewEpriceUrlContains2) == -1){
    var newEprice = document.querySelectorAll(srpNewEpriceVar);

    for(var i = 0; i < newEprice.length; i++){
        newEprice[i].addEventListener("click", myFunk);
    }
}
    function myFunk() {
      console.log("CLICKED SRP-New-ePrice-Form !");
        return window.dataLayer.push ({ 'event': 'srp-new-eprice-form'})
    }
}
srpNewEprice()


// SRP-Used-ePrice-Form
const srpUsedEpriceUrlContains1 = "searchused"
// const srpUsedEpriceUrlDoesNotContains = "inventory"
const srpUsedEpriceVar = '.ePriceBtn'
const srpUsedEprice = () => {
if (window.location.href.indexOf(srpUsedEpriceUrlContains1) != -1 
// && window.location.href.indexOf(srpUsedEpriceUrlDoesNotContains) == -1
){
    var usedEprice = document.querySelectorAll(srpUsedEpriceVar);

    for(var i = 0; i < usedEprice.length; i++){
        usedEprice[i].addEventListener("click", myFunk);
    }
}
    function myFunk() {
      console.log("CLICKED SRP-Used-ePrice-Form !");
        return window.dataLayer.push ({ 'event': 'srp-used-eprice-form'})
    }
}
srpUsedEprice()


// VDP-CPO-ePrice
const vdpCpoEpriceUrlContains1 = "inventory/certified-used-"
const vdpCpoEpriceVar1 = '.ePriceBtn'
const vdpCpoEpriceForm = () => {
if (window.location.href.indexOf(vdpCpoEpriceUrlContains1) != -1){
    var vdpCpoEprice = document.querySelectorAll(vdpCpoEpriceVar1);

    for(var i = 0; i < vdpCpoEprice.length; i++){
        vdpCpoEprice[i].addEventListener("click", myFunk);
    }
}
    function myFunk() {
      console.log("CLICKED VDP-New-ePrice-Form !");
        return window.dataLayer.push ({ 'event': 'vdp-cpo-eprice-form'})
    }
}
vdpCpoEpriceForm()


// VDP-New-ePrice
const vdpNewEpriceUrlContains1 = "inventory/new-"
const vdpNewEpriceVar1 = '.ePriceBtn'
const vdpNewEpriceVar2 = '.online-shopper-cta-button'
const vdpNewEpriceForm = () => {
if (window.location.href.indexOf(vdpNewEpriceUrlContains1) != -1){
    var vdpNewEprice = document.querySelectorAll(vdpNewEpriceVar1);
    var vdpNewEprice2 = document.querySelectorAll(vdpNewEpriceVar2);

    for(var i = 0; i < vdpNewEprice.length; i++){
        vdpNewEprice[i].addEventListener("click", myFunk);
    }

    for(var j = 0; j < vdpNewEprice2.length; j++){
        vdpNewEprice2[j].addEventListener("click", myFunk);
    }
}
    function myFunk() {
      console.log("CLICKED VDP-New-ePrice-Form !");
        return window.dataLayer.push ({ 'event': 'vdp-new-eprice-form'})
    }
}
vdpNewEpriceForm()


// VDP-Used-ePrice
const vdpUsedEpriceUrlContains1 = "used-Las"
const vdpUsedEpriceVar2 = '.ePriceBtn'
const vdpUsedEpriceForm = () => {
    if (window.location.href.indexOf(vdpUsedEpriceUrlContains1) != -1){
        var vdpUsedEprice = document.querySelectorAll(vdpUsedEpriceVar2);
    
        for(var i = 0; i < vdpUsedEprice.length; i++){
            vdpUsedEprice[i].addEventListener("click", myFunk);
        }
    }
        function myFunk() {
          console.log("CLICKED VDP-Used-ePrice-Form !");
            return window.dataLayer.push ({ 'event': 'vdp-used-eprice-form'})
        }
    }
vdpUsedEpriceForm()


//VDP Form 
const vdpFormVar = 'submitLead'
const vdpForm = () => {
    var vForm = document.querySelectorAll(vdpFormVar);

    for(var i = 0; i < vForm.length; i++){
        vForm[i].addEventListener("click", myFunk);
    }

    function myFunk() {
      console.log("CLICKED VDP Form!");
        return window.dataLayer.push ({ 'event': 'vdp_form'})
    }
}
vdpForm()


//   START OF BL2 

// contact us pageview
const contactPageUrlContains = "hours"
const contactPage = () => {
    if (window.location.href.indexOf(contactPageUrlContains) != -1){
        console.log("Contact Pageviewed")
        return window.dataLayer.push ({ 'event': 'contact_pageview'})
    }
}
contactPage()


// coupon Page
const couponPageUrlContains = "servicespecials"
const couponPage = () => {
    if (window.location.href.indexOf(couponPageUrlContains) != -1){
        console.log('coupon pageview');
        return window.dataLayer.push({ 'event': 'coupon_pageview' })
    }
}
couponPage()


// finance pageview
const financePageUrlContains = "finance"
const financePage = () => {
    if (window.location.href.indexOf(financePageUrlContains) != -1){
        console.log("finance pageview")
        return window.dataLayer.push({ 'event': 'finance_page'})
    }
}
financePage()


// New Specials Pageview
const newSpecialsPageUrlContains = "newspecials"
const newSpecialsPage = () => {
    if (window.location.href.indexOf(newSpecialsPageUrlContains) != -1){
        console.log("New Specials pageview")
        return window.dataLayer.push({ 'event': 'new_specials_page'})
    }
}
newSpecialsPage()


// Order Parts Pageview
const orderPartsPageUrlContains = "Parts"
const orderPartsPage = () => {
    if (window.location.href.indexOf(orderPartsPageUrlContains) != -1){
        console.log("Order Parts pageview")
        return window.dataLayer.push({ 'event': 'order_parts'})
    }
}
orderPartsPage()


// Print Coupons
const printCouponVar = '.difo-type-print'
const printCoupons = () => {
    var print = document.querySelectorAll(printCouponVar);
    for(var i = 0; i < print.length; i++){
        print[i].addEventListener("click", myFunk);
    }
    function myFunk() {
      console.log("CLICKED Print Coupon!");
        return window.dataLayer.push ({ 'event': 'print_coupons'})
    }
}
printCoupons()


// Schedule Service Pageview
const scheduleServicePageUrlContains = "schedule-appointment"
const scheduleServicePage = () => {
    if (window.location.href.indexOf(scheduleServicePageUrlContains) != -1){
        console.log('coupon pageview');
        return window.dataLayer.push({ 'event': 'schedule_service'})
    }
}
scheduleServicePage()


// SRP CPO Pageview
const srpCpoPageUrlContains = "certified-pre-owned"
const srpCpoPage = () => {
    if(window.location.href.indexOf(srpCpoPageUrlContains) != -1){
        console.log('SRP CPO pageview');
        return window.dataLayer.push({ 'event': 'srp_cpo'})
    }
}
srpCpoPage()

// SRP New Pageview
const srpNewPageUrlContains = "searchnew"
const srpNewPage = () => {
    if(window.location.href.indexOf(srpNewPageUrlContains) != -1){
        console.log('SRP new pageview');
        return window.dataLayer.push({ 'event': 'srp_new'})
    }
}
srpNewPage()

// SRP Used Pageview
const srpUsedPageUrlContains = "searchused"
const srpUsedPage = () => {
    if(window.location.href.indexOf(srpUsedPageUrlContains) != -1){
        console.log('SRP used pageview');
        return window.dataLayer.push({ 'event': 'srp_used'})
    }
}
srpUsedPage()

// VYT Pageview
const vytPageUrlContains = "value-your-trade"
const vytPage = () => {
    if(window.location.href.indexOf(vytPageUrlContains) != -1){
        console.log('SRP VYT pageview');
        return window.dataLayer.push({ 'event': 'VYT'})
    }
}
vytPage()


// VDP New Pageview
const vdpNewPageUrlContains1 = "new"
const vdpNewPageUrlContains2 = "Las"
const vdpNewPage = () => {
    if(window.location.href.indexOf(vdpNewPageUrlContains1) != -1 && 
        window.location.href.indexOf(vdpNewPageUrlContains2) != -1){
        console.log('VDP New pageview');
        return window.dataLayer.push({ 'event': 'vdp_new'})
    }
}
vdpNewPage()


// VDP Used Pageview
const vdpUsedPageUrlContains1 = "used"
const vdpUsedPageUrlContains2 = "Las"
const vdpUsedPage = () => {
    if(window.location.href.indexOf(vdpUsedPageUrlContains1) != -1 && 
        window.location.href.indexOf(vdpUsedPageUrlContains2) != -1){
        console.log('VDP Used pageview');
        return window.dataLayer.push({ 'event': 'vdp_used'})
    }
}
vdpUsedPage()


// VDP CPO Pageview
const vdpCpoPageUrlContains1 = "certified-used"
const vdpCpoPageUrlContains2 = "inventory"
const vdpCpoPage = () => {
    if(window.location.href.indexOf(vdpCpoPageUrlContains1) != -1 && 
        window.location.href.indexOf(vdpCpoPageUrlContains2) != -1){
        console.log('VDP Used pageview');
        return window.dataLayer.push({ 'event': 'vdp_cpo_page'})
    }
}
vdpCpoPage()



