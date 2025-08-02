import { auth } from "../src/lib/auth"; // import your Better Auth instance
import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const isAuthed = await auth.api
    .getSession({
      headers: context.request.headers,
    })
    .catch((e) => {
      return null;
    })
  if (context.url.pathname == "/" && isAuthed) {
    return context.redirect("/dashboard");
  } else if (context.url.pathname === "/dashboard" && !isAuthed) {
    return context.redirect("/");
  }
  return next();
});