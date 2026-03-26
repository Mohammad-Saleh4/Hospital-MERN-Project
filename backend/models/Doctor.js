import { setClerkApiKey } from "@clerk/clerk-sdk-node";
import mongoose from "mongoose";

const fields = {
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true, select: false },
  name: { type: String, required: true, trim: true },
  specialization: { type: String, default: "" },
  imageUrl: { type: String, default: null },
  imagePublicId: { type: String, default: null },
  experience: { type: String, default: "" },
  qualifications: { type: String, default: "" },
  location: { type: String, default: "" },
  about: { type: String, default: "" },
  fee: { type: Number, default: 0 },
  availability: {
    type: String,
    enum: ["Available", "Unavailable"],
    default: "Available",
  },
  schedule: { type: Map, of: [String], default: {} },
  success: { type: String, default: "" },
  patients: { type: String, default: "" },
  rating: { type: Number, default: 0 },
};
    
     
      // The second object contains schema options like timestamps
const options = {
  timestamps: true,
};

// Pass both to the Schema constructor
const doctorSchema = new mongoose.Schema(fields, options);

    doctorSchema.index({name: 'text', specialization: 'text'});
    const Doctor=mongoose.model.Doctor || mongoose.model('Doctor', doctorSchema);
    
export default Doctor;