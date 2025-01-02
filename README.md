# React Native Localize Date

![NPM Version](https://img.shields.io/npm/v/react-native-localize-date)
![GitHub License](https://img.shields.io/github/license/jobpaardekooper/react-native-localize-date)

This library allows you to localize date and time according to the device locale and additional platform-specific user settings, **providing a date localization experience that aligns with users' expectations from native apps**.

The output format is platform-dependent and might, for example, even differ between various Android vendors. More information regarding the specifics can be found in the corresponding [iOS](https://developer.apple.com/documentation/foundation/dateformatter/1415241-localizedstring) and [Android](https://developer.android.com/reference/android/icu/text/DateFormat) documentation.

## Why is this library needed?

Localizing date and time based only on a [BCP 47 language tag](https://www.techonthenet.com/js/language_tags.php) (for example, using [`react-native-localize`](https://github.com/zoontek/react-native-localize)) does not yield results as expected on native platforms. This is because the language tag is based on language and region settings, but iOS and Android both provide additional settings to control date and time formatting beyond language and region.

> ### Example
>
> On my iPhone with my personal settings, the language tag that an app will get is `en-US`. Using this tag with [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) yields the following result as `MM/DD/YYYY`:
>
> ```js
> Intl.DateTimeFormat('en-US').format(new Date())
> // '11/20/2024'
> ```
>
> But with my settings (`General > Language & Region > Date Format` on iOS 18), as a user, I would expect the date to be formatted as `DD/MM/YYYY` and thus be `20/11/2024`.

This library solves this issue by providing an API for native platform date to localized string formatters.

## Installation

Install the library as follows:

```sh
npm i react-native-nitro-modules react-native-localize-date
cd ios && pod install
```

This library was created using [Nitro Modules](https://github.com/mrousavy/nitro), so it is required to install `react-native-nitro-modules` as a peer dependency [(read more)](https://nitro.margelo.com/docs/for-users).

The library works with both the new and old architectures. React Native version `0.75.x` and above is supported.

### Required additional iOS steps

iOS automatically determines the locale that will be used based on the locales that your app claims to support in the `info.plist` file. To make use of this library, you need to add the languages you support (`CFBundleLocalizations`) and a fallback language (`CFBundleDevelopmentRegion`).

As an example, if your app supports English, French, and German with the fallback language set to English, you should add the following to the `info.plist`:

```plist
<key>CFBundleDevelopmentRegion</key>
<string>en</string>
<key>CFBundleLocalizations</key>
<array>
  <string>en</string>
  <string>fr</string>
  <string>de</string>
</array>
```

This is all the setup needed for iOS. If you specifically want to know more about how this works on iOS, you can follow these links:

- [How iOS Determines the Language For Your App](https://developer.apple.com/library/archive/qa/qa1828/_index.html)
- [`CFBundleDevelopmentRegion`](https://developer.apple.com/documentation/bundleresources/information-property-list/cfbundledevelopmentregion)
- [`CFBundleLocalizations`](https://developer.apple.com/documentation/bundleresources/information-property-list/cfbundlelocalizations)

## Usage

```typescript
import {
  DateStyle,
  DateFormatter
} from 'react-native-localize-date'

const date = new Date()
const defaultLocale = 'en'
const supportedLocales = ['en', 'fr', 'de']
const shortFormatter = new DateFormatter(defaultLocale, supportedLocales, DateStyle.SHORT, DateStyle.SHORT)

shortFormatter.format(date)
// For example returns: '20/11/2024 16:48'
```

This repository also contains a [full example app](example/App.tsx) using all the different options.

## API

### `DateStyle`

Enum representing the different styles for date and time localization. Each value maps to the corresponding style of the current platform.

For more information, refer to the corresponding documentation for [iOS](https://developer.apple.com/documentation/foundation/dateformatter/style) and [Android](https://developer.android.com/reference/android/icu/text/DateFormat#:~:text=The%20exact%20result%20depends%20on%20the%20locale%2C%20but%20generally).

| Value
| -----
| `SHORT`
| `MEDIUM`
| `LONG`
| `FULL`

### `new DateFormatter(defaultLocale: string, supportedLocales: string[], dateStyle: DateStyle, timeStyle: DateStyle)`

Creates a DateFormatter with the options specified in the constructor.

`defaultLocale` is the fallback language that is used when the user does not have any of the `supportedLocales` in their language settings.

`supportedLocales` is the list of locales that your app supports. It should not be empty and at least the `defaultLocale` should be contained in this array.

`defaultLocale` and `supportedLocales` are both only used on Android. On iOS, `info.plist` properties are automatically used. Please refer to the [iOS installation steps section](#required-additional-ios-steps).

`dateStyle` and `timeStyle` can't both be `DateStyle.NONE` at the same time. (This will throw an error)

A usage example can be found in the [Usage section](#usage).

### `DateFormatter.format(date: Date)`

Returns a localized string for the provided date object according to the styles defined when constructing the formatter. A usage example can be found in the [Usage section](#usage).

## Running the example

There is an example app project located at [example/](example) which you can run as follows:

```sh
cd example
npm i
cd ios && pod install && cd ..
npx react-native run-ios
```

Or run on Android using `npx react-native run-android`.

## Contributing

Since this library uses [Nitro Modules](https://github.com/mrousavy/nitro), it's best to familiarize yourself with their docs before trying to contribute.

External contributions are always appreciated *if something needs to be changed*. Please first open an issue to discuss the changes.
