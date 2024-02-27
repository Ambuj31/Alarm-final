// service.js
const alarmDAO = require('../dao/dao');

exports.getAllAlarms = async () => {
    try {
        return await alarmDAO.getAllAlarms();
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.getAlarmById = async (id) => {
    try {
        return await alarmDAO.getAlarmById(id);
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.createAlarm = async (alarmData) => {
    try {
        return await alarmDAO.createAlarm(alarmData);
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.updateAlarm = async (id, alarmData) => {
    try {
        return await alarmDAO.updateAlarm(id, alarmData);
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.deleteAlarm = async (id) => {
    try {
        await alarmDAO.deleteAlarm(id);
    } catch (error) {
        throw new Error(error.message);
    }
};
