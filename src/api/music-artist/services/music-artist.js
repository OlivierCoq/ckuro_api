'use strict';

/**
 * music-artist service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::music-artist.music-artist');
