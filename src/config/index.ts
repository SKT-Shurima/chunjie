/*
 * @Description: 区分生产环境和开发环境
 * @Author: liyongshuai
 */
import configDev from './config.dev';
import configProd from './config.prod';

export default process.env.NODE_ENV === 'development' ? configDev : configProd;
