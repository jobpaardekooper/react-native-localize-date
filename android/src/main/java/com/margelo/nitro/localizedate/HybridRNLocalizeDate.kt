package com.margelo.nitro.localizedate

import com.margelo.nitro.NitroModules
import java.text.DateFormat
import java.util.Date

fun mapDateStyleToDateFormat(style: DateStyle): Int {
    return when (style) {
        DateStyle.SHORT -> DateFormat.SHORT
        DateStyle.MEDIUM -> DateFormat.MEDIUM
        DateStyle.LONG -> DateFormat.LONG
        DateStyle.FULL -> DateFormat.FULL
    }
}

class HybridRNLocalizeDate : HybridRNLocalizeDateSpec() {
    override val memorySize: Long
        get() = 0L

    override fun localizeTimeOnly(time: Double, timeStyle: DateStyle): String {
        val date = Date(time.toLong())

        val timeFormatStyle = mapDateStyleToDateFormat(timeStyle)

        val dateFormatter = DateFormat.getTimeInstance(timeFormatStyle)
        return dateFormatter.format(date)
    }

    override fun localizeDateOnly(time: Double, dateStyle: DateStyle): String {
        val date = Date(time.toLong())

        val dateFormatStyle = mapDateStyleToDateFormat(dateStyle)

        val dateFormatter = DateFormat.getDateInstance(dateFormatStyle)
        return dateFormatter.format(date)
    }
}
