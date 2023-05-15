type EnvKey = 'PORT' | 'CORS_ORIGINS' | 'CADSHOUSE_AUTH_URI' | 'POSTGRES_URI' | 'NODE_ENV' | 'API_KEY';

export default function getEnv(key: EnvKey) {
  return process.env[key] || '';
}
