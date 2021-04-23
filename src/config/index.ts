// server credential
export const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME;
export const SERVER_PORT = process.env.PORT;

// mongodb credential
export const MONGO_OPTIONS = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  socketTimeoutMS: 30000,
  keepAlive: true,
  poolSize: 50,
  autoIndex: false,
  retryWrites: false,
};

export const MONGO_URL = "mongodb://127.0.0.1:27017/"
