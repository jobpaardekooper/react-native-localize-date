///
/// NitroLocalizeDate-Swift-Cxx-Bridge.cpp
/// This file was generated by nitrogen. DO NOT MODIFY THIS FILE.
/// https://github.com/mrousavy/nitro
/// Copyright © 2024 Marc Rousavy @ Margelo
///

#include "NitroLocalizeDate-Swift-Cxx-Bridge.hpp"

// Include C++ implementation defined types
#include "HybridRNLocalizeDateSpecSwift.hpp"
#include "NitroLocalizeDate-Swift-Cxx-Umbrella.hpp"
#include <NitroModules/HybridContext.hpp>

namespace margelo::nitro::localizedate::bridge::swift {

  // pragma MARK: std::shared_ptr<margelo::nitro::localizedate::HybridRNLocalizeDateSpec>
  std::shared_ptr<margelo::nitro::localizedate::HybridRNLocalizeDateSpec> create_std__shared_ptr_margelo__nitro__localizedate__HybridRNLocalizeDateSpec_(void* _Nonnull swiftUnsafePointer) {
    NitroLocalizeDate::HybridRNLocalizeDateSpecCxx swiftPart = NitroLocalizeDate::HybridRNLocalizeDateSpecCxxUnsafe::fromUnsafe(swiftUnsafePointer);
    return HybridContext::getOrCreate<margelo::nitro::localizedate::HybridRNLocalizeDateSpecSwift>(swiftPart);
  }
  void* _Nonnull get_std__shared_ptr_margelo__nitro__localizedate__HybridRNLocalizeDateSpec_(std__shared_ptr_margelo__nitro__localizedate__HybridRNLocalizeDateSpec_ cppType) {
    std::shared_ptr<margelo::nitro::localizedate::HybridRNLocalizeDateSpecSwift> swiftWrapper = std::dynamic_pointer_cast<margelo::nitro::localizedate::HybridRNLocalizeDateSpecSwift>(cppType);
  #ifdef NITRO_DEBUG
    if (swiftWrapper == nullptr) [[unlikely]] {
      throw std::runtime_error("Class \"HybridRNLocalizeDateSpec\" is not implemented in Swift!");
    }
  #endif
    NitroLocalizeDate::HybridRNLocalizeDateSpecCxx swiftPart = swiftWrapper->getSwiftPart();
    return NitroLocalizeDate::HybridRNLocalizeDateSpecCxxUnsafe::toUnsafe(swiftPart);
  }

} // namespace margelo::nitro::localizedate::bridge::swift
