'use strict';

/**
 * music-interface service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::music-interface.music-interface');
