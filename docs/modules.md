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
- [MODAL\_SIZES](enums/MODAL_SIZES.md)
- [SPINNER\_TEXT\_POSITIONS](enums/SPINNER_TEXT_POSITIONS.md)
- [SPINNER\_TRACK\_COLORS](enums/SPINNER_TRACK_COLORS.md)
- [SPINNER\_VARIANTS](enums/SPINNER_VARIANTS.md)
- [TOAST\_POSITIONS](enums/TOAST_POSITIONS.md)
- [TOAST\_VARIANTS](enums/TOAST_VARIANTS.md)

## Interfaces

- [BadgeIconProps](interfaces/BadgeIconProps.md)
- [BadgeProps](interfaces/BadgeProps.md)
- [ButtonIconProps](interfaces/ButtonIconProps.md)
- [ButtonParams](interfaces/ButtonParams.md)
- [ChipProps](interfaces/ChipProps.md)
- [IconProps](interfaces/IconProps.md)
- [ModalProps](interfaces/ModalProps.md)
- [SpinnerProps](interfaces/SpinnerProps.md)
- [ToastContextProps](interfaces/ToastContextProps.md)
- [ToastParams](interfaces/ToastParams.md)

## Type Aliases

### ButtonProps

Ƭ **ButtonProps**: [`ButtonParams`](interfaces/ButtonParams.md) & \{ `link`: `NonNullable`\<[`ButtonParams`](interfaces/ButtonParams.md)[``"link"``]\>  } \| [`ButtonParams`](interfaces/ButtonParams.md) & \{ `onClick`: `NonNullable`\<[`ButtonParams`](interfaces/ButtonParams.md)[``"onClick"``]\>  }

#### Defined in

app/library/src/components/Button/index.tsx:192

___

### ToastProps

Ƭ **ToastProps**: [`ToastParams`](interfaces/ToastParams.md) & \{ `children`: [`ToastParams`](interfaces/ToastParams.md)[``"children"``] ; `message?`: `never`  } \| \{ `children?`: `never` ; `message`: [`ToastParams`](interfaces/ToastParams.md)[``"message"``]  }

#### Defined in

app/library/src/components/Toast/index.tsx:78

## Variables

### ToastContext

• `Const` **ToastContext**: `Context`\<[`ToastContextProps`](interfaces/ToastContextProps.md) \| `Record`\<`string`, `never`\>\>

#### Defined in

app/library/src/components/Toast/Context.tsx:11

## Functions

### Badge

▸ **Badge**(`props`): `ReactNode`

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`BadgeProps`](interfaces/BadgeProps.md) & `RefAttributes`\<`HTMLSpanElement`\> |

#### Returns

`ReactNode`

#### Defined in

node_modules/.pnpm/@types+react@18.2.47/node_modules/@types/react/index.d.ts:388

___

### BadgeIcon

▸ **BadgeIcon**(`props`): `ReactNode`

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`BadgeIconProps`](interfaces/BadgeIconProps.md) & `RefAttributes`\<`HTMLSpanElement`\> |

#### Returns

`ReactNode`

#### Defined in

node_modules/.pnpm/@types+react@18.2.47/node_modules/@types/react/index.d.ts:388

___

### Button

▸ **Button**(`props`): `ReactNode`

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |

#### Returns

`ReactNode`

#### Defined in

node_modules/.pnpm/@types+react@18.2.47/node_modules/@types/react/index.d.ts:388

___

### ButtonIcon

▸ **ButtonIcon**(`props`): `ReactNode`

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ButtonIconProps`](interfaces/ButtonIconProps.md) & `RefAttributes`\<`HTMLButtonElement`\> |

#### Returns

`ReactNode`

#### Defined in

node_modules/.pnpm/@types+react@18.2.47/node_modules/@types/react/index.d.ts:388

___

### Chip

▸ **Chip**(`props`): `ReactNode`

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ChipProps`](interfaces/ChipProps.md) & `RefAttributes`\<`HTMLSpanElement`\> |

#### Returns

`ReactNode`

#### Defined in

node_modules/.pnpm/@types+react@18.2.47/node_modules/@types/react/index.d.ts:388

___

### Icon

▸ **Icon**(`props`): `ReactNode`

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IconProps`](interfaces/IconProps.md) & `RefAttributes`\<`HTMLElement` \| `SVGSVGElement` \| `HTMLSpanElement`\> |

#### Returns

`ReactNode`

#### Defined in

node_modules/.pnpm/@types+react@18.2.47/node_modules/@types/react/index.d.ts:388

___

### LibraryContextProviderWrapper

▸ **LibraryContextProviderWrapper**(`props`): `ReactNode`

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.children` | `ReactNode` |

#### Returns

`ReactNode`

#### Defined in

node_modules/.pnpm/@types+react@18.2.47/node_modules/@types/react/index.d.ts:388

___

### Modal

▸ **Modal**(`props`): `ReactNode`

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ModalProps`](interfaces/ModalProps.md) |

#### Returns

`ReactNode`

#### Defined in

node_modules/.pnpm/@types+react@18.2.47/node_modules/@types/react/index.d.ts:388

___

### Spinner

▸ **Spinner**(`props`): `ReactNode`

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SpinnerProps`](interfaces/SpinnerProps.md) & `RefAttributes`\<`HTMLDivElement`\> |

#### Returns

`ReactNode`

#### Defined in

node_modules/.pnpm/@types+react@18.2.47/node_modules/@types/react/index.d.ts:388

___

### Toast

▸ **Toast**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`ToastProps`](modules.md#toastprops) |

#### Returns

`Element`

**`Name`**

Toast

**`Author`**

Emran

**`Example`**

```tsx
 // - rendering examples
 // render a toast with a message
 renderToast([
   {
     message: "This is a toast message",
   }
 ])
 // render a toast with children
 renderToast([
   {
     children: (
       <div className="flex place-content-center">
         <Icon name="telescope" size={18} strokeWidth={2} color="#6B7280" />
         <span className="ml-2">This is a toast message</span>
       </div>
     ),
   },
 ])
 // - implementation examples
 // complete example with all props
 <Toast
   message="This is a toast message"
   variant="primary"
   className="flex place-content-center"
   id="toast"
   icon={{
     name: "telescope",
     size: 18,
     strokeWidth: 2,
     color: "#6B7280",
   }}
   closeButtonVisibility={true}
   closeOnClick={true}
   autoClose={false}
   position="top-right"
   onClose={(e) => console.log("closed", e)}
 />
 ```

#### Defined in

app/library/src/components/Toast/index.tsx:131
