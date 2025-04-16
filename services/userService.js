const cliente = require('../config/db');

exports.getAllTasks = async (req, res) => {
    try {
        let { data } = await cliente.supabase.from('tasks').select('*');
        res.send(data);
    } catch (error) {
        console.error(error);
    }
}

exports.getTaskById = async (req, res) => {
    const { id } = req.params;
    try {
        const { data, error } = await cliente.supabase
            .from('tasks')
            .select('*')
            .eq('id', id)
            .single();

        if (error) {
            return res.status(400).json({ error: error.message });
        }

        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro no servidor' });
    }
};


exports.postTask = async (req, res) => {
    const { tittle, description } = req.body;

    try {
        const { data, error } = await cliente.supabase
            .from("tasks")
            .insert({ tittle, description })
            .select()
            .single();
        if (error) {
            return res.status(400).json({ error: error.message });
        }
        return res.status(201).json(data);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro no servidor' });
    }
}

exports.DeleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const { data, error } = await cliente.supabase
            .from("tasks")
            .delete()
            .eq("id", id)
            .select()
            .single();
        if (error) {
            return res.status(400).json({ error: error.message });
        }
        return res.status(201).json(data);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro no servidor' });
    }
}

//module.exports = getAllUsers;