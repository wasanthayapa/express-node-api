const express = require('express');
const {getAllStudent,getStudentById,createStudent,updateStudent,deleteStudent} =require('../contoller/studentController')
const router=express.Router();


router.get('/',getAllStudent)

router.get('/:id',getStudentById)

router.post('/', createStudent)

// // update a student
router.put('/:id', updateStudent)

// delete a student

router.delete('/:id',deleteStudent)

module.exports=router;