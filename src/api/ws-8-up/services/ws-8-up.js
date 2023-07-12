'use strict';

/**
 * ws-8-up service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ws-8-up.ws-8-up');
