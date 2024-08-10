#!/bin/bash
set -e

# Profile
if [ $# -ge 1 ]; then
  export PROFILE=$1
else
  export PROFILE="sepolia"
fi

#-----------------
# env setup
#
export WORLD_NAME_SEED="mancala"
export MANIFEST_FILE_PATH="./manifests/$PROFILE/manifest.json"
export BINDINGS_PATH="./bindings/typescript"
export CLIENT_PATH="../client/src/dojo/generated/$PROFILE"
export PROJECT_NAME=$(toml get Scarb.toml --raw tool.dojo.world.name)
export WORLD_ADDRESS=$(toml get Scarb.toml --raw profile.$PROFILE.tool.dojo.env.world_address)
export RPC_URL=$(toml get Scarb.toml --raw profile.$PROFILE.tool.dojo.env.rpc_url)

if [[
  -z "$PROFILE" ||
  -z "$MANIFEST_FILE_PATH" ||
  "$WORLD_ADDRESS" != "0x"* ||
  "$RPC_URL" != "http"*
]]; then
  echo "! Missing data 👎"
  exit 1
fi

echo "------------------------------------------------------------------------------"
echo ""
echo "PROJECT: $PROJECT_NAME"
echo "PROFILE: $PROFILE"
echo ""

#-----------------
# build
#
# if [[ "$PROFILE" != "dev" ]]; then
  echo "------------------------------------------------------------------------------"
  echo "Cleaning..."
  sozo -P $PROFILE clean
  echo "Building..."
  sozo -P $PROFILE build
# fi

#-----------------
# migrate
#
echo "------------------------------------------------------------------------------"
echo "Migrating..."
# sozo --profile $PROFILE migrate plan --world $WORLD_ADDRESS
# exit 0
sozo -P $PROFILE migrate apply --world $WORLD_ADDRESS --name $WORLD_NAME_SEED

#-----------------
# auth write
#
# scripts/default_auth.sh $PROFILE


#------------------------
# copy manifest to client
#
echo "Copying manifest [$MANIFEST_FILE_PATH] to [$CLIENT_PATH/]"
mkdir -p $CLIENT_PATH
cp $MANIFEST_FILE_PATH $CLIENT_PATH/

#------------------------
# generate components
#
cd ../client
npm run create-components --profile=$PROFILE $RPC_URL $WORLD_ADDRESS

# list copied files
ls -ld $CLIENT_PATH/* | grep -E 'ts|json'

#------------------
echo "--- DONE! 👍"
