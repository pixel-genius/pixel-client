/** @type {import('next').NextConfig} */

// https://s3-alpha-sig.figma.com/img/ce79/f737/ea54458a8146c49352213b25ce57f7b6?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qqR8nckdLaYWUmx~ux-Tr2lG85ngiw5DrwWsMWH5AboiB8bmgVFk3ABciKTo4iNrJyyiewFKHqDn2~ggpyk-zxXIWVA9ArjUxExTRKKMkWKqijujvceqMJT7ZStrUC1l4GgigHdTpKaKot0tj0COe0Wzgosy7Hrn~5O8BreZGmvNGtwHyxbQmtF~ykzzv5AWntDMA~k326WShEbbtjrtEsSOX4o74Sx-eW8yBXq334BP7Kupiy9O6uprHsBimZ1iQ554twGyJoTz~~Fa64Brvqp1uqaFv25MDlDG2K7IbrtCmCvlGQkGWdeIg~ZrlOm0KXW1En~AT2vQYOZApk0mjA__
//  config src image
const nextConfig = {
  transpilePackages: ["@repo/ui"],
  images: {
    domains: ["s3-alpha-sig.figma.com"],
  },
};

export default nextConfig;
