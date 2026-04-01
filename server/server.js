import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import chatRouter from "./routes/chatRoute.js";
import messageRouter from "./routes/messageRoute.js";
import creditRouter from "./routes/creditRoute.js";
import { stripeWebhooks } from "./controllers/webhooks.js";

const app = express();

await connectDB();

// Stripe Webhoooks
app.post("/api/stripe", express.raw({type:"application/json"}), stripeWebhooks )

// Middleware 
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res ) => {
    res.send("QuickGpt Website Server is Live...")
})

app.use("/api/user", userRouter)
app.use("/api/chat", chatRouter)
app.use("/api/message", messageRouter)
app.use("/api/credit", creditRouter)





const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT} `);
})








