// dao.js
const { Alarm } = require('../model/model');

exports.getAllAlarms = async () => {
    try {
        const alarms = await Alarm.findAll();
        return alarms;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.getAlarmById = async (id) => {
    try {
        const alarm = await Alarm.findByPk(id);
        return alarm;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.createAlarm = async (alarmData) => {
    try {
        const alarm = await Alarm.create(alarmData);
        return alarm;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.updateAlarm = async (id, alarmData) => {
    try {
        let alarm = await Alarm.findByPk(id);
        if (!alarm) {
            throw new Error('Alarm not found');
        }
        alarm = await alarm.update(alarmData);
        return alarm;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.deleteAlarm = async (id) => {
    try {
        const alarm = await Alarm.findByPk(id);
        if (!alarm) {
            throw new Error('Alarm not found');
        }
        await alarm.destroy();
    } catch (error) {
        throw new Error(error.message);
    }
};
