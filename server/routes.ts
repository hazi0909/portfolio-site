import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmail, type ContactFormData } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      console.log("📩 Received contact form data:", req.body);
      
      const { name, email, message }: ContactFormData = req.body;

      // Basic validation
      if (!name || !email || !message) {
        console.log("❌ Validation failed: missing fields");
        return res.status(400).json({
          success: false,
          message: "All fields are required"
        });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        console.log("❌ Validation failed: invalid email format");
        return res.status(400).json({
          success: false,
          message: "Please enter a valid email address"
        });
      }

      // Send email
      console.log("📤 Attempting to send email...");
      const result = await sendContactEmail({ name, email, message });
      console.log("📊 Email result:", result);
      
      res.json(result);
    } catch (error) {
      console.error("❌ Contact form error:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
