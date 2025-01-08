import { ConfigPlugin } from 'expo/config-plugins';
declare const withLocalizations: ConfigPlugin<{
    defaultLocale: string;
    supportedLocales: string[];
}>;
export default withLocalizations;
