///
/// NitroLocalizeDate-Swift-Cxx-Umbrella.hpp
/// This file was generated by nitrogen. DO NOT MODIFY THIS FILE.
/// https://github.com/mrousavy/nitro
/// Copyright © 2025 Marc Rousavy @ Margelo
///

#pragma once

// Forward declarations of C++ defined types
// Forward declaration of `DateStyle` to properly resolve imports.
namespace margelo::nitro::localizedate { enum class DateStyle; }
// Forward declaration of `HybridRNLocalizeDateFormatterSpec` to properly resolve imports.
namespace margelo::nitro::localizedate { class HybridRNLocalizeDateFormatterSpec; }
// Forward declaration of `StringHolder` to properly resolve imports.
namespace margelo::nitro::localizedate { struct StringHolder; }

// Include C++ defined types
#include "DateStyle.hpp"
#include "HybridRNLocalizeDateFormatterSpec.hpp"
#include "StringHolder.hpp"
#include <NitroModules/Result.hpp>
#include <exception>
#include <memory>
#include <string>
#include <vector>

// C++ helpers for Swift
#include "NitroLocalizeDate-Swift-Cxx-Bridge.hpp"

// Common C++ types used in Swift
#include <NitroModules/ArrayBufferHolder.hpp>
#include <NitroModules/AnyMapHolder.hpp>
#include <NitroModules/HybridContext.hpp>
#include <NitroModules/RuntimeError.hpp>

// Forward declarations of Swift defined types
// Forward declaration of `HybridRNLocalizeDateFormatterSpec_cxx` to properly resolve imports.
namespace NitroLocalizeDate { class HybridRNLocalizeDateFormatterSpec_cxx; }

// Include Swift defined types
#if __has_include("NitroLocalizeDate-Swift.h")
// This header is generated by Xcode/Swift on every app build.
// If it cannot be found, make sure the Swift module's name (= podspec name) is actually "NitroLocalizeDate".
#include "NitroLocalizeDate-Swift.h"
// Same as above, but used when building with frameworks (`use_frameworks`)
#elif __has_include(<NitroLocalizeDate/NitroLocalizeDate-Swift.h>)
#include <NitroLocalizeDate/NitroLocalizeDate-Swift.h>
#else
#error NitroLocalizeDate's autogenerated Swift header cannot be found! Make sure the Swift module's name (= podspec name) is actually "NitroLocalizeDate", and try building the app first.
#endif
