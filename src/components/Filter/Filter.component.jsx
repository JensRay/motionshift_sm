const Filter = ({ options, filter, selectedOptions, onChange }) => {
  const handleCheckboxChange = (option) => {
    const updatedSelections = [...selectedOptions];
    if (updatedSelections.includes(option)) {
      updatedSelections.splice(updatedSelections.indexOf(option), 1);
    } else {
      updatedSelections.push(option);
    }
    onChange(updatedSelections);
  };

  return (
    <div className="filter-dropdown" id="filterDropdown">
      {options?.map((option) => (
        <div key={option}>
          <input
            type="checkbox"
            className={`${filter}_${option}`}
            checked={selectedOptions.includes(option)}
            onChange={() => handleCheckboxChange(option)}
          />
          <label htmlFor={`${option}_checkbox`}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default Filter;
