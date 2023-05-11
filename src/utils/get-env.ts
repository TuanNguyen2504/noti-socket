type EnvKey = 'PORT' | 'CORS_ORIGINS' | 'AUTH_BE_URI' | 'POSTGRES_URI' | 'NODE_ENV' | 'API_KEY';

export default function getEnv(key: EnvKey) {
  return process.env[key] || '';
}
