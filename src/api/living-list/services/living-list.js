'use strict';

/**
 * living-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::living-list.living-list');
