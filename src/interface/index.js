
import { getAncestor } from '../lib/windows';

export * from './client';
export * from './server';
export * from './config';

import * as windowUtil from '../lib/windows';

export let parent = getAncestor();

export { resetListeners as reset } from '../drivers';

export { openBridge, bridgeRequired, linkUrl, isBridge } from '../bridge';

export { util } from '../lib/util';

export let winutil = windowUtil;
