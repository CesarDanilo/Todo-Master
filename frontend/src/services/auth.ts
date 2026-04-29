import { api } from "../lib/api"

export async function loginRequest(data: {
  username: string
  password: string
}) {
  const res = await api.post("/auth/login", data)
  return res.data
}

export async function registerRequest(data: {
  username: string
  password: string
}) {
  const res = await api.post("/auth/register", data)
  return res.data
}