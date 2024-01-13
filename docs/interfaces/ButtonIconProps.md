# Interface: ButtonIconProps

## Properties

### className

• `Optional` **className**: `string`

The class name of the button

#### Defined in

app/library/src/components/Button/ButtonIcon.tsx:28

___

### disabled

• `Optional` **disabled**: ``true``

The disabled state of the button

#### Defined in

app/library/src/components/Button/ButtonIcon.tsx:42

___

### fullWidth

• `Optional` **fullWidth**: ``true``

The full width state of the button

#### Defined in

app/library/src/components/Button/ButtonIcon.tsx:46

___

### icon

• **icon**: [`IconProps`](IconProps.md)

Icon props {} to render an icon inside the button,

**`See`**

`Icon` component

#### Defined in

app/library/src/components/Button/ButtonIcon.tsx:12

___

### id

• `Optional` **id**: `string`

The id of the button

#### Defined in

app/library/src/components/Button/ButtonIcon.tsx:54

___

### internalRef

• `Optional` **internalRef**: `LegacyRef`\<`HTMLButtonElement`\>

The internal prop to pass reference to the component. Use `ref` prop to pass ref.

#### Defined in

app/library/src/components/Button/ButtonIcon.tsx:58

___

### onClick

• **onClick**: `MouseEventHandler`\<`MouseEvent`\>

The function to be called when the button is clicked

**`Example`**

```tsx
<ButtonIcon
onClick={() => console.log("clicked")}
/>
```

#### Defined in

app/library/src/components/Button/ButtonIcon.tsx:38

___

### outline

• `Optional` **outline**: ``true``

The outline state of the button

#### Defined in

app/library/src/components/Button/ButtonIcon.tsx:50

___

### size

• `Optional` **size**: ``"sm"`` \| ``"md"`` \| ``"lg"``

The size of the button,

**`See`**

`SIZES` enum

#### Defined in

app/library/src/components/Button/ButtonIcon.tsx:20

___

### title

• `Optional` **title**: `string`

The title of the button

#### Defined in

app/library/src/components/Button/ButtonIcon.tsx:24

___

### variant

• `Optional` **variant**: ``"primary"`` \| ``"link"`` \| ``"secondary"`` \| ``"success"`` \| ``"warning"`` \| ``"danger"`` \| ``"info"`` \| ``"neutral"``

The variant of the button,

**`See`**

`VARIANTS` enum

#### Defined in

app/library/src/components/Button/ButtonIcon.tsx:16
