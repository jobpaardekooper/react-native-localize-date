require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "LocalizeDate"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.homepage     = package["homepage"]
  s.license      = package["license"]
  s.authors      = package["author"]

  s.platforms    = { :ios => min_ios_version_supported }
  s.source       = { :git => "https://github.com/jobpaardekooper/react-native-localize-date.git", :tag => "v#{s.version}" }

  s.source_files = "ios/**/*.swift"

  s.dependency 'React-jsi'
  s.dependency 'React-callinvoker'

  load File.join(__dir__, 'nitrogen/generated/ios/LocalizeDate+autolinking.rb')
  add_nitrogen_files(s)

  install_modules_dependencies(s)
end
