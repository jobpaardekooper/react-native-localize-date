import type { HybridObject } from 'react-native-nitro-modules'

/**
 * Enum representing the different styles for date and time localization.
 * Each value maps to the corresponding style of the current platform.
 *
 * For more information, refer to the corresponding documentation for
 * [iOS](https://developer.apple.com/documentation/foundation/dateformatter/style) and [Android](https://developer.android.com/reference/android/icu/text/DateFormat#:~:text=The%20exact%20result%20depends%20on%20the%20locale%2C%20but%20generally).
 */
export enum DateStyle {
    SHORT,
    MEDIUM,
    LONG,
    FULL,
}

export interface RNLocalizeDate extends HybridObject<{ ios: 'swift', android: 'kotlin' }> {
    localizeTimeOnly(time: number, timeStyle: DateStyle): string
    localizeDateOnly(time: number, dateStyle: DateStyle): string
}
