import Layout from '@/components/templates/Layout';
import "./style.css"
import "./fonts.scss"

import { NextIntlClientProvider, useMessages } from 'next-intl';

export const metadata = {
    title: 'مخزون | حلول التجارة الإلكترونية المتكاملة',
    description: 'شغلك أسهل ونجاحك أسرع بمنصة مثالية تجعلنا شريكك الأمثل في عالم التجارة الإلكترونية. نقدم لك حلولاً مبتكرة ودعماً دائماً لتضمن أن متجرك الإلكتروني يتحول إلى مرحلة نجاح بفضل منصة متكاملة توفر كل ما تحتاجه من منتجات، شحن وتخزين إلى خدمة العملاء.',
    icons: { icon: '/imgs/fav.png' },
    openGraph: {
        title: 'مخزون | حلول التجارة الإلكترونية المتكاملة',
        description: 'شغلك أسهل ونجاحك أسرع بمنصة مثالية تجعلنا شريكك الأمثل في عالم التجارة الإلكترونية. نقدم لك حلولاً مبتكرة ودعماً دائماً لتضمن أن متجرك الإلكتروني يتحول إلى مرحلة نجاح بفضل منصة متكاملة توفر كل ما تحتاجه من منتجات، شحن وتخزين إلى خدمة العملاء.',
        url: 'https://m5zoon.com/',
        type: 'website',
        images: [
            {
                url: 'https://m5zoon.com/imgs/logo.webp',
                width: 1200,
                height: 630,
                alt: 'مخزون | حلول التجارة الإلكترونية المتكاملة',
            },
        ],
        twitter: {
            card: 'summary_large_image',
            title: 'مخزون | حلول التجارة الإلكترونية المتكاملة',
            description: 'شغلك أسهل ونجاحك أسرع بمنصة مثالية تجعلنا شريكك الأمثل في عالم التجارة الإلكترونية. نقدم لك حلولاً مبتكرة ودعماً دائماً لتضمن أن متجرك الإلكتروني يتحول إلى مرحلة نجاح بفضل منصة متكاملة توفر كل ما تحتاجه من منتجات، شحن وتخزين إلى خدمة العملاء.',
            images: ['https://m5zoon.com/imgs/logo.webp'],
        },
    },
};


export default function RootLayout({ children, params: { locale } }) {
    const messages = useMessages();

    return (
        <html lang={locale} dir={locale == 'en' ? 'ltr' : 'rtl'}>
            <body >
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <main>
                        <Layout>{children}</Layout>
                    </main>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
