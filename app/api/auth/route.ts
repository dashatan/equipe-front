import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const res = await req.json()
  const token = res?.token
  const c = cookies()
  if (token) c.set("authToken", token)
  else return NextResponse.json({ message: "token not found" }, { status: 404 })
  return NextResponse.json({ message: "token set" })
}

export async function DELETE() {
  const c = cookies()
  c.delete("authToken")
  return NextResponse.json({ message: "token removed" })
}
