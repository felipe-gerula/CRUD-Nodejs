const usersCtrl = {};

usersCtrl.renderSignUpForm = (req,res) =>{
    res.render("users/signup");
};

usersCtrl.signup = (req,res) =>{
    res.send("SignUp");
};

usersCtrl.renderSignInForm = (req,res) =>{
    res.render("users/signin");
};

usersCtrl.signin = (req,res) =>{
    res.send("SingIn");
};

usersCtrl.logout = (req,res) =>{
    res.send("logout");
};

module.exports = usersCtrl;