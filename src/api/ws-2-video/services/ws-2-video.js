'use strict';

/**
 * ws-2-video service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ws-2-video.ws-2-video');
