var bananasplit = bananasplit || {};

bananasplit.zones = [
    {
        label: 'Backspace',
        value: 0,
        choices: [
            {
                code: 0,
                name: 'Standard'
            },
            {
                code: 1,
                name: 'HHKB'
            }
        ]
    },
    {
        label: 'Enter',
        value: 0,
        choices: [
            {
                code: 0,
                name: 'ANSI'
            },
            {
                code: 1,
                name: 'ISO'
            }
        ]
    },
    {
        label: 'Caps Lock',
        value: 0,
        choices: [
            {
                code: 0,
                name: 'Standard'
            },
            {
                code: 1,
                name: 'Stepped'
            }
        ]
    },
    {
        label: 'Left Shift',
        value: 0,
        choices: [
            {
                code: 0,
                name: 'ANSI'
            },
            {
                code: 1,
                name: 'ISO'
            }
        ]
    },{
        label: 'Right Shift',
        value: 0,
        choices: [
            {
                code: 0,
                name: 'ANSI'
            },
            {
                code: 1,
                name: 'Split'
            },
            {
                code: 2,
                name: 'Arrow'
            }
        ]
    },
    {
        label: 'Space',
        value: 0,
        choices: [
            {
                code: 0,
                name: 'Standard'
            },
            {
                code: 1,
                name: '275 125 225'
            },
            {
                code: 2,
                name: '225 125 275'
            }
        ]
    },
    {
        label: 'Bottom Right',
        value: 0,
        choices: [
            {
                code: 0,
                name: 'Standard'
            },
            {
                code: 1,
                name: 'Singles'
            }
        ]
    },
]

