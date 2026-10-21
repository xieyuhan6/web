import { chromium, expect } from '@playwright/test';
import assert from 'node:assert/strict';
const browser=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
const origin='http://127.0.0.1:5174';
try {
 for(const [name,width,height] of [['desktop',1440,1000],['phone',390,844],['small-phone',320,740],['ipad',768,1024],['ipad-landscape',1024,768]]) {
  const page=await browser.newPage({viewport:{width,height},reducedMotion:'reduce'});
  const errors=[], failed=[];
  page.on('pageerror', e=>errors.push(e.message));
  page.on('response',r=>{if(r.status()>=400)failed.push(`${r.status()} ${r.url()}`)});
  await page.goto(origin,{waitUntil:'networkidle'});
  await expect(page).toHaveTitle('Yuhan Xie | Security, Data & Development');
  await expect(page.locator('h1')).toHaveCount(1);
  await expect(page.locator('.project-card')).toHaveCount(3);
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth), `${name}: overflow`);
  for(const href of await page.locator('a[href^="#"]').evaluateAll(links=>links.map(a=>a.getAttribute('href'))))
   assert(await page.locator(href).count(), `${name}: missing ${href}`);
  for(const img of await page.locator('.project-image img').all()) { await img.scrollIntoViewIfNeeded(); await expect(img).toBeVisible(); assert(await img.evaluate(el=>el.complete && el.naturalWidth>0),'broken project image'); }
  if(width<=800) {
   await page.getByRole('button',{name:'Menu',exact:false}).click();
   await expect(page.locator('#main-navigation')).toBeVisible();
   await page.getByRole('navigation').getByRole('link',{name:'Skills',exact:true}).click();
   await expect(page.locator('#main-navigation')).toBeHidden();
   await expect(page).toHaveURL(/#skills$/);
   await page.getByRole('button',{name:'Menu',exact:false}).click();
   await page.keyboard.press('Escape');
   await expect(page.locator('#main-navigation')).toBeHidden();
  }
  const pdf=await page.request.get(origin+'/Yuhan-Xie-Resume.pdf');
  assert.equal(pdf.status(),200); assert((await pdf.body()).subarray(0,5).toString()==='%PDF-');
  await page.evaluate(()=>window.scrollTo(0,0));
  await page.screenshot({path:`docs/${name}.png`,fullPage:true});
  assert.deepEqual(errors,[],`${name} JavaScript errors`);assert.deepEqual(failed,[],`${name} failed resources`);
  await page.close();
 }
 const page=await browser.newPage({viewport:{width:1440,height:1000}});
 await page.goto(origin,{waitUntil:'networkidle'});
 await page.getByRole('button',{name:'Explore my 3D workspace'}).click();
 await expect(page.locator('canvas')).toBeVisible();
 await page.waitForTimeout(3000);
 await page.locator('.scene-frame').screenshot({path:'docs/3d-workspace.png'});
 await page.close();
 console.log('PASS: five screen sizes, navigation/menu/keyboard, image loading, CV download, anchors, no overflow or page errors, and optional 3D canvas.');
} finally { await browser.close(); }
