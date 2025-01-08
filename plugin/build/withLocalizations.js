"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_plugins_1 = require("expo/config-plugins");
const withLocalizations = (config, { defaultLocale, supportedLocales }) => {
    config = (0, config_plugins_1.withInfoPlist)(config, local_config => {
        if (defaultLocale !== undefined) {
            local_config.modResults.CFBundleDevelopmentRegion = defaultLocale;
        }
        if (supportedLocales !== undefined) {
            local_config.modResults.CFBundleLocalizations = supportedLocales;
        }
        return local_config;
    });
    return config;
};
exports.default = withLocalizations;
