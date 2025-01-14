#!/bin/bash
. ~/.nvm/nvm.sh  # Load nvm
nvm use 23
concurrently -n "CLIENT,ELIZA" -c "blue,green" \
  "vite" \
  "cd ../eliza-starter && pnpm start" 