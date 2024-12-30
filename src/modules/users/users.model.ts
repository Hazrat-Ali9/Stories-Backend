import { model, Schema } from "mongoose";

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    socialLogin: {
        type: Boolean
    },
    about: {
        type: String,
    },
    password: {
        type: String,
    },
    avatar: {
        type: String,
        required: true
    },
    social: {
        type: Object
    },
    token: {
        type: String
    },
    role: {
        type: String,
        default: "user"
    }
}, {
    timestamps: true
})

const subscribeSchema = new Schema({
   email: {
       type: String,
       required: true,
       unique: true
   }
}, {
    timestamps: true
})

const User = model('User', schema)

export const Subscribe = model('Subscribe', subscribeSchema)

export default User