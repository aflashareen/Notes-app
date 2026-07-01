
function ThemePicker({ themeColor, setThemeColor }) {
  return (
    <div className="flex items-center gap-3 m-4">
      <label className="text-white font-medium">
        Theme:
      </label>

      <input
        type="color"
        value={themeColor}
        onChange={(e) => setThemeColor(e.target.value)}
        className="w-10 h-10 cursor-pointer"
      />
    </div>
  );
}

export default ThemePicker;