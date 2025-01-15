#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
nvm use 22
concurrently -n "ELIZA,CLIENT" -c "blue,green" \
  "cd ../eliza-starter && pnpm start" \
  "vite" 