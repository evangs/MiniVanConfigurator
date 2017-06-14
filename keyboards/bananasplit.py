# coding: utf8
from common import Keyboard

layouts = []

ALL_LAYOUT =  'KEYMAP_ALL({},{},{},{},{},{},{},{},{},{},{},{},{},{},'
ALL_LAYOUT += '{},{},{},{},{},{},{},{},{},{},{},{},{},{},'
ALL_LAYOUT += '{},{},{},{},{},{},{},{},{},{},{},{},{},{},'
ALL_LAYOUT += '{},{},{},{},{},{},{},{},{},{},{},{},{},{},'
ALL_LAYOUT += '{},{},{},{},{},{},{},{},{},{},{}),'
layouts.append({'layout':ALL_LAYOUT, 'num_keys':67})

def getLayout(activeLayout):
    bs = 1 if (activeLayout & 256) > 0 else 0
    lshift = 1 if (activeLayout & 32) > 0 else 0
    rshift = 1 if (activeLayout & 24) > 0 else 0
    space = 1 if (activeLayout & 6) > 0 else 0
    singles = activeLayout & 1

    return ALL_LAYOUT.format(
        '{0}', '{1}', '{2}', '{3}', '{4}', '{5}', '{6}', '{7}', '{8}', '{9}', '{10}', '{11}', '{12}', '{13}',
        '{'+str(14+bs)+'}', '{'+str(15+bs)+'}', '{'+str(16+bs)+'}', '{'+str(17+bs)+'}', '{'+str(18+bs)+'}',
        '{'+str(19+bs)+'}','{'+str(20+bs)+'}','{'+str(21+bs)+'}','{'+str(22+bs)+'}','{'+str(23+bs)+'}',
        '{'+str(24+bs)+'}','{'+str(25+bs)+'}','{'+str(26+bs)+'}','{'+str(27+bs)+'}','{'+str(28+bs)+'}',
        '{'+str(29+bs)+'}','{'+str(30+bs)+'}','{'+str(31+bs)+'}','{'+str(32+bs)+'}','{'+str(33+bs)+'}',
        '{'+str(34+bs)+'}','{'+str(35+bs)+'}','{'+str(36+bs)+'}','{'+str(37+bs)+'}','{'+str(38+bs)+'}',
        '{'+str(39+bs)+'}','{'+str(40+bs)+'}','{'+str(14)+'}', '{'+str(41+bs)+'}', '{'+str(42+bs)+'}',
        '{'+str(42+bs+lshift)+'}', '{'+str(43+bs+lshift)+'}', '{'+str(44+bs+lshift)+'}', '{'+str(45+bs+lshift)+'}',
        '{'+str(46+bs+lshift)+'}', '{'+str(47+bs+lshift)+'}', '{'+str(48+bs+lshift)+'}', '{'+str(49+bs+lshift)+'}',
        '{'+str(50+bs+lshift)+'}', '{'+str(51+bs+lshift)+'}', '{'+str(52+bs+lshift)+'}', '{'+str(53+bs+lshift)+'}',
        '{'+str(53+bs+lshift+rshift)+'}', '{'+str(54+bs+lshift+rshift)+'}', '{'+str(55+bs+lshift+rshift)+'}',
        '{'+str(56+bs+lshift+rshift)+'}', '{'+str(56+bs+lshift+rshift+space)+'}', '{'+str(57+bs+lshift+rshift+space)+'}',
        '{'+str(57+bs+lshift+rshift+space+space)+'}', '{'+str(58+bs+lshift+rshift+space+space)+'}',
        '{'+str(59+bs+lshift+rshift+space+space)+'}', '{'+str(59+bs+lshift+rshift+space+space+singles)+'}',
        '{'+str(60+bs+lshift+rshift+space+space+singles)+'}')

def getNumKeys(activeLayout):
    bs = 1 if (activeLayout & 256) > 0 else 0
    lshift = 1 if (activeLayout & 32) > 0 else 0
    rshift = 1 if (activeLayout & 24) > 0 else 0
    space = 1 if (activeLayout & 6) > 0 else 0
    singles = activeLayout & 1

    return 61+bs+lshift+rshift+space+space+singles

keyboard = Keyboard(
        name='bananasplit',
        description='BananaSplit 60 PCB',
        firmware_folder='bananasplit',
        layouts=layouts,
        get_layout=getLayout,
        get_num_keys=getNumKeys
)
