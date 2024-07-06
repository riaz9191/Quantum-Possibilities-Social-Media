const testSchema = require("../models/news.model");

const setTest = async (req, res) => {
    const data = req.body;
    try {
        const saveData = new testSchema(data);
        await saveData.save();
        res.status(200).json({ statusCode: 1, message: "Data saved successfully.", status: "success ", data: saveData });
    } catch (error) {
        res.status(200).json({ statusCode: 2, message: error.message, status: "unsuccess", data: null });
    }
}

const getTest = async (req, res) => {
    try {
        const result = await testSchema.find();
        res.status(200).json({ statusCode: 1, message: "Data retrieved successfully.", status: "success", data: result });
    } catch (error) {
        res.status(200).json({ statusCode: 2, message: error.message, status: "unsuccess", data: null });
    }
}

const getTestOne = async (req, res) => {
    const id = req.params.id
    try {
        const result = await testSchema.findOne({ _id: id });
        res.status(200).json({ statusCode: 1, message: "Data retrieved successfully.", status: "success", data: result });
    } catch (error) {
        res.status(200).json({ statusCode: 2, message: error.message, status: "unsuccess", data: null });
    }
}

const updateTest = async (req, res) => {
    const id = req.params.id;
    const updateData = req.body;

    try {
        const result = await testSchema.findOneAndUpdate(
            { _id: id }, // Filter to find the document by its ID
            { $set: updateData }, // Update the document with the provided data
            { new: true } // Return the updated document after the update operation
        );
        console.log(result)

        if (!result) {
            return res.status(404).json({ statusCode: 0, message: "Document not found.", status: "error", data: null });
        }

        res.status(200).json({ statusCode: 1, message: "Data updated successfully.", status: "success", data: result });
    } catch (error) {
        res.status(500).json({ statusCode: 2, message: error.message, status: "error", data: null });
    }
}


const deleteTest = async (req, res) => {
    const id = req.params.id;

    try {
        const result = await testSchema.deleteOne({ _id: id });

        if (result.deletedCount === 0) {
            return res.status(404).json({ statusCode: 0, message: "Document not found.", status: "error", data: null });
        }
        res.status(200).json({ statusCode: 1, message: "Data deleted successfully.", status: "success", data: result });
    } catch (error) {
        // If an error occurs, send error response
        res.status(500).json({ statusCode: 2, message: error.message, status: "error", data: null });
    }
}

module.exports = { setTest, getTest, getTestOne, updateTest, deleteTest };
