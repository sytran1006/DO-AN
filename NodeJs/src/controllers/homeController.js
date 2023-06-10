import db from "../models/index";
import CRUDservice from "../services/CRUDservice";
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log('----------------')
        console.log(data)
        console.log('----------------')
        return res.render("homePage.ejs", {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e);
    }

}
let getCartPage = (req, res) => {
    return res.render("cart.ejs");

}
let getCRUD = (req, res) => {
    return res.render("crud.ejs");

}
let postCRUD = async (req, res) => {
    let message = await CRUDservice.createNewUser(req.body);
    console.log(message);
    return res.send('post-crud');

}
let displayGetCRUD = async (req, res) => {
    let data = await CRUDservice.getAllUser();
    console.log('------------------')
    console.log(data);
    console.log('------------------')
    return res.render('displayCRUD.ejs', {
        data: data
    })
}
let getEditCRUD = async (req, res) => {
    //tim id theo query yeu cau
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDservice.getUserInfoById(userId);
        console.log('------------------')
        console.log(userData);
        console.log('------------------')
    } else {
        return res.send('hihi')
    }

}
module.exports = {
    getHomePage: getHomePage,
    getCartPage: getCartPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD
}
