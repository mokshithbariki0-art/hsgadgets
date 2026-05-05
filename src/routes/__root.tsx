import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Splash } from "@/components/site/Splash";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      <div className="aurora absolute inset-0 opacity-60" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[var(--azure)]/30 blur-3xl" />

      <div className="relative z-10 max-w-xl text-center">
        <div className="font-display text-[clamp(7rem,22vw,16rem)] leading-none tracking-tight text-gradient italic">
          404
        </div>
        <h2 className="-mt-4 font-display text-3xl text-[var(--ink)] sm:text-4xl">
          This page wandered off.
        </h2>
        <p className="mt-4 text-sm text-muted-foreground sm:text-base">
          The link you followed may be broken, or the page may have been moved. Let&rsquo;s get you back to the good stuff.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            to="/"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-medium text-white glow-ring"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[var(--electric)] via-[var(--azure)] to-[var(--electric)] transition-transform duration-700 group-hover:translate-x-0" />
            <span className="relative">Back to home</span>
          </Link>
          <a
            href="https://wa.me/c/919945540050"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--ink)]/15 bg-white/60 px-6 py-3 text-sm font-medium text-[var(--ink)] backdrop-blur transition-colors hover:bg-white"
          >
            Browse catalogue
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "HS Gadgets" },
      { name: "description", content: "HS Gadgets Showcase is a visually striking website for a gadget reseller, featuring unique design elements and a blue/white color scheme." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "HS Gadgets" },
      { property: "og:description", content: "HS Gadgets Showcase is a visually striking website for a gadget reseller, featuring unique design elements and a blue/white color scheme." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "HS Gadgets" },
      { name: "twitter:description", content: "HS Gadgets Showcase is a visually striking website for a gadget reseller, featuring unique design elements and a blue/white color scheme." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/92f46b99-857f-45c4-a6b1-f1222d75a489/id-preview-0d6c021c--2773621b-f2a5-4e80-bef1-521bbc64b6f6.lovable.app-1777977282878.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/92f46b99-857f-45c4-a6b1-f1222d75a489/id-preview-0d6c021c--2773621b-f2a5-4e80-bef1-521bbc64b6f6.lovable.app-1777977282878.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Splash />
      <Outlet />
    </>
  );
}
