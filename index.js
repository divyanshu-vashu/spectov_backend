const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const detailRoutes=require("./routes/details");
const accessApprovalRoutes=require("./routes/AccessApproval")
const transactionRoutes=require("./routes/Transaction")
const accessPermissionRoutes=require('./routes/AccessPermission')
const allRequest=require('./routes/AllRequest')
const rejectPermissionRoutes=require('./routes/RejectPermission')

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api",detailRoutes);
app.use("/api",accessApprovalRoutes)
app.use("/api",accessPermissionRoutes)
app.use("/api",rejectPermissionRoutes)

app.use("/api",transactionRoutes)
app.use("/api",allRequest);
const port =  8080;
app.listen(port, console.log(`Listening on port ${port}...`));