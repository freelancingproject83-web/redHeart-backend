import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userId: { 
      type: String, 
      required: true, 
      unique: true 
    },
    phone: { 
      type: String, 
      required: true, 
      unique: true 
    },
    name: { 
      type: String, 
      default: null 
    },
    email: { 
      type: String, 
      default: null 
    },
    isVerified: { 
      type: Boolean, 
      default: false 
    },
    role: { 
      type: String, 
      default: "user", 
      enum: ["user", "admin"] 
    },
    tokens: [
      {
        token: { type: String },
        createdAt: { type: Date, default: Date.now }
      }
    ]
  },
  { timestamps: true } // adds createdAt and updatedAt
);

export default mongoose.model("User", userSchema);
