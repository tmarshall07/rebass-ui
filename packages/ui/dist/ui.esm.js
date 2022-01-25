import { __assign, __awaiter, __generator, __rest } from 'tslib';
import React, { useEffect, forwardRef, useState, useRef, useContext } from 'react';
import { Box as Box$2, Flex as Flex$2, Text, Button as Button$2 } from 'rebass/styled-components';
import { Input as Input$2, Switch as Switch$2 } from '@rebass/forms/styled-components';
import { ThemeProvider } from 'styled-components';
import { darken, transparentize } from 'polished';

var Debouncer$1 = /** @class */ (function () {
    function Debouncer(initialValue, delay) {
        if (initialValue === void 0) { initialValue = null; }
        if (delay === void 0) { delay = 500; }
        this.value = initialValue;
        this.delay = delay;
        this.timeout = null;
    }
    Debouncer.prototype.getValue = function () {
        return this.value;
    };
    Debouncer.prototype.setValue = function (newValue, callback) {
        var _this = this;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            _this.value = newValue;
            callback(newValue);
        }, this.delay);
    };
    return Debouncer;
}());

/**
 * A react hook that fires the callback when clicking outside of the referenced element
 *
 * @param {Object} ref - react reference object with a `current` property
 * @param {Function} callback - a callback function that fires when clicking outside the element
 */
var useOutsideClick = function (ref, callback) {
    var handleClick = function (e) {
        if (ref.current && !ref.current.contains(e.target)) {
            callback(e);
        }
    };
    useEffect(function () {
        document.addEventListener('click', handleClick);
        return function () {
            // Cleanup
            document.removeEventListener('click', handleClick);
        };
    });
};

var Box$1 = forwardRef(function (props, ref) {
    return React.createElement(Box$2, __assign({ color: "text" }, props, { ref: ref }));
});
Box$1.displayName = 'Box';
var Flex$1 = forwardRef(function (props, ref) { return React.createElement(Flex$2, __assign({ color: "text" }, props, { ref: ref })); });
Flex$1.displayName = 'Flex';

var Input$1 = function (props) { return (React.createElement(Input$2, __assign({}, props, { sx: __assign({ borderRadius: 3, borderColor: 'transparent', bg: 'gray5', p: '0.9em', color: 'gray80' }, (props.sx || {})) }))); };

var Autocomplete$1 = function (props) {
    var value = props.value, placeholder = props.placeholder, onChange = props.onChange, _a = props.items, items = _a === void 0 ? [] : _a, onSelect = props.onSelect, keyExtractor = props.keyExtractor, renderItem = props.renderItem, _b = props.menuStyle, menuStyle = _b === void 0 ? {} : _b;
    var _c = useState(false), menuVisible = _c[0], setMenuVisible = _c[1];
    var containerRef = useRef();
    useOutsideClick(containerRef, function () { return setMenuVisible(false); });
    var handleSelect = function (item) {
        setMenuVisible(false);
        onSelect === null || onSelect === void 0 ? void 0 : onSelect(item);
    };
    var handleFocus = function () {
        setMenuVisible(true);
    };
    return (React.createElement(Box$1, { ref: containerRef },
        React.createElement(Input$1, { placeholder: placeholder, onFocus: handleFocus, value: value, onChange: onChange }),
        menuVisible && !!items.length && (React.createElement(Box$1, { sx: __assign({ position: 'absolute', bg: 'bg-2', maxHeight: 300, width: 400, maxWidth: '80%', overflow: 'auto', zIndex: 2, marginTop: 1, borderRadius: 5, boxShadow: 'large', borderStyle: 'solid', borderColor: 'gray5', borderWidth: 1 }, menuStyle) }, items.map(function (item) { return (React.createElement(Box$1, { onClick: function () { return handleSelect(item); }, key: keyExtractor(item) }, renderItem(item))); })))));
};

var base = {
    color: 'gray90',
};
var P$1 = function (props) { return React.createElement(Text, __assign({ as: "p" }, base, props)); };
var A$1 = function (props) { return React.createElement(Text, __assign({ as: "a", fontSize: 16, fontWeight: 400 }, base, props)); };
var H4$1 = function (props) { return React.createElement(Text, __assign({ as: "h4" }, base, props)); };
var H3$1 = function (props) { return React.createElement(Text, __assign({ as: "h3" }, base, props)); };
var H2$1 = function (props) { return React.createElement(Text, __assign({ as: "h2" }, base, props)); };
var H1$1 = function (props) { return React.createElement(Text, __assign({ as: "h1", fontWeight: 700 }, base, props)); };

var AutocompleteMenuItem$1 = function (props) {
    var onSelect = props.onSelect, text = props.text, _a = props.sx, sx = _a === void 0 ? {} : _a;
    return (React.createElement(P$1, { p: 2, sx: __assign({ cursor: 'pointer', ':hover': {
                bg: 'gray10',
            } }, { sx: sx }), onClick: onSelect }, text));
};

