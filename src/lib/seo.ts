import type { Metadata } from "next";

export const SITE_URL = "https://infrovel.ltd";
export const SITE_NAME = "Infrovel";

/**
 * Builds a page's metadata so title/description/canonical and the
 * Open Graph + Twitter card fields that mirror them can never drift apart.
 *
 * Without this, a page that only sets `title` + `alternates.canonical`
 * silently inherits the ROOT layout's openGraph/twitter object — so a
 * shared link to e.g. /pricing shows the homepage's title, description,
 * and even `og:url` in the preview card instead of its own.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  /** Short page title, e.g. "Pricing" — the root layout's template turns
   *  this into "Pricing · Infrovel" for the <title> tag automatically. */
  title: string;
  description: string;
  /** Route path starting with "/", e.g. "/pricing". */
  path: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const socialTitle = `${title} · ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}
