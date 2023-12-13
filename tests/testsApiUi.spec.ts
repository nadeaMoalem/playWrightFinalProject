// tests/testsApiUi.spec.ts
import { test } from '@playwright/test';
import InfraUi from '../src/infra/infraUi';
import InfraApi from '../src/infra/infraApi';

import LogicApi from '../src/logic/logicApi';

test('Combined UI and API Test', async ({ page }) => {
  const infraUi = new InfraUi(page);
  const infraApi = new InfraApi();
 
  const logicApi = new LogicApi(infraApi);

  await infraUi.navigateTo('https://www.terminalx.com/');
  await logicApi.performApiAction();
  // Combined assertions...
});
