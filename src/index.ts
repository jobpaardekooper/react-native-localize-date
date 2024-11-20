import { NitroModules } from 'react-native-nitro-modules'
import { type RNLocalizeDate as RNLocalizeDateInterface, DateStyle } from './specs/RNLocalizeDate.nitro'
export { DateStyle }

const RNLocalizeDate = NitroModules.createHybridObject<RNLocalizeDateInterface>('RNLocalizeDate')

/**
 * Localizes the date into a date and time string according to the specified styles.
 * The result is platform dependent and will use the user's device settings
 * to automatically create a correctly localized date.
 *
 * For more information, refer to the corresponding documentation for
 * [iOS](https://developer.apple.com/documentation/foundation/dateformatter/1415241-localizedstring) and [Android](https://developer.android.com/reference/android/icu/text/DateFormat).
 * @param { Date } date The `Date` to convert.
 * @param { DateStyle } dateStyle The style to use for the date portion.
 * @param { DateStyle } timeStyle The style to use for the time portion.
 * @returns { string } The localized date and time string.
 */
export const localizeDateTime = (date: Date, dateStyle: DateStyle, timeStyle: DateStyle): string => {
    return RNLocalizeDate.localizeDateOnly(date.getTime(), dateStyle) + ' ' + RNLocalizeDate.localizeTimeOnly(date.getTime(), timeStyle)
}

/**
 * Localizes the date into a date string according to the specified styles.
 * The result is platform dependent and will use the user's device settings
 * to automatically create a correctly localized date.
 *
 * For more information, refer to the corresponding documentation for
 * [iOS](https://developer.apple.com/documentation/foundation/dateformatter/1415241-localizedstring) and [Android](https://developer.android.com/reference/android/icu/text/DateFormat).
 * @param { Date } date The `Date` to convert.
 * @param { DateStyle } dateStyle The style to use.
 * @returns { string } The localized date string.
 */
export const localizeDateOnly = (date: Date, dateStyle: DateStyle): string => {
    return RNLocalizeDate.localizeDateOnly(date.getTime(), dateStyle)
}

/**
 * Localizes the date into a time string according to the specified styles.
 * The result is platform dependent and will use the user's device settings
 * to automatically create a correctly localized date.
 *
 * For more information, refer to the corresponding documentation for
 * [iOS](https://developer.apple.com/documentation/foundation/dateformatter/1415241-localizedstring) and [Android](https://developer.android.com/reference/android/icu/text/DateFormat).
 * @param { Date } date The `Date` to convert.
 * @param { DateStyle } timeStyle The style to use.
 * @returns { string } The localized time string.
 */
export const localizeTimeOnly = (date: Date, timeStyle: DateStyle): string => {
    return RNLocalizeDate.localizeTimeOnly(date.getTime(), timeStyle)
}
