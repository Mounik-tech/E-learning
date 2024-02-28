import express  from "express"
import mongoose  from "mongoose"
import cors from "cors"
import User from "./models/User.js"

const app = express()
app.use(express.json())
app.use(cors())
// db connect 
const uri = "mongodb+srv://Mounik:sElfUpifaqhrnagE@cluster0.oaw11vk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(uri)
.then(() => console.log ("Mongodb connected"))
.catch((err)=>console.error(err))



//api
app.get("/api/user", async(req,res) => {
    res.json (await User.find())
})

app.post("/api/user", async (req,res) =>{
   await User.create (req.body)
   res.json("success")
})

app.post("/api/user/auth", async (req,res) =>{
    const user = await User.findOne(req.body)
    res.json(user)
 })

 const PORT = "3000"
app.listen(PORT,() => {
    console.log(`server started on http://localhost:${PORT}`)

})