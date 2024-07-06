const mongoose = require("mongoose")
const testSchema = new mongoose.Schema({
    id : Number,
    category: String,
    slug: String,
    heading: String,
    subHeading: String,
    startDate: Date,
    endDate: Date,
    details: String,
    coverPhoto: String,
    documentLink: String,
    images: [String],
    status: Boolean,
    notice: Boolean,
    highlight: Boolean,
}, {
    timestamps: true,
})

testSchema.pre('save', async function (next) {
    const doc = this;
    if (!doc.isNew) {
        return next();
    }

    try {
        const lastDoc = await mongoose.model('test').findOne({}, {}, { sort: { 'id': -1 } });
        const lastId = lastDoc ? lastDoc.id : 0;
        doc.id = lastId + 1;
        next();
    } catch (error) {
        return next(error);
    }
});


module.exports = mongoose.model("news", testSchema)