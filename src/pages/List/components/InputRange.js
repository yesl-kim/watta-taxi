import * as React from 'react';
import { Range } from 'react-range';
import FilterBox from './FilterBox';

function InputRange({ value, title, onChange, min, max, step }) {
  const handleChange = values => {
    onChange({ values });
  };

  return (
    <FilterBox title={title}>
      <Range
        step={step}
        min={min}
        max={max}
        values={value}
        onChange={handleChange}
        renderTrack={({ props, children }) => (
          <div {...props} style={{ ...renderTrackStyle }}>
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div {...props} style={{ ...renderThumbStyle }} />
        )}
      />
    </FilterBox>
  );
}

export default InputRange;

const renderTrackStyle = {
  height: '4px',
  backgroundColor: '#51abf3',
  bordeRadius: '2px',
};

const renderThumbStyle = {
  height: '24px',
  width: '24px',
  backgroundColor: '#fff',
  border: '1px solid #ced4da',
  borderRadius: '100%',
  boxShadow: '0 1px 4px 0 rgb(0 0 0 / 20%)',
};
