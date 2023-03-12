import { logger } from './logger.middleware';
import { auth } from './auth.middleware';

export default [auth, logger];
