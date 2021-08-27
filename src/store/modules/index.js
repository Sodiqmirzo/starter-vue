/* eslint-disable */
// Будем регистрировать модули Vuex с использованием имён их файлов, приведённых к верблюжьему стилю.
import camelCase from "lodash/camelCase";

// Получаем все файлы
const requireModule = require.context(
  // Ищем файлы в текущей директории
  ".",
  // Ищем файлы в поддиректориях
  true,
  // Исключаем файл index.js, равно как и файлы, в именах которых
  // есть строки 'actions', 'mutations', или 'getters' .
  // Кроме того, включаем только файлы с расширением .js
  /^(?!.*(actions|mutations|getters)).*\.js$/,
);

const modules = {};

requireModule.keys().forEach((fileName) => {
  // Избавляемся от расширений файлов для преобразования их имён к верблюжьему стилю
  modules[camelCase(fileName.split("/")[1].replace(/(\.\/|\.js)/g, ""))] = {
    namespaced: true,
    ...requireModule(fileName),
  };
});

export default modules;
