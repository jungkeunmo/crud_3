import crud2 from "../models/crud2";

const homeController = async(req, res) => {
    
    try {
        const dataList = await crud2.find({ isDelet: false });

        res.render("screens/home", { list: dataList });
    } catch (error) {
        console.log(error);
        res.render("screens/home", { list:[]});
    }
};

const detailController = async (req, res) => {
    //사용자가 선택한 메모의 id값을 가져온뒤,
    //db에서 해당 아이디와 일치하는 데이터를 조회한다.
    const {
        query : { id }, 
    } = req;

    try {
        const detailData = await crud2.findOne({ _id: id });

        if (detailData.isDelete) {
            throw Error("❌");
        } else {
            res.render("screens/detail",  { data: detailData});
        }
    } catch (error) {
        console.log(error);
        homeController(req, res);
    }
 
    //res.render("screens/detail");
};

const createController = (req, res) => {
    res.render("screens/create");
};

const postUpdateController = async(req, res) => {
    const {
        body: { id, desc }, 
    } = req;

    try {
        const updateResult = await crud2.updateOne(
            { _id: id},
            {
                $set: {
                    description: desc,
                },
            }
            );

            homeController(req, res);
    } catch (error) {
        console.log(error);
        homeController(req, res);
    }
};

const postDeleteController = async (req, res) => {
    const {
        body: { id },
    } = req;

    try {
        const deleteResult = await crud2.updateOne(
            { _id: id },
            {
                $set: {
                    isDelet: true,
                },
            }

        );
        homeController(req, res);
    } catch (error) {
        console.log(error);
        homeController(req, res);
    }
}

const postCreateController = async(req, res) => {
    const {
        body: { desc },
    } = req;

    try {
        const creatResult = await crud2.create({
            description: desc,
        });

        homeController(req, res);
    } catch (error) {
        console.log(error);
        homeController(req, res);
    }
};

const globalController = {
    homeController, 
    detailController,
    createController,
    postUpdateController,
    postDeleteController,
    postCreateController,
};

export default globalController;