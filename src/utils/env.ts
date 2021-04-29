import { APP_ENV } from '../../build/constants';
import envs from '../../build/env.json';
const envPrefix = envs[APP_ENV].BASEURL;
export default { envPrefix };
