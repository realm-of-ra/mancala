
import CONFIG from "./src/constants/config";
import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: CONFIG.GRAPHQL_ENDPOINT,
  documents: ['src/queries/**/*.{graphql,ts,tsx}', 'src/**/*.{ts,tsx}'],
  generates: {
    'src/generated/graphql.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo'
      ],
      config: {
        withHooks: true,
        avoidOptionals: true, // Example configuration option to avoid optional fields
      }
    }
  }
};

export default config;
