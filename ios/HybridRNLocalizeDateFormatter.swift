import Foundation

func mapDateStyleToDateFormatterStyle(_ style: DateStyle) -> DateFormatter.Style {
    switch style {
    case .none:
        return .none
    case .short:
        return .short
    case .medium:
        return .medium
    case .long:
        return .long
    case .full:
        return .full
    }
}

class HybridRNLocalizeDateFormatter: HybridRNLocalizeDateFormatterSpec {
    let dateFormatter = DateFormatter()
    
    func format(time: Double) -> String {
        let seconds = TimeInterval(time) / 1_000
        let date = Date(timeIntervalSince1970: seconds)
                
        return dateFormatter.string(from: date)
    }
    
    func initialize(defaultLocale: String, supportedLocales: [StringHolder], dateStyle: DateStyle, timeStyle: DateStyle) throws -> Void {
        dateFormatter.dateStyle = mapDateStyleToDateFormatterStyle(dateStyle)
        dateFormatter.timeStyle = mapDateStyleToDateFormatterStyle(timeStyle)
    }
}
