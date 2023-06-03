# Interface: ButtonParams

## Properties

### className

• `Optional` **className**: `string`

The class names for the button component

#### Defined in

src/components/Button/index.tsx:113

___

### disabled

• `Optional` **disabled**: ``true``

Disables the button

#### Defined in

src/components/Button/index.tsx:81

___

### fullWidth

• `Optional` **fullWidth**: ``true``

The full width state of the button

#### Defined in

src/components/Button/index.tsx:93

___

### icon

• `Optional` **icon**: [`Icon`](../modules.md#icon)

Icon props {} to render an icon inside the button,

**`See`**

`Icon` component

#### Defined in

src/components/Button/index.tsx:105

___

### id

• `Optional` **id**: `string`

The id for the button component

#### Defined in

src/components/Button/index.tsx:201

___

### internalRef

• `Optional` **internalRef**: ``null`` \| `string` \| (`instance`: ``null`` \| `HTMLAnchorElement`) => `void` \| `RefObject`<`HTMLAnchorElement`\> \| (`instance`: ``null`` \| `HTMLButtonElement`) => `void` \| `RefObject`<`HTMLButtonElement`\>

The internal prop to pass reference to the component. Use `ref` prop to pass ref.

#### Defined in

src/components/Button/index.tsx:205

___

### link

• `Optional` **link**: `Object`

The link {} that takes the following params

**`Param`**

The href for the link

**`Param`**

The mask for the link

**`Param`**

The target for the link

**`Param`**

The replace state for the link weather to replace the current history state or not

**`Param`**

The rel for the link

**`Example`**

```tsx
<Button
link={{ }}
/>
```

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `as?` | `string` \| `Url` | The mask for the link **`Example`** ```tsx <Button link={{ href: "/", as: "/home", }} ``` |
| `href` | `string` \| `Url` | The href for the link **`Example`** ```tsx <Button link={{ href: "/", }} /> ``` |
| `rel?` | `string` | The rel for the link **`Example`** ```tsx <Button link={{ href: "/", rel: "noopener noreferrer", }} /> ``` |
| `replace?` | ``true`` | The replace state for the link weather to replace the current history state or not **`Example`** ```tsx <Button link={{ href: "/", replace: true, }} /> ``` |
| `target?` | `HTMLAttributeAnchorTarget` | The target for the link **`Example`** ```tsx <Button link={{ href: "/", target: "_blank", }} /> ``` |

#### Defined in

src/components/Button/index.tsx:133

___

### onClick

• `Optional` **onClick**: `MouseEventHandler`<`MouseEvent`<`Element`, `MouseEvent`\>\>

The onClick event handler

#### Defined in

src/components/Button/index.tsx:117

___

### outline

• `Optional` **outline**: ``true``

The outline state of the button

#### Defined in

src/components/Button/index.tsx:89

___

### size

• `Optional` **size**: ``"sm"`` \| ``"md"`` \| ``"lg"``

The size of the button,

**`See`**

`BUTTON_SIZES` enum

#### Defined in

src/components/Button/index.tsx:101

___

### spinnerVisibility

• `Optional` **spinnerVisibility**: ``true``

The loading state of the button

#### Defined in

src/components/Button/index.tsx:97

___

### text

• **text**: `Object`

The text {} that takes the following params

**`Param`**

The text to display on the button

**`Param`**

The class names for the button text

**`Example`**

```tsx
<Button text={{ }} />
```

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `className?` | `string` | The class names for the button text **`Example`** ```tsx <Button text={{ value: "Click me" , className: "uppercase" }} /> ``` |
| `value` | `string` | The text to display on the button **`Example`** ```tsx <Button text={{ value: "Click me" }} /> ``` |

#### Defined in

src/components/Button/index.tsx:60

___

### type

• `Optional` **type**: ``"button"`` \| ``"reset"`` \| ``"submit"``

The type of the button,

**`See`**

`BUTTON_TYPES` enum

#### Defined in

src/components/Button/index.tsx:109

___

### variant

• `Optional` **variant**: ``"primary"`` \| ``"secondary"`` \| ``"success"`` \| ``"warning"`` \| ``"danger"`` \| ``"info"`` \| ``"neutral"`` \| ``"link"``

The variant of the button,

**`See`**

`BUTTON_VARIANTS` enum

#### Defined in

src/components/Button/index.tsx:85
