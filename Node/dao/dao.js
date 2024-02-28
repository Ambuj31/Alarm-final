// dao.js
const { Alarm } = require('../model/model');

// exports.getAllAlarms = async () => {
//     try {
//         const alarms = await Alarm.findAll();
//         return alarms;
//     } catch (error) {
//         throw new Error(error.message);
//     }
// };

// exports.getAlarmById = async (id) => {
//     try {
//         const alarm = await Alarm.findByPk(id);
//         return alarm;
//     } catch (error) {
//         throw new Error(error.message);
//     }
// };

// exports.createAlarm = async (alarmData) => {
//     try {
//         const alarm = await Alarm.create(alarmData);
//         return alarm;
//     } catch (error) {
//         throw new Error(error.message);
//     }
// };

// exports.updateAlarm = async (id, alarmData) => {
//     try {
//         let alarm = await Alarm.findByPk(id);
//         if (!alarm) {
//             throw new Error('Alarm not found');
//         }
//         alarm = await alarm.update(alarmData);
//         return alarm;
//     } catch (error) {
//         throw new Error(error.message);
//     }
// };

// exports.deleteAlarm = async (id) => {
//     try {
//         const alarm = await Alarm.findByPk(id);
//         if (!alarm) {
//             throw new Error('Alarm not found');
//         }
//         await alarm.destroy();
//     } catch (error) {
//         throw new Error(error.message);
//     }
// };
const pool = require('../config/db.config');

// DAO function to get all alarms
exports.getAllAlarmsQuery = async () => {
    try {
        const { rows } = await pool.query('SELECT * FROM "Alarmdetails"');
        return rows;
    } catch (error) {
        throw new Error(error.message);
    }
};

// DAO function to get an alarm by ID
exports.getAlarmByIdQuery = async (id) => {
    try {
        const { rows } = await pool.query('SELECT * FROM "Alarmdetails" WHERE id = $1', [id]);
        if (rows.length === 0) {
            throw new Error('Alarm not found');
        }
        return rows[0];
    } catch (error) {
        throw new Error(error.message);
    }
};


// DAO function to create a new alarm
exports.createAlarmQuery = async (alarmData) => {
    const { name, phase, well, status, type, level, project, sprovider, depth, indepth, systatus } = alarmData;
    const query = 'INSERT INTO "Alarmdetails" (name, phase, well, status, type, level, project, sprovider, depth, indepth, systatus) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *';
    const values = [name, phase, well, status, type, level, project, sprovider, depth, indepth, systatus];
    
    try {
        const { rows } = await pool.query(query, values);
        return rows[0];
    } catch (error) {
        throw new Error(error.message);
    }
};

// DAO function to update an existing alarm
exports.updateAlarmQuery = async (id, alarmData) => {
    const { name, phase, well, status, type, level, project, sprovider, depth, indepth, systatus } = alarmData;
    const query = 'UPDATE "Alarmdetails" SET name = $1, phase = $2, well = $3, status = $4, type = $5, level = $6, project = $7, sprovider = $8, depth = $9, indepth = $10, systatus = $11 WHERE id = $12 RETURNING *';
    const values = [name, phase, well, status, type, level, project, sprovider, depth, indepth, systatus, id];
    
    try {
        const { rows } = await pool.query(query, values);
        return rows[0];
    } catch (error) {
        throw new Error(error.message);
    }
};

// DAO function to delete an existing alarm
exports.deleteAlarmQuery = async (id) => {
    try {
        await pool.query('DELETE FROM "Alarmdetails" WHERE id = $1', [id]);
    } catch (error) {
        throw new Error(error.message);
    }
};
