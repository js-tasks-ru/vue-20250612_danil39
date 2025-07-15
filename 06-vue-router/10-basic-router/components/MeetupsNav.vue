<script setup lang="ts"></script>

<template>
  <nav class="nav">
    <router-link to="/" class="nav__link">Главная</router-link>
    <router-link to="/foo" class="nav__link">Страница Foo</router-link>
    <router-link to="/bar" class="nav__link">Страница Bar</router-link>
    <router-link to="/login" class="nav__link">Вход</router-link>
    <router-link to="/login?from=/foo" class="nav__link">Вход /login?from=/foo</router-link>
    <router-link to="/login?from=/bar" class="nav__link">Вход /login?from=/bar</router-link>
    <router-link to="/register" class="nav__link">Регистрация</router-link>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin-inline-start: var(--spacing-large);
  font-size: var(--font-size-control);
}

.nav__link {
  position: relative;
  display: inline-flex;
  padding: 0 var(--spacing-base);
  color: var(--color-text);
  text-decoration: none;

  &:hover {
    color: var(--color-text-primary);
  }

  &:before {
    content: '';
    position: absolute;
    inset-inline-start: 0;
    inset-block-start: 50%;
    border-radius: 50%;
    width: 5px;
    height: 5px;
    background-color: var(--color-primary-element-light);
    transform: translate(-2px, -50%);
  }
}

@media (min-width: 768px) {
  .nav {
    flex-direction: row;
    align-items: center;
    margin-inline-start: 0;
  }

  .nav__link:first-child:before {
    display: none;
  }
}
</style>
