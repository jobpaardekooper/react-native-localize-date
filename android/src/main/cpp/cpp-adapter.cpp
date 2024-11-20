#include <jni.h>
#include "NitroLocalizeDateOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::localizedate::initialize(vm);
}
