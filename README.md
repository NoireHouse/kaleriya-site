# Калерия: сайт о занятиях йогой

Одностраничный лендинг: Хатха и Пурна йога для начинающих, Харьков и онлайн.

**Сайт:** https://noirehouse.github.io/kaleriya-site/

## Стек
React 18 + TypeScript + Vite. Стили: CSS с токенами светлой и тёмной темы (`src/styles.css`).
Анимации: Motion. Иконки: Phosphor. Шрифты (Unbounded, Golos Text) подключены локально через Fontsource.
Дизайн проверяется по скиллам taste-skill (design-taste-frontend, redesign-existing-projects).

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
