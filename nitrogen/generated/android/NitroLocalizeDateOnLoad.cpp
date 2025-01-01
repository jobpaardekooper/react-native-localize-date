///
/// NitroLocalizeDateOnLoad.cpp
/// This file was generated by nitrogen. DO NOT MODIFY THIS FILE.
/// https://github.com/mrousavy/nitro
/// Copyright © 2025 Marc Rousavy @ Margelo
///

#include "NitroLocalizeDateOnLoad.hpp"

#include <jni.h>
#include <fbjni/fbjni.h>
#include <NitroModules/HybridObjectRegistry.hpp>

#include "JHybridRNLocalizeDateFormatterSpec.hpp"
#include <NitroModules/JNISharedPtr.hpp>
#include <NitroModules/DefaultConstructableObject.hpp>

namespace margelo::nitro::localizedate {

int initialize(JavaVM* vm) {
  using namespace margelo::nitro;
  using namespace margelo::nitro::localizedate;
  using namespace facebook;

  return facebook::jni::initialize(vm, [] {
    // Register native JNI methods
    margelo::nitro::localizedate::JHybridRNLocalizeDateFormatterSpec::registerNatives();
    margelo::nitro::localizedate::JHybridRNLocalizeDateFormatterSpec::registerNatives();

    // Register Nitro Hybrid Objects
    HybridObjectRegistry::registerHybridObjectConstructor(
      "RNLocalizeDateFormatter",
      []() -> std::shared_ptr<HybridObject> {
        static DefaultConstructableObject<JHybridRNLocalizeDateFormatterSpec::javaobject> object("com/margelo/nitro/localizedate/HybridRNLocalizeDateFormatter");
        auto instance = object.create();
        auto globalRef = jni::make_global(instance);
        return JNISharedPtr::make_shared_from_jni<JHybridRNLocalizeDateFormatterSpec>(globalRef);
      }
    );
  });
}

} // namespace margelo::nitro::localizedate
