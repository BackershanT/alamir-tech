export interface GpsCoordinates {
  lat: number;
  lng: number;
}

export interface MapCoordinates {
  x: number;
  y: number;
}

export interface TeamLead {
  name: string;
  role: string;
  avatar: string;
  status: "available" | "in-meeting" | "online";
}

export interface HubMetrics {
  headcount: number;
  activeProjects: number;
  satisfactionRate: string;
  uptime: string;
  latencyMs: number;
}

export interface HubLocation {
  id: string;
  city: string;
  country: string;
  region: "americas" | "europe" | "middle-east" | "apac";
  centerType: string;
  coordinates: GpsCoordinates;
  svgCoords?: MapCoordinates;
  teamLead: TeamLead;
  metrics: HubMetrics;
  specialties: string[];
  connections: string[]; // IDs of other hubs to draw live connection arcs to
}

export interface HubsApiResponse {
  success: boolean;
  timestamp: string;
  source: string;
  count: number;
  data: HubLocation[];
}
