FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copy package configuration files
COPY package*.json ./

# Install production-only dependencies to keep the image slim
RUN npm ci --omit=dev

# Grab the pre-built bundles compiled by Step 3 on your laptop host
COPY .next ./.next
COPY public ./public

EXPOSE 3000
CMD ["npm", "run", "start"]
