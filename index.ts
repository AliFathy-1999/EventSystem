require("dotenv").config();
const app = require("./app");
const port = process.env.PORT || 3333;
app.listen(port,()=>{
    console.log(`Server Running here 👉 http://localhost:${port}`);
})
