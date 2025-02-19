export const EditorToolbarButton = ({
  onClick,
  isActive,
  icon: Icon,
  label,
  disabled
}: {
  onClick: () => void;
  isActive: boolean;
  icon: any;
  label: string;
  disabled?: boolean;
}) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className={`flex items-center gap-1 rounded-md px-1 py-1 text-sm transition-colors ${
      isActive
        ? 'bg-c1-500 text-white'
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
    } ${disabled ? 'pointer-events-none cursor-not-allowed' : ''}`}
    title={label}
  >
    <Icon size={16} />
  </button>
);
