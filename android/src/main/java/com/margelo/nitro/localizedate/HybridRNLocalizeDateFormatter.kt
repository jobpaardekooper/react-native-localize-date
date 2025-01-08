package com.margelo.nitro.localizedate

import android.os.Build
import android.os.LocaleList
import com.margelo.nitro.NitroModules
import java.text.DateFormat
import java.util.Date
import java.util.Locale

fun getUserPreferredLocale(
    supportedLocaleStrings: List<String>,
    defaultLocale: Locale
): Locale {
    val preferredLocales = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
        LocaleList.getDefault()
    } else {
        return Locale.getDefault() // Fallback for older Android versions
    }

    val matchedLocale = preferredLocales.getFirstMatch(supportedLocaleStrings.toTypedArray())

    if (matchedLocale != null && supportedLocaleStrings.contains(matchedLocale.language)) {
        return matchedLocale
    }

    return defaultLocale
}

fun mapDateStyleToDateFormat(style: DateStyle): Int {
    return when (style) {
        DateStyle.NONE -> DateFormat.SHORT
        DateStyle.SHORT -> DateFormat.SHORT
        DateStyle.MEDIUM -> DateFormat.MEDIUM
        DateStyle.LONG -> DateFormat.LONG
        DateStyle.FULL -> DateFormat.FULL
    }
}

class HybridRNLocalizeDateFormatter : HybridRNLocalizeDateFormatterSpec() {
    override val memorySize: Long
        get() = 0L

    var formatter: DateFormat? = null

    override fun initialize(defaultLocale: String, supportedLocales: Array<StringHolder>, dateStyle: DateStyle, timeStyle: DateStyle): Unit {
        val supportedLocaleStrings = supportedLocales.map { it.value }.toTypedArray()
        val userPreferredLocale = getUserPreferredLocale(supportedLocaleStrings.toList(), Locale(defaultLocale))

        if (dateStyle == DateStyle.NONE && timeStyle != DateStyle.NONE) {
            formatter = DateFormat.getTimeInstance(mapDateStyleToDateFormat(timeStyle), userPreferredLocale)
        }
        else if (dateStyle != DateStyle.NONE && timeStyle == DateStyle.NONE) {
            formatter = DateFormat.getDateInstance(mapDateStyleToDateFormat(dateStyle), userPreferredLocale)
        }
        else if (dateStyle != DateStyle.NONE && timeStyle != DateStyle.NONE) {
            formatter = DateFormat.getDateTimeInstance(mapDateStyleToDateFormat(dateStyle), mapDateStyleToDateFormat(timeStyle), userPreferredLocale)
        }
        // The JS side should make sure dateStyle and timeStyle can't both be NONE
    }

    override fun format(time: Double): String {
        val date = Date(time.toLong())
        return formatter!!.format(date)
    }
}
