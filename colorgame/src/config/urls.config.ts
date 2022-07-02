export const serverUrl =
  process.env.NODE_ENV === 'production'
    ? 'http://ja0vm00006.apac.bosch.com:3021'
    : 'http://192.168.0.168:3021';