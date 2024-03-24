
const mutipleMongooseToObject = (mongooses) => mongooses.map(mongoose => mongoose.toObject());
const mongooseToObject = (mongoose) => (mongoose ? mongoose.toObject() : mongoose);

export default {
    mutipleMongooseToObject,
    mongooseToObject,
}