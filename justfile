dock:
  pnpm i && pnpm run docker:build && cd docker/community && cp .env.example .env && docker compose -f docker-compose.yml up -d
