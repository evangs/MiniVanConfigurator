def getFnKey(fn_actions_list, action):
    try:
        action_index = fn_actions_list.index(action)
    except ValueError:
        fn_actions_list.append(action)
        action_index = len(fn_actions_list) - 1

    return fn_actions_list, 'FN{}'.format(action_index)

def prepKeyForTemplate(fn_actions_list, key):

    key_type = key.get('type')
    key_value = key.get('value')
    key_secondary = key.get('secondary')

    if key_type is 'normal':

        if key_value is 'LED':
            action = 'ACTION_BACKLIGHT_STEP()'
            return getFnKey(fn_actions_list, action)

        elif key_value is 'FLASH':
            action = 'ACTION_FUNCTION(RESET_KEY)'
            return getFnKey(fn_actions_list, action)

        return fn_actions_list, key_value

    elif key_type is 'momentary':
        layer = key_value[1:]
        action = 'ACTION_LAYER_MOMENTARY({})'.format(layer)
        return getFnKey(fn_actions_list, action)

    elif key_type is 'toggle':
        layer = key_value[1:]
        action = 'ACTION_LAYER_TOGGLE({})'.format(layer)
        return getFnKey(fn_actions_list, action)

    elif key_type is 'tapkey':
        mode = 'MODS'
        prefix = 'MOD_'
        if key_secondary[1:].isdigit():
            mode = 'LAYER'
            prefix = ''
            key_secondary = key_secondary[1:]
        action = 'ACTION_{0}_TAP_KEY({1}{2}, KC_{3})'.format(mode, prefix, key_secondary, key_value)
        return getFnKey(fn_actions_list, action)

    elif key_type is 'oneshot':
        action = 'ACTION_MODS_ONESHOT(MOD_{})'.format(key_value)
        return getFnKey(fn_actions_list, action)

    elif key_type is 'setdefault':
        action = 'ACTION_DEFAULT_LAYER_SET({})'.format(key_value[1:])
        return getFnKey(fn_actions_list, action)

    elif key_type is 'setlayerclear':
        action = 'ACTION_LAYER_SET_CLEAR({})'.format(key_value[1:])
        return getFnKey(fn_actions_list, action)

    elif key_type is 'modkey':
        action = 'ACTION_MODS_KEY({0}, KC_{1})'.format(key_secondary, key_value)
        return getFnKey(fn_actions_list, action)


def buildKeymap(keyData):
    fn_actions_list = []
    keys = []

    for row in keyData:
        for key in row:
            fn_actions_list, k = prepKeyForTemplate(fn_actions_list, key)
            keys.append(k)

    return keys, fn_actions_list
