# coding: utf8
from common import Keyboard

layouts = []
STANDARD_LAYOUT = 'KEYMAP({}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},' # 14
STANDARD_LAYOUT += '{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},' # 14
STANDARD_LAYOUT += '{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},' # 13
STANDARD_LAYOUT += '{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},' # 13
STANDARD_LAYOUT += '{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}),' # 11
layouts.append({'layout':STANDARD_LAYOUT, 'num_keys':65})

HHKB_LAYOUT = 'KEYMAP_HHKBANANA({0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}, {10}, {11}, {12}, {13},' # 15
HHKB_LAYOUT += '{15}, {16}, {17}, {18}, {19}, {20}, {21}, {22}, {23}, {24}, {25}, {26}, {27}, {28},' # 14
HHKB_LAYOUT += '{29}, {30}, {31}, {32}, {33}, {34}, {35}, {36}, {37}, {38}, {39}, {40}, {41}, {14},' # 13
HHKB_LAYOUT += '{42}, {43}, {44}, {45}, {46}, {47}, {48}, {49}, {50}, {51}, {52}, {53},' # 12
HHKB_LAYOUT += '{54}, {55}, {56}, {57}, {58}, {59}, {60}, {61}, {62}, {63}, {64}),' # 11
layouts.append({'layout':HHKB_LAYOUT, 'num_keys':65})

ANSI_LAYOUT = 'KEYMAP_ANSI({}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},' # 14
ANSI_LAYOUT += '{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},' # 14
ANSI_LAYOUT += '{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},' # 13
ANSI_LAYOUT += '{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},' # 12
ANSI_LAYOUT += '{}, {}, {}, {}, {}, {}, {}, {}),' # 8
layouts.append({'layout':ANSI_LAYOUT, 'num_keys':61})

ISO_LAYOUT = 'KEYMAP_ISO({}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},' # 14
ISO_LAYOUT += '{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},' # 14
ISO_LAYOUT += '{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},' # 13
ISO_LAYOUT += '{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},' # 13
ISO_LAYOUT += '{}, {}, {}, {}, {}, {}, {}, {}),' # 8
layouts.append({'layout':ISO_LAYOUT, 'num_keys':62})

keyboard = Keyboard(
        name='bananasplit',
        description='BananaSplit 60 PCB',
        firmware_folder='bananasplit',
        layouts=layouts
)
