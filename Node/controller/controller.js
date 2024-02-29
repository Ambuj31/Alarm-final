// // controller.js
// const { Alarm } = require('../model/model');

// exports.getAllAlarms = async (req, res) => {
//     try {
//         const alarms = await Alarm.findAll();
//         res.json(alarms);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };

// exports.getAlarmById = async (req, res) => {
//     const { id } = req.params;
//     try {
//         const alarm = await Alarm.findByPk(id);
//         if (!alarm) {
//             res.status(404).json({ message: 'Alarm not found' });
//             return;
//         }
//         res.json(alarm);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };

// exports.createAlarm = async (req, res) => {
//     const { name,phase,well,status, type, level, project, sprovider, depth, indepth, systatus } = req.body;
//     try {
//         const alarm = await Alarm.create({ name,phase,well,status, type, level, project, sprovider, depth, indepth, systatus });
//         res.status(201).json(alarm);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// };

// exports.updateAlarm = async (req, res) => {
//     const { id } = req.params;
//     const { name,phase,well,status, type, level, project, sprovider, depth, indepth, systatus } = req.body;
//     try {
//         let alarm = await Alarm.findByPk(id);
//         if (!alarm) {
//             res.status(404).json({ message: 'Alarm not found' });
//             return;
//         }
//         alarm = await alarm.update({ name,phase,well,status, type, level, project, sprovider, depth, indepth, systatus });
//         res.json(alarm);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// };

// exports.deleteAlarm = async (req, res) => {
//     const { id } = req.params;
//     try {
//         const alarm = await Alarm.findByPk(id);
//         if (!alarm) {
//             res.status(404).json({ message: 'Alarm not found' });
//             return;
//         }
//         await alarm.destroy();
//         res.json({ message: 'Alarm deleted' });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };

const service = require('../service/service');
const { STATUS_CODES } = require('../constant/constant');
const { ALARM_NOT_FOUND, ALARM_DELETED, NAME_PHASE_WELL_REQUIRED } = require('../constant/message');

exports.getAllAlarms = async (req, res) => {
    try {
        const alarms = await service.getAllAlarms();
        res.status(STATUS_CODES.SUCCESS).json(alarms);
    } catch (error) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
};

exports.getAlarmById = async (req, res) => {
    const { id } = req.params;
    try {
        const alarm = await service.getAlarmById(id);
        if (!alarm) {
            res.status(STATUS_CODES.NOT_FOUND).json({ message: ALARM_NOT_FOUND });
            return;
        }
        res.status(STATUS_CODES.SUCCESS).json(alarm);
    } catch (error) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
};

exports.createAlarm = async (req, res) => {
    const alarmData = req.body;
    try {
        const alarm = await service.createAlarm(alarmData);
        res.status(STATUS_CODES.CREATED).json(alarm);
    } catch (error) {
        res.status(STATUS_CODES.BAD_REQUEST).json({ message: error.message });
    }
};

exports.updateAlarm = async (req, res) => {
    const { id } = req.params;
    const alarmData = req.body;
    try {
        const updatedAlarm = await service.updateAlarm(id, alarmData);
        res.status(STATUS_CODES.SUCCESS).json(updatedAlarm);
    } catch (error) {
        res.status(STATUS_CODES.BAD_REQUEST).json({ message: error.message });
    }
};

exports.deleteAlarm = async (req, res) => {
    const { id } = req.params;
    try {
        await service.deleteAlarm(id);
        res.status(STATUS_CODES.SUCCESS).json({ message: ALARM_DELETED });
    } catch (error) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
};
