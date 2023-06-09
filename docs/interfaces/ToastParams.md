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

[src/components/Toast/index.tsx:62](https://github.com/emranffl/next-core-ui/blob/0536197/src/components/Toast/index.tsx#L62)

___

### children

• `Optional` **children**: `ReactNode`

Any React nodes to be displayed in the toast instead of the message

#### Defined in

[src/components/Toast/index.tsx:37](https://github.com/emranffl/next-core-ui/blob/0536197/src/components/Toast/index.tsx#L37)

___

### className

• `Optional` **className**: `string`

Additional class names to be applied to the toast container element

#### Defined in

[src/components/Toast/index.tsx:41](https://github.com/emranffl/next-core-ui/blob/0536197/src/components/Toast/index.tsx#L41)

___

### closeButtonVisibility

• `Optional` **closeButtonVisibility**: `boolean`

Whether to display a close button for the toast

#### Defined in

[src/components/Toast/index.tsx:53](https://github.com/emranffl/next-core-ui/blob/0536197/src/components/Toast/index.tsx#L53)

___

### closeOnClick

• `Optional` **closeOnClick**: ``true``

Whether to close the toast when it is clicked

#### Defined in

[src/components/Toast/index.tsx:49](https://github.com/emranffl/next-core-ui/blob/0536197/src/components/Toast/index.tsx#L49)

___

### icon

• `Optional` **icon**: [`IconProps`](IconProps.md)

Icon to be displayed in the toast,

**`See`**

`Icon` component

#### Defined in

[src/components/Toast/index.tsx:57](https://github.com/emranffl/next-core-ui/blob/0536197/src/components/Toast/index.tsx#L57)

___

### id

• `Optional` **id**: `string`

The ID of the toast element

#### Defined in

[src/components/Toast/index.tsx:74](https://github.com/emranffl/next-core-ui/blob/0536197/src/components/Toast/index.tsx#L74)

___

### message

• `Optional` **message**: `string`

The message to be displayed in the toast

#### Defined in

[src/components/Toast/index.tsx:33](https://github.com/emranffl/next-core-ui/blob/0536197/src/components/Toast/index.tsx#L33)

___

### onClose

• `Optional` **onClose**: `MouseEventHandler`<`MouseEvent`\>

A function to be called when the toast is closed

#### Defined in

[src/components/Toast/index.tsx:70](https://github.com/emranffl/next-core-ui/blob/0536197/src/components/Toast/index.tsx#L70)

___

### position

• `Optional` **position**: ``"top-right"`` \| ``"top-left"`` \| ``"bottom-left"`` \| ``"bottom-right"``

The position of the toast on the screen,

**`See`**

`TOAST_POSITIONS` enum

#### Defined in

[src/components/Toast/index.tsx:66](https://github.com/emranffl/next-core-ui/blob/0536197/src/components/Toast/index.tsx#L66)

___

### variant

• `Optional` **variant**: ``"primary"`` \| ``"secondary"`` \| ``"success"`` \| ``"warning"`` \| ``"danger"`` \| ``"info"``

The variant of toast to display,

**`See`**

`TOAST_VARIANTS` enum

#### Defined in

[src/components/Toast/index.tsx:45](https://github.com/emranffl/next-core-ui/blob/0536197/src/components/Toast/index.tsx#L45)
