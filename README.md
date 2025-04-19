# 📦 CustomSelect — Кастомный селект на чистом JavaScript

CustomSelect — это лёгкий, настраиваемый селект-компонент без зависимостей, поддерживающий одиночный и множественный выбор, скрытый input и события.

---

## 🚀 Возможности

- ✅ Поддержка `single` и `multiple` режимов
- 🎨 Стилизация через классы
- 🔧 Работа с формами через `<input type="hidden">`
- 🎯 Callback-функции `onSelect`, `onRemove`

---

## ⚙️ Использование

### 1. HTML-структура

```html
<div class="custom-select">
  <div class="select-field">
    <div class="selected-options">
      <span class="placeholder"></span>
    </div>
      <div class="arrow-down">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"/>
          </svg>
      </div>
  </div>
  <ul class="options-container">
    <li class="option active" data-value="value1">
      <span class="option-text">value 1</span>
    </li>
    <li class="option disabled" data-value="value2">
      <span class="option-text">value 2</span>
    </li>
  </ul>
</div>
```

### 2. Инициализация


```js
import CustomSelect from './CustomSelect';

const select = new CustomSelect('.custom-select', {
  mode: 'multiple',
  placeholder: 'Выберите элемент',
  showRemoveButton: true,
  name: 'platforms',
  hideOnSelect: false,
  hideOnClear: false,

  onSelect: (value) => console.log('Выбрано:', value),
  onRemove: (value) => console.log('Удалено:', value)
});
```

---


## ⚙️ Конфигурация

| Название           | Тип      | По умолчанию            | Описание                                          |
| ------------------ | -------- | ----------------------- | ------------------------------------------------- |
| `mode`             | string   | `'multiple'`            | Режим: `'single'` или `'multiple'`                |
| `placeholder`      | string   | `'Выберите элемент'`    | Плейсхолдер, если нет выбранных                   |
| `showRemoveButton` | boolean  | `true`                  | Показывать ли кнопку удаления                     |
| `name`             | string   | `'custom-select-value'` | Имя скрытого `<input>`                            |
| `onSelect`         | function | `null`                  | Колбэк при выборе                                 |
| `onRemove`         | function | `null`                  | Колбэк при удалении                               |
| `hideOnSelect`     | boolean  | `false`                 | Закрывать дропдаун при выборе (только для single) |
| `hideOnClear`      | boolean  | `false`                 | Закрывать дропдаун при очистке всех               |

---

## 🔌 Методы

### `setValue(value)`

Устанавливает одно значение в режиме `single`.

```js
select.setValue('value 1');
```

### `setValues([values])`

Устанавливает список значений (только в `multiple` режиме).

```js
select.setValues(['val', 'val2']);
```

### `getValues()`

Возвращает массив выбранных значений.

```js
const values = select.getValues();
```

### `clear()`

Снимает выбор со всех опций.

```js
select.clear();
```

### `reset()`

Полный сброс, включая `<input type="hidden">`

```js
select.reset();
```

### `onSelect(callback)` и `onRemove(callback)`

Назначение callback-функций.

```js
select.onSelect((value) => console.log('Выбрано:', value));
select.onRemove((value) => console.log('Удалено:', value));
```

---

## 🧪 Пример с иконками

```html
<li class="option" data-value="value">
  <i class="sprite"><img src="" alt="icon"></i>
  <span class="option-text">option text</span>
</li>
```

---

## 🧪 Пример с активного по умолчанию

```html
<li class="option active" data-value="value">
  <i class="sprite"><img src="" alt="icon"></i>
  <span class="option-text">option text</span>
</li>
```

---

## 🧪 Пример с disabled

```html
<li class="option disabled" data-value="value">
  <i class="sprite"><img src="" alt="icon"></i>
  <span class="option-text">option text</span>
</li>
```

---



## 📥 Поддержка форм

Компонент создаёт скрытый `<input type="hidden" name="...">`, в котором лежит выбранное значение (`multiple` — через `|`):

```html
<input type="hidden" name="platforms" value="ps4|ps5">
```

---

## 🧩 Совместимость

Работает во всех современных браузерах:

- Chrome / Firefox / Safari / Edge / Opera

---

## 
