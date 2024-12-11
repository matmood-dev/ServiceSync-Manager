const mongoose = require('mongoose');
require('dotenv').config();

const extensionSchema = new mongoose.Schema({
    number: String,
    username: String,
    password: String,
    employee: String
});

const Extension = mongoose.model('Extension', extensionSchema);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('MongoDB connected...');

        const data = [
            { number: '7100', username: '01027100', password: '2T3FEJ4P', employee: 'Ali Alhaddad' },
            { number: '7101', username: '01027101', password: '2T3FEJ4A', employee: 'S. Mohammed Alwedaie' },
            { number: '7102', username: '01027102', password: '2T3FEJ4R', employee: 'Alaa Naser' },
            { number: '7103', username: '01027103', password: '2T3FEJ4S', employee: 'Fatima Shuaib' },
            { number: '7104', username: '01027104', password: '2T3FEJ4T', employee: 'Alyaa Ahmed' },
            { number: '7105', username: '01027105', password: '2T3FEJ72', employee: 'Husain Hubail' },
            { number: '7106', username: '01027106', password: '2T3FEJ73', employee: 'Meeting Room' },
            { number: '7107', username: '01027107', password: '2T3FEJ73', employee: 'Fadhel Mayoof' },
            { number: '7108', username: '01027108', password: '2T3FEJ75', employee: 'Jenan Alqassab' },
            { number: '7109', username: '01027109', password: '2T3FEJ76', employee: 'Husain Alhaddad' },
            { number: '7110', username: '01027110', password: '2T3FEJ77', employee: 'Yasser Shuaib' },
            { number: '7111', username: '01027111', password: '2T3FEJ78', employee: 'Reception' },
            { number: '7112', username: '01027112', password: '2T3FEJ79', employee: 'Husain Almulla' },
            { number: '7113', username: '01027113', password: '2T3FEJ7A', employee: 'Mahmood Alturabi' },
            { number: '7114', username: '01027114', password: '2T3FEJ7B', employee: '--' },
            { number: '7115', username: '01027115', password: '2T3FEJ86', employee: 'Aqeela Aqeel' },
            { number: '7116', username: '01027116', password: '2T3FEJ87', employee: 'Ali Fardan' },
            { number: '7117', username: '01027117', password: '2T3FEJ88', employee: '--' },
            { number: '7118', username: '01027118', password: '2T3FEJ89', employee: 'Rajeesh' },
            { number: '7119', username: '01027119', password: '2T3FEJ8A', employee: 'Adresh Raghu' },
            { number: '7120', username: '01027120', password: '2T3FEJ8B', employee: 'Krishnan Ekkanath' },
            { number: '7121', username: '01027121', password: '2T3FEJ8D', employee: 'Reejesh' },
            { number: '7122', username: '01027122', password: '2T3FEJ8D', employee: 'Faisal / Mohd Asad' },
            { number: '7123', username: '01027123', password: '2T3FEJ8E', employee: 'Husain Shuaib' },
            { number: '7124', username: '01027124', password: '2T3FEJ8F', employee: 'Sara Meftah' },
            { number: '7125', username: '01027125', password: '2T3FEJ90', employee: 'Husain Alherz' },
            { number: '7126', username: '01027126', password: '2T3FEJ91', employee: 'Jushi' },
            { number: '7127', username: '01027127', password: '2T3FEJ92', employee: 'Sunny' },
            { number: '7128', username: '01027128', password: '2T3FEJ93', employee: 'Ganga' },
            { number: '7129', username: '01027129', password: '2T3FEJ94', employee: 'Sadiq Salmaniya' },
            { number: '7130', username: '01027130', password: '2T3FEJ95', employee: 'Mohamed Ejwaid' },
            { number: '7131', username: '01027131', password: '2T3FEJ96', employee: 'Bassam Shuaib' },
            { number: '7132', username: '01027132', password: '2T3FEJ97', employee: 'John Santos' },
            { number: '7133', username: '01027133', password: '2T3FEJ98', employee: 'Jassim Mohammed' },
            { number: '7134', username: '01027134', password: '2T3FEJ99', employee: 'Hamala – Ilham Office (Plan)' },
            { number: '7135', username: '01027135', password: '2T3FEJJ0', employee: 'Nizar Armoush' },
            { number: '7136', username: '01027136', password: '2T3FEJJ1', employee: 'Khobar' },
            { number: '7137', username: '01027137', password: '2T3FEJJ2', employee: 'Riyadh' },
            { number: '7138', username: '01027138', password: '2T3FEJJ3', employee: 'Renner' },
            { number: '7139', username: '01027139', password: '2T3FEJJ4', employee: 'Arad' },
            { number: '7140', username: '01027140', password: '2T3FEJJ5', employee: 'Sanad' },
            { number: '7141', username: '01027141', password: '2T3FEJJ6', employee: 'Salmaniya' },
            { number: '7142', username: '01027142', password: '2T3FEJJ7', employee: 'Hamala' }
        ];

        try {
            await Extension.insertMany(data);
            console.log('Data successfully inserted');
        } catch (error) {
            console.error('Error inserting data:', error);
        } finally {
            mongoose.connection.close();
        }
    })
    .catch(err => console.log('Error connecting to MongoDB:', err));
