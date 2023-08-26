const cron = require('node-cron');

cron.schedule('0 */2 * * * *', () => {
    const currentTime = new Date().toLocaleTimeString();
    console.log(`Tâche cron exécutée à ${currentTime}`);
});