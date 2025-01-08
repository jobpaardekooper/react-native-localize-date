import type { HybridObject } from 'react-native-nitro-modules'

/**
 * Enum representing the different styles for date and time localization.
 * Each value maps to the corresponding style of the current platform.
 *
 * For more information, refer to the corresponding documentation for
 * [iOS](https://developer.apple.com/documentation/foundation/dateformatter/style) and [Android](https://developer.android.com/reference/android/icu/text/DateFormat#:~:text=The%20exact%20result%20depends%20on%20the%20locale%2C%20but%20generally).
 */
export enum DateStyle {
    NONE,
    SHORT,
    MEDIUM,
    LONG,
    FULL,
}

/*
    The use of this is a temporary workaround for this swift compiler bug: https://github.com/swiftlang/swift/issues/76949
    A reference to the corresponding issue in Niro is: https://github.com/mrousavy/nitro/issues/459

    After this is fixed it could be removed. And we can just use string[] instead of StringHolder[]
*/
export interface StringHolder {
    value: string
}

export interface RNLocalizeDateFormatter extends HybridObject<{ ios: 'swift', android: 'kotlin' }> {
    initialize(defaultLocale: string, supportedLocales: StringHolder[], dateStyle: DateStyle, timeStyle: DateStyle): void
    format(time: number): string
}
