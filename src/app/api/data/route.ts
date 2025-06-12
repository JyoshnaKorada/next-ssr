// pages/api/data.ts
import { queryDatabase } from "../../../lib/db";
import { NextResponse } from "next/server";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     const rows = await queryDatabase("SELECT Name FROM [Config.Role]");
//     res.status(200).json(rows);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch data" });
//   }
// }
// export default function handler(req, res) {
//   res.status(200).json({ message: "Hello from Next.js API!" });
// }

//req is short for request
export async function GET() {
  try {
    const rows = await queryDatabase("SELECT Name FROM [Config.Role]");
    return NextResponse.json(rows);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
