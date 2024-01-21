[next-core-ui](../README.md) / [Exports](../modules.md) / SpinnerProps

# Interface: SpinnerProps

## Table of contents

### Properties

- [className](SpinnerProps.md#classname)
- [id](SpinnerProps.md#id)
- [internalRef](SpinnerProps.md#internalref)
- [size](SpinnerProps.md#size)
- [text](SpinnerProps.md#text)
- [trackColor](SpinnerProps.md#trackcolor)
- [variant](SpinnerProps.md#variant)

## Properties

### className

• `Optional` **className**: `string`

The class names of the spinner

#### Defined in

src/components/Spinner/index.tsx:43

___

### id

• `Optional` **id**: `string`

The id of the spinner

#### Defined in

src/components/Spinner/index.tsx:60

___

### internalRef

• `Optional` **internalRef**: `LegacyRef`\<`HTMLDivElement`\>

The internal prop to pass reference to the component. Use `ref` prop to pass ref.

#### Defined in

src/components/Spinner/index.tsx:64

___

### size

• `Optional` **size**: `number`

The size of the spinner in pixels

#### Defined in

src/components/Spinner/index.tsx:34

___

### text

• `Optional` **text**: `Object`

The text to show with the spinner

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `position?` | ``"top"`` \| ``"bottom"`` | The position of the text, **`See`** `SPINNER_TEXT_POSITIONS` enum |
| `value` | `string` | The text to show with the spinner |

#### Defined in

src/components/Spinner/index.tsx:47

___

### trackColor

• `Optional` **trackColor**: ``"white"`` \| ``"dark"`` \| ``"light"``

The track color of the spinner,

**`See`**

`SPINNER_TRACK_COLORS` enum

**`Default`**

```ts
"light"
```

#### Defined in

src/components/Spinner/index.tsx:39

___

### variant

• `Optional` **variant**: ``"success"`` \| ``"primary"`` \| ``"secondary"`` \| ``"warning"`` \| ``"danger"`` \| ``"info"`` \| ``"neutral"``

The variant of the spinner,

**`See`**

`SPINNER_VARIANTS` enum

**`Default`**

```ts
"primary"
```

#### Defined in

src/components/Spinner/index.tsx:30
