import Foundation

func mapDateStyleToDateFormatterStyle(_ style: DateStyle) -> DateFormatter.Style {
    switch style {
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

class HybridRNLocalizeDate: HybridRNLocalizeDateSpec {
    public var hybridContext = margelo.nitro.HybridContext()
    public var memorySize: Int {
        return getSizeOf(self)
    }

    func localizeDateOnly(time: Double, dateStyle: DateStyle) throws -> String {
        let seconds = TimeInterval(time) / 1_000
        let date = Date(timeIntervalSince1970: seconds)

        let dateFormatter = DateFormatter()
        dateFormatter.dateStyle = mapDateStyleToDateFormatterStyle(dateStyle)
        dateFormatter.timeStyle = .none

        return dateFormatter.string(from: date)
    }

    func localizeTimeOnly(time: Double, timeStyle: DateStyle) throws -> String {
        let seconds = TimeInterval(time) / 1_000
        let date = Date(timeIntervalSince1970: seconds)

        let dateFormatter = DateFormatter()
        dateFormatter.dateStyle = .none
        dateFormatter.timeStyle = mapDateStyleToDateFormatterStyle(timeStyle)

        return dateFormatter.string(from: date)
    }
}
