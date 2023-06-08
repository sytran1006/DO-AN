let getHomePage = (req, res) =>{
    return res.render("homePage.ejs");

}
let getCartPage = (req, res) =>{
    return res.render("cart.ejs");

}
module.exports={
    getHomePage: getHomePage,
    getCartPage: getCartPage
}