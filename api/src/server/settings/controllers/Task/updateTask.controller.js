const { Task, User } = require("../../../../db/models/relationShips");


const createTask = async (req, res) => {
    const { id_user } = req.query;
    const { id_task} = req.params;
    const {task}=req.body;
    
    try {
        // Busco todas las tareas del usuario
        const allTaskOfUser = await User.findByPk(id_user, {
            include: [{ model: Task }],
        });

        //Verifico si la tarea le pertenece al usuario
        const taskSearch=allTaskOfUser.tasks.filter((task)=> task.id === id_task);

        if (!taskSearch || taskSearch.length == 0) return res.status(404).json({ status: 404, error:"This task does not belong to the user"})

        // Verifico que la nueva tarea no exista
        if (allTaskOfUser.tasks.length !== 0) {
            let bandera = false;
            for (let i = 0; i < allTaskOfUser.tasks.length; i++) {
                if (task.toLowerCase() === allTaskOfUser.tasks[i].task.toLowerCase()) {
                    bandera = true;
                    i = allTaskOfUser.tasks.length;
                }
            }
            if (bandera) return res.status(409).json({ status: 409, error: "The task has already been added" });
        }

        // Busco la tarea a actualizar
        const taskUpdate = Task.findByPk(id_task);

        await taskUpdate.update({
            task,
        })

        res.status(200).json({ status: 200, message: "The task was successfully updated", data: taskUpdate });
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
};

module.exports = createTask;