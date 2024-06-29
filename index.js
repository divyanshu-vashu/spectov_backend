// const express = require("express");
// const app = express();
// const cors = require("cors");
// const connection = require("./db");
// const userRoutes = require("./routes/users");
// const authRoutes = require("./routes/auth");
// const detailRoutes=require("./routes/details");
// const accessApprovalRoutes=require("./routes/AccessApproval")
// const transactionRoutes=require("./routes/Transaction")
// const accessPermissionRoutes=require('./routes/AccessPermission')
// const allRequest=require('./routes/AllRequest')
// const rejectPermissionRoutes=require('./routes/RejectPermission')
// const forgetPassword= require("./routes/ForgetPassword")
// const referId=require("./routes/referId")
// const referCount=require("./routes/countRefer")

// connection();
// app.use(express.json());
// app.use(cors());


// app.use("/api/users", userRoutes);
// app.use("/api/auth", authRoutes);
// app.use("/api",detailRoutes);
// app.use("/api",accessApprovalRoutes)
// app.use("/api",accessPermissionRoutes)
// app.use("/api",rejectPermissionRoutes)

// app.use("/api",transactionRoutes)
// app.use("/api",allRequest);
// app.use("/api",forgetPassword);
// app.use("/api",referId);
// app.use("/api",referCount);

// const port =  8080;
// app.listen(port, console.log(`Listening on port ${port}...`));

const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const detailRoutes = require("./routes/details");
const accessApprovalRoutes = require("./routes/AccessApproval");
const transactionRoutes = require("./routes/Transaction");
const accessPermissionRoutes = require('./routes/AccessPermission');
const allRequest = require('./routes/AllRequest');
const rejectPermissionRoutes = require('./routes/RejectPermission');
const forgetPassword = require("./routes/ForgetPassword");
const referId = require("./routes/referId");
const referCount = require("./routes/countRefer");
require('dotenv').config();  // Load environment variables from .env file

connection();
app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api", detailRoutes);
app.use("/api", accessApprovalRoutes);
app.use("/api", accessPermissionRoutes);
app.use("/api", rejectPermissionRoutes);
app.use("/api", transactionRoutes);
app.use("/api", allRequest);
app.use("/api", forgetPassword);
app.use("/api", referId);
app.use("/api", referCount);

const port = process.env.PORT || 8080;  // Use the port from environment variable or default to 8080
app.listen(port, () => console.log(`Listening on port ${port}...`));
