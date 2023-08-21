import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const res = await req.json()
  const jwt = res?.jwt
  console.log(jwt)
  const c = cookies()
  if (jwt) c.set("jwt", jwt)
  else return NextResponse.error()
  return NextResponse.json({ message: "cookie set" })
}

export async function DELETE() {
  const c = cookies()
  c.delete("jwt")
  return NextResponse.json({ message: "cookie removed" })
}
