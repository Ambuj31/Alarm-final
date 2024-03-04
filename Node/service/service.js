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
const { ALARM_NOT_FOUND, ALARM_DELETED, FAILED_TO_FETCH_ALARMS, FAILED_TO_FETCH_ALARM_BY_ID, FAILED_TO_CREATE_ALARM, FAILED_TO_UPDATE_ALARM, FAILED_TO_DELETE_ALARM, NAME_PHASE_WELL_REQUIRED,RECORD_UPDATE_SUCCESS} = require('../constant/message');

exports.getAllAlarms = async () => {
    try {
        return await getAllAlarmsQuery();
    } catch (error) {
        throw new Error(FAILED_TO_FETCH_ALARMS);
    }
};

exports.getAlarmById = async (id) => {
    try {
        return await getAlarmByIdQuery(id);
    } catch (error) {
        throw new Error(FAILED_TO_FETCH_ALARM_BY_ID);
    }
};

exports.createAlarm = async (alarmData) => {
    // Basic validation
    if (!alarmData.name || !alarmData.phase || !alarmData.well) {
        throw new Error(NAME_PHASE_WELL_REQUIRED);
    }

    try {
        return await createAlarmQuery(alarmData);
    } catch (error) {
        throw new Error(FAILED_TO_CREATE_ALARM);
    }
};

exports.updateAlarm = async (id, alarmData) => {
    // Basic validation
    if (!alarmData.name || !alarmData.phase || !alarmData.well) {
        throw new Error(NAME_PHASE_WELL_REQUIRED);
    }

    try {
        return await updateAlarmQuery(id, alarmData);
    } catch (error) {
        throw new Error(FAILED_TO_UPDATE_ALARM);
    }
};

exports.deleteAlarm = async (id) => {
    try {
        await deleteAlarmQuery(id);
    } catch (error) {
        throw new Error(FAILED_TO_DELETE_ALARM);
    }
};
