// models/Employee.js
const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: { type: String },
    department: { type: String },
    phoneNumber: { type: String },
    servicePackagePrice: { type: Number },
    addons: { type: String },
});

const Employee = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee;
