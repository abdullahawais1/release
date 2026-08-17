import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "88px",
          background: "#08090c",
          backgroundImage:
            "radial-gradient(60% 60% at 15% 0%, rgba(47,79,219,0.28) 0%, rgba(47,79,219,0) 70%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
          <svg width="52" height="52" viewBox="0 0 32 32" fill="none">
            <path
              d="M6 20.5L16 9L26 20.5"
              stroke="url(#g)"
              strokeWidth="3.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M10.5 25.5H21.5" stroke="#e5e7eb" strokeWidth="3.4" strokeLinecap="round" />
            <defs>
              <linearGradient id="g" x1="4" y1="22" x2="28" y2="8" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#2f4fdb" />
                <stop offset="1" stopColor="#7b5cf5" />
              </linearGradient>
            </defs>
          </svg>
          <span style={{ fontSize: 34, fontWeight: 600, color: "#f3f4f6" }}>TestForge</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 600,
            color: "#f3f4f6",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            maxWidth: 980,
          }}
        >
          Ship Faster. Test Smarter.
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#9aa1ae", marginTop: 28, maxWidth: 820 }}>
          QA automation and quality engineering for growing software teams.
        </div>
      </div>
    ),
    { ...size }
  );
}
