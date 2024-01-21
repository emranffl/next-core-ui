[next-core-ui](../README.md) / [Exports](../modules.md) / ChipProps

# Interface: ChipProps

## Table of contents

### Properties

- [className](ChipProps.md#classname)
- [id](ChipProps.md#id)
- [internalRef](ChipProps.md#internalref)
- [onCloseIconClick](ChipProps.md#oncloseiconclick)
- [shape](ChipProps.md#shape)
- [size](ChipProps.md#size)
- [text](ChipProps.md#text)
- [variant](ChipProps.md#variant)

## Properties

### className

• `Optional` **className**: `string`

Additional class names

#### Defined in

src/components/Chip/index.tsx:65

___

### id

• `Optional` **id**: `string`

The id of the component

#### Defined in

src/components/Chip/index.tsx:73

___

### internalRef

• `Optional` **internalRef**: `LegacyRef`\<`HTMLSpanElement`\>

The internal prop to pass reference to the component. Use `ref` prop to pass ref.

#### Defined in

src/components/Chip/index.tsx:77

___

### onCloseIconClick

• `Optional` **onCloseIconClick**: `MouseEventHandler`\<`MouseEvent`\>

The function to be called when the close icon is clicked

#### Defined in

src/components/Chip/index.tsx:69

___

### shape

• `Optional` **shape**: ``"pill"`` \| ``"rounded"``

The shape of the chip

**`Default`**

```ts
rounded
```

**`Example`**

```tsx
<Chip shape='pill' />
```

#### Defined in

src/components/Chip/index.tsx:52

___

### size

• `Optional` **size**: ``"sm"`` \| ``"md"`` \| ``"lg"``

The rendering size

**`Default`**

```ts
md
```

**`Example`**

```tsx
<Chip size='sm' />
```

#### Defined in

src/components/Chip/index.tsx:42

___

### text

• **text**: `string`

The text to be displayed

#### Defined in

src/components/Chip/index.tsx:32

___

### variant

• `Optional` **variant**: ``"success"`` \| ``"primary"`` \| ``"secondary"`` \| ``"warning"`` \| ``"danger"`` \| ``"info"`` \| ``"neutral"``

The variant of the chip

**`Default`**

```ts
neutral
```

**`Example`**

```tsx
<Chip variant='primary' />
```

#### Defined in

src/components/Chip/index.tsx:61
