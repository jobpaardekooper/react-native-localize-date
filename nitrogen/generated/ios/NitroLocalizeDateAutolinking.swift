///
/// NitroLocalizeDateAutolinking.swift
/// This file was generated by nitrogen. DO NOT MODIFY THIS FILE.
/// https://github.com/mrousavy/nitro
/// Copyright © 2024 Marc Rousavy @ Margelo
///

public final class NitroLocalizeDateAutolinking {
  public typealias bridge = margelo.nitro.localizedate.bridge.swift

  /**
   * Creates an instance of a Swift class that implements `HybridRNLocalizeDateSpec`,
   * and wraps it in a Swift class that can directly interop with C++ (`HybridRNLocalizeDateSpecCxx`)
   *
   * This is generated by Nitrogen and will initialize the class specified
   * in the `"autolinking"` property of `nitro.json` (in this case, `HybridRNLocalizeDate`).
   */
  public static func createRNLocalizeDate() -> bridge.std__shared_ptr_margelo__nitro__localizedate__HybridRNLocalizeDateSpec_ {
    let hybridObject = HybridRNLocalizeDate()
    return { () -> bridge.std__shared_ptr_margelo__nitro__localizedate__HybridRNLocalizeDateSpec_ in
      let __cxxWrapped = HybridRNLocalizeDateSpecCxx(hybridObject)
      let __pointer = HybridRNLocalizeDateSpecCxxUnsafe.toUnsafe(__cxxWrapped)
      return bridge.create_std__shared_ptr_margelo__nitro__localizedate__HybridRNLocalizeDateSpec_(__pointer)
    }()
  }
}
