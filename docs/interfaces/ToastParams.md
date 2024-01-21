# Interface: ToastParams

## Properties

### autoClose

• `Optional` **autoClose**: `number` \| ``false``

The duration for which the toast should be visible in milliseconds, or `false` to disable auto-closing

**`Default`**

```ts
3500(ms)
```

#### Defined in

app/library/src/components/Toast/index.tsx:59

___

### children

• `Optional` **children**: `ReactNode`

Any React nodes to be displayed in the toast instead of the message

#### Defined in

app/library/src/components/Toast/index.tsx:34

___

### className

• `Optional` **className**: `string`

Additional class names to be applied to the toast container element

#### Defined in

app/library/src/components/Toast/index.tsx:38

___

### closeButtonVisibility

• `Optional` **closeButtonVisibility**: `boolean`

Whether to display a close button for the toast

#### Defined in

app/library/src/components/Toast/index.tsx:50

___

### closeOnClick

• `Optional` **closeOnClick**: ``true``

Whether to close the toast when it is clicked

#### Defined in

app/library/src/components/Toast/index.tsx:46

___

### icon

• `Optional` **icon**: [`IconProps`](IconProps.md)

Icon to be displayed in the toast,

**`See`**

`Icon` component

#### Defined in

app/library/src/components/Toast/index.tsx:54

___

### id

• `Optional` **id**: `string`

The ID of the toast element

#### Defined in

app/library/src/components/Toast/index.tsx:71

___

### message

• `Optional` **message**: `string`

The message to be displayed in the toast

#### Defined in

app/library/src/components/Toast/index.tsx:30

___

### onClose

• `Optional` **onClose**: `MouseEventHandler`\<`HTMLButtonElement`\>

A function to be called when the toast is closed

#### Defined in

app/library/src/components/Toast/index.tsx:67

___

### position

• `Optional` **position**: ``"top-right"`` \| ``"top-left"`` \| ``"bottom-left"`` \| ``"bottom-right"``

The position of the toast on the screen,

**`See`**

`TOAST_POSITIONS` enum

#### Defined in

app/library/src/components/Toast/index.tsx:63

___

### variant

• `Optional` **variant**: ``"primary"`` \| ``"secondary"`` \| ``"success"`` \| ``"warning"`` \| ``"danger"`` \| ``"info"``

The variant of toast to display,

**`See`**

`TOAST_VARIANTS` enum

#### Defined in

app/library/src/components/Toast/index.tsx:42
