const { withInfoPlist } = require('expo/config-plugins');

/**
 * @type {import('expo/config-plugins').ConfigPlugin<{
 *   defaultLocale?: string,
 *   supportedLocales?: string[],
 * } | undefined>}
 */
const withLocalizations = (config, { defaultLocale, supportedLocales } = {}) =>
  withInfoPlist(config, (modConfig) => {
    if (defaultLocale !== undefined) {
      modConfig.modResults.CFBundleDevelopmentRegion = defaultLocale;
    }
    if (supportedLocales !== undefined) {
      modConfig.modResults.CFBundleLocalizations = supportedLocales;
    }
    return modConfig;
  });

module.exports = withLocalizations;
