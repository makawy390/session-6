const {validationResult} = require('express-validator'); // express-validator
// let courses = require('../data/data');
const Course = require('../models/courses.model');


const getAllCourses =async (req, res)=>{
    // get all courses from DB
    const courses = await Course.find();
    res.json( {data : courses})
}
const getSingleCourse = async (req,res)=>{

try {
    const findCourse = await Course.findById(req.params.id)

    if (!findCourse) {
        return res.status(404).json({mesg : "Course not found"})
    }
    res.json(findCourse);
} catch (error) {
    res.status(400).json({mesg : "invalid object id"})
}

}


const createCourse = async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json(errors.array())
    }
    const newCourse =  new Course(req.body)
    await newCourse.save(); 
res.status(201).json(newCourse)
}




const updatedCourse = async (req,res)=>{
const _id = req.params.id;
try {
    const findCourseAndUpdata = await Course.updateOne({_id} , {$set : {...req.body}});
    return res.status(200).json({findCourseAndUpdata})
} catch (e) {
    return res.status(400).json({error: e})
}
}
const deletedCourse = async (req,res)=>{
    const courseId = req.params.id;
    try {
        const delCourse = await Course.deleteOne({_id : courseId})
       return res.status(200).json({ mesg : `course by id : ${req.params.id} is deleted`});
    } catch (error) {
        return res.status(400).json({error})
    }

}
module.exports = {
    getAllCourses,
    getSingleCourse,
    createCourse,
    updatedCourse,
    deletedCourse
}