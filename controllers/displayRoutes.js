const router = require("express").Router()
const {User, Home} = require("../models")


router.get("/", async (req, res) => {
    // run query from db

try {

     res.render("homepage")
} catch(err){
    console.log(err)
}

   
})


router.get("/login", async (req, res) => {
    // run query from db

try {
     res.render("login")
} catch(err){
    console.log(err)
}

   
})

router.get("/profile", async (req, res) => {
    // run query from db

try {
    // const userData = await User.findAll({})

    // const users = userData.map(user => user.get({plain: true}))

    const userData = await User.findByPk(1, {
        //include: [Home]
    })
    const user = userData.get({plain: true})
    console.log(user)

     res.render("profile", {user})
} catch(err){
    console.log(err)
}

   
})

module.exports = router;