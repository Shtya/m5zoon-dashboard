import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.js");

const nextConfig = {
	// reactStrictMode: true,
	// output: 'export',
};



export default withNextIntl(nextConfig);

