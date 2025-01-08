import { ConfigPlugin, withInfoPlist } from 'expo/config-plugins'

const withLocalizations: ConfigPlugin<{ defaultLocale: string, supportedLocales: string[] }> = (config, { defaultLocale, supportedLocales }) => {
  config = withInfoPlist(config, local_config => {
    if (defaultLocale !== undefined) {
      local_config.modResults.CFBundleDevelopmentRegion = defaultLocale
    }
    if (supportedLocales !== undefined) {
      local_config.modResults.CFBundleLocalizations = supportedLocales
    }
    return local_config
  })

  return config
}

export default withLocalizations
