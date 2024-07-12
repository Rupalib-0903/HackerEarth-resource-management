const express = require("express");
const asyncHandler = require("express-async-handler");
const details = require("../model/FormModel");


const DetailsForm = asyncHandler(async (req, res) => {
    const { NameCR, Classroom, Time, ResourceType, FacultyIncharge } = req.body;
    console.log(req.body)
    if (
      !NameCR ||
      !Classroom ||
      !Time ||
      !ResourceType ||
      !FacultyIncharge
    ) {
      res.json(412, { message: "One or more of the required fields are empty" });
    }
  
    const newdet = await details.create({
        NameCR,
  
        Classroom,
  
        Time,
  
        ResourceType,
  
        FacultyIncharge,
    });
  
    console.log(`logged details of`);
  
    res.json({ message: "Registered the form" });
  });
  
  module.exports = {DetailsForm}
