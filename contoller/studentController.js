const Student = require('../model/student');

const getAllStudent = async (req, res) => {
    try {
        const students = await Student.find({});
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findById(id);
        if (!student) {
            return res.status(404).json({ message: `cannot find any student with ID ${id}` })
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createStudent = async (req, res) => {
    try {
        const student = await Student.create(req.body)
        res.status(200).json(student);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
}

const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndUpdate(id, req.body);
        // we cannot find any product in database
        if (!student) {
            return res.status(404).json({ message: `cannot find any student with ID ${id}` })
        }
        const updatedStudent = await Student.findById(id);
        res.status(200).json(updatedStudent);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndDelete(id);
        if (!student) {
            return res.status(404).json({ message: `cannot find any student with ID ${id}` })
        }
        res.status(200).json(student);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAllStudent,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
}