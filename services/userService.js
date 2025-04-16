const cliente = require('../config/db');

exports.getAllUsers = async (req, res) => {
    try {
        let { data } = await cliente.supabase.from('tasks').select('*');
        res.send(data);
    } catch(error) {
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
            .single(); // Garante que só vem um resultado

        if (error) {
            return res.status(400).json({ error: error.message });
        }

        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro no servidor' });
    }
};


//module.exports = getAllUsers;