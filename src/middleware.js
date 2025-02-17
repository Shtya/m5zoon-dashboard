
// import createMiddleware from 'next-intl/middleware';
// import { locales, localePrefix } from './navigation';

// export default createMiddleware({
//   locales,
//   localePrefix,
//   defaultLocale: 'ar'
// });

// // only applies this middleware to files in the app directory
// export const config = {
//   matcher: ['/((?!api|_next|.*\\..*).*)' , "/(ar|en)/:path*", "/"]
// };


import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar|en)/:path*']
};