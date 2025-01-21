// eslint-disable-next-line no-undef
const { test, describe, expect, beforeEach } = require('@playwright/test') // eslint-disable-line

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })
})
