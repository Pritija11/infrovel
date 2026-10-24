import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Infrovel — Ship Code Faster. Waste Less Compute.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(circle at 20% 15%, rgba(59,130,246,0.12), transparent 50%), radial-gradient(circle at 85% 85%, rgba(255,170,1,0.12), transparent 45%)",
          }}
        />
        <img
          src={logoSrc}
          alt=""
          width={100}
          height={100}
          style={{ position: "relative" }}
        />
        <div
          style={{
            position: "relative",
            marginTop: 28,
            fontSize: 58,
            fontWeight: 800,
            letterSpacing: "-0.01em",
            color: "#18181b",
          }}
        >
          infrovel
        </div>
        <div
          style={{
            position: "relative",
            marginTop: 16,
            fontSize: 24,
            color: "#71717a",
          }}
        >
          Ship code faster. Waste less compute.
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            height: 6,
            background:
              "linear-gradient(90deg, #1432e1, #3b82f6)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
