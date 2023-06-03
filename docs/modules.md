# next-core-ui

## Enumerations

- [BADGE\_ICON\_POSITIONS](enums/BADGE_ICON_POSITIONS.md)
- [BADGE\_VARIANTS](enums/BADGE_VARIANTS.md)
- [BUTTON\_ICON\_POSITIONS](enums/BUTTON_ICON_POSITIONS.md)
- [BUTTON\_SIZES](enums/BUTTON_SIZES.md)
- [BUTTON\_TYPES](enums/BUTTON_TYPES.md)
- [BUTTON\_VARIANTS](enums/BUTTON_VARIANTS.md)
- [CHIP\_SHAPES](enums/CHIP_SHAPES.md)
- [CHIP\_SIZES](enums/CHIP_SIZES.md)
- [CHIP\_VARIANTS](enums/CHIP_VARIANTS.md)
- [SPINNER\_TEXT\_POSITIONS](enums/SPINNER_TEXT_POSITIONS.md)
- [SPINNER\_TRACK\_COLORS](enums/SPINNER_TRACK_COLORS.md)
- [SPINNER\_VARIANTS](enums/SPINNER_VARIANTS.md)

## Interfaces

- [BadgeIconProps](interfaces/BadgeIconProps.md)
- [BadgeProps](interfaces/BadgeProps.md)
- [ButtonIconProps](interfaces/ButtonIconProps.md)
- [ButtonParams](interfaces/ButtonParams.md)
- [ChipProps](interfaces/ChipProps.md)
- [IconProps](interfaces/IconProps.md)
- [SpinnerProps](interfaces/SpinnerProps.md)

## Type Aliases

### ButtonProps

Ƭ **ButtonProps**: [`ButtonParams`](interfaces/ButtonParams.md) & { `link`: `NonNullable`<[`ButtonParams`](interfaces/ButtonParams.md)[``"link"``]\>  } \| [`ButtonParams`](interfaces/ButtonParams.md) & { `onClick`: `NonNullable`<[`ButtonParams`](interfaces/ButtonParams.md)[``"onClick"``]\>  }

#### Defined in

[src/components/Button/index.tsx:212](https://github.com/emranffl/next-core-ui/blob/34617b4/src/components/Button/index.tsx#L212)

## Variables

### colors

• `Const` **colors**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `heartColor` | ``"#f59e0b"`` |
| `navActiveLink` | ``"transparent"`` |
| `navActiveLinkText` | ``"#00804B"`` |
| `navBg` | ``"#FFFFA8"`` |
| `navHover` | ``"#c6ecdd"`` |
| `navMenu` | ``"#00804B"`` |
| `navText` | ``"#212326"`` |

#### Defined in

[src/utility/tailwind.config.ts:77](https://github.com/emranffl/next-core-ui/blob/34617b4/src/utility/tailwind.config.ts#L77)

___

### spacing

• `Const` **spacing**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `0` | ``"0"`` |
| `0.5` | ``"0.5008px"`` |
| `1` | ``"1px"`` |
| `1.5` | ``"1.5008px"`` |
| `10` | ``"10px"`` |
| `100` | ``"100px"`` |
| `104` | ``"104px"`` |
| `108` | ``"108px"`` |
| `11` | ``"11px"`` |
| `112` | ``"112px"`` |
| `116` | ``"116px"`` |
| `12` | ``"12px"`` |
| `120` | ``"120px"`` |
| `124` | ``"124px"`` |
| `128` | ``"128px"`` |
| `132` | ``"132px"`` |
| `136` | ``"136px"`` |
| `14` | ``"14px"`` |
| `140` | ``"140px"`` |
| `144` | ``"144px"`` |
| `148` | ``"148px"`` |
| `152` | ``"152px"`` |
| `156` | ``"156px"`` |
| `16` | ``"16px"`` |
| `160` | ``"160px"`` |
| `164` | ``"164px"`` |
| `168` | ``"168px"`` |
| `172` | ``"172px"`` |
| `176` | ``"176px"`` |
| `180` | ``"180px"`` |
| `184` | ``"184px"`` |
| `188` | ``"188px"`` |
| `192` | ``"192px"`` |
| `196` | ``"196px"`` |
| `2` | ``"2px"`` |
| `2.5` | ``"2.5008px"`` |
| `20` | ``"20px"`` |
| `200` | ``"200px"`` |
| `204` | ``"204px"`` |
| `208` | ``"208px"`` |
| `212` | ``"212px"`` |
| `216` | ``"216px"`` |
| `220` | ``"220px"`` |
| `24` | ``"24px"`` |
| `28` | ``"28px"`` |
| `3` | ``"3px"`` |
| `3.5` | ``"3.5008px"`` |
| `32` | ``"32px"`` |
| `36` | ``"36px"`` |
| `4` | ``"4px"`` |
| `40` | ``"40px"`` |
| `44` | ``"44px"`` |
| `48` | ``"48px"`` |
| `5` | ``"5px"`` |
| `52` | ``"52px"`` |
| `56` | ``"56px"`` |
| `6` | ``"6px"`` |
| `60` | ``"60px"`` |
| `64` | ``"64px"`` |
| `68` | ``"68px"`` |
| `7` | ``"7px"`` |
| `72` | ``"72px"`` |
| `76` | ``"76px"`` |
| `8` | ``"8px"`` |
| `80` | ``"80px"`` |
| `84` | ``"84px"`` |
| `88` | ``"88px"`` |
| `9` | ``"9px"`` |
| `92` | ``"92px"`` |
| `96` | ``"96px"`` |
| `px` | ``"1px"`` |

#### Defined in

[src/utility/tailwind.config.ts:3](https://github.com/emranffl/next-core-ui/blob/34617b4/src/utility/tailwind.config.ts#L3)

## Functions

### Badge

▸ **Badge**(`props`): ``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`BadgeProps`](interfaces/BadgeProps.md) & `RefAttributes`<`HTMLSpanElement`\> |

#### Returns

``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:351

___

### BadgeIcon

▸ **BadgeIcon**(`props`): ``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`BadgeIconProps`](interfaces/BadgeIconProps.md) & `RefAttributes`<`HTMLSpanElement`\> |

#### Returns

``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:351

___

### Button

▸ **Button**(`props`): ``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |

#### Returns

``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:351

___

### ButtonIcon

▸ **ButtonIcon**(`props`): ``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ButtonIconProps`](interfaces/ButtonIconProps.md) & `RefAttributes`<`HTMLButtonElement`\> |

#### Returns

``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:351

___

### Chip

▸ **Chip**(`props`): ``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ChipProps`](interfaces/ChipProps.md) & `RefAttributes`<`HTMLSpanElement`\> |

#### Returns

``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:351

___

### Icon

▸ **Icon**(`props`): ``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IconProps`](interfaces/IconProps.md) & `RefAttributes`<`HTMLElement` \| `SVGSVGElement` \| `HTMLSpanElement`\> |

#### Returns

``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:351

___

### Spinner

▸ **Spinner**(`props`): ``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SpinnerProps`](interfaces/SpinnerProps.md) & `RefAttributes`<`HTMLDivElement`\> |

#### Returns

``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:351
