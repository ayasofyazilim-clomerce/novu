dockstag:
  pnpm i && pnpm run docker:build && cd docker/community && cp .env.example .env && docker compose -f docker-compose.yml up -d

dockb:
  pnpm i && pnpm run docker:build && cd docker/local && cp ../.env.example .env
dockup:
  cd docker/local && docker compose -f docker-compose.yml up -d
