'use strict';

/**
 * comment-section service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::comment-section.comment-section');
