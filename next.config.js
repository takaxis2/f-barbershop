/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    GOOGLE_OAUTH_CLIENT_ID:process.env.GOOGLE_OAUTH_CLIENT_ID,
    GREETING:process.env.GREETING,
    SOURCE_PATH:process.env.SOURCE_PATH,
    DESTINATION_URL:process.env.DESTINATION_URL
  },
  async rewrites(){
    return[
      {
        source:process.env.SOURCE_PATH,
        destination:process.env.DESTINATION_URL
      }
    ]
  }
}

module.exports = nextConfig
