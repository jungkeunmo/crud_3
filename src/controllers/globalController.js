const homeController = (req, res) => {
    res.render("screens/home");
};

const detailController = (req, res) => {
    res.render("screens/detail");
};

const createController = (req, res) => {
    res.render("screens/create");
};

const globalController = {
    homeController, 
    detailController,
    createController,
};

export default globalController;