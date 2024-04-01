import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en-US", "fr"],
  defaultLocale: "en-US",
});

export const config = {
  matcher: ["/", "/(en-US|fr)/:path*"],
};
