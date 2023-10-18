import decode from "jwt-decode";

export function getDateExpiration(jwtToken) {
  const token = decode(jwtToken);
  return new Date(token.exp * 1000);
}
