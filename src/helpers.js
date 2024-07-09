
/**
 * Утилитарная фукнция создания HTML элемента, вспоминаем:
 * 
 *      0           1        2            3              *- если подаём 'div'
 * EventTarget <- Node <- Element <- HTMLElement <- HTMLDivElement,
 * 
 * где каждый интерфейс расширяет возможность элемента, возвращаемого функцией.
 * Соответственно методы интерфейсов 0 - 3 будут у всех тегов.
 * 
 * @param Принимает в качестве параметра объект со следующими полями { tag, classes, text, attributes }, где
 *  tag - это строка с наименованием тега элемента
 *  classes - массив строк с именами css классов (должны находиться в css файле импортированным в тот файл, в котором используется созданный элемент)
 *  text - строковое текстовое содержимое элемента
 *  attributes - это атрибуты тега <img src... />.
 * 
 * Обратите внимание, что объект document доступен глобально во всех местах проекта (например в js файлах) - он обладает методами для работы со всем DOM деревом.
 * Здесь с его помощью создаётся новый элемент который вам потребуется присоединять к другим HTML документам, меняя тем самым изначально пустую страницу.
 * @returns 
 */

export default function createElement({
  attributes,
  text,
  tag = 'div', // задаём значение по умолчанию равное тегу div
  classes = [] // 
}) {
  const newElement = document.createElement(tag);
  if (classes.length) {
    classes.forEach((cl) => {
      newElement.classList.add(cl);
    });
  }
  if (text) {
    newElement.textContent = text;
  }
  if (attributes) {
    Object.entries(attributes).forEach(([key, val]) => {
      newElement.setAttribute(key, val);
    });
  }
  return newElement;
}
