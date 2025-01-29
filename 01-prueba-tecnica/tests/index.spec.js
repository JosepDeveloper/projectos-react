// @ts-check
import { test, expect } from '@playwright/test'

const PREFIX_URL = 'https://media'

test('App show fact text and image', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  const factElement = page.getByRole('paragraph')
  const imageElement = page.getByRole('img')

  const textFact = await factElement.textContent()
  const imageUrl = await imageElement.getAttribute('src')


  console.log({ textFact, imageUrl })
  expect(textFact?.length).toBeGreaterThan(0)
  expect(imageUrl?.startsWith(PREFIX_URL)).toBeTruthy()
});

test('App click on the button to get another fact', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  const factElement = page.getByRole('paragraph')
  const imageElement = page.getByRole('img')
  const button = page.getByRole('button')

  const previousTextFact = await factElement.textContent()
  const previousImageUrl = await imageElement.getAttribute('src')

  await button.click()
  await page.waitForTimeout(1000)

  const textFact = await factElement.textContent()
  const imageUrl = await imageElement.getAttribute('src')

  const notEqualTextOrImage = textFact !== previousTextFact || imageUrl !== previousImageUrl

  console.log({ textFact, imageUrl, previousTextFact, previousImageUrl })
  expect(notEqualTextOrImage).toBeTruthy()
})