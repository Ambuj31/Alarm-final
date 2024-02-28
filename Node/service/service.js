// // service.js
// const alarmDAO = require('../dao/dao');

// exports.getAllAlarms = async () => {
//     try {
//         return await alarmDAO.getAllAlarms();
//     } catch (error) {
//         throw new Error(error.message);
//     }
// };

// exports.getAlarmById = async (id) => {
//     try {
//         return await alarmDAO.getAlarmById(id);
//     } catch (error) {
//         throw new Error(error.message);
//     }
// };

// exports.createAlarm = async (alarmData) => {
//     try {
//         return await alarmDAO.createAlarm(alarmData);
//     } catch (error) {
//         throw new Error(error.message);
//     }
// };

// exports.updateAlarm = async (id, alarmData) => {
//     try {
//         return await alarmDAO.updateAlarm(id, alarmData);
//     } catch (error) {
//         throw new Error(error.message);
//     }
// };

// exports.deleteAlarm = async (id) => {
//     try {
//         await alarmDAO.deleteAlarm(id);
//     } catch (error) {
//         throw new Error(error.message);
//     }
// };
const { getAllAlarmsQuery, getAlarmByIdQuery, createAlarmQuery, updateAlarmQuery, deleteAlarmQuery } = require('../dao/dao');

// Service function to get all alarms
exports.getAllAlarms = async () => {
    try {
        return await getAllAlarmsQuery();
    } catch (error) {
        throw new Error('Failed to fetch alarms');
    }
};

// Service function to get an alarm by ID
exports.getAlarmById = async (id) => {
    try {
        return await getAlarmByIdQuery(id);
    } catch (error) {
        throw new Error('Failed to fetch alarm by ID');
    }
};

// Service function to create a new alarm
exports.createAlarm = async (alarmData) => {
    // Basic validation
    if (!alarmData.name || !alarmData.phase || !alarmData.well) {
        throw new Error('Name, phase, and well are required');
    }

    try {
        return await createAlarmQuery(alarmData);
    } catch (error) {
        throw new Error('Failed to create alarm');
    }
};

// Service function to update an existing alarm
exports.updateAlarm = async (id, alarmData) => {
    // Basic validation
    if (!alarmData.name || !alarmData.phase || !alarmData.well) {
        throw new Error('Name, phase, and well are required');
    }

    try {
        return await updateAlarmQuery(id, alarmData);
    } catch (error) {
        throw new Error('Failed to update alarm');
    }
};

// Service function to delete an existing alarm
exports.deleteAlarm = async (id) => {
    try {
        await deleteAlarmQuery(id);
    } catch (error) {
        throw new Error('Failed to delete alarm');
    }
};
