import { NextResponse } from "next/server";
import { get } from "@src/lib/ApiService";
import { API, Events } from "@src/types/types";

export async function GET(req: Request) {
  const apiPath: API = {
    path: "events",
  };
  const response = await get(apiPath);

  const events: Events = await response;

  return NextResponse.json({ events });
}
