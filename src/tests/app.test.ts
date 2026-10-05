
import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../app.js";

describe("GET /home/welcome", () => {
  it("should return a welcome message", async () => {
    const response = await request(app).get("/home/welcome");

    expect(response.status).toBe(200);
    expect(response.text).toBe("welcome to first cd/cd ");
    expect(response.headers["content-type"]).toMatch(/text\/plain/);
  });
});
