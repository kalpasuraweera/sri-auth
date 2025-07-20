import { test, expect } from "bun:test";



test("test api", async () => {
  const res = await fetch("http://localhost:3000/register", {
    method: "POST",
    body: JSON.stringify({ email: "kalpa2@example.com", password: "123" }),
    headers: { "Content-Type": "application/json" },
  });

  const body = await res.json();
  expect(body.message).toBe("Success");
});
