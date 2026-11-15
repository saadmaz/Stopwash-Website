import { describe, expect, it } from "vitest";
import server from "../server";

describe("server entry", () => {
  it("permanently redirects www.stopwash.lk to stopwash.lk, keeping the path and query", async () => {
    const res = await server.fetch(new Request("https://www.stopwash.lk/services?ref=ad"), {}, {});
    expect(res.status).toBe(301);
    expect(res.headers.get("location")).toBe("https://stopwash.lk/services?ref=ad");
  });

  it("upgrades an http www request straight to https on the canonical host", async () => {
    const res = await server.fetch(new Request("http://www.stopwash.lk/"), {}, {});
    expect(res.status).toBe(301);
    expect(res.headers.get("location")).toBe("https://stopwash.lk/");
  });
});