var PREFERS_COLOR_SCHEME = '(prefers-color-scheme: dark)';
var STORAGE_KEYS;
(function (STORAGE_KEYS) {
    STORAGE_KEYS["mode"] = "settings:dark:mode";
    STORAGE_KEYS["value"] = "settings:dark:value";
})(STORAGE_KEYS || (STORAGE_KEYS = {}));
var getSchemeSettings = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Promise.all([
                    localStorage.getItem(STORAGE_KEYS['mode']),
                    localStorage.getItem(STORAGE_KEYS['value']),
                ])];
            case 1: return [2 /*return*/, (_a.sent())];
        }
    });
}); };
// The useLightDarkScheme value is always either light or dark, but the built-in
// type suggests that it can be null. This will not happen in practice, so this
// makes it a bit easier to work with.
function useLightDarkScheme() {
    var _this = this;
    var _a = useState('light'), systemScheme = _a[0], setSystemScheme = _a[1];
    var _b = useState('light'), scheme = _b[0], setScheme = _b[1];
    var _c = useState(true), auto = _c[0], setAuto = _c[1];
    // Set whether we should be using the device scheme or user's scheme
    var handleSetAuto = function (isAuto) {
        if (isAuto) {
            void localStorage.setItem(STORAGE_KEYS['mode'], 'auto');
        }
        else {
            void localStorage.setItem(STORAGE_KEYS['mode'], 'user');
        }
        setAuto(isAuto);
    };
    // Set the current scheme
    var handleSetScheme = function (scheme) {
        void localStorage.setItem(STORAGE_KEYS['value'], scheme);
        setScheme(scheme);
    };
    // Get initial stored user preference
    var getUserPreference = function () { return __awaiter(_this, void 0, void 0, function () {
        var _a, state, userScheme;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, getSchemeSettings()];
                case 1:
                    _a = _b.sent(), state = _a[0], userScheme = _a[1];
                    if (state === 'user') {
                        if (userScheme && userScheme !== scheme)
                            setScheme(userScheme);
                        setAuto(false);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    useEffect(function () {
        var updateSchemes = function (event) {
            var newColorScheme = event.matches ? 'dark' : 'light';
            setSystemScheme(newColorScheme);
        };
        void getUserPreference();
        window.matchMedia(PREFERS_COLOR_SCHEME).addEventListener('change', updateSchemes);
        var scheme = window.matchMedia(PREFERS_COLOR_SCHEME) ? 'dark' : 'light';
        setSystemScheme(scheme);
        return function () {
            window.matchMedia(PREFERS_COLOR_SCHEME).removeEventListener('change', updateSchemes);
        };
    }, []);
    return {
        scheme: auto ? systemScheme : scheme,
        userScheme: scheme,
        auto: auto,
        setScheme: handleSetScheme,
        setAuto: handleSetAuto,
    };
}
var SchemeContext = React.createContext({
    colors: {},
    scheme: 'light',
});
function SchemeProvider$1(_a) {
    var _b = _a.theme, theme = _b === void 0 ? {} : _b, _c = _a.scheme, scheme = _c === void 0 ? '' : _c, _d = _a.colorSchemes, colorSchemes = _d === void 0 ? {} : _d, children = _a.children;
    // Get current light / dark scheme
    var colorScheme = useLightDarkScheme();
    // Use passed scheme if it exists, otherwise use light / dark, otherwise use first available scheme
    var colors = colorSchemes[scheme] || colorSchemes[colorScheme.scheme] || colorSchemes[Object.keys(colorSchemes)[0]];
    return (React.createElement(SchemeContext.Provider, { value: __assign(__assign({}, colorScheme), { colors: colors }) },
        React.createElement(ThemeProvider, { theme: __assign(__assign({}, theme), { colors: colors }) }, children)));
}
var useSchemeContext$1 = function () { return useContext(SchemeContext); };

function useColors$1() {
    var colors = useSchemeContext$1().colors;
    return colors;
}

var sizes = {
    s: {
        px: '0.65em',
        py: '0.5em',
        fontSize: '14px',
    },
};
var outline = function (color) {
    return {
        bg: 'transparent',
        color: color,
        border: "1px solid ".concat(transparentize(0.75, color)),
        ':hover': {
            bg: color ? transparentize(0.95, color) : transparentize(0.95, 'black'),
        },
        ':active': {
            bg: color ? transparentize(0.92, color) : transparentize(0.92, 'black'),
        },
    };
};
var transparent = function (color) { return ({
    bg: 'transparent',
    boxShadow: 'none',
    color: color,
    ':hover': {
        bg: color ? transparentize(0.9, color) : transparentize(0.9, 'black'),
    },
    ':active': {
        bg: color ? transparentize(0.85, color) : transparentize(0.85, 'black'),
    },
}); };
var disabled = function (isDisabled, bg) {
    var styles = { opacity: 0.5, cursor: 'initial', bg: bg };
    if (isDisabled)
        return __assign(__assign({}, styles), { ':focus,:active,:hover': __assign({}, styles) });
    return {};
};
// eslint-disable-next-line complexity
function Button$1(props) {
    var children = props.children, _a = props.color, colorProp = _a === void 0 ? 'text' : _a, _b = props.bg, bg = _b === void 0 ? 'gray5' : _b, sx = props.sx, startIcon = props.startIcon, variant = props.variant, size = props.size, onClick = props.onClick, endIcon = props.endIcon, _c = props.enabled, enabled = _c === void 0 ? true : _c;
    var colors = useColors$1();
    var color = colors[colorProp] || colorProp;
    return (React.createElement(Button$2, __assign({}, props, { sx: __assign(__assign(__assign(__assign(__assign({ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontWeight: 'bold', color: color, bg: bg, ':focus': {
                outline: 'none',
            }, ':hover': {
                bg: darken(0.05, colors[bg]),
            }, ':active': {
                bg: darken(0.1, colors[bg]),
            } }, (size && sizes[size] ? sizes[size] : {})), (variant === 'outline' && color ? outline(color) : {})), (variant === 'transparent' && color ? transparent(color) : {})), disabled(!enabled, variant === 'outline' ? 'transparent' : bg)), sx), disabled: !enabled, variant: variant, onClick: onClick }),
        startIcon && (React.createElement(Flex$2, { mr: 2, alignItems: "center" }, startIcon)),
        children,
        endIcon && (React.createElement(Flex$2, { ml: 2, alignItems: "center" }, endIcon))));
}

var Card$1 = function (props) {
    var _a = props.boxShadow, boxShadow = _a === void 0 ? 'large' : _a;
    return (React.createElement(Box$1, __assign({ p: [3, 4], bg: "bg-0", color: "text" }, props, { sx: __assign({ boxShadow: boxShadow, borderRadius: 10 }, (props.sx || {})) })));
};

// Hook
function useDebounce$1(value, delay) {
    if (delay === void 0) { delay = 500; }
    // State and setters for debounced value
    var _a = useState(value), debouncedValue = _a[0], setDebouncedValue = _a[1];
    var debouncer = useRef(new Debouncer$1(value, delay));
    useEffect(function () {
        debouncer.current.setValue(value, function () {
            setDebouncedValue(value);
        });
    }, [value, delay]);
    return debouncedValue;
}

var FetchAutocomplete$1 = function (props) {
    var onSelect = props.onSelect, request = props.request, formatResponse = props.formatResponse, _a = props.debounce, debounce = _a === void 0 ? 500 : _a;
    var _b = useState([]), autocompleteItems = _b[0], setAutocompleteItems = _b[1];
    var debouncedValue = useDebounce$1(props.value, debounce);
    var search = function (val) { return __awaiter(void 0, void 0, void 0, function () {
        var res, newItems;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request(val)];
                case 1:
                    res = _a.sent();
                    if (res) {
                        newItems = formatResponse(res);
                        setAutocompleteItems(newItems);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    useEffect(function () {
        search(debouncedValue);
    }, [debouncedValue]);
    return React.createElement(Autocomplete$1, __assign({}, props, { items: autocompleteItems, onSelect: onSelect }));
};

function IconButton$1(props) {
    var icon = props.icon, sx = props.sx, round = props.round, _a = props.iconSize, iconSize = _a === void 0 ? 24 : _a, onClick = props.onClick, rest = __rest(props, ["icon", "sx", "round", "iconSize", "onClick"]);
    return (React.createElement(Button$1, __assign({}, rest, { onClick: onClick, sx: __assign(__assign({ fontSize: iconSize, width: '1.75em', height: '1.75em', padding: 0 }, (round ? { borderRadius: 50 } : {})), sx) }), icon));
}

var Switch$1 = function (props) {
    var _a = props.color, color = _a === void 0 ? 'primary' : _a, disabled = props.disabled, checked = props.checked;
    return (React.createElement(Switch$2, __assign({ sx: {
            borderColor: checked ? color : 'gray10',
            opacity: disabled ? 0.5 : 1,
            '> div': {
                backgroundColor: 'bg-0',
                borderColor: checked ? color : 'gray20',
            },
            '&[aria-checked=false]': {
                bg: 'gray5',
            },
            '&[aria-checked=true]': {
                bg: color,
            },
        } }, props)));
};

var Autocomplete = Autocomplete$1;
var AutocompleteMenuItem = AutocompleteMenuItem$1;
var Box = Box$1;
var Flex = Flex$1;
var Button = Button$1;
var Card = Card$1;
var FetchAutocomplete = FetchAutocomplete$1;
var IconButton = IconButton$1;
var Input = Input$1;
var Switch = Switch$1;
var P = P$1;
var H1 = H1$1;
var H2 = H2$1;
var H3 = H3$1;
var H4 = H4$1;
var A = A$1;
var Debouncer = Debouncer$1;
var useClickOutside = useOutsideClick;
var useColors = useColors$1;
var useDebounce = useDebounce$1;
var useSchemeContext = useSchemeContext$1;
var SchemeProvider = SchemeProvider$1;

export { A, Autocomplete, AutocompleteMenuItem, Box, Button, Card, Debouncer, FetchAutocomplete, Flex, H1, H2, H3, H4, IconButton, Input, P, SchemeProvider, Switch, useClickOutside, useColors, useDebounce, useSchemeContext };