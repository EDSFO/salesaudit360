import type { Metadata } from 'next';
import './globals.css';
const title = 'Sales Audit 360 | Consultoria Comercial para PMEs';
const description = 'Do diagnóstico ao crescimento em 360°. Consultoria comercial para pequenas e médias empresas: processos, CRM, indicadores, capacitação e acompanhamento.';
export const metadata: Metadata = {
 metadataBase: new URL('https://sales-audit-360.royal-shell-1299.chatgpt.site'),
 title, description,
 icons: { icon: '/favicon.svg' },
 robots: { index: false, follow: false },
 openGraph: { title, description, type: 'website', locale: 'pt_BR', siteName: 'Sales Audit 360', url: 'https://sales-audit-360.royal-shell-1299.chatgpt.site', images: [{ url: '/og.png', width: 1734, height: 907, alt: 'Sales Audit 360 — Do diagnóstico ao crescimento em 360°.' }] },
 twitter: { card: 'summary_large_image', title, description, images: ['/og.png'] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
