import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://mongo:mongo@librarypuc.hgecwdf.mongodb.net/?retryWrites=true&w=majority");
let mongodb = mongoose.connection;

export default mongodb;