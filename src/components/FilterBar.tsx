import { useCallback } from "react";

export interface FilterState {
  lens: string;
  style: string;
  year: string;
}

interface FilterBarProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  availableLenses: string[];
  availableYears: number[];
}

export default function FilterBar({
  filters,
  onChange,
  availableLenses,
  availableYears,
}: FilterBarProps): JSX.Element {
  const handleChange = useCallback(
    (key: keyof FilterState, value: string) => {
      onChange({ ...filters, [key]: value });
    },
    [filters, onChange]
  );

  const handleReset = useCallback(() => {
    onChange({ lens: "", style: "", year: "" });
  }, [onChange]);

  const hasActiveFilters = filters.lens || filters.style || filters.year;

  return (
    <div className="flex flex-wrap items-center gap-3 px-4 md:px-8 lg:px-16 py-4">
      {/* Style filter */}
      <div className="flex items-center gap-1 bg-dark-700 rounded-lg p-1">
        <button
          onClick={() => handleChange("style", "")}
          className={`px-3 py-1.5 rounded-md text-sm transition-all ${
            filters.style === ""
              ? "bg-dark-500 text-white"
              : "text-white/50 hover:text-white/80"
          }`}
        >
          全部
        </button>
        <button
          onClick={() => handleChange("style", "color")}
          className={`px-3 py-1.5 rounded-md text-sm transition-all ${
            filters.style === "color"
              ? "bg-primary text-white"
              : "text-white/50 hover:text-white/80"
          }`}
        >
          彩色
        </button>
        <button
          onClick={() => handleChange("style", "bw")}
          className={`px-3 py-1.5 rounded-md text-sm transition-all ${
            filters.style === "bw"
              ? "bg-white text-dark-900"
              : "text-white/50 hover:text-white/80"
          }`}
        >
          黑白
        </button>
      </div>

      {/* Lens filter */}
      <select
        value={filters.lens}
        onChange={(e) => handleChange("lens", e.target.value)}
        className="bg-dark-700 text-white/80 text-sm rounded-lg px-3 py-2 border border-dark-500 focus:border-primary focus:outline-none cursor-pointer"
      >
        <option value="">全部镜头</option>
        {availableLenses.map((lens) => (
          <option key={lens} value={lens}>
            {lens}
          </option>
        ))}
      </select>

      {/* Year filter */}
      <select
        value={filters.year}
        onChange={(e) => handleChange("year", e.target.value)}
        className="bg-dark-700 text-white/80 text-sm rounded-lg px-3 py-2 border border-dark-500 focus:border-primary focus:outline-none cursor-pointer"
      >
        <option value="">全部年份</option>
        {availableYears.map((year) => (
          <option key={year} value={String(year)}>
            {year}
          </option>
        ))}
      </select>

      {/* Reset button */}
      {hasActiveFilters && (
        <button
          onClick={handleReset}
          className="text-xs text-primary hover:text-primary/80 transition-colors px-2 py-1"
        >
          清除筛选
        </button>
      )}
    </div>
  );
}
