const adminService = require('../services/adminServices');

exports.dashboard = (req, res) => {
    // Only admin users should reach here due to the middleware
    res.status(200).json({ message: 'Welcome to the Admin Dashboard', user: req.user });
  };
  
  exports.register = async (req, res) => {
    try {
      console.log("from controller",req.body)
      const result = await adminService.register(req.body);
    
      res.status(201).json(result);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  exports.getStaff = async (req, res) => {
    const result = await adminService.getStaff();
    res.status(200).json(result);
  };
  
  exports.deleteStaff = async (req, res) => {
    const result = await adminService.deleteStaff(req.params.id);
    res.status(200).json(result);
  };

  exports.getPatients = async (req, res) => {
    const result = await adminService.getPatients();
    res.status(200).json(result);
  };

