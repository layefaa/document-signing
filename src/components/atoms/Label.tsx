
const Label = ({label}: { label: string }) => {
  return (
      <label
          className={'text-[1.2rem] capitalize mb-[.5rem] sm:text-14 sm:mb-[.7rem] lg:mb-[1rem] lg:text-16 text-ce-primary-white '}>
        {label}
      </label>
  );
};

export default Label;
