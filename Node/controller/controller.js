// controller.js
const { Alarm } = require('../model/model');

exports.getAllAlarms = async (req, res) => {
    try {
        const alarms = await Alarm.findAll();
        res.json(alarms);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getAlarmById = async (req, res) => {
    const { id } = req.params;
    try {
        const alarm = await Alarm.findByPk(id);
        if (!alarm) {
            res.status(404).json({ message: 'Alarm not found' });
            return;
        }
        res.json(alarm);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createAlarm = async (req, res) => {
    const { name,phase,well,status, type, level, project, sprovider, depth, indepth, systatus } = req.body;
    try {
        const alarm = await Alarm.create({ name,phase,well,status, type, level, project, sprovider, depth, indepth, systatus });
        res.status(201).json(alarm);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateAlarm = async (req, res) => {
    const { id } = req.params;
    const { name,phase,well,status, type, level, project, sprovider, depth, indepth, systatus } = req.body;
    try {
        let alarm = await Alarm.findByPk(id);
        if (!alarm) {
            res.status(404).json({ message: 'Alarm not found' });
            return;
        }
        alarm = await alarm.update({ name,phase,well,status, type, level, project, sprovider, depth, indepth, systatus });
        res.json(alarm);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteAlarm = async (req, res) => {
    const { id } = req.params;
    try {
        const alarm = await Alarm.findByPk(id);
        if (!alarm) {
            res.status(404).json({ message: 'Alarm not found' });
            return;
        }
        await alarm.destroy();
        res.json({ message: 'Alarm deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
