const PrimaryButton = ({ name }) => {
  return (
    <button
      className={`bg-[var(--accent-color)] rounded-full px-4 py-2 cursor-pointer hover:bg-[var(--highlight-color)] text-[var(--bg-color)] transition-all duration-300`}
    >
      {name}
    </button>
  );
};

export default PrimaryButton;
