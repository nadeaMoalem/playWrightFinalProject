// tests/testApi.spec.ts
import { test } from '@playwright/test';
import InfraApi from '../src/infra/infraApi';
import LogicApi from '../src/logic/logicApi';

test('API Test 1', async () => {
  const infraApi = new InfraApi();
  const logicApi = new LogicApi(infraApi);

  await logicApi.performApiAction();
  // API assertions...
});
