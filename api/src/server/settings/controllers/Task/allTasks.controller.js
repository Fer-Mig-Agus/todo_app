const { Task, User } = require("../../../../db/models/relationShips");


const allTask = async (req, res) => {
    const { id_user } = req.query;
    try {

        // Busco todas las tareas del usuario
        const allTaskOfUser = await User.findByPk(id_user, {
            include: [{ model: Task }],
        });

        res.status(201).json({ status: 201, message: "User tasks", data: allTaskOfUser.tasks });
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
};

module.exports = allTask;