import { FormControl } from '@angular/forms';

import { atLeastOne } from './validator';

describe('atLeastOne', () => {
  const error = {atLeastOne: true};

  it('"aaa" and "" should be atLeastOne', () => {
    const control = new FormControl('aaa');
    const control1 = new FormControl('aaa');

    expect(atLeastOne(control1)(control)).toBeNull();
  });

  it('"" and "" should not be atLeastOne', () => {
    const control = new FormControl('aaa');
    const control1 = new FormControl('bbb');

    expect(atLeastOne(control1)(control)).toEqual(error);
  });
});
