[next-core-ui](../README.md) / [Exports](../modules.md) / ModalProps

# Interface: ModalProps

## Table of contents

### Properties

- [backdropVisibility](ModalProps.md#backdropvisibility)
- [children](ModalProps.md#children)
- [className](ModalProps.md#classname)
- [closeButtonVisibility](ModalProps.md#closebuttonvisibility)
- [closeOnExternalClick](ModalProps.md#closeonexternalclick)
- [containerClassName](ModalProps.md#containerclassname)
- [onClose](ModalProps.md#onclose)
- [setVisibility](ModalProps.md#setvisibility)
- [size](ModalProps.md#size)
- [verticalAlign](ModalProps.md#verticalalign)
- [visibility](ModalProps.md#visibility)

## Properties

### backdropVisibility

• `Optional` **backdropVisibility**: `boolean`

The visibility state of the backdrop

**`Default`**

`true`

#### Defined in

src/components/Modal/index.tsx:41

___

### children

• **children**: `ReactNode` \| `ReactNode`[]

The content of the modal

**`Example`**

```tsx
<Modal>
 <div>Heading</div>
 <div>Content</div>
 <div>Footer</div>
</Modal>
```

#### Defined in

src/components/Modal/index.tsx:28

___

### className

• `Optional` **className**: `string`

The classes of the modal

#### Defined in

src/components/Modal/index.tsx:64

___

### closeButtonVisibility

• `Optional` **closeButtonVisibility**: `boolean`

The visibility state of the close button

**`Default`**

`true`

#### Defined in

src/components/Modal/index.tsx:56

___

### closeOnExternalClick

• `Optional` **closeOnExternalClick**: `boolean`

Disposing of the modal interface on external interaction

**`Default`**

`true`

#### Defined in

src/components/Modal/index.tsx:73

___

### containerClassName

• `Optional` **containerClassName**: `string`

The classes of the modal container

#### Defined in

src/components/Modal/index.tsx:60

___

### onClose

• `Optional` **onClose**: () => `void`

The function to be called when the modal is closed

#### Type declaration

▸ (): `void`

The function to be called when the modal is closed

##### Returns

`void`

#### Defined in

src/components/Modal/index.tsx:68

___

### setVisibility

• **setVisibility**: `Dispatch`\<`SetStateAction`\<`boolean`\>\>

The function to set the visibility state of the modal

#### Defined in

src/components/Modal/index.tsx:36

___

### size

• `Optional` **size**: ``"full"`` \| ``"sm"`` \| ``"md"`` \| ``"lg"``

The size of the modal,

**`See`**

`MODAL_SIZES` enum

**`Default`**

`md`

#### Defined in

src/components/Modal/index.tsx:46

___

### verticalAlign

• `Optional` **verticalAlign**: ``"center"`` \| ``"top"``

The vertical alignment of the modal

**`Default`**

`center`

#### Defined in

src/components/Modal/index.tsx:51

___

### visibility

• **visibility**: `boolean`

The visibility state of the modal

#### Defined in

src/components/Modal/index.tsx:32
