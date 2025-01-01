///
/// HybridRNLocalizeDateFormatterSpec.swift
/// This file was generated by nitrogen. DO NOT MODIFY THIS FILE.
/// https://github.com/mrousavy/nitro
/// Copyright © 2025 Marc Rousavy @ Margelo
///

import Foundation
import NitroModules

/// See ``HybridRNLocalizeDateFormatterSpec``
public protocol HybridRNLocalizeDateFormatterSpec_protocol: AnyObject {
  // Properties
  

  // Methods
  func initialize(defaultLocale: String, supportedLocales: [String], dateStyle: DateStyle, timeStyle: DateStyle) throws -> Void
  func format(time: Double) throws -> String
}

/// See ``HybridRNLocalizeDateFormatterSpec``
public class HybridRNLocalizeDateFormatterSpec_base: HybridObjectSpec {
  private weak var cxxWrapper: HybridRNLocalizeDateFormatterSpec_cxx? = nil
  public func getCxxWrapper() -> HybridRNLocalizeDateFormatterSpec_cxx {
  #if DEBUG
    guard self is HybridRNLocalizeDateFormatterSpec else {
      fatalError("`self` is not a `HybridRNLocalizeDateFormatterSpec`! Did you accidentally inherit from `HybridRNLocalizeDateFormatterSpec_base` instead of `HybridRNLocalizeDateFormatterSpec`?")
    }
  #endif
    if let cxxWrapper = self.cxxWrapper {
      return cxxWrapper
    } else {
      let cxxWrapper = HybridRNLocalizeDateFormatterSpec_cxx(self as! HybridRNLocalizeDateFormatterSpec)
      self.cxxWrapper = cxxWrapper
      return cxxWrapper
    }
  }
  public var memorySize: Int { return 0 }
}

/**
 * A Swift base-protocol representing the RNLocalizeDateFormatter HybridObject.
 * Implement this protocol to create Swift-based instances of RNLocalizeDateFormatter.
 * ```swift
 * class HybridRNLocalizeDateFormatter : HybridRNLocalizeDateFormatterSpec {
 *   // ...
 * }
 * ```
 */
public typealias HybridRNLocalizeDateFormatterSpec = HybridRNLocalizeDateFormatterSpec_protocol & HybridRNLocalizeDateFormatterSpec_base