bananasplit.r1 = [{ size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' }];
bananasplit.r1_standard = [{ size: 200, type: 'secondary' }];
bananasplit.r1_hhkb = [{ size: 100, type: 'primary' },{ size: 100, type: 'primary' }];

bananasplit.r2 = [{ size: 150, type: 'secondary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' }];
bananasplit.r2_ansi = [{ size: 150, type: 'primary' }];
bananasplit.r2_iso = [{ size: 150125, type: 'secondary' }];

bananasplit.r3_standard = [{ size: 175, type: 'secondary' }];
bananasplit.r3_stepped = [{ size: 175125, type: 'secondary' }];
bananasplit.r3 = [{ size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' }];
bananasplit.r3_ansi = [{ size: 225, type: 'secondary' }];
bananasplit.r3_iso = [{ size: 100, type: 'primary' },{ size: 125, type: 'spacer' }];

bananasplit.r4_ansi = [{ size: 225, type: 'secondary' }];
bananasplit.r4_iso = [{ size: 125, type: 'secondary' }, { size: 100, type: 'primary' }];
bananasplit.r4 = [{ size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' },
    { size: 100, type: 'primary' }];
bananasplit.r4_ansi2 = [{ size: 100, type: 'primary' },{ size: 275, type: 'secondary' }];
bananasplit.r4_splitshift = [{ size: 100, type: 'primary' },{ size: 175, type: 'secondary' },{ size: 100, type: 'primary' }];
bananasplit.r4_bigq = [{ size: 175, type: 'secondary' },{ size: 100, type: 'primary' },{ size: 100, type: 'primary' }];

bananasplit.r5 = [{ size: 125, type: 'secondary' },{ size: 125, type: 'secondary' },{ size: 125, type: 'secondary' }];
bananasplit.r5_275 = [{ size: 275, type: 'secondary' },{ size: 125, type: 'secondary' },{ size: 225, type: 'secondary' }];
bananasplit.r5_225 = [{ size: 225, type: 'secondary' },{ size: 125, type: 'secondary' },{ size: 275, type: 'secondary' }];
bananasplit.r5_625 = [{ size: 625, type: 'secondary' }];
bananasplit.r5_standard = [{ size: 125, type: 'secondary' },{ size: 125, type: 'secondary' },{ size: 125, type: 'secondary' },{ size: 125, type: 'secondary' }];
bananasplit.r5_singles = [{ size: 100, type: 'secondary' },{ size: 100, type: 'secondary' },{ size: 100, type: 'secondary' },{ size: 100, type: 'secondary' },{ size: 100, type: 'secondary' }];

bananasplit.tr1 = [{ value: 'ESC', type: null, mod: null },
    { value: '1', type: null, mod: null },
    { value: '2', type: null, mod: null },
    { value: '3', type: null, mod: null },
    { value: '4', type: null, mod: null },
    { value: '5', type: null, mod: null },
    { value: '6', type: null, mod: null },
    { value: '7', type: null, mod: null },
    { value: '8', type: null, mod: null },
    { value: '9', type: null, mod: null },
    { value: '0', type: null, mod: null },
    { value: '-', type: null, mod: null },
    { value: '=', type: null, mod: null }];
bananasplit.tr1_standard = [{ value: 'BSPACE', type: null, mod: null }];
bananasplit.tr1_hhkb = [{ value: 'PRINT', type: null, mod: null },{ value: 'PAUSE', type: null, mod: null }];

bananasplit.tr2 = [{ value: 'TAB', type: null, mod: null },
    { value: 'Q', type: null, mod: null },
    { value: 'W', type: null, mod: null },
    { value: 'E', type: null, mod: null },
    { value: 'R', type: null, mod: null },
    { value: 'T', type: null, mod: null },
    { value: 'Y', type: null, mod: null },
    { value: 'U', type: null, mod: null },
    { value: 'I', type: null, mod: null },
    { value: 'O', type: null, mod: null },
    { value: 'P', type: null, mod: null },
    { value: '[', type: null, mod: null },
    { value: ']', type: null, mod: null }];
bananasplit.tr2_ansi = [{ value: '\\', type: null, mod: null }];
bananasplit.tr2_iso = [{ value: 'ENTER', type: null, mod: null }];

bananasplit.tr3_standard = [{ value: 'CAPS', type: null, mod: null }];
bananasplit.tr3_stepped = [{ value: 'CAPS', type: null, mod: null }];
bananasplit.tr3 = [{ value: 'A', type: null, mod: null },
    { value: 'S', type: null, mod: null },
    { value: 'D', type: null, mod: null },
    { value: 'F', type: null, mod: null },
    { value: 'G', type: null, mod: null },
    { value: 'H', type: null, mod: null },
    { value: 'J', type: null, mod: null },
    { value: 'K', type: null, mod: null },
    { value: 'L', type: null, mod: null },
    { value: ';', type: null, mod: null },
    { value: '\'', type: null, mod: null }];
bananasplit.tr3_ansi = [{ value: 'ENTER', type: null, mod: null }];
bananasplit.tr3_iso = [{ value: 'NONUS_HASH', type: null, mod: null }];

bananasplit.tr4_ansi = [{ value: 'LSHIFT', type: null, mod: null }];
bananasplit.tr4_iso = [{ value: 'LSHIFT', type: null, mod: null }, { value: 'NONUS_BSLASH', type: null, mod: null }];
bananasplit.tr4 = [{ value: 'Z', type: null, mod: null },
    { value: 'X', type: null, mod: null },
    { value: 'C', type: null, mod: null },
    { value: 'V', type: null, mod: null },
    { value: 'B', type: null, mod: null },
    { value: 'N', type: null, mod: null },
    { value: 'M', type: null, mod: null },
    { value: ',', type: null, mod: null },
    { value: '.', type: null, mod: null }];
bananasplit.tr4_ansi2 = [{ value: '/', type: null, mod: null },{ value: 'RSHIFT', type: null, mod: null }];
bananasplit.tr4_splitshift = [{ value: '/', type: null, mod: null },{ value: 'RSHIFT', type: null, mod: null },{ value: 'L1', type: 'momentary', mod: null }];
bananasplit.tr4_bigq = [{ value: '/', type: 'tapkey', mod: 'RSHIFT' },{ value: 'UP', type: null, mod: null },{ value: 'L1', type: 'momentary', mod: null }];

bananasplit.tr5 = [{ value: 'LCTRL', type: null, mod: null },{ value: 'LGUI', type: null, mod: null },{ value: 'LALT', type: null, mod: null }];
bananasplit.tr5_275 = [{ value: 'ENTER', type: null, mod: null },{ value: 'LED', type: null, mod: null },{ value: 'SPACE', type: null, mod: null }];
bananasplit.tr5_225 = [{ value: 'ENTER', type: null, mod: null },{ value: 'LED', type: null, mod: null },{ value: 'SPACE', type: null, mod: null }];
bananasplit.tr5_625 = [{ value: 'SPACE', type: null, mod: null }];
bananasplit.tr5_standard = [{ value: 'RALT', type: null, mod: null },{ value: 'RGUI', type: null, mod: null },{ value: 'MENU', type: null, mod: null },{ value: 'RCTRL', type: null, mod: null }];
bananasplit.tr5_singles = [{ value: 'RALT', type: null, mod: null },{ value: 'RCTRL', type: null, mod: null },{ value: 'LEFT', type: null, mod: null },{ value: 'DOWN', type: null, mod: null },{ value: 'RIGHT', type: null, mod: null }];


bananasplit.setFlags = function (layout, zones) {
  zones[6].value = layout & 1;
  zones[5].value = (layout & 6) / 2;
  zones[4].value = (layout & 24) / 8;
  zones[3].value = (layout & 32) / 32;
  zones[2].value = (layout & 64) / 64;
  zones[1].value = (layout & 128) / 128;
  zones[0].value = (layout & 256) / 256;

  return zones;
}

bananasplit.calculateLayout = function (zones) {
  return 0 | (1 * zones[6].value) |
             (2 * zones[5].value) |
             (8 * zones[4].value) |
             (32 * zones[3].value) |
             (64 * zones[2].value) |
             (128 * zones[1].value) |
             (256 * zones[0].value);
}

bananasplit.buildLayout = function (zones) {

  var lr1 = [];
  var lr2 = [];
  var lr3 = [];
  var lr4 = [];
  var lr5 = [];

  var layout = [];

  if (zones[0].value === 0) {
    lr1 = bananasplit.r1.concat(bananasplit.r1_standard);
  } else {
    lr1 = bananasplit.r1.concat(bananasplit.r1_hhkb);
  }

  if (zones[1].value === 0) {
    lr2 = bananasplit.r2.concat(bananasplit.r2_ansi);
  } else {
    lr2 = bananasplit.r2.concat(bananasplit.r2_iso);
  }

  if (zones[2].value === 0) {
      lr3 = lr3.concat(bananasplit.r3_standard);
  } else {
      lr3 = lr3.concat(bananasplit.r3_stepped);
  }

  lr3 = lr3.concat(bananasplit.r3);

  if (zones[1].value === 0) {
    lr3 = lr3.concat(bananasplit.r3_ansi);
  } else {
    lr3 = lr3.concat(bananasplit.r3_iso);
  }

  if (zones[3].value === 0) {
    lr4 = lr4.concat(bananasplit.r4_ansi);
  } else {
    lr4 = lr4.concat(bananasplit.r4_iso);
  }

  lr4 = lr4.concat(bananasplit.r4);

  if (zones[4].value === 0) {
    lr4 = lr4.concat(bananasplit.r4_ansi2);
  } else if (zones[4].value === 1) {
    lr4 = lr4.concat(bananasplit.r4_splitshift);
  } else {
    lr4 = lr4.concat(bananasplit.r4_bigq);
  }

  lr5 = bananasplit.r5;

  if (zones[5].value === 0) {
    lr5 = lr5.concat(bananasplit.r5_625);
  } else if (zones[5].value === 1) {
    lr5 = lr5.concat(bananasplit.r5_275);
  } else {
    lr5 = lr5.concat(bananasplit.r5_225);
  }

  if (zones[6].value === 0) {
    lr5 = lr5.concat(bananasplit.r5_standard);
  } else {
    lr5 = lr5.concat(bananasplit.r5_singles);
  }

  layout.push(lr1);
  layout.push(lr2);
  layout.push(lr3);
  layout.push(lr4);
  layout.push(lr5);

  return layout;
}

bananasplit.buildTemplate = function (zones) {

  var lr1 = [];
  var lr2 = [];
  var lr3 = [];
  var lr4 = [];
  var lr5 = [];

  var template = [];

  if (zones[0].value === 0) {
    lr1 = bananasplit.tr1.concat(bananasplit.tr1_standard);
  } else {
    lr1 = bananasplit.tr1.concat(bananasplit.tr1_hhkb);
  }

  if (zones[1].value === 0) {
    lr2 = bananasplit.tr2.concat(bananasplit.tr2_ansi);
  } else {
    lr2 = bananasplit.tr2.concat(bananasplit.tr2_iso);
  }

  if (zones[2].value === 0) {
      lr3 = lr3.concat(bananasplit.tr3_standard);
  } else {
      lr3 = lr3.concat(bananasplit.tr3_stepped);
  }

  lr3 = lr3.concat(bananasplit.tr3);

  if (zones[1].value === 0) {
    lr3 = lr3.concat(bananasplit.tr3_ansi);
  } else {
    lr3 = lr3.concat(bananasplit.tr3_iso);
  }

  if (zones[3].value === 0) {
    lr4 = lr4.concat(bananasplit.tr4_ansi);
  } else {
    lr4 = lr4.concat(bananasplit.tr4_iso);
  }

  lr4 = lr4.concat(bananasplit.tr4);

  if (zones[4].value === 0) {
    lr4 = lr4.concat(bananasplit.tr4_ansi2);
  } else if (zones[4].value === 1) {
    lr4 = lr4.concat(bananasplit.tr4_splitshift);
  } else {
    lr4 = lr4.concat(bananasplit.tr4_bigq);
  }

  lr5 = bananasplit.tr5;

  if (zones[5].value === 0) {
    lr5 = lr5.concat(bananasplit.tr5_625);
  } else if (zones[5].value === 1) {
    lr5 = lr5.concat(bananasplit.tr5_275);
  } else {
    lr5 = lr5.concat(bananasplit.tr5_225);
  }

  if (zones[6].value === 0) {
    lr5 = lr5.concat(bananasplit.tr5_standard);
  } else {
    lr5 = lr5.concat(bananasplit.tr5_singles);
  }

  template.push(lr1);
  template.push(lr2);
  template.push(lr3);
  template.push(lr4);
  template.push(lr5);

  return [template];
}

function onZoneChange() {
  this.layout = calculateLayout(this.zones);
}


bananasplit.layouts = [
  {
    name: 'true_banana',
    keys: [
      [
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 200, type: 'secondary' }
      ],
      [
        { size: 150, type: 'secondary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 150, type: 'primary' }
      ],
      [
        { size: 175, type: 'secondary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 225, type: 'secondary' }
      ],
      [
        { size: 225, type: 'secondary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 175, type: 'secondary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'secondary' }
      ],
      [
        { size: 125, type: 'secondary' },
        { size: 125, type: 'secondary' },
        { size: 125, type: 'secondary' },
        { size: 225, type: 'secondary' },
        { size: 125, type: 'secondary' },
        { size: 275, type: 'secondary' },
        { size: 100, type: 'secondary' },
        { size: 100, type: 'secondary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' }
      ]
    ]
  },
  {
    name: 'hhkbanana',
    keys: [
      [
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' }
      ],
      [
        { size: 150, type: 'secondary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 150, type: 'secondary' }
      ],
      [
        { size: 175, type: 'secondary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 225, type: 'secondary' }
      ],
      [
        { size: 225, type: 'secondary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 275, type: 'secondary' }
      ],
      [
        { size: 125, type: 'secondary' },
        { size: 125, type: 'secondary' },
        { size: 125, type: 'secondary' },
        { size: 275, type: 'secondary' },
        { size: 125, type: 'secondary' },
        { size: 225, type: 'secondary' },
        { size: 100, type: 'secondary' },
        { size: 100, type: 'secondary' },
        { size: 100, type: 'secondary' },
        { size: 100, type: 'secondary' },
        { size: 100, type: 'secondary' }
      ]
    ]
  },
  {
    name: 'ansi',
    keys: [
      [
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 200, type: 'secondary' }
      ],
      [
        { size: 150, type: 'secondary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 150, type: 'primary' }
      ],
      [
        { size: 175, type: 'secondary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 225, type: 'secondary' }
      ],
      [
        { size: 225, type: 'secondary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 275, type: 'secondary' }
      ],
      [
        { size: 125, type: 'secondary' },
        { size: 125, type: 'secondary' },
        { size: 125, type: 'secondary' },
        { size: 625, type: 'secondary' },
        { size: 125, type: 'secondary' },
        { size: 125, type: 'secondary' },
        { size: 125, type: 'secondary' },
        { size: 125, type: 'secondary' }
      ]
    ]
  },
  {
    name: 'iso',
    keys: [
      [
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 200, type: 'secondary' }
      ],
      [
        { size: 150, type: 'secondary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 150125, type: 'secondary' }
      ],
      [
        { size: 175, type: 'secondary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 125, type: 'spacer' },
      ],
      [
        { size: 125, type: 'secondary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 275, type: 'secondary' }
      ],
      [
        { size: 125, type: 'secondary' },
        { size: 125, type: 'secondary' },
        { size: 125, type: 'secondary' },
        { size: 625, type: 'secondary' },
        { size: 125, type: 'secondary' },
        { size: 125, type: 'secondary' },
        { size: 125, type: 'secondary' },
        { size: 125, type: 'secondary' }
      ]
    ]
  }
];


bananasplit.templates = [
  {
    name: 'true_banana',
    layout: 'true_banana',
    keys: [
      [
        [
          { value: '`', type: null, mod: null },
          { value: '1', type: null, mod: null },
          { value: '2', type: null, mod: null },
          { value: '3', type: null, mod: null },
          { value: '4', type: null, mod: null },
          { value: '5', type: null, mod: null },
          { value: '6', type: null, mod: null },
          { value: '7', type: null, mod: null },
          { value: '8', type: null, mod: null },
          { value: '9', type: null, mod: null },
          { value: '0', type: null, mod: null },
          { value: '-', type: null, mod: null },
          { value: '=', type: null, mod: null },
          { value: 'BSPACE', type: null, mod: null }
        ],
        [
          { value: 'TAB', type: null, mod: null },
          { value: 'Q', type: null, mod: null },
          { value: 'W', type: null, mod: null },
          { value: 'E', type: null, mod: null },
          { value: 'R', type: null, mod: null },
          { value: 'T', type: null, mod: null },
          { value: 'Y', type: null, mod: null },
          { value: 'U', type: null, mod: null },
          { value: 'I', type: null, mod: null },
          { value: 'O', type: null, mod: null },
          { value: 'P', type: null, mod: null },
          { value: '[', type: null, mod: null },
          { value: ']', type: null, mod: null },
          { value: '\\', type: null, mod: null }
        ],
        [
          { value: 'CAPS', type: null, mod: null },
          { value: 'A', type: null, mod: null },
          { value: 'S', type: null, mod: null },
          { value: 'D', type: null, mod: null },
          { value: 'F', type: null, mod: null },
          { value: 'G', type: null, mod: null },
          { value: 'H', type: null, mod: null },
          { value: 'J', type: null, mod: null },
          { value: 'K', type: null, mod: null },
          { value: 'L', type: null, mod: null },
          { value: ';', type: null, mod: null },
          { value: '\'', type: null, mod: null },
          { value: 'ENTER', type: null, mod: null }
        ],
        [
          { value: 'LSHIFT', type: null, mod: null },
          { value: 'Z', type: null, mod: null },
          { value: 'X', type: null, mod: null },
          { value: 'C', type: null, mod: null },
          { value: 'V', type: null, mod: null },
          { value: 'B', type: null, mod: null },
          { value: 'N', type: null, mod: null },
          { value: 'M', type: null, mod: null },
          { value: ',', type: null, mod: null },
          { value: '.', type: null, mod: null },
          { value: '/', type: 'tapkey', mod: 'RSHIFT' },
          { value: 'UP', type: null, mod: null },
          { value: 'LED', type: null, mod: null }
        ],
        [
          { value: 'LCTRL', type: null, mod: null },
          { value: 'LGUI', type: null, mod: null },
          { value: 'LALT', type: null, mod: null },
          { value: 'ENTER', type: null, mod: null },
          { value: 'MENU', type: null, mod: null },
          { value: 'SPACE', type: null, mod: null },
          { value: 'RALT', type: null, mod: null },
          { value: 'RCTRL', type: null, mod: null },
          { value: 'LEFT', type: null, mod: null },
          { value: 'DOWN', type: null, mod: null },
          { value: 'RIGHT', type: null, mod: null }
        ]
      ]
    ]
  },
  {
    name: 'hhkbanana',
    layout: 'hhkbanana',
    keys: [
      [
        [
          { value: '`', type: null, mod: null },
          { value: '1', type: null, mod: null },
          { value: '2', type: null, mod: null },
          { value: '3', type: null, mod: null },
          { value: '4', type: null, mod: null },
          { value: '5', type: null, mod: null },
          { value: '6', type: null, mod: null },
          { value: '7', type: null, mod: null },
          { value: '8', type: null, mod: null },
          { value: '9', type: null, mod: null },
          { value: '0', type: null, mod: null },
          { value: '-', type: null, mod: null },
          { value: '=', type: null, mod: null },
          { value: '\\', type: null, mod: null },
          { value: 'PRINT', type: null, mod: null }
        ],
        [
          { value: 'TAB', type: null, mod: null },
          { value: 'Q', type: null, mod: null },
          { value: 'W', type: null, mod: null },
          { value: 'E', type: null, mod: null },
          { value: 'R', type: null, mod: null },
          { value: 'T', type: null, mod: null },
          { value: 'Y', type: null, mod: null },
          { value: 'U', type: null, mod: null },
          { value: 'I', type: null, mod: null },
          { value: 'O', type: null, mod: null },
          { value: 'P', type: null, mod: null },
          { value: '[', type: null, mod: null },
          { value: ']', type: null, mod: null },
          { value: 'BSPACE', type: null, mod: null }
        ],
        [
          { value: 'CAPS', type: null, mod: null },
          { value: 'A', type: null, mod: null },
          { value: 'S', type: null, mod: null },
          { value: 'D', type: null, mod: null },
          { value: 'F', type: null, mod: null },
          { value: 'G', type: null, mod: null },
          { value: 'H', type: null, mod: null },
          { value: 'J', type: null, mod: null },
          { value: 'K', type: null, mod: null },
          { value: 'L', type: null, mod: null },
          { value: ';', type: null, mod: null },
          { value: '\'', type: null, mod: null },
          { value: 'ENTER', type: null, mod: null }
        ],
        [
          { value: 'LSHIFT', type: null, mod: null },
          { value: 'Z', type: null, mod: null },
          { value: 'X', type: null, mod: null },
          { value: 'C', type: null, mod: null },
          { value: 'V', type: null, mod: null },
          { value: 'B', type: null, mod: null },
          { value: 'N', type: null, mod: null },
          { value: 'M', type: null, mod: null },
          { value: ',', type: null, mod: null },
          { value: '.', type: null, mod: null },
          { value: '/', type: null, mod: null },
          { value: 'RSHIFT', type: null, mod: null }
        ],
        [
          { value: 'LCTRL', type: null, mod: null },
          { value: 'LGUI', type: null, mod: null },
          { value: 'LALT', type: null, mod: null },
          { value: 'ENTER', type: null, mod: null },
          { value: 'LED', type: null, mod: null },
          { value: 'SPACE', type: null, mod: null },
          { value: 'RALT', type: null, mod: null },
          { value: 'RGUI', type: null, mod: null },
          { value: 'MENU', type: null, mod: null },
          { value: 'ESC', type: null, mod: null },
          { value: 'RCTRL', type: null, mod: null }
        ]
      ]
    ]
  },
  {
    name: 'ansi',
    layout: 'ansi',
    keys: [
      [
        [
          { value: '`', type: null, mod: null },
          { value: '1', type: null, mod: null },
          { value: '2', type: null, mod: null },
          { value: '3', type: null, mod: null },
          { value: '4', type: null, mod: null },
          { value: '5', type: null, mod: null },
          { value: '6', type: null, mod: null },
          { value: '7', type: null, mod: null },
          { value: '8', type: null, mod: null },
          { value: '9', type: null, mod: null },
          { value: '0', type: null, mod: null },
          { value: '-', type: null, mod: null },
          { value: '=', type: null, mod: null },
          { value: 'BSPACE', type: null, mod: null }
        ],
        [
          { value: 'TAB', type: null, mod: null },
          { value: 'Q', type: null, mod: null },
          { value: 'W', type: null, mod: null },
          { value: 'E', type: null, mod: null },
          { value: 'R', type: null, mod: null },
          { value: 'T', type: null, mod: null },
          { value: 'Y', type: null, mod: null },
          { value: 'U', type: null, mod: null },
          { value: 'I', type: null, mod: null },
          { value: 'O', type: null, mod: null },
          { value: 'P', type: null, mod: null },
          { value: '[', type: null, mod: null },
          { value: ']', type: null, mod: null },
          { value: '\\', type: null, mod: null }
        ],
        [
          { value: 'CAPS', type: null, mod: null },
          { value: 'A', type: null, mod: null },
          { value: 'S', type: null, mod: null },
          { value: 'D', type: null, mod: null },
          { value: 'F', type: null, mod: null },
          { value: 'G', type: null, mod: null },
          { value: 'H', type: null, mod: null },
          { value: 'J', type: null, mod: null },
          { value: 'K', type: null, mod: null },
          { value: 'L', type: null, mod: null },
          { value: ';', type: null, mod: null },
          { value: '\'', type: null, mod: null },
          { value: 'ENTER', type: null, mod: null }
        ],
        [
          { value: 'LSHIFT', type: null, mod: null },
          { value: 'Z', type: null, mod: null },
          { value: 'X', type: null, mod: null },
          { value: 'C', type: null, mod: null },
          { value: 'V', type: null, mod: null },
          { value: 'B', type: null, mod: null },
          { value: 'N', type: null, mod: null },
          { value: 'M', type: null, mod: null },
          { value: ',', type: null, mod: null },
          { value: '.', type: null, mod: null },
          { value: '/', type: null, mod: null },
          { value: 'RSHIFT', type: null, mod: null }
        ],
        [
          { value: 'LCTRL', type: null, mod: null },
          { value: 'LGUI', type: null, mod: null },
          { value: 'LALT', type: null, mod: null },
          { value: 'SPACE', type: null, mod: null },
          { value: 'RALT', type: null, mod: null },
          { value: 'RGUI', type: null, mod: null },
          { value: 'MENU', type: null, mod: null },
          { value: 'RCTRL', type: null, mod: null }
        ]
      ]
    ]
  },
  {
    name: 'iso',
    layout: 'iso',
    keys: [
      [
        [
          { value: '`', type: null, mod: null },
          { value: '1', type: null, mod: null },
          { value: '2', type: null, mod: null },
          { value: '3', type: null, mod: null },
          { value: '4', type: null, mod: null },
          { value: '5', type: null, mod: null },
          { value: '6', type: null, mod: null },
          { value: '7', type: null, mod: null },
          { value: '8', type: null, mod: null },
          { value: '9', type: null, mod: null },
          { value: '0', type: null, mod: null },
          { value: '-', type: null, mod: null },
          { value: '=', type: null, mod: null },
          { value: 'BSPACE', type: null, mod: null }
        ],
        [
          { value: 'TAB', type: null, mod: null },
          { value: 'Q', type: null, mod: null },
          { value: 'W', type: null, mod: null },
          { value: 'E', type: null, mod: null },
          { value: 'R', type: null, mod: null },
          { value: 'T', type: null, mod: null },
          { value: 'Y', type: null, mod: null },
          { value: 'U', type: null, mod: null },
          { value: 'I', type: null, mod: null },
          { value: 'O', type: null, mod: null },
          { value: 'P', type: null, mod: null },
          { value: '[', type: null, mod: null },
          { value: ']', type: null, mod: null },
          { value: 'ENTER', type: null, mod: null }
        ],
        [
          { value: 'CAPS', type: null, mod: null },
          { value: 'A', type: null, mod: null },
          { value: 'S', type: null, mod: null },
          { value: 'D', type: null, mod: null },
          { value: 'F', type: null, mod: null },
          { value: 'G', type: null, mod: null },
          { value: 'H', type: null, mod: null },
          { value: 'J', type: null, mod: null },
          { value: 'K', type: null, mod: null },
          { value: 'L', type: null, mod: null },
          { value: ';', type: null, mod: null },
          { value: '\'', type: null, mod: null },
          { value: 'NONUS_HASH', type: null, mod: null }
        ],
        [
          { value: 'LSHIFT', type: null, mod: null },
          { value: 'NONUS_BSLASH', type: null, mod: null },
          { value: 'Z', type: null, mod: null },
          { value: 'X', type: null, mod: null },
          { value: 'C', type: null, mod: null },
          { value: 'V', type: null, mod: null },
          { value: 'B', type: null, mod: null },
          { value: 'N', type: null, mod: null },
          { value: 'M', type: null, mod: null },
          { value: ',', type: null, mod: null },
          { value: '.', type: null, mod: null },
          { value: '/', type: null, mod: null },
          { value: 'RSHIFT', type: null, mod: null }
        ],
        [
          { value: 'LCTRL', type: null, mod: null },
          { value: 'LGUI', type: null, mod: null },
          { value: 'LALT', type: null, mod: null },
          { value: 'SPACE', type: null, mod: null },
          { value: 'RALT', type: null, mod: null },
          { value: 'RGUI', type: null, mod: null },
          { value: 'MENU', type: null, mod: null },
          { value: 'RCTRL', type: null, mod: null }
        ]
      ]
    ]
  }
];
