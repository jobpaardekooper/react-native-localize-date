# React Native Localize Date

This library allows you to localize date and time according to device locale and additional platform specific user settings. **Providing a date localization experience that is in line with users expectations from native apps.**

The output format is platform dependent and might for example even differ between various Android vendors. More info regarding the specifics of this can be found in the corresponding [iOS](https://developer.apple.com/documentation/foundation/dateformatter/1415241-localizedstring) and [Android](https://developer.android.com/reference/android/icu/text/DateFormat) documentation.

## Why is this library needed?

Localizing date and time based only on a [BCP 47 language tag](https://www.techonthenet.com/js/language_tags.php) (for example using [`react-native-localize`](https://github.com/zoontek/react-native-localize)) does not yield results as expected on native platforms. This is because the language tag is based on language and region settings, but iOS and Android both provide additional settings to control date and time formating in addtion to language and region.

> ### Example:
> On my iPhone with my personal settings the langauage tag that an app will get is `en-US`. Using this with tag  with [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) yields the following result as `MM/DD/YYYY`:
> ```js
> Intl.DateTimeFormat('en-US').format(new Date())
> // '11/20/2024'
> ```
>
> But with my settings (`General > Language & Region > Date Format` on iOS 18), as a user I would expect the date to be formated as `DD/MM/YYYY` and thus be `20/11/2024`.

This library solves this issue by providing an API for the native platform date to localized string formatters.

## Installation

Install the library as follows:
```sh
npm i react-native-nitro-modules react-native-localize-date
cd ios && pod install
```

This library was created using [Nitro Modules](https://github.com/mrousavy/nitro) so it is required to install `react-native-nitro-modules` as a peer dependency [(read more)](https://nitro.margelo.com/docs/for-users).

The library works both the new and old architecture. React Native version `0.75.x` and above is supported.

## Usage

```typescript
import {
  DateStyle,
  localizeDateTime,
  localizeDateOnly,
  localizeTimeOnly
} from 'react-native-localize-date'

const dateToLocalize = new Date()

localizeDateTime(dateToLocalize, DateStyle.SHORT, DateStyle.SHORT)
// For example returns: '20/11/2024 16:48'

localizeDateOnly(dateToLocalize, DateStyle.SHORT)
// For example returns: '20/11/2024'

localizeTimeOnly(dateToLocalize, DateStyle.SHORT)
// For example returns: '16:48'
```

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


### `localizeDateTime()`

This function is essentially a convenience function that is equivalent to appending the results of [localizeDateOnly](#localizeDateOnly()) and [localizeTimeOnly](#localizeTimeOnly()) with a space in between. A usage example can be found in the [Usage section](#Usage).

### `localizeDateOnly()`

Returns a localized string of the date section for a date object according to the provided `DateStyle`. A usage example can be found in the [Usage section](#Usage).

### `localizeTimeOnly()`

Returns a localized string of the time section for a date object according to the provided `DateStyle`. A usage example can be found in the [Usage section](#Usage).

## Running the example

There is an example app project located at [example/](example) which you can run as follows:
```sh
cd example
npm i
cd ios && pod install && cd ..
npx react-native run-ios
```

Or run on android using `npx react-native run-android`.

## Contributing

Since this library uses [Nitro Modules](https://github.com/mrousavy/nitro) it's best to familiarize yourself with their docs before trying to contribute.

External contributions are always appreciated *if something needs to be changed*. Please first open an issue to discuss the changes.
