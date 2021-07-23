import mongoose,{ Schema } from 'mongoose'

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: String,
    content: {
        type: String,
        required: true
    },
    title_img: {
        type: String,
        default: 'https://cdn.pixabay.com/photo/2021/06/19/17/51/italy-6349105_960_720.jpg'

    },
    content_img: {
        type: [{ url: String }]
    },
    hidden: {
        type: Boolean,
        default: false
    },
    meta: {
        votes: {
            type: Number,
            default: 0
        },
        favs: {
            type: Number,
            default: 0
        }
    }
},{
    timestamps: true
})

const Blog = mongoose.model('Blog', blogSchema);

export default  Blog