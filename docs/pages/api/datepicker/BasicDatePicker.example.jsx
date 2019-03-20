import React, { Fragment, useState } from 'react';
import { DatePicker } from 'material-ui-pickers';

function BasicDatePicker(props) {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Fragment>
      <div className="picker">
        <DatePickerhttps://github.com/dmtrKovalenko/material-ui-pickers/tree/develop/docs/pages/api/datepicker
          label="Basic example"
          value={selectedDate}
          onChange={handleDateChange}
          animateYearScrolling
        />
      </div>

      <div className="picker">
        <DatePicker
          autoOk
          label="Clearable"
          clearable
          disableFuture
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>

      <div className="picker">
        <DatePicker
          label="Date of birth"
          value={selectedDate}
          disableFuture
          openTo="year"
          format={props.getFormatString({
            moment: 'DD/MM/YYYY',
            dateFns: 'dd/MM/yyyy',
          })}
          views={['year', 'month', 'day']}
          onChange={handleDateChange}
        />
      </div>
    </Fragment>
  );
}

export default BasicDatePicker;
