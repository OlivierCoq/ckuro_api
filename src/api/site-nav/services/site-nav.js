'use strict';

/**
 * site-nav service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::site-nav.site-nav');
