# Калерия: сайт о занятиях йогой

Одностраничный лендинг: Хатха и Пурна йога для начинающих, Харьков и онлайн.

**Сайт:** https://noirehouse.github.io/kaleriya-site/

## Стек
React 18 + TypeScript + Vite. Стили: обычный CSS с переменными (`src/styles.css`).

## Где что
| Файл | Что внутри |
|---|---|
| `src/content.ts` | **весь текст и контакты сайта**: правки текста делаются здесь |
| `src/components/` | секции страницы (без текста внутри) |
| `src/styles.css` | палитра, шрифты, вёрстка |
| `public/photos/` | фото |
| `.github/workflows/deploy.yml` | сборка и публикация на GitHub Pages при push в `main` |

## Запуск локально (нужен Node.js 20+)
```bash
npm install
npm run dev
```
