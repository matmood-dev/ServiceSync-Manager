const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const Employee = require('./models/Employee');

const app = express();

// Enable CORS
app.use(cors());

app.use(bodyParser.json());

// Connect to MongoDB Atlas with new database 'mobilenumbers'
mongoose.connect('mongodb+srv://???', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected to mobilenumbers database');
    prepopulateData();
}).catch(err => console.error('MongoDB connection error:', err));

// Function to prepopulate the database with employee data
const prepopulateData = async () => {
    const existingEmployee = await Employee.findOne({ phoneNumber: '36111062' });
    if (!existingEmployee) {
        const mahmood = new Employee({
            name: 'Mahmood',
            department: 'IT',
            phoneNumber: '36111062',
            servicePackagePrice: 7.7,
            addons: 'none'
        });
        try {
            await mahmood.save();
            console.log('Prepopulated employee data added successfully');
        } catch (error) {
            console.error('Error adding prepopulated employee data:', error);
        }
    }
};

// CRUD routes for employees
app.post('/employees', async (req, res) => {
    const { name, department, phoneNumber, servicePackagePrice, addons } = req.body;
    console.log('Received data:', req.body);
    try {
        const employee = new Employee({ name, department, phoneNumber, servicePackagePrice, addons });
        await employee.save();
        console.log('Employee saved:', employee);
        res.status(201).send(employee);
    } catch (error) {
        console.error('Error creating employee:', error);
        res.status(400).send({ error: 'Error creating employee', details: error.message });
    }
});

app.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).send(employees);
    } catch (error) {
        console.error('Error fetching employees:', error);
        res.status(500).send({ error: 'Error fetching employees', details: error.message });
    }
});

app.put('/employees/:id', async (req, res) => {
    const { id } = req.params;
    const { name, department, phoneNumber, servicePackagePrice, addons } = req.body;
    try {
        const employee = await Employee.findByIdAndUpdate(id, { name, department, phoneNumber, servicePackagePrice, addons }, { new: true });
        res.status(200).send(employee);
    } catch (error) {
        console.error('Error updating employee:', error);
        res.status(400).send({ error: 'Error updating employee', details: error.message });
    }
});

app.delete('/employees/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Employee.findByIdAndDelete(id);
        res.status(200).send({ message: 'Employee deleted successfully' });
    } catch (error) {
        console.error('Error deleting employee:', error);
        res.status(500).send({ error: 'Error deleting employee', details: error.message });
    }
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
