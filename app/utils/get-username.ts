export function getUsername(request: Request, params: { username?: string }) {
  const url = new URL(request.url);
  return params.username ?? url.hostname.includes(".")
    ? url.hostname.split(".").at(-2)
    : url.hostname;
}
