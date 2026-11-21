import { NextResponse } from "next/server";
import { GLOBAL_HUBS_DATA } from "@/lib/hubs-data";
import { HubsApiResponse } from "@/lib/types/hub";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const regionFilter = searchParams.get("region");
  const idFilter = searchParams.get("id");

  let filtered = [...GLOBAL_HUBS_DATA];

  if (regionFilter && regionFilter !== "all") {
    filtered = filtered.filter((h) => h.region === regionFilter);
  }

  if (idFilter) {
    filtered = filtered.filter((h) => h.id === idFilter);
  }

  const responsePayload: HubsApiResponse = {
    success: true,
    timestamp: new Date().toISOString(),
    source: "Alamir Tech Global Telemetry Service (Backend)",
    count: filtered.length,
    data: filtered,
  };

  return NextResponse.json(responsePayload, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
