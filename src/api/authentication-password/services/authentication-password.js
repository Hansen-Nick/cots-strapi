'use strict';

/**
 * authentication-password service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::authentication-password.authentication-password');
